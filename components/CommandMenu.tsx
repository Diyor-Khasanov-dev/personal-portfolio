"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, Command, ArrowRight, X, Terminal, FolderGit2, Briefcase, Mail, Award, Cpu, GraduationCap, Globe, Check } from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  href?: string;
  action?: () => void;
}

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggle, open]);

  const items: CommandItem[] = [
    { id: "projects", title: "View Projects & Linkly", category: "Navigation", icon: <FolderGit2 className="w-4 h-4 text-emerald-400" />, href: "/projects" },
    { id: "tech-stack", title: "Tech Stack & Engineering Skills", category: "Navigation", icon: <Cpu className="w-4 h-4 text-emerald-400" />, href: "/tech-stack" },
    { id: "experience", title: "Work Experience & History", category: "Navigation", icon: <Briefcase className="w-4 h-4 text-emerald-400" />, href: "/experience" },
    { id: "education", title: "Education & Bootcamps", category: "Navigation", icon: <GraduationCap className="w-4 h-4 text-emerald-400" />, href: "/education" },
    { id: "achievements", title: "Achievements & Hackathon Wins", category: "Navigation", icon: <Award className="w-4 h-4 text-emerald-400" />, href: "/achievments" },
    { id: "languages", title: "Languages & Communication", category: "Navigation", icon: <Globe className="w-4 h-4 text-emerald-400" />, href: "/languages" },
    { id: "contact", title: "Get in Touch & Hire", category: "Navigation", icon: <Mail className="w-4 h-4 text-emerald-400" />, href: "/contact" },
    {
      id: "copy-email",
      title: "Copy Email (bdiyorxasanov@gmail.com)",
      category: "Actions",
      icon: <Terminal className="w-4 h-4 text-amber-400" />,
      action: () => {
        navigator.clipboard.writeText("bdiyorxasanov@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: CommandItem) => {
    if (item.action) {
      item.action();
    } else if (item.href) {
      setOpen(false);
      setQuery("");
      router.push(item.href);
    }
  };

  return (
    <>
      <button
        onClick={toggle}
        type="button"
        className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 text-xs font-mono rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-400 hover:text-zinc-200 transition-colors shadow-sm cursor-pointer"
      >
        <Command className="w-3.5 h-3.5" />
        <span>Search...</span>
        <kbd className="ml-1 text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 border border-zinc-700/50 font-mono">⌘K</kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div
            className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden glass-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Input */}
            <div className="flex items-center px-4 border-b border-zinc-800/80 bg-zinc-900/50">
              <Search className="w-4 h-4 text-zinc-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Type a command or search page..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full py-3.5 text-sm bg-transparent text-zinc-100 placeholder-zinc-500 focus:outline-none font-mono"
              />
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results list */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-zinc-900">
              {filteredItems.length === 0 ? (
                <div className="py-8 text-center text-xs font-mono text-zinc-500">
                  No commands or pages found.
                </div>
              ) : (
                <div className="space-y-1">
                  {filteredItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-mono text-zinc-300 hover:bg-zinc-900/80 hover:text-white transition-colors group text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                          {item.icon}
                        </span>
                        <span>{item.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.id === "copy-email" && copied && (
                          <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                            <Check className="w-3 h-3" /> Copied!
                          </span>
                        )}
                        <span className="text-[10px] text-zinc-600 uppercase tracking-wider">{item.category}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-zinc-900 bg-zinc-950/80 text-[11px] text-zinc-500 font-mono">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">↑↓</span>
                <span>Navigate</span>
                <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 ml-2">↵</span>
                <span>Select</span>
              </div>
              <div>
                <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">ESC</span>
                <span className="ml-1">Close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
