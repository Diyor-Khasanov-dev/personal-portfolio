import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Code2,
  FolderGit2,
  Globe,
} from "lucide-react";
import CopyButton from "@/components/ui/CopyButton";

export default function HomePage() {
  const projects = [
    {
      title: "Resend - Minimalist Email Platform",
      description:
        "Engineered ultra-fast transactional email API infrastructure with high deliverability, developer-first React Email preview engine, and edge runtime routing.",
      tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Edge Runtime"],
      metrics: "100k+ emails/sec",
      github: "https://github.com",
      demo: "https://resend.com",
      featured: true,
    },
    {
      title: "Linear - Issue Tracker & Project Management",
      description:
        "High-performance client-side synchronized issue tracking software built with real-time WebSockets, command palette shortcuts, and zero-latency UI updates.",
      tags: ["React 19", "TypeScript", "GraphQL", "WebSockets", "IndexedDB"],
      metrics: "< 50ms interaction",
      github: "https://github.com",
      demo: "https://linear.app",
      featured: true,
    },
    {
      title: "Vercel AI SDK & Edge UI Runtime",
      description:
        "Standardized streaming UI framework for LLM interactions, structured server component data streaming, and reactive message state rendering.",
      tags: ["TypeScript", "Server Components", "Turbopack", "Tailwind v4"],
      metrics: "5.2M weekly downloads",
      github: "https://github.com",
      demo: "https://vercel.com",
      featured: false,
    },
    {
      title: "Monorepo DevTools & Micro-Frontend Compiler",
      description:
        "Sub-millisecond incremental compilation pipeline for distributed React components, automated tree-shaking, and isolated sandbox runtime.",
      tags: ["Rust", "SWC", "Turborepo", "TypeScript"],
      metrics: "10x build speedup",
      github: "https://github.com",
      demo: "https://turbo.build",
      featured: false,
    },
  ];

  const experience = [
    {
      period: "2023 — PRESENT",
      role: "Staff Frontend Architect",
      company: "Vercel / Resend Ecosystem",
      description:
        "Architecting Next.js App Router core UI paradigms, server components design primitives, and high-craft minimalist component design systems.",
      highlights: [
        "Reduced initial bundle sizes by 42% using Server Components and streaming edge layouts.",
        "Created universal command palette and keyboard-first design language.",
      ],
    },
    {
      period: "2021 — 2023",
      role: "Senior UI Engineer",
      company: "Linear Systems",
      description:
        "Led client-side sync engine UI team. Optimized virtualized keyboard navigation, offline state sync, and dark mode design foundations.",
      highlights: [
        "Delivered 60 FPS silky smooth UI rendering under high-throughput state updates.",
        "Built extensible keyboard shortcuts engine adopted across all web apps.",
      ],
    },
    {
      period: "2019 — 2021",
      role: "Frontend Software Engineer",
      company: "Supabase / Open Source",
      description:
        "Built developer dashboard, database query inspector, and real-time event logs visualizer.",
      highlights: [
        "Spearheaded dark mode theme system with CSS variables and custom design tokens.",
      ],
    },
  ];

  const techCategories = [
    {
      name: "Core Technologies",
      items: ["TypeScript", "JavaScript (ESNext)", "React 19", "Next.js 16 (App Router)", "Node.js", "HTML5/CSS3"],
    },
    {
      name: "Styling & UI Craft",
      items: ["Tailwind CSS v4", "Radix UI", "CSS Modules", "Framer Motion", "Shadcn UI", "Design Tokens"],
    },
    {
      name: "State & Architecture",
      items: ["React Server Components", "TanStack Query", "Zustand", "GraphQL", "REST APIs", "Zod"],
    },
    {
      name: "Tooling & Infrastructure",
      items: ["Turbopack", "Vite", "Git / GitHub Actions", "Vercel Edge", "Docker", "Jest / Vitest"],
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-24 space-y-24">
      {/* HERO SECTION */}
      <section className="space-y-8 pt-4">
        {/* Status Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 text-xs font-mono text-zinc-300 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
          <span>Resend & Vercel Design System</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400">Minimalist Dark Edition</span>
        </div>

        {/* Title & Headline */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-sans leading-[1.1]">
            Engineering high-craft web interfaces & modern UI systems.
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl">
            Senior Frontend Engineer specializing in Next.js Server Components, React 19 architecture, and developer tooling. Obsessed with speed, minimalism, and precise typography.
          </p>
        </div>

        {/* Quick Action & Terminal Bar */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-950 font-medium text-xs sm:text-sm hover:bg-white transition-all shadow-sm group"
          >
            <span>Explore Projects</span>
            <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-200 text-xs sm:text-sm font-medium transition-all"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400" />
          </Link>

          {/* Terminal Command Button */}
          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-zinc-800">
            <span className="text-xs font-mono text-zinc-500">$</span>
            <CopyButton text="npx alex-dev-cli@latest" label="npx alex-dev-cli" />
          </div>
        </div>

        {/* Quick stats counter ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-zinc-900/80">
          <div>
            <p className="text-2xl font-bold text-white font-mono">6+ YRS</p>
            <p className="text-xs text-zinc-500 font-mono mt-0.5">Frontend Mastery</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white font-mono">100/100</p>
            <p className="text-xs text-zinc-500 font-mono mt-0.5">Lighthouse Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white font-mono">99.9%</p>
            <p className="text-xs text-zinc-500 font-mono mt-0.5">Uptime & Reliability</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white font-mono">Sub-50ms</p>
            <p className="text-xs text-zinc-500 font-mono mt-0.5">Latency Target</p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest">
            <span className="text-zinc-300">01</span>
            <span>{"//"}</span>
            <span>Featured Projects</span>
          </div>
          <Link
            href="/projects"
            className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>View All</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:bg-zinc-900/40 hover:border-zinc-700/80 transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="inline-block text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-900/50 px-2 py-0.5 rounded">
                      {project.metrics}
                    </span>
                    <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <FolderGit2 className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK EXPERIENCE SECTION */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest">
            <span className="text-zinc-300">02</span>
            <span>{"//"}</span>
            <span>Career & Experience</span>
          </div>
          <Link
            href="/experience"
            className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Full History</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/40 hover:bg-zinc-900/30 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-sm font-semibold text-white">{exp.role}</h3>
                  <p className="text-xs font-mono text-zinc-400">{exp.company}</p>
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-900/60 border border-zinc-800 px-2.5 py-1 rounded w-fit">
                  {exp.period}
                </span>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed mb-4">{exp.description}</p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK & SKILLS MATRIX */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest">
            <span className="text-zinc-300">03</span>
            <span>{"//"}</span>
            <span>Tech Stack & Tooling</span>
          </div>
          <Link
            href="/tech-stack"
            className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Detailed Stack</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {techCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-950/60 space-y-3"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-zinc-500" />
                <span>{cat.name}</span>
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800/80 px-2.5 py-1 rounded-md hover:border-zinc-700 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER & CTA */}
      <footer className="pt-12 border-t border-zinc-900 space-y-12">
        <div className="p-8 rounded-2xl border border-zinc-800/80 bg-zinc-950/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Ready to start a new project?
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Available for full-time engineering roles, high-impact consulting, and open-source collaborations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <CopyButton text="alexander@engineer.dev" label="alexander@engineer.dev" />
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-mono font-medium transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Built with Next.js 16, React 19 & Tailwind CSS v4</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
