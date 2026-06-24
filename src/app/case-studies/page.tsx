"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, TrendingDown, Zap, BarChart2 } from "lucide-react";

export default function CaseStudiesPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [metricType, setMetricType] = useState<"latency" | "throughput">("latency");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 250);

    // Initial points for Bezier Curve
    const points: { x: number; y: number }[] = [];
    const maxPoints = 12;
    for (let i = 0; i < maxPoints; i++) {
      points.push({
        x: (width / (maxPoints - 1)) * i,
        y: height / 2 + (Math.random() - 0.5) * 60,
      });
    }

    let offset = 0;

    const drawTelemetry = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Grid lines
      ctx.strokeStyle = "rgba(255,255,255,0.03)";
      ctx.lineWidth = 1;
      const numLines = 6;
      for (let i = 1; i < numLines; i++) {
        const y = (height / numLines) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update points values dynamically to simulate real-time metrics
      points.forEach((p, idx) => {
        if (idx > 0 && idx < points.length - 1) {
          const targetY =
            metricType === "latency"
              ? height * 0.7 - (idx * 12) + Math.sin(offset + idx) * 15 // Downward curve
              : height * 0.3 + (idx * 8) + Math.cos(offset + idx) * 18; // Upward curve
          p.y += (targetY - p.y) * 0.1;
        }
      });

      offset += 0.05;

      // Draw Gradient Area below Bezier Curve
      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.lineTo(points[0].x, points[0].y);

      for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.lineTo(width, height);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      if (metricType === "latency") {
        gradient.addColorStop(0, "rgba(168, 85, 247, 0.15)");
        gradient.addColorStop(1, "rgba(168, 85, 247, 0.0)");
      } else {
        gradient.addColorStop(0, "rgba(0, 245, 255, 0.15)");
        gradient.addColorStop(1, "rgba(0, 245, 255, 0.0)");
      }
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw Main Bezier Curve Line
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);

      ctx.strokeStyle = metricType === "latency" ? "#a855f7" : "#00f5ff";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Draw dots on peaks
      points.forEach((p, idx) => {
        if (idx % 3 === 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
          ctx.beginPath();
          ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
          ctx.strokeStyle = metricType === "latency" ? "rgba(168, 85, 247, 0.4)" : "rgba(0, 245, 255, 0.4)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });

      animId = requestAnimationFrame(drawTelemetry);
    };

    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || 600;
      // Reset point coordinates
      points.forEach((p, idx) => {
        p.x = (width / (maxPoints - 1)) * idx;
      });
    };

    window.addEventListener("resize", handleResize);
    drawTelemetry();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [metricType]);

  const caseStudies = [
    {
      title: "SaaS Application Modernization & AWS Migration",
      client: "NovusTech Corp",
      metricValue: "99.999% SLA Met",
      highlightText: "Latencies down from 480ms to 12ms",
      desc: "NovusTech had a monolithic Node.js application running on legacy virtual servers that crashed under traffic bursts. TEKSPHIRE containerized the project with Docker and migrated it onto serverless ECS Fargate clusters.",
      accomplishments: [
        "AWS API Gateway setup routing over 2.4B monthly calls",
        "AWS Cognito integration isolated user logins securely",
        "Replaced SQL bottleneck logs with DynamoDB global caching",
        "CI/CD deployments reduced duration from hours to 4 minutes",
      ],
    },
    {
      title: "PCI-DSS Hardening & Fintech Cloud Architecture",
      client: "PayCore Inc",
      metricValue: "Audit Certified",
      highlightText: "Zero-Downtime Migration completed",
      desc: "PayCore required immediate PCI-DSS level 1 security certification. We re-architected their entire AWS database network using private VPC subnets, AWS KMS envelope encryption, and IAM permissions lockdowns.",
      accomplishments: [
        "Constructed secure multi-tenant RDS database boundaries",
        "AWS Secrets Manager key rotations automated securely",
        "CloudWatch alarm triggers configured to notify SRE teams",
        "KMS HSM storage keys verified by third-party SOC2 auditors",
      ],
    },
  ];

  return (
    <div className="relative py-12 md:py-24">
      {/* Mesh background glows */}
      <div className="mesh-glow-cyan top-[15%] left-[-20%]" />
      <div className="mesh-glow-violet top-[50%] right-[-15%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Case Studies Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent">Our Projects</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            Proven Architectural Deployments
          </h1>
          <p className="text-slate-350 leading-relaxed">
            See how TEKSPHIRE refactors outdated platforms to optimize response times, scalability limits, and infrastructure bills.
          </p>
        </div>

        {/* Dynamic Telemetry Chart panel */}
        <div className="glow-card p-6 md:p-8 bg-[#0a0d17]/80 border border-white/5 rounded-2xl space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-white/5">
            <div>
              <h3 className="text-xl font-bold text-white font-display">Live Ingestion Telemetry Simulator</h3>
              <p className="text-xs text-slate-400 mt-0.5">Simulated metrics comparing NovusTech server values post-migration.</p>
            </div>
            {/* Chart toggle controls */}
            <div className="flex gap-2 p-1 bg-slate-950 border border-white/5 rounded-xl">
              <button
                onClick={() => setMetricType("latency")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  metricType === "latency" ? "bg-slate-900 text-violet-accent" : "text-slate-450 hover:text-white"
                }`}
              >
                <TrendingDown className="w-3.5 h-3.5 inline mr-1" /> Latency Reduction (ms)
              </button>
              <button
                onClick={() => setMetricType("throughput")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  metricType === "throughput" ? "bg-slate-900 text-cyan-accent" : "text-slate-450 hover:text-white"
                }`}
              >
                <Zap className="w-3.5 h-3.5 inline mr-1" /> API Throughput (req/m)
              </button>
            </div>
          </div>

          {/* Canvas Wrapper */}
          <div className="bg-slate-950/80 rounded-xl p-4 border border-white/5 relative">
            <canvas ref={canvasRef} className="w-full h-[250px] block" />
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono text-emerald-450 font-bold uppercase tracking-wider">Live Telemetry Hooked</span>
            </div>
          </div>
        </div>

        {/* Detailed Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="glow-card p-6 md:p-8 bg-[#0a0d17]/60 border border-white/5 rounded-2xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <div>
                    <span className="text-[10px] text-cyan-accent uppercase font-extrabold tracking-wider">{cs.client}</span>
                    <h3 className="text-xl font-bold text-white font-display mt-0.5">{cs.title}</h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-450 hover:text-white transition-colors cursor-pointer flex-shrink-0" />
                </div>

                <div className="flex gap-2">
                  <span className="text-xs font-bold text-emerald-450 bg-emerald-950/30 border border-emerald-500/20 px-2.5 py-1 rounded">
                    {cs.metricValue}
                  </span>
                  <span className="text-xs font-bold text-cyan-accent bg-cyan-950/30 border border-cyan-500/20 px-2.5 py-1 rounded">
                    {cs.highlightText}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {cs.desc}
                </p>

                {/* Achievements list */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-450">Key Achievements</h4>
                  <ul className="space-y-2">
                    {cs.accomplishments.map((ac, aidx) => (
                      <li key={aidx} className="flex gap-2 text-xs text-slate-350">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-accent flex-shrink-0 mt-0.5" />
                        <span>{ac}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="/contact"
                className="mt-8 text-center py-3 bg-slate-950 border border-white/5 hover:border-cyan-accent/40 text-xs font-bold text-slate-300 hover:text-white rounded-xl transition-all block"
              >
                Inquire About Case Specifications
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
