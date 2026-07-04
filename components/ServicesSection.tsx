'use client';

import React from 'react';
import FadeIn from './FadeIn';

const SERVICES = [
  {
    num: '01',
    name: '3D Modeling',
    desc: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    num: '02',
    name: 'Rendering',
    desc: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    num: '03',
    name: 'Motion Design',
    desc: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    num: '04',
    name: 'Branding',
    desc: 'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    num: '05',
    name: 'Web Design',
    desc: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Services Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
            className="font-black uppercase leading-none tracking-tight text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28"
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES.map((service, i) => (
            <FadeIn
              key={service.num}
              delay={i * 0.1}
              y={30}
              className="w-full"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] w-full text-left">
                {/* Number */}
                <div
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  className="font-black text-[#0C0C0C] leading-none shrink-0 sm:min-w-[140px]"
                >
                  {service.num}
                </div>
                
                {/* Name + Description Stack */}
                <div className="flex flex-col flex-1 gap-2">
                  <h3
                    style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
                    className="font-semibold uppercase text-[#0C0C0C]"
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/70"
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
