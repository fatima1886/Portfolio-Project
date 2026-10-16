// "use client";
// import React from 'react';

// const Herotext = () => {
//   // Split your title name so we can apply precise staggered loading animations
//   const nameFirst = "Fatima";
//   const nameLast = "Noor";

//   return (
//     <div
//       className="flex flex-col items-start space-y-6 max-w-xl px-4 md:px-0"
//     >
//       {/* Role Badge Container */}
//       <div
//         className="inline-flex items-center text-sm md:text-base font-mono text-cyan-400 bg-cyan-950/20 border border-cyan-500/20 px-4 py-2 rounded-full tracking-wide backdrop-blur-sm"
//       >
//         <span className="opacity-60 mr-1.5">//</span> Frontend Developer
//       </div>

//       {/* Main Streaming Interactive Header */}
//       <h1
//         className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight leading-none"
//       >
//         <span className="block sm:inline">{nameFirst} </span>
//         <span className="text-indigo-400 block sm:inline drop-shadow-[0_0_15px_rgba(129,140,248,0.15)]">
//           {nameLast}
//         </span>
//       </h1>

//       {/* Catchy Supporting Value Subtitle */}
//       <p
//         className="text-base md:text-lg text-slate-400 leading-relaxed font-normal"
//       >
//         Building fast, interactive, and beautifully accessible user experiences with Next.js, React, and TypeScript.
//       </p>
//     </div>
//   );
// };

// export default Herotext;


// "use client";

// import React, { useEffect } from 'react';
// import { DynamicRoleBadge } from './roles';
// import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// export const StreamingSpan = ({ text, delay = 0, duration = 0.5 }: { text: string; delay?: number; duration?: number }) => {
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.floor(latest));
//   const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

//   useEffect(() => {
//     const controls = animate(count, text.length, {
//       type: "tween",
//       duration: duration,
//       delay: 0.4,
//       ease: "linear",
//     });
//     return () => controls.stop();
//   }, [text, count, delay, duration]);

//   return <motion.span>{displayText}</motion.span>;
// };

// const Herotext = () => {
//   const nameFirst = "Fatima";
//   const nameLast = "Noor";


//   return (
//     <div className="flex flex-col items-start space-y-6 max-w-xl px-4 pt-20 md:px-0">
      
//     <DynamicRoleBadge/>

//       {/* Main Streaming Interactive Header */}
//       <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight leading-none">
//         <span className="block sm:inline">
//           {/* Streams immediately after the layout renders */}
//           <StreamingSpan text={nameFirst} delay={0.2} duration={0.4} />{" "}
//         </span>
//         <span className="text-indigo-400 block sm:inline drop-shadow-[0_0_15px_rgba(129,140,248,0.15)]">
//           {/* Streams cleanly after the first name finishes */}
//           <StreamingSpan text={nameLast} delay={0.6} duration={0.3} />
//         </span>
//         {/* Blinking cursor that disappears gracefully after typing finishes */}
//         <motion.span
//           animate={{ opacity: [1, 0, 1] }}
//           transition={{ duration: 0.8, repeat: 4, ease: "linear" }}
//           exit={{ opacity: 0 }}
//           className="inline-block w-[4px] h-[0.85em] ml-2 bg-indigo-400 translate-y-1"
//         />
//       </h1>

//       {/* Catchy Supporting Value Subtitle */}
//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 1.1 }}
//         className="text-base md:text-lg text-slate-400 leading-relaxed font-normal pt-10"
//       >
//         Building fast, interactive, and beautifully accessible user experiences with Next.js, React, and TypeScript.
//       </motion.p>
//     </div>
//   );
// };

// export default Herotext;


"use client";

import React, { useEffect } from 'react';
import { DynamicRoleBadge } from './roles';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

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

  return (
    // 💡 REMOVED pt-20 from here (Handle major section-level padding on your parent main container instead)
    <div className="flex flex-col items-start space-y-4 md:space-y-5 max-w-xl pt-15 md:pt-3 md:px-0 select-none">
      
      <DynamicRoleBadge />

      {/* Main Streaming Interactive Header */}
      {/* <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold text-slate-100 tracking-tight leading-none min-h-[1.1em] flex items-center flex-wrap">
        <span className="block sm:inline">
          <StreamingSpan text={nameFirst} delay={0.2} duration={0.4} />{" "}
        </span>
        <span className="text-indigo-400 block sm:inline drop-shadow-[0_0_15px_rgba(129,140,248,0.15)] ml-2 sm:ml-3">
          <StreamingSpan text={nameLast} delay={0.6} duration={0.3} />
        </span>
    
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: 4, ease: "linear" }}
          className="inline-block w-[3px] md:w-[5px] h-[0.75em] ml-2 bg-indigo-400 align-middle"
        />
      </h1> */}

      {/* <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold md:font-extrabold tracking-tight  tracking-tight leading-none min-h-[1.1em] flex items-center flex-wrap">
 
  <span className="block  text-slate-100">
    {nameFirst.split("").map((char, index) => (
      <StaggeredLetter 
        key={`first-${index}`} 
        char={char} 
        index={index} 
        baseDelay={0.2} 
      />
    ))}
  </span>
 <br />


  <span className="pl-[-3] text-[#818CF8] block sm:inline drop-shadow-[0_0_15px_rgba(129,140,248,0.15)] ml-2 sm:ml-4 whitespace-nowrap">
    {nameLast.split("").map((char, index) => (
      <StaggeredLetter 
        key={`last-${index}`} 
        char={char} 
        index={index} 
        baseDelay={0.2} 
      
    ))}
  </span>
</h1> */}
<h1 className="text-4xl sm:text-5xl md:text-8xl font-bold md:font-extrabold tracking-tight leading-none min-h-[1.1em] flex flex-col items-start justify-center gap-2">
  
  {/* First Name Column - Forced into its own block row */}
  <span className="block text-slate-100 whitespace-nowrap">
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
  <span className="text-[#818CF8] block drop-shadow-[0_0_15px_rgba(129,140,248,0.15)] whitespace-nowrap">
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
        className="text-base md:text-lg text-slate-400 leading-relaxed font-normal pt-2"
      >
Every project I build starts with a simple question: How will a human feel when they interact with this screen? I treat development as a story told through smooth transitions, immediate load times, and perfect accessibility.   </motion.p>
    </div>
  );
};

export default Herotext;


