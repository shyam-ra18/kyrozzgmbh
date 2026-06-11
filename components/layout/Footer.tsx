import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  solutions: [
    { label: "Industrial 3D Printing", href: "/#3d-printing" },
    { label: "Rapid Prototyping", href: "/injection-molding/tooling-prototyping" },
    { label: "CNC Machining", href: "/cnc-machining" },
    { label: "Injection Molding", href: "/injection-molding" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Work with Us", href: "/contact" },
    { label: "Contact Sales", href: "/quote" },
    { label: "Data Privacy", href: "/datenschutz" },
  ]
};

export default function Footer({ locale }: { locale: string }) {
  const prefix = locale === "de" ? "/de" : "";

  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 border-t border-slate-900 relative overflow-hidden" id="about">
      {/* Subtle top indicator glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-6">
            {/* Logo in matching theme */}
            <Link href={`${prefix}/`} className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg w-fit">
              <Image src="/kyrozz_logo_hd.png" alt="Kyrozz Logo" width={160} height={40} className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-light">
              Your German manufacturing partner providing industrial-grade 3D printing, injection molding, CNC machining and strategic sourcing solutions worldwide.
            </p>
            
            {/* Contact details */}
            <div className="flex flex-col gap-2.5 pt-2 text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-500" />
                Germany (Munich HQ)
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500" />
                info@kyrozz.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500" />
                +49 XXX XXX XXXX
              </div>
            </div>
            
            <div className="pt-4 flex gap-4">
               <div className="px-3 py-1 bg-green-500/10 text-green-500 border border-green-500/20 rounded-full text-xs font-semibold">🇩🇪 German Managed</div>
               <div className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-semibold flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                 ISO Quality
               </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-xs tracking-widest uppercase font-mono">Solutions</h4>
            <ul className="space-y-3.5 text-sm">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={`${prefix}${link.href}`} className="hover:text-blue-500 transition-colors flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm w-fit">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-500 transition-colors" /> 
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-xs tracking-widest uppercase font-mono">Company</h4>
            <ul className="space-y-3.5 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={`${prefix}${link.href}`} className="hover:text-blue-500 transition-colors flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm w-fit">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-500 transition-colors" /> 
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs tracking-wide">© {new Date().getFullYear()} Kyrozz GmbH. All rights reserved.</p>
          <div className="flex items-center gap-6 text-slate-500 text-xs font-mono">
            <Link href={`${prefix}/impressum`} className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 rounded-sm">Impressum</Link>
            <Link href={`${prefix}/datenschutz`} className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 rounded-sm">Datenschutz</Link>
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
            "description": "German-managed injection molding and plastic manufacturing company",
            "url": "https://kyrozz.com",
            "email": "info@kyrozz.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "DE",
              "addressLocality": "Munich",
            },
            "sameAs": [],
          }),
        }}
      />
    </footer>
  );
}
