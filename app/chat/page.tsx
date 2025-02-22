import { Metadata } from 'next';
import RequireAuth from "@/components/auth/RequireAuth";
import Chat from "./chat";
import { getMetadata } from '@/lib/metadata';

export const metadata: Metadata = getMetadata({
  title: 'AI Trading Chat',
  description: 'Chat with our advanced AI trading assistant for real-time market analysis and personalized trading strategies.',
  openGraph: {
    title: 'AI Trading Chat | Stembots',
    description: 'Get real-time trading insights and personalized strategies through our AI chat interface.'
  }
});

export default function ChatPage() {
  return (
    <RequireAuth>
      <Chat />
    </RequireAuth>
  );
}

