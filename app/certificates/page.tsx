import type { Metadata } from "next";
import {
  Award,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Building,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Certificates & Accreditations | Developer Portfolio",
  description:
    "Official certifications, industry credentials, and engineering accreditations earned by Diyor Khasanov.",
};

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
  description: string;
  skills: string[];
  featured?: boolean;
}

export default function CertificatesPage() {
  const certificates: Certificate[] = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "2023",
      credentialId: "AWS-PSA-982143",
      verificationUrl: "https://aws.amazon.com/verification",
      description:
        "Validates expertise in designing resilient, high-performing, cost-optimized, and secure cloud architectures on AWS.",
      skills: ["Cloud Architecture", "AWS S3/Lambda", "CloudFront CDN", "IAM & Security"],
      featured: true,
    },
    {
      title: "Meta Senior Frontend Developer Professional Certificate",
      issuer: "Meta / Coursera",
      date: "2023",
      credentialId: "META-FED-771092",
      verificationUrl: "https://coursera.org/verify/meta-frontend",
      description:
        "Comprehensive mastery of advanced React, state management patterns, web performance, testing, and system design.",
      skills: ["React 19", "JavaScript/TypeScript", "UI/UX Architecture", "Jest & RTL"],
      featured: true,
    },
    {
      title: "Google Cloud Associate Cloud Engineer",
      issuer: "Google Cloud Platform",
      date: "2022",
      credentialId: "GCP-ACE-440192",
      verificationUrl: "https://cloud.google.com/certification",
      description:
        "Demonstrates proficiency in deploying applications, monitoring operations, and managing enterprise cloud projects on GCP.",
      skills: ["Google Cloud Platform", "Kubernetes", "Cloud Build", "DevOps Pipeline"],
    },
    {
      title: "Meta React Native Specialization",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-RN-331089",
      verificationUrl: "https://coursera.org/verify/meta-react-native",
      description:
        "Professional certification in building native iOS & Android applications using React Native, Expo, and native UI integrations.",
      skills: ["React Native", "Expo SDK", "Mobile Gestures", "Cross-Platform UI"],
    },
  ];

  return (
    <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-12 overflow-hidden">
      {/* Header Banner */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-xs font-mono">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Industry Standard Accreditations</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Certificates & Credentials
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
          Verified certifications from major tech providers demonstrating cloud engineering expertise, frontend architecture mastery, and mobile standards.
        </p>
      </div>

      {/* Grid of Certificates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={150 + idx * 90}
            className={`p-5 sm:p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden group hover:-translate-y-1 shadow-sm hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] ${
              cert.featured
                ? "border-amber-500/30 bg-zinc-950/80 hover:border-amber-500/50"
                : "border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700"
            }`}
          >
            {cert.featured && (
              <div className="absolute top-0 right-0 px-3 py-1 bg-amber-500/10 border-b border-l border-amber-500/30 text-amber-300 font-mono text-[10px] uppercase tracking-wider rounded-bl-lg flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Featured Badge</span>
              </div>
            )}

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-zinc-500" />
                  {cert.issuer}
                </span>
              </div>

              <div>
                <h2 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {cert.title}
                </h2>
                <p className="text-xs text-zinc-300 leading-relaxed mt-2 font-sans">
                  {cert.description}
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-zinc-900">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  Issued {cert.date}
                </span>
                <span className="text-[11px] text-zinc-500">{cert.credentialId}</span>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
