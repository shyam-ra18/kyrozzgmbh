import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import "lenis/dist/lenis.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import SmoothScrolling from "@/components/layout/SmoothScrolling";
import { routing } from "@/lib/routing";

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
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
      </head>
      <body suppressHydrationWarning className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <SmoothScrolling>
            <Navbar locale={locale} />
            <main>{children}</main>
            <Footer locale={locale} />
            <FloatingCTA locale={locale} />
          </SmoothScrolling>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
