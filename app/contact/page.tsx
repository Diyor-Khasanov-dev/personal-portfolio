"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  Calendar,
  MessageSquare,
  Copy,
  Check,
  CheckCircle2,
  ArrowUpRight,
  Building2,
  Globe,
  Sparkles,
} from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailAddress = "bdiyorxasanov@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-12 overflow-hidden">
      {/* Header Banner */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 text-zinc-200 text-xs font-mono">
          <Mail className="w-3.5 h-3.5 text-whitesmoke" />
          <span>Get In Touch & Hire Me</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Let’s Build Something Great
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
          Whether you have a fullstack project, senior frontend engineering role, mobile app build, or architectural consultation — my inbox is open.
        </p>
      </div>

      {/* Main Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Quick Email Bento Card */}
        <BentoCard
          colSpan="col-span-12 md:col-span-4"
          accentGradient="from-whitesmoke via-zinc-400 to-transparent"
          aosDelay={150}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Mail className="w-4 h-4 text-whitesmoke" />
                <span>Direct Email</span>
              </div>
              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-[11px] font-mono text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-zinc-100" />
                    <span className="text-zinc-100">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-zinc-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-sm font-mono font-semibold text-white break-all pt-1">
              {emailAddress}
            </p>
            <p className="text-xs text-zinc-400 font-sans">
              Always open for fullstack engineering, contract roles, and tech consultations.
            </p>
          </div>
        </BentoCard>

        {/* Schedule Calendly Meeting Bento Card */}
        <BentoCard
          colSpan="col-span-12 md:col-span-4"
          accentGradient="from-amber-500/80 via-yellow-400/50 to-transparent"
          aosDelay={200}
        >
          <a
            href="https://calendly.com/bdiyorxasanov"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col justify-between h-full space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Calendly Meeting</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <div>
              <p className="text-base font-semibold text-white group-hover:text-amber-300 transition-colors">
                Book 15-min Discovery Call
              </p>
              <p className="text-xs text-zinc-400 font-sans mt-1">
                Schedule a 1-on-1 video discussion directly on Calendly.
              </p>
            </div>
          </a>
        </BentoCard>

        {/* Telegram Direct Chat Bento Card */}
        <BentoCard
          colSpan="col-span-12 md:col-span-4"
          accentGradient="from-teal-500/80 via-sky-400/50 to-transparent"
          aosDelay={250}
        >
          <a
            href="https://t.me/Diyor_Khasanov_dev"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col justify-between h-full space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Send className="w-4 h-4 text-teal-400" />
                <span>Telegram Direct</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <div>
              <p className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">
                @Diyor_Khasanov_dev
              </p>
              <p className="text-xs text-zinc-400 font-sans mt-1">
                Fastest way to reach me for immediate inquiries or quick updates.
              </p>
            </div>
          </a>
        </BentoCard>

        {/* Location / Status Info Bento Card */}
        <BentoCard
          colSpan="col-span-12 md:col-span-4"
          accentGradient="from-indigo-500/80 via-blue-500/50 to-transparent"
          aosDelay={300}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Globe className="w-4 h-4 text-indigo-400" />
              <span>Location & Role</span>
            </div>

            <div className="space-y-2 text-xs font-mono text-zinc-300 pt-1">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-zinc-500" />
                <span>Samarkand, Uzbekistan (GMT+5)</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-zinc-500" />
                <span>Co-Founder @ A.L.I.A</span>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Direct Message Interactive Form Bento Card (Large 2-column card) */}
        <BentoCard
          colSpan="col-span-12 md:col-span-8"
          accentGradient="from-whitesmoke via-zinc-400 to-transparent"
          aosDelay={350}
          glow
        >
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <MessageSquare className="w-4 h-4 text-whitesmoke" />
                <span>Send Direct Message</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Quick Response
              </span>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mx-auto text-whitesmoke">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white">Message Dispatched!</h3>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                  Thank you for reaching out. I will review your note and respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 text-xs font-mono rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors mt-2 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Hiring Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs font-mono transition-all flex items-center justify-center gap-2 group shadow-sm cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5 text-zinc-900 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </BentoCard>
      </div>
    </main>
  );
}
