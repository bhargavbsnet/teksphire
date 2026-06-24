"use client";

import React from "react";
import Link from "next/link";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      id: "cognito-hardening",
      title: "Hardening AWS Cognito User Pools for Enterprise Single Sign-On",
      excerpt: "Step-by-step configuration guide on setting up SAML federations, locking down JWT signature key validations, and programmatic token rotations.",
      category: "Cloud Security",
      date: "June 20, 2026",
      author: "Bhargav Basnet",
      readTime: "8 min read",
    },
    {
      id: "bedrock-latency-reduction",
      title: "Reducing LLM Inference Latency by 40% using DynamoDB caching",
      excerpt: "How we configured global DynamoDB tables as semantic cache engines for Bedrock Claude 3.5 queries, reducing repeat response latency down to single digit milliseconds.",
      category: "AI engineering",
      date: "May 28, 2026",
      author: "Alex Stone",
      readTime: "12 min read",
    },
    {
      id: "terraform-ecs-deployment",
      title: "Declarative ECS Fargate deployments using AWS CDK and GitHub Actions",
      excerpt: "A complete walkthrough of constructing fully containerized pipelines with rolling updates, isolated subnets, and CloudWatch alarms triggers.",
      category: "DevOps",
      date: "April 15, 2026",
      author: "Lisa Miller",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="relative py-12 md:py-24">
      {/* Mesh gradients background */}
      <div className="mesh-glow-cyan top-[15%] left-[-20%]" />
      <div className="mesh-glow-violet top-[55%] right-[-15%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Blog Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent">Bulletins & Insights</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            TEKSPHIRE Tech Hub
          </h1>
          <p className="text-slate-350 leading-relaxed">
            Read detailed guides written directly by our solutions architects and AI engineers covering AWS security parameters, Docker pipelines, and RAG architectures.
          </p>
        </div>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="glow-card p-6 bg-[#0a0d17]/60 border border-white/5 rounded-2xl flex flex-col justify-between group transition-all"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 font-bold uppercase">
                  <span className="text-cyan-accent border border-cyan-500/20 bg-cyan-950/20 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-accent transition-colors font-display leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex flex-col gap-4">
                {/* Author and Date */}
                <div className="flex items-center gap-4 text-[10px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                </div>

                <a
                  href="/contact"
                  className="w-full text-center py-2.5 bg-slate-900 border border-white/10 hover:border-cyan-accent/40 rounded-xl text-xs font-bold text-slate-200 hover:text-white transition-all flex items-center justify-center gap-1.5"
                >
                  Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
