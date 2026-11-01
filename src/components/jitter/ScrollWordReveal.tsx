"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface ScrollWordRevealProps {
  text?: string;
  className?: string;
}

const DEFAULT_TEXT =
  "Permoníček pomáhá rodinám v Jílovém u Prahy růst s radostí, jistotou a novými přáteli. Nabízíme laskavou dětskou skupinu pro 6 dětí, pestré kroužky od miminek po školáky s první ukázkovou lekcí zdarma a přátelský prostor, kde na rodičovství nikdy nejste sami.";

export function ScrollWordReveal({
  text = DEFAULT_TEXT,
  className = "",
}: ScrollWordRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = text.split(" ");

  return (
    <section
      ref={containerRef}
      className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto ${className}`}
    >
      <p className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-[#111318] leading-[1.22] tracking-tight">
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;

          return (
            <Word
              key={`${word}-${index}`}
              word={word}
              progress={scrollYProgress}
              range={[start, end]}
              reducedMotion={shouldReduceMotion ?? false}
            />
          );
        })}
      </p>
    </section>
  );
}

interface WordProps {
  word: string;
  progress: any;
  range: [number, number];
  reducedMotion: boolean;
}

function Word({ word, progress, range, reducedMotion }: WordProps) {
  const opacity = useTransform(progress, range, [0.28, 1]);

  if (reducedMotion) {
    return <span className="inline-block mr-[0.28em] text-[#111318]">{word}</span>;
  }

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.28em] transition-colors duration-75"
    >
      {word}
    </motion.span>
  );
}
