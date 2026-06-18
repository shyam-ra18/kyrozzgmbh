"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Target, Lightbulb, Zap, MessageSquare, Monitor, Printer, ClipboardCheck, Package, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useContent } from '@/context/LocaleContext';

const defineIcons = [Users, ShieldCheck, Target, Lightbulb, Zap];
const processIcons = [MessageSquare, Monitor, Printer, ClipboardCheck, Package];
const industryIcons = [Zap, Lightbulb, Target, Package, Monitor, ShieldCheck];

export function WhatDefinesKyrozz() {
  const { companyHighlights } = useContent();
  return (
    <section className="py-20 border-b border-slate-100 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h3 className="text-3xl font-sans font-bold text-slate-900 mb-16 tracking-tight">{companyHighlights.definesHeading}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        {companyHighlights.defines.map((f, i) => {
          const Icon = defineIcons[i];
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col items-center px-4 ${i !== 0 ? 'pt-8 sm:pt-0' : ''}`}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Icon className="w-10 h-10 text-blue-600" strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-blue-600 mb-3 text-sm tracking-wide whitespace-pre-line leading-snug">{f.title}</h4>
              <p className="text-xs text-slate-600 font-medium max-w-[200px] leading-relaxed">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function ThreeDPrintingProcess() {
  const { companyHighlights } = useContent();
  return (
    <section className="py-20 border-b border-slate-100 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white">
      <h3 className="text-3xl font-sans font-bold text-slate-900 mb-16 tracking-tight">{companyHighlights.processHeading}</h3>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
        {companyHighlights.processSteps.map((step, i) => {
          const Icon = processIcons[i];
          return (
            <React.Fragment key={i}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center w-full lg:w-48 px-2"
              >
                <div className="w-20 h-20 bg-white border-2 border-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="w-10 h-10 text-blue-600" strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-blue-600 mb-3 text-xs tracking-widest uppercase">{step.title}</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
              {i < companyHighlights.processSteps.length - 1 && (
                <div className="hidden lg:flex text-blue-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export function CompanyHighlights() {
  const { companyHighlights } = useContent();
  return (
    <div className="bg-white pb-24 border-t border-slate-100">
      <WhatDefinesKyrozz />

      {/* Our 3D Printing Process Section */}
      <ThreeDPrintingProcess />

      {/* Industries We Empower Section */}
      <section className="py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-sans font-bold text-slate-900 mb-16 tracking-tight">{companyHighlights.industriesHeading}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {companyHighlights.industries.map((ind, i) => {
            const Icon = industryIcons[i];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col text-left group"
              >
                <div className="h-40 w-full mb-6 overflow-hidden rounded-xl bg-slate-100 shadow-sm border border-slate-200">
                  <img src={ind.image} alt={ind.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-multiply opacity-90" />
                </div>
                <div className="flex items-start gap-3 px-1">
                  <Icon className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-bold text-blue-600 mb-2 text-sm leading-tight pr-2">{ind.title}</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
