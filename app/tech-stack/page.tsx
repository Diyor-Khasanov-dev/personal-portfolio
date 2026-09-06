import type { Metadata } from "next";
import {
  Cpu,
  Code2,
  Smartphone,
  Server,
  Cloud,
  Wrench,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tech Stack & Skills | Developer Portfolio",
  description:
    "Comprehensive technology stack, frameworks, tools, and engineering proficiencies mastered by Diyor Khasanov.",
};

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number; description: string }[];
}

export default function TechStackPage() {
  const categories: SkillCategory[] = [
    {
      title: "Frontend Engineering",
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      skills: [
        { name: "React 19 & Next.js 16", level: 98, description: "App Router, Server Components, SSR/ISR, Performance Optimization" },
        { name: "TypeScript", level: 95, description: "Strict typing, generics, AST transformations, type-safe API clients" },
        { name: "Tailwind CSS & Styling", level: 96, description: "Tailwind v4, CSS Modules, Framer Motion, micro-animations" },
        { name: "State Management", level: 92, description: "Zustand, React Query/TanStack, Redux Toolkit, Context API" },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-5 h-5 text-sky-400" />,
      skills: [
        { name: "React Native & Expo", level: 94, description: "Cross-platform iOS/Android, Expo EAS, Native Modules, Performance tuning" },
        { name: "Mobile UI & Gestures", level: 90, description: "Reanimated 3, Gesture Handler, Haptic feedback, Payment Sheet SDKs" },
      ],
    },
    {
      title: "Backend & Architectures",
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      skills: [
        { name: "Node.js & Express / NestJS", level: 88, description: "RESTful microservices, WebSockets, Middleware authentication" },
        { name: "GraphQL & Database ORM", level: 86, description: "Prisma ORM, PostgreSQL, Redis caching, Schema design" },
      ],
    },
    {
      title: "Cloud Infrastructure & DevOps",
      icon: <Cloud className="w-5 h-5 text-amber-400" />,
      skills: [
        { name: "AWS & Vercel Hosting", level: 85, description: "S3, CloudFront, Lambda, Serverless functions, Vercel Edge" },
        { name: "Docker & CI/CD Pipelines", level: 82, description: "GitHub Actions, automated testing, containerization" },
      ],
    },
    {
      title: "Developer Tools & Workflow",
      icon: <Wrench className="w-5 h-5 text-rose-400" />,
      skills: [
        { name: "Git, Vite & Turbopack", level: 95, description: "Monorepo architectures, pnpm/bun workflows, ESLint/Prettier" },
        { name: "UI/UX & Prototyping", level: 90, description: "Figma design token translation, accessibility (a11y), responsive craft" },
      ],
    },
  ];

  return (
    <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-12 overflow-hidden">
      {/* Header Banner */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5 text-purple-400" />
          <span>Core Engineering Competencies</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Tech Stack & Skills
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
          A deeply curated collection of modern technologies, libraries, and architectural standards used to craft resilient digital platforms.
        </p>
      </div>

      {/* Skill Categories Grid */}
      <div className="space-y-8">
        {categories.map((cat, catIdx) => (
          <section
            key={catIdx}
            data-aos="fade-up"
            data-aos-delay={150 + catIdx * 100}
            className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80 transition-all duration-300 space-y-5 relative overflow-hidden group shadow-sm hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                {cat.icon}
              </div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                {cat.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3.5 rounded-lg border border-zinc-900 bg-zinc-900/40 space-y-2 hover:bg-zinc-900/80 transition-colors"
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-semibold text-zinc-100 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      {skill.name}
                    </span>
                    <span className="text-zinc-500">{skill.level}%</span>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 via-sky-400 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-zinc-400 leading-snug font-sans pt-0.5">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Philosophy Callout */}
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/30 space-y-2"
      >
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Engineering Philosophy</span>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
          Tools and frameworks evolve rapidly. I prioritize strong computer science fundamentals, type safety, bundle-size consciousness, accessibility standards, and clean component composition over hype.
        </p>
      </div>
    </main>
  );
}
