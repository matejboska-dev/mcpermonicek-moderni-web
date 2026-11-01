import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BabyIcon as Baby, UsersThreeIcon as Users, ClockIcon as Clock, ShieldCheckIcon as ShieldCheck, CheckIcon as Check, HeartIcon as Heart, FileTextIcon as FileText, PhoneIcon as Phone, EnvelopeSimpleIcon as Mail, CalendarCheckIcon as CalendarCheck, SunIcon as Sun, TreeIcon as Trees, ForkKnifeIcon as Utensils, MoonIcon as Moon, SmileyIcon as Smile } from "@phosphor-icons/react/ssr";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import {
  DS_CAREGIVERS,
  DOCUMENTS,
  GALLERY_PHOTOS,
  SITE_CONFIG,
} from "@/data/permonicek";
import { OpenBookingButton } from "@/components/booking/BookingContext";

export const metadata: Metadata = {
  title: "Dětská skupina Permoníček (1,5–3 roky) | Jílové u Prahy",
  description:
    "Akreditovaná dětská skupina v Jílovém u Prahy. Malý rodinný kolektiv maximálně 6 dětí denně s laskavými pečovatelkami, vlastní zahradou a denním pobytem venku. Přijímáme přihlášky na čekací listinu a pro rok 2027/28.",
  alternates: {
    canonical: "/detska-skupina",
  },
  openGraph: {
    title: "Dětská skupina Permoníček · Malý rodinný kolektiv pro 6 dětí",
    description:
      "Laskavá péče pro děti od 1,5 do 3 let bez rodičů. Maximální poměr 1 pečující na 3 děti, zahrada, každodenní pobyt venku.",
    url: `${SITE_CONFIG.url}/detska-skupina`,
    images: ["/images/galerie/ds-1.jpg"],
  },
};

const DAILY_SCHEDULE = [
  {
    time: "08:00 – 09:00",
    title: "Příchod dětí a volná hra",
    desc: "Postupný příchod dětí, laskavé přivítání, ranní adaptace a volná hra podle zájmu děťátka.",
    icon: Sun,
  },
  {
    time: "09:00 – 09:30",
    title: "Ranní kruh a říkanky",
    desc: "Společné přivítání v kroužku, povídání, básničky, pohybové hry s písničkou a rozvoj řeči.",
    icon: Smile,
  },
  {
    time: "09:30 – 10:00",
    title: "Dopolední svačinka",
    desc: "Čerstvé ovoce, zelenina, pečivo, dodržování pitného režimu a nácvik samostatnosti u stolečku.",
    icon: Utensils,
  },
  {
    time: "10:00 – 11:30",
    title: "Pobyt venku & zahrada",
    desc: "Každodenní procházka do přírody, pozorování okolí, hry na vlastní zahradě a rozvoj hrubé motoriky.",
    icon: Trees,
  },
  {
    time: "11:45 – 12:30",
    title: "Společný teplý oběd",
    desc: "Plnohodnotný oběd (polévka i hlavní chod), nácvik stolování a hygienických návyků s laskavou pomocí.",
    icon: Utensils,
  },
  {
    time: "12:30 – 14:30",
    title: "Odpočinek a pohádka",
    desc: "Čtení pohádky, uklidňující ukolébavky a spánek v postýlkách. Nespavé děti mají klidové tvoření.",
    icon: Moon,
  },
  {
    time: "14:30 – 15:00",
    title: "Odpolední svačinka",
    desc: "Doplnění energie zdravou svačinkou a čerstvým čajem.",
    icon: Utensils,
  },
  {
    time: "15:00 – 16:00",
    title: "Odpolední tvoření & odchod",
    desc: "Hry, stavění, malování, shrnutí dne s rodiči při vyzvedávání dětí domů.",
    icon: Heart,
  },
];

export default function DetskaSkupinaPage() {
  const dsPhotos = GALLERY_PHOTOS;
  const dsDocs = DOCUMENTS.filter((d) => d.category === "Dětská skupina");

  return (
    <div className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Domů", path: "/" },
          { name: "Dětská skupina", path: "/detska-skupina" },
        ]}
      />

      {/* Hero */}
      <section className="pt-10 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#bbe364] text-[#111318] text-xs font-black shadow-xs">
              <Baby className="w-3.5 h-3.5"  weight="duotone" aria-hidden="true" />
              <span>Pro děti 1,5 až 3 roky (bez rodičů)</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#111318] tracking-tight leading-[1.08]">
              Dětská skupina Permoníček
            </h1>

            <p className="text-base sm:text-xl text-[#3e4451] font-normal leading-relaxed">
              Malý rodinný kolektiv s{" "}
              <strong className="text-[#111318] font-bold">
                maximem 6 dětí denně
              </strong>
              . Laskavý první krok do kolektivu vrstevníků s individuální
              pozorností, vlastním denním rytmem a stálým týmem čtyř akreditovaných
              tet pečovatelek.
            </p>

            {/* Capacity status banner */}
            <div className="p-4 rounded-2xl bg-[#f4f5f7] border border-black/[0.06] space-y-1 text-xs">
              <div className="flex items-center gap-2 font-bold text-[#111318]">
                <span className="w-2 h-2 rounded-full bg-[#e24d2d]" />
                <span>Kapacita pro školní rok 2026 / 2027 je naplněna</span>
              </div>
              <p className="text-[#5a6170]">
                Přijímáme nezávazné přihlášky mezi náhradníky a rezervace míst
                pro školní rok 2027/28 i mladší ročníky.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <OpenBookingButton
                preset={{
                  type: "detska-skupina",
                  itemTitle: "Dětská skupina – čekací listina",
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111318] text-white text-xs sm:text-sm font-bold tracking-tight hover:bg-[#0b1e2d] transition-colors shadow-md active:scale-98"
              >
                <CalendarCheck className="w-4 h-4 text-[#fdd10a]"  weight="duotone" aria-hidden="true" />
                <span>Zapsat se mezi náhradníky</span>
              </OpenBookingButton>

              <a
                href={`tel:${SITE_CONFIG.contacts.coordinatorPhone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#f4f5f7] hover:bg-[#eaecf0] text-[#111318] text-xs sm:text-sm font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0b6ca3]"  weight="duotone" aria-hidden="true" />
                <span>Zavolat ({SITE_CONFIG.contacts.coordinatorPhoneDisplay})</span>
              </a>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#f4f5f7] shadow-[0_12px_36px_rgba(17,19,24,0.08)]">
              <Image
                src="/images/galerie/ds-1.jpg"
                alt="Děti a teta v dětské skupině Permoníček"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#111318] block">
                    Pondělí až pátek: 8:00 – 16:00
                  </span>
                  <span className="text-[11px] text-[#5a6170] block">
                    Masarykovo náměstí 195, Jílové u Prahy
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#bbe364] text-[#111318] text-xs font-black">
                  Max 6 dětí
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Permoníček DS */}
      <section className="py-14 bg-[#f4f5f7] border-y border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-2xl p-5 shadow-xs space-y-2">
              <span className="p-2.5 rounded-xl bg-[#bbe364] text-[#111318] inline-block">
                <Users className="w-5 h-5"  weight="duotone" aria-hidden="true" />
              </span>
              <h3 className="font-display font-bold text-base text-[#111318]">
                Poměr 1 dospělý na 3 děti
              </h3>
              <p className="text-xs text-[#5a6170] leading-relaxed">
                Každé děťátko má dostatek náruče, pozornosti a bezpečí. Adaptace
                probíhá pozvolna v úzkém kontaktu s rodiči.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-xs space-y-2">
              <span className="p-2.5 rounded-xl bg-[#52b5ed] text-[#0b1e2d] inline-block">
                <Trees className="w-5 h-5"  weight="duotone" aria-hidden="true" />
              </span>
              <h3 className="font-display font-bold text-base text-[#111318]">
                Denní pobyt venku
              </h3>
              <p className="text-xs text-[#5a6170] leading-relaxed">
                Vlastní oplocená zahrada, vycházky po Jílovém a do lesa. Děti
                otužují organismus a poznávají přírodu všemi smysly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-xs space-y-2">
              <span className="p-2.5 rounded-xl bg-[#fdd10a] text-[#111318] inline-block">
                <Utensils className="w-5 h-5"  weight="duotone" aria-hidden="true" />
              </span>
              <h3 className="font-display font-bold text-base text-[#111318]">
                Zdravé stravování
              </h3>
              <p className="text-xs text-[#5a6170] leading-relaxed">
                Pestrý jídelníček z čerstvých surovin, ovoce, zelenina a
                dodržování pitného režimu s respektem k alergiím.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-xs space-y-2">
              <span className="p-2.5 rounded-xl bg-[#e24d2d] text-white inline-block">
                <ShieldCheck className="w-5 h-5"  weight="duotone" aria-hidden="true" />
              </span>
              <h3 className="font-display font-bold text-base text-[#111318]">
                Akreditace MPSV
              </h3>
              <p className="text-xs text-[#5a6170] leading-relaxed">
                Splňujeme všechny přísné hygienické, protipožární i odborné
                standardy kladené na registrované dětské skupiny v ČR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Rhythm Schedule */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111318] tracking-tight">
            Denní rytmus v dětské skupině
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5a6170]">
            Předvídatelný a laskavý řád dává malým dětem pocit bezpečí, klidu a
            jistoty po celý den.
          </p>
        </div>

        <div className="space-y-3">
          {DAILY_SCHEDULE.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#f4f5f7] hover:bg-[#eaecf0] transition-colors gap-3"
              >
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-white text-[#0b6ca3] shadow-xs shrink-0">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-black text-[#111318] tabular-nums px-2.5 py-1 rounded-full bg-white shadow-xs">
                    {item.time}
                  </span>
                  <h3 className="font-display font-bold text-sm sm:text-base text-[#111318]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#3e4451] sm:max-w-md">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Caregivers Team */}
      <section className="py-16 bg-[#f4f5f7] border-y border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111318] tracking-tight">
              Tým pečujících osob
            </h2>
            <p className="mt-2 text-sm text-[#5a6170]">
              O děti pečují čtyři stálé, kvalifikované tety s letitými
              zkušenostmi a akreditací chůvy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DS_CAREGIVERS.map((caregiverName, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="relative w-14 h-14 rounded-2xl bg-[#52b5ed]/15 flex items-center justify-center text-[#0b6ca3]">
                    <Baby className="w-7 h-7"  weight="duotone" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#111318]">
                    {caregiverName}
                  </h3>
                  <p className="text-xs font-semibold text-[#0b6ca3]">
                    Akreditovaná pečující osoba
                  </p>
                </div>
                <p className="mt-3 text-xs text-[#5a6170] pt-3 border-t border-black/[0.06]">
                  Kvalifikovaná chůva pro předškolní děti s letitou praxí
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111318] tracking-tight">
            Ceník školkovného
          </h2>
          <p className="mt-2 text-sm text-[#5a6170]">
            Provoz dětské skupiny je spolufinancován ze státního rozpočtu a
            evropských fondů, díky čemuž je školkovné pro rodiče velmi
            dostupné.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-[#f4f5f7] p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#5a6170] uppercase tracking-wider block">
                Částečná docházka
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-black text-4xl text-[#111318] tabular-nums">
                  349 Kč
                </span>
                <span className="text-sm font-semibold text-[#5a6170]">/ den</span>
              </div>
              <p className="text-xs sm:text-sm text-[#3e4451] font-medium">
                Při docházce 1 až 3 dny v týdnu. Ideální pro postupné zvykání
                děťátka na kolektiv.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/[0.06] text-xs text-[#5a6170]">
              Stravné (oběd + svačinky) se hradí samostatně dle odebraných porcí.
            </div>
          </div>

          <div className="rounded-3xl bg-[#52b5ed] text-[#0b1e2d] p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-3">
              <span className="text-xs font-black text-[#0b1e2d]/70 uppercase tracking-wider block">
                Zvýhodněná celotýdenní docházka
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-black text-4xl text-[#0b1e2d] tabular-nums">
                  318 Kč
                </span>
                <span className="text-sm font-semibold text-[#0b1e2d]/70">
                  / den
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#0b1e2d]/90 font-medium">
                Při docházce 4 až 5 dní v týdnu. Zajišťuje stálý režim a rychlé
                osvojení dovedností.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/10 text-xs text-[#0b1e2d]/80">
              Stravné se hradí samostatně. Možnost uplatnění slevy na dani na
              školkovné.
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-16 bg-[#f4f5f7] border-y border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111318] tracking-tight">
              Život v naší dětské skupině
            </h2>
            <p className="mt-2 text-sm text-[#5a6170]">
              Skutečné momentky z herny, ateliéru, svačinek i venkovních procházek.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {dsPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-white shadow-xs"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/70 to-transparent text-white text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="line-clamp-2 leading-tight">{photo.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Documents Download Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111318] tracking-tight">
            Dokumenty ke stažení
          </h2>
          <p className="mt-2 text-sm text-[#5a6170]">
            Provozní řád, plán výchovy i seznam potřebných věcí do skříňky.
          </p>
        </div>

        <div className="space-y-3">
          {dsDocs.map((doc, idx) => (
            <a
              key={idx}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#f4f5f7] hover:bg-[#eaecf0] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-white text-[#0b6ca3] shadow-xs">
                  <FileText className="w-5 h-5"  weight="duotone" aria-hidden="true" />
                </span>
                <div>
                  <span className="font-display font-bold text-sm sm:text-base text-[#111318] group-hover:underline block">
                    {doc.title}
                  </span>
                  <span className="text-xs text-[#5a6170]">
                    Oficiální {doc.format} dokument
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#0b6ca3] group-hover:underline shrink-0 pl-3">
                Stáhnout PDF
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
