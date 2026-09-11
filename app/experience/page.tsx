import type { Metadata } from "next";
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  ArrowUpRight,
  GraduationCap,
  Layers,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work Experience & Career History | Developer Portfolio",
  description:
    "Professional work history of Diyor Khasanov - Co-Founder @ ALIA, Full Stack Engineer, Backend Developer, Educator, and Software Engineer Intern.",
};

interface WorkRole {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  type?: string;
  location: string;
  highlights: string[];
  techStack: string[];
  current?: boolean;
  companyInitial: string;
  badgeBg: string;
}

export default function ExperiencePage() {
  const experiences: WorkRole[] = [
    {
      id: "alia",
      role: "Co-Founder",
      company: "ALIA",
      period: "Aug 2026 – Present",
      duration: "2 mos",
      type: "Full-time",
      location: "Asia · Hybrid",
      current: true,
      companyInitial: "ALIA",
      badgeBg: "bg-blue-600/20 text-blue-400 border-blue-500/30",
      highlights: [
        "Co-founded ALIA venture, driving core platform architecture, tech strategy, and engineering roadmap.",
        "Architected scalable web and mobile software solutions, integrating modern full-stack frameworks and responsive UI design systems.",
        "Leading cross-functional product development with sub-50ms performance goals and high-reliability operational standards.",
      ],
      techStack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "System Architecture"],
    },
    {
      id: "fast-education",
      role: "Teacher",
      company: "Fast Education",
      period: "May 2026 – Present",
      duration: "5 mos",
      type: "On-site",
      location: "Uzbekistan · On-site",
      current: true,
      companyInitial: "FE",
      badgeBg: "bg-sky-600/20 text-sky-400 border-sky-500/30",
      highlights: [
        "Teach frontend, backend, and full-stack web development to students, guiding them from foundational concepts to production-ready skills in a structured on-site program.",
        "Design and deliver curriculum covering the full web development stack, mentoring students through hands-on projects in an educational center environment.",
      ],
      techStack: ["JavaScript", "TypeScript", "React", "Node.js", "HTML/CSS", "Git", "Database Design"],
    },
    {
      id: "flolabs",
      role: "Software Engineer Intern",
      company: "FloLabsInnovationsGroup",
      period: "May 2026 – Aug 2026",
      duration: "4 mos",
      type: "Internship",
      location: "Remote",
      companyInitial: "FLI",
      badgeBg: "bg-purple-600/20 text-purple-400 border-purple-500/30",
      highlights: [
        "Working within a venture studio and experiential learning ecosystem that co-builds startups across healthcare, AI, and robotics — contributing to real product development as part of an intern cohort.",
        "Building software at a next-generation R&D organization that merges innovation, education, and entrepreneurship — gaining experience on cross-sector products under the Efestos Labs learning model.",
      ],
      techStack: ["React", "TypeScript", "Python", "AI Integration", "REST APIs", "Agile Development"],
    },
    {
      id: "gorrion",
      role: "Full Stack Engineer",
      company: "Gorrion",
      period: "Apr 2025 – Jan 2026",
      duration: "10 mos",
      type: "Consultancy",
      location: "Remote",
      companyInitial: "G",
      badgeBg: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30",
      highlights: [
        "Built end-to-end web and mobile products at a software consultancy with 200+ delivered projects, working in agile teams to deliver solutions across product design, development, and scaling.",
        "Delivered full-stack features across web and mobile at a client-facing product studio, contributing to the full software lifecycle from MVP development to long-term maintenance using React, Next.js, Node.js, and TypeScript",
      ],
      techStack: ["React", "Next.js", "Node.js", "TypeScript", "React Native", "Tailwind CSS", "REST APIs"],
    },
    {
      id: "uzit",
      role: "Back End Developer",
      company: "UZIT Group",
      period: "Aug 2023 – Feb 2025",
      duration: "1 yr 7 mos",
      type: "Hybrid",
      location: "Samarkand, Samarqand Region, Uzbekistan · Hybrid",
      companyInitial: "UZIT",
      badgeBg: "bg-teal-600/20 text-teal-400 border-teal-500/30",
      highlights: [
        "Contributed to backend systems at a global Digital Marketing and IT company, building scalable server-side solutions that supported client products across international markets.",
        "Developed and maintained backend infrastructure for a full-service IT company, collaborating on projects spanning digital marketing platforms and enterprise software.",
      ],
      techStack: ["Node.js", "Express.js", "PostgreSQL", "REST APIs", "Docker", "Database Architecture"],
    },
    {
      id: "maba",
      role: "Frontend Developer",
      company: "MABA agency",
      period: "Mar 2022 – Apr 2023",
      duration: "1 yr 2 mos",
      type: "Remote",
      location: "Remote",
      companyInitial: "MABA",
      badgeBg: "bg-amber-600/20 text-amber-400 border-amber-500/30",
      highlights: [
        "Produced client-facing websites and dashboards for an AI-powered business optimisation agency.",
        "Strengthened clients' online presence through pixel-perfect implementations and performance tuning.",
      ],
      techStack: ["React", "JavaScript", "HTML/CSS", "Dashboard Analytics", "Performance Optimization"],
    },
  ];

  return (
    <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-12 overflow-hidden">
      {/* Header Banner */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 text-zinc-200 text-xs font-mono">
          <Briefcase className="w-3.5 h-3.5 text-whitesmoke" />
          <span>Professional Career & Impact</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Work Experience
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
          Track record of founding startups, teaching web engineering, building client-facing consultancy systems, and developing scalable full-stack & backend infrastructures.
        </p>
      </div>

      {/* Overview Stats Quick Ribbon */}
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/60 font-mono text-xs"
      >
        <div className="space-y-1">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider block">Total Roles</span>
          <span className="text-lg font-bold text-zinc-100 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-whitesmoke" />
            6 Positions
          </span>
        </div>
        <div className="space-y-1 border-l border-zinc-800/80 pl-3 sm:pl-4">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider block">Active Roles</span>
          <span className="text-lg font-bold text-whitesmoke flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-whitesmoke" />
            2 Active
          </span>
        </div>
        <div className="space-y-1 border-l border-zinc-800/80 pl-3 sm:pl-4">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider block">Teaching & R&D</span>
          <span className="text-lg font-bold text-sky-400 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-sky-400" />
            Mentorship
          </span>
        </div>
        <div className="space-y-1 border-l border-zinc-800/80 pl-3 sm:pl-4">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider block">Core Domain</span>
          <span className="text-lg font-bold text-purple-400">
            Fullstack / AI
          </span>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="relative border-l border-zinc-800/80 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
        {experiences.map((exp, idx) => (
          <div
            key={exp.id}
            data-aos="fade-up"
            data-aos-delay={200 + idx * 100}
            className="relative group"
          >
            {/* Timeline Bullet Marker */}
            <div
              className={`absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                exp.current
                  ? "border-white bg-zinc-900 shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                  : "border-zinc-700 bg-zinc-900 group-hover:border-zinc-500"
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  exp.current ? "bg-whitesmoke animate-pulse" : "bg-zinc-500"
                }`}
              />
            </div>

            {/* Experience Card */}
            <div className="p-5 sm:p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 space-y-4 group relative overflow-hidden shadow-sm hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]">
              {exp.current && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-white/10 border-b border-l border-white/20 text-zinc-200 font-mono text-[10px] uppercase tracking-wider rounded-bl-lg flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-whitesmoke" />
                  <span>Present Role</span>
                </div>
              )}

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  {/* Company Logo Badge */}
                  <div className={`w-10 h-10 rounded-lg border font-mono text-xs font-bold flex items-center justify-center shrink-0 ${exp.badgeBg}`}>
                    {exp.companyInitial}
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-white group-hover:text-whitesmoke transition-colors">
                      {exp.role}
                    </h2>

                    <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                      <span className="font-semibold text-whitesmoke font-mono flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>

                      {exp.type && (
                        <>
                          <span className="text-zinc-600">•</span>
                          <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300">
                            {exp.type}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Duration & Date Info */}
                <div className="flex flex-col sm:items-end gap-1 shrink-0 self-start sm:self-auto">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-zinc-900/90 px-3 py-1 rounded-lg border border-zinc-800">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{exp.period}</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-whitesmoke font-semibold">{exp.duration}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 pt-0.5">
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights / Bullet Points */}
              <div className="space-y-2 pt-2 border-t border-zinc-900">
                <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                  Key Responsibilities & Deliverables
                </p>
                {exp.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                    <CheckCircle2 className="w-4 h-4 text-whitesmoke shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800/90 text-[11px] font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
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
            Looking for detailed technical discussions or project collaboration?
          </h3>
          <p className="text-xs text-zinc-400">
            I am available for fullstack, backend, frontend, and technical leadership roles.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium font-mono text-xs transition-all inline-flex items-center gap-1.5 shrink-0 shadow-sm"
        >
          <span>Get In Touch</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950" />
        </Link>
      </div>
    </main>
  );
}
