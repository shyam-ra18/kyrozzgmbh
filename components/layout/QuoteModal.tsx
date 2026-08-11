"use client";
import { useEffect, useState } from "react";
import { useLenis } from 'lenis/react';
import { ContactForm } from "@/components/sections/ContactForm";

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      while (target && target.tagName !== 'A' && target.tagName !== 'BUTTON') {
        target = target.parentElement;
      }
      if (!target) return;

      const text = target.textContent?.toLowerCase().trim() || '';

      if (
        text.includes('request a quote') ||
        text.includes('get a quote') ||
        text.includes('angebot anfordern') ||
        text === 'request a quote' ||
        text === 'angebot'
      ) {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(true);
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  // Lock body scroll when modal is open using Lenis (since Lenis overrides CSS overflow)
  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = '';
    };
  }, [isOpen, lenis]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-3 sm:p-6"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90dvh] flex flex-col bg-white border border-slate-200/80 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70 rounded-t-2xl shrink-0">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Request a Quote</h2>
            <p className="text-xs text-slate-500 mt-0.5">Fill in your details and upload your CAD file.</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 flex items-center justify-center bg-white border border-slate-200 hover:bg-slate-100 hover:border-slate-300 rounded-full text-slate-500 hover:text-slate-900 transition-colors shadow-sm shrink-0 ml-4"
            title="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6" data-lenis-prevent="true">
          <ContactForm isModal={true} />
        </div>
      </div>
    </div>
  );
}
