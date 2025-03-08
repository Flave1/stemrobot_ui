"use client";

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Plus, LogOut } from "lucide-react"
import type { Message } from "ai"
import type React from "react" // Added import for React
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MessageSquare, Settings } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
  messages: Message[]
}

export function Sidebar({ open, setOpen, messages }: SidebarProps) {
  const tempmessages: Message = {
    content: "History not available",
    id: "1",
    role: "assistant"
  }
  
  const router = useRouter();
  
  // Force sidebar open on initial render
  useEffect(() => {
    setOpen(true);
  }, [setOpen]);
  
  const handleNewChat = () => {
    // Clear current chat and start a new one
    // You might want to add logic to save the current chat before clearing
    router.push('/chat');
    setOpen(false);
  }
  
  const handleExit = () => {
    // Navigate to the landing page or home
    router.push('/');
  }

  return (
    <div
      className={cn(
        "bg-black/90 backdrop-blur-sm fixed inset-y-0 left-0 z-50 w-full sm:w-[300px] border-r border-gray-800 transition-transform duration-300 ease-in-out",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between px-4 h-14 border-b border-gray-800">
          <div className="flex items-center">
            <MessageSquare className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-lg font-semibold text-white">Chat History</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-white"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
        
        {/* New Chat Button */}
        <Button
          variant="ghost"
          className="flex items-center justify-start px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-none border-b border-gray-800"
          onClick={handleNewChat}
        >
          <Plus className="h-5 w-5 mr-2" />
          <span>New Chat</span>
        </Button>
        
        <ScrollArea className="flex-1 px-4 py-2">
          <div className="space-y-2">
            {messages.length > 0
              ? messages
                  .filter(message => message.role === "user")
                  .map(message => (
                    <Button
                      key={message.id}
                      variant="ghost"
                      className="w-full justify-start text-gray-400 hover:text-white"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      <span className="truncate">
                        {message.content.substring(0, 30)}
                        {message.content.length > 30 ? "..." : ""}
                      </span>
                    </Button>
                  ))
              : (
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-400 hover:text-white"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span className="truncate">
                    {tempmessages.content}
                  </span>
                </Button>
              )}
          </div>
        </ScrollArea>
        
        <div className="border-t border-gray-800 p-4 space-y-2">
          {/* Settings Button */}
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:text-white"
            asChild
          >
            <Link href="/settings">
              <Settings className="h-5 w-5 mr-2" />
              <span>Settings</span>
            </Link>
          </Button>
          
          {/* Exit Button */}
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:text-white"
            onClick={handleExit}
          >
            <LogOut className="h-5 w-5 mr-2" />
            <span>Exit</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

