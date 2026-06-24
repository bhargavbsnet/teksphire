"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Cpu, Database, Shield, Radio, Key, HardDrive, Info } from "lucide-react";

interface ServiceInfo {
  id: string;
  name: string;
  category: string;
  role: string;
  latency: string;
  sla: string;
  metric: string;
  description: string;
}

export default function AwsArchitecture() {
  const [activeNode, setActiveNode] = useState<string | null>("bedrock");

  const services: Record<string, ServiceInfo> = {
    cognito: {
      id: "cognito",
      name: "Amazon Cognito",
      category: "Authentication",
      role: "Manages enterprise federated logins, JWT keys, and SSO integrations.",
      latency: "12ms auth verify",
      sla: "99.99% SLA",
      metric: "10M active users",
      description: "Secures all PromptForge AI workspace requests. Direct hook into API Gateway authorizing client tokens.",
    },
    apigateway: {
      id: "apigateway",
      name: "Amazon API Gateway",
      category: "Routing & Security",
      role: "Throttles requests, manages endpoint routes, CORS, and API keys.",
      latency: "8ms transit route",
      sla: "99.99% SLA",
      metric: "2.4B monthly calls",
      description: "Receives user API calls and securely forwards to compute layers, validating JWTs via Cognito.",
    },
    lambda: {
      id: "lambda",
      name: "AWS Lambda",
      category: "Serverless Compute",
      role: "Processes prompt parsing, version validation, and performance ratings.",
      latency: "4ms execution time",
      sla: "99.999% SLA",
      metric: "Scale to infinity",
      description: "Computes and tests prompt variables on the fly. Event-driven backend for fast response times.",
    },
    ecs: {
      id: "ecs",
      name: "Amazon ECS Fargate",
      category: "Container Compute",
      role: "Runs heavy-weight background workflows, prompt tests, and caching engines.",
      latency: "15ms task process",
      sla: "99.9% SLA",
      metric: "50-1000 auto-scaled tasks",
      description: "Handles heavy loads and queue pipelines for batch prompt testing across multiple LLM models.",
    },
    dynamodb: {
      id: "dynamodb",
      name: "Amazon DynamoDB",
      category: "NoSQL Database",
      role: "Stores prompt library configurations, version history, and execution ratings.",
      latency: "<2ms single-digit ms",
      sla: "99.999% SLA",
      metric: "1.2 TB prompt logs",
      description: "Fully managed NoSQL store keeping metadata and prompt strings securely cached with point-in-time recovery.",
    },
    s3: {
      id: "s3",
      name: "Amazon S3 + CloudFront",
      category: "Storage & CDN",
      role: "Stores binary files, evaluation reports, and assets cached globally.",
      latency: "45ms edge load",
      sla: "99.999999999% durability",
      metric: "15 TB reports logs",
      description: "Host of static prompt reports, models assets, and globally caches files for high availability.",
    },
    bedrock: {
      id: "bedrock",
      name: "Amazon Bedrock",
      category: "Foundation Models",
      role: "Direct serverless model endpoints for Claude, Llama, Gemini, and GPT integrations.",
      latency: "120ms streaming token",
      sla: "99.95% SLA",
      metric: "150M prompts evaluated",
      description: "Orchestrates inference calls directly to foundational AI models, supporting secure enterprise data isolation.",
    },
  };

  const selectedNode = activeNode ? services[activeNode] : null;

  return (
    <div className="glow-card p-6 md:p-8 bg-[#0a0d17]/80 border border-white/5 rounded-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Cloud className="w-48 h-48 text-cyan-accent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive SVG Diagram */}
        <div className="lg:col-span-7 flex justify-center">
          <svg className="w-full max-w-[550px] h-[340px]" viewBox="0 0 550 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Connection Lines with Animated Dash offsets */}
            <motion.path
              d="M 60,170 H 130"
              stroke="#00f5ff"
              strokeWidth="2"
              strokeDasharray="6,4"
              animate={{ strokeDashoffset: [-20, 0] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
            />
            <motion.path
              d="M 170,170 C 200,120 220,90 270,90"
              stroke="#00f5ff"
              strokeWidth="2"
              strokeDasharray="6,4"
              animate={{ strokeDashoffset: [-20, 0] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 3.5 }}
            />
            <motion.path
              d="M 170,170 C 200,220 220,250 270,250"
              stroke="#a855f7"
              strokeWidth="2"
              strokeDasharray="6,4"
              animate={{ strokeDashoffset: [20, 0] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 3.5 }}
            />
            <motion.path
              d="M 310,90 C 350,90 370,130 400,150"
              stroke="#00f5ff"
              strokeWidth="2"
              strokeDasharray="6,4"
              animate={{ strokeDashoffset: [-20, 0] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
            />
            <motion.path
              d="M 310,250 C 350,250 370,210 400,190"
              stroke="#a855f7"
              strokeWidth="2"
              strokeDasharray="6,4"
              animate={{ strokeDashoffset: [-20, 0] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
            />
            <motion.path
              d="M 440,170 H 500"
              stroke="#4f86f7"
              strokeWidth="2.5"
              strokeDasharray="8,4"
              animate={{ strokeDashoffset: [-30, 0] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
            />

            {/* Nodes group */}
            {/* Cognito */}
            <g
              className="cursor-pointer"
              onClick={() => setActiveNode("cognito")}
              onMouseEnter={() => setActiveNode("cognito")}
            >
              <rect x="10" y="140" width="60" height="60" rx="8" fill={activeNode === "cognito" ? "rgba(0, 245, 255, 0.15)" : "#0f1224"} stroke={activeNode === "cognito" ? "#00f5ff" : "rgba(255,255,255,0.05)"} strokeWidth="1.5" />
              <Key className={`w-6 h-6 x-[28] y-[158] absolute ${activeNode === "cognito" ? "text-cyan-accent" : "text-slate-400"}`} style={{ transform: "translate(28px, 158px)" }} />
              <text x="40" y="195" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">Cognito</text>
            </g>

            {/* API Gateway */}
            <g
              className="cursor-pointer"
              onClick={() => setActiveNode("apigateway")}
              onMouseEnter={() => setActiveNode("apigateway")}
            >
              <rect x="110" y="140" width="60" height="60" rx="8" fill={activeNode === "apigateway" ? "rgba(0, 245, 255, 0.15)" : "#0f1224"} stroke={activeNode === "apigateway" ? "#00f5ff" : "rgba(255,255,255,0.05)"} strokeWidth="1.5" />
              <Shield className={`w-6 h-6 absolute ${activeNode === "apigateway" ? "text-cyan-accent" : "text-slate-400"}`} style={{ transform: "translate(128px, 158px)" }} />
              <text x="140" y="195" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">API Gateway</text>
            </g>

            {/* AWS Lambda */}
            <g
              className="cursor-pointer"
              onClick={() => setActiveNode("lambda")}
              onMouseEnter={() => setActiveNode("lambda")}
            >
              <rect x="250" y="60" width="60" height="60" rx="8" fill={activeNode === "lambda" ? "rgba(0, 245, 255, 0.15)" : "#0f1224"} stroke={activeNode === "lambda" ? "#00f5ff" : "rgba(255,255,255,0.05)"} strokeWidth="1.5" />
              <Cpu className={`w-6 h-6 absolute ${activeNode === "lambda" ? "text-cyan-accent" : "text-slate-400"}`} style={{ transform: "translate(268px, 78px)" }} />
              <text x="280" y="115" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">Lambda</text>
            </g>

            {/* ECS Fargate */}
            <g
              className="cursor-pointer"
              onClick={() => setActiveNode("ecs")}
              onMouseEnter={() => setActiveNode("ecs")}
            >
              <rect x="250" y="220" width="60" height="60" rx="8" fill={activeNode === "ecs" ? "rgba(168, 85, 247, 0.15)" : "#0f1224"} stroke={activeNode === "ecs" ? "#a855f7" : "rgba(255,255,255,0.05)"} strokeWidth="1.5" />
              <Radio className={`w-6 h-6 absolute ${activeNode === "ecs" ? "text-violet-accent" : "text-slate-400"}`} style={{ transform: "translate(268px, 238px)" }} />
              <text x="280" y="275" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">ECS Fargate</text>
            </g>

            {/* DynamoDB */}
            <g
              className="cursor-pointer"
              onClick={() => setActiveNode("dynamodb")}
              onMouseEnter={() => setActiveNode("dynamodb")}
            >
              <rect x="380" y="100" width="60" height="60" rx="8" fill={activeNode === "dynamodb" ? "rgba(0, 245, 255, 0.15)" : "#0f1224"} stroke={activeNode === "dynamodb" ? "#00f5ff" : "rgba(255,255,255,0.05)"} strokeWidth="1.5" />
              <Database className={`w-6 h-6 absolute ${activeNode === "dynamodb" ? "text-cyan-accent" : "text-slate-400"}`} style={{ transform: "translate(398px, 118px)" }} />
              <text x="410" y="155" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">DynamoDB</text>
            </g>

            {/* S3 */}
            <g
              className="cursor-pointer"
              onClick={() => setActiveNode("s3")}
              onMouseEnter={() => setActiveNode("s3")}
            >
              <rect x="380" y="180" width="60" height="60" rx="8" fill={activeNode === "s3" ? "rgba(168, 85, 247, 0.15)" : "#0f1224"} stroke={activeNode === "s3" ? "#a855f7" : "rgba(255,255,255,0.05)"} strokeWidth="1.5" />
              <HardDrive className={`w-6 h-6 absolute ${activeNode === "s3" ? "text-violet-accent" : "text-slate-400"}`} style={{ transform: "translate(398px, 198px)" }} />
              <text x="410" y="235" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">S3 Storage</text>
            </g>

            {/* Amazon Bedrock */}
            <g
              className="cursor-pointer"
              onClick={() => setActiveNode("bedrock")}
              onMouseEnter={() => setActiveNode("bedrock")}
            >
              <rect x="480" y="140" width="60" height="60" rx="8" fill={activeNode === "bedrock" ? "rgba(0, 245, 255, 0.25)" : "#0f1224"} stroke="#00f5ff" strokeWidth="2" />
              {/* Special logo mark inside bedrock */}
              <circle cx="510" cy="170" r="10" stroke="#00f5ff" strokeWidth="2" strokeDasharray="3,3" className="animate-spin-slow" />
              <text x="510" y="195" textAnchor="middle" fill="#00f5ff" fontSize="8" fontWeight="bold">Bedrock</text>
            </g>
          </svg>
        </div>

        {/* Selected Service Metadata Side Panel */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            {selectedNode && (
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-accent bg-cyan-950/30 border border-cyan-500/20 px-2 py-0.5 rounded">
                    {selectedNode.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {selectedNode.sla}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  {selectedNode.name}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedNode.role}
                </p>
                <div className="p-3 bg-slate-900/50 rounded-xl border border-white/5 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Telemetry Latency:</span>
                    <span className="font-semibold text-emerald-450">{selectedNode.latency}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Scale Capacity:</span>
                    <span className="font-semibold text-cyan-accent">{selectedNode.metric}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic">
                  {selectedNode.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Help info */}
      <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-400">
        <Info className="w-3.5 h-3.5" />
        <span>Hover or tap any AWS service node to inspect active serverless pipelines.</span>
      </div>
    </div>
  );
}
