import type { Metadata } from "next";
import {
  FolderGit2,
  ExternalLink,
  Layers,
  Sparkles,
  Globe,
  Share2,
  BarChart3,
  QrCode,
  Sliders,
  Smartphone,
  Search,
  Link2,
  GitPullRequest,
  Star,
  GitFork,
  Code2,
  CheckCircle2,
  PackageCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Open Source | Diyor Khasanov - Software Engineer",
  description:
    "Explore Linkly and open source contributions built with Vue.js, React, TypeScript, NestJS, and TailwindCSS by Diyor Khasanov.",
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

interface FeatureItem {
  label: string;
  icon: React.ElementType;
}

interface Project {
  name: string;
  oneLineDescription: string;
  heroImagePlaceholder: string;
  keyFeatures: FeatureItem[];
  techStack: string[];
  liveDemoLink: string;
  githubLink: string;
}

interface OpenSourceContribution {
  name: string;
  role: string;
  category: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubLink: string;
  stars?: number;
  forks?: number;
}

const projects: Project[] = [
  {
    name: "Linkly",
    oneLineDescription:
      "Linkly is a modern link-in-bio platform that lets creators and businesses organize, customize, and share all their important links from one simple page.",
    heroImagePlaceholder: "/projects/linkly-hero.png",
    keyFeatures: [
      { label: "Custom link pages", icon: Link2 },
      { label: "Link management", icon: Sliders },
      { label: "Social media integration", icon: Share2 },
      { label: "Profile customization", icon: Sparkles },
      { label: "Analytics & click tracking", icon: BarChart3 },
      { label: "Responsive design", icon: Smartphone },
      { label: "QR code sharing", icon: QrCode },
      { label: "SEO & share previews", icon: Search },
    ],
    techStack: ["Vue.js", "TypeScript", "NestJS", "MongoDB", "TailwindCSS"],
    liveDemoLink: "http://linkly-frontend-oep9.vercel.app/",
    githubLink: "https://github.com/Diyor-Khasanov-dev/linkly-frontend",
  },
];

const openSourceContributions: OpenSourceContribution[] = [
  {
    name: "Linkly Frontend & Ecosystem",
    role: "Creator & Lead Maintainer",
    category: "Web Platform & Developer Utilities",
    description:
      "Open source link-in-bio web application and frontend kit. Built with Vue 3, TypeScript, and TailwindCSS providing modular UI components, analytics integration, and theme customization.",
    highlights: [
      "Modular, reusable Vue 3 component architecture for customizable profile layouts",
      "Full TypeScript integration with strict type checking and API schemas",
      "Responsive UI optimized for sub-second load times and accessible interaction design",
    ],
    techStack: ["Vue.js", "TypeScript", "TailwindCSS", "Vite", "Pinia"],
    githubLink: "https://github.com/Diyor-Khasanov-dev/linkly-frontend",
    stars: 12,
    forks: 4,
  },
  {
    name: "Open Source Developer Portfolio Template",
    role: "Creator & Author",
    category: "Frontend UI & Component Systems",
    description:
      "A high-performance, dark-themed personal portfolio template for modern developers featuring Next.js 16 App Router, Tailwind CSS v4, Lucide icons, and AOS scroll animations.",
    highlights: [
      "Next.js 16 App Router with static generation and server-side optimization",
      "Tailwind CSS v4 utility styling with custom dark theme design tokens",
      "Pre-configured accessibility standard, SEO meta tags, and interactive components",
    ],
    techStack: ["Next.js", "React 19", "TypeScript", "TailwindCSS", "AOS"],
    githubLink: "https://github.com/Diyor-Khasanov-dev",
    stars: 18,
    forks: 6,
  },
  {
    name: "Community Tooling & Tech Ecosystem Utilities",
    role: "Core Contributor",
    category: "Community & Open Utilities",
    description:
      "Active open source contributions across Uzbek developer community initiatives (GDG, UzGeeks, MDC) including helper modules, contest platform interfaces, and payment API client snippets.",
    highlights: [
      "Contributed core interface modules for competitive coding and grading tools",
      "Shared open source starter kits and utility scripts for local developer meetups",
      "Maintained documentation and code review standards for beginner contributors",
    ],
    techStack: ["JavaScript", "TypeScript", "React Native", "Node.js", "REST APIs"],
    githubLink: "https://github.com/Diyor-Khasanov-dev",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-16 overflow-hidden">
      {/* Page Header */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-xs font-mono">
          <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Featured Projects & Open Source</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Projects & Contributions
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
          A showcase of full-stack web applications, open-source repositories, and developer tooling engineered for exceptional performance, developer experience, and community impact.
        </p>
      </div>

      {/* Projects List */}
      <section className="space-y-8">
        <div
          data-aos="fade-right"
          data-aos-delay="150"
          className="flex items-center justify-between border-b border-zinc-800/80 pb-3"
        >
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-bold tracking-tight text-zinc-100">
              Featured Work
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            {projects.length} Project{projects.length > 1 ? "s" : ""}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <article
              key={project.name}
              data-aos="fade-up"
              data-aos-delay={200 + idx * 100}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-950/70 hover:border-zinc-700 transition-all duration-300 overflow-hidden group shadow-lg hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] relative"
            >
              {/* Subtle accent border gradient */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-500" />

              <div className="p-6 sm:p-8 space-y-8">
                {/* Header info */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono">
                        Fullstack Platform
                      </span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans max-w-3xl">
                    {project.oneLineDescription}
                  </p>
                </div>

                {/* Hero Image / Card Preview Placeholder */}
                <div className="relative rounded-xl border border-zinc-800/90 bg-zinc-900/60 overflow-hidden group/image">
                  <div className="aspect-[16/9] sm:aspect-[21/9] w-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black relative">
                    {/* Dark grid graphic background overlay */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                    {/* Placeholder image representation graphic */}
                    <div className="relative z-10 flex flex-col items-center text-center space-y-3 p-4">
                      <div className="w-16 h-16 rounded-2xl bg-zinc-800/90 border border-zinc-700/80 flex items-center justify-center text-emerald-400 shadow-inner group-hover/image:scale-105 transition-transform duration-300">
                        <Globe className="w-8 h-8 text-emerald-400" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-mono tracking-wider text-emerald-400 uppercase">
                          Hero Image Placeholder
                        </span>
                        <p className="text-xs text-zinc-400 font-mono">
                          {project.heroImagePlaceholder}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Features Section */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                    {project.keyFeatures.map((feature) => {
                      const IconComp = feature.icon;
                      return (
                        <div
                          key={feature.label}
                          className="flex items-center gap-2.5 p-3 rounded-lg border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-zinc-700/80 transition-all duration-200"
                        >
                          <IconComp className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="text-xs text-zinc-200 font-medium leading-tight">
                            {feature.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 font-medium hover:border-zinc-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-4">
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium font-mono text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 font-medium font-mono text-xs sm:text-sm transition-all duration-200 hover:border-zinc-700 hover:-translate-y-0.5"
                  >
                    <GithubIcon className="w-4 h-4 text-zinc-300" />
                    <span>GitHub Repository</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Open Source Contributions Section */}
      <section className="space-y-8">
        <div
          data-aos="fade-right"
          data-aos-delay="150"
          className="flex items-center justify-between border-b border-zinc-800/80 pb-3"
        >
          <div className="flex items-center gap-2.5">
            <GitPullRequest className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-bold tracking-tight text-zinc-100">
              Open Source Contributions
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            {openSourceContributions.length} Contributions
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {openSourceContributions.map((item, idx) => (
            <article
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={200 + idx * 100}
              className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/90 transition-all duration-300 p-6 space-y-5 relative overflow-hidden group shadow-sm hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
            >
              {/* Accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500/80 via-teal-400/50 to-transparent" />

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-medium flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                      {item.role}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">•</span>
                    <span className="text-xs font-mono text-zinc-400">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.name}
                  </h3>
                </div>

                {/* Metrics / Stars / Forks if available */}
                <div className="flex items-center gap-3 shrink-0">
                  {item.stars !== undefined && (
                    <div className="flex items-center gap-1 text-xs font-mono text-amber-400/90 bg-zinc-900/90 px-2.5 py-1 rounded-md border border-zinc-800">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/30" />
                      <span>{item.stars}</span>
                    </div>
                  )}
                  {item.forks !== undefined && (
                    <div className="flex items-center gap-1 text-xs font-mono text-zinc-400 bg-zinc-900/90 px-2.5 py-1 rounded-md border border-zinc-800">
                      <GitFork className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{item.forks}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-1 border-t border-zinc-900">
                <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-1.5">
                  <PackageCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Key Highlights & Contributions
                </p>
                <div className="space-y-1.5">
                  {item.highlights.map((hl, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 leading-normal"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tech Stack & Link */}
              <div className="pt-3 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 font-medium font-mono text-xs transition-all duration-200 hover:border-zinc-700 hover:-translate-y-0.5 shrink-0 self-start sm:self-auto"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-300" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
