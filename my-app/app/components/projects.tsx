import React from "react";
// 🛠️ Standard lightweight lucide-react icons bundled with shadcn Nova preset
import { Code2, ArrowUpRight, Terminal, Cpu } from "lucide-react";

export default function Projects() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-24 sm:px-12 z-10">
      
      {/* 🚀 SUBTLE OVER-TITLE LABELS */}
      <div className="mb-12 font-mono">
        <p className="text-xs font-medium tracking-widest text-[#818CF8] uppercase flex items-center gap-2">
          <Terminal className="h-4 w-4 animate-pulse" /> // 01. Landmark Creation
        </p>
      </div>

      {/* 🌌 IMMERSIVE FEATURE ROW CONTAINER */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
        
        {/* 💻 LEFT COLUMN: TECHNICAL TEXT SUITE */}
        <div className="flex-1 space-y-6">
          
          <h3 className="font-sans text-3xl font-extrabold tracking-tight sm:text-5xl text-slate-50 leading-tight">
            AI Interface Generator<span className="text-[#818CF8]">.</span>
          </h3>

          <p className="font-sans text-base leading-relaxed text-slate-400 max-w-xl">
            A production-ready compiler engine designed to transform raw natural language prompt blocks into functional, fully-typed React component structures. Engineered utilizing highly-optimized syntax trees to eliminate interface generation bottlenecks.
          </p>

          {/* PERFORMANCE / CORE METRICS BLOCK */}
          <div className="grid grid-cols-2 gap-4 max-w-sm font-mono border-y border-slate-800/60 py-4 my-2">
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Performance Index</p>
              <p className="text-lg font-semibold text-[#818CF8]">98% Lighthouse</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Compilation Speed</p>
              <p className="text-lg font-semibold text-emerald-400">&lt; 140ms / bundle</p>
            </div>
          </div>

          {/* TECH ARCHITECTURE TOKENS */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["Next.js 15", "TypeScript", "Tailwind v4", "Zustand"].map((tag, idx) => (
              <span 
                key={idx}
                className="font-mono text-[10px] font-medium px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800/80 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* INTERACTION LINKS ROW */}
          <div className="flex flex-wrap items-center gap-4 pt-6">
            <a 
              href="https://example.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group font-sans text-sm font-semibold tracking-wide px-5 py-3 rounded-lg bg-slate-50 text-slate-950 hover:bg-slate-200 transition-all flex items-center gap-2 shadow-lg shadow-white/5 active:scale-[0.98]"
            >
              Visit Live Deployment
              <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans text-sm font-medium tracking-wide px-5 py-3 rounded-lg border border-slate-800 bg-[#0e152a]/40 text-slate-300 hover:border-slate-700 hover:text-white transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              <Code2 className="h-4 w-4" />
              Source Code
            </a>
          </div>

        </div>

        {/* 🎨 RIGHT COLUMN: MOCKUP / SIDE PREVIEW IMAGE */}
        <div className="flex-1 w-full lg:max-w-xl group relative">
          
          {/* Subtle Ambient Outer Glow behind the image frame */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#818CF8]/20 to-transparent opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500" />
          
          {/* The Visual Container Canvas Frame */}
          <div className="relative overflow-hidden rounded-xl border border-slate-800/80 bg-[#0e152a]/60 p-2 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:border-[#818CF8]/30">
            
            {/* Fake Application Window Header bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-900 bg-slate-950/40 rounded-t-lg font-mono text-[10px] text-slate-500">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
              </div>
              <span className="flex items-center gap-1"><Cpu className="h-3 w-3" /> network_preview.png</span>
            </div>

            {/* 📸 The Image Tag Frame */}
            {/* Replace /project-mockup.png with your exact public asset screenshot path */}
            <img 
              src="/project-mockup.png" 
              alt="AI Interface Generator Preview Workspace" 
              className="w-full h-auto object-cover rounded-b-lg border-t border-slate-900 brightness-[0.85] group-hover:brightness-100 transition-all duration-500"
              loading="lazy"
            />

          </div>
        </div>

      </div>
    </section>
  );
}
