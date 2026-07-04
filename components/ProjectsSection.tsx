'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'motion/react';
import LiveProjectButton from './LiveProjectButton';
import FadeIn from './FadeIn';

const PROJECTS = [
  {
    num: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    col1Image1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    num: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    col1Image1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Image2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    num: '03',
    category: 'Client',
    name: 'Solaris Digital',
    col1Image1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Image2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 pb-32 relative z-30 select-none px-5 sm:px-8 md:px-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Title */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          >
            Project
          </h2>
        </FadeIn>

        {/* Project Stacking Cards */}
        <div className="w-full flex flex-col gap-10 md:gap-20">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={i}
              totalCards={PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof PROJECTS[number];
  index: number;
  totalCards: number;
}

function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Tracks scroll progress of the individual card element relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Calculate targetScale: 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  // Animate from scale 1 down to targetScale as we scroll past the card
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] sm:h-[80vh] flex items-start justify-center sticky"
      style={{
        top: `calc(96px + ${index * 28}px)`, // Sticky stacking offset
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] max-w-5xl mx-auto"
      >
        {/* Top Info Row */}
        <div className="flex justify-between items-center gap-4 border-b border-[#D7E2EA]/15 pb-4 md:pb-5">
          <div className="flex items-center gap-3 sm:gap-5">
            <span
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
              className="font-black text-[#D7E2EA] leading-none shrink-0"
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-[9px] sm:text-[11px] font-light">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-semibold uppercase text-xs sm:text-base md:text-lg">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Bottom Showcase Row */}
        <div className="grid grid-cols-10 gap-3 sm:gap-4 md:gap-5 flex-1 mt-4 sm:mt-5 md:mt-6 items-stretch overflow-hidden">
          {/* Left Side (40% space) */}
          <div className="col-span-4 flex flex-col gap-3 sm:gap-4 md:gap-5 justify-between">
            <div
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-zinc-900 border border-white/5 shrink-0"
            >
              <Image
                src={project.col1Image1}
                alt={`${project.name} Rendering 1`}
                fill
                sizes="(max-width: 640px) 40vw, (max-width: 1024px) 300px, 400px"
                className="object-cover pointer-events-none"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-zinc-900 border border-white/5 shrink-0"
            >
              <Image
                src={project.col1Image2}
                alt={`${project.name} Rendering 2`}
                fill
                sizes="(max-width: 640px) 40vw, (max-width: 1024px) 300px, 400px"
                className="object-cover pointer-events-none"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Side (60% space) */}
          <div className="col-span-6 relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-zinc-900 border border-white/5">
            <Image
              src={project.col2Image}
              alt={`${project.name} Full Showcase`}
              fill
              sizes="(max-width: 640px) 60vw, (max-width: 1024px) 500px, 600px"
              className="object-cover pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
