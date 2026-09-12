"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Command,
  X,
  Terminal,
  FolderGit2,
  Briefcase,
  Mail,
  Award,
  Cpu,
  GraduationCap,
  Globe,
  Check,
  FileText,
  Calendar,
  Send,
  ExternalLink,
  CornerDownLeft,
  Download,
} from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  description?: string;
  category: "Navigation" | "Actions" | "Socials & Links";
  icon: React.ReactNode;
  badge?: string;
  href?: string;
  isExternal?: boolean;
  isDownload?: boolean;
  action?: () => void;
}

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const handleOpen = useCallback(() => {
    setOpen(true);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const toggle = useCallback(() => {
    setOpen((prev) => {
      if (!prev) {
        setQuery("");
        setSelectedIndex(0);
      }
      return !prev;
    });
  }, []);

  const handleQueryChange = (val: string) => {
    setQuery(val);
    setSelectedIndex(0);
  };

  const items: CommandItem[] = [
    // Navigation
    {
      id: "projects",
      title: "Projects & Showcase",
      description: "Explore Linkly and open source contributions",
      category: "Navigation",
      icon: <FolderGit2 className="w-4 h-4 text-zinc-200" />,
      href: "/projects",
      badge: "Pages",
    },
    {
      id: "tech-stack",
      title: "Tech Stack & Engineering Skills",
      description: "Vue, React, NestJS, TypeScript & Cloud Architecture",
      category: "Navigation",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      href: "/tech-stack",
      badge: "Pages",
    },
    {
      id: "experience",
      title: "Work Experience & Career History",
      description: "4+ years delivering scalable production systems",
      category: "Navigation",
      icon: <Briefcase className="w-4 h-4 text-indigo-400" />,
      href: "/experience",
      badge: "Pages",
    },
    {
      id: "education",
      title: "Education & Certifications",
      description: "Academic history, degrees & certifications",
      category: "Navigation",
      icon: <GraduationCap className="w-4 h-4 text-purple-400" />,
      href: "/education",
      badge: "Pages",
    },
    {
      id: "achievements",
      title: "Achievements & Hackathon Wins",
      description: "4x Hackathon Winner and industry recognition",
      category: "Navigation",
      icon: <Award className="w-4 h-4 text-amber-400" />,
      href: "/achievments",
      badge: "Pages",
    },
    {
      id: "languages",
      title: "Languages & Communication",
      description: "Multilingual proficiency & spoken languages",
      category: "Navigation",
      icon: <Globe className="w-4 h-4 text-sky-400" />,
      href: "/languages",
      badge: "Pages",
    },
    {
      id: "contact",
      title: "Get in Touch & Hire Me",
      description: "Direct contact options & booking",
      category: "Navigation",
      icon: <Mail className="w-4 h-4 text-rose-400" />,
      href: "/contact",
      badge: "Pages",
    },

    // Actions
    {
      id: "copy-email",
      title: "Copy Email Address",
      description: "bdiyorxasanov@gmail.com",
      category: "Actions",
      icon: <Terminal className="w-4 h-4 text-amber-400" />,
      badge: "Clipboard",
      action: () => {
        navigator.clipboard.writeText("bdiyorxasanov@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      id: "download-resume",
      title: "Download My Resume (PDF)",
      description: "Download official engineering resume directly",
      category: "Actions",
      icon: <Download className="w-4 h-4 text-zinc-200" />,
      href: "/resume.pdf",
      isDownload: true,
      badge: "Document",
    },

    // Socials & Links
    {
      id: "calendly",
      title: "Schedule a 1-on-1 Call",
      description: "Book time directly on Calendly",
      category: "Socials & Links",
      icon: <Calendar className="w-4 h-4 text-teal-400" />,
      href: "https://calendly.com/bdiyorxasanov",
      isExternal: true,
      badge: "Schedule",
    },
    {
      id: "telegram",
      title: "Send Direct Telegram Message",
      description: "@Diyor_Khasanov_dev",
      category: "Socials & Links",
      icon: <Send className="w-4 h-4 text-sky-400" />,
      href: "https://t.me/Diyor_Khasanov_dev",
      isExternal: true,
      badge: "Chat",
    },
    {
      id: "github",
      title: "Explore GitHub Repositories",
      description: "@Diyor-Khasanov-dev",
      category: "Socials & Links",
      icon: (
        <svg className="w-4 h-4 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      href: "https://github.com/Diyor-Khasanov-dev",
      isExternal: true,
      badge: "GitHub",
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
  );

  // Group items by category
  const categories = Array.from(new Set(filteredItems.map((item) => item.category)));

  // Handle select action
  const handleSelect = useCallback(
    (item: CommandItem) => {
      if (item.action) {
        item.action();
      } else if (item.href) {
        if (item.isDownload) {
          const a = document.createElement("a");
          a.href = item.href;
          a.download = "Diyor_Khasanov_Resume.pdf";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          handleClose();
        } else if (item.isExternal) {
          window.open(item.href, "_blank", "noopener,noreferrer");
        } else {
          handleClose();
          router.push(item.href);
        }
      }
    },
    [router, handleClose]
  );

  // Keyboard navigation & global hotkey
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggle();
        return;
      }

      if (!open) return;

      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (filteredItems.length > 0 ? (prev + 1) % filteredItems.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (filteredItems.length > 0 ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          handleSelect(filteredItems[selectedIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggle, open, filteredItems, selectedIndex, handleSelect, handleClose]);

  // Auto-scroll selected item into view
  useEffect(() => {
    if (open && listRef.current) {
      const selectedEl = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex, open]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [open]);

  let flatIndexCounter = 0;

  return (
    <>
      <button
        onClick={handleOpen}
        type="button"
        aria-label="Open command palette"
        className="flex items-center gap-1.5 px-2 py-1 text-xs font-mono rounded-lg border border-zinc-800 bg-zinc-900/70 hover:bg-zinc-800/90 text-zinc-400 hover:text-zinc-100 transition-all duration-200 shadow-sm hover:border-zinc-700/80 hover:shadow-[0_0_12px_rgba(255,255,255,0.05)] cursor-pointer group"
      >
        <Command className="w-3.5 h-3.5 text-zinc-200 group-hover:scale-110 transition-transform duration-200" />
        <span className="hidden sm:inline">Search...</span>
        <span className="sm:hidden">Search</span>
        <kbd className="ml-0.5 text-[10px] bg-zinc-950 px-1.5 py-0.5 rounded text-zinc-400 border border-zinc-800 font-mono shadow-inner group-hover:border-zinc-700 transition-colors">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-3 sm:px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          {/* Main Modal Card */}
          <div
            className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Ambient Glow Effect */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-r from-white/20 via-zinc-400/20 to-zinc-500/10 blur-3xl pointer-events-none" />

            {/* Header / Input Section */}
            <div className="relative flex items-center px-4 border-b border-zinc-800/80 bg-zinc-900/60">
              <Search className="w-4 h-4 text-zinc-200 mr-2.5 shrink-0 animate-pulse" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or search pages..."
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                className="w-full py-4 text-sm bg-transparent text-zinc-100 placeholder-zinc-500 focus:outline-none font-mono"
              />
              {query && (
                <button
                  onClick={() => handleQueryChange("")}
                  className="p-1 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 text-xs font-mono mr-1 cursor-pointer"
                >
                  Clear
                </button>
              )}
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer border border-transparent hover:border-zinc-700/50"
                aria-label="Close command palette"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div
              ref={listRef}
              className="max-h-[380px] overflow-y-auto p-2 space-y-4 font-mono scroll-smooth bg-zinc-950"
              role="listbox"
            >
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-zinc-500">
                    <Search className="w-5 h-5 text-zinc-500" />
                  </div>
                  <p className="text-xs text-zinc-400 font-mono">
                    No results found for &quot;<span className="text-zinc-200 font-semibold">{query}</span>&quot;
                  </p>
                  <p className="text-[11px] text-zinc-600">Try searching for &quot;Projects&quot;, &quot;Resume&quot;, or &quot;Email&quot;</p>
                </div>
              ) : (
                categories.map((category) => {
                  const categoryItems = filteredItems.filter((item) => item.category === category);
                  if (categoryItems.length === 0) return null;

                  return (
                    <div key={category} className="space-y-1">
                      {/* Section Heading */}
                      <div className="px-3 pt-1 pb-1 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold">
                        <span>{category}</span>
                        <span className="text-zinc-600 font-normal">{categoryItems.length}</span>
                      </div>

                      {/* Items */}
                      {categoryItems.map((item) => {
                        const currentIndex = flatIndexCounter++;
                        const isSelected = currentIndex === selectedIndex;

                        return (
                          <div
                            key={item.id}
                            data-index={currentIndex}
                            onClick={() => handleSelect(item)}
                            onMouseEnter={() => setSelectedIndex(currentIndex)}
                            role="option"
                            aria-selected={isSelected}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-all duration-150 cursor-pointer group select-none ${
                              isSelected
                                ? "bg-zinc-900 border border-zinc-700/80 text-white shadow-md shadow-black/40 translate-x-0.5"
                                : "text-zinc-300 hover:bg-zinc-900/60 border border-transparent"
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0 pr-2">
                              <div
                                className={`p-2 rounded-lg transition-colors shrink-0 ${
                                  isSelected
                                    ? "bg-zinc-950 border border-zinc-700 text-white shadow-inner"
                                    : "bg-zinc-900/90 border border-zinc-800/80 group-hover:border-zinc-700"
                                }`}
                              >
                                {item.icon}
                              </div>
                              <div className="flex flex-col min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className={`font-medium truncate ${isSelected ? "text-white" : "text-zinc-200"}`}>
                                    {item.title}
                                  </span>
                                  {item.badge && (
                                    <span
                                      className={`text-[9px] px-1.5 py-0.2 rounded font-mono border ${
                                        isSelected
                                          ? "bg-white/20 text-zinc-100 border-white/40"
                                          : "bg-zinc-900 text-zinc-500 border-zinc-800"
                                      }`}
                                    >
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                {item.description && (
                                  <span
                                    className={`text-[11px] truncate mt-0.5 ${
                                      isSelected ? "text-zinc-400" : "text-zinc-500"
                                    }`}
                                  >
                                    {item.description}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Right Action Hint / Indicator */}
                            <div className="flex items-center gap-2 shrink-0 ml-2">
                              {item.id === "copy-email" && copied && (
                                <span className="text-[10px] text-zinc-200 font-bold flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full border border-white/30 animate-in fade-in">
                                  <Check className="w-3 h-3" /> Copied!
                                </span>
                              )}

                              {item.isExternal ? (
                                <ExternalLink
                                  className={`w-3.5 h-3.5 transition-colors ${
                                    isSelected ? "text-zinc-200" : "text-zinc-600"
                                  }`}
                                />
                              ) : (
                                <CornerDownLeft
                                  className={`w-3.5 h-3.5 transition-all ${
                                    isSelected ? "text-zinc-200 opacity-100 translate-x-0" : "text-zinc-600 opacity-0 -translate-x-1"
                                  }`}
                                />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer / Shortcuts Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-zinc-900 bg-zinc-950 text-[11px] text-zinc-500 font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px]">↑↓</kbd>
                  <span className="text-zinc-500">Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px]">↵</kbd>
                  <span className="text-zinc-500">Select</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-zinc-300">
                  <span className="hidden sm:inline">Spotlight Palette</span>
                </span>
                <span className="text-zinc-700">•</span>
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px]">ESC</kbd>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
