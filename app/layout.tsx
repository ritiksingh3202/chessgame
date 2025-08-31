import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";
import { ClerkProvider } from "@clerk/nextjs";
import AuthButtons from "./components/AuthButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChessJS",
  description: "A professional chess laboratory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>

          <header className="flex items-center justify-between px-8 py-4 border-b bg-background">

            <Link href="/" className="font-bold text-xl">
              ChessJS
            </Link>

            <nav>
              <ul className="flex items-center gap-8 text-sm font-medium text-foreground/80">
                <li className="hover:text-foreground transition cursor-pointer">
                  How to Play
                </li>
                <li className="hover:text-foreground transition cursor-pointer">
                  About
                </li>
                <li className="hover:text-foreground transition cursor-pointer">
                  Demo
                </li>
              </ul>
            </nav>

            <AuthButtons />

          </header>

          <main className="min-h-[calc(100vh-130px)]">
            {children}
          </main>

          <footer className="p-4 border-t flex justify-center text-sm text-foreground/60">
            © {new Date().getFullYear()} Chess JS
          </footer>

        </ClerkProvider>
      </body>
    </html>
  );
}