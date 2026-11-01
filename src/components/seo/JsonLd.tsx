import React from "react";
import { COURSES, PLANNED_EVENTS, SITE_CONFIG } from "@/data/permonicek";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ChildCare", "LocalBusiness", "NGO"],
        "@id": `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.legalName,
        alternateName: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/images/logo-permonicek.png`,
        image: `${SITE_CONFIG.url}/images/galerie/ds-2.jpg`,
        description:
          "Mateřské centrum a rodinná Dětská skupina Permoníček v Jílovém u Prahy. Kroužky pro děti s 1. ukázkovou lekcí zdarma, čtvrteční volná herna, večerní semináře o rodičovství a jóga pro dospělé i seniory.",
        foundingDate: "2006-01-25",
        taxID: "27020207",
        telephone: SITE_CONFIG.contacts.coordinatorPhone,
        email: SITE_CONFIG.contacts.mainEmail,
        priceRange: "40 Kč – 2400 Kč",
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address.street,
          addressLocality: SITE_CONFIG.address.city,
          postalCode: SITE_CONFIG.address.postalCode,
          addressRegion: SITE_CONFIG.address.region,
          addressCountry: SITE_CONFIG.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE_CONFIG.address.lat,
          longitude: SITE_CONFIG.address.lng,
        },
        areaServed: SITE_CONFIG.nearbyAreas.map((area) => ({
          "@type": "City",
          name: area,
        })),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "16:00",
            description: "Dětská skupina Permoníček",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Thursday",
            opens: "16:30",
            closes: "18:00",
            description: "Volná herna pro děti 0–5 let s doprovodem",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        inLanguage: "cs-CZ",
        publisher: {
          "@id": `${SITE_CONFIG.url}/#organization`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function EventsJsonLd() {
  const upcoming = PLANNED_EVENTS.filter((e) => e.status === "upcoming");
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: upcoming.map((ev, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "EducationEvent",
        name: ev.title,
        description: ev.description,
        startDate: ev.isoStart,
        endDate: ev.isoEnd,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        image: `${SITE_CONFIG.url}${ev.flyerImage}`,
        location: {
          "@type": "Place",
          name: SITE_CONFIG.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE_CONFIG.address.street,
            addressLocality: SITE_CONFIG.address.city,
            postalCode: SITE_CONFIG.address.postalCode,
            addressCountry: "CZ",
          },
        },
        performer: {
          "@type": "Person",
          name: "Jana Gottwaldová",
        },
        organizer: {
          "@id": `${SITE_CONFIG.url}/#organization`,
        },
        offers: {
          "@type": "Offer",
          price: "300",
          priceCurrency: "CZK",
          availability: "https://schema.org/InStock",
          url: `${SITE_CONFIG.url}/akce`,
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CoursesJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pravidelný program a kroužky MC Permoníček Jílové u Prahy 2026/2027",
    itemListElement: COURSES.map((course, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Course",
        name: course.title,
        description: course.description,
        provider: {
          "@id": `${SITE_CONFIG.url}/#organization`,
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
