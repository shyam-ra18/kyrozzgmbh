"use client";
import { useEffect, useState, useRef } from "react";

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      while (target && target.tagName !== 'A' && target.tagName !== 'BUTTON') {
        target = target.parentElement;
      }
      if (!target) return;

      const text = target.textContent?.toLowerCase().trim() || '';

      // Match variants of "Request a Quote" / "Angebot anfordern"
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
        setIsLoading(true); // reset loading state when opened
      }
    };

    // Use capturing phase to intercept before Next.js Link handles navigation
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 sm:p-6"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col bg-white border border-slate-200/80 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 bg-slate-50/50 shrink-0">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Request a Quote</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 bg-white border border-slate-200 hover:bg-slate-100 hover:border-slate-300 rounded-full text-slate-500 hover:text-slate-900 transition-colors shadow-sm"
            title="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Iframe Container */}
        <div className="w-full relative flex-1 overflow-scroll bg-slate-50 min-h-[400px]">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
              <div className="w-10 h-10 border-4 border-slate-100 border-t-blue-600 rounded-full animate-spin mb-4" />
              <p className="text-sm sm:text-base text-slate-600 font-bold animate-pulse">Loading secure form...</p>
            </div>
          )}
          {/* Cropping wrapper to hide Jotform branding at the bottom */}
          <div className="w-full h-full overflow-scroll" style={{ height: 'calc(100% - 65px)' }}>
            <iframe
              ref={iframeRef}
              id="JotFormIFrame-261803746797471"
              title="Online Quote Form"
              allowTransparency={true}
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/261803746797471"
              frameBorder="0"
              onLoad={() => setIsLoading(false)}
              style={{ width: '100%', height: '1000px', border: 'none', background: 'transparent', display: 'block' }}
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
