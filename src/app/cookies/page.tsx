import React from "react";

export default function CookiesPage() {
  return (
    <div className="relative py-12 md:py-24 max-w-4xl mx-auto px-4">
      <div className="mesh-glow-cyan top-[15%] left-[-15%]" />
      <div className="space-y-8 text-slate-300">
        <div className="border-b border-white/5 pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-white">Cookie Policy</h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">Last Updated: June 24, 2026</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">1. Why We Use Cookies</h2>
          <p className="text-sm leading-relaxed">
            At <strong>TEKSPHIRE</strong>, we utilize cookies and local storage tokens to keep you securely authenticated across sessions, preserve sandbox template choices, and optimize API request speed.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">2. Essential Cookies</h2>
          <p className="text-sm leading-relaxed">
            These cookies are strictly required to authorize requests. AWS Cognito sets authentication cookies containing encrypted session states. Disabling these cookies in your browser settings will make it impossible to log into PromptForge AI workspaces.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">3. Local Storage Caching</h2>
          <p className="text-sm leading-relaxed">
            We store UI preferences (such as your chosen sandbox variables and target model preferences) directly in your browser's <code>localStorage</code>. This ensures parameters remain persistent without needing to store drafts on remote database tables.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">4. Managing Cookies</h2>
          <p className="text-sm leading-relaxed">
            You can clear cookies and local storage state at any time inside your browser settings. For detailed guides on how to manage Cognito tokens, consult your browser's documentation.
          </p>
        </section>
      </div>
    </div>
  );
}
