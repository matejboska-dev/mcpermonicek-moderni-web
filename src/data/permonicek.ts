export type CourseCategory = "deti" | "rodice-s-detmi" | "dospeli-a-seniori" | "detska-skupina";

export type DayOfWeek = "Pondělí" | "Úterý" | "Středa" | "Čtvrtek" | "Pátek" | "Neděle";

export interface CourseItem {
  id: string;
  title: string;
  subtitle: string;
  category: CourseCategory;
  categoryLabel: string;
  ageGroup: string;
  days: DayOfWeek[];
  time: string;
  location: string;
  lecturer: string;
  price: string;
  priceNote?: string;
  freeTrial: boolean;
  startDate?: string;
  contactName: string;
  contactEmail?: string;
  contactPhone: string;
  externalUrl?: string;
  description: string;
  flyerImage?: string;
  photo: string;
  photoAlt: string;
  accent: "sky" | "coral" | "gold" | "lime";
}

export interface PlannedEvent {
  id: string;
  title: string;
  dateLabel: string;
  isoStart: string;
  isoEnd: string;
  time: string;
  lecturer: string;
  audience: string;
  priceRegular: string;
  priceMember: string;
  bundleNote?: string;
  location: string;
  description: string;
  flyerImage: string;
  status: "upcoming" | "recurring" | "past";
  registrationEmail: string;
  accent: "coral" | "sky" | "gold" | "lime";
}

export const SITE_CONFIG = {
  name: "Mateřské centrum Permoníček",
  shortName: "MC Permoníček",
  legalName: "Mateřské centrum Permoníček, z.s.",
  city: "Jílové u Prahy",
  url: "https://www.mcpermonicek.cz",
  ico: "270 20 207",
  bankAccount: "2682061319/0800",
  foundedYear: 2006,
  registeredDate: "25. 1. 2006",
  networkMemberSince: "5. 4. 2006",
  address: {
    street: "Masarykovo náměstí 195",
    note: "Přízemí budovy ZUŠ (vedle kostela sv. Vojtěcha), první dveře vpravo",
    postalCode: "254 01",
    city: "Jílové u Prahy",
    region: "Středočeský kraj",
    country: "CZ",
    lat: 49.8953,
    lng: 14.4932,
  },
  sokolovnaAddress: "Tělocvična TJ Sokol, Jílové u Prahy (boční vchod)",
  contacts: {
    mainEmail: "permonicek@mcpermonicek.cz",
    coordinatorName: "Gabriela Bošková",
    coordinatorRole: "Hlavní koordinátorka MC a vedoucí Dětské skupiny",
    coordinatorPhone: "+420 739 633 715",
    coordinatorPhoneDisplay: "739 633 715",
    coordinatorEmail: "gabriela.boskova@seznam.cz",
    coordinatorOrgEmail: "gabriela.boskova@mcpermonicek.cz",
    playroomEmail: "permonicek.jilove@gmail.com",
    playroomCoordinator: "Tereza Koťátková",
  },
  nearbyAreas: [
    "Jílové u Prahy",
    "Radlík",
    "Kabáty",
    "Studené",
    "Kamenný Přívoz",
    "Borek",
    "Petrov u Prahy",
    "Pohoří",
    "Okrouhlo",
    "Psáry",
    "Jesenice",
  ],
} as const;

export const COURSES: CourseItem[] = [
  {
    id: "detska-skupina",
    title: "Dětská skupina Permoníček",
    subtitle: "Malý rodinný kolektiv max. 6 dětí denně",
    category: "detska-skupina",
    categoryLabel: "Dětská skupina",
    ageGroup: "1,5 – 3 roky (bez rodičů)",
    days: ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek"],
    time: "8:00 – 16:00",
    location: "Masarykovo nám. 195, Jílové u Prahy",
    lecturer: "G. Bošková, B. Dvořáková, Š. Fornier Kalibová, R. Krmelová",
    price: "318 – 349 Kč / den",
    priceNote: "349 Kč/den (1–3 dny v týdnu) · 318 Kč/den (4–5 dní v týdnu)",
    freeTrial: false,
    contactName: "Gabriela Bošková",
    contactEmail: "gabriela.boskova@seznam.cz",
    contactPhone: "739 633 715",
    description:
      "Laskavý první krok do dětského kolektivu s pevným denním rytmem, respektem k individuálním potřebám a každodenním pobytem venku. Kapacita na rok 2026/27 je naplněna — přijímáme zápisy mezi náhradníky a rezervace na další školní roky.",
    flyerImage: "/images/letaky/detska-skupina-2026-27.png",
    photo: "/images/galerie/ds-2.jpg",
    photoAlt: "Šest malých dětí v barevném kuličkovém bazénku v Dětské skupině Permoníček v Jílovém u Prahy",
    accent: "sky",
  },
  {
    id: "cviceni-v-sokolovne",
    title: "Cvičení v Sokolovně",
    subtitle: "Pohybové hry a motorika pro nejmenší v doprovodu rodičů",
    category: "rodice-s-detmi",
    categoryLabel: "Rodiče s dětmi",
    ageGroup: "2 – 3 roky (s rodiči)",
    days: ["Čtvrtek"],
    time: "8:30 – 9:15 nebo 9:45 – 10:30",
    location: "Tělocvična TJ Sokol Jílové u Prahy (boční vchod)",
    lecturer: "Gabriela Bošková",
    price: "2 250 Kč / 15 lekcí",
    priceNote: "1. lekce ukázková a zdarma · zahájení od 1. 10. 2026",
    freeTrial: true,
    startDate: "od 1. 10. 2026",
    contactName: "Gabriela Bošková",
    contactEmail: "gabriela.boskova@seznam.cz",
    contactPhone: "739 633 715",
    description:
      "Děti cvičí, běhají a překonávají opičí dráhy zábavnou formou za doprovodu maminky či tatínka, rozvíjejí obratnost a zvykají si na vrstevníky ve velkorysém prostoru jílovské Sokolovny.",
    flyerImage: "/images/letaky/cviceni-v-sokolovne-2026-27.png",
    photo: "/images/galerie/ds-7.jpg",
    photoAlt: "Děti při pohybových hrách s velkými gymnastickými míči v MC Permoníček",
    accent: "lime",
  },
  {
    id: "ctvrtecni-herna",
    title: "Čtvrteční volná herna",
    subtitle: "Otevřené odpolední hraní pro děti a setkávání rodičů u kávy",
    category: "rodice-s-detmi",
    categoryLabel: "Rodiče s dětmi",
    ageGroup: "0 – 5 let (s doprovodem)",
    days: ["Čtvrtek"],
    time: "16:30 – 18:00",
    location: "Masarykovo nám. 195, Jílové u Prahy",
    lecturer: "Služba MC Permoníček",
    price: "60 Kč / rodina",
    priceNote: "Členové MC 40 Kč / rodina · káva a čaj zdarma · registrace do 12:00 čtvrtka",
    freeTrial: false,
    startDate: "od října 2026 každý čtvrtek",
    contactName: "Rezervace herny",
    contactEmail: "permonicek.jilove@gmail.com",
    contactPhone: "739 633 715",
    description:
      "Jádro komunitního života v Permoníčku. Dětem jsou k dispozici hračky, skluzavka, kuličkový bazén, odrážedla i knížky, rodičům káva a čaj zdarma. Prosíme o registraci e-mailem do 12:00 daného čtvrtka (herna se otevírá při přihlášení min. 2 dospělých s dětmi).",
    flyerImage: "/images/letaky/ctvrtecni-herna-2026-27.png",
    photo: "/images/galerie/ds-kolektiv-2.jpg",
    photoAlt: "Děti skládají dřevěné vkládačky a hrají si v herně MC Permoníček na Masarykově náměstí",
    accent: "gold",
  },
  {
    id: "tanecky",
    title: "Tanečky I. a II.",
    subtitle: "Taneční sestavy, rytmika a pohybové hry pro předškoláky",
    category: "deti",
    categoryLabel: "Dětské kroužky",
    ageGroup: "3 – 5 let (bez rodičů)",
    days: ["Pondělí", "Středa"],
    time: "16:30 – 17:15 (Po Tanečky I · St Tanečky II)",
    location: "Masarykovo nám. 195, Jílové u Prahy",
    lecturer: "Blanka Dvořáková",
    price: "2 250 Kč / 15 lekcí",
    priceNote: "1. lekce ukázková a zdarma · Po od 5. 10. / St od 30. 9. 2026",
    freeTrial: true,
    startDate: "říjen 2026",
    contactName: "Gabriela Bošková",
    contactEmail: "gabriela.boskova@seznam.cz",
    contactPhone: "739 633 715",
    description:
      "Lektorka Blanka Dvořáková s dětmi hravou formou nacvičí veselé taneční sestavy, rozvíjí cit pro rytmus a nechává dostatek prostoru i pro společné pohybové hry.",
    flyerImage: "/images/letaky/tanecky-2026-27.png",
    photo: "/images/galerie/ds-herna-2.jpg",
    photoAlt: "Malé tanečnice v sukýnkách a maskách v herně MC Permoníček",
    accent: "coral",
  },
  {
    id: "tvoreni-pro-deti",
    title: "Tvoření pro děti",
    subtitle: "Kreativní dílna z kartonu, textilu a přírodnin podle ročních období",
    category: "deti",
    categoryLabel: "Dětské kroužky",
    ageGroup: "3 – 6 let (bez rodičů)",
    days: ["Úterý"],
    time: "16:30 – 17:15",
    location: "Masarykovo nám. 195, Jílové u Prahy",
    lecturer: "Šárka Fornier",
    price: "2 250 Kč / 15 lekcí",
    priceNote: "1. lekce ukázková a zdarma · od 29. 9. 2026",
    freeTrial: true,
    startDate: "od 29. 9. 2026",
    contactName: "Gabriela Bošková",
    contactEmail: "gabriela.boskova@seznam.cz",
    contactPhone: "739 633 715",
    description:
      "Děti tvoří z rozmanitých materiálů (kartonu, textilu, dřeva i přírodnin z okolí Jílového), inspirují se ročními obdobími a svátky a zkoušejí i vlastní výtvarné nápady.",
    flyerImage: "/images/letaky/tvoreni-pro-deti-2026-27.png",
    photo: "/images/galerie/ds-4.jpg",
    photoAlt: "Děti malují a tvoří u stolečku v herně MC Permoníček",
    accent: "gold",
  },
  {
    id: "anglictina-pro-deti",
    title: "Angličtina pro děti",
    subtitle: "Hravé seznámení s angličtinou pro začátečníky a mírně pokročilé",
    category: "deti",
    categoryLabel: "Dětské kroužky",
    ageGroup: "4 – 7 let (bez rodičů)",
    days: ["Pondělí"],
    time: "16:45 – 17:30",
    location: "Masarykovo nám. 195, Jílové u Prahy",
    lecturer: "Katka Jungová",
    price: "2 250 Kč / 15 lekcí",
    priceNote: "1. lekce ukázková a zdarma · od 21. 9. 2026",
    freeTrial: true,
    startDate: "od 21. 9. 2026",
    contactName: "Gabriela Bošková",
    contactEmail: "gabriela.boskova@seznam.cz",
    contactPhone: "739 633 715",
    description:
      "Přirozené a hravé objevování anglických slovíček, písniček a jednoduchých frází bez stresu ze školního zkoušení, přizpůsobené předškolákům a mladším školákům.",
    flyerImage: "/images/letaky/anglictina-pro-deti-2026-27.png",
    photo: "/images/galerie/ds-venku-1.jpg",
    photoAlt: "Společné čtení a prohlížení obrázkové knížky s dětmi v MC Permoníček",
    accent: "sky",
  },
  {
    id: "orientalni-tanec",
    title: "Orientální tanec",
    subtitle: "Odpočinek a ladný pohyb při orientální hudbě se zkušenou lektorkou",
    category: "dospeli-a-seniori",
    categoryLabel: "Dospělí a senioři",
    ageGroup: "Dospělí a dívky",
    days: ["Úterý"],
    time: "17:45 – 18:45",
    location: "Masarykovo nám. 195, Jílové u Prahy",
    lecturer: "Katka Jungová (22 let praxe)",
    price: "2 400 Kč / 15 lekcí",
    priceNote: "1. lekce ukázková a zdarma · od 22. 9. 2026",
    freeTrial: true,
    startDate: "od 22. 9. 2026",
    contactName: "Gabriela Bošková",
    contactEmail: "gabriela.boskova@seznam.cz",
    contactPhone: "739 633 715",
    description:
      "Naučíte se základní taneční kroky a prvky břišního tance, zpevníte střed těla a zrelaxujete mysl. S sebou pití a pohodlné oblečení (tričko, delší volnou sukni či šátek přes boky).",
    flyerImage: "/images/letaky/orientalni-tanec-2026-27.png",
    photo: "/images/galerie/ds-tvoreni-1.jpg",
    photoAlt: "Jarní příroda v Jílovém u Prahy, kde sídlí Mateřské centrum Permoníček",
    accent: "coral",
  },
  {
    id: "joga-s-margit",
    title: "Jóga s Margit",
    subtitle: "Večerní protažení, dech a zklidnění pro dospělé",
    category: "dospeli-a-seniori",
    categoryLabel: "Dospělí a senioři",
    ageGroup: "Dospělí",
    days: ["Úterý"],
    time: "19:15 – 20:45",
    location: "Masarykovo nám. 195, Jílové u Prahy",
    lecturer: "Margit Koláčková",
    price: "170 Kč / lekce",
    freeTrial: false,
    contactName: "Margit Koláčková",
    contactPhone: "722 964 689",
    externalUrl: "https://www.jogasmargit.cz",
    description:
      "Devadesátiminutová večerní lekce jógy pro uvolnění zad, vědomý dech a načerpání nové energie uprostřed pracovního týdne.",
    photo: "/images/galerie/ds-tvoreni-2.jpg",
    photoAlt: "Pohled na Jílové u Prahy a kostel sv. Vojtěcha u sídla MC Permoníček",
    accent: "lime",
  },
  {
    id: "hatha-joga",
    title: "Hatha jóga",
    subtitle: "Nedělní klasická jóga pro harmonický vstup do nového týdne",
    category: "dospeli-a-seniori",
    categoryLabel: "Dospělí a senioři",
    ageGroup: "Dospělí",
    days: ["Neděle"],
    time: "17:30 – 19:00",
    location: "Masarykovo nám. 195, Jílové u Prahy",
    lecturer: "V. Nováková",
    price: "170 Kč / lekce",
    freeTrial: false,
    contactName: "V. Nováková",
    contactPhone: "777 525 422",
    description:
      "Klasická podvečerní hatha jóga zaměřená na plynulé pozice, rovnováhu, pružnost a klidné zakončení víkendu.",
    photo: "/images/galerie/ds-herna-1.jpg",
    photoAlt: "Rozkvetlá louka v Jílovém u Prahy",
    accent: "sky",
  },
  {
    id: "joga-pro-seniory",
    title: "Jóga pro seniory",
    subtitle: "Šetrné protažení kloubů, páteře a dechová cvičení",
    category: "dospeli-a-seniori",
    categoryLabel: "Dospělí a senioři",
    ageGroup: "Senioři",
    days: ["Pondělí"],
    time: "18:00 – 19:30",
    location: "Masarykovo nám. 195, Jílové u Prahy",
    lecturer: "V. Nováková",
    price: "150 Kč / lekce",
    freeTrial: false,
    contactName: "V. Nováková",
    contactPhone: "777 525 422",
    description:
      "Jemná jógová praxe uzpůsobená potřebám seniorů — udržuje pohyblivost, stabilitu a dobrou náladu v přátelské skupině.",
    photo: "/images/galerie/ds-5.jpg",
    photoAlt: "Zimní procházka kolem Jílového u Prahy",
    accent: "gold",
  },
  {
    id: "kondicni-cviceni",
    title: "Kondiční cvičení pro dospělé",
    subtitle: "Večerní posílení a protažení celého těla podle vašich možností",
    category: "dospeli-a-seniori",
    categoryLabel: "Dospělí a senioři",
    ageGroup: "Dospělí",
    days: ["Pondělí"],
    time: "20:00 – 21:00",
    location: "Masarykovo nám. 195, Jílové u Prahy",
    lecturer: "Veronika Svobodová (instruktorka H.P. Fitness)",
    price: "150 Kč / lekce",
    freeTrial: false,
    contactName: "Veronika Svobodová",
    contactPhone: "605 128 202",
    description:
      "Dynamické i zdravotně vyvážené kondiční cvičení pod vedením certifikované instruktorky Veroniky Svobodové s ohledem na kondici a zdravotní stav cvičících.",
    photo: "/images/tym/veronika-svobodova.jpg",
    photoAlt: "Lektorka kondičního cvičení Veronika Svobodová",
    accent: "coral",
  },
];

export const PLANNED_EVENTS: PlannedEvent[] = [
  {
    id: "seminar-detske-emoce-listopad-2026",
    title: "Jak zvládnout náročné dětské emoce a rozvíjet emoční inteligenci dětí",
    dateLabel: "Středa 4. listopadu 2026",
    isoStart: "2026-11-04T19:00:00+01:00",
    isoEnd: "2026-11-04T21:00:00+01:00",
    time: "19:00 – 21:00",
    lecturer: "Jana Gottwaldová (projekt Šťastný rodič)",
    audience: "Pro rodiče dětí 2 – 10 let",
    priceRegular: "300 Kč",
    priceMember: "250 Kč (členi MC)",
    bundleNote: "Zvýhodněné vstupné na celý cyklus 4 seminářů při platbě předem: 1 000 Kč (členi MC 800 Kč)",
    location: "MC Permoníček, Masarykovo nám. 195, Jílové u Prahy (přízemí, první dveře vpravo)",
    description:
      "Praktický seminář o tom, jak ideálně reagovat na vztek a další silné emoce dětí, jak dítě naučit pracovat s vlastními pocity, aby záchvatů vzteku ubývalo, a jaké konkrétní nástroje z praxe fungují v každodenních situacích.",
    flyerImage: "/images/letaky/seminar-detske-emoce-listopad-2026.png",
    status: "upcoming",
    registrationEmail: "gabriela.boskova@seznam.cz",
    accent: "coral",
  },
  {
    id: "seminar-sourozenci-prosinec-2026",
    title: "Jak vychovávat sourozence a podpořit jejich vztah",
    dateLabel: "Středa 9. prosince 2026",
    isoStart: "2026-12-09T19:00:00+01:00",
    isoEnd: "2026-12-09T21:00:00+01:00",
    time: "19:00 – 21:00",
    lecturer: "Jana Gottwaldová (projekt Šťastný rodič)",
    audience: "Zejména pro rodiče dětí 2 – 10 let",
    priceRegular: "300 Kč",
    priceMember: "250 Kč (členi MC)",
    location: "MC Permoníček, Masarykovo nám. 195, Jílové u Prahy",
    description:
      "Jak zvládat sourozenecké šarvátky, žárlivost i srovnávání, spravedlivě nastavovat hranice a dlouhodobě budovat blízké pouto mezi dětmi v rodině.",
    flyerImage: "/images/letaky/seminare-rodicovstvi-2026-27.png",
    status: "upcoming",
    registrationEmail: "gabriela.boskova@seznam.cz",
    accent: "sky",
  },
  {
    id: "seminar-rodicovsky-vztek-leden-2027",
    title: "Jak porozumět rodičovskému vzteku a naučit se s ním pracovat",
    dateLabel: "Středa 13. ledna 2027",
    isoStart: "2027-01-13T19:00:00+01:00",
    isoEnd: "2027-01-13T21:00:00+01:00",
    time: "19:00 – 21:00",
    lecturer: "Jana Gottwaldová (projekt Šťastný rodič)",
    audience: "Zejména pro rodiče dětí 2 – 10 let",
    priceRegular: "300 Kč",
    priceMember: "250 Kč (členi MC)",
    location: "MC Permoníček, Masarykovo nám. 195, Jílové u Prahy",
    description:
      "Otevřené a laskavé setkání o spouštěčích rodičovského vyčerpání a hněvu: jak včas rozpoznat přetížení, zachovat klid a napravit situaci, když nám ujedou nervy.",
    flyerImage: "/images/letaky/seminare-rodicovstvi-2026-27.png",
    status: "upcoming",
    registrationEmail: "gabriela.boskova@seznam.cz",
    accent: "gold",
  },
  {
    id: "pravidelna-ctvrtecni-herna",
    title: "Čtvrteční herny pro děti 0–5 let s doprovodem",
    dateLabel: "Každý čtvrtek (šk. rok 2026/2027)",
    isoStart: "2026-11-05T16:30:00+01:00",
    isoEnd: "2026-11-05T18:00:00+01:00",
    time: "16:30 – 18:00",
    lecturer: "MC Permoníček Jílové u Prahy",
    audience: "Děti 0 – 5 let s rodiči či prarodiči",
    priceRegular: "60 Kč / rodina",
    priceMember: "40 Kč / rodina (členi MC) · káva a čaj zdarma",
    location: "MC Permoníček, Masarykovo nám. 195, Jílové u Prahy",
    description:
      "Registrace předem e-mailem na permonicek.jilove@gmail.com vždy do 12:00 daného čtvrtka (uveďte čtvrtek a počet dospělých a dětí; herna se otevírá při registraci min. dvou dospělých osob s dětmi).",
    flyerImage: "/images/letaky/ctvrtecni-herna-2026-27.png",
    status: "recurring",
    registrationEmail: "permonicek.jilove@gmail.com",
    accent: "lime",
  },
  {
    id: "seminar-jak-mluvit-rijen-2026",
    title: "Jak mluvit, aby nás děti chtěly poslouchat (1. díl cyklu)",
    dateLabel: "Středa 7. října 2026 (proběhlo)",
    isoStart: "2026-10-07T19:00:00+02:00",
    isoEnd: "2026-10-07T21:00:00+02:00",
    time: "19:00 – 21:00",
    lecturer: "Jana Gottwaldová (projekt Šťastný rodič)",
    audience: "Rodiče dětí 2 – 10 let",
    priceRegular: "300 Kč",
    priceMember: "250 Kč",
    location: "MC Permoníček, Masarykovo nám. 195, Jílové u Prahy",
    description:
      "Úvodní říjnové setkání podzimního a zimního cyklu respektující komunikace v rodině. Na další tři navazující semináře (listopad, prosinec, leden) se stále můžete hlásit.",
    flyerImage: "/images/letaky/seminare-rodicovstvi-2026-27.png",
    status: "past",
    registrationEmail: "gabriela.boskova@seznam.cz",
    accent: "sky",
  },
];

export const GALLERY_PHOTOS = [
  {
    src: "/images/galerie/ds-2.jpg",
    alt: "Děti v barevném kuličkovém bazénku v Dětské skupině Permoníček",
    caption: "Kuličkový bazén v herně",
    tag: "Dětská skupina · 1,5–3 roky",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/galerie/ds-tvoreni-2.jpg",
    alt: "Výprava dětí po louce s výhledem na Jílové u Prahy a kostel sv. Vojtěcha",
    caption: "Výpravy do přírody kolem Jílového",
    tag: "Každodenní pobyt venku",
    width: 640,
    height: 480,
  },
  {
    src: "/images/galerie/ds-4.jpg",
    alt: "Společné kreslení a tvoření u dětského stolečku v Permoníčku",
    caption: "Výtvarné a tvořivé dopoledne",
    tag: "Tvoření · 3–6 let",
    width: 480,
    height: 640,
  },
  {
    src: "/images/galerie/ds-7.jpg",
    alt: "Pohybové hry s gymnastickými míči a skluzavkou v prostorné herně",
    caption: "Cvičení a pohyb v herně",
    tag: "Hrubá motorika a radost z pohybu",
    width: 640,
    height: 480,
  },
  {
    src: "/images/galerie/ds-kolektiv-2.jpg",
    alt: "Skládání dřevěných puzzle s Krtečkem u společného stolu",
    caption: "Jemná motorika a soustředění",
    tag: "Čtvrteční herna · 0–5 let",
    width: 640,
    height: 480,
  },
  {
    src: "/images/galerie/ds-herna-1.jpg",
    alt: "Děti s pampeliškovými věnečky na jarní louce v Jílovém u Prahy",
    caption: "Jarní objevování na louce",
    tag: "Malý kolektiv 6 dětí",
    width: 640,
    height: 480,
  },
  {
    src: "/images/galerie/ds-venku-1.jpg",
    alt: "Pečující teta čte dětem pohádku v útulném zázemí centra",
    caption: "Společné čtení a povídání",
    tag: "Respektující přístup",
    width: 480,
    height: 640,
  },
  {
    src: "/images/galerie/ds-kolektiv-1.jpg",
    alt: "Masopustní průvod masek dětí a rodičů u kostela v Jílovém u Prahy",
    caption: "Komunitní akce na náměstí",
    tag: "Tradice v Jílovém od r. 2006",
    width: 640,
    height: 480,
  },
  {
    src: "/images/galerie/ds-1.jpg",
    alt: "Šest malých kamarádů společně pozoruje traktor z okna herny",
    caption: "Šest kamarádů u okna",
    tag: "Bezpečné rodinné zázemí",
    width: 640,
    height: 480,
  },
  {
    src: "/images/galerie/ds-herna-2.jpg",
    alt: "Děti v karnevalových šatech a vlastnoručně vyrobených maskách",
    caption: "Tanečky a karnevalové veselí",
    tag: "Tanečky · 3–5 let",
    width: 640,
    height: 480,
  },
  {
    src: "/images/galerie/ds-tvoreni-1.jpg",
    alt: "Procházka dětí v reflexních vestičkách pod rozkvetlými třešněmi",
    caption: "Bezpečně na procházce pod třešněmi",
    tag: "Jílovská příroda na dosah",
    width: 640,
    height: 480,
  },
  {
    src: "/images/galerie/ds-3.jpg",
    alt: "Stavění sněhuláka v zimní zahradě",
    caption: "Zimní radovánky ve sněhu",
    tag: "Venku v každém ročním období",
    width: 640,
    height: 480,
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Gabriela Bošková",
    role: "Členka představenstva, hlavní koordinátorka MC a vedoucí Dětské skupiny",
    phone: "739 633 715",
    email: "gabriela.boskova@mcpermonicek.cz",
    secondaryEmail: "gabriela.boskova@seznam.cz",
    photo: "/images/tym/gabriela-boskova.jpg",
    bio: "V MC Permoníček působí přes 11 let. Vede Dětskou skupinu Permoníček, koordinuje rozvrh kroužků i komunitních akcí a vede čtvrteční Cvičení pro děti v Sokolovně.",
  },
  {
    name: "Mgr. Petra Šimonová",
    role: "Členka představenstva a realizačního týmu",
    phone: "608 056 458",
    email: "petra.simonova@mcpermonicek.cz",
    photo: "/images/tym/petra-simonova.jpg",
    bio: "Vystudovala Přírodovědeckou fakultu UK, přes 15 let se věnuje environmentální výchově (mj. program Ekoškola v centru TEREZA) a kritickému myšlení. V Jílovém žije od roku 2011.",
  },
  {
    name: "Ing. Zuzana Matiášková",
    role: "Členka představenstva a realizačního týmu",
    phone: "731 401 820",
    email: "zuzana.matiaskova@mcpermonicek.cz",
    photo: "/images/tym/zuzana-matiaskova.jpg",
    bio: "Absolventka VŠE v Praze v oboru systémová analýza, dříve působila v IT consultingu i jako lektorka dětské angličtiny.",
  },
] as const;

export const DS_CAREGIVERS = [
  "Gabriela Bošková",
  "Blanka Dvořáková",
  "Šárka Fornier Kalibová",
  "Renáta Krmelová",
] as const;

export const MEMBERSHIP_PERKS = [
  {
    discount: "40 Kč",
    title: "Zvýhodněné vstupné do čtvrteční herny",
    detail: "40 Kč za celou rodinu místo běžných 60 Kč + káva a čaj zdarma.",
  },
  {
    discount: "−50 Kč",
    title: "Sleva na rodičovské semináře",
    detail: "250 Kč místo 300 Kč na jednotlivé semináře (nebo 800 Kč místo 1 000 Kč za celý cyklus).",
  },
  {
    discount: "8 %",
    title: "Cykloservis Nabike v Sokolovně",
    detail: "Sleva 8 % na dětské zboží — helmy, kola a cyklosedačky po předložení členské průkazky.",
  },
  {
    discount: "20 %",
    title: "Second hand na Pražské ulici",
    detail: "Sleva 20 % na nezlevněný sortiment oblečení (mimo obuv).",
  },
  {
    discount: "10 %",
    title: "Galanterie p. Popelkové & dětské zboží p. Görlicha",
    detail: "10 % sleva v galanterii a 10 % na dětské oblečení a papírové pleny na Masarykově náměstí.",
  },
] as const;

export const DOCUMENTS = [
  {
    title: "Provozní řád Dětské skupiny Permoníček 2026/2027",
    category: "Dětská skupina",
    href: "/dokumenty/Provozni-rad-DS-Permonicek-2026-2027.pdf",
    format: "PDF",
  },
  {
    title: "Plán péče a výchovy DS Permoníček 2026/2027",
    category: "Dětská skupina",
    href: "/dokumenty/Plan-pece-a-vychovy-DS-Permonicek-2026-27.pdf",
    format: "PDF",
  },
  {
    title: "Seznam věcí do Dětské skupiny",
    category: "Dětská skupina",
    href: "/dokumenty/Seznam-veci-do-DS-Permonicek.pdf",
    format: "PDF",
  },
  {
    title: "Výroční zpráva MC Permoníček 2025",
    category: "Zapsaný spolek",
    href: "/dokumenty/Vyrocni-zprava-MC-Permonicek-2025.pptx",
    format: "PPTX",
  },
  {
    title: "Zpráva o činnosti MC Permoníček 2023",
    category: "Zapsaný spolek",
    href: "/dokumenty/Zprava-o-cinnosti-MC-Permonicek-2023.pdf",
    format: "PDF",
  },
] as const;

export const COURSE_TERMS = [
  {
    title: "1. ukázková lekce zdarma a garance 15 lekcí",
    text: "Na dětské kroužky (i orientální tanec) je první lekce nezávazná a zdarma — rozhodnete se až po vyzkoušení. U pololetních kurzů garantujeme 15 výukových lekcí; při neotevření kurzu vracíme 100 % kurzovného.",
  },
  {
    title: "Absence a náhrady",
    text: "Zruší-li lekci lektor, informujeme vás SMS či telefonicky a lekci vždy nahradíme v dohodnutém termínu. U kurzů s jednorázovým vstupem můžete při své absenci poslat za sebe či dítě náhradníka.",
  },
  {
    title: "Férové storno podmínky",
    text: "Před zahájením kurzu vracíme 100 % kurzovného bez storno poplatku. Do 3 proběhlých lekcí vracíme nevyčerpané kurzovné ponížené o 20 %. Při dlouhodobých zdravotních důvodech (s potvrzením lékaře) řešíme refundaci vstřícně individuálně.",
  },
  {
    title: "Předání dětí lektorovi",
    text: "U kurzů s rodiči nese v průběhu lekce odpovědnost doprovod. U kurzů bez rodičů přebírá odpovědnost lektor po osobním předání dítěte na začátku lekce až do jeho vyzvednutí.",
  },
] as const;
