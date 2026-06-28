"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { useContent } from "@/context/LocaleContext";

export default function Footer({ locale }: { locale: string }) {
  const { footer } = useContent();
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-900 relative overflow-hidden" id="about">
      {/* Subtle top indicator glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-6">
        {/* Row 1: Logo & Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-900/60">
          <Link href="/" className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg">
            <Image
              src="/kyrozz_logo_hd.png"
              alt="Kyrozz Logo"
              width={120}
              height={32}
              className="w-auto"
            />
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-wider font-semibold font-mono">
            {footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-blue-500 text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Row 2: Description, Badges & Contacts */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-sm">
          <div className="max-w-2xl flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-slate-400 text-xs leading-relaxed font-light max-w-md">
              {footer.description}
            </p>
            <div className="flex gap-3 text-[10px] shrink-0">
              <span className="px-2 py-0.5 bg-green-500/10 text-green-500 border border-green-500/20 rounded-full font-semibold">
                {footer.badge1}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 text-xs text-slate-500 lg:justify-end">
            <a
              href="https://maps.google.com/?q=Poschingerstraße+33,+94469+Deggendorf,+Germany"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              {footer.location}
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=info@kyrozz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              info@kyrozz.com
            </a>
            <a href="tel:+4915758906010" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-500" />
              🇩🇪 +49 157 5890 6010
            </a>
            <a href="tel:+919512360862" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-500" />
              🇮🇳 +91 95123 60862
            </a>
          </div>
        </div>

        {/* Row 3: Copyright & Legal */}
        <div className="pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-600 text-[11px] tracking-wide">
            © {new Date().getFullYear()} Kyrozz GmbH. {footer.copyright}
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-[11px] font-mono">
            <Link href="/impressum" className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 rounded-sm">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 rounded-sm">
              Datenschutz
            </Link>
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
            "email": "info@kyrozz.com",
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
