"use client";

import React from "react";
import { Shield, Key, HeartPulse, Landmark, Truck, Megaphone, CheckCircle } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      title: "Healthcare & Digital Health",
      icon: HeartPulse,
      accentColor: "text-rose-400 border-rose-500/20",
      complianceTag: "HIPAA Compliant",
      desc: "Protecting patient privacy is non-negotiable. We build secure AWS systems with end-to-end data encryption, IAM authorization limits, and detailed audit trails.",
      features: [
        "AWS KMS Customer Managed Keys (CMKs)",
        "Audit trail tracking via AWS CloudTrail",
        "Secure storage for EHR data in isolated S3 buckets",
        "AWS Cognito integration for clinician logins",
      ],
    },
    {
      title: "Banking & Financial Technology",
      icon: Landmark,
      accentColor: "text-amber-400 border-amber-500/20",
      complianceTag: "PCI-DSS Level 1",
      desc: "Secure transaction ledgers, fraud audit logging, and lightning-fast multi-factor authentication. We design banking systems for absolute integrity.",
      features: [
        "Network isolation using private subnet VPCs",
        "Hardware security modules (HSM) key setups",
        "Real-time fraud telemetry with Kinesis streams",
        "Granular Cognito JWT authentication scopes",
      ],
    },
    {
      title: "Logistics & Telematics (IoT)",
      icon: Truck,
      accentColor: "text-cyan-accent border-cyan-500/20",
      complianceTag: "MQTT WebSockets",
      desc: "Track global assets in real time. We implement high-throughput MQTT connection hubs on AWS supporting thousands of telemetry events per second.",
      features: [
        "AWS IoT Core connections with mutual TLS (mTLS)",
        "WebSocket telemetry streams (AWS API Gateway)",
        "Automated log ingestion with AWS Glue & Athena",
        "Edge anomaly notification alerts via SNS",
      ],
    },
    {
      title: "AdTech & High-Volume Media",
      icon: Megaphone,
      accentColor: "text-violet-accent border-violet-500/20",
      complianceTag: "SOC2 Certified Pipelines",
      desc: "Execute sub-millisecond bidding calls. We optimize ECS container scale configurations and caching layers to ingest billions of monthly impressions.",
      features: [
        "Amazon ECS Fargate auto-scaled task groups",
        "ElastiCache Redis clusters resolving in under 1ms",
        "Ingestion pipelines connected to Redshift Warehouses",
        "WAF firewalls block malicious click-farm attempts",
      ],
    },
  ];

  return (
    <div className="relative py-12 md:py-24">
      {/* Background glow filters */}
      <div className="mesh-glow-cyan top-[20%] left-[-15%]" />
      <div className="mesh-glow-violet top-[60%] right-[-15%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Industries Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent">Domains We Serve</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            Compliance-Hardened Environments
          </h1>
          <p className="text-slate-350 leading-relaxed">
            Our cloud systems are built around domain-specific regulations, safeguarding security, throughput requirements, and system auditing.
          </p>
        </div>

        {/* Responsive Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="glow-card p-6 md:p-8 bg-[#0a0d17]/60 border border-white/5 rounded-2xl flex flex-col justify-between group transition-all"
              >
                <div className="space-y-6">
                  {/* Top info and compliance tag */}
                  <div className="flex justify-between items-center">
                    <div className={`w-12 h-12 rounded-xl bg-slate-900 border flex items-center justify-center ${ind.accentColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase bg-slate-900 px-3 py-1.5 rounded-lg border border-white/5 text-slate-300">
                      {ind.complianceTag}
                    </span>
                  </div>

                  {/* Header */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-accent transition-colors font-display">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="pt-4 border-t border-white/5 space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-450">AWS Security Blueprint</h4>
                    <ul className="space-y-2">
                      {ind.features.map((feat, fidx) => (
                        <li key={fidx} className="flex gap-2 text-xs text-slate-350">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-accent flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="mt-8 text-center py-2.5 bg-slate-950 border border-white/5 hover:border-cyan-accent/40 rounded-xl text-xs font-bold text-slate-300 hover:text-white transition-all block"
                >
                  Configure Compliance Pipeline
                </a>
              </div>
            );
          })}
        </div>

        {/* Global Security Standard Banner */}
        <div className="glow-card p-6 md:p-8 bg-[#0b0d19]/80 border border-white/5 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-accent flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">AWS Well-Architected Review compliant</h3>
              <p className="text-xs text-slate-450 mt-0.5">We strictly follow the Security, Reliability, Performance, and Cost Optimization pillars.</p>
            </div>
          </div>
          <a
            href="/contact"
            className="px-5 py-3 bg-gradient-to-r from-secondary to-cyan-accent text-[#05070f] font-bold text-xs tracking-wider uppercase rounded-xl hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all flex-shrink-0"
          >
            Request Security Audit
          </a>
        </div>
      </div>
    </div>
  );
}
