import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/navbar";

export const metadata: Metadata = {
  title: "SaaS Landing Template",
  description: "Landing Page template.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
