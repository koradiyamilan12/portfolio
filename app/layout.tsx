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
  title: "Milan Koradiya - Full Stack Developer",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Milan Koradiya is a Backend-focused Full Stack Developer from India specializing in Node.js, Express, MongoDB, PostgreSQL, and React. Building secure, scalable, and reliable web applications with responsive user interfaces. View portfolio, projects, and technical skills.",
  applicationName: "Milan Koradiya",
  appleWebApp: {
    title: "Milan Koradiya",
  },
  keywords: [
    "Milan Koradiya",
    "Milan Koradiya portfolio",
    "Software Developer",
    "Full Stack Developer",
    "Full Stack Developer India",
    "Backend Developer",
    "Backend Developer India",
    "Frontend Developer",
    "Node.js Developer",
    "Express Developer",
    "MongoDB Developer",
    "PostgreSQL Developer",
    "React Developer",
    "React.js",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer Portfolio",
    "Portfolio Website",
    "UI/UX Developer",
    "Web Development",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Modern Web Development",
    "Indian Developer",
    "Software Engineer",
    "Backend Engineering",
    "Frontend Engineering",
    "Web Application Development",
    "Responsive Design",
    "Performance Optimization",
    "Database Development",
    "API Development",
    "REST API",
    "Secure Web Applications",
    "Scalable Web Applications",
  ],

  authors: [{ name: "Milan Koradiya", url: "https://milankoradiya.in" }],
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
    title: "Milan Koradiya - Full Stack Developer",
    description:
      "Milan Koradiya is a Backend-focused Full Stack Developer specializing in Node.js, Express, MongoDB, PostgreSQL, and React. Building secure, scalable, and reliable web applications.",
    url: "https://milankoradiya.in",
    siteName: "Milan Koradiya",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://milankoradiya.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Milan Koradiya - Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Milan Koradiya - Full Stack Developer",
    description:
      "Milan Koradiya is a Backend-focused Full Stack Developer specializing in Node.js, Express, MongoDB, PostgreSQL, and React. Building secure, scalable, and reliable web applications.",
    images: ["https://milankoradiya.in/og-image.png"],
    creator: "@milankoradiya",
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
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
    url: "https://milankoradiya.in",
    description:
      "Portfolio of Milan Koradiya, a Backend-focused Full Stack Developer specializing in Node.js, Express, MongoDB, PostgreSQL, and React",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://milankoradiya.in/?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Milan Koradiya",
    url: "https://milankoradiya.in",
    jobTitle: "Full Stack Developer",
    description:
      "Backend-focused Full Stack Developer from India specializing in Node.js, Express, MongoDB, PostgreSQL, and React. Building secure, scalable, and reliable web applications.",
    sameAs: [
      "https://github.com/koradiyamilan12",
      "https://www.linkedin.com/in/milankoradiya",
    ],
    knowsAbout: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "React",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Web Development",
      "Full Stack Development",
      "Backend Development",
      "Frontend Development",
      "Database Development",
      "API Development",
      "REST API",
      "UI/UX Design",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Milan Koradiya - Full Stack Developer",
    url: "https://milankoradiya.in",
    description:
      "Professional Full Stack Development services specializing in Node.js, Express, MongoDB, PostgreSQL, and React",
    priceRange: "$$",
    areaServed: "India",
    availableLanguage: ["English", "Hindi", "Gujarati"],
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
