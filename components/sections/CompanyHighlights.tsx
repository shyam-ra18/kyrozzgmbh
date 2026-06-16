"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Target, Lightbulb, Zap, MessageSquare, Monitor, Printer, ClipboardCheck, Package, ArrowRight } from 'lucide-react';

const defines = [
  { icon: Users, title: 'Agile & Proficient\nTeam', desc: 'Experienced professionals delivering precision and innovation in every project.' },
  { icon: ShieldCheck, title: 'Quality You\nCan Trust', desc: 'High-quality, precise components built to exceed expectations.' },
  { icon: Target, title: 'Client-Focused\nApproach', desc: 'Your satisfaction is our priority—solutions tailored to your unique needs.' },
  { icon: Lightbulb, title: 'Bespoke\nSolutions', desc: 'Custom 3D printing solutions crafted to match your exact requirements.' },
  { icon: Zap, title: 'Cutting-Edge\nTechnology', desc: 'Advanced 3D printing and scanning technologies for efficient, reliable results.' }
];

const processSteps = [
  { icon: MessageSquare, title: '1. CONSULTATION', desc: 'We understand your ideas and technical requirements.' },
  { icon: Monitor, title: '2. DESIGN & REVIEW', desc: 'We optimize your model for performance and printability.' },
  { icon: Printer, title: '3. PRINTING', desc: 'High-precision printing using advanced technology and quality materials.' },
  { icon: ClipboardCheck, title: '4. QUALITY CHECK', desc: 'Every part is inspected to ensure accuracy, strength, and consistency.' },
  { icon: Package, title: '5. DELIVERY', desc: 'Fast, secure delivery right to your doorstep.' }
];

const industries = [
  { image: '/industries/industry-1.png', icon: Zap, title: 'Industrial Manufacturing', desc: 'Functional parts, tools, and production aids.' },
  { image: '/industries/industry-2.png', icon: Lightbulb, title: 'Education & Research', desc: 'Prototypes, teaching tools, and experiments.' },
  { image: '/industries/industry-3.png', icon: Target, title: 'Hobbyist & Maker', desc: 'Creative projects, custom parts, and more.' },
  { image: '/industries/industry-4.png', icon: Package, title: 'Product Development', desc: 'Prototypes and functional parts for faster innovation.' },
  { image: '/industries/industry-5.png', icon: Monitor, title: 'Model Making & Prototyping', desc: 'Detailed models and visual prototypes.' },
  { image: '/industries/industry-6.png', icon: ShieldCheck, title: 'Custom Parts & Solutions', desc: 'Tailored components for unique applications.' }
];

export function WhatDefinesKyrozz() {
  return (
    <section className="py-20 border-b border-slate-100 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h3 className="text-3xl font-sans font-bold text-slate-900 mb-16 tracking-tight">What Defines KYROZZ?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        {defines.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`flex flex-col items-center px-4 ${i !== 0 ? 'pt-8 sm:pt-0' : ''}`}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <f.icon className="w-10 h-10 text-blue-600" strokeWidth={1.5} />
            </div>
            <h4 className="font-bold text-blue-600 mb-3 text-sm tracking-wide whitespace-pre-line leading-snug">{f.title}</h4>
            <p className="text-xs text-slate-600 font-medium max-w-[200px] leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function ThreeDPrintingProcess() {
  return (
    <section className="py-20 border-b border-slate-100 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white">
      <h3 className="text-3xl font-sans font-bold text-slate-900 mb-16 tracking-tight">Our 3D Printing Process</h3>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
        {processSteps.map((step, i) => (
          <React.Fragment key={i}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center w-full lg:w-48 px-2"
            >
              <div className="w-20 h-20 bg-white border-2 border-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-sm">
                <step.icon className="w-10 h-10 text-blue-600" strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-blue-600 mb-3 text-xs tracking-widest uppercase">{step.title}</h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
            {i < processSteps.length - 1 && (
              <div className="hidden lg:flex text-blue-300">
                <ArrowRight className="w-6 h-6" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export function CompanyHighlights() {
  return (
    <div className="bg-white pb-24 border-t border-slate-100">
      <WhatDefinesKyrozz />

      {/* Our 3D Printing Process Section */}
      <ThreeDPrintingProcess />

      {/* Industries We Empower Section */}
      <section className="py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-sans font-bold text-slate-900 mb-16 tracking-tight">Industries We Empower</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {industries.map((ind, i) => (
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
                <ind.icon className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold text-blue-600 mb-2 text-sm leading-tight pr-2">{ind.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
