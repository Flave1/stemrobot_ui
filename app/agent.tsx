import { RemoteRunnable } from "@langchain/core/runnables/remote";
import { exposeEndpoints, streamRunnableUI } from "@/utils/server";
import "server-only";
import { StreamEvent } from "@langchain/core/tracers/log_stream";
import { EventHandlerFields } from "@/utils/server";
import { Github, GithubLoading } from "@/components/prebuilt/github";
import { createStreamableUI, createStreamableValue } from "ai/rsc";
import { AIMessage } from "@/ai/message";
import {
  CurrencyRatesLoading,
  CurrencyRates,
} from "@/components/prebuilt/currencies";
import { InvoiceLoading, Invoice } from "@/components/prebuilt/invoice";
import {
  CurrentWeatherLoading,
  CurrentWeather,
} from "@/components/prebuilt/weather";
import { InternetSearch, InternetSearchLoading } from "@/components/prebuilt/search";
import { ComponentProps } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/chat";

type ToolComponent = {
  loading: () => JSX.Element;
  final: (props: any) => JSX.Element;
};

type ToolComponentMap = {
  "github-repo": {
    loading: () => JSX.Element;
    final: (props: ComponentProps<typeof Github>) => JSX.Element;
  };
  "invoice-parser": {
    loading: () => JSX.Element;
    final: (props: ComponentProps<typeof Invoice>) => JSX.Element;
  };
  "weather-data": {
    loading: () => JSX.Element;
    final: (props: ComponentProps<typeof CurrentWeather>) => JSX.Element;
  };
  "get-available-currencies": {
    loading: () => JSX.Element;
    final: (props: ComponentProps<typeof CurrencyRates>) => JSX.Element;
  };
  "search-tavily": {
    loading: () => JSX.Element;
    final: (props: ComponentProps<typeof InternetSearch>) => JSX.Element;
  };
};

const TOOL_COMPONENT_MAP: ToolComponentMap = {
  "github-repo": {
    loading: () => <GithubLoading />,
    final: (props) => <Github {...props} />
  },
  "invoice-parser": {
    loading: () => <InvoiceLoading />,
    final: (props) => <Invoice {...props} />,
  },
  "weather-data": {
    loading: () => <CurrentWeatherLoading />,
    final: (props) => <CurrentWeather {...props} />,
  },
  "get-available-currencies": {
    loading: () => <CurrencyRatesLoading />,
    final: (props) => <CurrencyRates {...props} />,
  },
  "search-tavily": {
    loading: () => <InternetSearchLoading />,
    final: (props) => <InternetSearch {...props} />,
  },
};

async function agent(inputs: {
  input: string;
  chat_history: [role: string, content: string][];
  file?: {
    base64: string;
    extension: string;
  };
}) {
  "use server";
  const remoteRunnable = new RemoteRunnable({
    url: API_URL,
  });

  let selectedToolComponent: ToolComponent | null = null;
  let selectedToolUI: ReturnType<typeof createStreamableUI> | null = null;

  /**
   * Handles the 'invoke_model' event by checking for tool calls in the output.
   * If a tool call is found and no tool component is selected yet, it sets the
   * selected tool component based on the tool type and appends its loading state to the UI.
   *
   * @param output - The output object from the 'invoke_model' event
   */
  const handleInvokeModelEvent = (
    event: StreamEvent,
    fields: EventHandlerFields
  ) => {
    const [type] = event.event.split("_").slice(2);

    console.log("event", event.data)
    if (
      type !== "end" ||
      !event.data.output ||
      typeof event.data.output !== "object" ||
      event.name !== "invoke_model"
    ) {
      return;
    }

    if (
      "tool_calls" in event.data.output &&
      event.data.output.tool_calls.length > 0
    ) {
      const toolCall = event.data.output.tool_calls[0];

      if (!(toolCall.type in TOOL_COMPONENT_MAP)) {
        console.error(
          `Invalid tool type: ${toolCall.type}. Please check your implementation or input.`
        );
        return;
      }

      if (!selectedToolComponent && !selectedToolUI) {
        selectedToolComponent = TOOL_COMPONENT_MAP[toolCall.type as keyof ToolComponentMap];

        if (!selectedToolComponent) {
          console.error(
            `No component found for tool type: ${toolCall.type}. Please ensure TOOL_COMPONENT_MAP includes an entry for this type.`
          );
          return;
        }

        if (!selectedToolComponent.loading) {
          console.error(
            `No 'loading' method defined for tool type: ${toolCall.type}`
          );
          return;
        }
        console.log("selectedToolComponent", selectedToolComponent);
        selectedToolUI = createStreamableUI(selectedToolComponent.loading());
        fields.ui.append(selectedToolUI?.value);
      }
    }
  };

  /**
   * Handles the 'invoke_tools' event by updating the selected tool's UI
   * with the final state and tool result data.
   *
   * @param output - The output object from the 'invoke_tools' event
   */
  const handleInvokeToolsEvent = (event: StreamEvent) => {
    const [type] = event.event.split("_").slice(2);
    if (
      type !== "end" ||
      !event.data.output ||
      typeof event.data.output !== "object" ||
      event.name !== "invoke_tools"
    ) {
      return;
    }

    if (selectedToolUI && selectedToolComponent) {
      const toolData = event.data.output.tool_result;
      console.log("toolData", toolData);
      selectedToolUI.done(selectedToolComponent.final(toolData));
    }
  };

  /**
   * Handles the 'on_chat_model_stream' event by creating a new text stream
   * for the AI message if one doesn't exist for the current run ID.
   * It then appends the chunk content to the corresponding text stream.
   *
   * @param streamEvent - The stream event object
   * @param chunk - The chunk object containing the content
   */
  const handleChatModelStreamEvent = (
    event: StreamEvent,
    fields: EventHandlerFields
  ) => {
    if (
      event.event !== "on_chat_model_stream" ||
      !event.data.chunk ||
      typeof event.data.chunk !== "object"
    )
      return;
    if (!fields.callbacks[event.run_id]) {
      const textStream = createStreamableValue();
      fields.ui.append(<AIMessage value={textStream.value} />);
      fields.callbacks[event.run_id] = textStream;
    }

    if (fields.callbacks[event.run_id]) {
      fields.callbacks[event.run_id].append(event.data.chunk.content);
    }
  };

  return streamRunnableUI(
    remoteRunnable,
    {
      input: [
        ...inputs.chat_history.map(([role, content]) => ({
          type: role,
          content,
        })),
        {
          type: "human",
          content: inputs.input,
        },
      ],
    },
    {
      eventHandlers: [
        handleInvokeModelEvent,
        handleInvokeToolsEvent,
        handleChatModelStreamEvent,
      ],
    }
  );
}

export const EndpointsContext = exposeEndpoints({ agent });
