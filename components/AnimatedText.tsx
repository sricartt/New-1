'use client';

import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import React, { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Custom scroll container-based progress tracker
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');
  const totalChars = chars.length;

  return (
    <p
      ref={containerRef}
      className={`relative flex flex-wrap justify-center text-center leading-relaxed select-none ${className}`}
    >
      {chars.map((char, index) => {
        // Staggered calculation with smooth overlap
        const start = index / totalChars;
        // Introduce a small overlap of 0.1 for buttery transitions
        const end = Math.min(1, start + 0.1);

        return (
          <Character
            key={index}
            char={char}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </p>
  );
}

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}

function Character({ char, progress, start, end }: CharacterProps) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  if (char === ' ') {
    return <span className="inline-block">&nbsp;</span>;
  }

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder to preserve layout/width */}
      <span className="opacity-0">{char}</span>
      {/* Absolute positioned animated span */}
      <motion.span
        style={{ opacity }}
        className="absolute top-0 left-0"
      >
        {char}
      </motion.span>
    </span>
  );
}
