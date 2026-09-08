"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  Calendar,
  MessageSquare,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  Building2,
  Globe,
  Clock,
  ShieldCheck,
  Zap,
} from "lucide-react";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.64a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  const socialLinks = [
    {
      name: "GitHub",
      handle: "@Diyor-Khasanov-dev",
      description: "Open source projects, repositories & code",
      href: "https://github.com/Diyor-Khasanov-dev",
      icon: GithubIcon,
      badge: "Code",
      color: "hover:border-zinc-500",
    },
    {
      name: "LinkedIn",
      handle: "Diyor Khasanov",
      description: "Professional background & career milestones",
      href: "https://linkedin.com/in/diyor-khasanov",
      icon: LinkedinIcon,
      badge: "Network",
      color: "hover:border-sky-500/50",
    },
    {
      name: "Telegram",
      handle: "@Diyor_Khasanov_dev",
      description: "Fastest response for quick chats & inquiries",
      href: "https://t.me/Diyor_Khasanov_dev",
      icon: Send,
      badge: "Instant",
      color: "hover:border-sky-400/50",
    },
    {
      name: "Calendly",
      handle: "15-Min Meeting",
      description: "Book an architecture discussion or hire call",
      href: "https://calendly.com/bdiyorxasanov",
      icon: Calendar,
      badge: "Schedule",
      color: "hover:border-amber-500/50",
    },
  ];

  return (
    <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-12 overflow-hidden">
      {/* Header Banner */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <Mail className="w-3.5 h-3.5 text-emerald-400" />
          <span>Get In Touch & Hire Me</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Let’s Build Something Exceptional Together
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
          Whether you need a senior frontend engineer, fullstack web app, mobile build, or technical co-founder consultation — I&apos;m ready to collaborate. Response time is typically under 24 hours.
        </p>
      </div>

      {/* Social Links Ribbon */}
      <div data-aos="fade-up" data-aos-delay="150" className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Connect Across Platforms</span>
          </h2>
          <span className="text-[11px] font-mono text-zinc-500">4 Channels</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:bg-zinc-900/60 transition-all duration-200 group flex flex-col justify-between space-y-3 shadow-sm hover:-translate-y-1 ${social.color}`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {social.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {social.name}
                    </h3>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className="text-xs font-mono text-zinc-400 truncate">{social.handle}</p>
                  <p className="text-[11px] text-zinc-500 line-clamp-2 leading-relaxed font-sans pt-1">
                    {social.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Direct Details + Interactive Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-2">
        {/* Left Column: Direct Action Badges */}
        <div data-aos="fade-right" data-aos-delay="200" className="md:col-span-2 space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct Channels</span>
          </h2>

          {/* Quick Email Card */}
          <div className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-950/60 space-y-3 relative overflow-hidden group shadow-sm hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Primary Email</span>
              </div>
              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-[11px] font-mono text-zinc-300 hover:text-white transition-all active:scale-95 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-zinc-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-sm font-mono font-semibold text-white break-all">
              {emailAddress}
            </p>
          </div>

          {/* Schedule Calendly Meeting Card */}
          <a
            href="https://calendly.com/bdiyorxasanov"
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all flex items-center justify-between group shadow-sm"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Video Call / Intro</span>
              </div>
              <p className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                Book a 15-min Call
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* Telegram Chat Link Card */}
          <a
            href="https://t.me/Diyor_Khasanov_dev"
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all flex items-center justify-between group shadow-sm"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Send className="w-4 h-4 text-sky-400" />
                <span>Telegram DM</span>
              </div>
              <p className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                @Diyor_Khasanov_dev
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* Location & Work Info */}
          <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 text-xs font-mono text-zinc-400 space-y-2.5">
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Tashkent, Uzbekistan (GMT+5)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Software Engineer & Co-Founder @ A.L.I.A</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Avg Response Time: &lt; 24h</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Message Form */}
        <div data-aos="fade-left" data-aos-delay="300" className="md:col-span-3 space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Send Direct Message</span>
          </h2>

          <div className="p-6 sm:p-7 rounded-xl border border-zinc-800/80 bg-zinc-950/60 space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Inquiry Form</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                Active & Monitored
              </span>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <Check className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white">Message Delivered!</h3>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed font-sans">
                    Thank you for reaching out. Your note has been dispatched directly. I will review it and follow up via email shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 text-xs font-mono rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 flex items-center justify-between">
                      <span>Your Name</span>
                      <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 flex items-center justify-between">
                      <span>Your Email</span>
                      <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="Fullstack Web Project / Hiring Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 flex items-center justify-between">
                    <span>Message</span>
                    <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your project requirements, scope, or job opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors font-mono resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-lg bg-white hover:bg-zinc-100 text-zinc-950 font-semibold text-xs font-mono transition-all flex items-center justify-center gap-2 group shadow-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send className="w-3.5 h-3.5 text-zinc-950 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
