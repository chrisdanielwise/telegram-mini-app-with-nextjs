import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import {validateTelegramWebAppData as TelegramAuth} from "./components/TelegramAuth"
import { getSession } from './utils/session';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Telegram MIni App",
  description: "A simple Telegram mini app using Next,js 14",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession()
  return (
    <html lang="en">
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive"/>
      </head>
      <body className={inter.className}>
      <h1 className="text-4xl font-bold mb-8">Jwt Authentication for Telegram Mini Apps</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
        {children}
        <TelegramAuth />
        </body>
    </html>
  );
}
