"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Send, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage(data.message || "Thank you for subscribing!");
      } else {
        setStatus("error");
        setMessage(data.error || "Subscription failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("An unexpected error occurred.");
    }
  };

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "AWS Cloud Migration", href: "/services" },
        { name: "DevOps Automation", href: "/services" },
        { name: "AI Implementations", href: "/services" },
        { name: "Custom SaaS Development", href: "/services" },
        { name: "Cloud Security Auditing", href: "/services" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "For SaaS Startups", href: "/solutions" },
        { name: "For Growing SMEs", href: "/solutions" },
        { name: "Enterprise Strategy", href: "/solutions" },
        { name: "Digital Transformation", href: "/solutions" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Developer Documentation", href: "/resources" },
        { name: "AWS CDK Spec Hub", href: "/resources" },
        { name: "Resource Downloads", href: "/resources" },
        { name: "Tech Blog Hub", href: "/blog" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Career Openings", href: "/careers" },
        { name: "Contact & Consultation", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-[#05070f] z-10 pt-20 pb-10">
      {/* Top Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Footer Hub */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          {/* Company Branding */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <svg
                className="w-8 h-8 text-cyan-accent"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 5L90 28V72L50 95L10 72V28L50 5Z"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  className="opacity-40"
                />
                <circle cx="50" cy="28" r="7" fill="#00f5ff" />
                <circle cx="28" cy="62" r="7" fill="#a855f7" />
                <circle cx="72" cy="62" r="7" fill="#4f86f7" />
                <line x1="50" y1="28" x2="28" y2="62" stroke="#00f5ff" strokeWidth="3" />
                <line x1="50" y1="28" x2="72" y2="62" stroke="#4f86f7" strokeWidth="3" />
                <line x1="28" y1="62" x2="72" y2="62" stroke="#a855f7" strokeWidth="3" />
              </svg>
              <span className="text-lg font-bold tracking-wider font-display text-white">
                TEKSPHIRE
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Pioneering enterprise AWS architectures, advanced artificial intelligence implementations, and custom digital orchestrations that propel companies forward.
            </p>
            {/* Newsletter form */}
            <div className="space-y-3 pt-2">
              <span className="block text-xs font-bold uppercase tracking-widest text-slate-350">
                Join our Tech Dispatch
              </span>
              {status === "success" ? (
                <div className="flex items-center gap-2 text-sm text-cyan-accent bg-cyan-950/20 border border-cyan-500/20 px-4 py-3 rounded-xl max-w-xs">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{message}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-xs relative group">
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    className="w-full bg-[#0a0d1a] border border-white/10 focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent rounded-xl py-2.5 pl-4 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading" || !email}
                    className="absolute right-1 top-1 bottom-1 px-3 bg-gradient-to-r from-secondary to-cyan-accent text-[#05070f] rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
              {status === "error" && (
                <span className="block text-xs text-rose-450">{message}</span>
              )}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center gap-0.5"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright & legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 text-xs text-slate-400">
          <span>
            &copy; {new Date().getFullYear()} TEKSPHIRE. All rights reserved. teksphire.com
          </span>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
