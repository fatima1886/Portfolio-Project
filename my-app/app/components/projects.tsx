// import React from "react";
// // 🛠️ Standard lightweight lucide-react icons bundled with shadcn Nova preset
// import { Code2, ArrowUpRight, Terminal, Cpu } from "lucide-react";

// export default function Projects() {
//   return (
//     <section className="relative w-full max-w-7xl mx-auto px-6 py-24 sm:px-12 z-10">
      
//       {/* 🚀 SUBTLE OVER-TITLE LABELS */}
//       <div className="mb-12 font-mono">
//         <p className="text-xs font-medium tracking-widest text-[#818CF8] uppercase flex items-center gap-2">
//           <Terminal className="h-4 w-4 animate-pulse" /> // 01. Landmark Creation
//         </p>
//       </div>

//       {/* 🌌 IMMERSIVE FEATURE ROW CONTAINER */}
//       <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
        
//         {/* 💻 LEFT COLUMN: TECHNICAL TEXT SUITE */}
//         <div className="flex-1 space-y-6">
          
//           <h3 className="font-sans text-3xl font-extrabold tracking-tight sm:text-5xl text-slate-50 leading-tight">
//             AI Interface Generator<span className="text-[#818CF8]">.</span>
//           </h3>

//           <p className="font-sans text-base leading-relaxed text-slate-400 max-w-xl">
//             A production-ready compiler engine designed to transform raw natural language prompt blocks into functional, fully-typed React component structures. Engineered utilizing highly-optimized syntax trees to eliminate interface generation bottlenecks.
//           </p>

        

//           {/* TECH ARCHITECTURE TOKENS */}
//           <div className="flex flex-wrap gap-2 pt-2">
//             {["Next.js 15", "TypeScript", "Tailwind v4", "Zustand"].map((tag, idx) => (
//               <span 
//                 key={idx}
//                 className="font-mono text-[10px] font-medium px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800/80 tracking-wide"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* INTERACTION LINKS ROW */}
//           <div className="flex flex-wrap items-center gap-4 pt-6">
//             <a 
//               href="https://example.com" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="group font-sans text-sm font-semibold tracking-wide px-5 py-3 rounded-lg bg-slate-50 text-slate-950 hover:bg-slate-200 transition-all flex items-center gap-2 shadow-lg shadow-white/5 active:scale-[0.98]"
//             >
//               Visit Live Deployment
//               <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//             </a>

//             <a 
//               href="https://github.com" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="font-sans text-sm font-medium tracking-wide px-5 py-3 rounded-lg border border-slate-800 bg-[#0e152a]/40 text-slate-300 hover:border-slate-700 hover:text-white transition-all flex items-center gap-2 backdrop-blur-sm"
//             >
//               <Code2 className="h-4 w-4" />
//               Source Code
//             </a>
//           </div>

//         </div>

//         {/* 🎨 RIGHT COLUMN: MOCKUP / SIDE PREVIEW IMAGE */}
//         <div className="flex-1 w-full lg:max-w-xl group relative">
          
//           {/* Subtle Ambient Outer Glow behind the image frame */}
//           <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#818CF8]/20 to-transparent opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500" />
          
//           {/* The Visual Container Canvas Frame */}
//           <div className="relative overflow-hidden rounded-xl border border-slate-800/80 bg-[#0e152a]/60 p-2 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:border-[#818CF8]/30">
            
//             {/* Fake Application Window Header bar */}
//             <div className="flex items-center justify-between px-3 py-2 border-b border-slate-900 bg-slate-950/40 rounded-t-lg font-mono text-[10px] text-slate-500">
//               <div className="flex gap-1.5">
//                 <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
//                 <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
//                 <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
//               </div>
//               <span className="flex items-center gap-1"><Cpu className="h-3 w-3" /> network_preview.png</span>
//             </div>

//             {/* 📸 The Image Tag Frame */}
//             {/* Replace /project-mockup.png with your exact public asset screenshot path */}
//             <img 
//               src="/project-mockup.png" 
//               alt="AI Interface Generator Preview Workspace" 
//               className="w-full h-auto object-cover rounded-b-lg border-t border-slate-900 brightness-[0.85] group-hover:brightness-100 transition-all duration-500"
//               loading="lazy"
//             />

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }













// import React from "react";

// import { Code2, ArrowUpRight, Terminal, Cpu } from "lucide-react";

// export default function Projects() {
//   return (
//     <>

//       {/* 🌌 IMMERSIVE CARD CONTAINER (Horizontal on Laptop/Desktop Screens) */}
//       <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-16 w-full p-6 sm:p-10 lg:p-12 rounded-2xl border border-[#818CF8]  bg-gradient-to-b from-slate-900/60 to-slate-950/80 backdrop-blur-xl shadow-2xl relative group overflow-hidden">
        
//         {/* Subtle decorative inner corner glow inside the card container */}
//         <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none transition-opacity group-hover:opacity-80" />

//         {/* 💻 LEFT COLUMN: TECHNICAL TEXT SUITE */}
//         <div className="md:flex-1 flex flex-col justify-between space-y-6 lg:space-y-0">
          
//           <div className="space-y-4">
//             <h3 className="font-sans text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-slate-100 leading-none">
//               AI Interface Generator<span className="text-indigo-400 font-light">.</span>
//             </h3>

//             <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-400 max-w-xl font-normal tracking-wide">
//               A production-ready compiler engine designed to transform raw natural language prompt blocks into functional, fully-typed React component structures. Engineered utilizing highly-optimized syntax trees to eliminate interface generation bottlenecks.
//             </p>
//           </div>

//           {/* TECH ARCHITECTURE TOKENS & INTERACTION CONTAINER */}
//           <div className="space-y-6 pt-4 lg:pt-0">
//             {/* Tag Badges */}
//             <div className="flex flex-wrap gap-2">
//               {["Next.js 15", "TypeScript", "Tailwind v4", "Zustand"].map((tag, idx) => (
//                 <span 
//                   key={idx}
//                   className="font-mono text-[10px] font-medium px-2.5 py-1 rounded-md bg-slate-950 text-slate-400 border border-slate-800/70 tracking-wider shadow-inner"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Interaction Action Row */}
//             <div className="flex flex-wrap items-center gap-4">
//               <a 
//                 href="https://example.com" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="group font-sans text-xs font-bold tracking-wider uppercase px-5 py-3.5 rounded-lg bg-slate-50 text-slate-950 hover:bg-slate-200 transition-all flex items-center gap-2 shadow-md shadow-white/5 active:scale-[0.98]"
//               >
//                 <span>Live Deployment</span>
//                 <ArrowUpRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//               </a>

//               <a 
//                 href="https://github.com" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="font-sans text-xs font-semibold tracking-wider uppercase px-5 py-3.5 rounded-lg border border-slate-800/80 bg-slate-950/40 text-slate-400 hover:border-slate-700 hover:text-slate-200 transition-all flex items-center gap-2 backdrop-blur-sm active:scale-[0.98]"
//               >
//                 <Code2 className="h-3.5 w-3.5" />
//                 <span>Source Code</span>
//               </a>
//             </div>
//           </div>

//         </div>

//         {/* 🎨 RIGHT COLUMN: APPLICATION CANVAS WINDOW MOCKUP */}
//         <div className="flex-1 w-full lg:max-w-lg xl:max-w-xl self-center group/mockup relative">
          
//           {/* Subtle Ambient Outer Glow behind the image frame */}
//           <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-indigo-500/10 to-purple-500/5 opacity-40 blur-xl group-hover/mockup:opacity-70 transition-opacity duration-700" />
          
//           {/* The Visual Container Canvas Frame */}
//           <div className="relative overflow-hidden rounded-xl border border-slate-800/90 bg-slate-950/80 p-1.5 shadow-2xl transition-all duration-500 group-hover/mockup:border-indigo-500/30">
            
//             {/* Fake Application Window Header bar */}
//             <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-slate-900 bg-slate-950 font-mono text-[10px] text-slate-500 select-none">
//               <div className="flex gap-2">
//                 <span className="w-2.5 h-2.5 rounded-full bg-slate-800/80" />
//                 <span className="w-2.5 h-2.5 rounded-full bg-slate-800/80" />
//                 <span className="w-2.5 h-2.5 rounded-full bg-slate-800/80" />
//               </div>
//               <span className="flex items-center gap-1.5 text-slate-400/70 font-medium">
//                 <Cpu className="h-3 w-3 text-indigo-400/60" /> 
//                 network_preview.png
//               </span>
//             </div>

//             {/* 📸 The Image Tag Frame */}
//             <div className="relative overflow-hidden bg-slate-900 rounded-b-lg aspect-[16/10]">
//               <img 
//                 src="/project-mockup.png" 
//                 alt="AI Interface Generator Preview Workspace" 
//                 className="w-full h-full object-cover brightness-[0.9] group-hover/mockup:brightness-100 group-hover/mockup:scale-[1.01] transition-all duration-700 ease-out"
//                 loading="lazy"
//               />
//             </div>

//           </div>
//         </div>

//       </div>
//     </>
//   );
// }





import React from "react";
import { motion } from "framer-motion"; // 🌌 Imported Framer Motion
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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
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
              {heading1} <span className="text-indigo-400">{heading2}</span><span className="text-indigo-400 font-light">.</span>
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
                className="group font-sans text-xs font-bold tracking-wider uppercase px-5 py-3.5 rounded-lg bg-indigo-500 text-slate-100 hover:bg-indigo-600 transition-all flex items-center gap-2 shadow-md shadow-white/5 active:scale-[0.98]"
              >
                <span>Live Deployment</span>
                <ArrowUpRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-sans text-xs font-semibold tracking-wider uppercase px-5 py-3.5 rounded-lg border border-[#818CF8] bg-transparent text-slate-400 hover:border-slate-700 hover:text-slate-200 transition-all flex items-center gap-2 backdrop-blur-sm active:scale-[0.98]"
              >
                <Code2 className="h-3.5 w-3.5" />
                <span>Source Code</span>
              </a>
            </motion.div>
          </div>

        </div>

        {/* 🎨 RIGHT COLUMN: APPLICATION CANVAS WINDOW MOCKUP WITH HOVER TILT */}
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
                <Cpu className="h-3 w-3 text-indigo-400/60" /> 
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

      </motion.div>
    </div>
  );
}
