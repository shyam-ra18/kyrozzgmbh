"use client";
import React, { useState, Fragment } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, FilePlus2, Settings, Printer, Box, ArrowRight, GraduationCap, Gamepad2, Building2, Wrench } from 'lucide-react';
import { useContent } from '@/context/LocaleContext';

export function Ticker() {
  const { htmlSections } = useContent();
  return (
    <>
      <style>{`
        @keyframes tick {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div className="bg-blue-600 overflow-hidden h-11 flex items-center">
        <div className="flex whitespace-nowrap hover:[animation-play-state:paused]" style={{ animation: 'tick 30s linear infinite' }}>
          {Array(2).fill(htmlSections.ticker).flat().map((item, i) => (
            <span key={i} className="inline-flex items-center font-sans text-[15px] font-semibold tracking-[2px] uppercase text-white/90 px-10">
              {item}
              <span className="inline-block w-1 h-1 bg-white/40 rounded-full ml-10"></span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

const industryIcons = [
  <Settings key="s" className="w-5 h-5 text-blue-600 shrink-0" />,
  <GraduationCap key="g" className="w-5 h-5 text-blue-600 shrink-0" />,
  <Gamepad2 key="gp" className="w-5 h-5 text-blue-600 shrink-0" />,
  <Box key="b" className="w-5 h-5 text-blue-600 shrink-0" />,
  <Building2 key="bu" className="w-5 h-5 text-blue-600 shrink-0" />,
  <Wrench key="w" className="w-5 h-5 text-blue-600 shrink-0" />,
];

export function IndustriesBento() {
  const { industriesBento } = useContent();
  return (
    <section id="industries" className="bg-[#F5F7FA] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl md:text-[38px] font-extrabold tracking-tight text-center text-slate-900">
          {industriesBento.heading}
        </h2>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {industriesBento.industries.map((ind, i) => (
            <div key={i} className="flex flex-col group bg-white rounded-2xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="relative w-full aspect-[16/10] bg-slate-100">
                <Image 
                  src={ind.img} 
                  alt={ind.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    {industryIcons[i]}
                    <h3 className="font-bold text-[14px] text-blue-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors duration-200">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="text-[12px] text-slate-500 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HTMLServices() {
  const { htmlSections } = useContent();
  return (
    <section id="services" className="bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#0B1523] mb-14">{htmlSections.services.heading}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {htmlSections.services.items.map((s, i) => (
            <div key={i} className="bg-[#F8F9FA] rounded-[24px] overflow-hidden border border-slate-100 flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-[240px] w-full bg-slate-200">
                <Image src={s.img} alt={s.name} fill className="object-cover" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 leading-tight">{s.name}</h3>
                <p className="text-[14px] text-slate-600 mb-8 leading-relaxed flex-1">{s.text}</p>
                
                <div className="flex flex-col gap-3">
                  {s.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-slate-800 mt-[2px] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[13px] text-slate-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const processIcons = [
  <FilePlus2 className="w-10 h-10 text-blue-600 stroke-[1.25]" />,
  <Settings className="w-10 h-10 text-blue-600 stroke-[1.25]" />,
  <Printer className="w-10 h-10 text-blue-600 stroke-[1.25]" />,
  <CheckCircle2 className="w-10 h-10 text-blue-600 stroke-[1.25]" />,
  <Box className="w-10 h-10 text-blue-600 stroke-[1.25]" />,
];

export function HTMLProcess() {
  const { htmlSections } = useContent();
  return (
    <section id="process" className="bg-white py-16 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1523] tracking-tight">
            {htmlSections.process.heading}
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="flex flex-wrap lg:flex-nowrap items-start justify-center lg:justify-between gap-x-6 gap-y-12">
          {htmlSections.process.steps.map((step, idx) => (
            <Fragment key={idx}>
              <div className="flex flex-col items-center text-center w-[45%] sm:w-[45%] md:w-[28%] lg:flex-1 group">
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-full border border-slate-100 bg-slate-50/50 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-blue-50 group-hover:scale-105">
                  {processIcons[idx]}
                </div>
                {/* Number & Title */}
                <h3 className="text-[13px] font-extrabold text-blue-600 uppercase tracking-wider mb-2.5 leading-none">
                  {step.num}
                </h3>
                {/* Description */}
                <p className="text-[12px] text-slate-500 leading-relaxed max-w-[220px] font-medium mx-auto">
                  {step.desc}
                </p>
              </div>

              {/* Arrow Indicator between steps */}
              {idx < 4 && (
                <div className="hidden lg:flex items-center justify-center h-20 text-blue-600">
                  <ArrowRight className="w-5 h-5 text-blue-600 stroke-[2.5]" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HTMLFAQ() {
  const { htmlSections } = useContent();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqIcons = [
    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 9h1M9 13h6M9 17h6" /></svg>,
    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  ];

  return (
    <section id="faq" className="bg-white py-28">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0B1523] mb-5 tracking-tight">{htmlSections.faq.heading}</h2>
          <div className="w-10 h-[3px] bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {htmlSections.faq.items.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div 
                key={i} 
                className="bg-white rounded-[20px] p-5 sm:p-7 shadow-[0_2px_16px_rgb(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_4px_24px_rgb(0,0,0,0.06)]"
              >
                <div 
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="flex items-start gap-5 sm:gap-6 cursor-pointer group"
                >
                  <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                    {faqIcons[i]}
                  </div>
                  <div className="flex-1 pt-3 md:pt-4">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className={`text-[17px] font-bold leading-snug transition-colors duration-200 ${isOpen ? 'text-[#0B1523]' : 'text-[#0B1523] group-hover:text-blue-600'}`}>
                        {f.q}
                      </h3>
                      <div className="shrink-0 mt-0.5">
                        <svg 
                          className={`w-[22px] h-[22px] text-blue-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <div className={`overflow-hidden transition-[max-height,opacity] duration-400 ease-in-out ${isOpen ? 'max-h-[300px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-[14px] leading-[1.8] text-[#5C6E8A] pr-4">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
