'use client'

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupAction
} from "@/app/chat/sidebar"
import { Bot, Plus, MessageSquare } from "lucide-react"
import { useChatStore } from "@/stores/chat-store"
import ThemeSwitcher from "@/components/theme-switcher"

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { chats, addChat } = useChatStore()

  const handleAddChat = () => {
    const newChat = addChat()
    router.push(`/chat/trade/${newChat.id}`)
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/chat">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Bot className="size-4" />
                </div>
                <span className="font-semibold">Stembots Trading</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Chats History</SidebarGroupLabel>
          <SidebarGroupAction title="Add Project" onClick={handleAddChat}>
            <Plus /> <span className="sr-only">New Chat</span>
          </SidebarGroupAction>
          <SidebarMenu>
            {chats.map((chat) => (
              <SidebarMenuItem key={chat.id}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === `/chat/trade/${chat.id}`}
                  className="hover:bg-muted/50"
                >
                  <Link href={`/chat/trade/${chat.id}`}>
                    <MessageSquare className="size-4" />
                    <span className="truncate">{chat.name || "Trading Chat"}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex flex-col items-center gap-4">
          <ThemeSwitcher />
          <span className="text-sm text-muted-foreground">
            Made by{" "}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              Stembots
            </a>
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}