import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>React 19 Examples</MenubarTrigger>
            <MenubarContent>
              <Link href="/"><MenubarItem>
                Composition / Interleaved
              </MenubarItem></Link>
              <Link href="/suspense"><MenubarItem>Suspense</MenubarItem></Link>
              <MenubarSeparator />
              <Link href="/actions"><MenubarItem>Server Actions</MenubarItem></Link>
              <Link href="/optimistic"><MenubarItem>useOptimistic</MenubarItem></Link>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        {children}
      </body>
    </html>
  );
}
