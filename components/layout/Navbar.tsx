"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "3D PRINTING", href: "/3d-printing" },
  { label: "INJECTION MOLDING & CNC", href: "/injection-molding" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT", href: "/contact" },
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

  const handleLocaleChange = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-[background-color,border-color,padding] duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm' : 'bg-white border-b border-slate-100 py-6'
      }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
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
          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold transition-colors py-2 px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isActive ? 'text-blue-600 border-b-2 border-blue-600 rounded-none' : 'text-slate-700 hover:text-blue-600 rounded-md'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 border-l border-slate-200 pl-4 ml-2">
            <button
              onClick={() => handleLocaleChange("en")}
              className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
                locale === "en"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-100"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => handleLocaleChange("de")}
              className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
                locale === "de"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-100"
              }`}
            >
              DE
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-slate-800 hover:text-blue-600 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
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
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white py-2 border-b border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Language:</span>
              <button
                onClick={() => {
                  handleLocaleChange("en");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-xs font-bold px-3 py-1.5 rounded transition-colors ${
                  locale === "en"
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  handleLocaleChange("de");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-xs font-bold px-3 py-1.5 rounded transition-colors ${
                  locale === "de"
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
