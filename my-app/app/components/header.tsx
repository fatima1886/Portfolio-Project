"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // Import the official Next.js Link component

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define links as objects containing both the display label and the target section ID
  const navLinks = [
    { label: 'Home', id: '#home' },
    { label: 'Projects', id: '#projects' },
    { label: 'Skills', id: '#skills' },
    { label: 'About', id: '#about' },
    { label: 'Contact', id: '#contact' }
  ];

  return (
    <header className="relative w-full  backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Logo links back to the top of the home page */}
        <Link  href="#home" className="text-xl font-semibold  tracking-tight text-orange-400 hover:opacity-80 transition-opacity">
          <span className='text-emerald-400 sans-serif'>fatima</span>.dev()
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-[#F1F5F9]">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link 
                  href={link.id} 
                  className="cursor-pointer  hover:text-emerald-400 transition-colors py-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Toggle Button (Mobile Only) */}
        <button
          onClick={toggleMenu}
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-200 p-2 text-slate-600 md:hidden hover:bg-slate-50 transition-colors"
          aria-label="Toggle navigation menu"
        >
          <span className={`h-0.5 w-5 bg-current transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-current transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation Dropdown Overlay */}
      <div
        className={`absolute top-full left-0 w-full border-b border-slate-200 bg-[#0B1020] transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'
        }`}
      >
        <nav className="px-6 py-6">
          <ul className="flex flex-col gap-4 text-base font-medium text-emerald-400">
            {navLinks.map((link) => (
              <li key={link.id} className="w-full">
                <Link 
                  href={link.id}
                  onClick={() => setIsOpen(false)} // Closes mobile menu smoothly upon picking a destination section
                  className="block w-full cursor-pointer py-2 border-b border-slate-50 last:border-0  transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
