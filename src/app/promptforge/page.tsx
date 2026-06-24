"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Terminal, Shield, BarChart3, Layers, Settings, HelpCircle, Code, Play, RefreshCw, CheckCircle2, ChevronDown, Cpu, AlertTriangle } from "lucide-react";

interface PromptItem {
  id: string;
  name: string;
  category: string;
  template: string;
  variables: string[];
  model: string;
  version: string;
}

export default function PromptForgeProductPage() {
  const [model, setModel] = useState<string>("Claude 3.5 Sonnet");
  const [activePromptId, setActivePromptId] = useState<string>("data-extract");
  const [inputs, setInputs] = useState<Record<string, string>>({
    inputData: "Sales: $14,000, SignupCount: 154, Region: NA",
    formatStyle: "JSON",
  });
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [sandboxResult, setSandboxResult] = useState<string>("");
  const [sandboxMetrics, setSandboxMetrics] = useState<any>(null);

  const prompts: PromptItem[] = [
    {
      id: "data-extract",
      name: "Schema Data Extractor",
      category: "Analytics",
      template: "Parse the following unstructured text log and return it as a clean {formatStyle} payload. Target fields: sales, conversions, and signups. Text log: {inputData}",
      variables: ["formatStyle", "inputData"],
      model: "Claude 3.5 Sonnet",
      version: "v2.1",
    },
    {
      id: "sql-gen",
      name: "Cognito SQL Joiner",
      category: "Coding",
      template: "Write a high-performance PostgreSQL query that joins the users table and job_applications on id. Filter by position: {position}.",
      variables: ["position"],
      model: "Gemini 1.5 Pro",
      version: "v1.4",
    },
  ];

  const activePrompt = prompts.find((p) => p.id === activePromptId) || prompts[0];

  // Set default inputs when active prompt changes
  useEffect(() => {
    const defaults: Record<string, string> = {};
    if (activePromptId === "data-extract") {
      defaults.inputData = "Sales: $14,000, SignupCount: 154, Region: NA";
      defaults.formatStyle = "JSON";
    } else {
      defaults.position = "AWS Solutions Architect";
    }
    setInputs(defaults);
    setSandboxResult("");
    setSandboxMetrics(null);
  }, [activePromptId]);

  const handleInputChange = (key: string, val: string) => {
    setInputs((prev) => ({ ...prev, [key]: val }));
  };

  const handleRunSandbox = async () => {
    setIsRunning(true);
    setSandboxResult("");
    setSandboxMetrics(null);

    // Simulate streaming Bedrock output
    let outputText = "";
    let mockResponse = "";
    
    if (activePromptId === "data-extract") {
      mockResponse = `{\n  "metadata": {\n    "parsedDate": "2026-06-24",\n    "region": "NA"\n  },\n  "metrics": {\n    "sales": 14000,\n    "signupCount": 154,\n    "conversionRate": 1.1\n  }\n}`;
    } else {
      mockResponse = `SELECT \n  u.id AS user_id,\n  u.name AS user_name,\n  j.position AS job_position,\n  j.created_at AS application_date\nFROM users u\nINNER JOIN job_applications j ON u.id = j.user_id\nWHERE j.position = '${inputs.position || "AWS Solutions Architect"}'\nORDER BY j.created_at DESC;`;
    }

    const words = mockResponse.split(" ");
    let i = 0;

    const interval = setInterval(() => {
      if (i < words.length) {
        outputText += words[i] + " ";
        setSandboxResult(outputText);
        i++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setSandboxMetrics({
          latency: `${Math.floor(Math.random() * 80) + 120}ms`,
          tokens: 45 + Math.floor(Math.random() * 20),
          cost: `$0.000${Math.floor(Math.random() * 900) + 100}`,
          score: "98.4%",
        });
      }
    }, 40);
  };

  const pricingTiers = [
    {
      name: "Developer",
      price: "$0",
      desc: "Perfect for testing prompt concepts and single-project sandbox experiments.",
      features: ["1 user seat", "Up to 5,000 prompt logs/mo", "Integrations with Claude & GPT-4o", "Standard version history (30 days)", "Shared AWS sandbox API gateway"],
      cta: "Start Testing",
    },
    {
      name: "Pro Team",
      price: "$79",
      period: "/month",
      desc: "For growing SaaS startups and software teams managing live models in production.",
      features: ["Up to 10 user seats", "1,000,000 prompt logs/mo", "Direct Bedrock & Custom Endpoint keys", "Infinite prompt version timelines", "Cognito-isolated team workspaces", "Priority Slack support channel"],
      cta: "Deploy Workspace",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For institutions requiring absolute data isolation, HIPAA/SOC2 audits, and dedicated AWS Fargate clusters.",
      features: ["Infinite seats & prompt runs", "Deployed on your own AWS VPC", "HIPAA/SOC2 compliance reports", "Private Key management (AWS KMS)", "Dedicated training & fine-tuning", "24/7 custom SRE support"],
      cta: "Contact Solutions Architect",
    },
  ];

  const faqs = [
    {
      q: "Does PromptForge AI store our client data or API prompt logs?",
      a: "No. By default, prompt data and variables are processed transiently through serverless AWS Lambda and Amazon Bedrock models. For Enterprise workspaces, the entire stack runs within your company's own AWS account/VPC via ECS Fargate and PrivateLink.",
    },
    {
      q: "Which foundation models are supported out-of-the-box?",
      a: "PromptForge AI hooks directly into Amazon Bedrock. This gives you instant access to Anthropic Claude (3.5 Sonnet, Haiku), Google Gemini (1.5 Pro, Flash), Meta Llama 3, Cohere, AI21, and custom fine-tuned model checkpoints.",
    },
    {
      q: "How does the caching system reduce token costs?",
      a: "We utilize DynamoDB Global Tables and Redis edge caches. If a identical prompt variable request is received, the tool responds from cache rather than hitting the LLM model endpoints, reducing both latency and inference costs by up to 60%.",
    },
  ];

  return (
    <div className="relative py-12 md:py-24">
      {/* Background glow meshes */}
      <div className="mesh-glow-cyan top-[10%] left-[-20%]" />
      <div className="mesh-glow-violet top-[40%] right-[-15%]" />
      <div className="mesh-glow-cyan top-[80%] left-[20%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Product Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-xs font-bold text-cyan-accent">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Introducing PromptForge AI™</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-display text-white leading-tight">
            Enterprise Prompt Management & <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">AI Workflow Platform</span>
          </h1>
          <p className="text-lg text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Centralize your model prompts, manage versions, execute variables, and track token performance in a secure, serverless cloud environment built on AWS.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#sandbox"
              className="px-6 py-3.5 bg-gradient-to-r from-secondary to-cyan-accent text-[#05070f] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all"
            >
              Open Sandbox Playground
            </a>
            <a
              href="#pricing"
              className="px-6 py-3.5 border border-white/10 rounded-xl text-slate-300 hover:text-white hover:border-white/20 transition-colors"
            >
              View Pricing Tiers
            </a>
          </div>
        </div>

        {/* Live Interactive Sandbox Playground */}
        <div id="sandbox" className="space-y-8 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">Live Playground Simulator</h2>
            <p className="text-sm text-slate-400">Test how PromptForge executes model variables and streams live Bedrock telemetry.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left controller panel */}
            <div className="lg:col-span-5 glow-card p-6 bg-[#0a0d17]/80 border border-white/5 rounded-2xl space-y-6">
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">Select Prompt Template</label>
                <div className="grid grid-cols-2 gap-3">
                  {prompts.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setActivePromptId(p.id)}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                        activePromptId === p.id
                          ? "bg-slate-900 border-cyan-500/30 text-cyan-accent"
                          : "bg-slate-950/40 border-white/5 text-slate-400 hover:bg-slate-950"
                      }`}
                    >
                      <div>{p.name}</div>
                      <div className="text-[9px] text-slate-500 font-semibold mt-1">{p.version} • {p.category}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Template visualization */}
              <div className="p-3 bg-slate-950 rounded border border-white/5 text-xs font-mono leading-relaxed text-slate-300">
                <span className="text-slate-500 block mb-1">Raw Prompt Template:</span>
                {activePrompt.template}
              </div>

              {/* Dynamic Variables Inputs */}
              <div className="space-y-4 pt-2 border-t border-white/5">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">Define Inputs ({activePrompt.variables.length})</label>
                {activePrompt.variables.map((v) => (
                  <div key={v} className="space-y-1.5">
                    <span className="text-xs font-mono text-cyan-accent">{`{${v}}`}</span>
                    {v === "inputData" ? (
                      <textarea
                        rows={3}
                        value={inputs[v] || ""}
                        onChange={(e) => handleInputChange(v, e.target.value)}
                        className="w-full bg-slate-950 border border-white/10 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-cyan-accent font-mono"
                      />
                    ) : (
                      <input
                        type="text"
                        value={inputs[v] || ""}
                        onChange={(e) => handleInputChange(v, e.target.value)}
                        className="w-full bg-slate-950 border border-white/10 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-cyan-accent font-mono"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Model Select */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">Target Model (AWS Bedrock)</label>
                <div className="relative">
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-accent font-mono appearance-none cursor-pointer"
                  >
                    <option>Claude 3.5 Sonnet</option>
                    <option>Gemini 1.5 Pro</option>
                    <option>Llama 3 70B</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Run CTA */}
              <button
                onClick={handleRunSandbox}
                disabled={isRunning}
                className="w-full py-3.5 bg-gradient-to-r from-secondary to-cyan-accent text-[#05070f] font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" /> Streaming Model Inference...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" /> Execute Run on Bedrock
                  </>
                )}
              </button>
            </div>

            {/* Right output panel */}
            <div className="lg:col-span-7 flex flex-col justify-between glow-card p-6 bg-[#0a0d17]/80 border border-white/5 rounded-2xl min-h-[400px]">
              <div className="space-y-4 flex-grow flex flex-col">
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-bold font-mono text-slate-400">PromptForge console output</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-accent bg-cyan-950/40 border border-cyan-500/20 px-2 py-0.5 rounded">
                    {model}
                  </span>
                </div>

                {/* Simulated Console Screen */}
                <div className="flex-grow p-4 bg-slate-950 rounded-xl border border-white/5 font-mono text-xs text-slate-350 leading-relaxed overflow-y-auto min-h-[220px]">
                  {sandboxResult ? (
                    <pre className="whitespace-pre-wrap">{sandboxResult}</pre>
                  ) : (
                    <span className="text-slate-600 italic">Playground idle. Configure inputs on the left and click "Execute Run" to start.</span>
                  )}
                </div>
              </div>

              {/* Telemetry Metrics */}
              {sandboxMetrics && (
                <div className="mt-4 grid grid-cols-4 gap-4 p-3 bg-slate-900/60 rounded-xl border border-white/5 text-center">
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-semibold">Inference Latency</span>
                    <span className="text-xs font-bold text-emerald-450 font-mono">{sandboxMetrics.latency}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-semibold">Tokens Spent</span>
                    <span className="text-xs font-bold text-cyan-accent font-mono">{sandboxMetrics.tokens} tokens</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-semibold">Run Cost</span>
                    <span className="text-xs font-bold text-white font-mono">{sandboxMetrics.cost}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-semibold">Semantic Rating</span>
                    <span className="text-xs font-bold text-emerald-450 font-mono">{sandboxMetrics.score}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features list */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="p-6 bg-[#0a0d17]/40 border border-white/5 rounded-xl space-y-4">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-accent flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white font-display">Semantic Versioning</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Instantly rollback or branch prompt templates. Compare version histories, parameters, and variable definitions with visual side-by-side comparisons.</p>
          </div>
          <div className="p-6 bg-[#0a0d17]/40 border border-white/5 rounded-xl space-y-4">
            <div className="w-10 h-10 rounded-lg bg-violet-950/30 border border-violet-500/20 text-violet-accent flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white font-display">Cognito Security Shield</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Establish granular role permissions for your teams. Keep model access tokens and credentials encrypted within AWS Secrets Manager.</p>
          </div>
          <div className="p-6 bg-[#0a0d17]/40 border border-white/5 rounded-xl space-y-4">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-accent flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white font-display">LLM Cost Analytics</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Track input/output tokens and cost graphs per workspace. Optimize prompts to fit within budgets while keeping latencies under 150ms.</p>
          </div>
          <div className="p-6 bg-[#0a0d17]/40 border border-white/5 rounded-xl space-y-4">
            <div className="w-10 h-10 rounded-lg bg-violet-950/30 border border-violet-500/20 text-violet-accent flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white font-display">Workflow Connectors</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Compile prompts into executable HTTP REST API calls. Hook pipelines directly into custom Node.js, Python, or AWS Lambda systems.</p>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div id="pricing" className="space-y-12 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent">Pricing Model</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">Scale Predictably, Pay For Usage</h2>
            <p className="text-sm text-slate-400">Simple developer accounts to isolated multi-region enterprise instances.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`glow-card p-8 bg-[#0a0d17]/60 border rounded-3xl flex flex-col justify-between relative ${
                  tier.popular ? "border-cyan-500/40 shadow-[0_0_20px_rgba(0,245,255,0.06)]" : "border-white/5"
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-cyan-accent text-[#05070f] text-[9px] font-extrabold uppercase tracking-widest rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">{tier.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{tier.desc}</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white font-display">{tier.price}</span>
                    {tier.period && <span className="text-xs text-slate-500 font-semibold">{tier.period}</span>}
                  </div>
                  <ul className="space-y-3 pt-4 border-t border-white/5">
                    {tier.features.map((feat, fidx) => (
                      <li key={fidx} className="flex gap-2 text-xs text-slate-350">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-accent flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="/contact"
                  className={`mt-8 w-full text-center py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-all ${
                    tier.popular
                      ? "bg-gradient-to-r from-secondary to-cyan-accent text-[#05070f] hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                      : "border border-white/10 hover:border-white/20 text-slate-300 hover:text-white"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold font-display text-white">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-400">Clear insights regarding integrations, latency, and compliance.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glow-card p-6 bg-[#0a0d17]/50 border border-white/5 rounded-xl space-y-2">
                <h4 className="font-bold text-white text-sm font-display flex gap-2 items-center">
                  <HelpCircle className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-350 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
