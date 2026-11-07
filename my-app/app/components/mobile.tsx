




"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, ArrowUpRight, Cpu } from "lucide-react";

interface MobileProjectCardProps {
  heading1: string;
  heading2: string;
  para: string;
  array: string[];
  github: string;
  versel: string;
  img: string;
  cardBg?: string;     // Custom card background class (e.g. "bg-(--muted-teal)" or "bg-[#EDF5F4]")
  overlayBg?: string;  // Optional custom frosted overlay tint over the background image
}

export default function MobileProjectCard({
  heading1,
  heading2,
  para,
  array,
  github,
  versel,
  img,
  cardBg = "bg-(--muted-teal)",
  overlayBg = "bg-(--pale-oak)/65",
}: MobileProjectCardProps) {
  // Ensures local files like "resume.png" resolve cleanly to "/resume.png" for Next.js <Image />
  const imageSrc =
    img.startsWith("/") || img.startsWith("http://") || img.startsWith("https://")
      ? img
      : `/${img}`;

  return (
    <div className="mx-auto w-full overflow-x-clip px-4 py-5 sm:px-6 lg:hidden">
      <motion.div
        // Slides from right side into center
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className={`relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-(--muted-teal)/50 ${cardBg} p-6 shadow-[0_20px_50px_-12px_rgba(43,65,65,0.22)] ring-1 ring-(--dark-slate-grey)/10 sm:p-8`}
      >
        {/* Low-Opacity Project Image in Background */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            aria-hidden="true"
            className="scale-105 object-cover object-top opacity-45"
          />
          {/* Light frosted tint so dark text stays sharp while image shows through */}
          <div className={`absolute inset-0 ${overlayBg} backdrop-blur-[1px]`} />
        </div>

        {/* Crisp Foreground Content */}
        <div className="relative z-10 space-y-5">
          {/* Small Top Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-(--dark-slate-grey)/15 bg-white/55 px-3 py-1 font-mono text-[10px] font-semibold tracking-wider uppercase text-(--dark-slate-grey)/85 backdrop-blur-sm">
            <Cpu className="h-3 w-3 text-[#087E96]" />
            <span>Featured Build</span>
          </div>

          {/* Heading */}
          <h3 className="font-sans text-2xl font-black leading-tight tracking-tight text-(--dark-slate-grey) sm:text-3xl">
            {heading1}{" "}
            <span className="text-[#087E96]">{heading2}</span>
            <span className="font-light text-(--turquoise-surf)">.</span>
          </h3>

          {/* Paragraph */}
          <p className="font-sans text-sm leading-relaxed text-(--dark-slate-grey)/90">
            {para}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {array.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-lg border border-(--dark-slate-grey)/15 bg-white/60 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider text-(--dark-slate-grey) backdrop-blur-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center">
            <a
              href={versel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-(--dark-slate-grey) px-5 py-3.5 font-sans text-xs font-bold tracking-wider uppercase text-(--pale-oak) shadow-md shadow-(--dark-slate-grey)/20 transition-all active:scale-[0.98]"
            >
              <span>Live Deployment</span>
              <ArrowUpRight className="h-4 w-4 text-(--neon-ice)" />
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[6px] border border-(--dark-slate-grey)/30 bg-white/65 px-5 py-3.5 font-sans text-xs font-bold tracking-wider uppercase text-(--dark-slate-grey) backdrop-blur-sm transition-all active:scale-[0.98]"
            >
              <Code2 className="h-4 w-4 text-[#087E96]" />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
