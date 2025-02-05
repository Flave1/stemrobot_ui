import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X } from "lucide-react"
import type { Message } from "ai"
import type React from "react" // Added import for React
import { ExitIcon } from "@radix-ui/react-icons"
import Link from "next/link"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  setOpen: (open: boolean) => void
  messages: Message[]
}

export function Sidebar({ open, setOpen, messages, className, ...props }: SidebarProps) {
  const tempmessages: Message = {
    content: "History not available",
    role: "system",
    id: "id"
  }
  if(messages.length == 0){
    messages.push(tempmessages)
  }
  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-background transition-transform duration-300 ease-in-out",
        open ? "translate-x-0" : "-translate-x-full",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">Chat History</h2>
      
        <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <ScrollArea className="flex-1">
        {messages.map((message, index) => (
          <div key={index} className="border-b border-border p-4 text-sm">
            <p className="font-semibold">{message.role === "user" ? "You" : "Assistant"}</p>
            <p className="mt-1 line-clamp-2">{message.content}</p>
          </div>
        ))}
      </ScrollArea>
      <div className="border-t border-border p-4 text-xs text-muted-foreground">
        <p>
          Trading involves significant risk and can result in the loss of your invested capital. Ensure that
          you fully understand the risks involved and seek independent advice if necessary.
        </p>
      </div>
    </div>
  )
}

