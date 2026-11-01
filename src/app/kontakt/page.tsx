import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPinIcon as MapPin, PhoneIcon as Phone, EnvelopeSimpleIcon as Mail, HeartIcon as Heart, SealPercentIcon as BadgePercent, FileTextIcon as FileText, ShieldCheckIcon as ShieldCheck, CalendarCheckIcon as CalendarCheck, UsersThreeIcon as Users, BuildingsIcon as Building2, ArrowSquareOutIcon as ExternalLink, CreditCardIcon as CreditCard } from "@phosphor-icons/react/ssr";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { OpenBookingButton } from "@/components/booking/BookingContext";
import {
  TEAM_MEMBERS,
  MEMBERSHIP_PERKS,
  DOCUMENTS,
  SITE_CONFIG,
} from "@/data/permonicek";

export const metadata: Metadata = {
  title: "O nás, kontakt a členství | MC Permoníček Jílové u Prahy",
  description:
    "Kontakty na Mateřské centrum Permoníček v Jílovém u Prahy. Masarykovo náměstí 195, telefon 739 633 715, tým spolku, roční členství 100 Kč, slevy u partnerů a transparentní výroční zprávy.",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: "O nás a kontakt · MC Permoníček Jílové u Prahy",
    description:
      "Všechny kontakty, adresa na náměstí, představení týmu, roční členství za 100 Kč a výroční zprávy spolku.",
    url: `${SITE_CONFIG.url}/kontakt`,
  },
};

export default function KontaktPage() {
  return (
    <div className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Domů", path: "/" },
          { name: "O nás a kontakt", path: "/kontakt" },
        ]}
      />

      {/* Hero Header */}
      <section className="pt-10 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4f5f7] text-[#111318] text-xs font-bold shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#e24d2d]"  weight="duotone" aria-hidden="true" />
            <span>Spolek pro rodiny v Jílovém u Prahy od roku 2006</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#111318] tracking-tight leading-[1.08]">
            O nás a kontakt
          </h1>

          <p className="text-base sm:text-lg text-[#3e4451] leading-relaxed">
            Jsme otevřená komunita rodičů a dětí. Najdete nás přímo na náměstí
            v Jílovém u Prahy. Rádi vám odpovíme na jakékoliv otázky ohledně
            kroužků, dětské skupiny i členství.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Direct Contacts Card */}
            <div className="rounded-[32px] bg-[#f4f5f7] p-6 sm:p-8 space-y-6">
              <h2 className="font-display font-black text-2xl text-[#111318]">
                Přímé kontakty
              </h2>

              <div className="space-y-4 text-sm text-[#3e4451]">
                {/* Coordinator */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white shadow-xs">
                  <div className="p-2.5 rounded-xl bg-[#52b5ed]/15 text-[#0b6ca3] shrink-0">
                    <Phone className="w-5 h-5"  weight="duotone" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-base text-[#111318] block">
                      {SITE_CONFIG.contacts.coordinatorName}
                    </span>
                    <span className="text-xs text-[#5a6170] block">
                      {SITE_CONFIG.contacts.coordinatorRole}
                    </span>
                    <div className="mt-2 space-y-1 text-xs">
                      <p>
                        Telefon:{" "}
                        <a
                          href={`tel:${SITE_CONFIG.contacts.coordinatorPhone.replace(/\s+/g, "")}`}
                          className="font-bold text-[#0b6ca3] hover:underline tabular-nums"
                        >
                          {SITE_CONFIG.contacts.coordinatorPhoneDisplay}
                        </a>
                      </p>
                      <p>
                        E-mail:{" "}
                        <a
                          href={`mailto:${SITE_CONFIG.contacts.coordinatorEmail}`}
                          className="font-bold text-[#0b6ca3] hover:underline"
                        >
                          {SITE_CONFIG.contacts.coordinatorEmail}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Playroom */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white shadow-xs">
                  <div className="p-2.5 rounded-xl bg-[#fdd10a]/30 text-[#111318] shrink-0">
                    <Mail className="w-5 h-5"  weight="duotone" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-base text-[#111318] block">
                      Čtvrteční otevřená herna
                    </span>
                    <span className="text-xs text-[#5a6170] block">
                      Koordinátorka herny: {SITE_CONFIG.contacts.playroomCoordinator}
                    </span>
                    <p className="mt-2 text-xs">
                      Přihlašování na hernu:{" "}
                      <a
                        href={`mailto:${SITE_CONFIG.contacts.playroomEmail}`}
                        className="font-bold text-[#0b6ca3] hover:underline"
                      >
                        {SITE_CONFIG.contacts.playroomEmail}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Billing / Organization */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white shadow-xs">
                  <div className="p-2.5 rounded-xl bg-[#bbe364]/30 text-[#111318] shrink-0">
                    <Building2 className="w-5 h-5"  weight="duotone" aria-hidden="true" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <span className="font-display font-bold text-base text-[#111318] block">
                      {SITE_CONFIG.legalName}
                    </span>
                    <p>
                      <strong>IČO:</strong>{" "}
                      <span className="tabular-nums">{SITE_CONFIG.ico}</span>
                    </p>
                    <p>
                      <strong>Bankovní účet (ČS):</strong>{" "}
                      <span className="tabular-nums font-mono font-bold text-[#111318]">
                        {SITE_CONFIG.bankAccount}
                      </span>
                    </p>
                    <p className="text-[11px] text-[#5a6170]">
                      Zapsaný spolek vedený u Městského soudu v Praze (oddíl L,
                      vložka 16568).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form Trigger Card */}
            <div className="rounded-[32px] bg-[#111318] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div className="space-y-1 text-center sm:text-left">
                <span className="font-display font-bold text-lg text-white block">
                  Chcete se na cokoliv zeptat?
                </span>
                <p className="text-xs text-white/70">
                  Napište nám vzkaz přes formulář – odpovídáme obvykle do 24
                  hodin.
                </p>
              </div>

              <OpenBookingButton
                preset={{
                  type: "clenstvi-dotaz",
                  itemTitle: "Všeobecný dotaz na centrum",
                }}
                className="px-6 py-3.5 rounded-full bg-[#fdd10a] text-[#111318] text-xs sm:text-sm font-bold tracking-tight hover:bg-[#ffe14d] transition-colors shrink-0 shadow-xs"
              >
                Napsat zprávu online
              </OpenBookingButton>
            </div>
          </div>

          {/* Right: Address & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-[32px] bg-[#f4f5f7] p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2">
                <span className="p-2.5 rounded-xl bg-[#e24d2d] text-white">
                  <MapPin className="w-5 h-5"  weight="duotone" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display font-black text-xl text-[#111318]">
                    Kde nás najdete
                  </h2>
                  <span className="text-xs text-[#5a6170]">
                    Přímo v centru Jílového
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#3e4451]">
                <div className="p-4 rounded-2xl bg-white shadow-xs space-y-1">
                  <p className="font-bold text-[#111318]">
                    Sídlo MC Permoníček a Dětská skupina:
                  </p>
                  <p>{SITE_CONFIG.address.street}</p>
                  <p>
                    {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city}
                  </p>
                  <p className="text-xs text-[#5a6170] pt-1">
                    {SITE_CONFIG.address.note}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white shadow-xs space-y-1">
                  <p className="font-bold text-[#111318]">
                    Cvičení rodičů s dětmi:
                  </p>
                  <p>{SITE_CONFIG.sokolovnaAddress}</p>
                  <p className="text-xs text-[#5a6170] pt-1">
                    Každý čtvrtek ráno od 8:30 a 9:45
                  </p>
                </div>
              </div>

              {/* Map Links */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`https://mapy.cz/zakladni?q=${encodeURIComponent("Mateřské centrum Permoníček Jílové u Prahy")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white text-[#111318] text-xs font-bold hover:bg-white/80 transition-colors shadow-xs"
                >
                  <span>Otevřít na Mapy.cz</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#e24d2d]"  weight="duotone" aria-hidden="true" />
                </a>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent("Mateřské centrum Permoníček, Masarykovo náměstí 195, Jílové u Prahy")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white text-[#111318] text-xs font-bold hover:bg-white/80 transition-colors shadow-xs"
                >
                  <span>Google Mapy</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0b6ca3]"  weight="duotone" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#f4f5f7] border-y border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111318] tracking-tight">
              Tým Permoníčku
            </h2>
            <p className="mt-2 text-sm text-[#5a6170]">
              Lidé, kteří se starají o hladký chod spolku, zázemí dětské skupiny
              i příjemnou atmosféru při všech akcích.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#f4f5f7] mb-4">
                    <Image
                      src={member.photo}
                      alt={`${member.name} – ${member.role}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 260px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#111318] leading-tight">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#0b6ca3] block mt-0.5">
                    {member.role}
                  </span>
                  <p className="text-xs text-[#5a6170] mt-2.5 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership & Local Partner Discounts Section */}
      <section id="clenstvi" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdd10a] text-[#111318] text-xs font-bold mb-3 shadow-xs">
            <BadgePercent className="w-3.5 h-3.5"  weight="duotone" aria-hidden="true" />
            <span>Členství 100 Kč / rok</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111318] tracking-tight">
            Členství v MC Permoníček a partnerské slevy
          </h2>
          <p className="mt-2 text-base text-[#5a6170]">
            Permoníček je zapsaný spolek rodin. Členem se může stát každý rodič
            či příznivec. Roční členský příspěvek je symbolických 100 Kč a
            přináší celou řadu praktických výhod v Jílovém u Prahy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MEMBERSHIP_PERKS.map((perk, idx) => (
            <div
              key={idx}
              className="bg-[#f4f5f7] rounded-2xl p-5 flex flex-col justify-between"
            >
              <div>
                <span className="font-display font-black text-2xl text-[#0b6ca3] block tabular-nums">
                  {perk.discount}
                </span>
                <span className="text-sm font-bold text-[#111318] block mt-1">
                  {perk.title}
                </span>
                <p className="text-xs text-[#5a6170] mt-2 leading-relaxed">
                  {perk.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* How to join card */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#f4f5f7] border border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-display font-bold text-lg text-[#111318] block">
              Jak se stát členem MC Permoníček?
            </span>
            <p className="text-xs sm:text-sm text-[#5a6170]">
              Stačí zaplatit roční členský příspěvek 100 Kč na účet{" "}
              <strong className="text-[#111318]">2682061319/0800</strong> a do
              zprávy pro příjemce uvést své jméno + &quot;Členství MC&quot;.
            </p>
          </div>

          <OpenBookingButton
            preset={{
              type: "clenstvi-dotaz",
              itemTitle: "Přihláška ke členství v MC (100 Kč/rok)",
            }}
            className="px-6 py-3.5 rounded-full bg-[#111318] text-white text-xs sm:text-sm font-bold tracking-tight hover:bg-[#0b1e2d] transition-colors shrink-0 shadow-xs"
          >
            Stát se členem
          </OpenBookingButton>
        </div>
      </section>

      {/* Transparency and Official Documents */}
      <section className="py-16 bg-[#f4f5f7] border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111318] tracking-tight">
              Transparentnost a výroční zprávy
            </h2>
            <p className="mt-2 text-sm text-[#5a6170]">
              Jako nezisková organizace otevřeně vykazujeme naši činnost, hospodaření
              i plány do budoucna.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DOCUMENTS.map((doc, idx) => (
              <a
                key={idx}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-5 shadow-xs flex items-center justify-between gap-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-xl bg-[#52b5ed]/15 text-[#0b6ca3] shrink-0">
                    <FileText className="w-5 h-5"  weight="duotone" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="font-display font-bold text-sm text-[#111318] group-hover:underline block">
                      {doc.title}
                    </span>
                    <span className="text-[11px] text-[#5a6170]">
                      {doc.category}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#0b6ca3] group-hover:underline shrink-0">
                  Stáhnout
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
