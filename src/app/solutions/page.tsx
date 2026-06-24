"use client";

import React, { useState } from "react";
import { Sparkles, BarChart2, ShieldCheck, Zap, ArrowRight, Lightbulb, CheckCircle2 } from "lucide-react";

interface SolutionProfile {
  id: string;
  tabLabel: string;
  tagline: string;
  focusTitle: string;
  description: string;
  challenges: string[];
  architecture: string[];
  techStack: string[];
}

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<string>("startups");

  const profiles: SolutionProfile[] = [
    {
      id: "startups",
      tabLabel: "Startups & MVPs",
      tagline: "Build fast. Scale automatically. Pay for what you use.",
      focusTitle: "Zero-Ops Scaling Infrastructure",
      description: "Startups need to test market validation without building heavy operations teams. We implement secure, serverless architectures that auto-scale from zero to millions of users seamlessly, minimizing early infrastructure costs.",
      challenges: ["Unpredictable initial user traction", "Extremely limited capital/dev budget", "Need for immediate feature iteration cycles"],
      architecture: [
        "Serverless compute layers (AWS Lambda)",
        "Amazon Cognito for instant user pool configurations",
        "Automated GitHub Actions CI/CD pipelines",
        "DynamoDB on-demand billing",
      ],
      techStack: ["Next.js", "TypeScript", "AWS Lambda", "DynamoDB", "Cognito"],
    },
    {
      id: "smes",
      tabLabel: "SMEs & Growth",
      tagline: "Unify workflows. Modernize servers. Lower overhead.",
      focusTitle: "Operational Cost Optimization & Modernization",
      description: "SMEs frequently suffer from legacy technical debt and high cloud hosting bills. We audit your existing instances, design migration pathways, and integrate containerized microservices to reduce resource waste.",
      challenges: ["Rising server maintenance expenses", "Data silos blocking operations", "Lack of specialized cloud personnel"],
      architecture: [
        "Transition from EC2 VMs to lightweight ECS Fargate tasks",
        "Construct unified AWS RDS databases",
        "Implement automated CloudWatch cost alerts",
        "Integrate API gateways to bridge systems",
      ],
      techStack: ["Docker", "Amazon ECS Fargate", "AWS Aurora RDS", "CloudWatch"],
    },
    {
      id: "enterprises",
      tabLabel: "Enterprises",
      tagline: "Absolute security. Isolated VPCs. 99.99% Uptime guarantees.",
      focusTitle: "High-Availability Legacy Refactoring",
      description: "Large scale operations require zero-downtime, complete data privacy, and strict compliance profiles. We re-architect monolithic architectures into secure private networks with automated backups and recovery protocols.",
      challenges: ["HIPAA/SOC2/PCI compliance audits", "Complex distributed data syncs", "Zero tolerance for downtime"],
      architecture: [
        "Multi-AZ private VPC subnets with NAT gateways",
        "Direct AWS KMS encryption of all data-at-rest",
        "Private Link VPC connection for model inferences",
        "24/7 SRE container cluster monitoring",
      ],
      techStack: ["Terraform", "Amazon EKS (Kubernetes)", "AWS Secrets Manager", "AWS KMS", "DirectConnect"],
    },
    {
      id: "saas-agencies",
      tabLabel: "SaaS & Agencies",
      tagline: "Multi-tenant isolation. Developer API hooks. Telemetry metrics.",
      focusTitle: "Multi-Tenant SaaS Launchpad",
      description: "For organizations launching multi-tenant products, isolation is critical. We establish scalable database partitions, secure auth scopes, and custom user dashboard integrations to get your product to market faster.",
      challenges: ["Securing tenant data isolation", "Managing multiple model endpoints", "Billing transparency per client"],
      architecture: [
        "Prisma multi-schema tenant isolation",
        "AWS Bedrock centralized prompt libraries",
        "Global token rate limiting via API Gateway",
        "Usage log exports (Amazon Athena)",
      ],
      techStack: ["Next.js App Router", "Prisma ORM", "AWS Bedrock", "Amazon Athena", "Redis"],
    },
  ];

  const selectedProfile = profiles.find((p) => p.id === activeTab) || profiles[0];

  return (
    <div className="relative py-12 md:py-24">
      {/* Background elements */}
      <div className="mesh-glow-cyan top-[25%] left-[-15%]" />
      <div className="mesh-glow-violet top-[55%] right-[-20%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Solutions Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent">Our Strategies</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            Architectures Customized by Scale
          </h1>
          <p className="text-slate-350 leading-relaxed">
            Whether you are launching your first MVP or refactoring an enterprise cluster, TEKSPHIRE designs stable, risk-mitigated technical environments.
          </p>
        </div>

        {/* Dynamic solution tabs */}
        <div className="space-y-8">
          {/* Tab Selector buttons */}
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-3 p-1.5 bg-[#0b0d19]/80 border border-white/5 rounded-2xl max-w-3xl mx-auto backdrop-blur-md">
            {profiles.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`w-full text-center py-3.5 px-4 rounded-xl text-xs font-bold transition-all ${
                  activeTab === p.id
                    ? "bg-slate-900 text-cyan-accent border border-cyan-500/20 shadow-[0_0_15px_rgba(0,245,255,0.06)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {p.tabLabel}
              </button>
            ))}
          </div>

          {/* Tab Panel details */}
          <div className="glow-card p-6 md:p-12 bg-[#0a0d17]/70 border border-white/5 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left panel: overview & info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-xs font-bold text-cyan-accent">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{selectedProfile.tagline}</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">{selectedProfile.focusTitle}</h2>
              <p className="text-slate-300 leading-relaxed text-sm">{selectedProfile.description}</p>

              {/* Challenges vs target state */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Core Challenges Solved</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedProfile.challenges.map((c, idx) => (
                    <div key={idx} className="p-3 bg-rose-950/10 border border-rose-500/10 rounded-xl text-xs text-rose-350 font-semibold leading-relaxed">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right panel: targeted architecture details */}
            <div className="lg:col-span-5 p-6 bg-slate-950/90 rounded-2xl border border-white/5 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-violet-accent mb-4">Target Architecture Blueprint</h4>
                <ul className="space-y-3.5">
                  {selectedProfile.architecture.map((arch, idx) => (
                    <li key={idx} className="flex gap-2.5 text-xs text-slate-350 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Infrastructure Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProfile.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono bg-slate-900 border border-white/5 px-2.5 py-1 rounded text-slate-400 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="/contact"
                className="w-full text-center py-3 bg-[#0a0d17] border border-white/10 hover:border-cyan-accent/50 text-slate-200 hover:text-white rounded-xl text-xs font-bold tracking-wider uppercase transition-all block"
              >
                Inquire About Solution
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
