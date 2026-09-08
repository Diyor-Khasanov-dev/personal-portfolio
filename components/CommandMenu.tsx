"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Command,
  ArrowRight,
  X,
  Terminal,
  FolderGit2,
  Briefcase,
  Mail,
  Award,
  Cpu,
  GraduationCap,
  FileCheck,
  Globe,
  Check,
  Calendar,
  Send,
  ExternalLink,
  Sparkles,
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

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: "Navigation" | "Actions" | "Social Links";
  icon: React.ReactNode;
  href?: string;
  action?: () => void;
  external?: boolean;
}

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const listRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const items: CommandItem[] = [
    // Navigation
    { id: "projects", title: "Projects & Engineering Builds", subtitle: "Linkly, fullstack apps & open source", category: "Navigation", icon: <FolderGit2 className="w-4 h-4 text-emerald-400" />, href: "/projects" },
    { id: "tech-stack", title: "Tech Stack & Core Skills", subtitle: "Languages, frameworks & architecture", category: "Navigation", icon: <Cpu className="w-4 h-4 text-emerald-400" />, href: "/tech-stack" },
    { id: "experience", title: "Work Experience & History", subtitle: "Commercial roles, leadership & milestones", category: "Navigation", icon: <Briefcase className="w-4 h-4 text-emerald-400" />, href: "/experience" },
    { id: "certificates", title: "Certificates & Industry Badges", subtitle: "AWS, Big Tech & professional credentials", category: "Navigation", icon: <FileCheck className="w-4 h-4 text-emerald-400" />, href: "/certificates" },
    { id: "education", title: "Education & Bootcamps", subtitle: "Academic background & intensive training", category: "Navigation", icon: <GraduationCap className="w-4 h-4 text-emerald-400" />, href: "/education" },
    { id: "achievements", title: "Achievements & Hackathons", subtitle: "4x Hackathon wins & pitch awards", category: "Navigation", icon: <Award className="w-4 h-4 text-emerald-400" />, href: "/achievments" },
    { id: "languages", title: "Languages & Communication", subtitle: "English, Uzbek, Russian fluency", category: "Navigation", icon: <Globe className="w-4 h-4 text-emerald-400" />, href: "/languages" },
    { id: "contact", title: "Contact & Hire Me", subtitle: "Direct message, email & calendar", category: "Navigation", icon: <Mail className="w-4 h-4 text-emerald-400" />, href: "/contact" },

    // Actions
    {
      id: "copy-email",
      title: "Copy Direct Email",
      subtitle: "bdiyorxasanov@gmail.com",
      category: "Actions",
      icon: <Terminal className="w-4 h-4 text-amber-400" />,
      action: () => {
        navigator.clipboard.writeText("bdiyorxasanov@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      },
    },

    // Social Links
    {
      id: "social-github",
      title: "GitHub Profile",
      subtitle: "github.com/Diyor-Khasanov-dev",
      category: "Social Links",
      icon: <GithubIcon className="w-4 h-4 text-sky-400" />,
      href: "https://github.com/Diyor-Khasanov-dev",
      external: true,
    },
    {
      id: "social-linkedin",
      title: "LinkedIn Profile",
      subtitle: "linkedin.com/in/diyor-khasanov",
      category: "Social Links",
      icon: <LinkedinIcon className="w-4 h-4 text-sky-400" />,
      href: "https://linkedin.com/in/diyor-khasanov",
      external: true,
    },
    {
      id: "social-telegram",
      title: "Telegram Direct Chat",
      subtitle: "t.me/Diyor_Khasanov_dev",
      category: "Social Links",
      icon: <Send className="w-4 h-4 text-sky-400" />,
      href: "https://t.me/Diyor_Khasanov_dev",
      external: true,
    },
    {
      id: "social-calendly",
      title: "Schedule 15-min Call",
      subtitle: "calendly.com/bdiyorxasanov",
      category: "Social Links",
      icon: <Calendar className="w-4 h-4 text-amber-400" />,
      href: "https://calendly.com/bdiyorxasanov",
      external: true,
    },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase())) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  // Group filtered items by category
  const categories: ("Navigation" | "Actions" | "Social Links")[] = ["Navigation", "Actions", "Social Links"];

  const handleSelect = useCallback((item: CommandItem) => {
    if (item.action) {
      item.action();
    } else if (item.href) {
      setOpen(false);
      setQuery("");
      setSelectedIndex(0);
      if (item.external) {
        window.open(item.href, "_blank", "noreferrer");
      } else {
        router.push(item.href);
      }
    }
  }, [router]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedIndex(0);
  };

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeElement = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (activeElement) {
        activeElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggle();
      }

      if (!open) return;

      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          handleSelect(filteredItems[selectedIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggle, open, filteredItems, selectedIndex, handleSelect]);

  return (
    <>
      <button
        onClick={toggle}
        type="button"
        className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-400 hover:text-zinc-100 transition-all shadow-sm cursor-pointer hover:border-zinc-700 hover:shadow-[0_0_12px_rgba(255,255,255,0.05)] group"
      >
        <Command className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
        <span className="text-zinc-300">Search menu...</span>
        <kbd className="ml-1.5 text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 border border-zinc-700/60 font-mono group-hover:border-zinc-600 transition-colors">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-zinc-950/90 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-2xl transition-all animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Glow Accent */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-indigo-500/20 blur-2xl pointer-events-none rounded-full" />

            {/* Header / Input */}
            <div className="relative flex items-center px-4 border-b border-zinc-800/80 bg-zinc-900/40">
              <Search className="w-4 h-4 text-emerald-400 mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Type a command, page, or social link..."
                value={query}
                onChange={handleQueryChange}
                autoFocus
                className="w-full py-4 text-sm bg-transparent text-zinc-100 placeholder-zinc-500 focus:outline-none font-mono"
              />
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results list */}
            <div ref={listRef} className="max-h-96 overflow-y-auto p-2 space-y-4">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-xs font-mono text-zinc-500 space-y-2">
                  <Sparkles className="w-5 h-5 text-zinc-600 mx-auto" />
                  <p>No matching commands or pages found for &ldquo;{query}&rdquo;.</p>
                </div>
              ) : (
                (() => {
                  let globalIndex = 0;
                  return categories.map((category) => {
                    const categoryItems = filteredItems.filter((item) => item.category === category);
                    if (categoryItems.length === 0) return null;

                    return (
                      <div key={category} className="space-y-1">
                        <div className="px-3 pt-1 pb-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                          <span>{category}</span>
                        </div>
                        {categoryItems.map((item) => {
                          const currentIndex = globalIndex++;
                          const isSelected = currentIndex === selectedIndex;

                          return (
                            <button
                              key={item.id}
                              data-index={currentIndex}
                              onClick={() => handleSelect(item)}
                              onMouseEnter={() => setSelectedIndex(currentIndex)}
                              type="button"
                              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-mono transition-all group text-left cursor-pointer ${
                                isSelected
                                  ? "bg-zinc-800/90 text-white border border-zinc-700/70 shadow-md"
                                  : "text-zinc-300 hover:bg-zinc-900/60 border border-transparent"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`p-2 rounded-lg border transition-colors ${
                                  isSelected ? "bg-zinc-900 border-zinc-700" : "bg-zinc-900/80 border-zinc-800/80 group-hover:border-zinc-700"
                                }`}>
                                  {item.icon}
                                </span>
                                <div>
                                  <div className="font-medium text-zinc-100 group-hover:text-white flex items-center gap-2">
                                    <span>{item.title}</span>
                                    {item.external && (
                                      <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-zinc-300" />
                                    )}
                                  </div>
                                  {item.subtitle && (
                                    <div className="text-[11px] text-zinc-500 group-hover:text-zinc-400 font-sans">
                                      {item.subtitle}
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                {item.id === "copy-email" && copied && (
                                  <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                                    <Check className="w-3 h-3" /> Copied!
                                  </span>
                                )}
                                <ArrowRight className={`w-3.5 h-3.5 transition-all ${
                                  isSelected ? "text-emerald-400 translate-x-0.5" : "text-zinc-600 group-hover:text-zinc-400"
                                }`} />
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    );
                  });
                })()
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-zinc-900 bg-zinc-950/90 text-[11px] text-zinc-500 font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">↓</kbd>
                  <span className="ml-1 text-zinc-400">Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">↵</kbd>
                  <span className="ml-1 text-zinc-400">Select</span>
                </span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">ESC</kbd>
                <span className="ml-1 text-zinc-400">Close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
