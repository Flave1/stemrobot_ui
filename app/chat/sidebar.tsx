"use client";

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X } from "lucide-react"
import type { Message } from "ai"
import type React from "react" // Added import for React
import { ExitIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MessageSquare, Settings } from "lucide-react"

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
  messages: Message[]
}

export function Sidebar({ open, setOpen, messages }: SidebarProps) {
  const tempmessages: Message = {
    content: "History not available",
    role: "system",
    id: "id"
  }
  if(messages.length == 0){
    messages.push(tempmessages)
  }
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-all duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      />
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-gray-900/90 backdrop-blur-sm border-r border-gray-800 transition-transform duration-300 transform",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <h2 className="text-lg font-semibold text-white">Chat History</h2>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {messages.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-4">
                  No chat history yet
                </p>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <MessageSquare className="h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium text-gray-200">
                        Chat {index + 1}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 truncate">
                      {message.content}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="p-4 border-t border-gray-800">
            <div className="space-y-3">
              <Link href="/settings" className="block">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800/50"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Button>
              </Link>
              <div className="text-xs text-gray-400 text-center">
                <p>Stembots Trading Assistant</p>
                <p className="mt-1">Version 1.0.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

