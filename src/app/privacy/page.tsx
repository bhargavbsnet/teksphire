import React from "react";

export default function PrivacyPage() {
  return (
    <div className="relative py-12 md:py-24 max-w-4xl mx-auto px-4">
      <div className="mesh-glow-cyan top-[10%] left-[-15%]" />
      <div className="space-y-8 text-slate-300">
        <div className="border-b border-white/5 pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-white">Privacy Policy</h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">Last Updated: June 24, 2026</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">1. Information We Collect</h2>
          <p className="text-sm leading-relaxed">
            At <strong>TEKSPHIRE</strong> (teksphire.com), we prioritize the safety of your cloud environments and AI logs. We collect registration details (name, email, company name) when you request audits or create PromptForge AI™ accounts via AWS Cognito pools.
          </p>
          <p className="text-sm leading-relaxed">
            For active PromptForge AI accounts, we record transient variable parameters and model choices. Prompt inputs are streamed securely to foundational LLMs through private API Gateway tunnels. We do not store raw prompts on our databases unless you specifically elect to commit them to your private, KMS-encrypted Prompt Library.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">2. Cloud Security & Data Isolation</h2>
          <p className="text-sm leading-relaxed">
            All user credentials, authentication handshakes, and access keys are managed dynamically under AWS Cognito user directories. We do not store passwords in plain text. Session tokens (JWTs) are validated on each API request and automatically expire after 60 minutes.
          </p>
          <p className="text-sm leading-relaxed">
            Our storage buckets (Amazon S3) enforce strict SSL execution protocols, encrypting all uploaded assets at rest using 256-bit AES algorithms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">3. Third-Party Integrations</h2>
          <p className="text-sm leading-relaxed">
            PromptForge AI integrates serverless foundational models hosted on Amazon Bedrock (including Anthropic Claude, Google Gemini, and Meta Llama). Model interactions are bound by AWS's private data isolation policies: your prompt variables and output histories are never shared with foundation model creators or used to train public LLM models.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">4. Contact Information</h2>
          <p className="text-sm leading-relaxed">
            For security audits or data erasure requests, please contact our security team through our [contact form](/contact). In compliance with our security policies, we do not conduct support over standard phone or physical office visits.
          </p>
        </section>
      </div>
    </div>
  );
}
