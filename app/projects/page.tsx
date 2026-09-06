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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Diyor Khasanov - Software Engineer",
  description:
    "Explore Linkly - a modern link-in-bio platform built with Vue.js, TypeScript, NestJS, MongoDB, and TailwindCSS by Diyor Khasanov.",
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

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-12 overflow-hidden">
      {/* Page Header */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-xs font-mono">
          <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Featured Projects & Applications</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Projects
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
          A showcase of full-stack web applications, platforms, and open-source software engineered for exceptional user experience and high performance.
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
    </main>
  );
}
