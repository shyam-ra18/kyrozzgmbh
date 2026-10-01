"use client";
import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from '@hugeicons/react';
import { MailIcon, CallIcon, MapPinIcon } from '@hugeicons/core-free-icons';
import { useContent } from "@/context/LocaleContext";

export default function Footer({ locale }: { locale: string }) {
  const { footer } = useContent();
  const isDe = locale === "de";

  const titleQuickLinks = isDe ? "Schnelllinks" : "Quick Links";
  const titleServices = isDe ? "Dienstleistungen" : "Services";
  const titleContactUs = isDe ? "Kontakt" : "Contact Us";

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 relative overflow-hidden" id="about">
      <div className="section-container section-spacing-lg relative z-10 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Column 1: Logo & Description — 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg w-fit">
              <Image
                src="/kyrozz_logo_hd.png"
                alt="Kyrozz Logo"
                width={250}
                height={68}
                className="w-auto h-14 md:h-16"
              />
            </Link>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm font-medium">
              {footer.description}
            </p>
            <div className="flex gap-3 text-[11px]">
              <span className="px-2 py-0.5 bg-slate-800 text-slate-300 border border-slate-700 rounded-full font-semibold">
                {footer.badge1}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links — 3 cols */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              {titleQuickLinks}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-300 hover:text-blue-400 font-semibold text-sm sm:text-base transition-colors"
                  >
                    <svg className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us — 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              {titleContactUs}
            </h3>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href="mailto:info@kyrozz.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-slate-300 hover:text-blue-400 font-semibold text-sm sm:text-base transition-colors"
                >
                  <HugeiconsIcon icon={MailIcon} className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="break-all">info@kyrozz.de</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+4915758906010"
                  className="flex items-start gap-2.5 text-slate-300 hover:text-blue-400 font-semibold text-sm sm:text-base transition-colors"
                >
                  <HugeiconsIcon icon={CallIcon} className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>+49 157 5890 6010</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Poschingerstraße+33,+94469+Deggendorf,+Germany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-slate-300 hover:text-blue-400 font-semibold text-sm sm:text-base transition-colors"
                >
                  <HugeiconsIcon icon={MapPinIcon} className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{footer.location}</span>
                </a>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/company/kyrozz-gmbh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kyrozz GmbH on LinkedIn"
                title="Follow Kyrozz GmbH on LinkedIn"
                className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kyrozz_gmbh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kyrozz GmbH on Instagram"
                title="Follow Kyrozz GmbH on Instagram"
                className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:border-pink-500 transition-all duration-300 shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Row 3: Copyright & Legal */}
        <div className="pt-6 border-t border-slate-800 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center lg:text-left">
            © {new Date().getFullYear()} Kyrozz GmbH. {footer.copyright}
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-4 gap-y-2 text-slate-500 text-xs font-mono">
            <Link href="/imprint" className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 rounded-sm">
              Imprint
            </Link>
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 rounded-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 rounded-sm">
              Terms & Conditions
            </Link>
            <span className="text-slate-800 hidden sm:inline">|</span>
            <span className="text-slate-500">{footer.vatId}</span>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness"],
            "name": "KYROZZ GmbH",
            "description": "Deutsches Spritzguss- und Kunststofffertigungsunternehmen",
            "url": "https://kyrozz.de",
            "email": "info@kyrozz.de",
            "telephone": ["+4915758906010", "+919512360862"],
            "vatID": "DE463952764",
            "taxID": "DE463952764",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "DE",
              "addressLocality": "Deggendorf",
              "postalCode": "94469",
              "streetAddress": "Poschingerstraße 33"
            },
            "sameAs": [
              "https://www.linkedin.com/company/kyrozz-gmbh",
              "https://www.instagram.com/kyrozz_gmbh"
            ],
          }),
        }}
      />
    </footer>
  );
}
