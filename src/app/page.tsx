"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CloudLightning, ShieldCheck, Cpu, Database, Award, Users, Terminal, Sparkles, Activity } from "lucide-react";
import AwsArchitecture from "@/components/AwsArchitecture";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  const services = [
    {
      title: "AWS Cloud Journey",
      icon: CloudLightning,
      desc: "Accelerate your cloud modernization with risk-mitigated migrations, serverless re-platforming, and cost optimized multi-region infrastructures.",
    },
    {
      title: "Custom AI Implementations",
      icon: Cpu,
      desc: "Empower your operations with state-of-the-art LLMs, automated agents, semantic data search, and proprietary Bedrock pipelines.",
    },
    {
      title: "DevOps & Infrastructure",
      icon: Terminal,
      desc: "Deploy lightning fast with automated CI/CD pipelines, GitOps, Kubernetes/ECS orchestration, and IaC architectures (Terraform/CDK).",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Mesh Glow Background Elements */}
      <div className="mesh-glow-cyan top-[10%] left-[-10%]" />
      <div className="mesh-glow-violet top-[40%] right-[-10%]" />

      {/* 1. Hero Section */}
      <section className="relative pt-10 pb-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            {/* Tagline pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-semibold text-cyan-accent">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen Enterprise AWS & AI Architectures</span>
            </motion.div>

            {/* Title */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight font-display leading-[1.05]">
              Orchestrate the Future of <br className="hidden sm:inline" />
              <span className="text-gradient-violet">Cloud & AI Engineering</span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              TEKSPHIRE designs, builds, and manages ultra-secure AWS serverless migrations, customized AI application pipelines, and DevOps automation for global enterprises.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-secondary to-cyan-accent text-[#05070f] hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] transition-all flex items-center justify-center gap-2"
              >
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/promptforge"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border border-white/10 hover:border-cyan-accent/50 bg-[#0f1225]/40 backdrop-blur text-slate-200 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                Explore PromptForge AI™
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Hero Product Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 md:mt-24 glow-card p-2 md:p-3 bg-[#0a0d17]/50 rounded-2xl max-w-5xl mx-auto"
          >
            <div className="bg-[#05070f] rounded-xl overflow-hidden border border-white/5 relative aspect-video flex flex-col">
              {/* Fake Dashboard Header */}
              <div className="px-4 py-3 bg-[#090b14] border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs text-slate-400 font-semibold font-display">PromptForge AI™ Dashboard</div>
                <div className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-450 border border-emerald-500/20 text-[10px] font-bold flex items-center gap-1">
                  <Activity className="w-3 h-3" /> Live
                </div>
              </div>
              {/* Fake Dashboard Content */}
              <div className="flex-grow grid grid-cols-12 gap-4 p-4 text-xs font-mono">
                {/* Left panel: prompt selector */}
                <div className="col-span-4 border-r border-white/5 pr-4 space-y-3">
                  <div className="text-slate-500 font-bold uppercase text-[9px] tracking-wider">Prompts Library</div>
                  <div className="p-2 rounded bg-slate-900 border border-cyan-500/30 text-cyan-accent">
                    <div>Data Extraction Config</div>
                    <div className="text-[10px] text-slate-500 mt-1">v2.4 - Claude 3.5</div>
                  </div>
                  <div className="p-2 rounded bg-slate-950/40 border border-white/5 text-slate-400">
                    <div>SQL Query Parser</div>
                    <div className="text-[10px] text-slate-500 mt-1">v1.1 - Gemini 1.5</div>
                  </div>
                  <div className="p-2 rounded bg-slate-950/40 border border-white/5 text-slate-400">
                    <div>Cognito Login Handler</div>
                    <div className="text-[10px] text-slate-500 mt-1">v3.0 - GPT-4o</div>
                  </div>
                </div>
                {/* Right panel: prompt playground */}
                <div className="col-span-8 space-y-4 flex flex-col">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">active_prompt_sandbox</span>
                    <span className="text-[10px] text-emerald-450">LLM Inference Duration: 120ms</span>
                  </div>
                  <div className="flex-grow p-3 bg-slate-950/90 rounded border border-white/5 text-slate-350 overflow-y-auto leading-relaxed">
                    {"// System Rules Initialization"} <br />
                    {"You are an expert serverless database analyzer."} <br />
                    {"Format the JSON outputs using camelCase. Filter records dated after 2026."}
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-grow py-2 px-3 bg-slate-900 rounded border border-white/5 text-slate-500">
                      Enter sandbox parameter values...
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-secondary to-cyan-accent text-[#05070f] font-bold rounded">
                      Test Prompt
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Services Overview */}
      <section className="py-20 bg-slate-950/30 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-accent">Modern Capabilities</h2>
            <p className="text-3xl sm:text-4xl font-bold font-display text-white">
              Accelerate Cloud Engineering & AI Innovation
            </p>
            <p className="text-slate-400">
              We operate at the nexus of reliable cloud infrastructure and cutting-edge intelligence pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div key={idx} className="glow-card p-8 bg-[#0a0d17]/60 border border-white/5 rounded-2xl flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center text-cyan-accent">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-display">{svc.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{svc.desc}</p>
                  </div>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-cyan-accent hover:text-white transition-colors"
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. AWS Cloud Journey (AwsArchitecture diagram) */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-violet-accent">System Architecture</h2>
            <p className="text-3xl sm:text-4xl font-bold font-display text-white">
              Interactive AWS Ecosystem Mapping
            </p>
            <p className="text-slate-400">
              Explore how we orchestrate serverless API gateways, security boundaries, NoSQL clusters, and AI engines on AWS.
            </p>
          </div>

          <AwsArchitecture />
        </div>
      </section>

      {/* 4. Why Choose Us / Value Proposition */}
      <section className="py-20 bg-slate-950/30 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-accent">Why TEKSPHIRE</h2>
              <p className="text-3xl sm:text-4xl font-bold font-display text-white leading-tight">
                Designed for Reliability, Performance, and Velocity
              </p>
              <p className="text-slate-400 leading-relaxed">
                We combine deep technical competence in AWS architectural blueprints with state-of-the-art software capabilities to deliver mission-critical solutions.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-450 flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">100% AWS Certified Solutions Architects</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Every engineer on your project is AWS certified.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-450 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Deep AI Prompt Engineering Competency</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Makers of PromptForge AI™, the flagship enterprise platform.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-6">
              <div className="glow-card p-6 bg-[#0a0d17]/50 border border-white/5 rounded-2xl text-center space-y-2">
                <div className="text-4xl sm:text-5xl font-extrabold text-cyan-accent font-display">99.99%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Uptime SLA Maintained</div>
              </div>
              <div className="glow-card p-6 bg-[#0a0d17]/50 border border-white/5 rounded-2xl text-center space-y-2">
                <div className="text-4xl sm:text-5xl font-extrabold text-violet-accent font-display">120+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">AWS Infrastructure Deploys</div>
              </div>
              <div className="glow-card p-6 bg-[#0a0d17]/50 border border-white/5 rounded-2xl text-center space-y-2">
                <div className="text-4xl sm:text-5xl font-extrabold text-white font-display">40%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Average Cloud Cost Savings</div>
              </div>
              <div className="glow-card p-6 bg-[#0a0d17]/50 border border-white/5 rounded-2xl text-center space-y-2">
                <div className="text-4xl sm:text-5xl font-extrabold text-cyan-accent font-display">150M+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">AI Prompt Tokens Evaluated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Timeline */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-accent">Our Process</h2>
            <p className="text-3xl sm:text-4xl font-bold font-display text-white">
              The Path to Cloud & AI Modernization
            </p>
            <p className="text-slate-400">
              We work in structured phases to ensure stability, velocity, and alignment with your business goals.
            </p>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative pl-8 md:pl-0 space-y-4 mb-12 md:mb-0">
              <div className="absolute left-[-9px] top-0 md:relative md:left-0 md:inline-flex w-5 h-5 rounded-full bg-cyan-accent border border-[#05070f] z-20 shadow-[0_0_10px_rgba(0,245,255,0.8)]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-accent">Phase 01</h4>
              <h3 className="text-lg font-bold text-white font-display">Discovery & Auditing</h3>
              <p className="text-sm text-slate-450 leading-relaxed">
                Detailed examination of legacy codebases, AWS bills, security posture, and bottlenecks.
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative pl-8 md:pl-0 space-y-4 mb-12 md:mb-0">
              <div className="absolute left-[-9px] top-0 md:relative md:left-0 md:inline-flex w-5 h-5 rounded-full bg-violet-accent border border-[#05070f] z-20 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-violet-accent">Phase 02</h4>
              <h3 className="text-lg font-bold text-white font-display">Infrastructure Design</h3>
              <p className="text-sm text-slate-450 leading-relaxed">
                Construct custom CloudFormation/CDK templates, serverless pipelines, and AI security wrappers.
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative pl-8 md:pl-0 space-y-4 mb-12 md:mb-0">
              <div className="absolute left-[-9px] top-0 md:relative md:left-0 md:inline-flex w-5 h-5 rounded-full bg-cyan-accent border border-[#05070f] z-20 shadow-[0_0_10px_rgba(0,245,255,0.8)]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-accent">Phase 03</h4>
              <h3 className="text-lg font-bold text-white font-display">Agile Implementation</h3>
              <p className="text-sm text-slate-450 leading-relaxed">
                Execute phased database schema migrations, code containerization, and prompt integrations.
              </p>
            </div>
            {/* Step 4 */}
            <div className="relative pl-8 md:pl-0 space-y-4">
              <div className="absolute left-[-9px] top-0 md:relative md:left-0 md:inline-flex w-5 h-5 rounded-full bg-violet-accent border border-[#05070f] z-20 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-violet-accent">Phase 04</h4>
              <h3 className="text-lg font-bold text-white font-display">Continuous Governance</h3>
              <p className="text-sm text-slate-450 leading-relaxed">
                Integrate CloudWatch monitoring dashboard, prompt latency tracking, and 24/7 DevOps support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="py-20 relative bg-gradient-to-b from-transparent to-[#0a0d17]/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-8">
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Ready to Accelerate Your <br />
            Digital Infrastructure?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Book an engineering audit with our solutions architects. We will inspect your current AWS footprint and model deployments free of charge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-secondary to-cyan-accent text-[#05070f] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all"
            >
              Request Free Consultation
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-white/10 rounded-xl text-slate-350 hover:text-white hover:border-white/20 transition-colors"
            >
              Meet the Engineers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
