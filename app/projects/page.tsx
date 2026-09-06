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
      "Linkly is a modern link-in-bio platform that lets creators and businesses organize, customize, and share all their important links from one simple, performant page.",
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
    name: "google-gemini-cli",
    role: "Fullstack Contributor",
    category: "Fullstack AI Tooling & CLI Ecosystem",
    description:
      "Command-line interface and interactive fullstack developer tools for Google Gemini AI APIs. Enables seamless terminal workflow automation, streaming prompt executions, and API integrations.",
    highlights: [
      "Engineered fullstack CLI utilities connecting node client runtimes with Google Gemini API endpoints",
      "Implemented real-time streaming response renderers and interactive terminal UI flows",
      "Enhanced fullstack API error handling, authentication flows, and configuration management",
    ],
    techStack: ["TypeScript", "Node.js", "Google Gemini API", "React Ink", "REST APIs"],
    githubLink: "https://github.com/google-gemini/gemini-cli",
  },
  {
    name: "kubernetes (K8s)",
    role: "Backend Contributor",
    category: "Cloud Native & Distributed Backend Systems",
    description:
      "Production-grade container orchestration system powering modern enterprise infrastructure and cloud-native microservices.",
    highlights: [
      "Contributed backend Go controller improvements and API server endpoint optimizations",
      "Diagnosed and patched high-concurrency race conditions in cluster resource handling",
      "Wrote comprehensive unit and integration tests for backend scheduling & networking logic",
    ],
    techStack: ["Go", "Kubernetes", "Docker", "gRPC", "Distributed Systems"],
    githubLink: "https://github.com/kubernetes/kubernetes",
  },
  {
    name: "Visual Studio Code (vscode)",
    role: "Frontend Contributor",
    category: "Desktop IDE & Frontend Workbench Architecture",
    description:
      "Open-source code editor built with TypeScript, Electron, and web technologies used by millions of developers worldwide.",
    highlights: [
      "Refactored frontend workbench components to improve DOM rendering performance and reduce memory overhead",
      "Enhanced extension API surface and interactive UI widgets for accessibility & theme consistency",
      "Resolved complex UI layout bugs across multi-window and editor split panels",
    ],
    techStack: ["TypeScript", "Electron", "React", "CSS Modules", "VS Code API"],
    githubLink: "https://github.com/microsoft/vscode",
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
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
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
              className="rounded-2xl border border-zinc-800/80 bg-zinc-950/80 hover:border-zinc-700 transition-all duration-300 overflow-hidden group shadow-xl relative"
            >
              {/* Subtle accent border gradient */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-500" />

              <div className="p-6 sm:p-8 space-y-8">
                {/* Header info */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-emerald-300 transition-colors flex items-center gap-2">
                      <span>{project.name}</span>
                      <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
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

                {/* High-Fidelity Interactive Browser Mockup Frame */}
                <div className="relative rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl group/browser">
                  {/* Browser Window Header */}
                  <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800/80 flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <div className="px-4 py-1 rounded-md bg-zinc-950 border border-zinc-800/80 text-zinc-400 text-[11px] font-mono flex items-center gap-2 max-w-xs truncate">
                      <Globe className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{project.liveDemoLink}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-500 text-[11px]">
                      <span>Vue 3</span>
                      <span>•</span>
                      <span>NestJS</span>
                    </div>
                  </div>

                  {/* Mockup Canvas */}
                  <div className="p-6 sm:p-8 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black relative min-h-[260px] flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

                    {/* Linkly Mockup UI Card inside Canvas */}
                    <div className="relative z-10 max-w-sm mx-auto w-full p-4 rounded-xl border border-zinc-800 bg-zinc-900/90 backdrop-blur-md space-y-3 shadow-2xl group-hover/browser:scale-105 transition-transform duration-500">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 text-zinc-950 font-bold font-mono text-sm flex items-center justify-center">
                          LK
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white font-mono">@diyor_khasanov</p>
                          <p className="text-[10px] text-zinc-400 font-sans">Software Engineer & Founder</p>
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <div className="p-2 rounded-lg bg-zinc-950/80 border border-zinc-800/80 text-xs text-zinc-200 font-mono flex items-center justify-between hover:border-emerald-500/50 transition-colors">
                          <span className="flex items-center gap-2">
                            <Globe className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Portfolio Website</span>
                          </span>
                          <ExternalLink className="w-3 h-3 text-zinc-500" />
                        </div>

                        <div className="p-2 rounded-lg bg-zinc-950/80 border border-zinc-800/80 text-xs text-zinc-200 font-mono flex items-center justify-between hover:border-emerald-500/50 transition-colors">
                          <span className="flex items-center gap-2">
                            <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
                            <span>GitHub Open Source Repos</span>
                          </span>
                          <ExternalLink className="w-3 h-3 text-zinc-500" />
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 pt-4 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-zinc-900 mt-4">
                      <span className="flex items-center gap-1.5">
                        <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Live Analytics Active</span>
                      </span>
                      <span className="text-zinc-500">Sub-50ms Response</span>
                    </div>
                  </div>
                </div>

                {/* Key Features Section */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    Key Platform Capabilities
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
                    Tech Stack & Frameworks
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium font-mono text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo App</span>
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 font-medium font-mono text-xs sm:text-sm transition-all duration-200 hover:border-zinc-700 hover:-translate-y-0.5 cursor-pointer"
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 font-medium font-mono text-xs transition-all duration-200 hover:border-zinc-700 hover:-translate-y-0.5 shrink-0 self-start sm:self-auto cursor-pointer"
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
