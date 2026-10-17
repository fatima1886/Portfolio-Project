"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

export const DynamicRoleBadge = () => {
  const roles = [
    "Frontend Developer",
    "React Developer",
    "Next.js Engineer",
    "UI/UX Enthusiast"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    
    // Determine speed: deleting is faster than typing
    let speed = isDeleting ? 30 : 80; 

    // If it's fully typed, pause before deleting
    if (!isDeleting && currentText === fullText) {
      speed = 2000; // Hold the full text for 2 seconds
      const timeout = setTimeout(() => setIsDeleting(true), speed);
      return () => clearTimeout(timeout);
    }

    // If it's fully deleted, move to the next word
    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    // Handle typing and deleting logic
    const timeout = setTimeout(() => {
      setCurrentText(
        isDeleting 
          ? fullText.substring(0, currentText.length - 1) 
          : fullText.substring(0, currentText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center text-[12px] md:text-[12px] font-mono text-cyan-400 bg-cyan-950/20   px-2 py-2 rounded-full tracking-wide backdrop-blur-sm h-[38px]"
    >
        <span className='w-2 h-2 rounded-full bg-cyan-400 mr-2'></span>
      <span className="opacity-60 mr-1.5">//</span> 
      
      <span>{currentText}</span>
      
      {/* Blinking cursor for the typing effect */}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[2px] h-[1em] ml-1 bg-cyan-400"
      />
    </motion.div>
  );
};
