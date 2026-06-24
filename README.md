# TEKSPHIRE | Full-Stack Next.js Enterprise Web Platform

This is the production-ready full-stack web application for **TEKSPHIRE** (teksphire.com) built using Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Prisma ORM. It features the **PromptForge AI™** flagship product simulator, dynamic telemetry charts, developer resources CDK setups, and secure API routers.

---

## 🚀 Technology Stack Overview

- **Frontend Core**: Next.js (App Router) + TypeScript + Tailwind CSS (v4)
- **Animations**: Framer Motion (scroll reveals, sliding tab transitions, responsive canvas particle nets)
- **Database ORM**: Prisma ORM (v5) supporting PostgreSQL connections
- **Backend API Routes**: Route Handlers for contacts, job candidate submissions, and newsletter subscriptions
- **AWS Integrations**: Real-time simulated endpoints for Amazon Bedrock inference, Cognito authorization headers, and S3 file download loaders
- **Telemetry Charts**: High-fidelity `<canvas>` rendering bezier throughput curves

---

## 📂 Project Architecture

```bash
teksphire-app/
├── prisma/
│   └── schema.prisma        # PostgreSQL database tables configuration
├── public/
│   ├── logo.svg             # Transparent high-contrast branding logo
│   └── favicon.ico          # Browser tab icon asset
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── careers/     # Candidate application POST endpoint
│   │   │   ├── contact/     # Client contact submission POST endpoint
│   │   │   └── newsletter/  # Newsletter subscription POST endpoint
│   │   ├── about/           # Corporate history & leadership
│   │   ├── services/        # 10 service profiles (AWS, AI, DevOps, custom code)
│   │   ├── promptforge/     # Flagship product sandbox, pricing, and FAQ
│   │   ├── solutions/       # Custom audience strategies tabs
│   │   ├── industries/      # Compliance configurations grid (HIPAA, PCI-DSS)
│   │   ├── case-studies/    # Telemetry telemetry simulator & projects
│   │   ├── resources/       # SDK code snippets selector & CDK templates
│   │   ├── contact/         # Contact forms & appointment scheduler
│   │   ├── privacy/         # Privacy policy terms
│   │   ├── terms/           # Terms of service terms
│   │   ├── cookies/         # Cookie policy terms
│   │   ├── globals.css      # Midnight styling layout configurations
│   │   ├── layout.tsx       # Root layout skeleton with Navbar & Footer
│   │   ├── page.tsx         # Responsive corporate homepage
│   │   ├── sitemap.ts       # Dynamic search engine crawl sitemaps
│   │   └── robots.ts        # Direct indexing permissions controls
│   ├── components/
│   │   ├── Navbar.tsx       # Responsive header with SVG logo
│   │   ├── Footer.tsx       # Newsletter-hooked footer blocks
│   │   ├── BackgroundCanvas.tsx # Floating background neural mesh
│   │   └── AwsArchitecture.tsx # Interactive serverless AWS pipeline
│   └── lib/
│       └── db.ts            # Prisma initializer with memory fallbacks
├── .env.example             # Configuration variables blueprint
├── package.json
└── tsconfig.json
```

---

## 🛠️ Local Development & Setup

### 1. Prerequisite Installations
- Ensure **Node.js** (v18.x or above) is installed.
- Ensure **npm** (v10.x or above) is ready.

### 2. Install Project Dependencies
Run the installation command:
```bash
npm install
```

### 3. Generate Prisma Clients
Compile local database models mapping definitions:
```bash
npx prisma generate
```

### 4. Configure Environment Variables
Copy `.env.example` to `.env` and fill in your actual AWS Credentials and PostgreSQL database URL:
```bash
cp .env.example .env
```
*(Note: If `DATABASE_URL` is omitted, the application uses local memory-store database fallbacks automatically, ensuring it remains fully operational for staging and demo reviews).*

### 5. Launch Development Server
Boot the Next.js development server:
```bash
npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚡ Deployment to Vercel

This repository is optimized for instant deployment to Vercel:

1. **Connect GitHub**: Push the repository code to your GitHub account.
2. **Import Project**: Log into [Vercel Dashboard](https://vercel.com) and click **Add New > Project**, then import this repository.
3. **Set Environment Variables**: Copy keys from `.env.example` and paste them into Vercel's **Environment Variables** settings panel (particularly `DATABASE_URL` if connecting a live Neon/PostgreSQL database, alongside AWS Cognito credentials).
4. **Deploy**: Click **Deploy**. Vercel will automatically run `npm run build` and output a live SSL-secured production URL.

---

## 🛡️ Well-Architected Security compliance
- **Cross-Site Scripting (XSS)**: Inputs sanitized through react nodes.
- **CSRF Protections**: Auth calls secured with CORS headers and authorization bearer JWT filters on route APIs.
- **SQL Injection**: Prevented natively by Prisma ORM's parameterized query bindings.
