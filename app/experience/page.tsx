import type { Metadata } from "next";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work Experience & History | Developer Portfolio",
  description:
    "Professional work experience of Diyor Khasanov - Software Engineer & Co-Founder @ A.L.I.A, senior frontend roles, fullstack & mobile projects.",
};

interface WorkRole {
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  description: string;
  highlights: string[];
  techStack: string[];
  current?: boolean;
}

export default function ExperiencePage() {
  const experiences: WorkRole[] = [
    {
      role: "Co-Founder & Lead Software Engineer",
      company: "A.L.I.A",
      period: "2023 — Present",
      type: "Co-Founded Venture",
      location: "Tashkent, Uzbekistan",
      current: true,
      description:
        "Leading platform architecture, frontend design system, and backend microservice design for A.L.I.A. Architected sub-50ms web interfaces and cross-platform native mobile applications.",
      highlights: [
        "Architected enterprise core suite with React 19, Next.js App Router, and TypeScript",
        "Decreased initial page load times by 65% through server components and dynamic module splitting",
        "Mentored frontend & mobile engineering team, setting up automated CI/CD and linting standards",
      ],
      techStack: ["Next.js 16", "React 19", "React Native", "TypeScript", "Tailwind CSS v4", "Node.js", "GraphQL"],
    },
    {
      role: "Senior Frontend Engineer",
      company: "Tez Payment Solutions",
      period: "2022 — 2023",
      type: "Full-Time",
      location: "Tashkent, Uzbekistan",
      description:
        "Engineered secure, high-volume payment processing client applications and SDKs serving banking partners and consumer applications with high security and reliability requirements.",
      highlights: [
        "Built responsive web payment portal and mobile SDK powering live transactional workloads",
        "Engineered real-time checkout verification flow with automated retry handling and instant receipt generator",
        "Optimized bundle size by 40%, achieving lighthouse performance scores above 98 across web clients",
      ],
      techStack: ["React", "React Native", "Expo", "TypeScript", "Tailwind CSS", "REST APIs", "Zustand"],
    },
    {
      role: "Fullstack & Mobile Engineer",
      company: "Lumora & Independent Engineering",
      period: "2021 — 2022",
      type: "Contract / Sprint",
      location: "Remote / Tashkent",
      description:
        "Delivered fullstack web platforms, competitive contest automation tools, and client dashboard portals for rapid-growth tech products and hackathon-backed initiatives.",
      highlights: [
        "Built Lumora competitive coding & robotics platform with WebSockets real-time leaderboards",
        "Designed award-winning CRM/ERP merchant interface for Billz (1st Place Hackathon Winner)",
        "Shipped 10+ web and mobile MVPs under aggressive client timelines",
      ],
      techStack: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "WebSockets", "Docker"],
    },
  ];

  return (
    <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-12 overflow-hidden">
      {/* Header Banner */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-xs font-mono">
          <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
          <span>Professional History & Impact</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Work Experience
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
          Over 4+ years of building software engineering solutions, leading frontend strategy, co-founding ventures, and shipping resilient products.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative border-l border-zinc-800/80 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={200 + idx * 120}
            className="relative group"
          >
            {/* Timeline Node Bullet */}
            <div
              className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                exp.current
                  ? "border-emerald-500 bg-emerald-950 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                  : "border-zinc-700 bg-zinc-900 group-hover:border-zinc-500"
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  exp.current ? "bg-emerald-400 animate-pulse" : "bg-zinc-500"
                }`}
              />
            </div>

            {/* Experience Card */}
            <div className="p-5 sm:p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 space-y-4 group relative overflow-hidden shadow-sm hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]">
              {exp.current && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500/10 border-b border-l border-emerald-500/30 text-emerald-400 font-mono text-[10px] uppercase tracking-wider rounded-bl-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Current Role</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {exp.role}
                  </h2>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-sm font-semibold text-emerald-400 font-mono flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      {exp.company}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-xs text-zinc-400 font-mono">{exp.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800/80 shrink-0 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-1 border-t border-zinc-900">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                  Key Deliverables & Impact
                </p>
                {exp.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Callout */}
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/30 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-sm font-semibold text-white">
            Looking for detailed technical breakdown or reference calls?
          </h3>
          <p className="text-xs text-zinc-400">
            I am available for fullstack, senior frontend, and mobile tech leadership roles.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium font-mono text-xs transition-all inline-flex items-center gap-1.5 shrink-0"
        >
          <span>Schedule Discussion</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950" />
        </Link>
      </div>
    </main>
  );
}
