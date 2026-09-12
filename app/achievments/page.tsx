import type { Metadata } from "next";
import {
  Trophy,
  Award,
  Users,
  Zap,
  CheckCircle2,
  Heart,
  ArrowUpRight,
  Sparkles,
  Medal,
  Globe,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Achievements & Activities | Developer Portfolio",
  description:
    "Hackathon victories, competition awards, and community active leadership roles in MDC Uzbekistan, GDG, UzGeeks, and Yandex Dev sessions.",
};

interface HackathonItem {
  place: "1st" | "3rd";
  title: string;
  project: string;
  details: string;
  badgeText: string;
  description: string;
  techStack: string[];
  highlight?: string;
}

interface CommunityActivity {
  organization: string;
  role: string;
  tagline: string;
  description: string;
  highlights: string[];
  category: string;
}

export default function AchievementsPage() {
  const hackathons: HackathonItem[] = [
    {
      place: "1st",
      project: "Tez",
      title: "Bank Payment Platform",
      details: "Live in production",
      badgeText: "1st Place Winner",
      description:
        "Architected and deployed a resilient bank payment platform handling secure transactional routing with high reliability. Built end-to-end payment workflows under strict time constraints.",
      techStack: ["React Native", "Expo", "TypeScript", "Next.js", "Payment Gateway API", "Tailwind CSS"],
      highlight: "Deployed & powering live production workloads",
    },
    {
      place: "1st",
      project: "Lumora",
      title: "RoboContest Platform",
      details: "Live in production",
      badgeText: "1st Place Winner",
      description:
        "Engineered a competitive coding and automated grading platform for algorithmic robotics contests. Designed real-time leaderboard sync and intuitive UI for contestants.",
      techStack: ["Next.js", "TypeScript", "WebSockets", "Tailwind CSS", "Node.js"],
      highlight: "Live platform serving active contest participants",
    },
    {
      place: "1st",
      project: "Alif Tech",
      title: "Payment Platform",
      details: "24-hour sprint",
      badgeText: "1st Place Winner",
      description:
        "Designed and shipped a prototype payment portal during an intensive 24-hour sprint. Delivered pixel-perfect interface components, transaction verification, and instant checkout flow.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
      highlight: "Rapid MVP completed within a strict 24h timeline",
    },
    {
      place: "1st",
      project: "Billz",
      title: "CRM / ERP Interface",
      details: "UX cited by judges",
      badgeText: "1st Place Winner",
      description:
        "Built an enterprise-grade CRM/ERP frontend interface tailored for retail and inventory workflows. Commended by judges for exceptional UX polish, accessibility, and micro-interactions.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "State Management"],
      highlight: "Highest score for UX design & developer experience",
    },
    {
      place: "3rd",
      project: "Yandex",
      title: "Music MVP",
      details: "Dev Camp",
      badgeText: "3rd Place Finish",
      description:
        "Developed a lightweight, web-based music streaming client and recommendation engine prototype during the Yandex Dev Camp hackathon track.",
      techStack: ["React", "TypeScript", "Audio API", "Tailwind CSS"],
      highlight: "Podium finish among top Dev Camp engineering teams",
    },
  ];

  const activities: CommunityActivity[] = [
    {
      organization: "MDC Uzbekistan",
      role: "Volunteer & Active Member",
      category: "Tech Community",
      tagline: "Mobile & Developer Community",
      description:
        "Active participant and event volunteer helping foster the software ecosystem in Uzbekistan. Assisting in workshop setup, technical panel discussions, and community networking.",
      highlights: [
        "Co-organized community meetups and developer workshops",
        "Mentored aspiring frontend & mobile software engineers",
      ],
    },
    {
      organization: "GDG Uzbekistan",
      role: "Volunteer & Active Member",
      category: "Google Developer Group",
      tagline: "Google Developer Groups",
      description:
        "Contributing to GDG Uzbekistan initiatives, DevFests, and tech talks. Supporting event logistics, speaker coordination, and developer advocacy across modern web standards.",
      highlights: [
        "Supported annual DevFest and local Google tech events",
        "Engaged with local developer community to advocate modern web stacks",
      ],
    },
    {
      organization: "UzGeeks",
      role: "Volunteer & Active Member",
      category: "Developer Network",
      tagline: "Uzbekistan IT & Software Community",
      description:
        "Long-time member of UzGeeks community sessions. Participating in technical roundtables, code reviews, and open discussions around frontend architecture and UI engineering.",
      highlights: [
        "Regular speaker and attendee at monthly UzGeeks sessions",
        "Contributed to peer mentorship and technical knowledge sharing",
      ],
    },
    {
      organization: "Yandex Dev Camp",
      role: "Volunteer & Participant",
      category: "Engineering Bootcamp",
      tagline: "Intensive Dev Program & Hackathon",
      description:
        "Participated as both a competitive builder and volunteer helper during Yandex Dev Camp initiatives. Facilitated teamwork, code sprints, and peer technical assistance.",
      highlights: [
        "Completed rigorous Dev Camp challenges while assisting peers",
        "Earned 3rd place podium award in Music MVP track",
      ],
    },
  ];

  return (
    <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-12 overflow-hidden">
      {/* Header Banner */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>Track Record & Community Impact</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Achievements & Activities
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
          A curated collection of hackathon victories, product sprint awards, and active contributions to developer communities across Uzbekistan and international tech hubs.
        </p>
      </div>

      {/* Overview Stats Horizontal Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-2xl border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl space-y-1">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
            1st Place Wins
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">4</span>
            <span className="text-xs text-zinc-400">victories</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl space-y-1">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
            Podium Finishes
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-zinc-100 font-mono">5</span>
            <span className="text-xs text-zinc-400">total awards</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl space-y-1">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
            Production Apps
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-whitesmoke font-mono">2</span>
            <span className="text-xs text-zinc-400">live platforms</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl space-y-1">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
            Community Roles
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">5</span>
            <span className="text-xs text-zinc-400">orgs</span>
          </div>
        </div>
      </div>

      {/* Section 1: Hackathons & Competition Wins */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-amber-400" />
            <h2 className="text-xl font-bold tracking-tight text-zinc-100">
              Hackathons & Competitions
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            5 Competitive Awards
          </span>
        </div>

        <div className="space-y-4">
          {hackathons.map((item, idx) => {
            const isFirstPlace = item.place === "1st";
            return (
              <div
                key={item.project}
                className="group p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/70 hover:bg-zinc-900/40 hover:border-zinc-700/80 transition-all duration-300 shadow-sm space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold ${
                        isFirstPlace
                          ? "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                          : "bg-zinc-800 text-zinc-300 border border-zinc-700"
                      }`}
                    >
                      {isFirstPlace ? (
                        <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      ) : (
                        <Medal className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      )}
                      <span>{item.badgeText}</span>
                    </span>
                    <span className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md">
                      {item.details}
                    </span>
                  </div>

                  {item.highlight && (
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono bg-zinc-900/80 px-3 py-1 rounded-lg border border-zinc-800 shrink-0">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.highlight}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {item.project}{" "}
                    <span className="text-zinc-400 font-normal">
                      — {item.title}
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans mt-1.5">
                    {item.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-900">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Community Involvement & Activities */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
          <div className="flex items-center gap-2.5">
            <Users className="w-5 h-5 text-sky-400" />
            <h2 className="text-xl font-bold tracking-tight text-zinc-100">
              Community & Volunteer Activities
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            Active Member & Volunteer
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activities.map((act) => (
            <div
              key={act.organization}
              className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/70 hover:bg-zinc-900/40 hover:border-zinc-700/80 transition-all duration-300 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded">
                        {act.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mt-1.5">
                      {act.organization}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 shrink-0">
                    <Heart className="w-3.5 h-3.5 text-rose-400" />
                    <span>{act.role}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {act.description}
                </p>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-zinc-900">
                {act.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-whitesmoke shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Box */}
      <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-sm font-semibold text-white flex items-center gap-2 justify-center sm:justify-start">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Interested in collaboration or hiring?
          </h3>
          <p className="text-xs text-zinc-400">
            Explore my full portfolio of software engineering projects and technical stack.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0 font-mono text-xs">
          <Link
            href="/projects"
            className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium transition-all inline-flex items-center gap-1.5"
          >
            <span>View Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-900" />
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 transition-all inline-flex items-center gap-1.5"
          >
            <span>Contact Me</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
