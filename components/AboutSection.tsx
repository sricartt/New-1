'use client';

import React from 'react';
import Image from 'next/image';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none z-10"
    >
      {/* Decorative 3D Images */}
      {/* Top-Left Moon Icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] aspect-square z-0"
      >
        <Image
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon Decor"
          fill
          sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 210px"
          className="object-contain pointer-events-none select-none"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* Bottom-Left 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] aspect-square z-0"
      >
        <Image
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Object Decor"
          fill
          sizes="(max-width: 640px) 100px, (max-width: 768px) 140px, 180px"
          className="object-contain pointer-events-none select-none"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* Top-Right Lego Icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] aspect-square z-0"
      >
        <Image
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego Decor"
          fill
          sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 210px"
          className="object-contain pointer-events-none select-none"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* Bottom-Right 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] aspect-square z-0"
      >
        <Image
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Group Decor"
          fill
          sizes="(max-width: 640px) 130px, (max-width: 768px) 170px, 220px"
          className="object-contain pointer-events-none select-none"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* About Content */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 
            style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight mb-10 sm:mb-14 md:mb-16"
          >
            About me
          </h2>
        </FadeIn>

        <div className="w-full max-w-[560px] mx-auto text-[#D7E2EA] font-medium leading-relaxed mb-16 sm:mb-20 md:mb-24">
          <AnimatedText
            text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
            className="text-[clamp(1rem, 2vw, 1.35rem)]"
          />
        </div>

        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
