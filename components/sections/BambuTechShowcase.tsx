"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Coins, Timer, Leaf, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useContent } from '@/context/LocaleContext';

const advantageIcons = [Hexagon, Coins, Timer, Leaf, ShieldCheck];

export function BambuTechShowcase() {
  const { bambuTechShowcase } = useContent();
  return (
    <div className="bg-white">

      {/* 1. Our 3D Printing Technology */}
      <section className="py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-sans font-bold text-slate-900 tracking-tight">{bambuTechShowcase.technologyHeading}</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 bg-white rounded-[24px] p-8 lg:p-12 shadow-[0_4px_24px_rgb(0,0,0,0.03)] border border-[#0B1523]/5 max-w-6xl mx-auto">

          {/* Left: H2S */}
          <div className="flex flex-col md:flex-row gap-8 items-center lg:items-start lg:pr-12 pb-12 lg:pb-0">
            <div className="w-full md:w-[45%] flex-shrink-0">
              <Image src="/bambulab-h2s.png" alt="Bambu Lab H2S" width={400} height={400} className="w-full h-auto object-contain" />
            </div>
            <div className="w-full md:w-[55%] space-y-3 pt-2">
              <div>
                <h4 className="text-[22px] font-bold text-blue-600 mb-1.5">Bambu Lab H2S</h4>
                <p className="text-[13px] font-semibold text-[#0B1523]">{bambuTechShowcase.h2s.tagline}</p>
              </div>
              <div className="space-y-3 pt-3">
                {bambuTechShowcase.h2s.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-blue-600 shrink-0 mt-[1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span className="text-[13px] text-slate-600 leading-snug font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: P2S */}
          <div className="flex flex-col md:flex-row gap-8 items-center lg:items-start lg:pl-12 pt-12 lg:pt-0">
            <div className="w-full md:w-[45%] flex-shrink-0">
              <Image src="/bambulab-p2s.png" alt="Bambu Lab P2S" width={400} height={400} className="w-full h-auto object-contain" />
            </div>
            <div className="w-full md:w-[55%] space-y-3 pt-2">
              <div>
                <h4 className="text-[22px] font-bold text-blue-600 mb-1.5">Bambu Lab P2S</h4>
                <p className="text-[13px] font-semibold text-[#0B1523]">{bambuTechShowcase.p2s.tagline}</p>
              </div>
              <div className="space-y-3 pt-3">
                {bambuTechShowcase.p2s.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-blue-600 shrink-0 mt-[1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span className="text-[13px] text-slate-600 leading-snug font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Advantages of FDM 3D Printing */}
      <section className="py-20 bg-slate-50/50 border-t border-b border-slate-100 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-sans font-bold text-slate-900 mb-16 tracking-tight">
          {bambuTechShowcase.advantagesHeading}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {bambuTechShowcase.advantages.map((item, i) => {
            const Icon = advantageIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="flex flex-col bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full text-center group"
              >
                {/* Top content wrapper */}
                <div className="flex flex-col items-center flex-1 w-full">
                  <div className="w-14 h-14 rounded-2xl border border-blue-50 flex items-center justify-center mb-6 bg-blue-50/50 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-3 text-sm tracking-tight leading-snug min-h-[44px] flex items-center justify-center">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mb-6 leading-relaxed max-w-[200px]">
                    {item.desc}
                  </p>
                </div>

                {/* Checklist items at the bottom */}
                <div className="w-full text-left space-y-2.5 pt-4 border-t border-slate-100 mt-auto">
                  {item.checklist.map((checkText, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" strokeWidth={3} />
                      <span className="text-[11px] text-slate-600 font-semibold leading-none">{checkText}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Process & Highlights */}
      <section className="pb-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 5-Step Process Grid */}
        <div className="relative mb-20 pt-16 max-w-6xl mx-auto">
          {/* Connecting Dashed Line for Desktop */}
          <div className="hidden lg:block absolute top-[96px] left-[8%] right-[8%] h-0.5 border-t-2 border-dashed border-slate-200 z-0" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 relative z-10">
            {bambuTechShowcase.processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-full border border-slate-100 bg-white flex items-center justify-center mb-6 shadow-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white group-hover:scale-105 group-hover:shadow-lg relative z-10">
                  <span className="text-blue-600 group-hover:text-white transition-colors duration-300">
                    {idx === 0 && <svg className="w-10 h-10 stroke-[1.25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M9 15h6" /><path d="M12 12v6" /></svg>}
                    {idx === 1 && <svg className="w-10 h-10 stroke-[1.25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>}
                    {idx === 2 && <svg className="w-10 h-10 stroke-[1.25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><path d="M6 14h12v8H6z" /><path d="M6 2h12v6H6z" /></svg>}
                    {idx === 3 && <svg className="w-10 h-10 stroke-[1.25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>}
                    {idx === 4 && <svg className="w-10 h-10 stroke-[1.25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>}
                  </span>
                </div>
                {/* Number & Title */}
                <h3 className="text-[13px] font-extrabold text-blue-600 uppercase tracking-wider mb-2.5 leading-none">
                  {step.num}
                </h3>
                {/* Description */}
                <p className="text-[12px] text-slate-500 leading-relaxed max-w-[220px] font-medium mx-auto min-h-[36px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 5-Column Highlights Card */}
        <div className="bg-slate-50/80 rounded-3xl border border-slate-100 p-6 md:p-8 max-w-6xl mx-auto shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
            {bambuTechShowcase.highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 + 0.2, duration: 0.4 }}
                className={`flex flex-col justify-between px-4 lg:pl-6 ${i !== 0 ? 'pt-6 sm:pt-0' : ''}`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center mb-4 text-blue-600">
                    {i === 0 && <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" /></svg>}
                    {i === 1 && <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L12 7.5l5.571 2.25m-11.142 4.5L12 16.5l5.571-2.25m-11.142 0L2.25 12l4.179-2.25m11.142 4.5l4.179-2.25-4.179-2.25M6 15v3.75C6 19.99 9.92 21 12 21s6-1.01 6-2.25V15" /></svg>}
                    {i === 2 && <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>}
                    {i === 3 && <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    {i === 4 && <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>}
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm leading-tight mb-2 min-h-[36px] flex items-center whitespace-pre-line">
                    {item.label}
                  </h4>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose FDM 3D Printing? */}
      <section className="relative overflow-hidden pb-12 lg:pb-16 bg-white border-t border-slate-100">
        {/* Subtle dot pattern background in top left */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#94a3b8 2px, transparent 2px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse at top left, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at top left, black 30%, transparent 70%)'
          }}
        />

        {/* Slanted Image Background (Desktop) */}
        <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full z-0 pointer-events-none">
          {/* Blue border/line effect */}
          <div className="absolute inset-0 bg-blue-600 shadow-2xl" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }} />
          {/* Image */}
          <div className="absolute inset-y-0 right-0 w-full ml-1.5" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}>
            <Image
              src="/3dprint-ser1.png"
              alt="Bambu Lab Druckersetup"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex">
          <div className="w-full lg:w-1/2 py-12 lg:py-20 lg:pr-12">
            <h2 className="text-4xl md:text-[48px] font-extrabold text-blue-900 mb-4 tracking-tight leading-[1.1]">
              {bambuTechShowcase.fdmSection.heading1}<br />
              <span className="text-blue-600">{bambuTechShowcase.fdmSection.heading2}</span>
            </h2>
            <p className="text-lg font-bold text-slate-800 mb-4 leading-snug">
              {bambuTechShowcase.fdmSection.tagline}
            </p>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed max-w-lg mb-8 font-medium">
              <p>{bambuTechShowcase.fdmSection.body1}</p>
              <p>{bambuTechShowcase.fdmSection.body2}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 text-sm tracking-wide"
              >
                {bambuTechShowcase.fdmSection.ctaPrimary} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-blue-600 border border-slate-200 rounded-md font-bold hover:bg-slate-50 transition-colors text-sm tracking-wide shadow-sm"
              >
                {bambuTechShowcase.fdmSection.ctaSecondary} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden w-full mt-12 relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="/hero_3d_printer.png"
              alt="Bambu Lab Druckersetup"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
