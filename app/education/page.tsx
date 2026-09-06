import type { Metadata } from "next";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Building,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Education & Academic Background | Developer Portfolio",
  description:
    "Academic background, degrees, relevant coursework, and software engineering foundations of Diyor Khasanov.",
};

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpa: string;
  honors?: string;
  coursework: string[];
  description: string;
}

export default function EducationPage() {
  const educationList: EducationItem[] = [
    {
      degree: "Bachelor of Science in Computer Science & Software Engineering",
      institution: "Tashkent University of Information Technologies",
      period: "2020 — 2024",
      location: "Tashkent, Uzbekistan",
      gpa: "3.9 / 4.0",
      honors: "First-Class Honors & High Distinction",
      description:
        "Specialized in Software Engineering, Distributed Systems, Data Structures & Algorithms, and Mobile Application Architecture.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Software Design",
        "Database Management Systems",
        "Web Application Architecture",
        "Mobile Systems Development",
        "Computer Networks & Security",
      ],
    },
  ];

  return (
    <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-12 overflow-hidden">
      {/* Header Banner */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-mono">
          <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
          <span>Academic Background & CS Foundations</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Education & Degree
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
          Strong theoretical foundations in computer science paired with hands-on software design, algorithms, and web/mobile engineering coursework.
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-6">
        {educationList.map((edu, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={150 + idx * 100}
            className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700 transition-all duration-300 space-y-5 relative overflow-hidden group shadow-sm hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
          >
            {edu.honors && (
              <div className="absolute top-0 right-0 px-3 py-1 bg-amber-500/10 border-b border-l border-amber-500/30 text-amber-300 font-mono text-[10px] uppercase tracking-wider rounded-bl-lg flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>{edu.honors}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {edu.degree}
                </h2>
                <div className="flex items-center gap-2 pt-1 font-mono text-xs text-zinc-400">
                  <Building className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{edu.institution}</span>
                  <span className="text-zinc-600">•</span>
                  <span>{edu.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800/80 shrink-0 self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                <span>{edu.period}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              {edu.description}
            </p>

            <div className="space-y-3 pt-2 border-t border-zinc-900">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                <span className="uppercase tracking-wider text-zinc-500">Core Coursework & Studies</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {edu.coursework.map((course, cIdx) => (
                  <div
                    key={cIdx}
                    className="flex items-center gap-2 text-xs text-zinc-300 p-2 rounded bg-zinc-900/50 border border-zinc-900"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
