"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UsersThreeIcon as Users, HandshakeIcon as HeartHandshake, CheckIcon as Check, ArrowRightIcon as ArrowRight, ShieldCheckIcon as ShieldCheck, CalendarCheckIcon as CalendarCheck } from "@phosphor-icons/react/ssr";
import { useBooking } from "@/components/booking/BookingContext";

interface StackCardData {
  id: string;
  pill: string;
  title: string;
  headline: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  isBooking?: boolean;
  bookingTopic?: string;
  bookingCategory?: "deti" | "rodice-s-detmi" | "dospeli-a-seniori" | "detska-skupina";
  image: string;
  imageAlt: string;
  bgColor: string;
  textColor: string;
  pillBg: string;
  pillText: string;
  ctaBg: string;
  ctaText: string;
  statNumber: string;
  statLabel: string;
}

const CARDS: StackCardData[] = [
  {
    id: "ds-card",
    pill: "Akreditovaná péče",
    title: "Dětská skupina Permoníček",
    headline: "Malý rodinný kolektiv s maximem 6 dětí denně.",
    description:
      "Vytváříme laskavé prostředí, kde se každé děťátko od 1,5 do 3 let adaptuje bez slziček. Čtyři stálé akreditované pečující tety, pestrý denní rytmus a každodenní pobyt venku.",
    features: [
      "Maximální poměr: 1 pečující osoba na 3 děti",
      "Denní pobyt v přírodě a na zahradě",
      "Zdravé stravování a respektující přístup",
      "Státní dotace: dostupná cena 318 – 349 Kč / den",
    ],
    ctaLabel: "Podrobnosti a čekací listina",
    ctaHref: "/detska-skupina",
    image: "/images/galerie/ds-1.jpg",
    imageAlt: "Děti a pečovatelka v Dětské skupině Permoníček",
    bgColor: "bg-[#f4f5f7]",
    textColor: "text-[#111318]",
    pillBg: "bg-[#bbe364]",
    pillText: "text-[#111318]",
    ctaBg: "bg-[#111318] hover:bg-[#242831]",
    ctaText: "text-white",
    statNumber: "6 dětí",
    statLabel: "denní kapacita pro maximální bezpečí",
  },
  {
    id: "krouzky-card",
    pill: "Zkuste to nezávazně",
    title: "Kroužky a cvičení 2026/27",
    headline: "První ukázková lekce je vždy zdarma.",
    description:
      "U nás nekupujete zajíce v pytli. Vyberte si kroužek, přijďte si ho s dítětem nezávazně vyzkoušet a školné uhradíte teprve v momentě, kdy uvidíte, že se k nám vaše dítě těší.",
    features: [
      "Cvičení rodičů s dětmi v tělocvičně TJ Sokol",
      "Hravá angličtina s Katkou Jungovou",
      "Dětská keramika s vlastním hrnčířským kruhem",
      "Malý kuchtík, tvořivý ateliér i orientální tanec pro ženy",
    ],
    ctaLabel: "Objednat ukázkovou lekci zdarma",
    ctaHref: "/program",
    isBooking: true,
    bookingTopic: "1. ukázková lekce zdarma",
    bookingCategory: "deti",
    image: "/images/galerie/ds-7.jpg",
    imageAlt: "Děti a rodiče při pohybovém cvičení v Permoníčku",
    bgColor: "bg-[#52b5ed]",
    textColor: "text-[#0b1e2d]",
    pillBg: "bg-white",
    pillText: "text-[#0b1e2d]",
    ctaBg: "bg-[#0b1e2d] hover:bg-[#112a3f]",
    ctaText: "text-white",
    statNumber: "0 Kč",
    statLabel: "za první zkušební návštěvu kroužku",
  },
  {
    id: "komunita-card",
    pill: "Pro rodiče a celou rodinu",
    title: "Otevřená herna a semináře",
    headline: "Prostor pro nová přátelství a rodičovskou oporu.",
    description:
      "Každý čtvrtek odpoledne otevíráme hernu pro veřejnost s kávou a čajem. Pořádáme oblíbené semináře pro rodiče pod vedením Jany Gottwaldové a nabízíme členství s řadou lokálních slev.",
    features: [
      "Čtvrteční herna pro děti 0–5 let za 60 Kč/rodina",
      "Semináře o dětských emocích a sourozeneckých vztazích",
      "Roční členství 100 Kč se slevami u partnerů v Jílovém",
      "Bezplatná káva, čaj a sdílení zkušeností mezi rodiči",
    ],
    ctaLabel: "Prohlédnout nejbližší akce",
    ctaHref: "/akce",
    image: "/images/galerie/ds-2.jpg",
    imageAlt: "Maminky a děti v herně s kuličkovým bazénem v Permoníčku",
    bgColor: "bg-[#fdd10a]",
    textColor: "text-[#241d00]",
    pillBg: "bg-white",
    pillText: "text-[#241d00]",
    ctaBg: "bg-[#111318] hover:bg-[#242831]",
    ctaText: "text-white",
    statNumber: "20 let",
    statLabel: "podpory jílovských rodin (od roku 2006)",
  },
];

export function StickyStackedCards() {
  const { openBooking } = useBooking();

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#111318]">
          Tři důvody, proč si rodiče vybírají Permoníček
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#5a6170]">
          Od individuální péče v dětské skupině až po komunitní setkávání u kávy.
        </p>
      </div>

      {/* Stacked Cards Container */}
      <div className="relative space-y-8 sm:space-y-12">
        {CARDS.map((card, idx) => (
          <div
            key={card.id}
            style={{ top: `${80 + idx * 24}px` }}
            className={`sticky rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(17,19,24,0.1)] transition-transform duration-300 ${card.bgColor} ${card.textColor}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${card.pillBg} ${card.pillText}`}
                  >
                    {card.pill}
                  </span>
                  <span className="text-xs font-bold opacity-60">
                    Přednost 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-sm sm:text-base font-bold opacity-80 block font-display">
                    {card.title}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                    {card.headline}
                  </h3>
                </div>

                <p className="text-sm sm:text-base opacity-90 leading-relaxed font-medium">
                  {card.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 pt-2">
                  {card.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold"
                    >
                      <span className="p-1 rounded-full bg-black/10 shrink-0">
                        <Check className="w-3.5 h-3.5" weight="duotone" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom CTA */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  {card.isBooking ? (
                    <button
                      type="button"
                      onClick={() =>
                        openBooking({
                          type: "ukazkova-lekce",
                          itemTitle: card.bookingTopic,
                        })
                      }
                      className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold tracking-tight shadow-md transition-all active:scale-98 ${card.ctaBg} ${card.ctaText}`}
                    >
                      <CalendarCheck className="w-4 h-4 text-[#fdd10a]"  weight="duotone" aria-hidden="true" />
                      <span>{card.ctaLabel}</span>
                    </button>
                  ) : (
                    <Link
                      href={card.ctaHref}
                      className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold tracking-tight shadow-md transition-all active:scale-98 ${card.ctaBg} ${card.ctaText}`}
                    >
                      <span>{card.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4"  weight="duotone" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Right Media / Stat Column */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/20 shadow-inner">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                  />
                </div>

                {/* Stat card */}
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 text-[#111318] shadow-sm flex items-center justify-between gap-4">
                  <div>
                    <span className="font-display font-black text-2xl sm:text-3xl text-[#111318] tabular-nums block leading-none">
                      {card.statNumber}
                    </span>
                    <span className="text-xs text-[#5a6170] font-medium block mt-1">
                      {card.statLabel}
                    </span>
                  </div>
                  <ShieldCheck
                    className="w-8 h-8 text-[#52b5ed] shrink-0"
                    weight="duotone"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
