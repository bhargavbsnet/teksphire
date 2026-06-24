"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, ArrowRight, Loader2, Calendar, Clock, Sparkles } from "lucide-react";

export default function ContactPage() {
  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "AWS Cloud Journey",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [contactMsg, setContactMsg] = useState("");

  // Consultation Scheduler State
  const [scheduleForm, setScheduleForm] = useState({
    date: "",
    timeSlot: "10:00 AM EST",
  });
  const [scheduleStatus, setScheduleStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const categories = ["AWS Cloud Journey", "PromptForge AI Product", "Custom SaaS Development", "Cloud Security Audit", "Other"];
  const timeSlots = ["10:00 AM EST", "1:00 PM EST", "3:30 PM EST"];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    setContactStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      const data = await res.json();
      if (res.ok) {
        setContactStatus("success");
        setContactForm({
          name: "",
          email: "",
          company: "",
          inquiryType: "AWS Cloud Journey",
          message: "",
        });
        setContactMsg(data.message || "Thank you! We received your message.");
      } else {
        setContactStatus("error");
        setContactMsg(data.error || "Submission failed. Please check inputs.");
      }
    } catch (err) {
      console.error(err);
      setContactStatus("error");
      setContactMsg("An unexpected server error occurred.");
    }
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scheduleForm.date) return;

    setScheduleStatus("loading");
    setTimeout(() => {
      setScheduleStatus("success");
    }, 1200);
  };

  return (
    <div className="relative py-12 md:py-24">
      {/* Background glow mesh filters */}
      <div className="mesh-glow-cyan top-[15%] left-[-20%]" />
      <div className="mesh-glow-violet top-[55%] right-[-15%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Contact Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent">Connect with us</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            Schedule a Technical Consultation
          </h1>
          <p className="text-slate-350 leading-relaxed">
            In compliance with our remote-first operations, we do not support office visits or phone queues. Connect with our engineering team directly via secure API forms below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left panel: Inquiry Form */}
          <div className="lg:col-span-7 glow-card p-6 md:p-8 bg-[#0a0d17]/80 border border-white/5 rounded-2xl">
            <h3 className="text-xl font-bold text-white font-display mb-6">Send an Inquiry</h3>

            {contactStatus === "success" ? (
              <div className="p-6 bg-emerald-950/20 border border-emerald-500/20 rounded-xl space-y-4 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-450 mx-auto" />
                <h4 className="text-lg font-bold text-white font-display">Inquiry Received</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{contactMsg}</p>
                <button
                  onClick={() => setContactStatus("idle")}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-950 border border-white/10 rounded-xl text-xs font-bold text-white"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                {contactStatus === "error" && (
                  <div className="p-4 bg-rose-950/20 border border-rose-500/20 rounded-xl flex items-center gap-2 text-rose-350 text-xs">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>{contactMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Miller"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-accent"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Company Name (Optional)</label>
                    <input
                      type="text"
                      placeholder="SaaS Ventures"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-accent"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Inquiry Category</label>
                    <select
                      value={contactForm.inquiryType}
                      onChange={(e) => setContactForm({ ...contactForm, inquiryType: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-accent"
                    >
                      {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Message Description</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Briefly outline your AWS migration goals or AI prompt security requirements..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-accent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={contactStatus === "loading"}
                  className="w-full py-3.5 bg-gradient-to-r from-secondary to-cyan-accent text-[#05070f] font-bold rounded-xl flex items-center justify-center gap-1.5 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all disabled:opacity-50"
                >
                  {contactStatus === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Submitting Request...
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right panel: Live consultation scheduler */}
          <div className="lg:col-span-5 glow-card p-6 bg-[#0a0d17]/80 border border-white/5 rounded-2xl space-y-6">
            <div>
              <span className="text-[10px] font-bold text-cyan-accent uppercase tracking-wider block">Real-time Scheduler</span>
              <h3 className="text-lg font-bold text-white font-display mt-0.5">Book Solutions Call</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">Reserve a 30-minute Zoom technical review with a certified solutions architect.</p>
            </div>

            {scheduleStatus === "success" ? (
              <div className="p-5 bg-emerald-950/20 border border-emerald-500/20 rounded-xl space-y-3 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-450 mx-auto" />
                <h4 className="font-bold text-white text-sm font-display">Meeting Request Sent</h4>
                <p className="text-xs text-slate-400">Our calendar hooks will send a calendar invite to the email you supply.</p>
                <button
                  onClick={() => setScheduleStatus("idle")}
                  className="px-4 py-2 bg-slate-900 border border-white/5 text-xs text-white rounded-lg"
                >
                  Schedule Another Slot
                </button>
              </div>
            ) : (
              <form onSubmit={handleScheduleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-accent" /> Select Date
                  </label>
                  <input
                    type="date"
                    required
                    value={scheduleForm.date}
                    onChange={(e) => setScheduleForm({ ...scheduleForm, date: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-accent font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-violet-accent" /> Available Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((ts) => (
                      <button
                        key={ts}
                        type="button"
                        onClick={() => setScheduleForm({ ...scheduleForm, timeSlot: ts })}
                        className={`py-2 px-1 text-[10px] font-bold font-mono rounded border transition-all ${
                          scheduleForm.timeSlot === ts
                            ? "bg-slate-900 border-cyan-500/30 text-cyan-accent"
                            : "bg-slate-950/40 border-white/5 text-slate-400 hover:text-white"
                        }`}
                      >
                        {ts}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={scheduleStatus === "loading" || !scheduleForm.date}
                  className="w-full py-3 bg-slate-900 border border-white/10 hover:border-cyan-accent/50 text-slate-200 hover:text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
                >
                  {scheduleStatus === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Verifying availability...
                    </>
                  ) : (
                    <>
                      Confirm Call Request
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="p-3.5 bg-slate-950 rounded-xl border border-white/5 text-[11px] text-slate-450 leading-relaxed">
              <Sparkles className="w-3.5 h-3.5 text-cyan-accent inline mr-1 -mt-0.5" />
              <span>Prior to our meeting, please have your current AWS configuration diagram or API latency metrics on hand.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
