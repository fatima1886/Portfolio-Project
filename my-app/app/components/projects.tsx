



"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, ArrowUpRight, Cpu } from "lucide-react";

export default function Projects({ heading1, heading2, para, array, github, versel, img }: {
  heading1: string;
  heading2: string;
  para: string;
  array: string[];
  github: string;
  versel: string;
  img: string;
}) {
  return (
    // <div className="hidden md:block mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:pt-0 lg:px-8">
    <div className="hidden lg:block mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:pt-0 lg:px-8">
      {/* ANIMATED LIGHT PROJECT CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className=" group relative flex w-full items-stretch justify-between gap-10 overflow-hidden rounded-[20px] border border-white/50 bg-gradient-to-br from-[#F4F1EA] via-(--pale-oak) to-[#C2BBA5] p-6 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.45)] ring-1 ring-(--muted-teal)/40 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.55),0_0_30px_rgba(52,228,234,0.14)] sm:p-10 lg:flex-row lg:gap-16 lg:p-12"
      >
        
        {/* Subtle decorative inner highlight */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-[320px] w-[320px] rounded-full bg-(--light-surface)/12 blur-[80px] transition-opacity duration-500 group-hover:opacity-100" />

        {/* LEFT COLUMN: PROJECT DETAILS & ACTIONS */}
        <div className="flex flex-col justify-between space-y-6 md:flex-1 lg:space-y-0">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-sans text-3xl font-black leading-tight tracking-tight text-(--dark-slate-grey) sm:text-4xl lg:text-5xl">
              {heading1}{" "}
              <span className="text-[#087E96]">{heading2}</span>
              <span className="font-light text-(--turquoise-surf)">.</span>
            </h3>

            <p className="max-w-xl font-sans text-sm font-normal leading-relaxed tracking-wide text-(--dark-slate-grey)/80 sm:text-base">
              {para}
            </p>
          </motion.div>

          {/* TECH TAGS & BUTTONS */}
          <div className="space-y-6 pt-4 lg:pt-0">
            {/* Tag Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {array.map((tag, idx) => (
                <span 
                  key={idx}
                  className="rounded-lg border border-(--dark-slate-grey)/15 bg-(--dark-slate-grey)/8 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-(--dark-slate-grey) transition-colors group-hover:border-(--dark-slate-grey)/25"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3.5"
            >
              {/* Primary CTA: Dark Slate Grey button with Neon Ice accent */}
              <a 
                href={versel} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 rounded-[6px] bg-(--dark-slate-grey) px-5 py-3.5 font-sans text-xs font-bold tracking-wider uppercase text-(--pale-oak) shadow-lg shadow-(--dark-slate-grey)/20 transition-all duration-200 hover:bg-[#1B2B2B] hover:text-(--neon-ice) active:scale-[0.98]"
              >
                <span>Live Deployment</span>
                <ArrowUpRight className="h-4 w-4 text-(--neon-ice) transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>

              {/* Secondary CTA: Crisp Outlined Dark Slate button */}
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[6px] border border-(--dark-slate-grey)/30 bg-white/35 px-5 py-3.5 font-sans text-xs font-bold tracking-wider uppercase text-(--dark-slate-grey) backdrop-blur-sm transition-all duration-200 hover:border-(--dark-slate-grey) hover:bg-(--dark-slate-grey)/10 active:scale-[0.98]"
              >
                <Code2 className="h-4 w-4 text-[#087E96]" />
                <span>Source Code</span>
              </a>
            </motion.div>
          </div>

        </div>

        {/* RIGHT COLUMN: DARK CONTRAST BROWSER MOCKUP */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
          className="group/mockup relative w-full flex-1 self-center lg:max-w-lg xl:max-w-xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          
          {/* Subtle Ambient Outer Glow */}
          <div className="absolute -inset-1.5 rounded-[12px] bg-gradient-to-tr from-(--turquoise-surf)/25 to-(--dark-slate-grey)/15 opacity-50 blur-xl transition duration-700 group-hover/mockup:opacity-80" />
          
          {/* Dark Window Frame (Anchors the screenshot cleanly inside the light card) */}
          <div className="relative overflow-hidden rounded-[12px] border border-(--dark-slate-grey)/20 bg-[#1B2B2B] p-1.5 shadow-[0_20px_45px_rgba(27,43,43,0.35)] transition-all duration-200 group-hover/mockup:border-(--turquoise-surf)/50">
            
            {/* Window Header Bar */}
            <div className="flex select-none items-center justify-between border-b border-(--muted-teal)/15 bg-(--dark-slate-grey) px-3.5 py-2.5 font-mono text-[10px] text-(--muted-teal)">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-(--pale-oak)/40" />
                <span className="size-2.5 rounded-full bg-(--muted-teal)/70" />
                <span className="size-2.5 rounded-full bg-(--turquoise-surf)" />
              </div>
              <span className="flex items-center gap-1.5 font-medium text-(--pale-oak)/80">
                <Cpu className="h-3 w-3 text-(--neon-ice)" /> 
                network_preview.png
              </span>
            </div>

            {/* Screenshot Frame */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-b-xl bg-[#142020]">
              <img 
                src={img} 
                alt={`${heading1} ${heading2} preview`} 
                className="h-full w-full object-contain brightness-[0.95] transition-all duration-700 ease-out group-hover/mockup:scale-[1.01] group-hover/mockup:brightness-100"
                loading="lazy"
              />
            </div>

          </div>
        </motion.div>

      </motion.div>



      
    
    </div>
  );
}
