
"use client";

import React, { useEffect } from 'react';
import { DynamicRoleBadge } from './roles';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowUpRight, Compass } from 'lucide-react';

export const StreamingSpan = ({ text, delay = 0, duration = 0.5 }: { text: string; delay?: number; duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: duration,
      delay: delay, // 👈 FIXED: Uses your passed dynamic delay parameter properly instead of a hardcoded value
      ease: "easeInOut", // 👈 CHANGED: Smooths out the text entry pace
    });
    return () => controls.stop();
  }, [text, count, delay, duration]);

  return <motion.span>{displayText}</motion.span>;
};
const StaggeredLetter = ({ char, index, baseDelay = 0.2 }: { char: string; index: number; baseDelay?: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 40 }} // Start completely hidden and 40px down
      animate={{ opacity: 1, y: 0 }}  // Slide up to normal position and fade in
      transition={{
        duration: 0.5,
        // The index * 0.05 creates the smooth letter-by-letter staggered sequence
        delay: baseDelay + index * 0.05, 
        ease: [0.215, 0.610, 0.355, 1.000], // Smooth cubic-bezier ease out
      }}
      className="inline-block" // Crucial: standard HTML span elements ignore y-axis transforms
    >
      {char === " " ? "\u00A0" : char} {/* Ensures spaces render correctly */}
    </motion.span>
  );
};



const Herotext = () => {
  const nameFirst = "Fatima";
  const nameLast = "Noor.";

  const handleScrollToProjects = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-start pt-10 md:pt-0">
      <DynamicRoleBadge/>
<h1 className="text-4xl sm:text-5xl md:text-8xl

font-bold md:font-extrabold tracking-tight
font-serif italic   font-bold tracking-normal bg-[#087E96]  bg-clip-text text-transparent
 leading-none min-h-[1.1em] flex flex-col items-start justify-center gap-2">
  
  {/* First Name Column - Forced into its own block row */}
  <span className="block text-(--pale-oak) whitespace-nowrap">
    {nameFirst.split("").map((char, index) => (
      <StaggeredLetter 
        key={`first-${index}`} 
        char={char} 
        index={index} 
        baseDelay={0.2} // F starts rising at exactly 0.2 seconds
      />
    ))}
  </span>

  {/* Last Name Column - Forced into its own block row beneath */}
  <span className="text-(--turquoise-surf)
   block drop-shadow-[0_0_15px_rgba(129,140,248,0.15)] whitespace-nowrap">
    {nameLast.split("").map((char, index) => (
      <StaggeredLetter 
        key={`last-${index}`} 
        char={char} 
        index={index} 
        baseDelay={0.2} // N ALSO starts rising at exactly 0.2 seconds!
      />
    ))}
  </span>
  
</h1>



      {/* Catchy Supporting Value Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        // 💡 FIXED PADDING: Removed "pt-10". Controlled cleanly by the parent container's "space-y-4" class.
        className="text-base md:text-lg text-(--muted-teal) leading-relaxed font-normal pt-2"
      >
Every project I build starts with a simple question: How will a human feel when they interact with this screen? I treat development as a story told through smooth transitions, immediate load times, and perfect accessibility.   </motion.p>


  <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col sm:flex-row items-center py-8 gap-4 pt-6 w-full sm:w-auto"
    >
      {/* 🚀 PRIMARY CALL TO ACTION: GET IN TOUCH */}
      {/* <motion.a
        href="#contact" // Update with your actual contact address/link
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="group relative w-full sm:w-auto text-center font-sans text-xs font-bold tracking-wider uppercase px-7 py-4 rounded-xl bg-slate-50 text-slate-950 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2.5 shadow-xl shadow-indigo-500/5"
      >
        <span>Get In Touch</span>
        <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-emerald-400" />
      </motion.a> */}

      <motion.a
  href="#contact"
  whileHover={{ scale: 1.02, y: -1 }}
  whileTap={{ scale: 0.98 }}
  className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5  rounded-[5px] bg-(--turquoise-surf) px-7 py-3.5 font-sans text-xs font-semibold tracking-widest uppercase text-(--dark-slate-grey) shadow-lg shadow-(--turquoise-surf)/20 ring-1 ring-(--neon-ice)/40 transition-all duration-200 hover:bg-(--neon-ice) hover:shadow-(--neon-ice)/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--pale-oak)"
>
  <span>Get In Touch</span>
  <ArrowUpRight className="h-4 w-4 stroke-[2.25] text-(--dark-slate-grey) transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
</motion.a>


      {/* 🌌 SECONDARY CALL TO ACTION: EXPLORE PROJECTS */}
     <motion.a
  href="#projects"
  onClick={handleScrollToProjects}
  whileHover={{ scale: 1.02, y: -1 }}
  whileTap={{ scale: 0.98 }}
  className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 overflow-hidden rounded-[14px] border border-(--muted-teal)/45 bg-(--dark-slate-grey)/50 px-7 py-3.5 font-sans text-xs font-semibold tracking-widest uppercase text-(--pale-oak) backdrop-blur-md transition-all duration-200 hover:border-(--neon-ice) hover:bg-(--muted-teal)/15 hover:text-(--neon-ice) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--pale-oak)"
>
  {/* Subtle shimmer sweep matching your palette */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-(--neon-ice)/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

  <Compass className="relative z-10 h-4 w-4 stroke-[2] text-(--muted-teal) transition-all duration-500 group-hover:rotate-45 group-hover:text-(--neon-ice)" />
  <span className="relative z-10">Explore Projects</span>
</motion.a>

    </motion.div>
    </div>
  );
};

export default Herotext;


