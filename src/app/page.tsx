import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CoffeeIcon, PresentationChartIcon, BicycleIcon, TShirtIcon, ScissorsIcon, BabyIcon, ArrowRightIcon as ArrowRight, CalendarCheckIcon as CalendarCheck, CheckIcon as Check, HeartIcon as Heart, PhoneIcon as Phone, ClockIcon as Clock, MapPinIcon as MapPin, BabyIcon as Baby, SmileyIcon as Smile, GraduationCapIcon as GraduationCap, UsersThreeIcon as Users2, FileTextIcon as FileText, SealPercentIcon as BadgePercent, CalendarIcon as Calendar } from "@phosphor-icons/react/ssr";
import { HeroShowreelMarquee } from "@/components/jitter/HeroShowreelMarquee";
import { ScrollWordReveal } from "@/components/jitter/ScrollWordReveal";
import { InteractiveWeekStage } from "@/components/jitter/InteractiveWeekStage";
import { StickyStackedCards } from "@/components/jitter/StickyStackedCards";
import { StickerQuote } from "@/components/jitter/StickerQuote";
import {
  OpenBookingButton,
  OpenFlyerButton,
} from "@/components/booking/BookingContext";
import { EventsJsonLd } from "@/components/seo/JsonLd";
import {
  COURSES,
  PLANNED_EVENTS,
  MEMBERSHIP_PERKS,
  SITE_CONFIG,
} from "@/data/permonicek";

export default function HomePage() {
  const membershipBenefits = [
    { ...MEMBERSHIP_PERKS[0], title: "Čtvrteční herna", icon: CoffeeIcon, detail: "Za celou rodinu místo 60 Kč. Káva a čaj zdarma." },
    { ...MEMBERSHIP_PERKS[1], title: "Semináře pro rodiče", icon: PresentationChartIcon, detail: "250 Kč místo 300 Kč. Celý cyklus za 800 Kč místo 1 000 Kč." },
    { ...MEMBERSHIP_PERKS[2], title: "Cykloservis Nabike", icon: BicycleIcon, detail: "Na dětská kola, helmy a cyklosedačky v Sokolovně." },
    { ...MEMBERSHIP_PERKS[3], title: "Second hand", icon: TShirtIcon, detail: "Na nezlevněné oblečení v Pražské ulici. Sleva neplatí na obuv." },
    { discount: "10 %", title: "Galanterie p. Popelkové", icon: ScissorsIcon, detail: "Sleva na nákup v galanterii na Masarykově náměstí." },
    { discount: "10 %", title: "Dětské zboží p. Görlicha", icon: BabyIcon, detail: "Na dětské oblečení a papírové pleny na Masarykově náměstí." },
  ];
  const upcomingEvents = PLANNED_EVENTS.filter((e) => e.status === "upcoming");

  return (
    <div className="bg-white">
      <EventsJsonLd />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden pt-8 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 select-none">
          <div className="absolute -left-36 top-5 h-56 w-56 rounded-full bg-[#52b5ed]/20 sm:-left-40 sm:top-0 sm:h-96 sm:w-96" />
          <div className="absolute -left-24 top-52 h-44 w-44 rounded-full bg-[#fdd10a]/25 sm:left-10 sm:top-72 sm:h-44 sm:w-44" />
          <div className="absolute -left-28 bottom-2 h-48 w-48 rounded-full bg-[#bbe364]/25 sm:-left-24 sm:bottom-0 sm:h-72 sm:w-72" />
          <div className="absolute -right-44 top-80 w-72 sm:-right-40 sm:top-48 sm:w-[420px] xl:right-[max(-180px,calc((100vw-1800px)/2))] xl:top-44 xl:w-[500px]">
            <Image
              src="/images/hero/permonicek-kresba.png"
              alt=""
              width={1312}
              height={1199}
              sizes="(min-width: 1280px) 500px, (min-width: 640px) 420px, 288px"
              className="h-auto w-full -rotate-6"
              priority
            />
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Standalone Announcement Pill */}
          <div className="inline-flex justify-center">
            <Link
              href="/akce"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f4f5f7] hover:bg-[#eaecf0] text-xs sm:text-sm font-semibold text-[#111318] transition-colors shadow-xs group"
            >
              <span className="w-2 h-2 rounded-full bg-[#e24d2d] animate-pulse" />
              <span>
                Seminář pro rodiče 4. 11.: Jak zvládnout náročné dětské emoce
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#e24d2d] transition-transform group-hover:translate-x-0.5"  weight="duotone" aria-hidden="true" />
            </Link>
          </div>

          {/* Hero Main Headline */}
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#111318] tracking-tight leading-[1.08] text-balance">
            Moderní rodinné centrum a dětská skupina v Jílovém u Prahy
          </h1>

          {/* Hero Subheadline */}
          <p className="text-base sm:text-xl text-[#3e4451] max-w-2xl mx-auto font-normal leading-relaxed text-pretty">
            Od roku 2006 vytváříme bezpečný prostor pro děti i rodiče.
            Vyzkoušejte jakýkoliv kroužek na{" "}
            <strong className="font-bold text-[#111318]">
              1. ukázkové lekci nezávazně a zdarma
            </strong>
            , nebo svěřte děťátko do laskavé dětské skupiny pro nanejvýš 6 dětí.
          </p>

          {/* Action Pills */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <OpenBookingButton
              preset={{
                type: "ukazkova-lekce",
                itemTitle: "1. ukázková lekce zdarma",
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#111318] text-white text-sm sm:text-base font-bold tracking-tight hover:bg-[#0b1e2d] transition-all shadow-md active:scale-98"
            >
              <span>Vybrat kroužek s ukázkou zdarma</span>
            </OpenBookingButton>

            <Link
              href="/detska-skupina"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#f4f5f7] hover:bg-[#eaecf0] text-[#111318] text-sm sm:text-base font-bold tracking-tight transition-colors"
            >
              <Baby className="w-4 h-4 text-[#0b6ca3]"  weight="duotone" aria-hidden="true" />
              <span>Dětská skupina (1,5–3 roky)</span>
            </Link>
          </div>

          {/* Micro trust row */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#5a6170] font-medium">
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#bbe364]" weight="duotone" />
              1. lekce zdarma bez platby předem
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#bbe364]" weight="duotone" />
              Max. 6 dětí denně v dětské skupině
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#bbe364]" weight="duotone" />
              Přímo v centru Jílového u Prahy
            </span>
          </div>
        </div>
      </section>

      {/* Infinite Showreel Marquee */}
      <HeroShowreelMarquee />

      {/* Institutional Partner Bar */}
      <section className="py-8 border-y border-black/[0.06] bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#5a6170] text-center mb-5 tracking-wide">
            Dlouhodobě spolupracujeme a jsme podporováni klíčovými partnery:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-16">
            <div className="relative w-40 sm:w-52 h-20 sm:h-24">
              <Image
                src="/images/partneri/mesto-jilove.png"
                alt="Město Jílové u Prahy"
                fill
                sizes="(min-width: 640px) 208px, 160px"
                className="object-contain"
              />
            </div>
            <div className="relative w-44 sm:w-56 h-20 sm:h-24">
              <Image
                src="/images/partneri/sit-pro-rodinu.jpg"
                alt="Síť pro rodinu"
                fill
                sizes="(min-width: 640px) 224px, 176px"
                className="object-contain"
              />
            </div>
            <div className="relative w-36 sm:w-48 h-20 sm:h-24">
              <Image
                src="/images/partneri/mpsv.jpg"
                alt="MPSV ČR"
                fill
                sizes="(min-width: 640px) 192px, 144px"
                className="object-contain"
              />
            </div>
            <div className="relative w-52 sm:w-64 h-20 sm:h-24">
              <Image
                src="/images/partneri/opz-esf.jpg"
                alt="Evropský sociální fond – OPZ"
                fill
                sizes="(min-width: 640px) 256px, 208px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jitter Scroll-scrubbed Word Reveal */}
      <ScrollWordReveal />

      {/* Jitter Sky Blue Interactive Schedule Stage */}
      <InteractiveWeekStage />

      {/* Jitter 3 Sticky Stacked Cards */}
      <StickyStackedCards />

      {/* 2x2 Bento Grid: Program podle věku */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#111318]">
            Čtyři světy Permoníčku pro každý věk
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5a6170]">
            Ať máte novorozence, batole nebo předškoláka, najdete u nás svůj
            přirozený rytmus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Bento 1: Batolata & nejmenší */}
          <div className="group rounded-[32px] bg-[#f4f5f7] p-6 sm:p-8 flex flex-col justify-between hover:bg-[#eaecf0] transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-3 rounded-2xl bg-[#bbe364] text-[#111318]">
                  <Baby className="w-6 h-6" weight="duotone" />
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#111318]">
                  1,5 – 3 roky
                </span>
              </div>
              <h3 className="font-display font-black text-2xl text-[#111318]">
                Dětská skupina a první pohyb
              </h3>
              <p className="text-sm text-[#3e4451] leading-relaxed">
                Akreditovaná péče v malé rodinné skupině pro 6 dětí s vlastní
                zahradou. Pro rodiče s dětmi pořádáme oblíbené čtvrteční cvičení
                v tělocvičně TJ Sokol.
              </p>
            </div>
            <div className="pt-6 border-t border-black/[0.06] mt-6 flex items-center justify-between">
              <span className="text-xs font-bold text-[#5a6170]">
                Cvičení v Sokolovně · Dětská skupina
              </span>
              <Link
                href="/detska-skupina"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111318] hover:text-[#0b6ca3] transition-colors"
              >
                <span>Více o péči</span>
                <ArrowRight className="w-3.5 h-3.5"  weight="duotone" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Bento 2: Předškoláci a malí školáci */}
          <div className="group rounded-[32px] bg-[#f4f5f7] p-6 sm:p-8 flex flex-col justify-between hover:bg-[#eaecf0] transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-3 rounded-2xl bg-[#52b5ed] text-[#0b1e2d]">
                  <Smile className="w-6 h-6" weight="duotone" />
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#111318]">
                  3 – 7 let
                </span>
              </div>
              <h3 className="font-display font-black text-2xl text-[#111318]">
                Hravé kroužky a tvoření
              </h3>
              <p className="text-sm text-[#3e4451] leading-relaxed">
                Hravá angličtina s Katkou Jungovou, keramická dílna s vlastním
                kruhem, kuchtík s vlastnoručním pečením i výtvarný ateliér. Vše
                s první ukázkovou lekcí zdarma.
              </p>
            </div>
            <div className="pt-6 border-t border-black/[0.06] mt-6 flex items-center justify-between">
              <span className="text-xs font-bold text-[#5a6170]">
                1. ukázková lekce zdarma
              </span>
              <Link
                href="/program"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111318] hover:text-[#0b6ca3] transition-colors"
              >
                <span>Zobrazit kroužky</span>
                <ArrowRight className="w-3.5 h-3.5"  weight="duotone" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Bento 3: Rodiče & semináře */}
          <div className="group rounded-[32px] bg-[#f4f5f7] p-6 sm:p-8 flex flex-col justify-between hover:bg-[#eaecf0] transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-3 rounded-2xl bg-[#fdd10a] text-[#111318]">
                  <GraduationCap className="w-6 h-6" weight="duotone" />
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#111318]">
                  Rodiče
                </span>
              </div>
              <h3 className="font-display font-black text-2xl text-[#111318]">
                Vzdělávání a bezpečné sdílení
              </h3>
              <p className="text-sm text-[#3e4451] leading-relaxed">
                Odborné semináře lektorky Jany Gottwaldové zaměřené na dětské
                emoce, vztek i sourozenecké vztahy. Praktické techniky bez
                křiku a pocitů selhání.
              </p>
            </div>
            <div className="pt-6 border-t border-black/[0.06] mt-6 flex items-center justify-between">
              <span className="text-xs font-bold text-[#5a6170]">
                4. 11. · 9. 12. · 13. 1.
              </span>
              <Link
                href="/akce"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111318] hover:text-[#0b6ca3] transition-colors"
              >
                <span>Termíny seminářů</span>
                <ArrowRight className="w-3.5 h-3.5"  weight="duotone" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Bento 4: Otevřená herna & dospělí */}
          <div className="group rounded-[32px] bg-[#f4f5f7] p-6 sm:p-8 flex flex-col justify-between hover:bg-[#eaecf0] transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-3 rounded-2xl bg-[#e24d2d] text-white">
                  <Users2 className="w-6 h-6" weight="duotone" />
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#111318]">
                  Každý čtvrtek + večer
                </span>
              </div>
              <h3 className="font-display font-black text-2xl text-[#111318]">
                Čtvrteční herna a tanec pro ženy
              </h3>
              <p className="text-sm text-[#3e4451] leading-relaxed">
                Každý čtvrtek 16:30–18:00 otevíráme hernu pro veřejnost. Děti
                si hrají, maminky si popovídají u kávy. Ve středu večer tančíme
                orientální tance a cvičíme jógu.
              </p>
            </div>
            <div className="pt-6 border-t border-black/[0.06] mt-6 flex items-center justify-between">
              <span className="text-xs font-bold text-[#5a6170]">
                Vstupné 60 Kč / rodina (členové 40 Kč)
              </span>
              <Link
                href="/akce#herna"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111318] hover:text-[#0b6ca3] transition-colors"
              >
                <span>Pravidla herny</span>
                <ArrowRight className="w-3.5 h-3.5"  weight="duotone" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expressive Quote with Spring-tilted Sticker */}
      <StickerQuote />

      {/* Upcoming Seminars & Thursday Playroom Showcase */}
      <section aria-labelledby="events-title" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-5 mb-12">
          <div className="max-w-3xl">
            <h2 id="events-title" className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#111318]">
              Plánované semináře a herna
            </h2>
            <p className="mt-2 text-base text-[#5a6170]">
              Přihlaste se online. Počet míst v seminářích i herně je omezen pro
              zachování klidné atmosféry.
            </p>
          </div>
          <Link
            href="/akce"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#f4f5f7] px-6 py-3 text-base font-bold text-[#111318] hover:bg-[#eaecf0] transition-colors"
          >
            <span>Všechny akce a semináře</span>
            <ArrowRight className="w-4 h-4"  weight="duotone" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Nearest upcoming seminar Nov 4, 2026 */}
          {upcomingEvents[0] && (
            <div className="relative rounded-2xl bg-[#f4f5f7] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-col items-start gap-3 mb-5">
                  <span className="inline-flex min-h-12 items-center gap-3 px-4 py-3 rounded-xl bg-[#e24d2d]/12 text-[#b93316] text-base sm:text-lg font-bold">
                    <Calendar className="w-5 h-5 shrink-0"  weight="duotone" aria-hidden="true" />
                    Již 4. 11. 2026 v 19:00
                  </span>
                  <span className="text-sm font-semibold text-[#3e4451]">
                    Jana Gottwaldová
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl text-[#111318] leading-tight md:min-h-[5.4rem]">
                  {upcomingEvents[0].title}
                </h3>

                <p className="mt-3 text-base text-[#3e4451] leading-relaxed md:min-h-[9rem]">
                  {upcomingEvents[0].description}
                </p>

                <div className="mt-4 pt-3 border-t border-black/[0.06] space-y-2 text-sm text-[#3e4451]">
                  <p>
                    <strong className="text-[#111318]">Cena:</strong>{" "}
                    {upcomingEvents[0].priceRegular} · pro členy MC{" "}
                    {upcomingEvents[0].priceMember}
                  </p>
                  <p>
                    <strong className="text-[#111318]">Místo:</strong>{" "}
                    {upcomingEvents[0].location}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 flex flex-col items-stretch gap-3">
                <OpenFlyerButton
                  flyer={{
                    src: upcomingEvents[0].flyerImage,
                    title: upcomingEvents[0].title,
                    subtitle: "Originální leták akce",
                  }}
                  className="order-2 inline-flex min-h-11 items-center justify-center gap-2 text-sm font-semibold text-[#3e4451] hover:text-[#111318] hover:underline"
                >
                  <FileText className="w-3.5 h-3.5"  weight="duotone" aria-hidden="true" />
                  <span>Zobrazit leták</span>
                </OpenFlyerButton>

                <OpenBookingButton
                  preset={{
                    type: "seminar",
                    itemTitle: upcomingEvents[0].title,
                  }}
                  className="inline-flex min-h-14 w-full items-center justify-center gap-3 px-5 py-4 rounded-full bg-[#111318] text-white text-base font-bold hover:bg-[#0b1e2d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6ca3] focus-visible:ring-offset-2"
                >
                  <CalendarCheck className="w-5 h-5 shrink-0 text-[#fdd10a]"  weight="duotone" aria-hidden="true" />
                  <span>Rezervovat místo</span>
                </OpenBookingButton>
              </div>
            </div>
          )}

          {/* Card 2: Thursday Playroom */}
          <div className="relative rounded-2xl bg-[#f4f5f7] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-col items-start gap-3 mb-5">
                <span className="inline-flex min-h-12 items-center gap-3 px-4 py-3 rounded-xl bg-[#52b5ed] text-[#0b1e2d] text-base sm:text-lg font-bold">
                  <Clock className="w-5 h-5 shrink-0"  weight="duotone" aria-hidden="true" />
                  Každý čtvrtek 16:30 – 18:00
                </span>
                <span className="text-sm font-semibold text-[#3e4451]">
                  Pro děti 0–5 let
                </span>
              </div>

              <h3 className="font-display font-black text-2xl text-[#111318] leading-tight md:min-h-[5.4rem]">
                Čtvrteční otevřená herna pro rodiče s dětmi
              </h3>

              <p className="mt-3 text-base text-[#3e4451] leading-relaxed md:min-h-[9rem]">
                Přijďte si pohrát, seznámit se s dalšími maminkami a tatínky z
                Jílového a nechat děti vyřádit se v bezpečném prostředí s hračkami,
                skluzavkou i bazénkem s míčky. Káva a čaj pro rodiče zdarma.
              </p>

              <div className="mt-4 pt-3 border-t border-black/[0.06] space-y-2 text-sm text-[#3e4451]">
                <p>
                  <strong className="text-[#111318]">Vstupné:</strong> 60 Kč /
                  rodina (členové MC Permoníček jen 40 Kč)
                </p>
                <p>
                  <strong className="text-[#111318]">Registrace:</strong> Do
                  čtvrtka 12:00 na e-mail koordinátorky
                </p>
              </div>
            </div>

            <div className="pt-6 mt-4 flex flex-col items-stretch gap-3">
              <Link
                href="/akce#herna"
                className="order-2 inline-flex min-h-11 items-center justify-center gap-2 text-sm font-semibold text-[#3e4451] hover:text-[#111318] hover:underline"
              >
                <span>Více o herně</span>
                <ArrowRight className="w-3.5 h-3.5"  weight="duotone" aria-hidden="true" />
              </Link>

              <OpenBookingButton
                preset={{
                  type: "ctvrtecni-herna",
                  itemTitle: "Čtvrteční herna (16:30–18:00)",
                }}
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 px-5 py-4 rounded-full bg-[#111318] text-white text-base font-bold hover:bg-[#0b1e2d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6ca3] focus-visible:ring-offset-2"
              >
                <CalendarCheck className="w-5 h-5 shrink-0 text-[#52b5ed]"  weight="duotone" aria-hidden="true" />
                <span>Nahlásit účast na čtvrtek</span>
              </OpenBookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Membership benefits */}
      <section className="bg-[#f4f5f7] py-16 sm:py-24" aria-labelledby="membership-title">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <h2 id="membership-title" className="font-display font-black text-3xl sm:text-5xl text-[#111318] tracking-tight leading-tight">
              Členství za <span className="inline-block rounded-2xl bg-[#fdd10a] px-3 py-1">100 Kč / rok</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#3e4451] leading-relaxed">
              Podpoříte Permoníček a získáte výhody pro celou rodinu.
              V centru i u jílovských partnerů.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {membershipBenefits.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <article key={perk.title} className="flex flex-col rounded-2xl bg-white p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-4xl sm:text-5xl font-black tracking-tight tabular-nums text-[#111318]">{perk.discount}</span>
                    <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${idx % 3 === 0 ? "bg-[#52b5ed]/20" : idx % 3 === 1 ? "bg-[#fdd10a]/30" : "bg-[#bbe364]/35"}`}>
                      <Icon className="h-8 w-8 text-[#111318]" weight="duotone" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold leading-snug text-[#111318]">{perk.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3e4451]">{perk.detail}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/kontakt#clenstvi" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#111318] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#0b1e2d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6ca3] focus-visible:ring-offset-2">
              Jak se stát členem
              <ArrowRight className="h-4 w-4" weight="duotone" aria-hidden="true" />
            </Link>
            <p className="mt-4 text-xs text-[#5a6170]">Slevy u partnerů uplatníte po předložení členské průkazky.</p>
          </div>
        </div>
      </section>

      {/* Big Closing Conversion CTA */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="rounded-[36px] sm:rounded-[48px] bg-[#111318] text-white p-8 sm:p-14 lg:p-16 text-center space-y-6 sm:space-y-8 shadow-[0_24px_60px_rgba(17,19,24,0.18)]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-sm">
            <Heart className="w-3.5 h-3.5 text-[#e24d2d]"  weight="duotone" aria-hidden="true" />
            <span>Místo, kde děti rostou s úsměvem</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight max-w-3xl mx-auto leading-[1.12]">
            Přijďte se k nám podívat. Dveře jsou u nás vždy otevřené.
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto font-normal">
            Vyberte si kroužek a přijďte na nezávaznou ukázkovou hodinu zdarma.
            Rádi vás i vaše děťátko provedeme našimi prostorami.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <OpenBookingButton
              preset={{
                type: "ukazkova-lekce",
                itemTitle: "1. ukázková lekce zdarma",
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#fdd10a] text-[#111318] text-sm sm:text-base font-black hover:bg-[#ffe14d] transition-all shadow-md active:scale-98"
            >
              <span>Vyzkoušet kroužek zdarma</span>
            </OpenBookingButton>

            <a
              href={`tel:${SITE_CONFIG.contacts.coordinatorPhone.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-bold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#52b5ed]"  weight="duotone" aria-hidden="true" />
              <span>Zavolat koordinátorce ({SITE_CONFIG.contacts.coordinatorPhoneDisplay})</span>
            </a>
          </div>

          <p className="text-xs text-white/50 pt-2">
            Masarykovo náměstí 195, Jílové u Prahy (přízemí ZUŠ) · Založeno 2006
          </p>
        </div>
      </section>
    </div>
  );
}
