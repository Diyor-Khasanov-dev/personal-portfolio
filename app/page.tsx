import {
  Trophy,
  Award,
  Briefcase,
  Smartphone,
  FileText,
  BookOpen,
  ArrowUpRight,
  Calendar,
  Send,
  Building2,
  Code2,
} from "lucide-react";
import AnimatedJobTitles from "@/components/AnimatedJobTitles";

export default function HomePage() {
  const highlights = [
    {
      title: "4x Hackathon Winner",
      description:
        "Proven track record of rapid innovation, high-pressure execution & winning pitch builds.",
      icon: Trophy,
    },
    {
      title: "Big Tech Certified",
      description:
        "World-class industry certifications in cloud infrastructure & modern software engineering.",
      icon: Award,
    },
    {
      title: "4+ Years Experience",
      description:
        "Delivering production-grade, highly reliable systems with sub-50ms performance targets.",
      icon: Briefcase,
    },
    {
      title: "Fullstack + Mobile",
      description:
        "Architecting end-to-end web platforms, REST/GraphQL APIs, and native-grade mobile apps.",
      icon: Smartphone,
    },
  ];

  const socialLinks = [
    {
      name: "Calendly",
      href: "https://calendly.com/bdiyorxasanov",
      label: "Schedule a Call",
      icon: Calendar,
    },
    {
      name: "GitHub",
      href: "https://github.com/Diyor-Khasanov-dev",
      label: "Code & Open Source",
      icon: ({ className }: { className?: string }) => (
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
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/diyor-khasanov",
      label: "Professional Profile",
      icon: ({ className }: { className?: string }) => (
        <svg
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.64a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      href: "https://t.me/Diyor_Khasanov_dev",
      label: "Direct Chat",
      icon: Send,
    },
  ];

  return (
    <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-16 space-y-10 overflow-hidden">
      {/* Status / Availability Badge */}
      <div data-aos="fade-down" data-aos-delay="100" className="flex justify-start mt-6 sm:mt-10">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/90 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-sm hover:border-zinc-700 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] group cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-100"></span>
          </span>
          <span>Available for Fullstack & Mobile Engineering Roles</span>
        </div>
      </div>

      {/* Hero: Name, Dynamic Job Titles & Short Description */}
      <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
        {/* Main Name Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
          Diyor Khasanov
        </h1>

        {/* Dynamic Job Titles */}
        <div className="text-xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-300 flex items-center gap-2 flex-wrap">
          <span>Engineering high-impact solutions as a</span>
          <AnimatedJobTitles />
        </div>

        {/* Required Exact Short Description */}
        <div className="pt-2">
          <p className="text-base sm:text-xl font-medium text-whitesmoke font-mono tracking-tight flex items-center gap-2">
            <Building2 className="w-5 h-5 text-whitesmoke shrink-0" />
            <span>Software Engineer. Co-Founder @ A.L.I.A</span>
          </p>
        </div>

        {/* Intro Description */}
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl pt-1">
          Building performant web applications, resilient backend architectures, and seamless mobile experiences.
          Combining technical excellence with product design craft.
        </p>
      </div>

      {/* Highlights Cards Grid with Staggered AOS Animations & Hover Motion */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
        {highlights.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={300 + idx * 100}
              className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:bg-zinc-900/60 hover:border-zinc-700 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-300 space-y-2 group relative overflow-hidden"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-whitesmoke group-hover:border-white/30 transition-all duration-300">
                <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mt-1 font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Primary Action CTA Buttons */}
      <div data-aos="fade-up" data-aos-delay="500" className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="https://example.com/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:translate-y-0 group font-mono"
        >
          <FileText className="w-4 h-4 text-zinc-800 group-hover:scale-110 transition-transform" />
          <span>View My Resume</span>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <a
          href="https://t.me/Diyor_Khasanov_dev"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800/90 text-zinc-200 font-medium text-sm transition-all duration-200 font-mono group hover:border-zinc-700 hover:-translate-y-0.5 active:translate-y-0"
        >
          <Code2 className="w-4 h-4 text-zinc-400 group-hover:text-whitesmoke transition-colors" />
          <span>Get In Touch</span>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <a
          href="https://t.me/bdiyorxasanov"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/80 text-zinc-300 font-medium text-sm transition-all duration-200 font-mono group hover:border-zinc-700 hover:-translate-y-0.5 active:translate-y-0"
        >
          <BookOpen className="w-4 h-4 text-zinc-400 group-hover:text-sky-400 transition-colors" />
          <span>Read Blog</span>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Social Buttons Ribbon with Staggered AOS */}
      <div data-aos="fade-up" data-aos-delay="600" className="pt-6 border-t border-zinc-900/90 space-y-3">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          Connect & Socials
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {socialLinks.map((social, sIdx) => {
            const SocialIcon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-in"
                data-aos-delay={650 + sIdx * 80}
                className="flex items-center justify-between p-3 rounded-lg border border-zinc-800/80 bg-zinc-950/40 hover:bg-zinc-900/80 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all duration-200 hover:-translate-y-0.5 group shadow-sm hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
              >
                <div className="flex items-center gap-2.5">
                  <SocialIcon className="w-4 h-4 text-zinc-400 group-hover:text-whitesmoke transition-colors" />
                  <span className="text-xs font-mono font-medium">{social.name}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
