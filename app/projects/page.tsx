import type { Metadata } from "next";
import {
  FolderGit2,
  ExternalLink,
  Star,
  GitFork,
  Zap,
  ArrowUpRight,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Open Source | Developer Portfolio",
  description:
    "Showcase of production platforms, mobile applications, and open-source contributions engineered by Diyor Khasanov.",
};

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

interface Project {
  title: string;
  category: "Production" | "Hackathon Winner" | "Open Source";
  description: string;
  impact: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  stars?: number;
  forks?: number;
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "Tez Bank Payment Gateway",
      category: "Production",
      description:
        "High-throughput transactional payment system and mobile checkout SDK designed for seamless bank integrations, low-latency transaction routing, and real-time fraud checks.",
      impact: "Powering live production payments with 99.99% uptime target",
      techStack: ["Next.js 16", "React Native", "Expo", "TypeScript", "Tailwind CSS", "Node.js"],
      liveUrl: "https://example.com/tez",
      githubUrl: "https://github.com/Diyor-Khasanov-dev/tez-payment",
      featured: true,
    },
    {
      title: "Lumora RoboContest Ecosystem",
      category: "Production",
      description:
        "Automated algorithmic contest platform with live WebSockets scoring, sandbox code execution, and interactive leaderboard UI built for competitive robotics challenges.",
      impact: "1st Place Hackathon Winner & active production contest host",
      techStack: ["Next.js", "TypeScript", "WebSockets", "Tailwind CSS", "Docker", "Node.js"],
      liveUrl: "https://example.com/lumora",
      githubUrl: "https://github.com/Diyor-Khasanov-dev/lumora-platform",
      featured: true,
    },
    {
      title: "A.L.I.A Enterprise Core Suite",
      category: "Production",
      description:
        "Modular enterprise platform architecture with sub-50ms UI response times, real-time analytics dashboard, and automated workflow orchestrations for co-founded startup A.L.I.A.",
      impact: "Co-Founded venture backing enterprise operations",
      techStack: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Zustand"],
      liveUrl: "https://example.com/alia",
      featured: true,
    },
    {
      title: "Billz ERP Micro-Interactions UI",
      category: "Hackathon Winner",
      description:
        "Award-winning CRM/ERP merchant dashboard focusing on retail inventory speed, keyboard shortcuts, accessible micro-interactions, and instant offline-first syncing.",
      impact: "1st Place Winner — Highest score for UX & DX",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "IndexedDB", "Framer Motion"],
      githubUrl: "https://github.com/Diyor-Khasanov-dev/billz-erp-ui",
    },
    {
      title: "Alif Tech Instant Checkout Portal",
      category: "Hackathon Winner",
      description:
        "Rapid 24-hour sprint project delivering an instant payment portal, multi-currency support, and biometric authentication UI mockup for seamless consumer checkouts.",
      impact: "1st Place Winner in 24h rapid sprint",
      techStack: ["React", "TypeScript", "Tailwind CSS", "REST API"],
      githubUrl: "https://github.com/Diyor-Khasanov-dev/alif-checkout",
    },
    {
      title: "Yandex Music Web Engine MVP",
      category: "Hackathon Winner",
      description:
        "Lightweight audio streaming web client with personalized recommendations, custom audio visualizer, and low-bandwidth fallback for Yandex Dev Camp.",
      impact: "3rd Place Finish at Yandex Dev Camp",
      techStack: ["React", "TypeScript", "Web Audio API", "Tailwind CSS"],
      githubUrl: "https://github.com/Diyor-Khasanov-dev/yandex-music-mvp",
    },
    {
      title: "React Next.js UI Design System",
      category: "Open Source",
      description:
        "Developer-focused dark-themed component library optimized for Next.js App Router, Tailwind CSS v4, and accessible keyboard navigation.",
      impact: "Used across personal and client production builds",
      techStack: ["React 19", "TypeScript", "Tailwind CSS v4", "Radix UI"],
      githubUrl: "https://github.com/Diyor-Khasanov-dev/ui-design-system",
      stars: 128,
      forks: 34,
    },
    {
      title: "React Native Payment Sheet SDK",
      category: "Open Source",
      description:
        "Open-source modular payment sheet component for React Native & Expo applications with native smooth gestures and haptic feedback.",
      impact: "Community open source package for mobile payment integrations",
      techStack: ["React Native", "Expo", "TypeScript", "Reanimated"],
      githubUrl: "https://github.com/Diyor-Khasanov-dev/rn-payment-sheet",
      stars: 94,
      forks: 19,
    },
  ];

  return (
    <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-12 overflow-hidden">
      {/* Header Banner */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-300 text-xs font-mono">
          <FolderGit2 className="w-3.5 h-3.5 text-sky-400" />
          <span>Engineering Portfolio & Open Source</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Projects & Code
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
          A collection of production platforms, hackathon-winning MVPs, and open-source contributions crafted with performance, scalability, and UX craftsmanship.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <section className="space-y-6">
        <div data-aos="fade-right" data-aos-delay="150" className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-bold tracking-tight text-zinc-100">
              Featured Systems & Applications
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            {projects.length} Projects Total
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((proj, idx) => {
            const isProduction = proj.category === "Production";
            const isHackathon = proj.category === "Hackathon Winner";

            return (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={200 + idx * 80}
                className="p-5 sm:p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between space-y-4 group relative overflow-hidden hover:-translate-y-1 shadow-sm hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
              >
                {/* Top Border Glow Accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] ${
                    isProduction
                      ? "bg-gradient-to-r from-emerald-500 via-teal-400 to-transparent"
                      : isHackathon
                      ? "bg-gradient-to-r from-amber-500 via-yellow-400 to-transparent"
                      : "bg-gradient-to-r from-sky-500 via-indigo-400 to-transparent"
                  }`}
                />

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                        isProduction
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                          : isHackathon
                          ? "bg-amber-500/10 border-amber-500/30 text-amber-300"
                          : "bg-sky-500/10 border-sky-500/30 text-sky-300"
                      }`}
                    >
                      {proj.category}
                    </span>

                    <div className="flex items-center gap-2">
                      {proj.stars !== undefined && (
                        <div className="flex items-center gap-1 text-xs text-zinc-400 font-mono">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                          <span>{proj.stars}</span>
                        </div>
                      )}
                      {proj.forks !== undefined && (
                        <div className="flex items-center gap-1 text-xs text-zinc-400 font-mono">
                          <GitFork className="w-3.5 h-3.5 text-zinc-400" />
                          <span>{proj.forks}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                      <span>{proj.title}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-2 font-sans">
                      {proj.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-1.5 text-xs text-zinc-400 font-mono bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800/80">
                    <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="leading-tight">{proj.impact}</span>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800/80 text-[10px] font-mono text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-2 border-t border-zinc-900/90 font-mono text-xs">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer Banner */}
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/30 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-sm font-semibold text-white">
            Want to see my full GitHub activity & repositories?
          </h3>
          <p className="text-xs text-zinc-400">
            Check out open source libraries, experimental benchmarks, and full stack templates.
          </p>
        </div>
        <a
          href="https://github.com/Diyor-Khasanov-dev"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium font-mono text-xs transition-all inline-flex items-center gap-1.5 shrink-0"
        >
          <GithubIcon className="w-3.5 h-3.5 text-zinc-950" />
          <span>GitHub Profile</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-900" />
        </a>
      </div>
    </main>
  );
}
