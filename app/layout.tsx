import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { ReactNode } from "react";
import { EndpointsContext } from "./agent";
import { Inter } from "next/font/google";
import SessionWrapper from "@/components/SessionWrapper";

export const metadata: Metadata = {
  title: "AI trade Assistant",
  description: "AI trade Assistant",
};

// const manrope = Manrope({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout(props: { children: ReactNode }) {
  return (
    <SessionWrapper>
      <html lang="en" suppressHydrationWarning>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J11BX1543V"
        ></script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J11BX1543V');
        `}
        </Script>
        <body>
          <div
            className={`relative w-full h-screen bg-black text-white overflow-hidden  flex min-h-screen flex-col antialiased   ${inter.className}`}
          >
            <EndpointsContext>{props.children}</EndpointsContext>
          </div>
        </body>
      </html>
    </SessionWrapper>
  );
}
