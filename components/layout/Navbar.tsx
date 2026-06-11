"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "3D Printing", href: "/3d-printing" },
  { label: "Injection Molding", href: "/injection-molding" },
  { label: "CNC Machining", href: "/cnc-machining" },
  // { label: "Services", href: "/#services" },
  // { label: "How We Work", href: "/#process" },
  // { label: "Why KYROZZ", href: "/#why" },
  // { label: "Industries", href: "/#industries" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar({ locale }: { locale: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const prefix = locale === "de" ? "/de" : "";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-[background-color,border-color,padding] duration-300 ${isScrolled ? 'bg-[#0A0F1C]/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-[#0A0F1C]/90 backdrop-blur-md border-b border-white/5 py-6'
      }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={`${prefix}/`}
          onClick={(e) => {
            if (pathname === `${prefix}/` || pathname === `${prefix}`) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
        >
          <Image src="/kyrozz_logo_hd.png" alt="Kyrozz Logo" width={160} height={40} className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`${prefix}${link.href}`}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2 px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
            {/* Language toggle */}
            <div className="flex items-center p-1 bg-white/5 rounded-lg border border-white/10">
              {(() => {
                const stripped = pathname?.replace(/^\/(en|de)/, "") || "/";
                return (
                  <>
                    <Link href={stripped || "/"} className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${locale !== "de" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                      }`}>EN</Link>
                    <Link href={`/de${stripped}`} className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${locale === "de" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                      }`}>DE</Link>
                  </>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-slate-300 hover:text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 px-4 py-6 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`${prefix}${link.href}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white py-2 border-b border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 rounded-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
