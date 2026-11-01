import type { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon as Phone, ShieldCheckIcon as ShieldCheck, CheckCircleIcon as CheckCircle2 } from "@phosphor-icons/react/ssr";
import { CourseCatalog } from "./CourseCatalog";
import { CoursesJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { COURSE_TERMS, SITE_CONFIG } from "@/data/permonicek";
import { OpenBookingButton } from "@/components/booking/BookingContext";

export const metadata: Metadata = {
  title: "Kroužky a program 2026/2027 | 1. lekce zdarma",
  description:
    "Nabídka kroužků a cvičení v Mateřském centru Permoníček pro školní rok 2026/2027 v Jílovém u Prahy. Cvičení rodičů s dětmi, hravá angličtina, keramika, malý kuchtík. 1. ukázková lekce zdarma.",
  alternates: {
    canonical: "/program",
  },
  openGraph: {
    title: "Kroužky a program 2026/2027 · MC Permoníček Jílové u Prahy",
    description:
      "Vyzkoušejte jakýkoliv dětský kroužek nezávazně a zdarma. Cvičení v Sokolovně, keramika, angličtina, tvořivý ateliér.",
    url: `${SITE_CONFIG.url}/program`,
  },
};

export default function ProgramPage() {
  return (
    <div className="bg-white">
      <CoursesJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Domů", path: "/" },
          { name: "Kroužky a program", path: "/program" },
        ]}
      />

      {/* Page Header */}
      <section className="pt-10 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdd10a] text-[#111318] text-xs font-black shadow-xs">
            <span>1. ukázková lekce je nezávazná a zdarma</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#111318] tracking-tight leading-[1.1]">
            Kroužky a cvičení 2026 / 2027
          </h1>

          <p className="text-base sm:text-lg text-[#3e4451] leading-relaxed">
            Vyberte si aktivitu pro děti od 1 roku po školáky, nebo večerní
            cvičení pro dospělé. U všech dětských kroužků platí, že si první
            hodinu můžete vyzkoušet bez placení — kurzovné hradíte až po
            rozhodnutí pokračovat.
          </p>
        </div>
      </section>

      {/* Catalog & Filter */}
      <section className="pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <CourseCatalog />
      </section>

      {/* Terms and conditions section */}
      <section
        id="podminky"
        className="py-16 sm:py-24 bg-[#f4f5f7] border-t border-black/[0.06]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#111318] text-xs font-bold mb-3 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0b6ca3]"  weight="duotone" aria-hidden="true" />
              <span>Pravidla a transparentnost</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111318] tracking-tight">
              Podmínky zápisu, plateb a náhrad kroužků
            </h2>
            <p className="mt-2 text-base text-[#5a6170]">
              Přehledně a férově: jak funguje ukázková hodina, platba kurzovného
              a co dělat, když dítě onemocní.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COURSE_TERMS.map((term, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-full bg-[#52b5ed]/15 text-[#0b6ca3]">
                      <CheckCircle2 className="w-4 h-4"  weight="duotone" aria-hidden="true" />
                    </span>
                    <h3 className="font-display font-bold text-lg text-[#111318]">
                      {term.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#3e4451] leading-relaxed">
                    {term.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact helper */}
          <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-display font-bold text-lg text-[#111318] block">
                Máte dotaz k rozvrhu nebo volným místům?
              </span>
              <p className="text-xs sm:text-sm text-[#5a6170]">
                Ozvěte se přímo koordinátorce Gabriele Boškové:{" "}
                <strong className="text-[#111318]">
                  {SITE_CONFIG.contacts.coordinatorPhoneDisplay}
                </strong>{" "}
                nebo napište na{" "}
                <strong className="text-[#111318]">
                  {SITE_CONFIG.contacts.coordinatorEmail}
                </strong>
                .
              </p>
            </div>

            <OpenBookingButton
              preset={{
                type: "ukazkova-lekce",
                itemTitle: "Dotaz na kroužky",
              }}
              className="px-6 py-3.5 rounded-full bg-[#111318] text-white text-xs sm:text-sm font-bold tracking-tight hover:bg-[#0b1e2d] transition-colors shrink-0 shadow-xs"
            >
              Napsat zprávu
            </OpenBookingButton>
          </div>
        </div>
      </section>
    </div>
  );
}
