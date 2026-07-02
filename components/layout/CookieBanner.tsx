"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from '@hugeicons/react';
import { ShieldIcon, ChevronDownIcon, ChevronUpIcon, Cancel01Icon, CheckIcon, CookieIcon } from '@hugeicons/core-free-icons';
import { useContent, useLocale } from "@/context/LocaleContext";

const COOKIE_KEY = "kyrozz_cookie_consent";

export default function CookieBanner() {
  const { cookieConsent } = useContent();
  const locale = useLocale();
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      // Small delay so page renders first
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = (type: "all" | "necessary") => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ type, date: new Date().toISOString() }));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop blur on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-[2px] z-[998] lg:hidden"
            onClick={() => accept("necessary")}
          />

          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="fixed bottom-0 left-0 right-0 z-[999] p-3 sm:p-4 lg:p-6"
          >
            <div className="max-w-5xl mx-auto">
              <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-900/10 overflow-hidden">

                {/* Top accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600" />

                <div className="p-5 sm:p-6 lg:p-8">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <HugeiconsIcon icon={CookieIcon} className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="inline-block text-[10px] font-bold tracking-[0.18em] uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded mb-1">
                          {cookieConsent.badge}
                        </span>
                        <h2 className="text-lg font-bold text-slate-900 leading-tight">
                          {cookieConsent.title}
                        </h2>
                      </div>
                    </div>
                    <button
                      onClick={() => accept("necessary")}
                      className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0 mt-0.5"
                      aria-label="Dismiss"
                    >
                      <HugeiconsIcon icon={Cancel01Icon} className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-4">
                    {cookieConsent.description}
                  </p>

                  {/* Expandable details */}
                  <div className="mb-5">
                    <button
                      onClick={() => setExpanded((v) => !v)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-3"
                    >
                      {expanded ? <HugeiconsIcon icon={ChevronUpIcon} className="w-4 h-4" /> : <HugeiconsIcon icon={ChevronDownIcon} className="w-4 h-4" />}
                      {expanded
                        ? (locale === "de" ? "Weniger anzeigen" : "Show less")
                        : (locale === "de" ? "Was wir erheben — Details" : "What we collect — details")}
                    </button>

                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                            {cookieConsent.dataPoints.map((point, i) => (
                              <div
                                key={i}
                                className="flex gap-3 bg-slate-50 border border-slate-100 rounded-xl p-3.5"
                              >
                                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <HugeiconsIcon icon={CheckIcon} className="w-3 h-3 text-blue-600" />
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-slate-800 mb-0.5">{point.label}</p>
                                  <p className="text-[11px] text-slate-500 leading-snug">{point.detail}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
                            <div className="flex gap-2.5">
                              <HugeiconsIcon icon={ShieldIcon} className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-[11px] text-blue-800 leading-relaxed font-light">
                                  {cookieConsent.purpose}
                                </p>
                                <p className="text-[10px] text-blue-600 mt-1.5 font-medium">
                                  {cookieConsent.provider}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Action row */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:justify-between">
                    <a
                      href={cookieConsent.learnMoreHref}
                      className="text-xs text-slate-400 hover:text-blue-600 underline underline-offset-2 transition-colors order-last sm:order-first"
                    >
                      {cookieConsent.learnMore}
                    </a>

                    <div className="flex items-center gap-2.5 w-full sm:w-auto">
                      <button
                        onClick={() => accept("necessary")}
                        className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all"
                      >
                        {cookieConsent.acceptNecessary}
                      </button>
                      <button
                        onClick={() => accept("all")}
                        className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-200 transition-all"
                      >
                        {cookieConsent.acceptAll}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
