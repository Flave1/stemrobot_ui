"use client";

import { useState, useEffect, useRef } from "react";
import { useChat } from "ai/react";
import { Manrope } from "next/font/google";
import Header from "@/components/prebuilt/header";
import { useAuth } from "@/contexts/AuthContext";
import MarketTicker from "@/components/prebuilt/marketTicker";

const manrope = Manrope({ subsets: ["latin"] });

type UserInfo = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  additionalInfo: string;
};

export default function ContactComponent() {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    additionalInfo: "",
  });
  const chatEndRef = useRef<HTMLDivElement>(null);

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
  });

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col mt-16">
        <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Chat Container */}
          <div className="flex-1 flex flex-col bg-gray-900/50 rounded-xl shadow-lg backdrop-blur-sm">
            {/* Chat Header */}
            <div className="px-4 py-6 sm:px-6 border-b border-gray-800">
              <h1 className="text-xl sm:text-2xl font-bold text-center">
                Contact Us
              </h1>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 min-h-[calc(100vh-16rem)]">
              <div className="space-y-4">
                {messages.filter(d => d.id !== '1').map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] sm:max-w-[70%] px-4 py-2 rounded-lg ${
                        m.role === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-800 text-white"
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 sm:p-6 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm relative z-10">
              <form onSubmit={handleFormSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-2 bg-gray-800/50 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Type your message..."
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out flex-shrink-0"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-0">
        <MarketTicker />
      </div>
    </div>
  );
} 