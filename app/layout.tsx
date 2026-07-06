import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";

import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import { HapticHandler } from "@/components/common/HapticHandler";
import Navbar from "@/components/common/Navbar";
import { ThemeProvider } from "@/components/common/ThemeProvider";

import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hankenGrotesk",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://milankoradiya.in"),
  title: "Milan Koradiya - Frontend Developer",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Milan Koradiya is a Frontend Developer specializing in Next.js, React, and modern web technologies. Explore his portfolio and projects.",
  applicationName: "Milan Koradiya",
  appleWebApp: {
    title: "Milan Koradiya",
  },
  keywords: [
    "Milan Koradiya",
    "Milan Koradiya portfolio",
    "Software Developer",
    "Frontend Developer",
    "Frontend Developer India",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer Portfolio",
    "Portfolio Website",
  ],

  authors: [{ name: "Milan Koradiya", url: "https://Milan Koradiya.in" }],
  creator: "Milan Koradiya",
  publisher: "Milan Koradiya",
  category: "technology",

  alternates: {
    canonical: "https://milankoradiya.in",
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
    title: "Milan Koradiya - Frontend Developer",
    description:
      "Milan Koradiya is a Frontend Developer specializing in Next.js, React, and modern web technologies. Explore his portfolio and projects.",
    url: "https://Milan Koradiya.in",
    siteName: "Milan Koradiya",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://milankoradiya.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Milan Koradiya - Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Milan Koradiya - Frontend Developer",
    description:
      "Milan Koradiya is a Frontend Developer specializing in Next.js, React, and modern web technologies. Explore his portfolio and projects.",
    images: ["https://MilanKoradiya.in/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Milan Koradiya",
    url: "https://MilanKoradiya.in",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Milan Koradiya",
    url: "https://MilanKoradiya.in",
    sameAs: [
      "https://github.com/koradiyamilan12",
      "https://www.linkedin.com/in/milankoradiya",
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={`${hankenGrotesk.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HapticHandler />
          <Navbar />
          {children}
          <BackToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
