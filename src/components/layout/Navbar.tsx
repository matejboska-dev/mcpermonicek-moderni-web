"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ListIcon as Menu, XIcon as X, PhoneIcon as Phone, CalendarCheckIcon as CalendarCheck } from "@phosphor-icons/react/ssr";
import { useBooking } from "@/components/booking/BookingContext";
import { SITE_CONFIG } from "@/data/permonicek";

interface NavItem {
  href: string;
  label: string;
  shortLabel?: string;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Domů" },
  { href: "/program", label: "Kroužky a program", badge: "2026/27" },
  { href: "/detska-skupina", label: "Dětská skupina", badge: "1,5–3 roky" },
  { href: "/akce", label: "Akce a herna", badge: "Semináře" },
  { href: "/kontakt", label: "O nás a kontakt" },
];

export function Navbar() {
  const pathname = usePathname();
  const { openBooking } = useBooking();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-black/[0.06] shadow-[0_2px_16px_rgba(17,19,24,0.04)]"
            : "bg-white/80 backdrop-blur-sm border-b border-black/[0.04]"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-18 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6ca3] rounded-xl p-1"
              aria-label="Mateřské centrum Permoníček – úvodní stránka"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo-permonicek.png"
                  alt="Permoníček maskot – skřítek s lucerničkou a červenou čepičkou"
                  fill
                  sizes="48px"
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg sm:text-xl text-[#111318] tracking-tight leading-none">
                  Permoníček
                </span>
                <span className="hidden min-[440px]:block text-xs text-[#5a6170] font-medium leading-tight mt-0.5">
                  Mateřské centrum · Jílové u Prahy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Pills */}
            <nav
              className="hidden xl:flex shrink-0 items-center whitespace-nowrap bg-[#f4f5f7] p-1.5 rounded-full"
              aria-label="Hlavní navigace"
            >
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 2xl:px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6ca3] ${
                      isActive
                        ? "text-[#111318]"
                        : "text-[#3e4451] hover:text-[#111318]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(17,19,24,0.08)]"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 34,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                      {item.label}
                      {item.badge && (
                        <span
                          className={`text-[11px] font-bold px-1.5 py-0.2 rounded-full tabular-nums ${
                            isActive
                              ? "bg-[#52b5ed]/18 text-[#0b6ca3]"
                              : "bg-black/5 text-[#5a6170]"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex shrink-0 items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.contacts.coordinatorPhone.replace(/\s+/g, "")}`}
                className="hidden min-[1500px]:inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-[#3e4451] hover:text-[#111318] hover:bg-[#f4f5f7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6ca3]"
                title="Zavolat koordinátorce"
              >
                <Phone className="w-3.5 h-3.5 text-[#0b6ca3]" weight="duotone" />
                <span className="tabular-nums font-semibold">
                  {SITE_CONFIG.contacts.coordinatorPhoneDisplay}
                </span>
              </a>

              <button
                type="button"
                onClick={() =>
                  openBooking({
                    type: "ukazkova-lekce",
                    itemTitle: "1. ukázková lekce zdarma",
                  })
                }
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-[#111318] text-white text-xs sm:text-sm font-bold tracking-tight hover:bg-[#0b1e2d] transition-all duration-200 shadow-[0_2px_8px_rgba(17,19,24,0.12)] hover:shadow-[0_4px_14px_rgba(17,19,24,0.22)] active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6ca3]"
              >
                <span>Ukázková lekce zdarma</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                type="button"
                onClick={() =>
                  openBooking({
                    type: "ukazkova-lekce",
                    itemTitle: "1. ukázková lekce zdarma",
                  })
                }
                className="sm:hidden inline-flex shrink-0 whitespace-nowrap items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111318] text-white text-xs font-bold tracking-tight hover:bg-[#0b1e2d] transition-colors"
                aria-label="Ukázková lekce zdarma"
              >
                <span>Lekce zdarma</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2.5 rounded-full text-[#111318] hover:bg-[#f4f5f7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6ca3]"
                aria-label={mobileOpen ? "Zavřít menu" : "Otevřít hlavní menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" weight="duotone" />
                ) : (
                  <Menu className="w-6 h-6" weight="duotone" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-0 top-18 sm:top-20 z-30 bg-white border-b border-black/[0.08] shadow-[0_12px_32px_rgba(17,19,24,0.14)] xl:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-4">
              <div className="flex flex-col space-y-1">
                {NAV_ITEMS.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold transition-colors ${
                        isActive
                          ? "bg-[#52b5ed]/15 text-[#0b6ca3]"
                          : "text-[#111318] hover:bg-[#f4f5f7]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#f4f5f7] text-[#3e4451]">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-black/[0.06] space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    openBooking({
                      type: "ukazkova-lekce",
                      itemTitle: "1. ukázková lekce zdarma",
                    });
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#111318] text-white text-sm font-bold shadow-[0_2px_8px_rgba(17,19,24,0.12)] active:scale-98"
                >
                  <CalendarCheck className="w-4 h-4 text-[#fdd10a]" weight="duotone" />
                  <span>Vybrat kroužek a vyzkoušet zdarma</span>
                </button>

                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#f4f5f7] text-xs text-[#3e4451]">
                  <span>Máte dotaz? Zavolejte koordinátorce:</span>
                  <a
                    href={`tel:${SITE_CONFIG.contacts.coordinatorPhone.replace(/\s+/g, "")}`}
                    className="font-bold text-[#0b6ca3] hover:underline tabular-nums"
                  >
                    {SITE_CONFIG.contacts.coordinatorPhoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
