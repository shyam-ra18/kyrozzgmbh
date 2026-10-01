"use client";
import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { MailIcon, CallIcon, MapPinIcon } from '@hugeicons/core-free-icons';
import { useContent, useLocale } from '@/context/LocaleContext';
import { ContactForm } from '@/components/sections/ContactForm';

export function ContactSection() {
  const { contactSection } = useContent();
  const locale = useLocale();

  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-t border-slate-100" id="contact">
      <div className="section-container">

        {/* Heading Block */}
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] rounded mb-6 uppercase">
            {contactSection.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 mb-4 tracking-tight">
            {contactSection.heading} <span className="text-blue-600">{contactSection.headingHighlight}</span>
          </h2>
          <p className="text-base text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">{contactSection.subheading}</p>
        </div>

        {/* 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">

          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-9 pt-3">

            {/* Phone Card */}
            <div className="border border-slate-200/80 rounded-2xl p-6 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.01)] relative hover:border-blue-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 group">
              <span className="absolute -top-3 left-5 px-2.5 py-0.5 bg-white text-[10px] font-extrabold text-blue-600 tracking-wider uppercase border border-slate-200/80 rounded-md">
                {locale === 'de' ? 'Telefon' : 'Phone'}
              </span>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <HugeiconsIcon icon={CallIcon} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                    {locale === 'de' ? 'Anrufen' : 'Call us'}
                  </h4>
                  <a href="tel:+4915758906010" className="text-base sm:text-lg font-bold text-slate-800 hover:text-blue-600 transition-colors block">
                    +49 157 5890 6010
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="border border-slate-200/80 rounded-2xl p-6 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.01)] relative hover:border-blue-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 group">
              <span className="absolute -top-3 left-5 px-2.5 py-0.5 bg-white text-[10px] font-extrabold text-blue-600 tracking-wider uppercase border border-slate-200/80 rounded-md">
                {locale === 'de' ? 'E-Mail' : 'Email'}
              </span>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <HugeiconsIcon icon={MailIcon} className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                    {locale === 'de' ? 'Schreiben' : 'Write to us'}
                  </h4>
                  <a href="mailto:info@kyrozz.de" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-bold text-slate-800 hover:text-blue-600 transition-colors block truncate">
                    info@kyrozz.de
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="border border-slate-200/80 rounded-2xl p-6 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.01)] relative hover:border-blue-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 group">
              <span className="absolute -top-3 left-5 px-2.5 py-0.5 bg-white text-[10px] font-extrabold text-blue-600 tracking-wider uppercase border border-slate-200/80 rounded-md">
                {locale === 'de' ? 'Adresse' : 'Address'}
              </span>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mt-1">
                  <HugeiconsIcon icon={MapPinIcon} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                    {locale === 'de' ? 'Besuchen' : 'Visit us'}
                  </h4>
                  <a href="https://maps.google.com/?q=Poschingerstraße+33,+94469+Deggendorf,+Germany" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-bold text-slate-800 hover:text-blue-600 transition-colors block leading-relaxed">
                    KYROZZ GmbH<br />
                    Poschingerstraße 33<br />
                    94469 Deggendorf, Germany
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="border border-slate-200/80 rounded-2xl p-6 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.01)] relative hover:border-blue-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 group">
              <span className="absolute -top-3 left-5 px-2.5 py-0.5 bg-white text-[10px] font-extrabold text-blue-600 tracking-wider uppercase border border-slate-200/80 rounded-md">
                {locale === 'de' ? 'Social Media' : 'Social Media'}
              </span>
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                  {locale === 'de' ? 'Folgen Sie uns' : 'Follow Us'}
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/kyrozz-gmbh"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kyrozz GmbH on LinkedIn"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-[#0077b5] text-slate-700 hover:text-white font-bold text-sm transition-all duration-300 group/link border border-slate-200/80 shadow-sm"
                  >
                    <svg className="w-5 h-5 fill-current text-[#0077b5] group-hover/link:text-white transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/kyrozz_gmbh"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kyrozz GmbH on Instagram"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-slate-700 hover:text-white font-bold text-sm transition-all duration-300 group/insta border border-slate-200/80 shadow-sm"
                  >
                    <svg className="w-5 h-5 fill-current text-[#e1306c] group-hover/insta:text-white transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Quote Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
}
