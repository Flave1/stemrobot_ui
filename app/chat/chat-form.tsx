"use client"

import type React from "react" // Import React
import { cn } from "@/lib/utils"
import { useChat } from "ai/react"
import { ArrowUpIcon, MessageSquare, FileText, Image, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { AutoResizeTextarea } from "./autoresize-textarea"

function ChatForm({ className, ...props }: React.ComponentProps<"div">) {
  const { messages, input, setInput, append } = useChat({
    api: "/api/chat",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    void append({ content: input, role: "user" })
    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
    }
  }

  const actionWidgets = [
    { icon: MessageSquare, label: "Chat" },
    { icon: FileText, label: "Summarize" },
    { icon: Image, label: "Generate Image" },
    { icon: HelpCircle, label: "Help" },
  ]

  const header = (
    <header className="m-auto flex max-w-2xl flex-col gap-5 text-center">
      <h1 className="text-4xl font-bold leading-none tracking-tight">AI Assistant</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {actionWidgets.map((widget, index) => (
          <Card key={index} className="cursor-pointer hover:bg-accent transition-colors">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <widget.icon className="mb-2 h-8 w-8" />
              <span className="text-sm font-medium">{widget.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </header>
  )

  const messageList = (
    <div className="my-4 flex flex-1 flex-col gap-4 overflow-y-auto">
      {messages.map((message, index) => (
        <div
          key={index}
          data-role={message.role}
          className={cn(
            "max-w-[80%] rounded-xl px-4 py-2 text-sm",
            message.role === "assistant" ? "self-start bg-accent" : "self-end bg-primary text-primary-foreground",
          )}
        >
          {message.content}
        </div>
      ))}
    </div>
  )

  return (
    <TooltipProvider>
      {" "}
      {/* Wrap with TooltipProvider */}
      <div className={cn("flex h-screen w-full flex-col items-stretch p-4 sm:p-8", className)} {...props}>
        <div className="absolute right-4 top-4 z-10">
          <ThemeToggle />
        </div>
        <div className="flex flex-1 flex-col">{messages.length ? messageList : header}</div>
        <form
          onSubmit={handleSubmit}
          className="relative mt-4 flex items-center rounded-lg border bg-background px-4 py-2 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
        >
          <AutoResizeTextarea
            onKeyDown={handleKeyDown}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
            value={input}
            placeholder="Type your message..."
            className="flex-1 resize-none bg-transparent focus:outline-none"
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button type="submit" size="icon" className="ml-2">
                <ArrowUpIcon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={12}>Send</TooltipContent>
          </Tooltip>
        </form>
      </div>
    </TooltipProvider>
  )
}

export default ChatForm;
