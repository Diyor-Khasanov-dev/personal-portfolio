import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import AOSInit from "@/components/AOSInit";

export const metadata: Metadata = {
  title: "Diyor Khasanov | Software Engineer. Co-Founder @ A.L.I.A",
  description:
    "Portfolio of Diyor Khasanov - Software Engineer & Co-Founder @ A.L.I.A. Fullstack, mobile, and senior frontend engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-black text-zinc-100 font-sans selection:bg-zinc-800 selection:text-zinc-100">
        <AOSInit />
        <ScrollProgress />
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-radial-gradient pointer-events-none z-0 animate-pulse-glow" />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
