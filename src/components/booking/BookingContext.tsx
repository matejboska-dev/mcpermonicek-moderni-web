"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { XIcon as X, CheckCircleIcon as CheckCircle2, PhoneIcon as Phone, EnvelopeSimpleIcon as Mail, ArrowUpRightIcon as ArrowUpRight, CopyIcon as Copy, CheckIcon as Check, CalendarIcon as Calendar, UsersThreeIcon as Users } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import { COURSES, PLANNED_EVENTS, SITE_CONFIG } from "@/data/permonicek";

export type InquiryType =
  | "ukazkova-lekce"
  | "ctvrtecni-herna"
  | "seminar"
  | "detska-skupina"
  | "clenstvi-dotaz";

export interface BookingPreset {
  type?: InquiryType;
  itemTitle?: string;
  recipientEmail?: string;
}

export interface FlyerPreview {
  src: string;
  title: string;
  subtitle?: string;
}

interface BookingContextValue {
  openBooking: (preset?: BookingPreset) => void;
  closeBooking: () => void;
  openFlyer: (flyer: FlyerPreview) => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return ctx;
}

const TYPE_OPTIONS: { value: InquiryType; label: string }[] = [
  { value: "ukazkova-lekce", label: "Ukázková lekce ZDARMA" },
  { value: "ctvrtecni-herna", label: "Čtvrteční herna" },
  { value: "seminar", label: "Seminář pro rodiče" },
  { value: "detska-skupina", label: "Dětská skupina" },
  { value: "clenstvi-dotaz", label: "Členství nebo dotaz" },
];

const FIELD_CLASS = "mt-2 min-h-12 w-full rounded-xl border border-[#eaecf0] bg-[#f4f5f7] px-3.5 py-3 text-base sm:text-sm text-[#111318] placeholder:text-[#5a6170] focus:bg-white focus:ring-2 focus:ring-[#0b6ca3] focus:outline-none";
const LABEL_CLASS = "block text-sm font-semibold text-[#111318]";

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [flyer, setFlyer] = useState<FlyerPreview | null>(null);

  const [type, setType] = useState<InquiryType>("ukazkova-lekce");
  const [selectedItem, setSelectedItem] = useState<string>("Tanečky I. a II. (3–5 let)");
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [childInfo, setChildInfo] = useState("");
  const [note, setNote] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedResult, setSubmittedResult] = useState<{
    mailtoUrl: string;
    recipientEmail: string;
    summaryText: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const openBooking = useCallback((preset?: BookingPreset) => {
    const nextType = preset?.type ?? "ukazkova-lekce";
    setType(nextType);
    if (preset?.itemTitle) {
      setSelectedItem(preset.itemTitle);
    } else if (nextType === "ctvrtecni-herna") {
      setSelectedItem("Čtvrteční volná herna (16:30–18:00)");
    } else if (nextType === "detska-skupina") {
      setSelectedItem("Dětská skupina Permoníček — zájem o místo / náhradník");
    } else if (nextType === "seminar") {
      setSelectedItem("4. 11. 2026 · Jak zvládnout náročné dětské emoce");
    } else if (nextType === "clenstvi-dotaz") {
      setSelectedItem("Roční členství v MC Permoníček (100 Kč / rok)");
    } else {
      setSelectedItem("Tanečky I. a II. (3–5 let)");
    }
    setErrorMsg(null);
    setSubmittedResult(null);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openFlyer = useCallback((preview: FlyerPreview) => {
    setFlyer(preview);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
        setFlyer(null);
      }
    }
    if (isOpen || flyer) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, flyer]);

  const itemChoices = React.useMemo(() => {
    if (type === "ukazkova-lekce") {
      return COURSES.filter((c) => c.freeTrial).map((c) => `${c.title} (${c.ageGroup})`);
    }
    if (type === "seminar") {
      return [
        ...PLANNED_EVENTS.filter((e) => e.status === "upcoming").map(
          (e) => `${e.dateLabel} · ${e.title}`
        ),
        "Celý cyklus seminářů Šťastný rodič (zvýhodněné vstupné)",
      ];
    }
    if (type === "ctvrtecni-herna") {
      return ["Čtvrteční volná herna 16:30–18:00 (registrace do 12:00 čtvrtka)"];
    }
    if (type === "detska-skupina") {
      return [
        "Zápis mezi čekající zájemce (šk. rok 2026/27)",
        "Předběžná rezervace místa na další školní roky (2027/28+)",
      ];
    }
    return [
      "Roční členství v MC Permoníček (100 Kč / rok)",
      "Nabídka lektorování / dobrovolnické výpomoci",
      "Obecný dotaz k chodu centra",
    ];
  }, [type]);

  useEffect(() => {
    if (!itemChoices.includes(selectedItem) && itemChoices.length > 0) {
      setSelectedItem(itemChoices[0]);
    }
  }, [itemChoices, selectedItem]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    if (!parentName.trim() || (!email.trim() && !phone.trim())) {
      setErrorMsg("Vyplňte prosím své jméno a alespoň e-mail nebo telefon, ať se vám můžeme ozvat.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          selectedItem,
          parentName: parentName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          childInfo: type === "clenstvi-dotaz" ? "" : childInfo.trim(),
          note: note.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Odeslání se nezdařilo. Zkuste to prosím znovu nebo nám zavolejte.");
      } else {
        setSubmittedResult(data);
      }
    } catch {
      setErrorMsg("Spojení se nezdařilo. Můžete nám rovnou zavolat na 739 633 715.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleCopySummary() {
    if (!submittedResult) return;
    await navigator.clipboard.writeText(submittedResult.summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking, openFlyer }}>
      {children}

      {/* Booking Modal */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={closeBooking}
              className="fixed inset-0 bg-[#111318]/55 backdrop-blur-xs"
            />

            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 10 }}
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
              className="relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-[0_24px_64px_-12px_rgba(17,19,24,0.28)] sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo-permonicek.png"
                    alt="MC Permoníček znak"
                    width={44}
                    height={44}
                    className="h-11 w-11 shrink-0 object-contain"
                  />
                  <div>
                    <h2 id="booking-modal-title" className="text-xl font-bold text-[#111318] sm:text-2xl">
                      Domluvte si návštěvu
                    </h2>
                    <p className="text-sm text-[#5a6170]">
                      Vyberte, co vás zajímá, a nechte nám na sebe kontakt.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeBooking}
                  aria-label="Zavřít okno rezervace"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f4f5f7] text-[#3e4451] transition-colors hover:bg-[#eaecf0] hover:text-[#111318]"
                >
                  <X className="h-4 w-4" weight="duotone" />
                </button>
              </div>

              {!submittedResult ? (
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  <fieldset className="min-w-0 space-y-4">
                    <legend className="mb-4 font-display text-lg font-bold text-[#111318]">Co vás zajímá</legend>
                    {type === "ukazkova-lekce" && (
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#111318]">
                        <span className="inline-flex rounded-full bg-[#fdd10a] px-4 py-2 text-sm font-black tracking-wide">1. LEKCE ZDARMA</span>
                        <span>Nezávazně a bez platby předem.</span>
                      </div>
                    )}
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="booking-type" className={LABEL_CLASS}>Typ zájmu</label>
                        <select id="booking-type" value={type} onChange={(e) => { setType(e.target.value as InquiryType); setChildInfo(""); setErrorMsg(null); }} className={FIELD_CLASS}>
                          {TYPE_OPTIONS.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </select>
                      </div>
                      <div className={type === "ctvrtecni-herna" ? "hidden" : ""}>
                        <label htmlFor="booking-item" className={LABEL_CLASS}>
                          {type === "ukazkova-lekce" ? "Kroužek" : type === "seminar" ? "Seminář" : type === "detska-skupina" ? "Zájem o místo" : "S čím vám pomůžeme"}
                        </label>
                        <select id="booking-item" value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)} className={FIELD_CLASS}>
                          {itemChoices.map((choice) => <option key={choice} value={choice}>{choice.replace("Roční členství v MC Permoníček (100 Kč / rok)", "Roční členství · 100 Kč/rok").replace("Nabídka lektorování / dobrovolnické výpomoci", "Lektorování nebo dobrovolnictví").replace("Obecný dotaz k chodu centra", "Obecný dotaz")}</option>)}
                        </select>
                        {selectedItem.length > 48 && <p className="mt-2 text-xs leading-relaxed text-[#5a6170] sm:hidden">{selectedItem}</p>}
                      </div>
                    </div>
                    {type === "ctvrtecni-herna" && <p className="text-sm leading-relaxed text-[#3e4451]">Herna je otevřená ve čtvrtek 16:30–18:00. Registrujte se do 12:00 daného čtvrtka. Vstupné je 60 Kč za rodinu, pro členy MC 40 Kč.</p>}
                    {type === "detska-skupina" && <p className="text-sm leading-relaxed text-[#3e4451]">Pro děti 1,5–3 roky. Pro školní rok 2026/27 přijímáme zájemce mezi náhradníky.</p>}
                  </fieldset>

                  <fieldset className="min-w-0 border-t border-[#eaecf0] pt-6">
                    <legend className="float-left mb-1 w-full font-display text-lg font-bold text-[#111318]">Vaše kontaktní údaje</legend>
                    <div className="clear-both">
                      <p id="booking-contact-help" className="mb-4 text-sm text-[#5a6170]">Jméno je povinné. Stačí vyplnit e-mail nebo telefon.</p>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="booking-name" className={LABEL_CLASS}>Jméno a příjmení <span className="text-[#5a6170]">*</span></label>
                          <input id="booking-name" name="name" autoComplete="name" required value={parentName} onChange={(e) => setParentName(e.target.value)} placeholder="Jana Nováková" className={FIELD_CLASS} />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2" aria-describedby="booking-contact-help">
                          <div>
                            <label htmlFor="booking-email" className={LABEL_CLASS}>E-mail</label>
                            <input id="booking-email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jana@email.cz" className={FIELD_CLASS} />
                          </div>
                          <div>
                            <label htmlFor="booking-phone" className={LABEL_CLASS}>Telefon</label>
                            <input id="booking-phone" name="tel" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+420 777 123 456" className={FIELD_CLASS} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="min-w-0 border-t border-[#eaecf0] pt-6">
                    <legend className="float-left mb-4 w-full font-display text-lg font-bold text-[#111318]">{type === "clenstvi-dotaz" ? "Vaše zpráva" : "Podrobnosti k návštěvě"}</legend>
                    <div className="clear-both space-y-4">
                      {type !== "clenstvi-dotaz" && <div>
                        <label htmlFor="booking-child" className={LABEL_CLASS}>{type === "seminar" ? "Počet osob" : type === "ctvrtecni-herna" ? "Dospělí a děti" : "Jméno a věk dítěte"} <span className="font-normal text-[#5a6170]">(nepovinné)</span></label>
                        <input id="booking-child" value={childInfo} onChange={(e) => setChildInfo(e.target.value)} placeholder={type === "seminar" ? "Např. 2 dospělí" : type === "ctvrtecni-herna" ? "Např. 1 dospělý a 2 děti (2 a 4 roky)" : "Např. Tomášek, 3,5 roku"} className={FIELD_CLASS} />
                      </div>}
                      <div>
                        <label htmlFor="booking-note" className={LABEL_CLASS}>{type === "clenstvi-dotaz" ? "Zpráva nebo dotaz" : type === "ctvrtecni-herna" ? "Datum návštěvy a poznámka" : "Poznámka nebo preferovaný termín"} <span className="font-normal text-[#5a6170]">(nepovinné)</span></label>
                        <textarea id="booking-note" rows={2} value={note} onChange={(e) => setNote(e.target.value)} placeholder={type === "clenstvi-dotaz" ? "Napište, s čím vám můžeme pomoci…" : type === "ctvrtecni-herna" ? "Který čtvrtek chcete dorazit?" : "Kdy byste chtěli přijít? Je něco, co máme vědět?"} className={FIELD_CLASS + " resize-y"} />
                      </div>
                    </div>
                  </fieldset>

                  {errorMsg && <p role="alert" className="rounded-xl bg-[#e24d2d]/12 px-4 py-3 text-sm font-medium text-[#b93316]">{errorMsg}</p>}

                  <div className="border-t border-[#eaecf0] pt-5">
                    <button type="submit" disabled={submitting} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#52b5ed] px-6 py-3 text-sm font-bold text-[#0b1e2d] transition-colors hover:bg-[#52b5ed]/80 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6ca3] focus-visible:ring-offset-2">
                      {submitting ? "Připravuji zprávu…" : "Pokračovat k odeslání"}
                      <ArrowUpRight className="h-4 w-4" weight="duotone" aria-hidden="true" />
                    </button>
                    <p className="mt-3 text-center text-xs leading-relaxed text-[#5a6170]">V dalším kroku otevřete připravenou zprávu ve svém e-mailu.<br />Údaje použijeme pouze k vyřízení vašeho zájmu.</p>
                    <p className="mt-5 text-center text-sm text-[#3e4451]">Raději zavoláte? <a href={`tel:${SITE_CONFIG.contacts.coordinatorPhone.replace(/\s+/g, "")}`} className="whitespace-nowrap font-bold text-[#0b6ca3] underline underline-offset-4">{SITE_CONFIG.contacts.coordinatorPhoneDisplay}</a></p>
                  </div>
                </form>
              ) : (
                <div className="mt-6 space-y-5">
                  <div className="rounded-2xl bg-[#bbe364]/35 p-5 text-[#182605]">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#182605]" weight="duotone" />
                      <div>
                        <h3 className="text-lg font-bold">
                          Vaše zpráva je připravená
                        </h3>
                        <p className="mt-1 text-sm text-[#2f490b]">
                          Otevřete předvyplněný e-mail a odešlete ho na adresu{" "}
                          <strong className="font-semibold">{submittedResult.recipientEmail}</strong>{" "}
                          ze své e-mailové schránky. Tím svou žádost dokončíte.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 sm:flex-row">
                    <a
                      href={submittedResult.mailtoUrl}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#111318] px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.01] hover:bg-[#252932]"
                    >
                      <Mail className="h-4 w-4" weight="duotone" />
                      Otevřít předvyplněný e-mail
                    </a>
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f4f5f7] px-4 py-3 text-sm font-semibold text-[#111318] transition-colors hover:bg-[#eaecf0]"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-[#2f490b]" weight="duotone" />
                          Zkopírováno
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" weight="duotone" />
                          Zkopírovat text
                        </>
                      )}
                    </button>
                  </div>

                  <div className="rounded-xl bg-[#f4f5f7] p-4 text-xs leading-relaxed whitespace-pre-line text-[#3e4451]">
                    {submittedResult.summaryText}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <a
                      href={`tel:${SITE_CONFIG.contacts.coordinatorPhone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b6ca3] hover:underline"
                    >
                      <Phone className="h-3.5 w-3.5" weight="duotone" />
                      Zavolat Gabriele Boškové ({SITE_CONFIG.contacts.coordinatorPhoneDisplay})
                    </a>
                    <button
                      type="button"
                      onClick={closeBooking}
                      className="rounded-full px-4 py-2 text-xs font-semibold text-[#5a6170] hover:bg-[#f4f5f7] hover:text-[#111318]"
                    >
                      Hotovo, zavřít
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Flyer / Photo Lightbox */}
      <AnimatePresence>
        {flyer && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={flyer.title}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFlyer(null)}
              className="fixed inset-0 bg-[#111318]/75 backdrop-blur-xs"
            />
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
              className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-[0_24px_64px_-12px_rgba(17,19,24,0.4)]"
            >
              <div className="flex items-center justify-between gap-4 bg-[#f4f5f7] px-5 py-3.5">
                <div>
                  <h3 className="text-base font-bold text-[#111318]">{flyer.title}</h3>
                  {flyer.subtitle && (
                    <p className="text-xs text-[#5a6170]">{flyer.subtitle}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const title = flyer.title;
                      setFlyer(null);
                      openBooking({ itemTitle: title });
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#111318] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#252932]"
                  >
                    <Calendar className="h-3.5 w-3.5" weight="duotone" />
                    Přihlásit se
                  </button>
                  <button
                    type="button"
                    onClick={() => setFlyer(null)}
                    aria-label="Zavřít náhled letáku"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#111318] hover:bg-[#eaecf0]"
                  >
                    <X className="h-4 w-4" weight="duotone" />
                  </button>
                </div>
              </div>
              <div className="overflow-auto p-4 sm:p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={flyer.src}
                  alt={flyer.title}
                  className="mx-auto max-h-[74vh] w-auto rounded-xl object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  );
}

export function OpenBookingButton({
  preset,
  children,
  className = "",
}: {
  preset?: BookingPreset;
  children: React.ReactNode;
  className?: string;
}) {
  const { openBooking } = useBooking();
  return (
    <button
      type="button"
      onClick={() => openBooking(preset)}
      className={className}
    >
      {children}
    </button>
  );
}

export function OpenFlyerButton({
  flyer,
  children,
  className = "",
  title,
}: {
  flyer: FlyerPreview;
  children: React.ReactNode;
  className?: string;
  title?: string;
}) {
  const { openFlyer } = useBooking();
  return (
    <button
      type="button"
      onClick={() => openFlyer(flyer)}
      className={className}
      title={title}
    >
      {children}
    </button>
  );
}
