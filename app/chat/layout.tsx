import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/app/chat/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { AppSidebar } from "@/components/app-sidebar";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Trading Assistant",
  description:
    "Chat with our advanced AI trading assistant for real-time market analysis and personalized trading strategies.",
  openGraph: {
    title: "AI Trading Assistant | Stembots",
    description:
      "Get real-time trading insights and personalized strategies through our AI chat interface.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <SidebarProvider>
          <AppSidebar />
          <div className="relative min-h-screen w-full">
            <SidebarTrigger className="absolute left-1 top-1 z-50" />
            <main className="h-full">{children}</main>
          </div>
        </SidebarProvider>
      </ThemeProvider>
    </div>
  );
}
