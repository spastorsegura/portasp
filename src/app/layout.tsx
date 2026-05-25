import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import {
  personSchema,
  websiteSchema,
  projectsSchema,
  breadcrumbSchema,
} from "@/lib/jsonld";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

// ─────────────────────────────────────────────────────────────────────────────
// Site-wide Metadata (Next.js Metadata API)
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://tu-dominio.com"),
  referrer: "origin-when-cross-origin",

  title: {
    default: "Sergio Pastor | Frontend Developer — React, Next.js & UI/UX",
    template: "%s | Sergio Pastor",
  },

  description:
    "Portfolio de Sergio Pastor — Frontend Developer especializado en React, Next.js, WordPress y experiencias web modernas. Desarrollo de interfaces interactivas, diseño UI/UX y productos digitales enfocados en rendimiento y experiencia de usuario.",

  keywords: [
    // Identity
    "Sergio Pastor",
    "Sergio Pastor Portfolio",
    "sergio pastor frontend developer",

    // Roles
    "Frontend Developer",
    "Frontend Developer Portfolio",
    "Web Developer",
    "React Developer",
    "UI Developer",
    "Creative Developer",

    // Tech
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "WordPress Developer",
    "Astro Developer",
    "HTML CSS JavaScript",
    "UI UX Designer",

    // Design
    "Diseño Web",
    "Diseño UI UX",
    "Animaciones Web",
    "Interactive Web Developer",

    // Location
    "Frontend Developer Perú",
    "Web Developer Lima",
    "Frontend Developer Lima Perú",

    // Portfolio
    "Portfolio Frontend",
    "Portfolio Web Developer",
    "Creative Portfolio",
  ],

  authors: [{ name: "Sergio Pastor", url: "https://tu-dominio.com" }],
  creator: "Sergio Pastor",
  publisher: "Sergio Pastor",

  applicationName: "Sergio Pastor Portfolio",
  category: "technology",
  classification: "Frontend Developer Portfolio",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "profile",
    firstName: "Sergio",
    lastName: "Pastor",
    username: "sergiopastor",
    title: "Sergio Pastor | Frontend Developer Portfolio",
    description:
      "Frontend Developer especializado en React, Next.js, WordPress y experiencias digitales modernas. Desarrollo de interfaces interactivas, UI/UX y productos web enfocados en rendimiento.",
    url: "https://tu-dominio.com",
    siteName: "Sergio Pastor Portfolio",
    locale: "es_PE",

    images: [
      {
        url: "/portfolio_hero_section.png",
        width: 1200,
        height: 630,
        alt: "Sergio Pastor — Frontend Developer Portfolio",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sergio Pastor | Frontend Developer — React & Next.js",
    description:
      "Frontend Developer enfocado en React, Next.js, WordPress, UI/UX y experiencias web modernas.",

    images: [
      {
        url: "/portfolio_hero_section.png",
        alt: "Sergio Pastor Portfolio Preview",
      },
    ],

    creator: "@tuusuario",
    site: "@tuusuario",
  },

  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],

    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  manifest: "/manifest.json",

  other: {
    "theme-color": "#0f172a",
    "color-scheme": "dark",
    "msapplication-TileColor": "#0f172a",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Root Layout
// ─────────────────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ── Font Performance: Preconnect to Google Fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* ── Preload OG Image for fast LCP ── */}
        <link
          rel="preload"
          as="image"
          href="/portfolio_hero_section.png"
          type="image/png"
        />
        {/* Theme */}
        <meta name="theme-color" content="#052F40" />
        <meta name="color-scheme" content="dark light" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        {/* ── Geo / Location signals ── */}
        <meta name="geo.region" content="PE-LIM" />
        <meta name="geo.placename" content="San Borja, Lima" />
        <meta name="geo.position" content="-12.1067;-77.0030" />
        <meta name="ICBM" content="-12.1067, -77.0030" />
        {/* ── JSON-LD: Person Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* ── JSON-LD: WebSite Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* ── JSON-LD: Projects ItemList Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        />
        {/* ── JSON-LD: Breadcrumb Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className={`${urbanist.className} antialiased`}>{children}</body>
    </html>
  );
}
