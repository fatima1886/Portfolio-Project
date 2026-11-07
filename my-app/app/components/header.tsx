


"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: 'Home', id: '#home' },
    { label: 'Projects', id: '#projects' },
    { label: 'Skills', id: '#skills' },
    { label: 'About', id: '#about' },
    { label: 'Contact', id: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-(--dark-slate-grey)/15 bg-(--pale-oak) backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4">
        
        {/* Logo */}
        <Link 
          href="#home" 
          className="font-mono text-lg sm:text-xl font-bold tracking-tight text-[#087E96] transition-opacity hover:opacity-80"
        >
          <span className="font-sans text-(--dark-slate-grey)">fatima</span>.dev()
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7 text-sm font-semibold text-(--dark-slate-grey)">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link 
                  href={link.id} 
                  className="cursor-pointer py-2 transition-colors hover:text-[#087E96]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Toggle Button (Mobile Only - Matched to Palette) */}
        <button
          onClick={toggleMenu}
          type="button"
          className="flex h-9 w-9 sm:h-10 sm:w-10 flex-col items-center justify-center gap-1.5 rounded-lg   p-2 text-(--dark-slate-grey) transition-colors hover:border-(--dark-slate-grey)/40 hover:bg-(--dark-slate-grey)/10 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className={`h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation Dropdown Overlay (Matched to Palette) */}
      <div
        className={`absolute top-full left-0 w-full border-b border-(--muted-teal)/30 bg-(--dark-slate-grey)/98 backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'
        }`}
      >
        <nav className="mx-auto max-w-6xl px-5 py-5">
          <ul className="flex flex-col gap-1 text-sm font-medium text-(--pale-oak)">
            {navLinks.map((link) => (
              <li key={link.id} className="w-full">
                <Link 
                  href={link.id}
                  onClick={() => setIsOpen(false)}
                  className="block w-full cursor-pointer rounded-lg border-b border-(--muted-teal)/15 px-3 py-3 transition-colors last:border-0 hover:bg-(--muted-teal)/10 hover:text-(--neon-ice)"
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

