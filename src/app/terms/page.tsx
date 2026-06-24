import React from "react";

export default function TermsPage() {
  return (
    <div className="relative py-12 md:py-24 max-w-4xl mx-auto px-4">
      <div className="mesh-glow-violet top-[15%] right-[-15%]" />
      <div className="space-y-8 text-slate-300">
        <div className="border-b border-white/5 pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-white">Terms of Service</h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">Last Updated: June 24, 2026</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">1. Terms Acceptance</h2>
          <p className="text-sm leading-relaxed">
            By accessing <strong>TEKSPHIRE</strong> (teksphire.com) and utilizing the PromptForge AI™ SaaS product, you agree to comply with these terms, all applicable AWS service agreements, and standard API utilization rate limits.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">2. Service Usage Rules</h2>
          <p className="text-sm leading-relaxed">
            You are responsible for safeguarding your AWS Cognito credentials. You must not attempt to bypass our API Gateway throttling limits, perform DDoS attacks against Lambda endpoints, or inject malicious payloads into model templates.
          </p>
          <p className="text-sm leading-relaxed">
            PromptForge AI is an orchestration wrapper. Prompt outcomes, accuracies, and token counts are subject to the foundational models (Claude, Gemini, Llama) running on Bedrock.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">3. API Subscriptions & Billing</h2>
          <p className="text-sm leading-relaxed">
            Billing cycles for Pro Workspaces are managed monthly. Failed payments will result in Cognito pool user status suspension within 5 business days. Enterprise clusters require custom contracts and are governed by individual service level agreements (SLAs).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">4. Intellectual Property</h2>
          <p className="text-sm leading-relaxed">
            Prompt structures, library commits, and variables schemas constructed inside your account belong entirely to you. TEKSPHIRE retains ownership of the PromptForge AI engine codebases, logos, and portal systems.
          </p>
        </section>
      </div>
    </div>
  );
}
