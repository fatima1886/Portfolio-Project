'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Define the shape of our Star data for TypeScript
interface Star {
  id: number;
  size: number;
  top: string;
  left: string;
  twinkleDuration: number;
  driftDuration: number;
  delay: number;
  pathX: number[];
  pathY: number[];
}

export default function StarBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate the random stars ONLY on the client-side after mount
    const generatedStars = Array.from({ length: 80 }).map((_, i) => {
      const pathX = [
        0,
        Math.random() * 50 - 25,
        Math.random() * 50 - 25,
        Math.random() * 50 - 25,
        0
      ];

      const pathY = [
        0,
        Math.random() * 50 - 25,
        Math.random() * 50 - 25,
        Math.random() * 50 - 25,
        0
      ];

      return {
        id: i,
        size: Math.random() * 2.2 + 0.8,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        twinkleDuration: Math.random() * 3 + 3,
        driftDuration: Math.random() * 15 + 20,
        delay: Math.random() * -20, // Seamless pre-warm animation timing
        pathX,
        pathY
      };
    });

    setStars(generatedStars);
  }, []);

  // Return nothing during Server-Side Rendering to completely avoid hydration mismatches
  if (stars.length === 0) return null;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            boxShadow: star.size > 1.8 ? "0 0 6px rgba(255, 255, 255, 0.7)" : "none",
          }}
          animate={{
            opacity: [0.1, 0.8, 0.3, 1, 0.1],
            x: star.pathX,
            y: star.pathY,
          }}
          transition={{
            opacity: {
              duration: star.twinkleDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay
            },
            x: {
              duration: star.driftDuration,
              repeat: Infinity,
              ease: "linear",
              delay: star.delay
            },
            y: {
              duration: star.driftDuration,
              repeat: Infinity,
              ease: "linear",
              delay: star.delay
            }
          }}
        />
      ))}
    </div>
  );
}
