"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from '@hugeicons/react';
import { Menu01Icon, Cancel01Icon } from '@hugeicons/core-free-icons';
import { useContent, useLocale } from "@/context/LocaleContext";

export default function Navbar({ locale }: { locale: string }) {
  const { navbar } = useContent();
  const currentLocale = useLocale();
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-[background-color,border-color,padding] duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 py-2 shadow-lg' : 'bg-slate-950/95 border-b border-slate-900/50 py-3'
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
          <img
            src="/kyrozz_logo_hd.png"
            alt="Kyrozz Logo"
            className={`transition-all duration-300 w-[clamp(100px,10vw,180px)] h-auto `}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navbar.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold tracking-wider transition-colors py-2 px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isActive ? 'text-blue-400 border-b-2 border-blue-400 rounded-none' : 'text-slate-300 hover:text-blue-400 rounded-md'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Language Switcher - Hidden for now */}
          {/* 
          <div className="flex items-center gap-1 border-l border-slate-200 pl-4 ml-2">
            <button
              onClick={() => handleLocaleChange("en")}
              className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
                currentLocale === "en"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-100"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => handleLocaleChange("de")}
              className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
                currentLocale === "de"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-100"
              }`}
            >
              DE
            </button>
          </div>
          */}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-slate-200 hover:text-blue-400 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <HugeiconsIcon icon={Cancel01Icon} className="w-6 h-6" /> : <HugeiconsIcon icon={Menu01Icon} className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 px-4 py-6 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navbar.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white py-2 border-b border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Switcher - Hidden for now */}
            {/* 
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">{navbar.languageLabel}</span>
              <button
                onClick={() => {
                  handleLocaleChange("en");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-xs font-bold px-3 py-1.5 rounded transition-colors ${
                  currentLocale === "en"
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
                  currentLocale === "de"
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                DE
              </button>
            </div>
            */}
          </div>
        </div>
      )}
    </nav>
  );
}
