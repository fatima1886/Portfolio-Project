import React from "react";
import { motion } from "framer-motion"; // 🌌 Imported Framer Motion
import { Code2, ArrowUpRight, Cpu } from "lucide-react";

export default function Projectsother({ heading1, heading2, para, array, github, versel, img }: {
  heading1: string;
  heading2: string;
  para: string;
  array: string[];
  github: string;
  versel: string;
  img: string;
}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pt-0 ">
      {/* 🌌 ANIMATED IMMERSIVE CARD CONTAINER */}
      <motion.div 
        // Scroll configuration settings
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} // Triggers early when 100px into viewport
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Premium custom cubic-bezier ease
        // className="flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-16 w-full p-6 sm:p-10 lg:p-12 rounded-2xl border border-[#818CF8]/30 bg-gradient-to-b from-slate-900/60 hover:shadow hover:shadow-md hover:shadow-cyan-400 hover:scale-[1.02] transition duration-100 to-slate-950/80 backdrop-blur-xl shadow-2xl relative group overflow-hidden"
        className="flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-16 w-full p-6 sm:p-10 lg:p-12 rounded-2xl border border-[#818CF8]/30 bg-gradient-to-b from-slate-900/60 to-slate-950/80 backdrop-blur-xl relative group overflow-hidden shadow-2xl transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)]"

      >
        
        {/* Decorative inner corner glow */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none transition-opacity group-hover:opacity-80" />


 <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          // 🚀 Cinematic hover state adjustments: Scales up slightly and tilts backward matching space look
          whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
          className="flex-1 w-full lg:max-w-lg xl:max-w-xl self-center group/mockup relative perspective-className"
          style={{ transformStyle: "preserve-3d" }}
        >
          
          {/* Subtle Ambient Outer Glow */}
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-indigo-500/10 to-purple-500/5 opacity-40 blur-xl group-hover/mockup:opacity-70 transition-opacity duration-700" />
          
          {/* The Visual Container Canvas Frame */}
          <div className="relative overflow-hidden rounded-xl border border-slate-800/90 bg-slate-950/80 p-1.5 shadow-2xl transition-all duration-200 group-hover/mockup:border-indigo-500/30">
            
            {/* Window Header bar */}
            <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-slate-900 bg-slate-950 font-mono text-[10px] text-slate-500 select-none">
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <span className="flex items-center gap-1.5 text-slate-400/70 font-medium">
                <Cpu className="h-3 w-3 text-emerald-400/60" /> 
                network_preview.png
              </span>
            </div>

            {/* 📸 The Image Tag Frame */}
            <div className="relative overflow-hidden bg-slate-900 rounded-b-lg aspect-[16/10]">
              <img 
                src={img} 
                alt="AI Interface Generator Preview Workspace" 
                className="w-full h-full object-contain brightness-[0.9] group-hover/mockup:brightness-100 group-hover/mockup:scale-[1.01] transition-all duration-700 ease-out"
                loading="lazy"
              />
            </div>

          </div>
        </motion.div>
        {/* 💻 LEFT COLUMN: TECHNICAL TEXT SUITE */}
        <div className="md:flex-1 flex flex-col justify-between space-y-6 lg:space-y-0">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-sans text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-slate-100 leading-none">
              {heading1} <span className="text-emerald-400">{heading2}</span><span className="text-emerald-400 font-light">.</span>
            </h3>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-400 max-w-xl font-normal tracking-wide">
              {para}
            </p>
          </motion.div>

          {/* TECH ARCHITECTURE TOKENS & INTERACTION CONTAINER */}
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
                  className="font-mono text-[10px] font-medium px-2.5 py-1 rounded-md bg-slate-950 text-slate-400 border border-slate-800/70 tracking-wider shadow-inner"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Interaction Action Row */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a 
                href={versel} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group font-sans text-xs font-bold tracking-wider uppercase px-5 py-3.5 rounded-lg bg-emerald-400 text-slate-800 hover:bg-emerald-500 transition-all flex items-center gap-2 shadow-md shadow-white/5 active:scale-[0.98]"
              >
                <span>Live Deployment</span>
                <ArrowUpRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-sans text-xs font-semibold tracking-wider uppercase px-5 py-3.5 rounded-lg border border-emerald-400 bg-transparent text-slate-400 hover:border-slate-700 hover:text-slate-200 transition-all flex items-center gap-2 backdrop-blur-sm active:scale-[0.98]"
              >
                <Code2 className="h-3.5 w-3.5" />
                <span>Source Code</span>
              </a>
            </motion.div>
          </div>

        </div>

        {/* 🎨 RIGHT COLUMN: APPLICATION CANVAS WINDOW MOCKUP WITH HOVER TILT */}
       

      </motion.div>
    </div>
  );
}
