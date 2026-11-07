


"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1, 
        delay: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="relative isolate mx-auto flex min-h-[490px] w-full max-w-[580px] items-center justify-center pt-16 sm:pt-14 md:pt-20"
    >

      {/* Background glow */}
      <div className="absolute -z-10 aspect-square w-[65%] rounded-full bg-(--turquoise-surf)/15 blur-[80px]" />

      {/* Decorative orbit */}
      <div className="absolute h-[80%] w-[85%] -rotate-12 scale-y-75 rounded-[50%] border border-(--muted-teal)/20">
        <span className="absolute right-[15%] top-[12%] size-2 rounded-full bg-(--neon-ice) shadow-[0_0_20px_var(--neon-ice)]" />
      </div>

      {/* Main code editor (Dark Slate surface) */}
      <motion.div 
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-[92%] sm:w-[82%] overflow-hidden rounded-2xl border border-(--muted-teal)/35 bg-[#1B2B2B]/90 backdrop-blur-md shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
      >

        {/* Window header */}
        <div className="flex items-center gap-3 border-b border-(--muted-teal)/20 bg-(--dark-slate-grey)/60 px-4 py-3.5 font-mono text-[11px] text-(--muted-teal)">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-(--pale-oak)/40" />
            <span className="size-2 rounded-full bg-(--muted-teal)/60" />
            <span className="size-2 rounded-full bg-(--turquoise-surf)" />
          </div>

          <span className="text-(--pale-oak)/80">developer.tsx</span>
          <span className="ml-auto rounded bg-(--turquoise-surf)/15 px-1.5 py-0.5 text-[10px] font-semibold text-(--turquoise-surf)">
            TSX
          </span>
        </div>

        {/* Code */}
        <div className="overflow-x-auto px-5 py-6 font-mono text-[11px] leading-[2.1] text-(--pale-oak)">
          <div>
            <span className="font-semibold text-(--turquoise-surf)">const</span> developer = {"{"}
          </div>
          <div className="pl-4">
            <span className="text-(--muted-teal)">name:</span>{" "}
            <span className="text-(--neon-ice)">"Fatima Noor"</span>,
          </div>
          <div className="pl-4">
            <span className="text-(--muted-teal)">role:</span>{" "}
            <span className="text-(--neon-ice)">"Frontend Developer"</span>,
          </div>
          <div className="pl-4">
            <span className="text-(--muted-teal)">stack:</span> [
          </div>
          <div className="pl-8 text-(--pale-oak)">"React",</div>
          <div className="pl-8 text-(--pale-oak)">"Next.js",</div>
          <div className="pl-8 text-(--pale-oak)">"TypeScript"</div>
          <div className="pl-4">],</div>
          <div className="pl-4">
            <span className="text-(--muted-teal)">imgGenerator:</span>{" "}
            <span className="text-(--turquoise-surf)">true</span>,
          </div>
          <div className="pl-4">
            <span className="text-(--muted-teal)">learning:</span>{" "}
            <span className="text-(--turquoise-surf)">true</span>,
          </div>
          <div className="pl-4">
            <span className="text-(--muted-teal)">passion:</span>{" "}
            <span className="text-(--neon-ice)">"Creating"</span>
          </div>
          <div>{"};"}</div>
        </div>

        {/* Editor footer */}
        <div className="flex justify-between border-t border-(--muted-teal)/15 bg-(--dark-slate-grey)/80 px-4 py-2.5 font-mono text-[10px] text-(--muted-teal)">
          <span>UTF-8</span>
          <span className="flex items-center gap-1.5 text-(--neon-ice)">
            <span className="size-1.5 animate-pulse rounded-full bg-(--neon-ice)" />
            Ready to build
          </span>
        </div>
      </motion.div>

      {/* Floating Terminal (Kept at your right-0 top-[50%] position) */}
      <motion.div 
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="hidden md:block absolute right-0 top-[50%] z-20 w-[215px] rounded-[12px] border border-white/50 bg-gradient-to-br from-[#F4F1EA] via-(--pale-oak) to-[#BDB6A0] p-4 text-(--dark-slate-grey) shadow-[0_22px_50px_-10px_rgba(0,0,0,0.55),0_0_25px_rgba(52,228,234,0.12)] ring-1 ring-(--dark-slate-grey)/15 backdrop-blur-md"
      >
        <div className="mb-2.5 flex items-center justify-between border-b border-(--dark-slate-grey)/10 pb-2">
          <div className="flex items-center gap-2 text-xs font-bold tracking-tight text-(--dark-slate-grey)">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--turquoise-surf) opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-(--turquoise-surf)" />
            </span>
            Terminal
          </div>
          <span className="rounded bg-(--dark-slate-grey)/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase text-(--dark-slate-grey)/70">
            bash
          </span>
        </div>

        <p className="font-mono text-[10.5px] font-medium text-(--dark-slate-grey)/85">
          <span className="font-bold text-[#087E96]">$</span> npm run build
        </p>

        <p className="mt-1.5 flex items-center gap-1.5 font-mono text-[10.5px] font-bold text-[#0D5C5C]">
          <span className="grid size-3.5 place-items-center rounded-full bg-[#0D5C5C]/15 text-[9px]">
            ✓
          </span>
          Build successful
        </p>
      </motion.div>

      {/* Floating AI & UI Developer badge (Kept at your exact position, fixed z-index conflict) */}
      <motion.div 
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ y: -7, scale: 1.02 }}
        className="absolute left-[50%] sm:left-0 md:left-[40%] top-1 sm:top-[5%] md:top-[5%] z-20 flex items-center gap-3 rounded-[12px] border border-white/50 bg-gradient-to-br from-[#F4F1EA] via-(--pale-oak) to-[#BDB6A0] px-3.5 py-2.5 sm:p-3.5 text-(--dark-slate-grey) shadow-[0_22px_50px_-10px_rgba(0,0,0,0.55),0_0_25px_rgba(52,228,234,0.12)] ring-1 ring-(--dark-slate-grey)/15 backdrop-blur-md"
      >
        <div className="grid size-8 sm:size-10 shrink-0 place-items-center rounded-[6px] bg-(--dark-slate-grey) font-mono text-xs sm:text-sm font-bold text-(--neon-ice) shadow-inner ring-1 ring-(--neon-ice)/30">
          {"🤖"}
        </div>

        <div>
          <h3 className="text-[11.5px] font-bold leading-tight tracking-tight text-(--dark-slate-grey)">
            AI & UI Developer
          </h3>
          <p className="mt-0.5 text-[10px] font-medium text-(--dark-slate-grey)/75">
            Generative web interfaces.
          </p>
        </div>
      </motion.div>

      {/* Accent sparkle */}
      <div className="animate-pulse absolute right-[12%] bottom-[14%] size-2 rounded-full bg-(--neon-ice) shadow-[0_0_20px_var(--neon-ice)]" />
    </motion.div>
  );
}


