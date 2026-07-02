"use client";
import React, { useEffect, useRef } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { MailIcon, CallIcon, MapPinIcon } from '@hugeicons/core-free-icons';
import { useContent, useLocale } from '@/context/LocaleContext';

export function ContactSection() {
  const { contactSection } = useContent();
  const locale = useLocale();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Auto-resize iframe based on JotForm postMessage events
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (typeof event.data !== 'string') return;
      const args = event.data.split(':');
      if (args.length < 2) return;
      if (args[0] === 'setHeight' && iframeRef.current) {
        iframeRef.current.style.height = `${parseInt(args[1]) + 30}px`;
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100" id="contact">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

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
          
          {/* Left Column: Contact Cards with border labels */}
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
                    🇩🇪 +49 157 5890 6010
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
                  <a href="https://mail.google.com/mail/?view=cm&to=info@kyrozz.de" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-bold text-slate-800 hover:text-blue-600 transition-colors block truncate">
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

          </div>

          {/* Right Column: Contact Form (JotForm) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-6 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:border-blue-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300">
            <iframe
              ref={iframeRef}
              id="JotFormIFrame-261803746797471"
              title="Online Video Upload Form"
              allowTransparency={true}
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/261803746797471"
              frameBorder="0"
              style={{ width: '100%', height: '800px', border: 'none', background: 'transparent', display: 'block' }}
              scrolling="no"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
