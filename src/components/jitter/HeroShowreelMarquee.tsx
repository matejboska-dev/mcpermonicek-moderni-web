"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/ssr";
import { useBooking } from "@/components/booking/BookingContext";

interface ShowcaseItem {
  id: string;
  title: string;
  badge: string;
  image: string;
  alt: string;
  href: string;
  accent: "sky" | "coral" | "gold" | "lime";
  trialEligible?: boolean;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "ds",
    title: "Dětská skupina",
    badge: "1,5–3 roky · Max 6 dětí",
    image: "/images/galerie/ds-1.jpg",
    alt: "Děti v dětské skupině Permoníček při společné hře",
    href: "/detska-skupina",
    accent: "lime",
  },
  {
    id: "sokolovna",
    title: "Cvičení rodičů s dětmi",
    badge: "Čt 8:30 & 9:45 · V Sokolovně",
    image: "/images/galerie/ds-7.jpg",
    alt: "Pohybové cvičení rodičů s dětmi na míčích v tělocvičně",
    href: "/program",
    accent: "sky",
    trialEligible: true,
  },
  {
    id: "keramika",
    title: "Dětská keramika",
    badge: "Čt 16:30 · Modelování i kruh",
    image: "/images/galerie/ds-4.jpg",
    alt: "Dětská tvořivá a výtvarná dílna v Permoníčku",
    href: "/program",
    accent: "gold",
    trialEligible: true,
  },
  {
    id: "anglictina",
    title: "Hravá angličtina",
    badge: "Po 16:45 · Katka Jungová",
    image: "/images/galerie/ds-kolektiv-2.jpg",
    alt: "Hravé učení a předškolní příprava u stolu",
    href: "/program",
    accent: "coral",
    trialEligible: true,
  },
  {
    id: "herna",
    title: "Čtvrteční herna",
    badge: "Čt 16:30–18:00 · 60 Kč/rodina",
    image: "/images/galerie/ds-2.jpg",
    alt: "Barevný kuličkový bazének a volná hra v čtvrteční herně",
    href: "/akce#herna",
    accent: "sky",
  },
  {
    id: "seminare",
    title: "Semináře pro rodiče",
    badge: "4. 11. 19:00 · Jana Gottwaldová",
    image: "/images/letaky/seminar-jak-zvladnout-narocne-detske-emoce-2026.png",
    alt: "Seminář Jak zvládnout náročné dětské emoce",
    href: "/akce",
    accent: "coral",
  },
  {
    id: "venku",
    title: "Každodenní pobyt venku",
    badge: "Zahrada & okolí Jílového",
    image: "/images/galerie/ds-venku-1.jpg",
    alt: "Děti na vycházce v přírodě kolem Jílového",
    href: "/detska-skupina",
    accent: "lime",
  },
  {
    id: "tanec",
    title: "Orientální tanec & jóga",
    badge: "St 18:30 · Dospělí a ženy",
    image: "/images/galerie/ds-herna-2.jpg",
    alt: "Radost z pohybu a taneční lekce v sále Permoníčku",
    href: "/program",
    accent: "gold",
    trialEligible: true,
  },
];

export function HeroShowreelMarquee() {
  const { openBooking } = useBooking();
  // Duplicate for seamless loop
  const loopItems = [...SHOWCASE_ITEMS, ...SHOWCASE_ITEMS];

  const getAccentColor = (accent: ShowcaseItem["accent"]) => {
    switch (accent) {
      case "sky":
        return "bg-[#52b5ed] text-[#0b1e2d]";
      case "coral":
        return "bg-[#e24d2d] text-white";
      case "gold":
        return "bg-[#fdd10a] text-[#111318]";
      case "lime":
        return "bg-[#bbe364] text-[#111318]";
    }
  };

  return (
    <section className="py-8 sm:py-12 overflow-hidden select-none bg-white">
      <div className="animate-jitter-marquee flex gap-4 sm:gap-6 pl-4">
        {loopItems.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="group relative w-[260px] sm:w-[320px] shrink-0 bg-[#f4f5f7] rounded-3xl p-3 sm:p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-[#eaecf0] hover:shadow-[0_16px_36px_rgba(17,19,24,0.08)]"
          >
            {/* Inner elevated photo card */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white shadow-[0_2px_12px_rgba(17,19,24,0.06)]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 260px, 320px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {item.trialEligible && (
                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-[#111318] shadow-sm backdrop-blur-sm">
                    1. lekce zdarma
                  </span>
                </div>
              )}
            </div>

            {/* Bottom info pill row */}
            <div className="pt-3.5 pb-1 px-1 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="font-display font-bold text-sm sm:text-base text-[#111318] truncate leading-tight">
                  {item.title}
                </p>
                <p className="text-xs text-[#5a6170] truncate mt-0.5">
                  {item.badge}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-1.5">
                {item.trialEligible ? (
                  <button
                    type="button"
                    onClick={() =>
                      openBooking({
                        type: "ukazkova-lekce",
                        itemTitle: item.title,
                      })
                    }
                    className="p-2 rounded-full bg-white text-[#111318] hover:bg-[#111318] hover:text-white transition-colors shadow-sm"
                    title={`Vyzkoušet ${item.title} zdarma`}
                    aria-label={`Vyzkoušet ${item.title} zdarma`}
                  >
                    <ArrowUpRight className="w-4 h-4"  weight="duotone" aria-hidden="true" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="p-2 rounded-full bg-white text-[#111318] hover:bg-[#111318] hover:text-white transition-colors shadow-sm"
                    title={`Více o ${item.title}`}
                    aria-label={`Více o ${item.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4"  weight="duotone" aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
