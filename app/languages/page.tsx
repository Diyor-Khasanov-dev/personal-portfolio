import type { Metadata } from "next";
import { Globe, Languages, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Languages & Communication | Developer Portfolio",
  description:
    "Spoken languages and programming language proficiencies of Diyor Khasanov.",
};

interface LanguageProficiency {
  name: string;
  proficiency: string;
  level: number;
  type: "Spoken" | "Programming";
  details: string;
}

export default function LanguagesPage() {
  const spokenLanguages: LanguageProficiency[] = [
    {
      name: "Uzbek",
      proficiency: "Native / Bilingual",
      level: 100,
      type: "Spoken",
      details: "Native fluency in written and verbal technical communication.",
    },
    {
      name: "English",
      proficiency: "Professional Working / Technical",
      level: 90,
      type: "Spoken",
      details: "Fluent in technical documentation, code reviews, international client calls, and engineering writeups.",
    },
    {
      name: "Russian",
      proficiency: "Professional Working",
      level: 85,
      type: "Spoken",
      details: "Full professional proficiency in regional tech team communication and client interactions.",
    },
  ];

  const codeLanguages: LanguageProficiency[] = [
    {
      name: "TypeScript & JavaScript",
      proficiency: "Expert / Daily Craft",
      level: 98,
      type: "Programming",
      details: "Strict type systems, AST manipulation, Next.js Server Components, React 19 hooks, Async control flow.",
    },
    {
      name: "HTML5 / CSS3 / Tailwind",
      proficiency: "Expert / UI Master",
      level: 96,
      type: "Programming",
      details: "Tailwind CSS v4, CSS Grid/Flexbox, accessibility standards (a11y), responsive design.",
    },
    {
      name: "SQL & GraphQL Query Languages",
      proficiency: "Advanced",
      level: 86,
      type: "Programming",
      details: "PostgreSQL queries, Prisma ORM schema modeling, GraphQL resolvers and schema stitching.",
    },
  ];

  return (
    <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-12 overflow-hidden">
      {/* Header Banner */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/10 text-teal-300 text-xs font-mono">
          <Globe className="w-3.5 h-3.5 text-teal-400" />
          <span>Multilingual & Code Fluency</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Languages & Communication
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
          Effective team communication across spoken human languages and precise mastery over modern programming languages.
        </p>
      </div>

      {/* Section 1: Spoken Human Languages */}
      <section className="space-y-6">
        <div data-aos="fade-right" data-aos-delay="150" className="flex items-center gap-2.5 border-b border-zinc-800/80 pb-3">
          <Languages className="w-5 h-5 text-teal-400" />
          <h2 className="text-xl font-bold tracking-tight text-zinc-100">
            Spoken & Written Languages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {spokenLanguages.map((lang, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={200 + idx * 80}
              className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700 transition-all duration-300 space-y-3 relative overflow-hidden group shadow-sm hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                  {lang.name}
                </h3>
                <span className="text-[11px] font-mono text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded">
                  {lang.level}%
                </span>
              </div>

              <p className="text-xs font-mono text-zinc-400">{lang.proficiency}</p>

              {/* Progress bar */}
              <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-1000"
                  style={{ width: `${lang.level}%` }}
                />
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed font-sans pt-1">
                {lang.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Programming Query & Markup Languages */}
      <section className="space-y-6 pt-4">
        <div data-aos="fade-right" data-aos-delay="150" className="flex items-center gap-2.5 border-b border-zinc-800/80 pb-3">
          <Code2 className="w-5 h-5 text-indigo-400" />
          <h2 className="text-xl font-bold tracking-tight text-zinc-100">
            Programming & Query Languages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {codeLanguages.map((lang, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={200 + idx * 80}
              className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700 transition-all duration-300 space-y-3 relative overflow-hidden group shadow-sm hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {lang.name}
                </h3>
                <span className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded">
                  {lang.level}%
                </span>
              </div>

              <p className="text-xs font-mono text-zinc-400">{lang.proficiency}</p>

              {/* Progress bar */}
              <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full transition-all duration-1000"
                  style={{ width: `${lang.level}%` }}
                />
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed font-sans pt-1">
                {lang.details}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
