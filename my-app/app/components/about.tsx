// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Terminal, Folder, FileCode, User, Heart, ShieldCheck, Cpu } from "lucide-react";

// export default function About() {
//   // Active tab state engine for the interactive explorer panel
//   const [activeTab, setActiveTab] = useState<"bio" | "philosophy" | "milestones">("bio");

//   // Structured storytelling data blocks
//   const contentBlocks = {
//     bio: {
//       title: "01 // System Origin",
//       icon: User,
//       text: "Hello, I'm Fatima Noor. My development journey began out of pure curiosity about how the web functions beneath the surface. Bypassing rigid learning paths, I threw myself directly into the core fundamentals of raw HTML, Tailwind CSS, and Vanilla JavaScript. What started as basic styling experiments quickly evolved into a obsession with building high-performance frontend interfaces.",
//     },
//     philosophy: {
//       title: "02 // Development Core",
//       icon: Heart,
//       text: "I believe software components should be two things: structurally bulletproof and visually stunning. My development philosophy revolves around clean state management, modular component architecture, and premium user interaction layers. I don't just build components to fit layout sheets; I build them to tell a fluid story through design.",
//     },
//     milestones: {
//       title: "03 // Framework Migration",
//       icon: Cpu,
//       text: "My technical breakthrough accelerated when I migrated into full-stack ecosystems. I mastered Next.js App Router architectures, structured complex asynchronous payload pipelines to bridge client spaces with the OpenRouter AI API engine, and implemented Clerk to secure absolute user authorization layers. I specialize in making complex web operations feel lightning-fast.",
//     },
//   };

//   const ActiveIcon = contentBlocks[activeTab].icon;

//   return (
//     <section id="about" className="py-24 px-4 sm:px-10 max-w-7xl mx-auto overflow-hidden antialiased">
      
//       {/* 🌌 IMMERSIVE LANDMARK HEADER */}
//       <div className="mb-14 font-mono select-none text-cyan-400">
//         <div className="text-[11px] font-semibold tracking-[0.2em] uppercase flex items-center gap-2.5">
//           <Terminal className="h-3.5 w-3.5 animate-pulse text-indigo-400" />
//           <span>// Profile Architecture</span>
//         </div>
//       </div>

//       {/* 💻 DUAL EXPANSION MATRIX (Horizontal Layout on PC/Laptops) */}
//       <div className="flex flex-col lg:flex-row items-stretch gap-10 w-full">
        
//         {/* LEFT COLUMN: THE CORE SUMMARY */}
//         <div className="flex-1 flex flex-col justify-between space-y-6">
//           <div className="space-y-4">
//             <h3 className="font-sans text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-slate-100 leading-none">
//               Fatima Noor<span className="text-indigo-400 font-light">.</span>
//             </h3>
//             <h4 className="text-transparent text-xl sm:text-2xl font-extrabold [text-stroke:1px_#818CF8] [-webkit-text-stroke:1px_#818CF8] tracking-wide font-mono">
//               Full Stack Developer
//             </h4>
//             <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-400 max-w-xl font-normal tracking-wide">
//               I am a front-end driven developer specializing in building intelligent interactive systems. By bridging clean, fluid interfaces with advanced language processing layers, I transform traditional, rigid platforms into dynamic user ecosystems.
//             </p>
//           </div>

//           {/* Micro Stat Badges */}
//           <div className="flex flex-wrap gap-4 pt-4 lg:pt-0">
//             <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400 border border-slate-800 bg-slate-950/40 px-3 py-2 rounded-lg">
//               <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
//               <span>Secure Auth Integration (Clerk)</span>
//             </div>
//             <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400 border border-slate-800 bg-slate-950/40 px-3 py-2 rounded-lg">
//               <Cpu className="h-3.5 w-3.5 text-indigo-400" />
//               <span>Asynchronous Stream Engines (OpenRouter)</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: INTERACTIVE CODE FILE EXPLORER MOCKUP */}
//         <div className="flex-1 w-full lg:max-w-xl self-center relative group">
//           <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-indigo-500/10 to-purple-500/5 opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-700" />
          
//           <div className="relative overflow-hidden rounded-xl border border-slate-800/90 bg-slate-950/80 p-1.5 shadow-2xl transition-all duration-500 group-hover:border-indigo-500/20 flex flex-col md:flex-row h-[320px]">
            
//             {/* VIRTUAL TERMINAL SIDEBAR FILE NAVIGATOR */}
//             <div className="w-full md:w-44 bg-slate-950 p-3 border-b md:border-b-0 md:border-r border-slate-900 flex flex-row md:flex-col gap-1.5 overflow-x-auto md:overflow-x-visible select-none shrink-0 no-scrollbar">
//               <div className="hidden md:flex items-center gap-1.5 px-2 pb-3 text-[10px] font-mono text-slate-600 uppercase font-bold tracking-wider">
//                 <Folder className="h-3 w-3 text-slate-700" /> root_profile
//               </div>
              
//               {([
//                 { id: "bio", label: "about_me.js" },
//                 { id: "philosophy", label: "core_values.css" },
//                 { id: "milestones", label: "stack_growth.ts" }
//               ] as const).map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-[11px] text-left transition-all shrink-0 w-full active:scale-[0.98] ${
//                     activeTab === tab.id 
//                       ? "bg-slate-900 text-indigo-400 border border-slate-800/80 font-semibold shadow-inner" 
//                       : "text-slate-500 hover:text-slate-300 hover:bg-slate-900/30"
//                   }`}
//                 >
//                   <FileCode className={`h-3.5 w-3.5 ${activeTab === tab.id ? "text-indigo-400" : "text-slate-600"}`} />
//                   <span>{tab.label}</span>
//                 </button>
//               ))}
//             </div>

//             {/* INTERACTIVE TEXT SHEET SHEET DISPLAY */}
//             <div className="flex-1 p-5 sm:p-6 bg-[#090d16]/40 relative overflow-y-auto min-w-0">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeTab}
//                   initial={{ opacity: 0, x: 10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -10 }}
//                   transition={{ duration: 0.25, ease: "easeInOut" }}
//                   className="space-y-3.5 h-full flex flex-col justify-between"
//                 >
//                   <div className="space-y-3">
//                     <div className="flex items-center gap-2 font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest">
//                       <ActiveIcon className="h-3.5 w-3.5 text-indigo-400/80" />
//                       <span>{contentBlocks[activeTab].title}</span>
//                     </div>
//                     <p className="font-sans text-xs sm:text-sm leading-relaxed text-slate-400 font-normal">
//                       {contentBlocks[activeTab].text}
//                     </p>
//                   </div>

//                   {/* Aesthetic prompt footer line */}
//                   <div className="font-mono text-[9px] text-slate-600 select-none pt-4 md:pt-0">
//                     fatima_noor@system:~\${" "}
//                     <span className="text-cyan-400/80 animate-pulse">■</span>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


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
      <div className="mb-14 font-mono select-none text-cyan-400">
        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase flex items-center gap-2.5">
          <Terminal className="h-3.5 w-3.5 animate-pulse text-indigo-400" />
          <span>// Profile Architecture</span>
        </div>
      </div>

      {/* 💻 DUAL EXPANSION MATRIX */}
      <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14 w-full">
        
        {/* LEFT COLUMN: THE CORE SUMMARY */}
        <div className="flex-1 flex flex-col justify-between space-y-8 lg:space-y-0">
          <div className="space-y-5">
            <h3 className="font-sans text-4xl font-black tracking-tight sm:text-5xl text-slate-100 leading-none">
              Fatima Noor<span className="text-indigo-400 font-light">.</span>
            </h3>
            <h4 className="text-transparent text-xl sm:text-2xl font-extrabold [text-stroke:1px_#818CF8] [-webkit-text-stroke:1px_#818CF8] tracking-wide font-mono">
              Full Stack Developer
            </h4>
            <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-400 max-w-xl font-normal tracking-wide">
              I am a front-end driven developer specializing in building intelligent interactive systems. By bridging clean, fluid interfaces with advanced language processing layers, I transform traditional, rigid platforms into dynamic user ecosystems.
            </p>
          </div>

          {/* Micro Stat Badges */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 pt-6 lg:pt-0">
            <div className="flex items-center gap-3 font-mono text-[10px] text-slate-400 border border-slate-800/80 bg-slate-950/40 p-3 rounded-xl transition-colors hover:border-slate-700/60 shadow-md">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <ShieldCheck className="h-4 w-4 text-cyan-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-300 font-bold">Secure Guard Architecture</span>
                <span className="text-slate-500 mt-0.5">Clerk Multi-Session Auth</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 font-mono text-[10px] text-slate-400 border border-slate-800/80 bg-slate-950/40 p-3 rounded-xl transition-colors hover:border-slate-700/60 shadow-md">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <Cpu className="h-4 w-4 text-indigo-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-300 font-bold">Asynchronous AI Routing</span>
                <span className="text-slate-500 mt-0.5">OpenRouter System Key Stream</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-END CODE FILE EXPLORER MOCKUP */}
        <div className="flex-1 w-full lg:max-w-xl self-center relative group ">
          {/* Animated background glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-500/10 via-cyan-500/5 to-transparent opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-700  overflow-hidden " />
          
          {/* IDE Window Frame wrapper */}
          <div className="relative overflow-hidden rounded-2xl border border-indigo-400 bg-[#0b111e]/90 backdrop-blur-xl shadow-2xl transition-all duration-500 group-hover:border-indigo-200 hover:shadow hover:shadow-indigo-700 flex flex-col h-[380px]">
            
            {/* 🔴 🟡 🟢 IDE TOP WINDOW CUSTOM MAC BAR */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-900 bg-[#070b14] select-none">
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-[10px] tracking-wider text-slate-500 font-medium flex items-center gap-1.5">
                <Folder className="h-3 w-3 text-slate-600" /> fatima-workspace / src
              </span>
              <div className="w-12" /> {/* Empty spacing utility balancer */}
            </div>

            {/* LOWER CONTAINER WORKSPACE */}
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
              
              {/* VIRTUAL TERMINAL SIDEBAR FILE NAVIGATOR */}
              <div className="w-full md:w-48 bg-[#070b14]/70 p-3 border-b md:border-b-0 md:border-r border-slate-900 flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-x-visible select-none shrink-0 no-scrollbar">
                <div className="hidden md:flex items-center gap-1.5 px-2 pb-2.5 text-[9px] font-mono text-slate-600 uppercase font-bold tracking-widest">
                  WORKSPACE FILES
                </div>
                
                {([
                  { id: "bio", label: "about_me.js" },
                  { id: "philosophy", label: "core_values.css" },
                  { id: "milestones", label: "stack_growth.ts" }
                ] as const).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl font-mono text-[11px] text-left transition-all shrink-0 w-full active:scale-[0.97] relative ${
                      activeTab === tab.id 
                        ? "text-indigo-400 font-bold bg-slate-900/60 border border-slate-800/40" 
                        : "text-slate-500 hover:text-slate-300 hover:bg-slate-900/20"
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r bg-indigo-400"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <FileCode className={`h-3.5 w-3.5 ${activeTab === tab.id ? "text-indigo-400" : "text-slate-600"}`} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* INTERACTIVE CODE TEXT PANEL */}
              <div className="flex-1 p-5 sm:p-6 bg-[#090e18]/20 relative overflow-y-auto min-w-0 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4 h-full flex flex-col justify-between"
                  >
                    <div className="space-y-3.5">
                      {/* Active File Metadata Header */}
                      <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                        <div className="flex items-center gap-2 font-mono text-[10px] font-bold text-indigo-400/90 tracking-widest uppercase">
                          <ActiveIcon className="h-3.5 w-3.5 text-indigo-400" />
                          <span>{contentBlocks[activeTab].title}</span>
                        </div>
                        <span className="font-mono text-[9px] text-emerald-500/80 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">● Compiling Successful</span>
                      </div>

                      {/* Code Sheet Output Text Section with Line Numbers simulation */}
                      <p className="text-slate-400 py-3 md:py-0">{contentBlocks[activeTab].text}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
