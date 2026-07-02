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

  const servicesList = isDe ? [
    { label: "FDM-Druck", href: "/3d-printing" },
    { label: "SLA-Druck", href: "/3d-printing" },
    { label: "Werkzeugbau", href: "/injection-molding" },
    { label: "Spritzguss", href: "/injection-molding" },
    { label: "Qualitätsprüfung", href: "/injection-molding" },
    { label: "Montagearbeiten", href: "/assembly-services" },
  ] : [
    { label: "FDM Printing", href: "/3d-printing" },
    { label: "SLA Printing", href: "/3d-printing" },
    { label: "Tooling", href: "/injection-molding" },
    { label: "Injection Molding", href: "/injection-molding" },
    { label: "Quality Testing", href: "/injection-molding" },
    { label: "Assembly Services", href: "/assembly-services" },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16 text-slate-400 relative overflow-hidden" id="about">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col">
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg w-fit">
              <Image
                src="/kyrozz_logo_hd.png"
                alt="Kyrozz Logo"
                width={220}
                height={60}
                className="w-auto h-12 md:h-14"
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

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              {titleQuickLinks}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 font-semibold text-sm sm:text-base transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              {titleServices}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {servicesList.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="text-slate-300 hover:text-blue-400 font-semibold text-sm sm:text-base transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              {titleContactUs}
            </h3>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=info@kyrozz.de"
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
                  <span>🇩🇪 +49 157 5890 6010</span>
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
            {/* <Link href="/impressum" className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 rounded-sm">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 rounded-sm">
              Datenschutz
            </Link> */}
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
            "url": "https://kyrozz.com",
            "email": "info@kyrozz.de",
            "telephone": ["+4915758906010", "+919512360862"],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "DE",
              "addressLocality": "Deggendorf",
              "postalCode": "94469",
              "streetAddress": "Poschingerstraße 33"
            },
            "sameAs": [],
          }),
        }}
      />
    </footer>
  );
}
