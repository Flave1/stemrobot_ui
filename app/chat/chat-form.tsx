"use client"

import { cn } from "@/lib/utils"
import { useChat } from "ai/react"
import { ArrowUpIcon, DollarSign, Bitcoin, TrendingUp, HelpCircle, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
// import { AutoResizeTextarea } from "@/components/autoresize-textarea"
// import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
// import { Sidebar } from "@/components/sidebar"
import type React from "react"
import { Sidebar } from "./sidebar"
import { AutoResizeTextarea } from "./autoresize-textarea"

export function ChatForm({ className, ...props }: React.ComponentProps<"div">) {
  const { messages, input, setInput, append } = useChat({
    api: "/api/chat",
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim()) {
      void append({ content: input, role: "user" })
      setInput("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
    }
  }

  const actionWidgets = [
    { icon: DollarSign, label: "Trade Currency", suggestion: "What currency do you want to trade today?" },
    { icon: Bitcoin, label: "Crypto Prices", suggestion: "Get the latest price of BTC/USD" },
    { icon: TrendingUp, label: "Market Analysis", suggestion: "Analyze current market trends" },
    { icon: HelpCircle, label: "Trading Help", suggestion: "Get help with trading strategies" },
  ]

  const header = (
    <header className="m-auto flex max-w-2xl flex-col gap-5 text-center">
      <h1 className="text-4xl font-bold leading-none tracking-tight">Trading Assistant</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {actionWidgets.map((widget, index) => (
          <Card key={index} className="cursor-pointer hover:bg-accent transition-colors">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <widget.icon className="mb-2 h-6 w-6" />
              <span className="text-xs font-medium">{widget.label}</span>
              <p className="mt-1 text-[10px] text-muted-foreground">{widget.suggestion}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </header>
  )

  const messageList = (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
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
      <div className={cn("flex h-screen w-full", className)} {...props}>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} messages={messages} />
        <div className="flex flex-1 flex-col">
          <div className="flex items-center justify-between p-4">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
            {/* <ThemeToggle /> */}
          </div>
          <div className="flex flex-1 flex-col items-center">
            <div className="w-full md:w-[70%] flex flex-1 flex-col p-4 sm:p-8">
              <div className="flex flex-1 flex-col">{messages.length ? messageList : header}</div>
              <form onSubmit={handleSubmit} className="relative mt-4 flex items-center justify-center w-full">
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
                      <Button type="submit" size="icon" className="ml-2 h-8 w-8">
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
  )
}

