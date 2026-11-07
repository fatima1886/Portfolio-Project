


"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Code2, 
  Cpu, 
  Layers, 
  FileCode, 
  FileJson, 
  GitBranch, 
  Globe 
} from "lucide-react";

// Each skill card gets a distinct surface & accent tone from your active 5-color palette
const skillsData = [
  {
    name: "Next.js",
    label: "App Architecture",
    detail: "SSR, App Router & Edge Performance",
    icon: Globe,
    cardBg: "bg-gradient-to-br from-[#F4F1EA] via-(--pale-oak) to-[#C2BBA5]",
    border: "border-(--dark-slate-grey)/25",
    iconBox: "bg-(--dark-slate-grey) text-(--neon-ice)",
    accent: "text-[#087E96]",
    corner: "bg-(--turquoise-surf)",
  },
  {
    name: "React",
    label: "State Engines",
    detail: "Modular Hooks & Concurrent UI",
    icon: Layers,
    cardBg: "bg-gradient-to-br from-[#EDF5F4] via-[#DCEAE8] to-(--muted-teal)/55",
    border: "border-(--muted-teal)/70",
    iconBox: "bg-[#087E96] text-white",
    accent: "text-[#087E96]",
    corner: "bg-[#087E96]",
  },
  {
    name: "TypeScript",
    label: "Strict Typing",
    detail: "End-to-End Type-Safe Interfaces",
    icon: FileJson,
    cardBg: "bg-gradient-to-br from-[#E6F8FA] via-[#D3F1F4] to-(--neon-ice)/35",
    border: "border-(--turquoise-surf)/45",
    iconBox: "bg-(--dark-slate-grey) text-(--turquoise-surf)",
    accent: "text-[#087E96]",
    corner: "bg-(--turquoise-surf)",
  },
  {
    name: "JavaScript",
    label: "Async Logic",
    detail: "ES2024+, Event Loops & APIs",
    icon: Code2,
    cardBg: "bg-gradient-to-br from-[#F7F3E8] via-[#EBE3CE] to-(--pale-oak)/90",
    border: "border-(--muted-teal)/50",
    iconBox: "bg-[#1B2B2B] text-(--pale-oak)",
    accent: "text-(--dark-slate-grey)",
    corner: "bg-(--dark-slate-grey)",
  },
  {
    name: "Tailwind CSS",
    label: "Utility Styling",
    detail: "Responsive Design Systems & Tokens",
    icon: Cpu,
    cardBg: "bg-gradient-to-br from-[#E3F4F4] via-[#CFE9E8] to-(--muted-teal)/65",
    border: "border-(--turquoise-surf)/50",
    iconBox: "bg-(--turquoise-surf) text-(--dark-slate-grey)",
    accent: "text-[#087E96]",
    corner: "bg-(--neon-ice)",
  },
  {
    name: "HTML5 / CSS3",
    label: "Semantic Layouts",
    detail: "Accessible Grid, Flexbox & Motion",
    icon: FileCode,
    cardBg: "bg-gradient-to-br from-[#F5F2EB] via-[#E5DFD0] to-[#D4CCB8]",
    border: "border-(--dark-slate-grey)/20",
    iconBox: "bg-(--dark-slate-grey) text-(--pale-oak)",
    accent: "text-[#087E96]",
    corner: "bg-(--muted-teal)",
  },
  {
    name: "Git",
    label: "Version Control",
    detail: "Branching Workflows & Clean Commits",
    icon: GitBranch,
    cardBg: "bg-gradient-to-br from-[#EAF3F2] via-[#D8E8E6] to-(--muted-teal)/50",
    border: "border-(--muted-teal)/65",
    iconBox: "bg-[#1B2B2B] text-(--neon-ice)",
    accent: "text-[#087E96]",
    corner: "bg-(--turquoise-surf)",
  },
  {
    name: "GitHub",
    label: "CI/CD & Storage",
    detail: "Actions Pipelines & Vercel Deploys",
    icon: GitBranch,
    cardBg: "bg-gradient-to-br from-[#F2EFE7] via-[#E3ECEB] to-(--neon-ice)/25",
    border: "border-(--turquoise-surf)/40",
    iconBox: "bg-(--dark-slate-grey) text-(--turquoise-surf)",
    accent: "text-[#087E96]",
    corner: "bg-(--dark-slate-grey)",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl overflow-hidden px-4 py-14 sm:px-6 lg:px-8 antialiased"
    >
      {/* SECTION HEADER */}
      <div className="mb-10 sm:mb-14 space-y-3 select-none">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-(--dark-slate-grey)/15 bg-(--pale-oak)/60 px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-(--dark-slate-grey)">
          <Terminal className="h-3.5 w-3.5 animate-pulse text-[#087E96]" />
          <span>// Verified Technology Stack</span>
        </div>

        <h2 className="font-sans text-3xl font-black tracking-tight text-(--dark-slate-grey) sm:text-4xl lg:text-5xl">
          Core <span className="text-[#087E96] font-serif italic font-semibold pl-3 "> Architecture</span>
          <span className="font-light text-(--turquoise-surf)">.</span>
        </h2>
      </div>

      {/* UNIFIED LARGER CARDS GRID (1-col Mobile -> 2-col Tablet -> 4-col Laptop) */}
      <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {skillsData.map((skill, idx) => {
          const IconComponent = skill.icon;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.025,
                y: -6,
              }}
              className={`group relative flex min-h-[175px] sm:min-h-[195px] cursor-pointer flex-col justify-between overflow-hidden rounded-[15px] border p-6 sm:p-7 shadow-[0_14px_35px_-12px_rgba(43,65,65,0.22)] ring-1 ring-white/50 transition-all duration-300 hover:shadow-[0_22px_45px_-10px_rgba(43,65,65,0.32)] ${skill.cardBg} ${skill.border}`}
            >
              {/* Top Row: Larger Icon Badge + Index Number */}
              <div className="flex items-start justify-between">
                <div
                  className={`grid size-12 sm:size-13 place-items-center rounded-[6px] shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${skill.iconBox}`}
                >
                  <IconComponent className="h-6 w-6" />
                </div>

                <span className="font-mono text-[11px] font-bold tracking-widest text-(--dark-slate-grey)/40">
                  0{idx + 1}
                </span>
              </div>

              {/* Bottom Row: Skill Name, Command Label & Short Detail */}
              <div className="mt-6 space-y-1.5 select-none">
                <h3 className="font-sans text-lg sm:text-xl font-black tracking-tight text-(--dark-slate-grey)">
                  {skill.name}
                </h3>

                <div className="flex items-center gap-1.5">
                  <span className={`font-mono text-[11px] font-bold ${skill.accent}`}>
                    $
                  </span>
                  <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-(--dark-slate-grey)/75">
                    {skill.label}
                  </span>
                </div>

                <p className="pt-1 font-sans text-xs leading-relaxed text-(--dark-slate-grey)/70">
                  {skill.detail}
                </p>
              </div>

              {/* Decorative Corner Accent Lines */}
              <div
                className={`absolute top-0 right-0 h-[3px] w-10 opacity-40 transition-opacity duration-300 group-hover:opacity-100 ${skill.corner}`}
              />
              <div
                className={`absolute top-0 right-0 h-10 w-[3px] opacity-40 transition-opacity duration-300 group-hover:opacity-100 ${skill.corner}`}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
