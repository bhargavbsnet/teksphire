"use client";

import React, { useState } from "react";
import { Terminal, Code, Cpu, HardDrive, Download, CheckCircle2, ChevronRight, FileText, Loader2 } from "lucide-react";

interface DownloadItem {
  id: string;
  name: string;
  size: string;
  description: string;
}

export default function ResourcesPage() {
  const [activeCodeLang, setActiveCodeLang] = useState<"nodejs" | "python" | "curl">("nodejs");
  const [downloadProgress, setDownloadProgress] = useState<Record<string, number>>({});
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const codeSnippets = {
    nodejs: `// Install SDK: npm install @teksphire/promptforge-client
import { PromptForge } from "@teksphire/promptforge-client";

const client = new PromptForge({
  apiKey: process.env.PROMPTFORGE_API_KEY,
  region: "us-east-1"
});

// Run prompt inference using variables
const response = await client.inference.run({
  promptId: "data-extractor",
  variables: {
    formatStyle: "JSON",
    inputData: "Sales: $14,000, SignupCount: 154, Region: NA"
  }
});

console.log("Model response payload:", response.output);`,

    python: `# Install SDK: pip install teksphire-promptforge
from promptforge import PromptForgeClient

client = PromptForgeClient(
    api_key="your_cognito_authorized_key",
    region="us-east-1"
)

# Run prompt inference using variables
response = client.inference.run(
    prompt_id="data-extractor",
    variables={
        "formatStyle": "JSON",
        "inputData": "Sales: $14,000, SignupCount: 154, Region: NA"
    }
)

print("Model output:", response.output)`,

    curl: `# cURL execution hitting the AWS API Gateway endpoint
curl -X POST https://api.teksphire.com/v1/promptforge/run \\
  -H "Authorization: Bearer YOUR_COGNITO_JWT_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "promptId": "data-extractor",
    "variables": {
      "formatStyle": "JSON",
      "inputData": "Sales: $14,000, SignupCount: 154, Region: NA"
    }
  }'`,
  };

  const downloads: DownloadItem[] = [
    {
      id: "aws-migration-blueprint",
      name: "TEKSPHIRE AWS Migration Blueprint.pdf",
      size: "2.4 MB",
      description: "Our complete 50-page guide detailing monolithic code refactoring, containerization guidelines, and multi-region routing.",
    },
    {
      id: "cognito-security-guide",
      name: "Cognito User Pool Hardening Guide.pdf",
      size: "1.8 MB",
      description: "Detailed checklist for setting up federated SSO identity links, custom token expirations, and KMS envelope encryption.",
    },
    {
      id: "bedrock-prompt-guidelines",
      name: "Amazon Bedrock Prompt Engineering Best Practices.pdf",
      size: "4.1 MB",
      description: "Proven prompts schemas, variables declaration templates, and latency optimizations metrics for Claude 3.5 and Gemini.",
    },
  ];

  const handleDownload = (id: string) => {
    if (downloadingId) return; // Prevent concurrent simulated downloads
    setDownloadingId(id);
    setDownloadProgress((prev) => ({ ...prev, [id]: 0 }));

    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      setDownloadProgress((prev) => ({ ...prev, [id]: current }));

      if (current >= 100) {
        clearInterval(interval);
        setDownloadingId(null);
      }
    }, 150);
  };

  return (
    <div className="relative py-12 md:py-24">
      {/* Glow background elements */}
      <div className="mesh-glow-cyan top-[15%] left-[-20%]" />
      <div className="mesh-glow-violet top-[50%] right-[-15%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Resources Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent">Developer Resources</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            Developer Documentation & Assets
          </h1>
          <p className="text-slate-350 leading-relaxed">
            Access PromptForge AI API schemas, AWS CDK infrastructure templates, and download security architectural whitepapers.
          </p>
        </div>

        {/* API Integration Snippets Selector */}
        <div className="glow-card p-6 md:p-8 bg-[#0a0d17]/80 border border-white/5 rounded-2xl space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-cyan-accent" />
              <div>
                <h3 className="text-lg font-bold text-white font-display">PromptForge Integration Guide</h3>
                <p className="text-xs text-slate-405 mt-0.5">Integrate variables execution natively in your backend code.</p>
              </div>
            </div>

            {/* Language selectors */}
            <div className="flex gap-2 p-1 bg-slate-950 border border-white/5 rounded-xl">
              {(["nodejs", "python", "curl"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveCodeLang(lang)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono transition-all uppercase ${
                    activeCodeLang === lang
                      ? "bg-slate-900 text-cyan-accent border border-cyan-500/20"
                      : "text-slate-450 hover:text-white"
                  }`}
                >
                  {lang === "nodejs" ? "Node.js" : lang === "python" ? "Python" : "cURL"}
                </button>
              ))}
            </div>
          </div>

          {/* Code Window */}
          <div className="bg-slate-950 rounded-xl p-4 border border-white/5 overflow-x-auto relative">
            <pre className="text-xs font-mono text-slate-300 leading-relaxed whitespace-pre">
              {codeSnippets[activeCodeLang]}
            </pre>
            <div className="absolute top-4 right-4 text-[10px] text-slate-650 font-bold uppercase tracking-widest">
              HTTPS SDK
            </div>
          </div>
        </div>

        {/* AWS CDK Specifications */}
        <div className="glow-card p-6 md:p-8 bg-[#0a0d17]/80 border border-white/5 rounded-2xl space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <Cpu className="w-5 h-5 text-violet-accent" />
              <span>AWS CDK Infrastructure Stack (TypeScript)</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">Deploy an isolated Cognito User Pool authorized API Gateway with AWS Lambda.</p>
          </div>
          <div className="bg-slate-950 rounded-xl p-4 border border-white/5 overflow-x-auto">
            <pre className="text-xs font-mono text-slate-350 leading-relaxed whitespace-pre">
{`import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class PromptForgeStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 1. Configure Cognito User Pool
    const userPool = new cognito.UserPool(this, 'PromptForgeUserPool', {
      userPoolName: 'promptforge-enterprise-users',
      selfSignUpEnabled: false,
      signInAliases: { email: true }
    });

    // 2. Setup Serverless Execution Lambda
    const runnerLambda = new lambda.Function(this, 'InferenceRunner', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'runner.handler',
      code: lambda.Code.fromAsset('lambda-fns')
    });

    // 3. API Gateway with Cognito Authorizer
    const api = new apigateway.RestApi(this, 'PromptForgeApiGateway');
    const authorizer = new apigateway.CognitoUserPoolsAuthorizer(this, 'CognitoAuth', {
      cognitoUserPools: [userPool]
    });

    const runResource = api.root.addResource('v1').addResource('run');
    runResource.addMethod('POST', new apigateway.LambdaIntegration(runnerLambda), {
      authorizer: authorizer,
      authorizationType: apigateway.AuthorizationType.COGNITO
    });
  }
}`}
            </pre>
          </div>
        </div>

        {/* Downloads Hub with Interactive Progress Bar */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold font-display text-white">Whitepapers & Architectural Guides</h2>
            <p className="text-sm text-slate-400">Download blueprints securely simulated from our S3 storage bucket.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloads.map((dl) => {
              const progress = downloadProgress[dl.id] ?? 0;
              const isFinished = progress >= 100;
              const isCurrent = downloadingId === dl.id;

              return (
                <div
                  key={dl.id}
                  className="glow-card p-6 bg-[#0a0d17]/50 border border-white/5 rounded-2xl flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-accent flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-900 border border-white/5 px-2 py-0.5 rounded font-bold">
                        {dl.size}
                      </span>
                    </div>
                    <h3 className="font-bold text-white text-sm font-display leading-tight">{dl.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{dl.description}</p>
                  </div>

                  {/* Progress Indicators & Download Buttons */}
                  <div className="mt-8 pt-4 border-t border-white/5">
                    {progress > 0 && !isFinished ? (
                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-mono">
                          <span className="text-slate-500">Downloading from S3...</span>
                          <span className="text-cyan-accent font-bold">{progress}%</span>
                        </div>
                        <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-cyan-accent h-1.5 rounded-full transition-all duration-150"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    ) : isFinished ? (
                      <div className="flex items-center gap-2 text-xs text-emerald-450 bg-emerald-950/20 border border-emerald-500/20 px-3 py-2.5 rounded-xl">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        <span>Download Complete!</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleDownload(dl.id)}
                        disabled={downloadingId !== null}
                        className="w-full py-2.5 bg-slate-900 border border-white/10 hover:border-cyan-accent/50 text-slate-200 hover:text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
                      >
                        <Download className="w-3.5 h-3.5" /> Download Asset
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
