import type { Metadata } from "next";
import {
  Globe,
  Languages,
  Code2,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Languages & Communication | Diyor Khasanov",
  description:
    "Spoken languages (English, Uzbek, Russian) and programming languages proficiency of Diyor Khasanov - Senior Frontend & Software Engineer.",
};

interface SpokenLanguage {
  name: string;
  nativeName: string;
  proficiency: "Native" | "Advanced" | "Intermediate";
  subtext: string;
  level: number;
  badgeColor: string;
  barGradient: string;
  description: string;
  highlights: string[];
}

interface ProgrammingLanguage {
  name: string;
  proficiency: string;
  level: number;
  description: string;
  tags: string[];
}

export default function LanguagesPage() {
  const spokenLanguages: SpokenLanguage[] = [
    {
      name: "Uzbek",
      nativeName: "O‘zbek tili",
      proficiency: "Native",
      subtext: "First Language / Mother Tongue",
      level: 100,
      badgeColor:
        "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
      barGradient: "from-emerald-500 to-teal-400",
      description:
        "Full native mastery in verbal, written, and technical communication. Primary language for local community engagements and team leadership.",
      highlights: [
        "Native Fluency",
        "Technical & Business Writing",
        "Team Leadership & Mentorship",
      ],
    },
    {
      name: "English",
      nativeName: "English",
      proficiency: "Advanced",
      subtext: "Fluent / C1 Professional Working",
      level: 92,
      badgeColor:
        "border-sky-500/30 bg-sky-500/10 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.15)]",
      barGradient: "from-sky-500 to-indigo-400",
      description:
        "Advanced professional fluency in global software engineering. Proficient in conducting architecture reviews, writing specs, and leading international client calls.",
      highlights: [
        "International Remote Collaboration",
        "System Specs & Documentation",
        "Client Presentations & Demos",
      ],
    },
    {
      name: "Russian",
      nativeName: "Русский язык",
      proficiency: "Intermediate",
      subtext: "B1/B2 Working Proficiency",
      level: 75,
      badgeColor:
        "border-amber-500/30 bg-amber-500/10 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.15)]",
      barGradient: "from-amber-500 to-orange-400",
      description:
        "Intermediate spoken and written communication. Capable of active participation in regional engineering discussions, code reviews, and documentation reading.",
      highlights: [
        "Regional Team Collaboration",
        "Technical Documentation Reading",
        "Daily Standups & Syncs",
      ],
    },
  ];

  const programmingLanguages: ProgrammingLanguage[] = [
    {
      name: "TypeScript & JavaScript",
      proficiency: "Expert / Core Craft",
      level: 98,
      description:
        "Strict type systems, modern ECMAScript features, Next.js Server Components, React 19 hooks, AST transformations, and asynchronous control flow.",
      tags: ["TypeScript 5.x", "ESNext", "React 19", "Next.js 16"],
    },
    {
      name: "HTML5, CSS3 & Tailwind CSS",
      proficiency: "Expert / UI Architecture",
      level: 96,
      description:
        "Tailwind CSS v4, CSS Grid/Flexbox, accessibility standards (a11y), responsive design patterns, CSS animations, and performance optimizations.",
      tags: ["Tailwind v4", "Flex/Grid", "WAI-ARIA", "Responsive UI"],
    },
    {
      name: "SQL & Query Languages",
      proficiency: "Advanced",
      level: 86,
      description:
        "Relational database design with PostgreSQL, Prisma ORM schema modeling, index optimization, complex joins, and GraphQL query schemas.",
      tags: ["PostgreSQL", "Prisma ORM", "GraphQL", "MongoDB"],
    },
  ];

  return (
    <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-12 overflow-hidden">
      {/* Header Banner */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/10 text-teal-300 text-xs font-mono">
          <Globe className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
          <span>Multilingual & Technical Fluency</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Languages & Communication
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
          Effective global engineering requires clear communication. Here is an overview of my spoken languages and core programming language proficiencies.
        </p>
      </div>

      {/* Section 1: Spoken Human Languages */}
      <section className="space-y-6">
        <div
          data-aos="fade-right"
          data-aos-delay="150"
          className="flex items-center justify-between border-b border-zinc-800/80 pb-3"
        >
          <div className="flex items-center gap-2.5">
            <Languages className="w-5 h-5 text-teal-400" />
            <h2 className="text-xl font-bold tracking-tight text-zinc-100">
              Spoken Languages
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            3 Languages
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {spokenLanguages.map((lang, idx) => (
            <div
              key={lang.name}
              data-aos="fade-up"
              data-aos-delay={200 + idx * 100}
              className="p-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/70 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden group shadow-lg hover:shadow-[0_12px_24px_rgba(0,0,0,0.5)]"
            >
              {/* Header: Name, Native Name & Level Badge */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                      {lang.name}
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono">
                      {lang.nativeName}
                    </p>
                  </div>

                  <span
                    className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${lang.badgeColor} shrink-0`}
                  >
                    {lang.proficiency}
                  </span>
                </div>

                <p className="text-xs font-mono text-zinc-400 pt-1">
                  {lang.subtext}
                </p>

                {/* Progress Bar Gauge */}
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                    <span>Fluency Level</span>
                    <span>{lang.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${lang.barGradient} rounded-full transition-all duration-1000`}
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-sans pt-2">
                  {lang.description}
                </p>
              </div>

              {/* Highlights / Usage Pills */}
              <div className="space-y-2 pt-3 border-t border-zinc-900">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                  <MessageSquare className="w-3 h-3 text-teal-400" />
                  <span className="uppercase tracking-wider text-[10px] text-zinc-500">
                    Key Highlights
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {lang.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 text-xs text-zinc-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Programming & Query Languages */}
      <section className="space-y-6 pt-4">
        <div
          data-aos="fade-right"
          data-aos-delay="150"
          className="flex items-center justify-between border-b border-zinc-800/80 pb-3"
        >
          <div className="flex items-center gap-2.5">
            <Code2 className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold tracking-tight text-zinc-100">
              Programming & Development Languages
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            Technical Languages
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {programmingLanguages.map((lang, idx) => (
            <div
              key={lang.name}
              data-aos="fade-up"
              data-aos-delay={200 + idx * 100}
              className="p-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/70 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden group shadow-lg hover:shadow-[0_12px_24px_rgba(0,0,0,0.5)]"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {lang.name}
                  </h3>
                  <span className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-md shrink-0">
                    {lang.level}%
                  </span>
                </div>

                <p className="text-xs font-mono text-zinc-400">{lang.proficiency}</p>

                {/* Bar */}
                <div className="w-full h-1.5 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full transition-all duration-1000"
                    style={{ width: `${lang.level}%` }}
                  />
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-sans pt-1">
                  {lang.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-3 border-t border-zinc-900 space-y-2">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  <Zap className="w-3 h-3 text-indigo-400" />
                  <span>Key Competencies</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {lang.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Senior Engineer Summary Note */}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="p-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/40 text-center space-y-2"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Cross-Cultural & Technical Collaboration</span>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Fluid communication in <span className="text-white font-medium">English (Advanced)</span>, <span className="text-white font-medium">Uzbek (Native)</span>, and <span className="text-white font-medium">Russian (Intermediate)</span> enables smooth cross-border collaboration with engineering teams and clients worldwide.
        </p>
      </div>
    </main>
  );
}
