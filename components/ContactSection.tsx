'use client';

import React from 'react';
import { Mail, ArrowUp, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import FadeIn from './FadeIn';

export default function ContactSection() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="bg-[#0C0C0C] text-[#D7E2EA] pt-20 pb-12 px-6 md:px-10 border-t border-white/5 relative z-30 select-none overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
        {/* Call to action */}
        <FadeIn delay={0} y={30} className="text-center flex flex-col items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">
            Let&apos;s collaborate
          </span>
          <h2 className="hero-heading font-black uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none text-center">
            Start a project
          </h2>
          <p className="text-xs sm:text-sm text-[#D7E2EA]/70 max-w-sm mt-2 text-center">
            Driven by crafting striking and unforgettable projects. Reach out via email.
          </p>
        </FadeIn>

        {/* Email Address */}
        <FadeIn delay={0.15} y={30} className="w-full text-center">
          <a
            href="mailto:aniljacks3@gmail.com"
            className="group inline-flex items-center gap-3 text-lg sm:text-2xl md:text-3xl font-semibold hover:text-[#BBCCD7] transition-colors duration-300"
          >
            <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#BBCCD7] group-hover:scale-110 transition-transform duration-300" />
            <span className="border-b-2 border-transparent group-hover:border-[#BBCCD7] transition-all">
              aniljacks3@gmail.com
            </span>
          </a>
        </FadeIn>

        {/* Divider line */}
        <div className="w-full h-px bg-white/10" />

        {/* Footer bottom block */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-[#D7E2EA]/50 font-light">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-bold tracking-wider text-sm uppercase text-[#D7E2EA]">
              Anil Jakkula
            </span>
            <span>© {new Date().getFullYear()} Anil Jakkula. All rights reserved.</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 items-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 uppercase tracking-widest font-semibold hover:text-white transition-colors duration-200 text-[10px] cursor-pointer group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}
