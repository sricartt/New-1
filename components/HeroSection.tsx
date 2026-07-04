'use client';

import React from 'react';
import Image from 'next/image';
import Magnet from './Magnet';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

export default function HeroSection() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 bg-[#0C0C0C] select-none">
      {/* 1. NAVBAR */}
      <FadeIn delay={0} y={-20} as="nav" className="w-full flex justify-between items-center pt-6 md:pt-8 z-30">
        <button
          onClick={() => handleScroll('about')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          About
        </button>
        <button
          onClick={() => handleScroll('services')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          Price
        </button>
        <button
          onClick={() => handleScroll('projects')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          Projects
        </button>
        <button
          onClick={() => handleScroll('contact')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          Contact
        </button>
      </FadeIn>

      {/* 2. HERO HEADING */}
      <div className="w-full flex-1 flex flex-col justify-center relative z-20">
        <div className="overflow-hidden w-full">
          <FadeIn delay={0.15} y={40} as="div">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.85] whitespace-nowrap w-full text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw] mt-6 sm:mt-4 md:-mt-5 text-center">
              Hi, i&apos;m anil jakkula
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* 3. HERO PORTRAIT (Centered Absolutely) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <div className="relative w-[280px] sm:w-[340px] md:w-[410px] lg:w-[490px] aspect-[1/1.25] overflow-hidden drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
              <Image
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="Anil Jakkula -- 3D Creator Portrait"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, (max-width: 1024px) 410px, 490px"
                className="object-contain object-bottom select-none pointer-events-none"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. BOTTOM BAR */}
      <div className="w-full flex justify-between items-end relative z-20">
        <FadeIn delay={0.35} y={20} className="text-left">
          <p 
            style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.35rem)' }}
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[150px] sm:max-w-[210px] md:max-w-[250px]"
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
