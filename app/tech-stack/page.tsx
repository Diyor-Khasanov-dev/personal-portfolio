import type { Metadata } from "next";
import TechStackClient from "./TechStackClient";

export const metadata: Metadata = {
  title: "Tech Stack & Engineering Arsenal | Developer Portfolio",
  description:
    "Explore the complete tech stack, frameworks, tools, and technical competencies mastered by Diyor Khasanov across Full Stack, Mobile, and AI engineering.",
};

export default function TechStackPage() {
  return <TechStackClient />;
}
