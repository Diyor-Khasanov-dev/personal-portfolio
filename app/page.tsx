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
  Sparkles,
  Zap,
  Globe,
} from "lucide-react";
import AnimatedJobTitles from "@/components/AnimatedJobTitles";
import BentoCard from "@/components/ui/BentoCard";

export default function HomePage() {
  const highlights = [
    {
      title: "4x Hackathon Winner",
      subtitle: "Rapid Innovation",
      description:
        "Proven track record of rapid innovation, high-pressure execution & winning pitch builds across major developer events.",
      icon: Trophy,
      span: "col-span-12 md:col-span-7",
      accent: "from-amber-500/80 via-yellow-400/50 to-transparent",
      tag: "Competitive",
    },
    {
      title: "Big Tech Certified",
      subtitle: "Cloud & Software",
      description:
        "World-class industry certifications in cloud infrastructure & modern software engineering.",
      icon: Award,
      span: "col-span-12 md:col-span-5",
      accent: "from-indigo-500/80 via-purple-500/50 to-transparent",
      tag: "Verified",
    },
    {
      title: "4+ Years Exp",
      subtitle: "Sub-50ms Target",
      description:
        "Delivering production-grade, highly reliable systems with sub-50ms performance targets.",
      icon: Briefcase,
      span: "col-span-12 md:col-span-5",
      accent: "from-emerald-500/80 via-teal-500/50 to-transparent",
      tag: "Production",
    },
    {
      title: "Fullstack + Mobile",
      subtitle: "Web & Native",
      description:
        "Architecting end-to-end web platforms, REST/GraphQL APIs, and native-grade mobile apps.",
      icon: Smartphone,
      span: "col-span-12 md:col-span-7",
      accent: "from-sky-500/80 via-blue-500/50 to-transparent",
      tag: "Full Spectrum",
    },
  ];

  const socialLinks = [
    {
      name: "Calendly",
      href: "https://calendly.com/bdiyorxasanov",
      label: "Schedule a Call",
      subtext: "Book 15-min chat",
      icon: Calendar,
      accent: "border-amber-500/30 text-amber-300",
    },
    {
      name: "GitHub",
      href: "https://github.com/Diyor-Khasanov-dev",
      label: "Code & Open Source",
      subtext: "View repositories",
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
      accent: "border-zinc-700 text-zinc-100",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/diyor-khasanov",
      label: "Professional Profile",
      subtext: "Connect professionally",
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
      accent: "border-sky-500/30 text-sky-300",
    },
    {
      name: "Telegram",
      href: "https://t.me/Diyor_Khasanov_dev",
      label: "Direct Chat",
      subtext: "Instant messaging",
      icon: Send,
      accent: "border-teal-500/30 text-teal-300",
    },
  ];

  return (
    <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-16 space-y-10 overflow-hidden">
      {/* Bento Grid Header & Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Main Hero Bento Card */}
        <BentoCard
          colSpan="col-span-12 md:col-span-8"
          accentGradient="from-whitesmoke via-zinc-400 to-transparent"
          glow
          aosDelay={100}
        >
          <div className="space-y-5">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/90 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-100"></span>
              </span>
              <span>Available for Fullstack & Mobile Roles</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
                Diyor Khasanov
              </h1>

              <div className="text-lg sm:text-2xl font-semibold tracking-tight text-zinc-300 flex items-center gap-2 flex-wrap">
                <span>Engineering high-impact solutions as a</span>
                <AnimatedJobTitles />
              </div>

              <div className="pt-1">
                <p className="text-xs sm:text-sm font-medium text-whitesmoke font-mono tracking-tight flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-whitesmoke shrink-0" />
                  <span>Software Engineer. Co-Founder @ A.L.I.A</span>
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-xl">
                Building performant web applications, resilient backend architectures, and seamless mobile experiences. Combining technical excellence with product design craft.
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap gap-2.5">
            <a
              href="https://example.com/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs transition-all shadow-sm hover:-translate-y-0.5 font-mono group"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-800 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>

            <a
              href="https://t.me/Diyor_Khasanov_dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 font-medium text-xs transition-all font-mono group hover:border-zinc-700 hover:-translate-y-0.5"
            >
              <Code2 className="w-3.5 h-3.5 text-zinc-400 group-hover:text-whitesmoke transition-colors" />
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>

            <a
              href="https://t.me/bdiyorxasanov"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/80 text-zinc-300 font-medium text-xs transition-all font-mono group hover:border-zinc-700 hover:-translate-y-0.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-zinc-400 group-hover:text-sky-400 transition-colors" />
              <span>Blog</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>
        </BentoCard>

        {/* Side Stat Bento Card */}
        <BentoCard
          colSpan="col-span-12 md:col-span-4"
          accentGradient="from-indigo-500/80 via-sky-400/50 to-transparent"
          aosDelay={200}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Key Metrics
              </span>
              <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                Live Data
              </span>
            </div>

            <div className="space-y-3 font-mono">
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-400">Hackathon Victories</div>
                  <div className="text-xl font-bold text-amber-400">4 Gold Trophies</div>
                </div>
                <Trophy className="w-6 h-6 text-amber-400/80" />
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-400">Production Systems</div>
                  <div className="text-xl font-bold text-whitesmoke">&lt; 50ms Target</div>
                </div>
                <Zap className="w-6 h-6 text-whitesmoke/80" />
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-400">Co-Founder Venture</div>
                  <div className="text-xl font-bold text-sky-400">A.L.I.A</div>
                </div>
                <Globe className="w-6 h-6 text-sky-400/80" />
              </div>
            </div>
          </div>
        </BentoCard>
      </div>

      {/* Bento Grid Highlights Section */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-whitesmoke" />
            Core Highlights & Capabilities
          </h2>
          <span className="text-xs font-mono text-zinc-500">Bento Grid View</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <BentoCard
                key={item.title}
                colSpan={item.span}
                accentGradient={item.accent}
                aosDelay={250 + idx * 80}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-whitesmoke group-hover:border-zinc-700 transition-all">
                      <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-900/90 border border-zinc-800 px-2.5 py-1 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                      {item.subtitle}
                    </span>
                    <h3 className="text-base font-bold text-zinc-100 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-1 font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>

      {/* Bento Social Ribbon Section */}
      <div className="space-y-4 pt-4 border-t border-zinc-900">
        <div className="flex items-center justify-between">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Social & Contact Hub
          </p>
          <span className="text-xs font-mono text-zinc-600">4 Direct Channels</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {socialLinks.map((social, sIdx) => {
            const SocialIcon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-in"
                data-aos-delay={500 + sIdx * 80}
                className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:bg-zinc-900/80 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all duration-200 hover:-translate-y-0.5 group shadow-sm flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-whitesmoke transition-colors">
                    <SocialIcon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-white group-hover:text-whitesmoke">
                    {social.name}
                  </h4>
                  <p className="text-[11px] font-mono text-zinc-400">{social.subtext}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
