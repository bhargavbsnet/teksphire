"use client";

import React, { useState } from "react";
import { Cloud, Cpu, ShieldCheck, Terminal, Lightbulb, Workflow, Smartphone, Code2, RefreshCw, BarChart4, CheckCircle, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  icon: any;
  desc: string;
  benefits: string[];
  process: string[];
  tech: string[];
}

export default function ServicesPage() {
  const [activeSvc, setActiveSvc] = useState<string>("aws-migration");

  const services: ServiceItem[] = [
    {
      id: "aws-migration",
      title: "AWS Migration",
      icon: Cloud,
      desc: "Re-host, re-platform, and re-architect your legacy assets onto AWS. We execute zero-downtime database and container migrations.",
      benefits: ["Up to 40% reduction in hosting costs", "Enhanced multi-region redundancy", "Elimination of hardware maintenance lifecycles"],
      process: ["1. Inventory Assessment", "2. Architecture Design", "3. Phased Pilot Migration", "4. Validation & Handover"],
      tech: ["AWS Migration Hub", "AWS DMS", "CloudEndure", "Terraform"],
    },
    {
      id: "aws-managed-services",
      title: "AWS Managed Services",
      icon: RefreshCw,
      desc: "24/7 cloud monitoring, incident management, billing optimization, and proactive health maintenance of your AWS instances.",
      benefits: ["Guaranteed 99.99% infrastructure uptime", "Proactive cost saving reviews", "Immediate patch management"],
      process: ["1. Setup CloudWatch Alerts", "2. Run Health Checks", "3. Establish SRE On-call", "4. Monthly Tuning Reviews"],
      tech: ["AWS CloudWatch", "AWS Systems Manager", "AWS Trusted Advisor"],
    },
    {
      id: "cloud-security",
      title: "Cloud Security & Compliance",
      icon: ShieldCheck,
      desc: "Hardening AWS account configurations, establishing Cognito user pool security, IAM isolation, and SOC2/HIPAA readiness auditing.",
      benefits: ["Absolute network isolation", "Compliance with HIPAA, PCI-DSS, SOC2", "Automated threat response logs"],
      process: ["1. IAM Auditing", "2. VPC Security Group Isolation", "3. KMS Encryption Setup", "4. Compliance Reporting"],
      tech: ["AWS IAM", "AWS Shield", "AWS WAF", "Amazon GuardDuty"],
    },
    {
      id: "devops",
      title: "DevOps & IaC Automation",
      icon: Terminal,
      desc: "Construct robust, automated CI/CD deployment pipelines. We implement Infrastructure-as-Code to render deployments reproducible.",
      benefits: ["Deploys completed in under 5 minutes", "Consistent test runs", "Version-controlled infrastructure templates"],
      process: ["1. Build Jenkins/GitHub Actions pipelines", "2. Program CDK/Terraform scripts", "3. Containerize with Docker", "4. Deploy to ECS/EKS"],
      tech: ["GitHub Actions", "Docker", "AWS CDK", "Kubernetes", "ECS Fargate"],
    },
    {
      id: "ai-consulting",
      title: "AI Strategy & Consulting",
      icon: Lightbulb,
      desc: "Help your executives identify highest-leverage AI opportunities. We analyze data assets and design model architectures.",
      benefits: ["Feasibility verification reports", "Precise API token billing projections", "Optimized model selection outlines"],
      process: ["1. Workflow Auditing", "2. RAG Feasibility Assessment", "3. Model Benchmark Runs", "4. Architecture Mapping"],
      tech: ["Amazon Bedrock", "LangChain", "OpenAI API", "Hugging Face"],
    },
    {
      id: "ai-automation",
      title: "AI Workflow Automation",
      icon: Workflow,
      desc: "Integrate LLMs directly into your operational pipelines. Automate customer support, invoice parsing, and log reports.",
      benefits: ["Reduce support overhead by 50%", "Eliminate manual data entries", "Run prompt testing securely"],
      process: ["1. Prompt Engineering", "2. Vector Store Coding", "3. API Integration", "4. Latency Optimization"],
      tech: ["PromptForge AI", "Pinecone", "ChromaDB", "AWS Lambda"],
    },
    {
      id: "saas-development",
      title: "Custom SaaS Development",
      icon: Smartphone,
      desc: "Create scalable, multi-tenant cloud-native software products. We code responsive Next.js frontends and Node.js APIs.",
      benefits: ["Multi-tenant isolation frameworks", "Built-in Cognito billing hooks", "Clean dashboard visualizations"],
      process: ["1. UX Wireframing", "2. Database Schema Modeling", "3. Frontend Coding", "4. Cloud Deployment Setup"],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    },
    {
      id: "custom-software",
      title: "Custom Software Development",
      icon: Code2,
      desc: "Tailored codebases solving specific business logic constraints. We design high-performance microservices and databases.",
      benefits: ["Total ownership of source code", "Custom fit to operational pipelines", "No legacy dependency costs"],
      process: ["1. Domain Modeling", "2. Rest API Construction", "3. Load Testing", "4. Continuous Maintenance"],
      tech: ["Node.js", "Go", "Python", "PostgreSQL", "Redis"],
    },
    {
      id: "app-modernization",
      title: "Application Modernization",
      icon: RefreshCw,
      desc: "Break up outdated monolithic projects into scalable containerized microservices. Migrate old databases to RDS.",
      benefits: ["Improved horizontal scalability", "Reduced compute dependencies", "Faster localized releases"],
      process: ["1. Codebase Decoupling Analysis", "2. Containerization Setup", "3. DB Schema Splitting", "4. Rolling Updates Deploy"],
      tech: ["AWS ECS", "AWS Lambda", "AWS Aurora", "Docker"],
    },
    {
      id: "data-analytics",
      title: "Data Analytics & Pipelines",
      icon: BarChart4,
      desc: "Construct ETL pipeline streams that ingest user logs and compile analytical dashboard reports.",
      benefits: ["Real-time telemetry reports", "Structured warehouse configurations", "Predictive maintenance patterns"],
      process: ["1. Ingestion Pipeline Hook", "2. ETL Job Coding", "3. Warehouse Structuring", "4. Dashboard Reporting"],
      tech: ["AWS Glue", "Amazon Athena", "Amazon Redshift", "QuickSight"],
    },
  ];

  const selectedSvc = services.find((s) => s.id === activeSvc) || services[0];

  return (
    <div className="relative py-12 md:py-24">
      {/* Glow elements */}
      <div className="mesh-glow-cyan top-[20%] left-[-15%]" />
      <div className="mesh-glow-violet top-[50%] right-[-15%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Title header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent">Our Offerings</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            Enterprise Engineering Services
          </h1>
          <p className="text-slate-300 leading-relaxed">
            From initial AWS account setups to custom deep learning integrations, TEKSPHIRE designs high-availability software tailored to scale.
          </p>
        </div>

        {/* Tab Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: tabs list */}
          <div className="lg:col-span-4 space-y-2">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActiveSvc(svc.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3.5 ${
                    activeSvc === svc.id
                      ? "bg-slate-900 border-cyan-500/30 text-cyan-accent shadow-[0_0_15px_rgba(0,245,255,0.06)]"
                      : "bg-[#0b0d17]/50 border-white/5 text-slate-400 hover:bg-[#0f1225] hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-semibold">{svc.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right: tab detail panel */}
          <div className="lg:col-span-8 glow-card p-6 md:p-10 bg-[#0a0d17]/70 border border-white/5 rounded-2xl space-y-8 min-h-[400px]">
            {/* Header info */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">{selectedSvc.title}</h2>
              <p className="text-slate-300 leading-relaxed text-sm">{selectedSvc.desc}</p>
            </div>

            {/* Benefits & Process lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/5">
              {/* Benefits */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-accent">Key Benefits</h4>
                <ul className="space-y-3">
                  {selectedSvc.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-slate-350">
                      <CheckCircle className="w-4 h-4 text-emerald-450 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery Process */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-violet-accent">Execution Process</h4>
                <ul className="space-y-3">
                  {selectedSvc.process.map((step, idx) => (
                    <li key={idx} className="text-sm text-slate-350">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technologies Grid */}
            <div className="pt-6 border-t border-white/5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Core Technologies Applied</h4>
              <div className="flex flex-wrap gap-2">
                {selectedSvc.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono bg-slate-900 border border-white/5 px-3 py-1.5 rounded-lg text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 flex justify-end">
              <a
                href="/contact"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-secondary to-cyan-accent text-[#05070f] font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all flex items-center gap-1.5"
              >
                Inquire About Service <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
