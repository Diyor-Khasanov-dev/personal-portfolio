"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Award,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Building2,
  Sparkles,
  Cloud,
  Code2,
  Smartphone,
  Cpu,
  Layers,
  Maximize2,
  X,
} from "lucide-react";

export type CertificateCategory =
  | "All"
  | "Cloud & Infrastructure"
  | "Frontend & Web Systems"
  | "Mobile Engineering"
  | "AI & Emerging Tech";

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: CertificateCategory;
  date: string;
  credentialId: string;
  verificationUrl: string;
  imageUrl: string;
  description: string;
  skills: string[];
  featured?: boolean;
}

const CATEGORIES: { label: CertificateCategory; icon: React.ElementType }[] = [
  { label: "All", icon: Layers },
  { label: "Cloud & Infrastructure", icon: Cloud },
  { label: "Frontend & Web Systems", icon: Code2 },
  { label: "Mobile Engineering", icon: Smartphone },
  { label: "AI & Emerging Tech", icon: Cpu },
];

const CERTIFICATES: CertificateItem[] = [
  {
    id: "aws-csa",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud & Infrastructure",
    date: "Oct 2023",
    credentialId: "AWS-PSA-982143",
    verificationUrl: "https://aws.amazon.com/verification",
    imageUrl: "/certificates/aws-solutions-architect.svg",
    description:
      "Validates expertise in designing resilient, high-performing, cost-optimized, and secure cloud architectures on AWS using S3, Lambda, CloudFront, IAM, and VPC.",
    skills: ["Cloud Architecture", "AWS S3 & Lambda", "CloudFront CDN", "VPC & Security"],
    featured: true,
  },
  {
    id: "meta-fed",
    title: "Meta Senior Frontend Developer Professional Certificate",
    issuer: "Meta / Coursera",
    category: "Frontend & Web Systems",
    date: "Dec 2023",
    credentialId: "META-FED-771092",
    verificationUrl: "https://coursera.org/verify/meta-frontend",
    imageUrl: "/certificates/meta-frontend-developer.svg",
    description:
      "Comprehensive mastery of advanced React, state management patterns, web performance tuning, accessibility standards, unit testing, and system design.",
    skills: ["React 19", "TypeScript", "Web Performance", "Jest & RTL", "UI/UX Systems"],
    featured: true,
  },
  {
    id: "gcp-ace",
    title: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud Platform",
    category: "Cloud & Infrastructure",
    date: "Aug 2022",
    credentialId: "GCP-ACE-440192",
    verificationUrl: "https://cloud.google.com/certification",
    imageUrl: "/certificates/gcp-cloud-engineer.svg",
    description:
      "Demonstrates proficiency in deploying applications, monitoring cloud operations, configuring access control, and managing enterprise GKE Kubernetes workloads on GCP.",
    skills: ["GCP Platform", "Kubernetes (GKE)", "Cloud Build", "DevOps Pipelines"],
  },
  {
    id: "meta-rn",
    title: "Meta React Native Specialization",
    issuer: "Meta",
    category: "Mobile Engineering",
    date: "Nov 2022",
    credentialId: "META-RN-331089",
    verificationUrl: "https://coursera.org/verify/meta-react-native",
    imageUrl: "/certificates/meta-react-native.svg",
    description:
      "Professional certification in building native iOS & Android applications using React Native, Expo SDK, native gestures, state management, and cross-platform UI components.",
    skills: ["React Native", "Expo SDK", "Cross-Platform UI", "Mobile Performance"],
    featured: true,
  },
  {
    id: "dl-ai",
    title: "Deep Learning & AI System Architecture",
    issuer: "DeepLearning.AI / Coursera",
    category: "AI & Emerging Tech",
    date: "Jan 2024",
    credentialId: "DLAI-ENG-882103",
    verificationUrl: "https://coursera.org/verify/deeplearning-ai",
    imageUrl: "/certificates/deep-learning-ai.svg",
    description:
      "Specialization covering neural network optimization, transformer architectures, vector embeddings, and deploying scalable AI model inference backends.",
    skills: ["Deep Learning", "Neural Networks", "LLM Fine-Tuning", "Vector Embeddings"],
  },
];

export default function CertificatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<CertificateCategory>("All");
  const [activeImageModal, setActiveImageModal] = useState<CertificateItem | null>(null);

  const filteredCertificates =
    selectedCategory === "All"
      ? CERTIFICATES
      : CERTIFICATES.filter((cert) => cert.category === selectedCategory);

  const categoriesWithCount = CATEGORIES.map((cat) => ({
    ...cat,
    count:
      cat.label === "All"
        ? CERTIFICATES.length
        : CERTIFICATES.filter((c) => c.category === cat.label).length,
  }));

  // Categories present in filtered list for section grouping
  const activeCategories =
    selectedCategory === "All"
      ? Array.from(new Set(CERTIFICATES.map((c) => c.category)))
      : [selectedCategory];

  return (
    <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-24 space-y-10 overflow-hidden">
      {/* Header Banner */}
      <div data-aos="fade-down" data-aos-delay="100" className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-xs font-mono">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Verified Industry Accreditations</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Certificates & Credentials
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
          Official engineering certifications categorized by domain — cloud infrastructure, frontend mastery, cross-platform mobile architecture, and AI engineering.
        </p>
      </div>

      {/* Category Tabs Ribbon */}
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-zinc-800/80"
      >
        {categoriesWithCount.map((cat) => {
          const CategoryIcon = cat.icon;
          const isActive = selectedCategory === cat.label;
          return (
            <button
              key={cat.label}
              onClick={() => setSelectedCategory(cat.label)}
              type="button"
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all duration-200 shrink-0 cursor-pointer ${
                isActive
                  ? "bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-sm"
                  : "bg-zinc-950/60 text-zinc-400 border border-zinc-800/80 hover:bg-zinc-900/80 hover:text-zinc-200"
              }`}
            >
              <CategoryIcon className={`w-3.5 h-3.5 ${isActive ? "text-amber-400" : "text-zinc-500"}`} />
              <span>{cat.label}</span>
              <span
                className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                  isActive ? "bg-amber-500/20 text-amber-200" : "bg-zinc-900 text-zinc-500"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Category Sections */}
      <div className="space-y-12">
        {activeCategories.map((categoryName) => {
          const categoryCerts = filteredCertificates.filter(
            (c) => c.category === categoryName
          );

          if (categoryCerts.length === 0) return null;

          const categoryIconObj = CATEGORIES.find((c) => c.label === categoryName);
          const CategoryIconComp = categoryIconObj ? categoryIconObj.icon : ShieldCheck;

          return (
            <section key={categoryName} className="space-y-6">
              {/* Category Subheader */}
              <div
                data-aos="fade-right"
                data-aos-delay="150"
                className="flex items-center justify-between border-b border-zinc-800/80 pb-3"
              >
                <div className="flex items-center gap-2.5">
                  <CategoryIconComp className="w-5 h-5 text-amber-400" />
                  <h2 className="text-xl font-bold tracking-tight text-zinc-100">
                    {categoryName}
                  </h2>
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  {categoryCerts.length} Certificate{categoryCerts.length > 1 ? "s" : ""}
                </span>
              </div>

              {/* Grid of Certificates in this Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryCerts.map((cert, idx) => (
                  <article
                    key={cert.id}
                    data-aos="fade-up"
                    data-aos-delay={200 + idx * 80}
                    className={`rounded-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-md hover:shadow-[0_12px_25px_rgba(0,0,0,0.5)] ${
                      cert.featured
                        ? "border-amber-500/30 bg-zinc-950/80 hover:border-amber-500/50"
                        : "border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700"
                    }`}
                  >
                    {/* Featured Top Badge Ribbon */}
                    {cert.featured && (
                      <div className="px-3 py-1 bg-amber-500/10 border-b border-amber-500/20 text-amber-300 font-mono text-[10px] uppercase tracking-wider flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          Featured Accreditation
                        </span>
                        <span className="text-[10px] text-amber-400/80">{cert.issuer}</span>
                      </div>
                    )}

                    {/* Certificate Image Frame */}
                    <div className="p-3 bg-zinc-900/40 border-b border-zinc-800/80 relative">
                      <div
                        onClick={() => setActiveImageModal(cert)}
                        className="relative aspect-[16/11] w-full rounded-lg overflow-hidden border border-zinc-800 bg-black cursor-pointer group/img shadow-inner"
                      >
                        <Image
                          src={cert.imageUrl}
                          alt={`${cert.title} official certificate image`}
                          fill
                          className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Hover Overlay Zoom Prompt */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white font-mono text-xs font-medium">
                          <Maximize2 className="w-4 h-4 text-amber-400" />
                          <span>Click to View Full Image</span>
                        </div>
                      </div>
                    </div>

                    {/* Certificate Card Content Body */}
                    <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                          <Building2 className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                          <span>{cert.issuer}</span>
                        </div>

                        <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                          {cert.title}
                        </h3>

                        <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                          {cert.description}
                        </p>
                      </div>

                      {/* Footer Info & Verification */}
                      <div className="space-y-3 pt-3 border-t border-zinc-900">
                        <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                          <span className="flex items-center gap-1.5 text-zinc-400">
                            <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                            Issued {cert.date}
                          </span>
                          <span className="text-[11px] text-zinc-500">{cert.credentialId}</span>
                        </div>

                        {/* Skill Badges */}
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="pt-1 flex items-center justify-between">
                          <a
                            href={cert.verificationUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Verify Official Credential</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>

                          <button
                            onClick={() => setActiveImageModal(cert)}
                            type="button"
                            className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            <Maximize2 className="w-3 h-3" />
                            <span>Expand</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Lightbox Modal for Certificate Image Zoom */}
      {activeImageModal && (
        <div
          onClick={() => setActiveImageModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 sm:p-6 space-y-4 shadow-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
              <div>
                <span className="text-xs font-mono text-amber-400">{activeImageModal.issuer}</span>
                <h3 className="text-lg font-bold text-white">{activeImageModal.title}</h3>
              </div>
              <button
                onClick={() => setActiveImageModal(null)}
                type="button"
                className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Certificate Image */}
            <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden border border-zinc-800 bg-black">
              <Image
                src={activeImageModal.imageUrl}
                alt={`${activeImageModal.title} certificate full view`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 font-mono text-xs">
              <span className="text-zinc-400">Credential ID: {activeImageModal.credentialId}</span>
              <a
                href={activeImageModal.verificationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-medium transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Verify Credential Web Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
