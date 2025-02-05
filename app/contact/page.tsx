"use client"

import { useState, useEffect, useRef } from "react"
import { useChat } from "ai/react"
import { Manrope } from "next/font/google"
import { useSession } from "next-auth/react"
import Header from "@/components/prebuilt/header"

const manrope = Manrope({ subsets: ["latin"] })

type UserInfo = {
  fullName: string
  email: string
  phone: string
  address: string
  additionalInfo: string
}

export default function ContactUs() {
  const { data: session } = useSession()
  const [userInfo, setUserInfo] = useState<UserInfo>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    additionalInfo: "",
  })
  
  const chatEndRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/contact",
    initialMessages: [
      {
        id: "1",
        role: "system",
        content:
          "You are a helpful assistant for a trading platform called Stembots. Your task is to collect user information for contact purposes. Ask for their full name, email, phone, address, and any additional information they want to share. Be conversational and friendly.",
      },
      {
        id: "2",
        role: "assistant",
        content:
          "Hello! Welcome to Stembots. I'm here to help you get in touch with our team. To start, could you please tell me your full name?",
      },
    ],
  })

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatEndRef])

  useEffect(() => {
    if (session?.user) {
      setUserInfo((prevInfo) => ({
        ...prevInfo,
        fullName: session.user.name || "",
        email: session.user.email || "",
      }))
    }
  }, [session])

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(e)
  }

  return (
    <>
    <Header />
    <main className="flex items-center justify-center p-4 h-[calc(100vh-80px)]">
          <div className="w-full max-w-2xl bg-gray-900 bg-opacity-80 rounded-xl shadow-lg backdrop-blur-sm p-6 flex flex-col h-full">
            <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
            <div className="h-[calc(100vh-300px)] min-h-[400px] flex flex-col overflow-y-auto mb-4 p-4 bg-gray-800 rounded-lg">
              <div className="flex-grow">
                {messages.filter(d => d.id !== "1").map((m) => (
                  <div key={m.id} className={`mb-4 ${m.role === "user" ? "text-right" : "text-left"}`}>
                    <span
                      className={`inline-block p-2 rounded-lg ${
                        m.role === "user" ? "bg-blue-600 text-white" : "bg-gray-700 text-white"
                      }`}
                    >
                      {m.content}
                    </span>
                  </div>
                ))}
              </div>
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleFormSubmit} className="flex">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                className="flex-grow px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition duration-150 ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
        </main>
    </>
  )
}

