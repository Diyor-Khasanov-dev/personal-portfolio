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
  User,
  AtSign,
  Tag,
  CheckCircle2,
  Loader2,
  Briefcase,
  Code2,
  Smartphone,
  Layers,
} from "lucide-react";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    inquiryType: "Fullstack Engineering",
    message: "",
  });

  const emailAddress = "bdiyorxasanov@gmail.com";

  const inquiryTypes = [
    { id: "Fullstack Engineering", label: "Fullstack Role", icon: Code2 },
    { id: "Frontend Architecture", label: "Senior Frontend", icon: Layers },
    { id: "Mobile App Development", label: "Mobile Build", icon: Smartphone },
    { id: "Co-Founder / Leadership", label: "Co-Founder / Lead", icon: Briefcase },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      username: "@Diyor-Khasanov-dev",
      url: "https://github.com/Diyor-Khasanov-dev",
      badge: "Open Source",
      description: "Code repositories, architecture patterns & side projects",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      username: "in/diyor-khasanov",
      url: "https://linkedin.com/in/diyor-khasanov",
      badge: "Professional",
      description: "Career history, endorsements & engineering network",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.64a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
        </svg>
      ),
    },
    {
      name: "Telegram Direct",
      username: "@Diyor_Khasanov_dev",
      url: "https://t.me/Diyor_Khasanov_dev",
      badge: "Instant Chat",
      description: "Fastest response channel for quick questions & async syncs",
      icon: Send,
    },
    {
      name: "Calendly Meeting",
      username: "bdiyorxasanov",
      url: "https://calendly.com/bdiyorxasanov",
      badge: "Schedule Call",
      description: "Book a 15-minute intro or technical architecture discussion",
      icon: Calendar,
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);

    // Simulate API request delay for smooth UX
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: "",
      email: "",
      subject: "",
      inquiryType: "Fullstack Engineering",
      message: "",
    });
  };

  return (
    <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-12 overflow-hidden">
      {/* Header Banner */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono shadow-[0_0_12px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for New Roles & Contracts</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-400 text-xs font-mono">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Response Guarantee: &lt; 24h</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Let’s Build Something Exceptional
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
          Whether you’re looking for a Senior Frontend Engineer, Fullstack Architect, Mobile Lead, or Co-Founder partnership — I’m always open to discussing new engineering challenges.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Action & Social Channels (5 cols) */}
        <div data-aos="fade-right" data-aos-delay="200" className="lg:col-span-5 space-y-4">
          {/* Direct Email Card */}
          <div className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-950/70 space-y-3 relative overflow-hidden group shadow-md hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Primary Email</span>
              </div>
              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-[11px] font-mono text-zinc-300 hover:text-white transition-all active:scale-95 cursor-pointer shadow-sm"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-zinc-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-sm font-mono font-semibold text-white break-all tracking-tight">
              {emailAddress}
            </p>
          </div>

          {/* Social Channels List */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-zinc-400" />
              <span>Socials & Professional Channels</span>
            </h2>

            <div className="space-y-2.5">
              {socialLinks.map((social) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all flex items-start justify-between group shadow-sm hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors font-mono">
                            {social.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                            {social.badge}
                          </span>
                        </div>
                        <p className="text-[11px] font-mono text-zinc-400">
                          {social.username}
                        </p>
                        <p className="text-xs text-zinc-400 font-sans leading-tight pt-0.5">
                          {social.description}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Context / Location Badge */}
          <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 text-xs font-mono text-zinc-400 space-y-2 pt-3">
            <div className="flex items-center gap-2 text-zinc-300">
              <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Location: Tashkent, Uzbekistan (GMT+5)</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Co-Founder & Lead Engineer @ A.L.I.A</span>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Contact Form (7 cols) */}
        <div data-aos="fade-left" data-aos-delay="300" className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-xl border border-zinc-800/80 bg-zinc-950/70 space-y-6 shadow-xl backdrop-blur-sm relative">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
              <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-white font-mono">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Send Direct Message</span>
              </div>
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Direct Delivery</span>
              </span>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white font-mono">Message Sent Successfully!</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-zinc-200 font-semibold">{formData.name}</span>. Your message regarding <span className="text-emerald-400 font-mono">{formData.inquiryType}</span> has been dispatched. I will get back to you shortly.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="px-5 py-2.5 text-xs font-mono rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer shadow-sm active:scale-98"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Inquiry Type Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Inquiry Type</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {inquiryTypes.map((type) => {
                      const TypeIcon = type.icon;
                      const isSelected = formData.inquiryType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, inquiryType: type.id })}
                          className={`p-2.5 rounded-lg border text-left transition-all flex flex-col items-start gap-1.5 cursor-pointer ${
                            isSelected
                              ? "bg-emerald-500/15 border-emerald-500/50 text-white shadow-sm"
                              : "bg-zinc-900/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                          }`}
                        >
                          <TypeIcon className={`w-3.5 h-3.5 ${isSelected ? "text-emerald-400" : "text-zinc-500"}`} />
                          <span className="text-[11px] font-mono font-medium leading-tight">
                            {type.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Your Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/50 transition-all font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <AtSign className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Your Email *</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/50 transition-all font-mono"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Subject</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Senior Frontend Engineer Role / Technical Consultation"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/50 transition-all font-mono"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Message *</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, scope, or position details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/50 transition-all font-mono resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-lg bg-white hover:bg-zinc-100 disabled:bg-zinc-800 text-zinc-950 disabled:text-zinc-500 font-semibold text-xs font-mono transition-all flex items-center justify-center gap-2 group shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-zinc-600" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5 text-zinc-900 group-hover:translate-x-0.5 transition-transform" />
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
