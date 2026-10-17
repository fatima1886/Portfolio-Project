

"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <motion.div 
      // 1. Initial state (hidden and 40px down)
      initial={{ opacity: 0, y: 40 }}
      // 2. Animate state (fades in and slides into place)
      animate={{ opacity: 1, y: 0 }}
      // 3. Smooth transition timing
      transition={{ 
        duration: 1, 
        delay: 0.5, // Delays slightly so it appears after your headline starts animating
        ease: [0.16, 1, 0.3, 1] // Premium ultra-smooth ease-out curve
      }}
      className="relative isolate mx-auto flex min-h-[470px] w-full max-w-[580px] items-center justify-center md:pt-20 "
    >

      {/* Background glow */}
      <div className="absolute -z-10 aspect-square w-[65%] rounded-full bg-[#818CF8]/20 blur-[80px]" />

      {/* Decorative orbit */}
      <div className="absolute h-[80%] w-[85%] -rotate-12 scale-y-75 rounded-[50%] border border-[#818CF8]/10">
        <span className="absolute right-[15%] top-[12%] size-2 rounded-full bg-[#22D3EE] shadow-[0_0_20px_#22D3EE]" />
      </div>

      {/* Main code editor */}
      <div className="animate-[float_6s_ease-in-out_infinite] relative z-10 w-[80%] overflow-hidden rounded-xl border border-[#818CF8]/40 bg-[#11192C] shadow-[0_24px_70px_#00000045]">

        {/* Window header */}
        <div className="flex items-center gap-3 border-b border-[#343B50] px-4 py-3.5 font-mono text-[11px] text-[#94A3B8]">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-red-400" />
            <span className="size-2 rounded-full bg-yellow-400" />
            <span className="size-2 rounded-full bg-emerald-400" />
          </div>

          <span>developer.tsx</span>
          <span className="ml-auto text-[#818CF8]">TSX</span>
        </div>

        {/* Code */}
        <div className="overflow-x-auto px-4 py-6 font-mono text-[11px] leading-[2.1] text-[#F1F5F9]">
          <div><span className="text-[#818CF8]">const</span> developer = {"{"}</div>
          <div className="pl-4">
            name: <span className="text-[#A5D6A7]">"Fatima Noor"</span>,
          </div>
          <div className="pl-4">
            role: <span className="text-[#A5D6A7]">"Frontend Developer"</span>,
          </div>
          <div className="pl-4">stack: [</div>
          <div className="pl-8 text-[#22D3EE]">"React",</div>
          <div className="pl-8 text-[#22D3EE]">"Next.js",</div>
          <div className="pl-8 text-[#22D3EE]">"TypeScript"</div>
          <div className="pl-4">],</div>
          <div className="pl-4">
            imgGenerator: <span className="text-[#F87171]">true</span>,
          </div>
          <div className="pl-4">
            learning: <span className="text-[#F87171]">true</span>,
          </div>
          <div className="pl-4">
            passion: <span className="text-[#A5D6A7]">"Creating"</span>
          </div>
          <div>{"};"}</div>
        </div>

        {/* Editor footer */}
        <div className="flex justify-between bg-[#151F35] px-4 py-2.5 font-mono text-[10px] text-[#94A3B8]">
          <span>UTF-8</span>
          <span>● Ready to build</span>
        </div>
      </div>

      {/* Floating terminal */}
      <div className="hidden animate-[float_5s_ease-in-out_infinite] absolute right-0 top-[9%] z-20 w-[205px] rounded-xl border border-[#343B50] bg-[#141D31] p-4 shadow-xl [animation-delay:-1.5s]">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-[#F1F5F9]">
          <span className="size-2 rounded-full bg-[#22D3EE] shadow-[0_0_10px_#22D3EE]" />
          Terminal
        </div>

        <p className="font-mono text-[10px] text-[#94A3B8]">
          <span className="text-[#22D3EE]">$</span> npm run build
        </p>

        <p className="mt-2 font-mono text-[10px] text-[#A5D6A7]">
          ✓ Build successful
        </p>
      </div>

      {/* Floating project card */}
      <div className="animate-[float_5s_ease-in-out_infinite] absolute bottom-[8%] left-0 z-20 flex items-center gap-3 rounded-xl border border-[#343B50] bg-[#141D31] p-3.5 shadow-xl [animation-delay:-3s]">
        <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#818CF8]/10 font-mono text-sm font-bold text-[#818CF8]">
          {"🤖"}
        </div>

        <div>
          <h3 className="text-[11px] font-semibold text-[#F1F5F9]">
            AI & UI Developer
          </h3>
          <p className="mt-1 text-[10px] text-[#94A3B8]">
            Generative web interfaces.
          </p>
        </div>
      </div>

      {/* Accent sparkle */}
      <div className="animate-pulse absolute left-[9%] top-[25%] size-2 rounded-full bg-[#22D3EE] shadow-[0_0_20px_#22D3EE]" />
    </motion.div>
  );
}

