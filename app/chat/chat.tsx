"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { EndpointsContext } from "@/app/agent";
import { useActions } from "@/utils/client";
import { LocalContext } from "@/app/shared";
import { HumanMessageText } from "../../components/prebuilt/message";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Sidebar } from "./sidebar";
import {
  ArrowUpIcon,
  Bitcoin,
  DollarSign,
  HelpCircle,
  Menu,
  TrendingUp,
} from "lucide-react";
import { AutoResizeTextarea } from "./autoresize-textarea";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ExitIcon } from "@radix-ui/react-icons";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// export interface ChatProps {}

function convertFileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as string;
      resolve(base64String.split(",")[1]); // Remove the data URL prefix
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}

function FileUploadMessage({ file }: { file: File }) {
  return (
    <div className="flex w-full max-w-fit ml-auto">
      <p>File uploaded: {file.name}</p>
    </div>
  );
}

export default function Chat({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const actions = useActions<typeof EndpointsContext>();
  const [elements, setElements] = useState<JSX.Element[]>([]);
  const [history, setHistory] = useState<[role: string, content: string][]>([]);
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();

  async function onSubmit(input: string) {
    const newElements = [...elements];
    let base64File: string | undefined = undefined;
    const fileExtension = selectedFile?.type.split("/")[1];
    if (selectedFile) {
      base64File = await convertFileToBase64(selectedFile);
    }
    const element = await actions.agent({
      input,
      chat_history: history,
      file:
        base64File && fileExtension
          ? {
              base64: base64File,
              extension: fileExtension,
            }
          : undefined,
    });

    newElements.push(
      <div className="flex flex-col w-full gap-1 mt-auto" key={history.length} >
        {selectedFile && <FileUploadMessage file={selectedFile} />}
        <HumanMessageText content={input} />
        <div className="flex flex-col gap-1 w-full max-w-fit mr-auto" >
          {element.ui}
        </div>
      </div>
    );

    // consume the value stream to obtain the final string value
    // after which we can append to our chat history state
    (async () => {
      const lastEvent = await element.lastEvent;
      if (Array.isArray(lastEvent)) {
        if (lastEvent[0].invoke_model && lastEvent[0].invoke_model.result) {
          setHistory((prev) => [
            ...prev,
            ["human", input],
            ["ai", lastEvent[0].invoke_model.result],
          ]);
        } else if (lastEvent[1].invoke_tools) {
          setHistory((prev) => [
            ...prev,
            ["human", input],
            [
              "ai",
              `Tool result: ${JSON.stringify(lastEvent[1].invoke_tools.tool_result, null)}`,
            ],
          ]);
        } else {
          setHistory((prev) => [...prev, ["human", input]]);
        }
      } else if (lastEvent.invoke_model && lastEvent.invoke_model.result) {
        setHistory((prev) => [
          ...prev,
          ["human", input],
          ["ai", lastEvent.invoke_model.result],
        ]);
      }
    })();

    setElements(newElements);
    setInput("");
    setSelectedFile(undefined);
  }

  const handleKeyDown = async (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      console.log("e", e);
      await onSubmit(e.target.value);
      // handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
    }
  };

  const actionWidgets = [
    {
      icon: DollarSign,
      label: "BTC/USD",
      suggestion: "What is the price of btcusd today?",
    },
    {
      icon: Bitcoin,
      label: "Crypto Prices",
      suggestion: "Get the latest price of BTC/USD",
    },
    {
      icon: TrendingUp,
      label: "Market Analysis",
      suggestion: "Analyze current market trends",
    },
    {
      icon: HelpCircle,
      label: "Trading Help",
      suggestion: "Get help with trading strategies",
    },
  ];

  const header = (
    <header className="m-auto flex max-w-2xl flex-col gap-5 text-center">
      <h1 className="text-4xl font-bold leading-none tracking-tight">
        Trading Assistant
      </h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {actionWidgets.map((widget, index) => (
          <Card key={index} className="cursor-pointer hover:bg-accent">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <widget.icon className="mb-2 h-6 w-6" />
              <span
                onClick={async () => await onSubmit(widget.suggestion)}
                className="text-xs font-medium"
              >
                {widget.label}
              </span>
              <p
                onClick={async () => await onSubmit(widget.suggestion)}
                className="mt-1 text-[10px] text-muted-foreground"
              >
                {widget.suggestion}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </header>
  );

  return (
    <TooltipProvider>
      <div className={cn("flex h-screen w-full", className)} {...props}>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} messages={[]} />
        <div className="flex flex-1 flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-4">
              {user && (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">
                    {user.displayName}
                  </span>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.photoURL || ''} />
                    <AvatarFallback>
                      {user.displayName?.charAt(0) || user.email?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>
              )}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/">
                    <Button variant="ghost" size="icon">
                      <ExitIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Exit Chat</TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <div className="w-full md:w-[70%] flex flex-1 flex-col p-4 sm:p-8">
              <div className="flex flex-1 overflow-y-auto max-h-screen max-h-[80vh] flex-col-reverse">
                {!history.length && header}
                <LocalContext.Provider value={onSubmit}>
                  <div className="flex flex-col w-full gap-1 mt-auto ">
                    {elements}
                  </div>
                </LocalContext.Provider>
              </div>
              <form
                onSubmit={async (e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  await onSubmit(input);
                }}
                className="relative mt-4 flex items-center justify-center w-full"
              >
                <div className="w-full relative flex items-center rounded-lg border bg-background px-3 py-1 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                  <AutoResizeTextarea
                    onKeyDown={handleKeyDown}
                    onChange={(e: string) => setInput(e)}
                    value={input}
                    placeholder="Type your message..."
                    className="flex-1 resize-none bg-transparent text-sm focus:outline-none"
                  />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="submit"
                        size="icon"
                        className="ml-2 h-8 w-8"
                      >
                        <ArrowUpIcon className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={12}>Send</TooltipContent>
                  </Tooltip>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
