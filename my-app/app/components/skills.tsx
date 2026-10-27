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

// 1. Structured Skills Data Array with unique sub-labels
const skillsData = [
  { name: "Next.js", label: "App Architecture", icon: Globe, color: "text-slate-100", glow: "rgba(255,255,255,0.05)" },
  { name: "React", label: "State Engines", icon: Layers, color: "text-cyan-400", glow: "rgba(34,211,238,0.1)" },
  { name: "TypeScript", label: "Strict Typing", icon: FileJson, color: "text-blue-500", glow: "rgba(59,130,246,0.1)" },
  { name: "JavaScript", label: "Async Logic", icon: Code2, color: "text-yellow-400", glow: "rgba(234,179,8,0.1)" },
  { name: "Tailwind CSS", label: "Utility Styling", icon: Cpu, color: "text-cyan-400", glow: "rgba(34,211,238,0.1)" },
  { name: "HTML5 / CSS3", label: "Semantic Layouts", icon: FileCode, color: "text-indigo-400", glow: "rgba(129,140,248,0.1)" },
  { name: "Git", label: "Version Control", icon: GitBranch, color: "text-orange-500", glow: "rgba(249,115,22,0.1)" },
  { name: "GitHub", label: "CI/CD & Storage", icon: GitBranch, color: "text-slate-300", glow: "rgba(203,213,225,0.05)" },
];

export default function Skills() {
  // Separate into dual arrays specifically for the mobile loop track
  const trackOne = skillsData.slice(0, 4);
  const trackTwo = skillsData.slice(4);

  return (
    <section id="skills" className=" px-4 sm:px-10 max-w-7xl mx-auto overflow-hidden antialiased">
      
      {/* 🌌 IMMERSIVE HEADER SECTION */}
      <div className="mb-14 font-mono select-none text-orange-400">
        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase flex items-center gap-2.5">
          <Terminal className="h-3.5 w-3.5 animate-pulse text-orange-400" />
          <span>// Verified Technology Stack</span>
        </div>
      </div>

   


      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5 w-full">
  {skillsData.map((skill, idx) => {
    const IconComponent = skill.icon;
    const isNext = skill.name === "Next.js";

    return (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
        // Premium 3D magnetic hover parameters
        whileHover={{ 
          scale: 1.03, 
          y: -5,
          rotateX: 1.5,
          rotateY: -1.5,
        }}
        style={{ transformStyle: "preserve-3d" }}
        className={`relative flex items-center gap-4 p-5 rounded-2xl border backdrop-blur-xl cursor-pointer transition-all duration-300 group overflow-hidden ${
          isNext 
            ? "border-emerald-500/80 bg-gradient-to-br from-indigo-950/20 via-slate-900/60 to-slate-950/90 shadow-[0_0_25px_rgba(129,140,248,0.12)]" 
            : "border-slate-800/60 bg-gradient-to-b from-slate-900/40 to-slate-950/80 hover:border-slate-700/80"
        }`}
      >
        {/* 🌌 IMMERSIVE AMBIENT BACKGROUND GLOW BACKDROP */}
        <div 
          className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
          style={{ 
            background: isNext ? 'rgba(129, 140, 248, 0.2)' : skill.glow.replace('0.1', '0.25') 
          }} 
        />

        {/* 💻 TECH ICON WRAPPER FRAME (Colors Fixed Now!) */}
        <div 
          className={`p-3.5 rounded-xl bg-slate-950/90 border shadow-inner transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 ${skill.color} ${
            isNext 
              ? "border-indigo-500/40" 
              : "border-slate-900 group-hover:border-slate-800"
          }`}
          style={{ transform: "20px" }} // Pushes icon forward in 3D perspective space
        >
          <IconComponent className="h-5 w-5" />
        </div>

        {/* ✍️ TEXT LABELS SUITE */}
        <div className="flex flex-col justify-center select-none" style={{ transform: "10px" }}>
          
          {/* Main Skill Title */}
          <span className="font-sans text-sm font-black tracking-wide text-slate-100 transition-colors group-hover:text-white">
            {skill.name}
          </span>
          
          {/* Terminal Command Sublabel */}
          <div className="flex items-center gap-1 mt-1">
            <span className={`font-mono text-[9px] font-bold ${isNext ? 'text-indigo-400/70' : 'text-cyan-500/50 group-hover:text-cyan-400/80'} transition-colors`}>
              \$
            </span>
            <span className="font-mono text-[10px] text-slate-500 tracking-wider uppercase font-medium">
              {skill.label}
            </span>
          </div>

        </div>

        {/* 🚀 DECORATIVE TERMINAL TOP-RIGHT BOUNDARY CORNER LINE */}
        <div className={`absolute top-0 right-0 w-8 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isNext ? 'bg-indigo-400' : 'bg-cyan-400'
        }`} />
        <div className={`absolute top-0 right-0 w-[2px] h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isNext ? 'bg-indigo-400' : 'bg-cyan-400'
        }`} />

      </motion.div>
    );
  })}
</div>



      {/* 📱 MOBILE VIEW: DUAL ALTERNATING INFINITE MARQUEE TRACKS (Hidden on Desktop) */}
      <div className="flex md:hidden flex-col gap-4 w-full relative">
        
        {/* Track 01: Moving Left */}
        <div className="flex overflow-hidden w-full mask-gradient">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex flex-row gap-4 shrink-0 pr-4"
          >
            {[...trackOne, ...trackOne, ...trackOne].map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <div key={idx} className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm shrink-0">
                  <IconComponent className={`h-4 w-4 ${skill.color}`} />
                  <span className="font-sans text-xs font-bold text-slate-200">{skill.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Track 02: Moving Right */}
        <div className="flex overflow-hidden w-full mask-gradient">
          <motion.div 
            animate={{ x: [-1000, 0] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex flex-row gap-4 shrink-0 pr-4"
          >
            {[...trackTwo, ...trackTwo, ...trackTwo].map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <div key={idx} className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm shrink-0">
                  <IconComponent className={`h-4 w-4 ${skill.color}`} />
                  <span className="font-sans text-xs font-bold text-slate-200">{skill.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
