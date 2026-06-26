import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { cookies } from "next/headers";
import "@/app/globals.css";
import "lenis/dist/lenis.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import SmoothScrolling from "@/components/layout/SmoothScrolling";
import { routing } from "@/lib/routing";
import { LocaleProvider } from "@/context/LocaleContext";

export const metadata: Metadata = {
  title: {
    template: "%s | KYROZZ GmbH",
    default: "Injection Molding Manufacturer | KYROZZ GmbH Germany",
  },
  description: "German-managed injection molding, 3D printing and assembly services. 500+ completed projects, 20+ global partners, delivered in 15+ countries.",
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: "https://kyrozz.com",
    languages: {
      "en": "https://kyrozz.com",
      "de": "https://kyrozz.com",
      "x-default": "https://kyrozz.com",
    },
  },
  other: {
    "geo.region": "DE-BY",
    "geo.placename": "Munich",
    "geo.position": "48.135125;11.581981",
    "ICBM": "48.135125, 11.581981",
  },
};

// static params removed
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="font-sans">
        <NextIntlClientProvider messages={messages}>
          <LocaleProvider initialLocale={locale as "en" | "de"}>
            <SmoothScrolling>
              <Navbar locale={locale} />
              <main>{children}</main>
              <Footer locale={locale} />
              <FloatingCTA locale={locale} />
            </SmoothScrolling>
          </LocaleProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
