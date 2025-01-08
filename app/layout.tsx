import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { ReactNode } from "react";
import { EndpointsContext } from "./agent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Crypto / Forex trade robot",
  description: "Crypto / trade trade robot",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//       </head>
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-J11BX1543V"></script>
// <Script id="google-analytics" strategy="afterInteractive">
//   {`
//     window.dataLayer = window.dataLayer || [];
//     function gtag(){dataLayer.push(arguments);}
//     gtag('js', new Date());
//     gtag('config', 'G-J11BX1543V');
//   `}
// </Script>

//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}

//       </body>
//     </html>
//   );
// }

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
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
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <EndpointsContext>{props.children}</EndpointsContext>
        </div>
      </body>
    </html>
  );
}
