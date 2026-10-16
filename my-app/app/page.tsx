'use client'
import Herotext from "./components/herotext";
import HeroVisual from "./components/herovector";
import StarBackground from "./components/starbackground";
import Projects from "./components/projects"
export default function Home() {


  return (
    <div className="bg-[#0B1020] ">
    
        <section 
      id="home" 
      className="relative flex flex-col md:flex-row items-center px-12 md:pt-0 md:pb-20 h-fit w-screen bg-slate-950 overflow-hidden"
    >
      {/* 1. The Background Layers (Sitting at z-0) */}
      <StarBackground />
      
      {/* Optional: Add a subtle deep blue gradient glow in the corner to make the stars pop */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* 2. Your Visual Content Layers (Forced on top via utility classes or within components) */}
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full justify-between">
        <Herotext />
        <HeroVisual />
      </div>
    </section>
         <section id="projects">

     <Projects/>

         </section>
   
    </div>
  );
}






// 'use client'


// import Particles from '@/components/Particles';

// import React from 'react'

// const page = () => {
//   return (
//     <div style={{ width: '100%', height: '600px', position: 'relative' }}>
//   <Particles
//     particleColors={["#ffffff","#ffffff","#ffffff"]}
//     particleCount={200}
//     particleSpread={10}
//     speed={0.1}
//     particleBaseSize={100}
//     glow={0.5}
//     twinkle={0.3}
//     moveParticlesOnHover
//     hoverEffect="parallax"
//     sizeRandomness={1}
//     shape="circle"
//     depthOfField={0}
//     connections={false}
//     connectionDistance={110}
//     particleHoverFactor={1}
//     hoverRadius={140}
//     drift="none"
//     driftSpeed={1}
//     alphaParticles={false}
//     disableRotation={false}
//     cameraDistance={20}
//     variation={0}
//     opacity={1}
//     clickBurst
//     intro
//     lightMode={false}
// />
// </div>
//   )
// }

// export default page





// "use client";


// import Particles from "@/components/Particles";


// export default function Home() {
//   return (
//     <main className="relative min-h-screen overflow-hidden bg-[#08050f]">
//       {/* Animated background */}
//       <div className="absolute inset-0 z-0">
//         <Particles
//           particleColors={["#929292", "#ffffff", "#929292"]}
//           particleCount={200}
//           particleSpread={10}
//           speed={0.1}
//           particleBaseSize={80}
//           glow={0.35}
//           twinkle={0.3}
//           moveParticlesOnHover
//           hoverEffect="parallax"
//           sizeRandomness={1}
//           shape="circle"
//         />
//       </div>

//       {/* Dark overlay for text visibility */}
//       <div className="pointer-events-none absolute inset-0 z-[1] bg-black/20" />

//       {/* Page content */}
//       <div className="relative z-10">
//         {/* <Navbar /> */}

//         <section className="flex min-h-screen flex-col items-center justify-center px-5 pt-24">
//           {/* <div className="mb-7 flex items-center rounded-full border border-white/10 bg-[#17101f]/70 p-1 pr-4 text-sm text-white/55 backdrop-blur-xl">
//             <span className="mr-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-black">
//               NEW
//             </span>

//             <span>Just shipped v2.0</span>
//           </div> */}

//           {/* <h1 className="max-w-3xl text-center text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
//             Molten violet caustics
//             <br className="hidden sm:block" />
//             that flow like liquid.
//           </h1> */}

//           {/* <HeroButtons /> */}
//         </section>
//       </div>
//     </main>
//   );
// }





// 'use client'

// import Herotext from "./components/herotext";
// import HeroVisual from "./components/herovector";
// import Particles from "@/components/Particles";

// export default function Home() {
//   return (
//     // ⚡ FORCE COMPILER LAYER TO OVERRIDE WHITE ROOT TOKENS
//     <div className="bg-[#0B1020] min-h-screen w-full relative !bg-[#0B1020]">
      
//       {/* 🌌 DUST PARTICLES ENGINE BOUNDARY: Pinned softly over the navy core framework */}
//       <div className="pointer-events-none absolute inset-0 z-0 w-full h-[750px] overflow-hidden mix-blend-screen opacity-70">
//         <Particles
//           particleColors={["#ffffff", "#3b82f6", "#9333ea"]}
//           particleCount={160}
//           particleSpread={8}
//           speed={0.12}
//           particleBaseSize={80}
//           glow={0.4}
//           twinkle={0.3}
//           moveParticlesOnHover={true}
//           hoverEffect="parallax"
//           sizeRandomness={1}
//           shape="circle"
//         />
//       </div>

//       {/* 💻 GRAPHICS SUITE INTERACTION LAYER (Forced layout spatial frame via z-10) */}
//       <div className="relative z-10 w-full">
//         <div className="relative overflow-hidden bg-transparent">
//           <section id="home" className="flex flex-col md:flex-row items-center px-12 pt-10 md:pb-20 h-fit w-full">
//             <Herotext />
//             <HeroVisual />
//           </section>
//         </div>

//         <section id="projects" className="h-[100vh] w-full bg-blue-400">
//           your projects
//         </section>
//       </div>

//     </div>
//   );












// 'use client' // ⚠️ MUST remain at absolute line 1

// import React from "react";
// import Herotext from "./components/herotext";
// import HeroVisual from "./components/herovector";
// import Particles from "@/components/Particles";

// export default function Home() {
//   return (
//     // 1. main wrapper setup with relative sizing guidelines
//     <div className="bg-[#0B1020] min-h-screen w-full relative overflow-x-hidden">
      
//       {/* 🌌 2. PARTICLES CANVAS WRAPPER (Pinned smoothly behind content) */}
//       <div className="pointer-events-none absolute inset-0 z-0 w-full h-[700px] overflow-hidden">
//         <Particles
//           particleColors={["#ffffff", "#3b82f6", "#9333ea"]} // Matches your white, blue, and purple code styling highlights
//           particleCount={180}
//           particleSpread={8}
//           speed={0.1}
//           particleBaseSize={80}
//           glow={0.3}
//           twinkle={0.2}
//           moveParticlesOnHover={true}
//           hoverEffect="parallax"
//           sizeRandomness={1}
//           shape="circle"
//           opacity={0.6} // Subtly dimmed so it doesn't distract from text legibility
//         />
//       </div>

//       {/* 💻 3. CONTENT INTERACTIVES LAYER (Elevated layout space context via z-10) */}
//       <div className="relative z-10 w-full">
//         <div className="relative bg-transparent">
//           <section id="home" className="flex flex-col md:flex-row items-center px-12 pt-10 pb-20 max-w-7xl mx-auto gap-8">
            
//             {/* Left side text module context */}
//             <div className="flex-1">
//               <Herotext />
//             </div>

//             {/* Right side interactive terminal codes/graphics */}
//             <div className="flex-1 flex justify-center md:justify-end">
//               <HeroVisual />
//             </div>

//           </section>
//         </div>

//         {/* PROJECTS ROW TRANSITION SECTION */}
//         <section id="projects" className="h-[100vh] w-full bg-blue-400">
//           your projects
//         </section>
//       </div>

//     </div>
//   );
// }






// 'use client'

// import Herotext from "./components/herotext";
// import HeroVisual from "./components/herovector";
// import Particles from "@/components/Particles";

// export default function Home() {
//   return (
//     <div className="bg-[#0B1020] w-full min-h-screen">
//         <Particles
//             particleColors={["#252020", "#3b82f6", "#9333ea"]}
//             particleCount={150}
//             particleSpread={10}
//             speed={0.15}
//             particleBaseSize={80}
//             moveParticles={true}

          
//           />
//       <div className="relative overflow-hidden bg-[#0B1020]">
        
//         {/* 🌌 FIXED BACKGROUND CONTAINER: Forces particles to spread across the entire Hero layout context */}
//         <div className="pointer-events-none absolute inset-0 z-0 w-full h-full">
        
//         </div>

//         {/* Moving Ambient Glow Over the Grid */}
//         <div />
        
//         {/* 💻 CONTENT SECTIONS LAYER: Force-elevated to z-10 so graphics sit in front of the floating canvas */}
//         <section id="home" className="relative z-10 flex flex-col md:flex-row items-center px-12 md:pt-0 md:pb-20 h-fit w-full">
//           <Herotext />
//           <HeroVisual />
//         </section>
//       </div>

//       <section id="projects" className="relative z-10 h-[100vh] w-full bg-blue-400">
//         your projects
//       </section>
//     </div>
//   );
// }



// 'use client' // ⚠️ MUST remain at the absolute line 1 boundary

// import Herotext from "./components/herotext";
// import HeroVisual from "./components/herovector";
// import Particles from "@/components/Particles";

// export default function Home() {
//   return (
//     <div className="bg-[#0B1020] min-h-screen w-full relative">
      
    
    

// <div style={{ width: '100%', height: '600px', position: 'relative' }}>
//   <Particles
//     particleColors={["#ffffff","#ffffff","#ffffff"]}
//     particleCount={200}
//     particleSpread={10}
//     speed={0.1}
//     particleBaseSize={100}
//     glow={0.5}
//     twinkle={0.3}
//     moveParticlesOnHover
//     hoverEffect="parallax"
//     sizeRandomness={1}
//     shape="circle"
//     depthOfField={0}
//     connections={false}
//     connectionDistance={110}
//     particleHoverFactor={1}
//     hoverRadius={140}
//     drift="none"
//     driftSpeed={1}
//     alphaParticles={false}
//     disableRotation={false}
//     cameraDistance={20}
//     variation={0}
//     opacity={1}
//     clickBurst
//     intro
//     lightMode={false}
// />
// </div>

//       {/* 💻 GRAPHICS SUITE LAYER (Forced layout space stack context via z-10) */}
//       <div className="relative z-10">
//         <div className="relative overflow-hidden bg-transparent">
//           <section id="home" className="flex flex-col md:flex-row items-center px-12 md:pt-0 md:pb-20 h-fit w-full">
//             <Herotext />
//             <HeroVisual />
//           </section>
//         </div>

//         <section id="projects" className="h-[100vh] w-full bg-blue-400">
//           your projects
//         </section>
//       </div>

//     </div>
//   );
// }




// 'use client' // ⚠️ MUST remain at the absolute line 1 boundary

// import Herotext from "./components/herotext";
// import HeroVisual from "./components/herovector";
// import Particles from "@/components/Particles";

// export default function Home() {
//   return (
//     <div className="bg-[#0B1020] min-h-screen w-full relative overflow-x-hidden">
      
//       {/* 🌌 FULL SECTION BACKGROUND WRAPPER (Fixed Layering) */}
//       <div 
//         className="pointer-events-none absolute inset-0 z-0 w-full"
//         style={{ height: '600px', overflow: 'hidden' }}
//       >
//         <Particles
//           particleColors={["#221818","#ffffff","#ffffff"]}
//           particleCount={200}
//           particleSpread={10}
//           speed={0.1}
//           particleBaseSize={100}
//           glow={0.5}
//           twinkle={0.3}
//           moveParticlesOnHover
//           hoverEffect="parallax"
//           sizeRandomness={1}
//           shape="circle"
//           depthOfField={0}
//           connections={false}
//           connectionDistance={110}
//           particleHoverFactor={1}
//           hoverRadius={140}
//           drift="none"
//           driftSpeed={1}
//           alphaParticles={false}
//           disableRotation={false}
//           cameraDistance={20}
//           variation={0}
//           opacity={1}
//           clickBurst
//           intro
//           lightMode={false}
//         />
//       </div>

//       {/* 💻 GRAPHICS SUITE LAYER (Elevated text and vectors via z-10) */}
//       <div className="relative z-10 w-full">
//         <div className="relative overflow-hidden bg-transparent"  >
        
//           <section id="home" className="flex flex-col md:flex-row items-center px-12 md:pt-0 md:pb-20 h-fit w-full" 
//           >  <Particles
//           particleColors={["#221818","#551919","#4e1111"]}
//           particleCount={200}
//           particleSpread={10}
//           speed={0.1}
//           particleBaseSize={100}
//           glow={0.5}
//           twinkle={0.3}
//           moveParticlesOnHover
//           hoverEffect="parallax"
//           sizeRandomness={1}
//           shape="circle"
//           depthOfField={0}
//           connections={false}
//           connectionDistance={110}
//           particleHoverFactor={1}
//           hoverRadius={140}
//           drift="none"
//           driftSpeed={1}
//           alphaParticles={false}
//           disableRotation={false}
//           cameraDistance={20}
//           variation={0}
//           opacity={1}
//           clickBurst
//           intro
//           lightMode={false}
//         />
//             <Herotext />
//             <HeroVisual />
//           </section>
//         </div>

//         <section id="projects" className="h-[100vh] w-full bg-blue-400">
//           your projects
//         </section>
//       </div>

//     </div>
//   );
// }

