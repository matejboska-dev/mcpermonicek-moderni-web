"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface StickerQuoteProps {
  quote?: string;
  authorName?: string;
  authorRole?: string;
  authorImage?: string;
  stickerWord?: string;
  stickerAccent?: "sky" | "coral" | "gold" | "lime";
}

export function StickerQuote({
  quote = "V Permoníčku nekupujete zajíce v pytli. Přijďte si jakýkoliv kroužek nejprve vyzkoušet ",
  authorName = "Gabriela Bošková",
  authorRole = "Hlavní koordinátorka MC Permoníček & vedoucí Dětské skupiny",
  authorImage = "/images/tym/gabriela-boskova.jpg",
  stickerWord = "zdarma",
  stickerAccent = "gold",
}: StickerQuoteProps) {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <blockquote className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-[#111318] leading-[1.25] tracking-tight">
        <span>“{quote}</span>
        <motion.span
          whileHover={{ scale: 1.08, rotate: 2 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="inline-block mx-1.5 px-3 sm:px-4 py-0.5 sm:py-1 rounded-2xl bg-[#fdd10a] text-[#111318] shadow-sm transform -rotate-3 cursor-default"
        >
          {stickerWord}
        </motion.span>
        <span>a rozhodněte se až poté, co uvidíte radost vašeho dítěte.”</span>
      </blockquote>

      {/* Author badge */}
      <div className="mt-8 sm:mt-10 inline-flex items-center gap-3.5 bg-[#f4f5f7] px-4 py-2.5 rounded-full text-left">
        <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white shrink-0 shadow-xs">
          <Image
            src={authorImage}
            alt={authorName}
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div className="pr-2">
          <span className="font-display font-bold text-sm text-[#111318] block leading-tight">
            {authorName}
          </span>
          <span className="text-xs text-[#5a6170] block leading-tight mt-0.5">
            {authorRole}
          </span>
        </div>
      </div>
    </section>
  );
}
