import Markdown from "react-markdown";

export interface MessageTextProps {
  content: string;
}

export function AIMessageText(props: MessageTextProps) {
  return (
    <div className="flex mr-auto w-fit max-w-[700px] bg-gray-400 rounded-md px-2 py-1 mt-3">
      <div className="text-normal text-gray-50 text-left break-words">
        <Markdown>{props.content}</Markdown>
      </div>
    </div>
  );
}

export function HumanMessageText(props: MessageTextProps) {
  return (
    <div className="flex ml-auto w-fit max-w-[700px] bg-gray-800 rounded-lg p-3">
      <div className="text-normal text-white text-left break-words">
        {props.content}
      </div>
    </div>
  );
}
