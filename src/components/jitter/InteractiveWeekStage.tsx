"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ClockIcon as Clock, MapPinIcon as MapPin, ArrowRightIcon as ArrowRight, PlayIcon as Play, PauseIcon as Pause, UserCircleIcon as User } from "@phosphor-icons/react/ssr";

interface DayScheduleItem {
  id: string;
  time: string;
  title: string;
  age: string;
  lecturer: string;
  location: string;
  price: string;
  category: "deti" | "rodice-s-detmi" | "dospeli-a-seniori" | "detska-skupina";
  phone: string;
  email?: string;
  starts?: string;
}

// Source: https://www.mcpermonicek.cz/program/nabidka-kurzu/ (2026/2027)
const SCHEDULE_BY_DAY: Record<string, DayScheduleItem[]> = {
  "Pondělí": [
    {
      "id": "ds-po",
      "time": "8:00 – 16:00",
      "title": "Dětská skupina",
      "age": "1,5–3 roky",
      "lecturer": "G. Bošková",
      "location": "MC Permoníček, Masarykovo náměstí 195",
      "price": "1–3 dny/týden: 349 Kč/den · 4–5 dní/týden: 318 Kč/den",
      "category": "detska-skupina",
      "phone": "739633715",
      "email": "gabriela.boskova@seznam.cz"
    },
    {
      "id": "tanecky-po",
      "time": "16:30 – 17:15",
      "title": "Tanečky I.",
      "age": "3–5 let bez rodičů",
      "lecturer": "B. Dvořáková",
      "location": "MC Permoníček, Masarykovo náměstí 195",
      "price": "2 250 Kč / 15 lekcí",
      "category": "deti",
      "phone": "739633715",
      "email": "gabriela.boskova@seznam.cz",
      "starts": "Od 5. 10. 2026"
    },
    {
      "id": "joga-seniori",
      "time": "18:00 – 19:30",
      "title": "Jóga pro seniory",
      "age": "Senioři",
      "lecturer": "V. Nováková",
      "location": "MC Permoníček, Masarykovo náměstí 195",
      "price": "150 Kč / lekce",
      "category": "dospeli-a-seniori",
      "phone": "777525422"
    },
    {
      "id": "kondicni",
      "time": "20:00 – 21:00",
      "title": "Kondiční cvičení pro dospělé",
      "age": "Dospělí",
      "lecturer": "V. Svobodová",
      "location": "MC Permoníček, Masarykovo náměstí 195",
      "price": "150 Kč / lekce",
      "category": "dospeli-a-seniori",
      "phone": "605128202"
    }
  ],
  "Úterý": [
    {
      "id": "ds-ut",
      "time": "8:00 – 16:00",
      "title": "Dětská skupina",
      "age": "1,5–3 roky",
      "lecturer": "G. Bošková",
      "location": "MC Permoníček, Masarykovo náměstí 195",
      "price": "1–3 dny/týden: 349 Kč/den · 4–5 dní/týden: 318 Kč/den",
      "category": "detska-skupina",
      "phone": "739633715",
      "email": "gabriela.boskova@seznam.cz"
    },
    {
      "id": "tvoreni",
      "time": "16:30 – 17:15",
      "title": "Tvoření pro děti",
      "age": "3–6 let bez rodičů",
      "lecturer": "Š. Fornier",
      "location": "MC Permoníček, Masarykovo náměstí 195",
      "price": "2 250 Kč / 15 lekcí",
      "category": "deti",
      "phone": "739633715",
      "email": "gabriela.boskova@seznam.cz",
      "starts": "Od 29. 9. 2026"
    },
    {
      "id": "orientalni",
      "time": "17:45 – 18:45",
      "title": "Orientální tanec",
      "age": "Dospělí",
      "lecturer": "K. Jungová",
      "location": "MC Permoníček, Masarykovo náměstí 195",
      "price": "2 400 Kč / 15 lekcí",
      "category": "dospeli-a-seniori",
      "phone": "739633715",
      "email": "gabriela.boskova@seznam.cz",
      "starts": "Od 22. 9. 2026"
    },
    {
      "id": "margit",
      "time": "19:15 – 20:45",
      "title": "Jóga s Margit pro dospělé",
      "age": "Dospělí",
      "lecturer": "Margit Koláčková",
      "location": "MC Permoníček, Masarykovo náměstí 195",
      "price": "170 Kč / lekce",
      "category": "dospeli-a-seniori",
      "phone": "722964689"
    }
  ],
  "Středa": [
    {
      "id": "ds-st",
      "time": "8:00 – 16:00",
      "title": "Dětská skupina",
      "age": "1,5–3 roky",
      "lecturer": "G. Bošková",
      "location": "MC Permoníček, Masarykovo náměstí 195",
      "price": "1–3 dny/týden: 349 Kč/den · 4–5 dní/týden: 318 Kč/den",
      "category": "detska-skupina",
      "phone": "739633715",
      "email": "gabriela.boskova@seznam.cz"
    },
    {
      "id": "tanecky-st",
      "time": "16:30 – 17:15",
      "title": "Tanečky II.",
      "age": "3–5 let bez rodičů",
      "lecturer": "B. Dvořáková",
      "location": "MC Permoníček, Masarykovo náměstí 195",
      "price": "2 250 Kč / 15 lekcí",
      "category": "deti",
      "phone": "739633715",
      "email": "gabriela.boskova@seznam.cz",
      "starts": "Od 30. 9. 2026"
    }
  ],
  "Čtvrtek": [
    {
      "id": "ds-ct",
      "time": "8:00 – 16:00",
      "title": "Dětská skupina",
      "age": "1,5–3 roky",
      "lecturer": "G. Bošková",
      "location": "MC Permoníček, Masarykovo náměstí 195",
      "price": "1–3 dny/týden: 349 Kč/den · 4–5 dní/týden: 318 Kč/den",
      "category": "detska-skupina",
      "phone": "739633715",
      "email": "gabriela.boskova@seznam.cz"
    },
    {
      "id": "sokolovna",
      "time": "9:45 – 10:30",
      "title": "Cvičení v Sokolovně",
      "age": "2–3 roky s rodiči",
      "lecturer": "G. Bošková",
      "location": "Sokolovna",
      "price": "2 250 Kč / 15 lekcí",
      "category": "rodice-s-detmi",
      "phone": "739633715",
      "email": "gabriela.boskova@seznam.cz",
      "starts": "Od 1. 10. 2026"
    },
    {
      "id": "herna-ct",
      "time": "16:30 – 18:00",
      "title": "Herna",
      "age": "0–5 let s doprovodem · po předchozí registraci",
      "lecturer": "G. Bošková",
      "location": "MC Permoníček, Masarykovo náměstí 195",
      "price": "60 Kč / rodina · členové MC 40 Kč",
      "category": "rodice-s-detmi",
      "phone": "739633715",
      "email": "permonicek.jilove@gmail.com"
    }
  ],
  "Pátek": [
    {
      "id": "ds-pa",
      "time": "8:00 – 16:00",
      "title": "Dětská skupina",
      "age": "1,5–3 roky",
      "lecturer": "G. Bošková",
      "location": "MC Permoníček, Masarykovo náměstí 195",
      "price": "1–3 dny/týden: 349 Kč/den · 4–5 dní/týden: 318 Kč/den",
      "category": "detska-skupina",
      "phone": "739633715",
      "email": "gabriela.boskova@seznam.cz"
    }
  ],
  "Neděle": [
    {
      "id": "hatha",
      "time": "17:30 – 19:00",
      "title": "Hatha jóga",
      "age": "Klasická jóga pro dospělé",
      "lecturer": "V. Nováková",
      "location": "MC Permoníček, Masarykovo náměstí 195",
      "price": "170 Kč / lekce",
      "category": "dospeli-a-seniori",
      "phone": "777525422"
    }
  ]
};

const DAY_LABELS = Object.keys(SCHEDULE_BY_DAY);

export function InteractiveWeekStage() {
  const [activeDay, setActiveDay] = useState<string>("Čtvrtek");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Auto-play timeline feature
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveDay((prev) => {
        const idx = DAY_LABELS.indexOf(prev);
        const nextIdx = (idx + 1) % DAY_LABELS.length;
        return DAY_LABELS[nextIdx];
      });
    }, 3800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const items = SCHEDULE_BY_DAY[activeDay] || [];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Jitter-style big canvas container in Sky Blue (#52B5ED) */}
      <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#52b5ed] p-5 sm:p-10 lg:p-12 overflow-hidden shadow-[0_20px_50px_rgba(82,181,237,0.28)]">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#fdd10a]/15 blur-2xl pointer-events-none" />

        {/* Stage Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 text-[#0b1e2d]">
          <div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-[#0b1e2d]">
              Týden v Permoníčku
            </h2>
            <p className="text-sm sm:text-base text-[#0b1e2d]/80 mt-1 max-w-md font-medium">
              Školní rok 2026/2027. Klikněte na libovolný den a objevte
              cvičení, hernu i dětskou skupinu.
            </p>
          </div>

          {/* Player controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-[#0b1e2d] text-xs font-bold transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6ca3]"
              title={isPlaying ? "Pozastavit přepínání" : "Automaticky projít týden"}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#e24d2d]"  weight="duotone" aria-hidden="true" />
                  <span>Zastavit prohlídku</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#0b6ca3]"  weight="duotone" aria-hidden="true" />
                  <span>Přehrát týden</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Day Switcher Pill Bar */}
        <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {DAY_LABELS.map((day) => {
            const isActive = activeDay === day;
            return (
              <button
                key={day}
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setActiveDay(day);
                }}
                className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  isActive
                    ? "bg-[#111318] text-white shadow-md scale-102"
                    : "bg-white/80 text-[#0b1e2d] hover:bg-white"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Inner Interactive Schedule Card */}
        <div className="relative z-10 bg-white rounded-3xl p-5 sm:p-8 shadow-[0_12px_36px_rgba(17,19,24,0.12)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                <span className="font-display font-black text-lg sm:text-xl text-[#111318]">
                  {activeDay} v Permoníčku
                </span>
                <span className="text-xs font-semibold text-[#5a6170]">
                  {items.length} {items.length === 1 ? "aktivita" : items.length < 5 ? "aktivity" : "aktivit"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#f4f5f7] hover:bg-[#eaecf0] transition-all duration-200"
                  >
                    <div>
                      {/* Top tags */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-xs font-bold text-[#111318] tabular-nums shadow-xs">
                          <Clock className="w-3 h-3 text-[#0b6ca3]"  weight="duotone" aria-hidden="true" />
                          {item.time}
                        </span>

                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-base sm:text-lg text-[#111318] leading-snug">
                        {item.title}
                      </h3>

                      {/* Meta */}
                      <div className="mt-2 space-y-1 text-xs text-[#3e4451]">
                        <p className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#5a6170] shrink-0"  weight="duotone" aria-hidden="true" />
                          <span>{item.age} · {item.lecturer}</span>
                        </p>
                        <p className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#e24d2d] shrink-0"  weight="duotone" aria-hidden="true" />
                          <span>{item.location}</span>
                        </p>
                        {item.starts && <p className="pt-1 font-semibold">{item.starts}</p>}
                        <p className="pt-2">Info a registrace: <a className="underline underline-offset-2" href={`tel:${item.phone}`}>{item.phone.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")}</a></p>
                        {item.email && <a className="block break-all underline underline-offset-2" href={`mailto:${item.email}`}>{item.email}</a>}
                        {item.id === "margit" && <a className="block underline underline-offset-2" href="https://www.jogasmargit.cz/">www.jogasmargit.cz</a>}
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-4 mt-3 border-t border-black/[0.06] flex items-center justify-between gap-3">
                      <span className="text-xs font-bold text-[#111318] tabular-nums">
                        {item.price}
                      </span>

                      <a
                        href={`tel:${item.phone}`}
                        aria-label={`Registrace: ${item.title}, ${item.phone}`}
                        className="inline-flex shrink-0 items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#111318] text-white text-xs font-bold hover:bg-[#0b1e2d] transition-colors"
                      >
                        Registrace
                        <ArrowRight className="w-3 h-3 text-[#fdd10a]" weight="duotone" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
