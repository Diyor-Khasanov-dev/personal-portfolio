import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Software Engineer & Architect | Developer Portfolio",
  description:
    "Minimalist developer portfolio designed with high-craft aesthetic inspired by Vercel, Resend, and Linear.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-black text-zinc-100 font-sans selection:bg-zinc-800 selection:text-zinc-100">
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-radial-gradient pointer-events-none z-0" />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
