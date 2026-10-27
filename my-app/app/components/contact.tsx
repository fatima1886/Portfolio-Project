


"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 1. Generate a fixed array of random star data configurations
// We do this outside the component or with useEffect so it doesn't break during server render
const STAR_COUNT = 40;

export function Contact() {
    const [issubmit, setissubmit] = useState(false);
    const [isloading, setIsloading] = useState(false);
    const [stars, setStars] = useState<any[]>([]);

    // 2. Initialize star properties only on the client side to avoid Next.js hydration issues
    useEffect(() => {
        const generatedStars = Array.from({ length: STAR_COUNT }).map((_, i) => ({
            id: i,
            size: Math.random() * 3 + 1, // Star diameters between 1px and 4px
            initialX: Math.random() * 100, // Percentage width position
            initialY: Math.random() * 100, // Percentage height position
            driftX: (Math.random() - 0.5) * 40, // Horizontal movement variance
            duration: Math.random() * 20 + 15, // Travel timeline between 15s and 35s
            delay: Math.random() * -20, // Negative delay so stars start mid-movement instantly
        }));
        setStars(generatedStars);
    }, []);

    async function handleSubmit(e: any) {
        e.preventDefault();
        setIsloading(true);
        setissubmit(false);

        try {
           const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                    name: e.target.name.value,
                    email: e.target.email.value,
                    message: e.target.message.value,
                }),
            });
            const result = await response.json();
            if (result.success) {
                console.log(result);
                setissubmit(true);
                e.target.reset();
            }
        } catch (error) {
            console.error("Submission failed:", error);
        } finally {
            setIsloading(false);
        }
    }

    return (
        <section className="bg-[#0B1020] text-white py-20 px-4 md:px-8 min-h-screen w-full flex items-center justify-center relative overflow-hidden isolate">
            
            {/* ================= STARFIELD MOVING BACKGROUND ================= */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        initial={{ 
                            left: `${star.initialX}%`, 
                            top: "105%", // Start below the visible viewport window area
                            opacity: 0 
                        }}
                        animate={{
                            top: ["105%", "-5%"], // Smoothly glide straight up offscreen
                            x: [0, star.driftX],   // Slight organic drifting sway left or right
                            opacity: [0, 0.8, 0.8, 0], // Soft fade-in and fade-out near screen edges
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: star.delay,
                        }}
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                        }}
                        // Tailwind classes to create realistic glowing planetary structures
                        className="absolute bg-white rounded-full shadow-[0_0_8px_#ffffff]"
                    />
                ))}

                {/* Ambient Deep Glow Orbs to give space depth to your starfield */}
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
            </div>
            {/* ============================================================== */}

            {/* Main Form Container Card */}
            <div className="max-w-xl w-full bg-[#131B31]/75 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl relative z-10">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    Get In Touch
                </h2>
                <p className="text-slate-400 mb-8 text-sm">
                    Have a question or want to work together? Drop a message below!
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                            Name
                        </label>
                        <input 
                            type="text" name="name" id="name" required disabled={isloading} placeholder="Your name" 
                            className="w-full bg-[#0B1020]/80 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-50"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                            Email
                        </label>
                        <input 
                            type="email" name="email" id="email" required disabled={isloading} placeholder="email@example.com" 
                            className="w-full bg-[#0B1020]/80 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-50"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                            Message
                        </label>
                        <textarea 
                            name="message" id="message" required rows={4} disabled={isloading} placeholder="Enter Message"
                            className="w-full bg-[#0B1020]/80 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none disabled:opacity-50"
                        ></textarea>
                    </div>

                    <button 
                        type="submit" disabled={isloading}
                        className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors shadow-lg shadow-indigo-600/20 active:scale-[0.98]"
                    >
                       {isloading ? 'Sending Message...' : issubmit ? 'Submitted ✔️' : 'Submit'}
                    </button>
                </form>
            </div>
        </section>
    );
}

