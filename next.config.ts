import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/aktuality",
        destination: "/akce",
        permanent: true,
      },
      {
        source: "/aktuality/",
        destination: "/akce",
        permanent: true,
      },
      {
        source: "/cs",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cs/planovane-akce",
        destination: "/akce",
        permanent: true,
      },
      {
        source: "/cs/planovane-akce/",
        destination: "/akce",
        permanent: true,
      },
      {
        source: "/cs/detska-skupina",
        destination: "/detska-skupina",
        permanent: true,
      },
      {
        source: "/cs/detska-skupina/:path*",
        destination: "/detska-skupina",
        permanent: true,
      },
      {
        source: "/projekty/detska-skupina",
        destination: "/detska-skupina",
        permanent: true,
      },
      {
        source: "/program/nabidka-kurzu",
        destination: "/program",
        permanent: true,
      },
      {
        source: "/program/provozni-podminky-kurzu",
        destination: "/program#podminky",
        permanent: true,
      },
      {
        source: "/kalendar/pravidelny-program/herna",
        destination: "/akce#herna",
        permanent: true,
      },
      {
        source: "/kalendar/:path*",
        destination: "/program",
        permanent: true,
      },
      {
        source: "/kontakty",
        destination: "/kontakt",
        permanent: true,
      },
      {
        source: "/kontakty/:path*",
        destination: "/kontakt",
        permanent: true,
      },
      {
        source: "/o-nas",
        destination: "/kontakt#o-nas",
        permanent: true,
      },
      {
        source: "/o-nas/:path*",
        destination: "/kontakt#o-nas",
        permanent: true,
      },
      {
        source: "/podporili-nas",
        destination: "/kontakt#podpora",
        permanent: true,
      },
      {
        source: "/cs/permonickova-burza-prace",
        destination: "/kontakt#zapojte-se",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
