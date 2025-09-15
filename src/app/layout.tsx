import type { Metadata } from "next";
import "./globals.css";

import { JetBrains_Mono } from "next/font/google";
import Layout from "@/components/layout";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patrick's Website",
  description: "Next Application written by Pat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${jetbrains.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
