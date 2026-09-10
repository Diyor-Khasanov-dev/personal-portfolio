# Diyor Khasanov — Personal Portfolio & Engineering Showcase

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> A modern, high-performance personal portfolio and engineering showcase built for **Diyor Khasanov** — Software Engineer & Co-Founder @ A.L.I.A. Architected with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Lucide React icons.

---

## 📌 Executive Summary

This repository houses the source code for the personal engineering hub and digital portfolio of **Diyor Khasanov**. The platform demonstrates fullstack engineering capabilities, featuring a sleek, dark-mode minimalist UI, fluid scroll animations, interactive project showcases, and career highlights.

Engineered with performance, accessibility, and modern design standards in mind, this project targets sub-50ms render latency with 100% static page generation (SSG) powered by Next.js Turbopack.

---

## ✨ Key Features

- ⚡ **Next.js 16 App Router & Turbopack**: Built on the latest Next.js modern architecture with static site generation for lightning-fast delivery.
- 🎨 **Minimalist Dark Aesthetic**: Designed with custom grid pattern overlays, ambient radial glow effects, and precision micro-interactions.
- 🔄 **Dynamic UI Components**:
  - `AnimatedJobTitles`: Rotating animated career titles displaying key specializations.
  - `CommandMenu`: Quick keyboard navigation overlay for seamless accessibility.
  - `ScrollProgress` & `ScrollReveal`: Visual reading indicator and scroll-triggered entrance animations.
  - `AOSInit`: Animate On Scroll integration for smooth section transitions.
- 💼 **Structured Sections**:
  - **Work Experience**: Detailed career timeline highlighting roles, technical stacks, and impactful contributions.
  - **Featured Projects**: Curated repository of web, mobile, and system-level applications.
  - **Technical Stack**: Interactive categorized grid featuring skills, tools, frameworks, and proficiency indicators.
  - **Achievements & Hackathons**: Highlights of 4x hackathon wins, awards, and industry recognitions.
  - **Education**: Academic background and certified technical credentials.
  - **Languages & Contact**: Multilingual proficiency overview and direct calendar/messaging integration links.
- 📱 **Fully Responsive**: Flawlessly adapted for all device screen viewports from mobile browsers to ultra-wide desktop monitors.

---

## 🛠️ Technology Stack

| Domain | Stack / Library | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.3](https://nextjs.org/) | React App Router framework with Turbopack bundler |
| **UI Core** | [React 19](https://react.dev/) | Latest React concurrent renderer |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strongly typed JavaScript development |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS engine with PostCSS integration |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, vector-based icon set |
| **Animations** | [AOS](https://michalsnik.github.io/aos/) | Animate On Scroll library for smooth entry effects |
| **Linting & Code Quality** | [ESLint 9](https://eslint.org/) | Static analysis and standard code formatting |

---

## 📂 Repository Structure

```
.
├── app/                        # Next.js App Router root directory
│   ├── achievments/           # Achievements & hackathons showcase page
│   ├── contact/               # Contact page with interactive reach-out links
│   ├── education/             # Academic qualifications & certifications page
│   ├── experience/            # Detailed professional work experience timeline
│   ├── languages/             # Spoken languages & proficiency page
│   ├── projects/              # Featured engineering projects directory
│   ├── tech-stack/            # Interactive technical skills & stack page
│   ├── favicon.ico            # Site favicon asset
│   ├── globals.css            # Global CSS styles & Tailwind directives
│   ├── layout.tsx             # Root layout component (Navbar, Footer, Backgrounds)
│   └── page.tsx               # Main landing page (Hero, Quick Stats, CTA links)
├── components/                 # Reusable React UI components
│   ├── ui/                    # Base UI elements (e.g. CopyButton)
│   ├── AnimatedJobTitles.tsx  # Dynamic rotating job title headline
│   ├── AOSInit.tsx            # AOS animation initialization wrapper
│   ├── CommandMenu.tsx        # Keyboard shortcut navigation menu
│   ├── Footer.tsx             # Footer layout with copyright & quick links
│   ├── Navbar.tsx             # Responsive header navigation menu
│   ├── ScrollProgress.tsx     # Top scroll progress bar indicator
│   └── ScrollReveal.tsx       # Motion container for viewport animations
├── public/                     # Static media and SVG icon assets
├── AGENTS.md                   # Agent guidelines & project configuration
├── CLAUDE.md                   # Assistant workspace directives
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js build & runtime configuration
├── package.json                # Project dependencies and npm scripts
├── postcss.config.mjs          # PostCSS processing config
└── tsconfig.json               # TypeScript compiler configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.18.0` or higher (Node.js 20+ recommended)
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn` / `bun`)

### Local Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Diyor-Khasanov-dev/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode using Next.js Turbopack |
| `npm run build` | Builds the application for production deployment |
| `npm run start` | Starts the production server using the built app |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |

---

## 🚀 Production Deployment

### Deploying on Vercel

The easiest way to deploy this portfolio is using the [Vercel Platform](https://vercel.com/):

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project into [Vercel](https://vercel.com/new).
3. Vercel will automatically detect Next.js and apply optimal build settings (`npm run build`).
4. Click **Deploy** to publish your live site.

---

## 👤 Author & Connect

**Diyor Khasanov**
*Software Engineer • Co-Founder @ A.L.I.A*

- 🌐 **Portfolio**: [diyor-khasanov.dev](https://github.com/Diyor-Khasanov-dev)
- 💼 **LinkedIn**: [linkedin.com/in/diyor-khasanov](https://linkedin.com/in/diyor-khasanov)
- 🐙 **GitHub**: [@Diyor-Khasanov-dev](https://github.com/Diyor-Khasanov-dev)
- 📅 **Calendly**: [Schedule a Call](https://calendly.com/bdiyorxasanov)
- 💬 **Telegram**: [@Diyor_Khasanov_dev](https://t.me/Diyor_Khasanov_dev)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
