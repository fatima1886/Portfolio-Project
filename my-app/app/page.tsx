'use client'
import Herotext from "./components/herotext";
import HeroVisual from "./components/herovector";
import StarBackground from "./components/starbackground";
import Projects from "./components/projects"
import Projectsother from "./components/otherpro";
import Skills from "./components/skills";
import About from "./components/about";
import { Contact } from "./components/contact";
import React, { useRef } from "react";
import { Terminal, ChevronLeft, ChevronRight } from "lucide-react";
export default function Home() {


  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollSlider = (direction:any) => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth * 0.85; // Move by 85% of screen width
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#0B1020] overflow-x-hidden">
    
        <section 
      id="home" 
      className="relative flex flex-col md:flex-row items-center px-8 md:px-12 md:pt-0 md:pb-20 h-fit w-screen bg-slate-950 overflow-hidden"
    >
      {/* 1. The Background Layers (Sitting at z-0) */}
      <StarBackground />
      
      {/* Optional: Add a subtle deep blue gradient glow in the corner to make the stars pop */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* 2. Your Visual Content Layers (Forced on top via utility classes or within components) */}
      <div className="relative z-10 flex  flex-col md:flex-row items-center w-full justify-between pb-10">
        <Herotext />
        <HeroVisual />
      </div>
    </section>




 <section id="projects" className="pt-20 pb-0  px-4 sm:px-10 max-w-7xl mx-auto overflow-hidden">
      
      {/* 🌌 IMMERSIVE HEADER SECTION */}
      <div className="flex items-center justify-between mb-12 select-none">
        <div className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase flex items-center gap-2.5 text-cyan-400">
          <Terminal className="h-3.5 w-3.5 animate-pulse text-indigo-400" />
          <span>// Built Implementations</span>
        </div>

        {/* 🎛️ MOBILE-ONLY ARROW CONTROLS */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={() => scrollSlider("left")}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 active:bg-slate-800"
            aria-label="Previous Project"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button 
            onClick={() => scrollSlider("right")}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 active:bg-slate-800"
            aria-label="Next Project"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 🚀 RESPONSIVE TRACK LIST CONTAINER */}
      {/* 
        - Mobile: horizontal touch container with hidden scrollbars 
        - Desktop (md+): Switches right back into normal vertical stacking
      */}
      <div 
        ref={sliderRef}
        className="flex flex-row overflow-x-auto snap-x snap-mandatory md:flex-col gap-6 md:gap-16 w-full no-scrollbar pb-6 md:pb-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        
        {/* MILESTONE 01: AI STUDY ASSISTANT CARD SLOT */}
        <div className="md:hidden w-[88vw] sm:w-[80vw] md:w-full shrink-0 snap-center">
          <Projectsother 
            heading1="AI Study" 
            heading2="Assistant" 
            para="Driven by exam-season overwhelm, I built this AI Study Assistant to change how students learn. Bypassing heavy frameworks to master raw HTML, Tailwind CSS, and Vanilla JavaScript, my true breakthrough came when connecting to the OpenRouter API. By structuring complex asynchronous network streams, I engineered an ecosystem that instantly splits cluttered notes into automated smart summaries, memory flashcards, and practice quizzes." 
            array={['HTML5', 'Tailwind v4', 'JavaScript', 'OpenRouter API']} 
            github="https://github.com/fatima1886/AI-Resume-Builder-SaaS.git" 
            versel="https://ai-resume-builder-saa-s-g2da.vercel.app/" 
            img="ai-study-assistant.png" 
          />
        </div>

         <div className="hidden md:block sm:w-[80vw] md:w-full shrink-0 snap-center">
          <Projects 
            heading1="AI Study" 
            heading2="Assistant" 
            para="Driven by exam-season overwhelm, I built this AI Study Assistant to change how students learn. Bypassing heavy frameworks to master raw HTML, Tailwind CSS, and Vanilla JavaScript, my true breakthrough came when connecting to the OpenRouter API. By structuring complex asynchronous network streams, I engineered an ecosystem that instantly splits cluttered notes into automated smart summaries, memory flashcards, and practice quizzes." 
            array={['HTML5', 'Tailwind v4', 'JavaScript', 'OpenRouter API']} 
            github="https://github.com/fatima1886/AI-study-assistant-.git" 
            versel="https://ai-study-assistant-src-seven.vercel.app/" 
            img="ai-study-assistant.png" 
          />
        </div>

        {/* MILESTONE 02: AI RESUME BUILDER CARD SLOT */}
        <div className=" w-[88vw] sm:w-[80vw] md:w-full shrink-0 snap-center">
          <Projectsother 
            heading1="AI Resume" 
            heading2="Builder" 
            para="I built this AI Resume Architect because traditional application tools are rigid and broken. Turning to Next.js, I first integrated Clerk to secure personal account infrastructure. From there, I mastered nested React state states to ensure that user inputs seamlessly materialize onto a live, print-ready document preview, while a custom AI assistant tracks inputs to rewrite bullets into career headlines." 
            array={['Next.js 15', 'TypeScript', 'Clerk Auth', 'Tailwind CSS']} 
            github="https://github.com/fatima1886/AI-Resume-Builder-SaaS.git" 
            versel="https://ai-resume-builder-saa-s-g2da.vercel.app/" 
            img="resume.png" 
          />
        </div>

      </div>
    </section>

   <section id="skills">
    <Skills/>
   </section>


<section id="about" className="px-4">
  <About/>
</section>
<section id="contact">
    <Contact/>
   </section>
   
    </div>
  );
}






