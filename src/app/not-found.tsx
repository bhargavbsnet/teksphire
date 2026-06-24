"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Terminal, AlertTriangle, ArrowRight } from "lucide-react";

export default function NotFound() {
  const [inputVal, setInputVal] = useState("");
  const [consoleHistory, setConsoleHistory] = useState<string[]>([
    "TEKSPHIRE Route Diagnostics Engine [Version 2.4.10]",
    "Copyright (c) 2026 TEKSPHIRE. All rights reserved.",
    "",
    "STATUS: ERROR 404 - PATH NOT FOUND",
    "Run diagnostics by typing 'verify' or return to main page by typing 'home'.",
    "",
  ]);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [consoleHistory]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let response: string[] = [];
    switch (cmd) {
      case "help":
        response = [
          `$ ${inputVal}`,
          "Available CLI commands:",
          "  verify    - Scans AWS microservice connections & routing trees",
          "  home      - Redirects console to teksphire.com homepage",
          "  status    - Displays Cognito pool and DB connection metrics",
          "  clear     - Clears the terminal diagnostics output",
          "",
        ];
        break;
      case "verify":
        response = [
          `$ ${inputVal}`,
          "[SCANNING] Initiating route inspection protocol...",
          "  - Testing next-router hooks... [OK]",
          "  - Scanning api gateway mapping... [FAILED] No path match",
          "  - Auditing AWS lambda triggers... [OK] Standby",
          "[CONCLUSION] Path '/non-existent-page' is unregistered. HTTP 404.",
          "",
        ];
        break;
      case "status":
        response = [
          `$ ${inputVal}`,
          "TEKSPHIRE Microservice Status Indicators:",
          "  - Cognito Authorization Pool: ACTIVE (100% healthy)",
          "  - PostgreSQL Database (Prisma): CONNECTED (healthy)",
          "  - Amazon S3 Assets Bucket: ENCRYPTED (healthy)",
          "  - PromptForge inference server: ONLINE (0.02% latency offset)",
          "",
        ];
        break;
      case "home":
        response = [`$ ${inputVal}`, "Navigating... Please click the home link below.", ""];
        if (typeof window !== "undefined") {
          window.location.href = "/";
        }
        break;
      case "clear":
        setConsoleHistory([]);
        setInputVal("");
        return;
      default:
        response = [
          `$ ${inputVal}`,
          `Command '${inputVal}' unrecognized. Type 'help' for options.`,
          "",
        ];
    }

    setConsoleHistory((prev) => [...prev, ...response]);
    setInputVal("");
  };

  return (
    <div className="relative py-12 md:py-24 max-w-3xl mx-auto px-4 min-h-[80vh] flex flex-col justify-center">
      <div className="mesh-glow-cyan top-[20%] left-[-15%]" />
      <div className="mesh-glow-violet top-[50%] right-[-15%]" />

      <div className="space-y-8">
        {/* Header warnings */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-rose-950/40 border border-rose-500/20 text-rose-450 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white font-display">Route Diagnostic Exception</h1>
            <p className="text-xs text-slate-400">Next.js routing layer failed to resolve active path mapping.</p>
          </div>
        </div>

        {/* Interactive CLI Console */}
        <div className="glow-card p-4 md:p-6 bg-black border border-white/5 rounded-2xl">
          <div className="flex items-center gap-1.5 pb-3 border-b border-white/5 text-slate-500 font-mono text-xs">
            <Terminal className="w-4 h-4" />
            <span>diagnostics_shell.sh</span>
          </div>

          <div className="pt-4 h-[280px] overflow-y-auto font-mono text-xs text-slate-350 space-y-1.5 scrollbar-thin">
            {consoleHistory.map((line, idx) => (
              <div key={idx} className="min-h-[14px]">
                {line}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Console Form Input */}
          <form onSubmit={handleCommand} className="flex gap-2 pt-3 border-t border-white/5 mt-2">
            <span className="text-cyan-accent font-mono text-xs font-bold pt-1">$</span>
            <input
              type="text"
              autoFocus
              placeholder="type 'help' or 'verify'..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-grow bg-transparent text-white font-mono text-xs focus:outline-none placeholder-slate-600"
            />
            <button type="submit" className="text-[10px] font-mono text-slate-500 hover:text-white uppercase font-bold tracking-wider">
              Enter
            </button>
          </form>
        </div>

        {/* Traditional navigation link */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-accent hover:text-white transition-colors"
          >
            Or return using browser standard links <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
