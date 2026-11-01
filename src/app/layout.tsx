import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/components/booking/BookingContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/data/permonicek";

const fontDisplay = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const fontBody = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#52b5ed",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default:
      "Mateřské centrum Permoníček | Kroužky, dětská skupina a rodinné centrum Jílové u Prahy",
    template: "%s | MC Permoníček Jílové u Prahy",
  },
  description:
    "Moderní rodinné centrum v Jílovém u Prahy. Kroužky pro děti a miminka (1. ukázková lekce zdarma), akreditovaná dětská skupina (max 6 dětí, 1,5–3 roky), čtvrteční otevřená herna a vzdělávací semináře pro rodiče.",
  keywords: [
    "mateřské centrum Jílové u Prahy",
    "dětská skupina Jílové u Prahy",
    "kroužky pro děti Jílové",
    "cvičení rodiče a děti Jílové",
    "angličtina pro děti Jílové",
    "keramika pro děti Jílové",
    "herna pro děti Jílové u Prahy",
    "MC Permoníček",
    "jesle Jílové u Prahy",
    "semináře pro rodiče",
  ],
  authors: [{ name: SITE_CONFIG.legalName, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.legalName,
  publisher: SITE_CONFIG.legalName,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mateřské centrum Permoníček · Jílové u Prahy",
    description:
      "Kroužky s 1. ukázkovou lekcí zdarma, dětská skupina s rodinnou péčí (max 6 dětí), čtvrteční herna a semináře pro rodiče v Jílovém u Prahy.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/images/galerie/ds-1.jpg",
        width: 1200,
        height: 800,
        alt: "Děti v Mateřském centru Permoníček Jílové u Prahy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateřské centrum Permoníček · Jílové u Prahy",
    description:
      "Kroužky pro děti, rodinná dětská skupina a otevřená herna v Jílovém u Prahy.",
    images: ["/images/galerie/ds-1.jpg"],
  },
  icons: {
    icon: "/images/logo-permonicek.png",
    shortcut: "/images/logo-permonicek.png",
    apple: "/images/logo-permonicek.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${fontDisplay.variable} ${fontBody.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-body bg-white text-[#111318] antialiased">
        <OrganizationJsonLd />
        <BookingProvider>
          <Navbar />
          <main className="flex-1 pt-18 sm:pt-20">{children}</main>
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
