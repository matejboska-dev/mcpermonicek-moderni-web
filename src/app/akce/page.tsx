import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon as Calendar, ClockIcon as Clock, MapPinIcon as MapPin, UserCircleIcon as User, CoffeeIcon as Coffee, HeartIcon as Heart, FileTextIcon as FileText, CalendarCheckIcon as CalendarCheck, CheckIcon as Check, ArrowRightIcon as ArrowRight, ShieldCheckIcon as ShieldCheck, UsersThreeIcon as Users } from "@phosphor-icons/react/ssr";
import { EventsJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import {
  OpenBookingButton,
  OpenFlyerButton,
} from "@/components/booking/BookingContext";
import { PLANNED_EVENTS, SITE_CONFIG } from "@/data/permonicek";

export const metadata: Metadata = {
  title: "Plánované akce, semináře a herna | MC Permoníček Jílové u Prahy",
  description:
    "Aktuální program akcí a seminářů pro rodiče v Jílovém u Prahy. Cyklus seminářů Jany Gottwaldové (Dětské emoce, Sourozenci, Vztek) a pravidelná čtvrteční otevřená herna pro děti od 0 do 5 let.",
  alternates: {
    canonical: "/akce",
  },
  openGraph: {
    title: "Plánované akce a herna · MC Permoníček Jílové u Prahy",
    description:
      "Vzdělávací semináře pro rodiče a čtvrteční otevřená herna s kávou a volnou hrou dětí.",
    url: `${SITE_CONFIG.url}/akce`,
  },
};

export default function AkcePage() {
  const upcomingSeminars = PLANNED_EVENTS.filter((e) => e.status === "upcoming");
  const pastEvents = PLANNED_EVENTS.filter((e) => e.status === "past");

  return (
    <div className="bg-white">
      <EventsJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Domů", path: "/" },
          { name: "Plánované akce a herna", path: "/akce" },
        ]}
      />

      {/* Hero Header */}
      <section className="pt-10 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e24d2d] text-white text-xs font-black shadow-xs">
            <Calendar className="w-3.5 h-3.5"  weight="duotone" aria-hidden="true" />
            <span>Aktuální program podzim 2026 / zima 2027</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#111318] tracking-tight leading-[1.08]">
            Semináře pro rodiče a otevřená herna
          </h1>

          <p className="text-base sm:text-lg text-[#3e4451] leading-relaxed">
            Místo pro inspiraci, vzdělávání a přátelské setkávání. Připojte se
            k oblíbenému cyklu seminářů s lektorkou Janou Gottwaldovou nebo
            přijďte každý čtvrtek na volnou hru do naší herny.
          </p>
        </div>
      </section>

      {/* Seminars Section */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#111318] tracking-tight">
              Cyklus večerních seminářů: Šťastný rodič
            </h2>
            <p className="text-xs sm:text-sm text-[#5a6170] mt-1">
              Lektorka: Jana Gottwaldová · Vždy ve středu od 19:00 do 21:00 v
              prostorách Permoníčku
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#fdd10a] text-[#111318] w-fit">
            Sleva 50 Kč pro členy MC Permoníček
          </span>
        </div>

        <div className="space-y-6">
          {upcomingSeminars.map((event) => (
            <div
              key={event.id}
              className="rounded-[32px] bg-[#f4f5f7] p-6 sm:p-8 hover:bg-[#eaecf0] transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#111318] text-white text-xs font-black tabular-nums">
                      {event.dateLabel} · {event.time}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white text-[#111318] text-xs font-semibold">
                      {event.audience}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#111318] leading-tight">
                    {event.title}
                  </h3>

                  <p className="text-sm text-[#3e4451] leading-relaxed">
                    {event.description}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-[#5a6170]">
                    <span>
                      <strong className="text-[#111318]">Cena:</strong>{" "}
                      {event.priceRegular} (pro členy MC {event.priceMember})
                    </span>
                    <span>·</span>
                    <span>
                      <strong className="text-[#111318]">Lektor:</strong>{" "}
                      {event.lecturer}
                    </span>
                    <span>·</span>
                    <span>
                      <strong className="text-[#111318]">Místo:</strong>{" "}
                      {event.location}
                    </span>
                  </div>

                  {event.bundleNote && (
                    <p className="text-xs font-semibold text-[#0b6ca3] pt-1">
                      {event.bundleNote}
                    </p>
                  )}
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch justify-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-black/[0.06] lg:pl-6">
                  <OpenBookingButton
                    preset={{
                      type: "seminar",
                      itemTitle: event.title,
                      recipientEmail: event.registrationEmail,
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#111318] text-white text-xs sm:text-sm font-bold tracking-tight hover:bg-[#0b1e2d] transition-colors shadow-xs active:scale-98"
                  >
                    <CalendarCheck className="w-4 h-4 text-[#fdd10a]"  weight="duotone" aria-hidden="true" />
                    <span>Rezervovat místo online</span>
                  </OpenBookingButton>

                  <OpenFlyerButton
                    flyer={{
                      src: event.flyerImage,
                      title: event.title,
                      subtitle: "Oficiální leták semináře",
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#111318] text-xs font-semibold hover:bg-white/80 transition-colors shadow-xs"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#5a6170]"  weight="duotone" aria-hidden="true" />
                    <span>Zobrazit leták semináře</span>
                  </OpenFlyerButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Thursday Playroom Detailed Section */}
      <section
        id="herna"
        className="py-16 sm:py-24 bg-[#52b5ed] text-[#0b1e2d] px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#0b1e2d] text-xs font-black shadow-xs">
                <Coffee className="w-3.5 h-3.5 text-[#0b6ca3]"  weight="duotone" aria-hidden="true" />
                <span>Každý čtvrtek 16:30 – 18:00</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight leading-tight">
                Čtvrteční otevřená herna pro rodiny s dětmi
              </h2>

              <p className="text-base sm:text-lg text-[#0b1e2d]/90 font-medium leading-relaxed">
                Přijďte strávit příjemné odpoledne s dětmi ve věku 0–5 let.
                Zatímco si děti hrají v bezpečném prostředí herny, maminky a
                tatínkové si mohou v klidu popovídat, seznámit se a vypít si
                šálek čerstvé kávy nebo čaje.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                  <span className="p-1 rounded-full bg-white/20">
                    <Check className="w-3.5 h-3.5" weight="duotone" />
                  </span>
                  <span>
                    Vstupné: jen 60 Kč za celou rodinu (pro členy MC pouze 40 Kč)
                  </span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                  <span className="p-1 rounded-full bg-white/20">
                    <Check className="w-3.5 h-3.5" weight="duotone" />
                  </span>
                  <span>Káva a čaj pro dospělý doprovod zdarma v ceně</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                  <span className="p-1 rounded-full bg-white/20">
                    <Check className="w-3.5 h-3.5" weight="duotone" />
                  </span>
                  <span>
                    Kapacita: max. 10 rodin pro zachování klidu a bezpečí
                  </span>
                </div>
              </div>

              {/* Registration notice */}
              <div className="p-4 rounded-2xl bg-white/90 text-[#111318] text-xs space-y-1 shadow-sm">
                <span className="font-bold block text-sm">
                  Pravidla přihlášení na hernu:
                </span>
                <p className="text-[#3e4451]">
                  Z organizačních důvodů prosíme o nahlášení účasti vždy{" "}
                  <strong>do čtvrtka 12:00</strong> předem. Napište na e-mail{" "}
                  <strong className="text-[#0b6ca3]">
                    {SITE_CONFIG.contacts.playroomEmail}
                  </strong>{" "}
                  nebo použijte náš online rezervační formulář.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <OpenBookingButton
                  preset={{
                    type: "ctvrtecni-herna",
                    itemTitle: "Čtvrteční herna (16:30–18:00)",
                    recipientEmail: SITE_CONFIG.contacts.playroomEmail,
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111318] text-white text-xs sm:text-sm font-bold tracking-tight hover:bg-[#0b1e2d] transition-colors shadow-md active:scale-98"
                >
                  <CalendarCheck className="w-4 h-4 text-[#52b5ed]"  weight="duotone" aria-hidden="true" />
                  <span>Přihlásit se na nejbližší čtvrtek</span>
                </OpenBookingButton>

                <a
                  href={`mailto:${SITE_CONFIG.contacts.playroomEmail}?subject=Prihlaska%20na%20ctvrtecni%20hernu`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/90 hover:bg-white text-[#0b1e2d] text-xs sm:text-sm font-bold transition-colors"
                >
                  <span>Napsat na {SITE_CONFIG.contacts.playroomEmail}</span>
                </a>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/20 shadow-[0_16px_40px_rgba(11,30,45,0.18)]">
                <Image
                  src="/images/galerie/ds-2.jpg"
                  alt="Děti a rodiče v otevřené herně Permoníčku"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past events & archive note */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="max-w-2xl mb-8">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-[#111318]">
            Proběhlé akce
          </h2>
          <p className="text-xs text-[#5a6170] mt-1">
            Archiv nedávných seminářů a komunitních setkání.
          </p>
        </div>

        <div className="space-y-3">
          {pastEvents.map((evt) => (
            <div
              key={evt.id}
              className="p-4 sm:p-5 rounded-2xl bg-[#f4f5f7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 opacity-75"
            >
              <div>
                <span className="text-xs font-bold text-[#5a6170] block">
                  {evt.dateLabel} · Lektorka: {evt.lecturer}
                </span>
                <span className="font-display font-bold text-base text-[#111318] block mt-0.5">
                  {evt.title}
                </span>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#5a6170] w-fit">
                Proběhlo
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
