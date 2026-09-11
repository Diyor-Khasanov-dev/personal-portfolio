import type { Metadata } from "next";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  CheckCircle2,
  Award,
  Code2,
  Sparkles,
} from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";

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
  span: string;
  accent: string;
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
      span: "col-span-12 md:col-span-7",
      accent: "from-indigo-500/80 via-purple-500/50 to-transparent",
      description:
        "Intensive software engineering program covering modern frontend architectures, responsive UI engineering, web performance, and production-grade Web development.",
      skills: [
        "HTML and CSS",
        "Web Design & Dev",
        "JavaScript (ES6+)",
        "TypeScript",
        "React & Next.js",
        "Tailwind CSS",
        "State Management",
        "Git & Version Control",
        "Web Performance",
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
      span: "col-span-12 md:col-span-5",
      accent: "from-sky-500/80 via-blue-500/40 to-transparent",
      description:
        "Comprehensive professional credential covering core web technologies, React components, advanced state management, UI/UX design principles, and frontend testing.",
      skills: [
        "React",
        "JavaScript (ES6+)",
        "Advanced CSS",
        "Jest & Testing",
        "Accessibility (a11y)",
        "Git Workflow",
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
      span: "col-span-12",
      accent: "from-purple-500/80 via-pink-500/40 to-transparent",
      description:
        "Interactive mastery of strongly-typed frontend architecture with TypeScript, complex data structures & algorithms in JS, and AI prompt engineering workflows.",
      skills: [
        "TypeScript",
        "JS Algorithms",
        "Data Structures",
        "Prompt Engineering",
        "Problem Solving",
        "AI Workflow Integration",
      ],
    },
  ];

  return (
    <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-12 overflow-hidden">
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
          Comprehensive bootcamps, professional software engineering programs, and modern web development certifications in a Bento Grid view.
        </p>
      </div>

      {/* Quick Overview Bento Ribbon */}
      <div className="grid grid-cols-12 gap-3">
        <BentoCard
          colSpan="col-span-12 sm:col-span-4"
          accentGradient="from-indigo-500/80 via-purple-500/50 to-transparent"
          aosDelay={150}
        >
          <span className="text-zinc-500 text-[10px] uppercase tracking-wider block font-mono">Programs & Certs</span>
          <span className="text-lg font-bold text-zinc-100 flex items-center gap-1.5 pt-1 font-mono">
            <Award className="w-4 h-4 text-indigo-400" />
            3 Completed / Active
          </span>
        </BentoCard>

        <BentoCard
          colSpan="col-span-12 sm:col-span-4"
          accentGradient="from-whitesmoke/80 via-zinc-400/50 to-transparent"
          aosDelay={200}
        >
          <span className="text-zinc-500 text-[10px] uppercase tracking-wider block font-mono">Bootcamp GPA</span>
          <span className="text-lg font-bold text-whitesmoke flex items-center gap-1.5 pt-1 font-mono">
            <Award className="w-4 h-4 text-whitesmoke" />
            3.97 / 4.0
          </span>
        </BentoCard>

        <BentoCard
          colSpan="col-span-12 sm:col-span-4"
          accentGradient="from-sky-500/80 via-blue-500/50 to-transparent"
          aosDelay={250}
        >
          <span className="text-zinc-500 text-[10px] uppercase tracking-wider block font-mono">Primary Focus</span>
          <span className="text-lg font-bold text-sky-400 flex items-center gap-1.5 pt-1 font-mono">
            <Code2 className="w-4 h-4 text-sky-400" />
            Frontend Engineering
          </span>
        </BentoCard>
      </div>

      {/* Education Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {educationList.map((edu, idx) => (
          <BentoCard
            key={edu.id}
            colSpan={edu.span}
            accentGradient={edu.accent}
            aosDelay={150 + idx * 100}
            glow={edu.featured}
          >
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg border font-mono text-xs font-bold flex items-center justify-center shrink-0 ${edu.badgeBg}`}
                  >
                    {edu.initials}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h2 className="text-base sm:text-lg font-bold text-white">
                        {edu.institution}
                      </h2>
                      {edu.featured && (
                        <span className="px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-[10px] uppercase tracking-wider rounded flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-indigo-400" />
                          <span>Featured</span>
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-zinc-200 font-sans">
                      {edu.program}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px] text-zinc-400">
                      {edu.grade && (
                        <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                          {edu.grade}
                        </span>
                      )}
                      {edu.gpa && (
                        <span className="px-2 py-0.5 rounded bg-white/10 border border-white/30 text-whitesmoke font-semibold">
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-zinc-900/90 px-3 py-1 rounded-lg border border-zinc-800 shrink-0 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{edu.period}</span>
                </div>
              </div>

              {edu.description && (
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {edu.description}
                </p>
              )}

              <div className="space-y-2 pt-2 border-t border-zinc-900">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="uppercase tracking-wider text-[10px] text-zinc-500">Skills & Focus</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {edu.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300"
                    >
                      <CheckCircle2 className="w-3 h-3 text-whitesmoke shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </main>
  );
}
