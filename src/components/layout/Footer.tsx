import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPinIcon as MapPin, PhoneIcon as Phone, EnvelopeSimpleIcon as Mail, HeartIcon as Heart, FileTextIcon as FileText, ShieldCheckIcon as ShieldCheck, ArrowSquareOutIcon as ExternalLink } from "@phosphor-icons/react/ssr";
import { SITE_CONFIG, DOCUMENTS } from "@/data/permonicek";

export function Footer() {
  return (
    <footer className="bg-[#111318] text-white pt-16 sm:pt-20 pb-12 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/[0.1]">
          {/* Brand & mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group"
              aria-label="Permoníček domů"
            >
              <div className="relative w-12 h-12 bg-white/10 rounded-2xl p-1.5 backdrop-blur-sm shrink-0">
                <Image
                  src="/images/logo-permonicek.png"
                  alt="Permoníček logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display font-black text-xl text-white tracking-tight block">
                  Permoníček
                </span>
                <span className="text-xs text-white/60 font-medium">
                  {SITE_CONFIG.legalName} · Od roku 2006
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Neziskové rodinné centrum a akreditovaná dětská skupina v Jílovém
              u Prahy. Vytváříme bezpečný prostor pro setkávání rodin, první
              krůčky dětí do kolektivu, vzdělávání rodičů i mezigenerační
              pohyb.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-white/60">
              <p>
                <strong className="text-white/80 font-semibold">IČO:</strong>{" "}
                <span className="tabular-nums">{SITE_CONFIG.ico}</span> ·
                Zapsaný spolek u Městského soudu v Praze (L 16568)
              </p>
              <p>
                <strong className="text-white/80 font-semibold">
                  Číslo účtu (ČS):
                </strong>{" "}
                <span className="tabular-nums font-mono text-white/90">
                  {SITE_CONFIG.bankAccount}
                </span>
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <span className="font-display font-bold text-sm text-white tracking-tight block">
              Program a služby
            </span>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link
                  href="/program"
                  className="hover:text-white transition-colors"
                >
                  Kroužky a cvičení 2026/27
                </Link>
              </li>
              <li>
                <Link
                  href="/program#podminky"
                  className="hover:text-white transition-colors"
                >
                  Podmínky a storno řád
                </Link>
              </li>
              <li>
                <Link
                  href="/detska-skupina"
                  className="hover:text-white transition-colors"
                >
                  Dětská skupina (1,5–3 roky)
                </Link>
              </li>
              <li>
                <Link
                  href="/akce"
                  className="hover:text-white transition-colors"
                >
                  Semináře pro rodiče
                </Link>
              </li>
              <li>
                <Link
                  href="/akce#herna"
                  className="hover:text-white transition-colors"
                >
                  Čtvrteční otevřená herna
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt#clenstvi"
                  className="hover:text-white transition-colors"
                >
                  Členství 100 Kč/rok & slevy
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Documents */}
          <div className="space-y-3">
            <span className="font-display font-bold text-sm text-white tracking-tight block">
              Oficiální dokumenty
            </span>
            <ul className="space-y-2 text-xs text-white/70">
              {DOCUMENTS.map((doc) => (
                <li key={doc.href}>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors group"
                  >
                    <FileText
                      className="w-3.5 h-3.5 text-[#52b5ed] shrink-0"
                      weight="duotone"
                    />
                    <span className="group-hover:underline">{doc.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and address */}
          <div className="space-y-3">
            <span className="font-display font-bold text-sm text-white tracking-tight block">
              Kde nás najdete
            </span>
            <div className="space-y-3 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <MapPin
                  className="w-4 h-4 text-[#e24d2d] shrink-0 mt-0.5"
                  weight="duotone"
                />
                <div>
                  <p className="font-medium text-white/90">
                    {SITE_CONFIG.address.street}
                  </p>
                  <p>
                    {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city}
                  </p>
                  <p className="text-[11px] text-white/50 mt-0.5">
                    {SITE_CONFIG.address.note}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone
                  className="w-4 h-4 text-[#52b5ed] shrink-0"
                  weight="duotone"
                />
                <a
                  href={`tel:${SITE_CONFIG.contacts.coordinatorPhone.replace(/\s+/g, "")}`}
                  className="font-medium text-white/90 hover:text-white hover:underline tabular-nums"
                >
                  {SITE_CONFIG.contacts.coordinatorPhoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail
                  className="w-4 h-4 text-[#fdd10a] shrink-0"
                  weight="duotone"
                />
                <a
                  href={`mailto:${SITE_CONFIG.contacts.coordinatorEmail}`}
                  className="hover:text-white hover:underline"
                >
                  {SITE_CONFIG.contacts.coordinatorEmail}
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#52b5ed] hover:underline"
                >
                  <span>Více kontaktů a mapa</span>
                  <ExternalLink className="w-3 h-3"  weight="duotone" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional support & partner logos */}
        <div className="py-10 border-b border-white/[0.1] space-y-4">
          <p className="text-xs font-semibold text-white/50 text-center tracking-wide">
            Činnost a provoz mateřského centra a dětské skupiny podporují:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="bg-white rounded-xl p-2.5 sm:px-4 sm:py-2.5 flex items-center justify-center shadow-sm">
              <div className="relative w-32 sm:w-36 h-10">
                <Image
                  src="/images/partneri/mesto-jilove.png"
                  alt="Město Jílové u Prahy – oficiální partner MC Permoníček"
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 sm:px-4 sm:py-2.5 flex items-center justify-center shadow-sm">
              <div className="relative w-36 sm:w-44 h-10">
                <Image
                  src="/images/partneri/sit-pro-rodinu.jpg"
                  alt="Síť pro rodinu – členská organizace od 5. 4. 2006"
                  fill
                  sizes="176px"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 sm:px-4 sm:py-2.5 flex items-center justify-center shadow-sm">
              <div className="relative w-28 sm:w-32 h-10">
                <Image
                  src="/images/partneri/mpsv.jpg"
                  alt="Ministerstvo práce a sociálních věcí ČR"
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 sm:px-4 sm:py-2.5 flex items-center justify-center shadow-sm">
              <div className="relative w-40 sm:w-48 h-10">
                <Image
                  src="/images/partneri/opz-esf.jpg"
                  alt="Operační program Zaměstnanost – Evropská unie, Evropský sociální fond"
                  fill
                  sizes="192px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span>
              © {SITE_CONFIG.foundedYear}–2026 {SITE_CONFIG.legalName}
            </span>
            <span>·</span>
            <span>Jílové u Prahy</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="inline-flex items-center gap-1 text-white/60">
              <ShieldCheck className="w-3.5 h-3.5 text-[#bbe364]"  weight="duotone" aria-hidden="true" />
              Zpracování osobních údajů v souladu s GDPR
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1 text-white/60">
              <Heart className="w-3.5 h-3.5 text-[#e24d2d]"  weight="duotone" aria-hidden="true" />
              Tvoříme komunitu pro rodiny
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
