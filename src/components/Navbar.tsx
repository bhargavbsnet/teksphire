"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "PromptForge AI™", href: "/promptforge" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#05070f]/75 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <svg
              className="w-9 h-9 text-cyan-accent transition-transform duration-300 group-hover:scale-105"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Cloud/Tech Hexagon Mesh */}
              <path
                d="M50 5L90 28V72L50 95L10 72V28L50 5Z"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
                className="opacity-40"
              />
              {/* Inner AI Nodes Connecting */}
              <circle cx="50" cy="28" r="7" fill="url(#cyanGlow)" />
              <circle cx="28" cy="62" r="7" fill="url(#violetGlow)" />
              <circle cx="72" cy="62" r="7" fill="url(#blueGlow)" />
              
              {/* Connective Paths */}
              <line x1="50" y1="28" x2="28" y2="62" stroke="#00f5ff" strokeWidth="3" />
              <line x1="50" y1="28" x2="72" y2="62" stroke="#4f86f7" strokeWidth="3" />
              <line x1="28" y1="62" x2="72" y2="62" stroke="#a855f7" strokeWidth="3" />

              {/* Core Star/Success Burst in Center */}
              <path
                d="M50 42L53 48L59 50L53 52L50 58L47 52L41 50L47 48L50 42Z"
                fill="#ffffff"
              />

              <defs>
                <radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#00f5ff" />
                </radialGradient>
                <radialGradient id="violetGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#a855f7" />
                </radialGradient>
                <radialGradient id="blueGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#4f86f7" />
                </radialGradient>
              </defs>
            </svg>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider font-display bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                TEKSPHIRE
              </span>
              <span className="text-[9px] tracking-[0.25em] text-cyan-accent font-semibold -mt-1">
                CLOUD & AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1.5 ${
                    isActive
                      ? "text-cyan-accent"
                      : "text-slate-350 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-4 py-2 text-xs font-semibold tracking-wider text-slate-200 hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-xs font-bold tracking-wider rounded-xl bg-gradient-to-r from-secondary to-cyan-accent text-[#05070f] hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all flex items-center gap-1.5"
            >
              Consult Now <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-white/5 bg-[#05070f] overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2.5 px-3 rounded-lg text-base font-semibold ${
                      isActive
                        ? "bg-slate-900 text-cyan-accent"
                        : "text-slate-300 hover:bg-slate-950 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 text-sm font-semibold rounded-lg border border-white/10 text-slate-200"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 text-sm font-bold rounded-lg bg-gradient-to-r from-secondary to-cyan-accent text-[#05070f]"
                >
                  Consult Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
