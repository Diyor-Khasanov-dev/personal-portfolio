"use client";

import { useState } from "react";
import {
  Code2,
  Palette,
  Layers,
  Server,
  Database,
  Smartphone,
  Bot,
  Terminal,
  Cpu,
  Search,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Flame,
} from "lucide-react";

export interface SkillItem {
  name: string;
  level: "Expert" | "Proficient" | "Advanced";
  years: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: React.ReactNode;
  badge: string;
  description: string;
  skills: SkillItem[];
}

export default function TechStackClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const skillGroups: SkillGroup[] = [
    {
      id: "frontend",
      title: "Frontend Frameworks & Architecture",
      icon: <Code2 className="w-5 h-5 text-whitesmoke" />,
      badge: "Core Expertise",
      description:
        "Building resilient, accessible, sub-50ms web applications with server components, hydration optimization, and micro-frontend architectures.",
      skills: [
        {
          name: "React (v18 / v19)",
          level: "Expert",
          years: "4+ yrs",
          description:
            "Deep mastery of React Fiber, Concurrent Mode, Server Components, Custom Hooks, UseOptimistic, and component lifecycle performance.",
          tags: ["Hooks", "RSC", "Concurrent", "DOM Fiber"],
          featured: true,
        },
        {
          name: "Next.js (v14 - v16)",
          level: "Expert",
          years: "4+ yrs",
          description:
            "Production App Router architecture, Turbopack, SSR/ISR/SSG strategies, Middleware, Edge Runtime, and SEO Optimization.",
          tags: ["App Router", "Turbopack", "Edge API", "ISR"],
          featured: true,
        },
        {
          name: "Vue.js (v2 / v3)",
          level: "Proficient",
          years: "2+ yrs",
          description:
            "Composition API, Reactivity System, Teleport, Pinia, Custom Directives, and reactive state orchestration.",
          tags: ["Composition API", "Reactivity", "Pinia", "Provide/Inject"],
        },
        {
          name: "Nuxt.js (v3)",
          level: "Proficient",
          years: "2+ yrs",
          description:
            "Universal SSR rendering, Nitro engine server routes, auto-imports, and module ecosystem for high-speed Vue apps.",
          tags: ["Nitro Engine", "SSR", "Server Routes", "Nuxt Modules"],
        },
        {
          name: "TypeScript",
          level: "Expert",
          years: "4+ yrs",
          description:
            "Strict type-checking, generics, utility types, AST transformations, zero-any policy, and end-to-end type safety.",
          tags: ["Strict Type", "Generics", "Type Inference", "AST"],
          featured: true,
        },
      ],
    },
    {
      id: "styling",
      title: "Styling, UI Systems & Design Systems",
      icon: <Palette className="w-5 h-5 text-pink-400" />,
      badge: "Design Craft",
      description:
        "Crafting pixel-perfect, dark-mode first design systems with atomic CSS, accessible headless primitives, and responsive micro-interactions.",
      skills: [
        {
          name: "Tailwind CSS (v3 / v4)",
          level: "Expert",
          years: "4+ yrs",
          description:
            "Utility-first mastery, JIT compilation, dynamic theme variables, CSS container queries, and custom Tailwind plugin extensions.",
          tags: ["Tailwind v4", "JIT", "Design Tokens", "PostCSS"],
          featured: true,
        },
        {
          name: "Material UI (MUI)",
          level: "Advanced",
          years: "3+ yrs",
          description:
            "Custom emotion themes, slot props overrides, heavy enterprise dashboard styling, DataGrid custom filters, and WCAG accessibility.",
          tags: ["Emotion", "Theme Provider", "DataGrid", "A11y"],
        },
        {
          name: "Ant Design (AntD)",
          level: "Advanced",
          years: "2+ yrs",
          description:
            "Enterprise back-office layouts, Form validation integration, table virtual pagination, and localization tokens.",
          tags: ["Enterprise UI", "Form Rules", "Virtual Lists"],
        },
        {
          name: "Shadcn UI & Radix Primitives",
          level: "Expert",
          years: "2+ yrs",
          description:
            "Copy-paste headless component architectures, ARIA compliance, custom CVA variants, and keyboard focus traps.",
          tags: ["Headless", "Radix UI", "CVA", "Accessibility"],
          featured: true,
        },
        {
          name: "Framer Motion & CSS Animations",
          level: "Advanced",
          years: "3+ yrs",
          description:
            "Smooth page transitions, layout animations, exit animations, and gesture-driven micro-interactions.",
          tags: ["Layout Animations", "Gestures", "Keyframes"],
        },
      ],
    },
    {
      id: "state",
      title: "State Management & Data Fetching",
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      badge: "Data Flow",
      description:
        "Predictable global state, optimistic UI updates, zero-boilerplate client stores, and intelligent query caching.",
      skills: [
        {
          name: "TanStack Query (React Query)",
          level: "Expert",
          years: "3+ yrs",
          description:
            "Server-state synchronization, optimistic mutations, infinite scrolling queries, background refetching, and query key factories.",
          tags: ["Cache Mgmt", "Optimistic Updates", "Infinite Query"],
          featured: true,
        },
        {
          name: "Zustand",
          level: "Expert",
          years: "3+ yrs",
          description:
            "Lightweight atomic client state, selector optimization, slice pattern, persist middleware, and React 19 external store sync.",
          tags: ["Atomic State", "Persist Middleware", "Selectors"],
          featured: true,
        },
        {
          name: "Redux & Redux Toolkit (RTK)",
          level: "Advanced",
          years: "3+ yrs",
          description:
            "RTK Query endpoints, normalized slice stores, custom middleware, Redux Saga/Thunk, and immutability via Immer.",
          tags: ["RTK Query", "Slices", "Middleware", "Immer"],
        },
        {
          name: "React Context & React 19 Actions",
          level: "Expert",
          years: "4+ yrs",
          description:
            "Custom Provider abstractions, useActionState, useFormStatus, and re-render mitigation via memoization.",
          tags: ["UseActionState", "FormStatus", "Providers"],
        },
      ],
    },
    {
      id: "backend",
      title: "Backend Services & API Architecture",
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      badge: "Server & Microservices",
      description:
        "Designing scalable REST & GraphQL APIs, real-time WebSockets engines, and enterprise backend microservices with strong validation.",
      skills: [
        {
          name: "Node.js",
          level: "Expert",
          years: "4+ yrs",
          description:
            "Event Loop optimization, streams, worker threads, async I/O handling, NPM/pnpm package development, and memory leak profiling.",
          tags: ["Event Loop", "Streams", "Async I/O", "Worker Threads"],
          featured: true,
        },
        {
          name: "Express.js",
          level: "Expert",
          years: "4+ yrs",
          description:
            "Robust RESTful API design, custom middleware pipelines, JWT/OAuth2 authentication, rate limiting, and structured error boundaries.",
          tags: ["REST API", "JWT Auth", "Rate Limit", "Middleware"],
        },
        {
          name: "NestJS",
          level: "Advanced",
          years: "2+ yrs",
          description:
            "Enterprise modular architecture, Dependency Injection, Decorators, Guards, Interceptors, Pipes, and Swagger OpenAPI generation.",
          tags: ["Dependency Injection", "Guards", "Swagger", "Modules"],
          featured: true,
        },
        {
          name: "GraphQL & WebSockets",
          level: "Advanced",
          years: "3+ yrs",
          description:
            "Apollo Server, Schema-first & Code-first definitions, DataLoader batching, Socket.io real-time event rooms.",
          tags: ["Apollo", "DataLoader", "Socket.io", "Real-Time"],
        },
      ],
    },
    {
      id: "database",
      title: "Databases, ORMs & Caching",
      icon: <Database className="w-5 h-5 text-amber-400" />,
      badge: "Persistence Layer",
      description:
        "High-performance data modeling, relational normalization, NoSQL document store tuning, and sub-millisecond Redis caching.",
      skills: [
        {
          name: "PostgreSQL",
          level: "Expert",
          years: "3+ yrs",
          description:
            "Relational schema design, indexes (B-Tree, GIN), CTEs, JSONB columns, ACID transactions, and query execution plan tuning.",
          tags: ["Indexing", "JSONB", "ACID", "Query Plan"],
          featured: true,
        },
        {
          name: "MongoDB",
          level: "Advanced",
          years: "3+ yrs",
          description:
            "Document schema design, aggregation pipelines, compound indexing, Mongoose ORM models, and sharding strategies.",
          tags: ["Aggregation", "NoSQL", "Document Store", "Mongoose"],
        },
        {
          name: "Redis",
          level: "Advanced",
          years: "3+ yrs",
          description:
            "In-memory key-value caching, Pub/Sub event broadcasting, rate limiting tokens, session store, and TTL cache eviction strategies.",
          tags: ["In-Memory", "Pub/Sub", "Session Cache", "TTL"],
          featured: true,
        },
        {
          name: "Prisma & Drizzle ORM",
          level: "Expert",
          years: "3+ yrs",
          description:
            "Type-safe database client generation, automated migrations, relational joins, raw SQL fallbacks, and multi-tenant schema isolation.",
          tags: ["Type-Safe ORM", "Migrations", "Client Gen"],
        },
      ],
    },
    {
      id: "mobile",
      title: "Mobile Native & Cross-Platform",
      icon: <Smartphone className="w-5 h-5 text-cyan-400" />,
      badge: "iOS & Android",
      description:
        "Crafting native-grade iOS & Android mobile apps with shared TypeScript codebases, smooth 60fps gestures, and native module bridges.",
      skills: [
        {
          name: "React Native",
          level: "Expert",
          years: "3+ yrs",
          description:
            "Bridgeless architecture (Fabric/Turbomodules), native UI responsiveness, memory management, native build tuning, and app stores submission.",
          tags: ["Fabric", "Turbomodules", "iOS/Android", "App Store"],
          featured: true,
        },
        {
          name: "Expo (EAS Build & Updates)",
          level: "Expert",
          years: "3+ yrs",
          description:
            "Expo Router v3, EAS Cloud Build & OTA Updates, Config Plugins, Camera/Location SDKs, and Push Notifications setup.",
          tags: ["Expo Router", "EAS Cloud", "OTA Updates", "Config Plugins"],
          featured: true,
        },
        {
          name: "Reanimated 3 & Gesture Handler",
          level: "Advanced",
          years: "2+ yrs",
          description:
            "Declarative UI animations running directly on the UI thread, complex swipe gestures, bottom sheets, and native feel.",
          tags: ["UI Thread", "Worklets", "Gestures", "BottomSheet"],
        },
      ],
    },
    {
      id: "ai-tools",
      title: "AI Tools & AI-Driven Engineering",
      icon: <Bot className="w-5 h-5 text-purple-400" />,
      badge: "Dev Speed Multiplier",
      description:
        "Leveraging cutting-edge AI coding agents and autonomous LLM workflows to accelerate feature delivery, test generation, and code review.",
      skills: [
        {
          name: "Claude Code",
          level: "Expert",
          years: "Daily",
          description:
            "Command-line agentic reasoning, code search, automated refactoring, and multi-file architectural execution.",
          tags: ["Agentic Refactor", "CLI Workflow", "Code Analysis"],
          featured: true,
        },
        {
          name: "ChatGPT & Codex",
          level: "Expert",
          years: "Daily",
          description:
            "Prompt engineering, context window optimization, unit test generation, algorithm design, and code conversion.",
          tags: ["Prompt Eng", "Unit Test Gen", "Algorithm Design"],
          featured: true,
        },
        {
          name: "Jules (GitHub / AI Coding Agent)",
          level: "Expert",
          years: "Daily",
          description:
            "Autonomous repository exploration, automated issue resolution, structured plan execution, and pull request generation.",
          tags: ["Autonomous Coding", "PR Automation", "Task Planning"],
          featured: true,
        },
        {
          name: "Google Stitch / Gemini Code Assist",
          level: "Proficient",
          years: "Daily",
          description:
            "AI-assisted UI design generation, component prototyping, and natural language layout synthesis.",
          tags: ["UI Generation", "Prototype", "Layout Synthesis"],
        },
        {
          name: "Cursor & GitHub Copilot",
          level: "Expert",
          years: "2+ yrs",
          description:
            "In-editor agentic coding, multi-file edits, custom `.cursorrules` configuration, inline completions, and doc lookup.",
          tags: ["CursorRules", "Inline AI", "Context Indexing"],
        },
      ],
    },
    {
      id: "devops",
      title: "DevOps, Testing & Tooling",
      icon: <Terminal className="w-5 h-5 text-whitesmoke" />,
      badge: "Quality & Delivery",
      description:
        "Ensuring production stability with automated CI/CD pipelines, containerization, end-to-end testing, and zero-downtime deployments.",
      skills: [
        {
          name: "Docker & Containerization",
          level: "Advanced",
          years: "3+ yrs",
          description:
            "Multi-stage Dockerfile builds, docker-compose local dev, image size minimization, and microservice isolation.",
          tags: ["Dockerfile", "Docker Compose", "Multi-stage"],
        },
        {
          name: "AWS & Vercel Infrastructure",
          level: "Advanced",
          years: "3+ yrs",
          description:
            "AWS S3, CloudFront CDN, Lambda Serverless, EC2, Vercel Edge Network, custom domain SSL, and env security.",
          tags: ["S3", "CloudFront", "Lambda", "Vercel Edge"],
          featured: true,
        },
        {
          name: "CI/CD & GitHub Actions",
          level: "Advanced",
          years: "3+ yrs",
          description:
            "Automated test runners, lint verification, build previews, release tagging, and automated npm/expo deployment pipelines.",
          tags: ["GitHub Actions", "Workflows", "Auto-Release"],
        },
        {
          name: "Testing (Jest, Playwright, Vitest)",
          level: "Advanced",
          years: "3+ yrs",
          description:
            "Unit testing, integration testing, headless browser e2e testing, snapshot testing, and mock service worker (MSW) mocks.",
          tags: ["Unit & Integration", "Playwright E2E", "Vitest", "MSW"],
        },
      ],
    },
  ];

  // Category filter items
  const categories = [
    { id: "all", label: "All Stacks", count: skillGroups.reduce((acc, g) => acc + g.skills.length, 0) },
    { id: "frontend", label: "Frontend", count: skillGroups.find((g) => g.id === "frontend")?.skills.length || 0 },
    { id: "styling", label: "Styling & UI", count: skillGroups.find((g) => g.id === "styling")?.skills.length || 0 },
    { id: "state", label: "State & Data", count: skillGroups.find((g) => g.id === "state")?.skills.length || 0 },
    { id: "backend", label: "Backend", count: skillGroups.find((g) => g.id === "backend")?.skills.length || 0 },
    { id: "database", label: "Databases", count: skillGroups.find((g) => g.id === "database")?.skills.length || 0 },
    { id: "mobile", label: "Mobile", count: skillGroups.find((g) => g.id === "mobile")?.skills.length || 0 },
    { id: "ai-tools", label: "AI Tools", count: skillGroups.find((g) => g.id === "ai-tools")?.skills.length || 0 },
    { id: "devops", label: "DevOps & Testing", count: skillGroups.find((g) => g.id === "devops")?.skills.length || 0 },
  ];

  // Filter groups and skills
  const filteredGroups = skillGroups
    .filter((group) => activeCategory === "all" || group.id === activeCategory)
    .map((group) => {
      if (!searchQuery.trim()) return group;
      const q = searchQuery.toLowerCase();
      const matchingSkills = group.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.tags.some((t) => t.toLowerCase().includes(q))
      );
      return { ...group, skills: matchingSkills };
    })
    .filter((group) => group.skills.length > 0);

  return (
    <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-10 overflow-hidden">
      {/* Top Banner Header */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/20 bg-white/10 text-zinc-200 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5 text-whitesmoke" />
          <span>Full Stack & Mobile Senior Engineering Stack</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Tech Stack & Engineering Arsenal
        </h1>

        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-3xl">
          A deeply battle-tested ecosystem of frameworks, tools, databases, and AI accelerators engineered for production resilience, type safety, sub-50ms user interfaces, and rapid product velocity.
        </p>
      </div>

      {/* Quick Metrics Bar */}
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/60"
      >
        <div className="space-y-1 border-r border-zinc-900 pr-3">
          <div className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Primary Focus</span>
          </div>
          <div className="text-sm font-semibold text-zinc-100 font-mono">
            React / Next / RN
          </div>
        </div>

        <div className="space-y-1 border-r border-zinc-900 pr-3">
          <div className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-whitesmoke" />
            <span>Type Safety</span>
          </div>
          <div className="text-sm font-semibold text-whitesmoke font-mono">
            100% TypeScript
          </div>
        </div>

        <div className="space-y-1 border-r border-zinc-900 pr-3">
          <div className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-sky-400" />
            <span>Target Speed</span>
          </div>
          <div className="text-sm font-semibold text-sky-300 font-mono">
            Sub-50ms UI
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
            <Bot className="w-3.5 h-3.5 text-purple-400" />
            <span>AI Accelerated</span>
          </div>
          <div className="text-sm font-semibold text-purple-300 font-mono">
            Claude Code & Jules
          </div>
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search technology, tag, or library (e.g. Next.js, Redux, Expo, Redis)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-800 bg-zinc-950 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors font-mono"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-zinc-200 font-mono bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800"
            >
              Clear
            </button>
          )}
        </div>

        {/* Horizontal Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? "bg-zinc-100 text-zinc-950 font-semibold shadow-sm"
                    : "bg-zinc-950 border border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isActive
                      ? "bg-zinc-900 text-zinc-100"
                      : "bg-zinc-900 text-zinc-500 border border-zinc-800"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtered Groups Display */}
      {filteredGroups.length === 0 ? (
        <div className="py-16 text-center space-y-3 rounded-xl border border-zinc-800/80 bg-zinc-950/40">
          <Terminal className="w-8 h-8 text-zinc-600 mx-auto" />
          <p className="text-sm font-mono text-zinc-400">
            No technologies found matching &quot;{searchQuery}&quot;.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
            className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-whitesmoke hover:text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {filteredGroups.map((group, groupIdx) => (
            <section
              key={group.id}
              data-aos="fade-up"
              data-aos-delay={100 + groupIdx * 80}
              className="p-5 sm:p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80 transition-all duration-300 space-y-5 relative overflow-hidden shadow-sm"
            >
              {/* Group Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-900 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800/90 shadow-sm">
                    {group.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-bold text-white tracking-tight">
                        {group.title}
                      </h2>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                        {group.badge}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 max-w-2xl font-sans">
                      {group.description}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-zinc-500 shrink-0 self-start sm:self-center">
                  {group.skills.length} Stack Items
                </span>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.skills.map((skill, sIdx) => {
                  const isExpert = skill.level === "Expert";
                  return (
                    <div
                      key={sIdx}
                      className={`p-4 rounded-lg border transition-all duration-200 flex flex-col justify-between space-y-3 group/card ${
                        skill.featured
                          ? "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/90 hover:border-zinc-700"
                          : "border-zinc-900 bg-zinc-950/80 hover:bg-zinc-900/40 hover:border-zinc-800"
                      }`}
                    >
                      <div className="space-y-2">
                        {/* Title + Level Badge */}
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-sm font-bold text-zinc-100 group-hover/card:text-white transition-colors flex items-center gap-2">
                            <span>{skill.name}</span>
                          </h3>

                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                                isExpert
                                  ? "bg-white/10 border-white/30 text-zinc-200"
                                  : "bg-zinc-800 border-zinc-700 text-zinc-300"
                              }`}
                            >
                              {skill.level}
                            </span>
                            <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">
                              {skill.years}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-zinc-300 leading-relaxed font-sans pt-0.5">
                          {skill.description}
                        </p>
                      </div>

                      {/* Tag Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-900/80">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-zinc-900/80 border border-zinc-800/80 text-[10px] font-mono text-zinc-400 group-hover/card:text-zinc-300 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* Senior Architectural Engineering Manifesto Callout */}
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/80 space-y-4 relative overflow-hidden"
      >
        <div className="flex items-center gap-2.5 text-xs font-mono text-whitesmoke uppercase tracking-wider">
          <CheckCircle2 className="w-4 h-4 text-whitesmoke" />
          <span>Architectural Philosophy & Quality Assurance</span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
          Technology frameworks change rapidly, but foundational computer science principles, clean component design, strict static typing, and performance profiling remain timeless. I advocate for minimal bundle overhead, zero-delay micro-interactions, robust CI/CD, and strategic AI agent integration to supercharge engineering output.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-zinc-900">
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
            <span>• Next.js App Router</span>
            <span>• React Native Expo</span>
            <span>• NestJS & Node</span>
            <span>• Tailwind v4</span>
          </div>

          <a
            href="https://github.com/Diyor-Khasanov-dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-whitesmoke hover:text-white transition-colors"
          >
            <span>Explore Repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </main>
  );
}
