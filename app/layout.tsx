// overall layout and strcuture 
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
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
  title: "ChessJS",
  description: "A professional chess laboratory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="flex items-center justify-between p-4 px-8 border-b bg-background">
          <div className="flex-1">
            <Link href="/" className="font-bold text-xl">ChessJS</Link>
          </div>

          <nav>
            <ul className="flex items-center gap-8 text-sm font-medium text-foreground/80">
              <li className="hover:text-foreground cursor-pointer transition">
                How to Play
              </li>
              <li className="hover:text-foreground cursor-pointer transition">
                About
              </li>
              <li className="hover:text-foreground cursor-pointer transition">
                Demo
              </li>
            </ul>
          </nav>

          <div className="flex-1 flex justify-end">
            <button className="bg-foreground text-background px-5 py-2 rounded-md font-medium hover:opacity-90 transition cursor-pointer">
              Login
            </button>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="p-4 border-t flex justify-center text-sm text-gray-500">
          © {new Date().getFullYear()} Chess Lab
        </footer>
      </body>
    </html>
  );
}