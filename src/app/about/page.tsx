"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Cpu, Code2, Users2, Target, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  const coreValues = [
    {
      title: "Technical Rigor",
      icon: Code2,
      desc: "We write clean, versioned, infrastructure-as-code scripts. No manual cloud click-ops. Every deployment is declarative and tested.",
    },
    {
      title: "Security First",
      icon: ShieldCheck,
      desc: "All configurations, Cognito logins, and S3 assets are encrypted in transit and at rest. We target compliance benchmarks from day one.",
    },
    {
      title: "Customer Alignment",
      icon: HeartHandshake,
      desc: "We work as extensions of your team, participating in sprints, documenting architecture plans, and communicating transparently.",
    },
  ];

  return (
    <div className="relative py-12 md:py-24">
      {/* Background ambient lighting */}
      <div className="mesh-glow-cyan top-[15%] left-[-20%]" />
      <div className="mesh-glow-violet top-[60%] right-[-25%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* About Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent">Our Identity</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            Engineering the Foundations of Digital Innovation
          </h1>
          <p className="text-slate-300 leading-relaxed text-lg">
            TEKSPHIRE was founded by a team of cloud architects and AI engineers who believed that enterprise digital transformation requires depth of expertise, not marketing templates.
          </p>
        </div>

        {/* Philosophy Block */}
        <div className="glow-card p-8 md:p-12 bg-[#0a0d17]/70 border border-white/5 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="w-10 h-10 rounded-lg bg-violet-950/40 border border-violet-500/20 text-violet-accent flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">Our Engineering Mission</h2>
            <p className="text-slate-350 leading-relaxed text-sm">
              We empower startups, SMEs, and large enterprises to scale without fear by taking full responsibility for their AWS footprint, DevOps lifecycle, and AI enablement.
            </p>
            <p className="text-slate-350 leading-relaxed text-sm">
              Through platforms like <strong>PromptForge AI™</strong> and our bespoke consulting engagements, we convert complex distributed architectures into manageable, high-performance operations.
            </p>
          </div>
          {/* Visual element */}
          <div className="p-6 bg-slate-950 rounded-2xl border border-white/5 space-y-4">
            <div className="text-slate-500 font-mono text-xs">{"$ cat teksphire_manifesto.md"}</div>
            <div className="text-slate-300 font-mono text-xs leading-relaxed space-y-2 bg-[#05070f] p-4 rounded border border-white/5">
              <p className="text-cyan-accent"># 1. Automate Everything</p>
              <p className="text-slate-450">Human error is the leading cause of downtime. Code your infrastructure.</p>
              <p className="text-cyan-accent"># 2. Contain & Isolate</p>
              <p className="text-slate-450">Use secure IAM policies, Cognito pools, and VPC subnets.</p>
              <p className="text-cyan-accent"># 3. Model Gracefully</p>
              <p className="text-slate-450">AI should augment workflows, backed by predictable cache layers.</p>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold font-display text-white">Values That Guide Us</h2>
            <p className="text-sm text-slate-400">Our code is our word. We maintain these principles in every commit.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="glow-card p-8 bg-[#0a0d17]/50 border border-white/5 rounded-2xl space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-accent flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{val.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-12 text-center">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">Our Leadership</h2>
            <p className="text-sm text-slate-450">A collective of developers, system administrators, and product designers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glow-card p-6 bg-[#0a0d17]/40 border border-white/5 rounded-2xl text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-slate-900 border border-cyan-500/30 mx-auto flex items-center justify-center text-cyan-accent text-xl font-bold font-display">
                BB
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Bhargav Basnet</h4>
                <p className="text-xs text-cyan-accent font-semibold tracking-wider uppercase mt-1">Chief Solutions Architect</p>
              </div>
              <p className="text-xs text-slate-450 leading-relaxed">Ex-AWS Staff Consultant with 10+ years specializing in complex multi-region migration and secure serverless scaling.</p>
            </div>
            <div className="glow-card p-6 bg-[#0a0d17]/40 border border-white/5 rounded-2xl text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-slate-900 border border-violet-500/30 mx-auto flex items-center justify-center text-violet-accent text-xl font-bold font-display">
                AS
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Alex Stone</h4>
                <p className="text-xs text-violet-accent font-semibold tracking-wider uppercase mt-1">Lead AI Engineer</p>
              </div>
              <p className="text-xs text-slate-450 leading-relaxed">Deep learning researcher focusing on custom model fine-tuning, retrieval-augmented generation (RAG), and PromptForge AI.</p>
            </div>
            <div className="glow-card p-6 bg-[#0a0d17]/40 border border-white/5 rounded-2xl text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-700 mx-auto flex items-center justify-center text-slate-300 text-xl font-bold font-display">
                LM
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Lisa Miller</h4>
                <p className="text-xs text-slate-400 font-semibold tracking-wider uppercase mt-1">Director of Managed Services</p>
              </div>
              <p className="text-xs text-slate-450 leading-relaxed">Supervises DevOps pipelines, site reliability monitoring (SRE), SLA guarantees, and security compliance audits.</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center pt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-cyan-accent text-[#05070f] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all"
          >
            Start Your Project with Us
          </Link>
        </div>
      </div>
    </div>
  );
}
