

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Folder, FileCode, User, Heart, ShieldCheck, Cpu, Code2 } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"bio" | "philosophy" | "milestones">("bio");

  const contentBlocks = {
    bio: {
      title: "01 // System Origin",
      icon: User,
      text: "Hello, I'm Fatima Noor. My development journey began out of pure curiosity about how the web functions beneath the surface. Bypassing rigid learning paths, I threw myself directly into the core fundamentals of raw HTML, Tailwind CSS, and Vanilla JavaScript. What started as basic styling experiments quickly evolved into an obsession with building high-performance frontend interfaces.",
    },
    philosophy: {
      title: "02 // Development Core",
      icon: Heart,
      text: "I believe software components should be two things: structurally bulletproof and visually stunning. My development philosophy revolves around clean state management, modular component architecture, and premium user interaction layers. I don't just build components to fit layout sheets; I build them to tell a fluid story through design.",
    },
    milestones: {
      title: "03 // Framework Migration",
      icon: Cpu,
      text: "My technical breakthrough accelerated when I migrated into full-stack ecosystems. I mastered Next.js App Router architectures, structured complex asynchronous payload pipelines to bridge client spaces with the OpenRouter AI API engine, and implemented Clerk to secure absolute user authorization layers. I specialize in making complex web operations feel lightning-fast.",
    },
  };

  const ActiveIcon = contentBlocks[activeTab]?.icon || Code2;

  return (
    <section id="about" className="py-24 px-4 sm:px-10 max-w-7xl mx-auto overflow-hidden antialiased">
      
      {/* 🌌 IMMERSIVE LANDMARK HEADER */}
       <div className="inline-flex items-center gap-2.5 rounded-full border border-(--dark-slate-grey)/15 bg-(--pale-oak)/60 px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-(--dark-slate-grey) mb-5">
                <Terminal className="h-3.5 w-3.5 animate-pulse text-[#087E96]" />
                <span>// Profile Architecture</span>
              </div>

      {/* 💻 DUAL EXPANSION MATRIX */}
      <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14 w-full">
        
        {/* LEFT COLUMN: THE CORE SUMMARY */}
       <div className="flex flex-1 flex-col justify-between space-y-8 lg:space-y-0">
  <div className="space-y-4">
    {/* Primary Name Heading */}
    <h3 className="font-sans text-4xl font-black leading-none tracking-tight text-(--dark-slate-grey) sm:text-5xl">
      Fatima Noor<span className="font-light text-(--turquoise-surf)">.</span>
    </h3>

    {/* Stylish Role Subtitle (Editorial Italic Serif + Ocean-Teal Gradient + Accent Line) */}
    <div className="flex items-center gap-3 pt-0.5">
      <span className="h-[2px] w-7 rounded-full bg-(--turquoise-surf)" />
      <h4 className="font-serif italic text-2xl sm:text-[28px] font-bold tracking-normal bg-[#087E96]  bg-clip-text text-transparent">
        Full Stack Developer
      </h4>
    </div>

    {/* Bio Paragraph */}
    <p className="max-w-xl pt-1 font-sans text-sm font-normal leading-relaxed tracking-wide text-(--dark-slate-grey)/85 sm:text-base">
      I am a front-end driven developer specializing in building intelligent interactive systems. By bridging clean, fluid interfaces with advanced language processing layers, I transform traditional, rigid platforms into dynamic user ecosystems.
    </p>
  </div>

  {/* Micro Stat Badges (Light Surface Cards matching your Palette) */}
  <div className="flex flex-col gap-3.5 pt-6 sm:flex-row lg:flex-col lg:pt-4 xl:flex-row">
    <div className="flex items-center gap-3.5 rounded-[12px] border border-(--muted-teal)/55 bg-[#F7F4ED]  p-3.5 font-mono text-[10px] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-(--turquoise-surf)/60 hover:shadow-md">
      <div className="grid size-9 shrink-0 place-items-center rounded-[6px] bg-(--dark-slate-grey) text-(--neon-ice) shadow-inner">
        <ShieldCheck className="h-4 w-4" />
      </div>
      <div className="flex flex-col">
        <span className="font-sans text-xs font-bold text-(--dark-slate-grey)">
          Secure Guard Architecture
        </span>
        <span className="mt-0.5 text-[10px] font-medium text-(--dark-slate-grey)/70">
          Clerk Multi-Session Auth
        </span>
      </div>
    </div>

    <div className="flex items-center gap-3.5 rounded-[12px] border border-(--muted-teal)/55 bg-gradient-to-br from-[#EDF5F4] via-[#DCEAE8] to-(--muted-teal)/35 p-3.5 font-mono text-[10px] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-(--turquoise-surf)/60 hover:shadow-md">
      <div className="grid size-9 shrink-0 place-items-center rounded-[6px] bg-[#087E96] text-white shadow-inner">
        <Cpu className="h-4 w-4" />
      </div>
      <div className="flex flex-col">
        <span className="font-sans text-xs font-bold text-(--dark-slate-grey)">
          Asynchronous AI Routing
        </span>
        <span className="mt-0.5 text-[10px] font-medium text-(--dark-slate-grey)/70">
          OpenRouter System Key Stream
        </span>
      </div>
    </div>
  </div>
</div>


        {/* RIGHT COLUMN: HIGH-END CODE FILE EXPLORER MOCKUP */}
        <div className="flex-1 w-full lg:max-w-xl self-center relative group ">
          {/* Animated background glow */}
          <div className="absolute -inset-1 rounded-[12px] bg-gradient-to-tr from-orange-500/10 via-emerald-500/5 to-transparent opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-700  overflow-hidden " />
          
          {/* IDE Window Frame wrapper */}
       <div className="group relative w-full flex-1 self-center lg:max-w-xl">
  {/* Subtle Ambient Palette Glow */}
  <div className="pointer-events-none absolute -inset-1.5 overflow-hidden rounded-[12px] bg-gradient-to-tr from-(--turquoise-surf)/20 via-(--neon-ice)/10 to-transparent opacity-50 blur-xl transition-opacity duration-700 group-hover:opacity-80" />

  {/* DARK IDE WINDOW FRAME */}
  <div className="relative flex h-[430px] sm:h-[400px] flex-col overflow-hidden rounded-[12px] border border-(--muted-teal)/40 bg-[#1B2B2B]/95 backdrop-blur-xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-(--turquoise-surf)/60">
    
    {/* IDE TOP WINDOW BAR */}
    <div className="flex select-none items-center justify-between border-b border-(--muted-teal)/20 bg-(--dark-slate-grey) px-4 py-3">
      <div className="flex gap-1.5">
        <span className="size-2.5 rounded-full bg-(--pale-oak)/45" />
        <span className="size-2.5 rounded-full bg-(--muted-teal)/75" />
        <span className="size-2.5 rounded-full bg-(--turquoise-surf)" />
      </div>

      <span className="flex items-center gap-1.5 font-mono text-[10px] font-medium tracking-wider text-(--muted-teal)">
        <Folder className="h-3 w-3 text-(--turquoise-surf)" />
        <span>fatima-workspace / src</span>
      </span>

      <span className="rounded bg-(--turquoise-surf)/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-(--neon-ice)">
        IDE
      </span>
    </div>

    {/* LOWER WORKSPACE CONTAINER */}
    <div className="flex flex-1 flex-col overflow-hidden md:flex-row">
      
      {/* FILE NAVIGATOR (3-Column Grid on Mobile so all 3 tabs fit clearly, Vertical Sidebar on Desktop) */}
      <div className="grid w-full shrink-0 select-none grid-cols-3 gap-1.5 border-b border-(--muted-teal)/20 bg-(--dark-slate-grey)/75 p-2.5 md:flex md:w-48 md:flex-col md:gap-1 md:border-r md:border-b-0 md:p-3">
        <div className="hidden items-center gap-1.5 px-2 pb-2 font-mono text-[9px] font-bold tracking-widest uppercase text-(--muted-teal)/70 md:flex">
          WORKSPACE FILES
        </div>

        {(
          [
            { id: "bio", label: "about_me.js", shortLabel: "about.js" },
            { id: "philosophy", label: "core_values.css", shortLabel: "values.css" },
            { id: "milestones", label: "stack_growth.ts", shortLabel: "growth.ts" },
          ] as const
        ).map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex w-full items-center justify-center gap-1.5 rounded-xl px-2 py-2.5 font-mono text-[10.5px] sm:text-[11px] transition-all active:scale-[0.97] md:justify-start md:gap-2 md:px-3 ${
                isActive
                  ? "border border-(--turquoise-surf)/40 bg-(--turquoise-surf)/15 font-bold text-(--neon-ice) shadow-sm"
                  : "text-(--muted-teal)/80 hover:bg-(--muted-teal)/10 hover:text-(--pale-oak)"
              }`}
            >
              {/* Active Left Accent Bar (Desktop) */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="hidden md:block absolute top-2.5 bottom-2.5 left-0 w-[3px] rounded-r bg-(--neon-ice)"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}

              <FileCode
                className={`h-3.5 w-3.5 shrink-0 ${
                  isActive ? "text-(--neon-ice)" : "text-(--muted-teal)/60"
                }`}
              />

              {/* Compact label on tiny phones, full filename on sm+ & desktop */}
              <span className="truncate sm:hidden">{tab.shortLabel}</span>
              <span className="hidden truncate sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* INTERACTIVE CODE CONTENT PANEL (Scrollable with Hidden Scrollbar) */}
      <div className="relative flex min-w-0 flex-1 flex-col justify-between overflow-y-auto bg-[#142020]/50 p-5 sm:p-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex h-full flex-col justify-between space-y-4"
          >
            <div className="space-y-3.5">
              {/* Active File Metadata Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-(--muted-teal)/20 pb-2.5">
                <div className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase text-(--turquoise-surf)">
                  <ActiveIcon className="h-3.5 w-3.5 text-(--turquoise-surf)" />
                  <span>{contentBlocks[activeTab].title}</span>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded border border-(--neon-ice)/25 bg-(--neon-ice)/10 px-2 py-0.5 font-mono text-[9px] font-medium text-(--neon-ice)">
                  <span className="size-1.5 animate-pulse rounded-full bg-(--neon-ice)" />
                  Ready
                </span>
              </div>

              {/* Readable Pale Oak Body Text */}
              <p className="font-sans text-sm leading-relaxed text-(--pale-oak)/90">
                {contentBlocks[activeTab].text}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
