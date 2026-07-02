"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  CustomerSupportIcon, 
  Clock01Icon, 
  ShieldCheck, 
  GlobeIcon, 
  LayersIcon 
} from '@hugeicons/core-free-icons';
import { useContent } from '@/context/LocaleContext';

const highlights = [
  { icon: CustomerSupportIcon, label: "German\nCustomer Support" },
  { icon: Clock01Icon, label: "Fast Turnaround\n& On-Time Delivery" },
  { icon: ShieldCheck, label: "Quality Assurance\n& Inspection" },
  { icon: GlobeIcon, label: "Global Manufacturing\nNetwork" },
  { icon: LayersIcon, label: "Prototype to\nMass Production" },
];

export function CoreServices() {
  const { introduction } = useContent();
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {introduction.services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col items-center text-center ${i !== 0 ? 'pt-12 md:pt-0 pl-0 md:pl-12' : ''}`}
            >
              <div className="w-[180px] h-[120px] mb-6 overflow-hidden relative group">
                <div className="absolute inset-0 bg-white" />
                <img src={s.image} className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform group-hover:scale-105 duration-500" alt={s.title} />
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-24 h-4 bg-blue-500 rounded-full blur-xl opacity-40 mix-blend-screen" />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">{s.title}</h3>
              <p className="text-slate-700 font-medium whitespace-pre-line leading-snug">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Introduction() {
  const { introduction } = useContent();
  return (
    <section className="relative bg-gradient-to-r from-slate-50 via-white to-slate-50 border-y border-slate-100 overflow-hidden mt-6">
      {/* Subtle decorative dots pattern — right side */}
      <div className="absolute top-0 right-0 w-72 h-full opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)', backgroundSize: '14px 14px' }} />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-48 sm:pt-32 lg:pt-24 pb-12 lg:pb-16">
        {/* Top row: Logo + Text */}
        <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-6 lg:gap-12 mb-5">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <img
              src="/kyrozz_logo_hd.png"
              alt="Kyrozz GmbH Logo"
              className="w-[clamp(140px,15vw,240px)] h-auto"
            />
          </motion.div>

          {/* Vertical blue gradient divider */}
          <div className="hidden lg:block w-[3px] h-20 rounded-full bg-gradient-to-b from-blue-400 via-blue-600 to-blue-400 shrink-0" />

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
              {introduction.heading1}{" "}
              <span className="text-blue-600 italic">{introduction.heading2}</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed font-medium max-w-2xl">
              {introduction.body}
            </p>
          </motion.div>
        </div>

        {/* Bottom row: Highlight icons */}
        <div className="border-t border-slate-100 pt-4">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <HugeiconsIcon icon={h.icon} className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-bold text-slate-600 leading-tight whitespace-pre-line">
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
