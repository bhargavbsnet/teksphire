"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, ArrowRight, Loader2, Award, Briefcase, Sparkles } from "lucide-react";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    position: "AWS Solutions Architect",
    resumeUrl: "",
    portfolioUrl: "",
    coverLetter: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const positions = ["AWS Solutions Architect", "DevOps SRE Engineer", "Staff Frontend React Developer", "AI Prompt Specialist"];

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          position: "AWS Solutions Architect",
          resumeUrl: "",
          portfolioUrl: "",
          coverLetter: "",
        });
        setMsg(data.message || "Application submitted successfully!");
      } else {
        setStatus("error");
        setMsg(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMsg("An unexpected server error occurred.");
    }
  };

  return (
    <div className="relative py-12 md:py-24">
      {/* Ambient backgrounds */}
      <div className="mesh-glow-cyan top-[15%] left-[-20%]" />
      <div className="mesh-glow-violet top-[55%] right-[-15%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Careers Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent">We are hiring</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            Join the TEKSPHIRE Engineering Crew
          </h1>
          <p className="text-slate-350 leading-relaxed">
            We build next-generation distributed systems, serverless CloudFormation blueprints, and fine-tune models. Scale your career with technical excellence.
          </p>
        </div>

        {/* Roles details and Application Form layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left panel: hiring roles */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white font-display">Active Openings</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/60 border border-white/5 rounded-xl space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-white font-display">AWS Solutions Architect</span>
                  <span className="text-[10px] text-cyan-accent bg-cyan-950/20 border border-cyan-500/20 px-2 py-0.5 rounded">Full-time</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">Design serverless API pipelines, multi-region ECS containers scaling setups, and guide client VPC security configurations.</p>
              </div>
              <div className="p-4 bg-slate-900/60 border border-white/5 rounded-xl space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-white font-display">DevOps SRE Engineer</span>
                  <span className="text-[10px] text-violet-accent bg-violet-950/20 border border-violet-500/20 px-2 py-0.5 rounded">Full-time</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">Maintain Jenkins and GitHub Actions pipelines. Program Terraform/AWS CDK stacks and monitor cluster health alarms.</p>
              </div>
              <div className="p-4 bg-slate-900/60 border border-white/5 rounded-xl space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-white font-display">AI Prompt Specialist</span>
                  <span className="text-[10px] text-cyan-accent bg-cyan-950/20 border border-cyan-500/20 px-2 py-0.5 rounded">Remote</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">Optimize bedrock prompt variables execution flows, benchmark inference speeds, and evaluate caching schemas.</p>
              </div>
            </div>
          </div>

          {/* Right panel: Application Form */}
          <div className="lg:col-span-7 glow-card p-6 md:p-8 bg-[#0a0d17]/80 border border-white/5 rounded-2xl">
            <h3 className="text-xl font-bold text-white font-display mb-6">Submit Candidate Registry</h3>

            {status === "success" ? (
              <div className="p-6 bg-emerald-950/20 border border-emerald-500/20 rounded-xl space-y-4 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-450 mx-auto" />
                <h4 className="text-lg font-bold text-white font-display">Registration Successful</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{msg}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-950 border border-white/10 rounded-xl text-xs font-bold text-white"
                >
                  Submit Another Registry
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                {status === "error" && (
                  <div className="p-4 bg-rose-950/20 border border-rose-500/20 rounded-xl flex items-center gap-2 text-rose-350 text-xs">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>{msg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Bhargav Basnet"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-accent"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="bhargav@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-accent"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Position Target</label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-accent"
                  >
                    {positions.map((pos) => (
                      <option key={pos} value={pos}>{pos}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Resume Link</label>
                    <input
                      type="url"
                      placeholder="https://s3.amazonaws.com/your-resume.pdf"
                      value={formData.resumeUrl}
                      onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-accent font-mono"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Portfolio/GitHub Link</label>
                    <input
                      type="url"
                      placeholder="https://github.com/bhargavbsnet"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-accent font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Cover Letter</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your AWS infrastructure and prompt testing experience..."
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-accent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 bg-gradient-to-r from-secondary to-cyan-accent text-[#05070f] font-bold rounded-xl flex items-center justify-center gap-1.5 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Registering Application...
                    </>
                  ) : (
                    <>
                      Apply Now <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
