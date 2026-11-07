

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Sparkles } from "lucide-react";

const STAR_COUNT = 40;

interface StarConfig {
  id: number;
  size: number;
  initialX: number;
  driftX: number;
  duration: number;
  delay: number;
  isAccent: boolean;
}

export function Contact() {
  const [issubmit, setissubmit] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [stars, setStars] = useState<StarConfig[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: STAR_COUNT }).map((_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 1,
      initialX: Math.random() * 100,
      driftX: (Math.random() - 0.5) * 40,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * -20,
      isAccent: i % 3 === 0, // Every 3rd particle glows in Neon Ice
    }));
    setStars(generatedStars);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsloading(true);
    setissubmit(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      const result = await response.json();
      if (result.success) {
        setissubmit(true);
        form.reset();
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsloading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-(--dark-slate-grey) px-4 py-20 text-(--pale-oak) md:px-8"
    >
      {/* ================= STARFIELD MOVING BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{
              left: `${star.initialX}%`,
              top: "105%",
              opacity: 0,
            }}
            animate={{
              top: ["105%", "-5%"],
              x: [0, star.driftX],
              opacity: [0, 0.85, 0.85, 0],
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
            className={`absolute rounded-full ${
              star.isAccent
                ? "bg-(--neon-ice) shadow-[0_0_10px_var(--neon-ice)]"
                : "bg-(--pale-oak) shadow-[0_0_8px_var(--pale-oak)]"
            }`}
          />
        ))}

        {/* Ambient Palette Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-(--turquoise-surf)/10 blur-[130px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-(--neon-ice)/10 blur-[130px]" />
      </div>
      {/* ============================================================== */}

      {/* Main Form Container Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-xl rounded-3xl border border-(--muted-teal)/35 bg-[#1B2B2B]/85 p-7 sm:p-10 shadow-[0_28px_70px_-15px_rgba(0,0,0,0.55)] ring-1 ring-white/5 backdrop-blur-xl"
      >
        {/* Top Monospace Tag */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-(--turquoise-surf)/30 bg-(--turquoise-surf)/10 px-3 py-1 font-mono text-[10px] font-semibold tracking-widest uppercase text-(--neon-ice)">
          <Sparkles className="h-3 w-3 text-(--turquoise-surf)" />
          <span>// Let&apos;s Collaborate</span>
        </div>

        {/* Heading matching your Hero typography */}
        <h2 className="font-sans text-3xl sm:text-4xl font-black tracking-tight text-(--pale-oak)">
          Get In{" "}
          <span className="font-serif italic text-(--turquoise-surf)">
            Touch
          </span>
          <span className="font-light text-(--neon-ice)">.</span>
        </h2>

        <p className="mt-2 mb-8 font-sans text-sm leading-relaxed text-(--muted-teal)">
          Have a project idea, role opportunity, or question? Send a message below and I&apos;ll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-mono text-xs font-semibold tracking-wider uppercase text-(--pale-oak)/90"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              disabled={isloading}
              placeholder="Your name"
              className="w-full rounded-xl border border-(--muted-teal)/30 bg-[#142020]/90 px-4 py-3.5 text-sm text-(--pale-oak) placeholder-(--muted-teal)/45 transition-all focus:border-(--turquoise-surf) focus:outline-none focus:ring-2 focus:ring-(--neon-ice)/25 disabled:opacity-50"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-mono text-xs font-semibold tracking-wider uppercase text-(--pale-oak)/90"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              disabled={isloading}
              placeholder="email@example.com"
              className="w-full rounded-xl border border-(--muted-teal)/30 bg-[#142020]/90 px-4 py-3.5 text-sm text-(--pale-oak) placeholder-(--muted-teal)/45 transition-all focus:border-(--turquoise-surf) focus:outline-none focus:ring-2 focus:ring-(--neon-ice)/25 disabled:opacity-50"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-mono text-xs font-semibold tracking-wider uppercase text-(--pale-oak)/90"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              disabled={isloading}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-xl border border-(--muted-teal)/30 bg-[#142020]/90 px-4 py-3.5 text-sm text-(--pale-oak) placeholder-(--muted-teal)/45 transition-all focus:border-(--turquoise-surf) focus:outline-none focus:ring-2 focus:ring-(--neon-ice)/25 disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={isloading}
            className="mt-2 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-(--turquoise-surf) px-6 py-4 font-sans text-xs font-bold tracking-widest uppercase text-(--dark-slate-grey) shadow-lg shadow-(--turquoise-surf)/20 ring-1 ring-(--neon-ice)/40 transition-all duration-200 hover:bg-(--neon-ice) hover:shadow-(--neon-ice)/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isloading ? (
              <span>Sending Message...</span>
            ) : issubmit ? (
              <>
                <CheckCircle2 className="h-4 w-4 stroke-[2.25]" />
                <span>Message Sent</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="h-3.5 w-3.5 stroke-[2.25]" />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}


