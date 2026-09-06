import type { Metadata } from "next";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  CheckCircle2,
  Sparkles,
  Award,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Education & Learning | Developer Portfolio",
  description:
    "Education background, bootcamps, professional certificates, and frontend engineering training of Diyor Khasanov.",
};

interface EducationItem {
  id: string;
  institution: string;
  program: string;
  period: string;
  grade?: string;
  gpa?: string;
  skills: string[];
  description?: string;
  featured?: boolean;
  initials: string;
  badgeBg: string;
}

export default function EducationPage() {
  const educationList: EducationItem[] = [
    {
      id: "najot-talim",
      institution: "Najot Ta'lim",
      program: "Engineering Program, Frontend Development",
      period: "May 2025 – Apr 2026",
      grade: "Bootcamp / Course",
      gpa: "3.97/4.0",
      featured: true,
      initials: "NT",
      badgeBg: "bg-blue-600/20 text-blue-400 border-blue-500/30",
      description:
        "Intensive software engineering program covering modern frontend architectures, responsive UI engineering, web performance, and production-grade Web development.",
      skills: [
        "HTML and CSS",
        "Web Design and Development",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "State Management",
        "Git & Version Control",
        "Web Performance Optimization",
        "RESTful API Integration",
      ],
    },
    {
      id: "meta-coursera",
      institution: "Meta, Coursera",
      program: "Professional Certificate, Frontend Development",
      period: "2024 – Present",
      grade: "Professional Certificate",
      initials: "META",
      badgeBg: "bg-sky-600/20 text-sky-400 border-sky-500/30",
      description:
        "Comprehensive professional credential covering core web technologies, React components, advanced state management, UI/UX design principles, and frontend testing.",
      skills: [
        "React",
        "JavaScript (ES6+)",
        "Advanced CSS & Tailwind",
        "Frontend Testing & Jest",
        "Web Accessibility (a11y)",
        "Version Control (Git)",
      ],
    },
    {
      id: "scrimba",
      institution: "Scrimba",
      program: "TypeScript, JS Algorithms & Prompt Engineering",
      period: "2025 – Present",
      grade: "Specialization Course",
      initials: "SCR",
      badgeBg: "bg-purple-600/20 text-purple-400 border-purple-500/30",
      description:
        "Interactive mastery of strongly-typed frontend architecture with TypeScript, complex data structures & algorithms in JS, and AI prompt engineering workflows.",
      skills: [
        "TypeScript",
        "JavaScript Algorithms",
        "Data Structures",
        "Prompt Engineering",
        "Problem Solving",
        "AI Workflow Integration",
      ],
    },
  ];

  return (
    <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-12 overflow-hidden">
      {/* Header Banner */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-mono">
          <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
          <span>Education & Engineering Training</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Education & Training
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
          Comprehensive bootcamps, professional software engineering programs, and modern web development certifications.
        </p>
      </div>

      {/* Quick Overview Ribbon */}
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/60 font-mono text-xs"
      >
        <div className="space-y-1">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider block">Programs & Certs</span>
          <span className="text-lg font-bold text-zinc-100 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-indigo-400" />
            3 Completed / Active
          </span>
        </div>
        <div className="space-y-1 border-l border-zinc-800/80 pl-3 sm:pl-4">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider block">Bootcamp GPA</span>
          <span className="text-lg font-bold text-emerald-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            3.97 / 4.0
          </span>
        </div>
        <div className="space-y-1 border-l border-zinc-800/80 pl-3 sm:pl-4 col-span-2 sm:col-span-1">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider block">Primary Focus</span>
          <span className="text-lg font-bold text-sky-400 flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-sky-400" />
            Frontend Engineering
          </span>
        </div>
      </div>

      {/* Education Cards */}
      <div className="space-y-6">
        {educationList.map((edu, idx) => (
          <div
            key={edu.id}
            data-aos="fade-up"
            data-aos-delay={150 + idx * 100}
            className={`p-6 rounded-xl border transition-all duration-300 space-y-5 relative overflow-hidden group shadow-sm hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] ${
              edu.featured
                ? "border-indigo-500/30 bg-zinc-950/80 hover:border-indigo-500/50"
                : "border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700"
            }`}
          >
            {edu.featured && (
              <div className="absolute top-0 right-0 px-3 py-1 bg-indigo-500/10 border-b border-l border-indigo-500/30 text-indigo-300 font-mono text-[10px] uppercase tracking-wider rounded-bl-lg flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                <span>Featured Program</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                {/* Institution Initial Badge */}
                <div
                  className={`w-11 h-11 rounded-lg border font-mono text-xs font-bold flex items-center justify-center shrink-0 ${edu.badgeBg}`}
                >
                  {edu.initials}
                </div>

                <div className="space-y-1">
                  <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {edu.institution}
                  </h2>
                  <p className="text-sm font-medium text-zinc-200 font-sans">
                    {edu.program}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-zinc-400">
                    {edu.grade && (
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                        {edu.grade}
                      </span>
                    )}
                    {edu.gpa && (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-400 font-semibold">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 bg-zinc-900/90 px-3 py-1.5 rounded-lg border border-zinc-800/80 shrink-0 self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                <span>{edu.period}</span>
              </div>
            </div>

            {edu.description && (
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {edu.description}
              </p>
            )}

            <div className="space-y-3 pt-2 border-t border-zinc-900">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                <span className="uppercase tracking-wider text-zinc-500">Skills & Focus Areas</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {edu.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{skill}</span>
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
