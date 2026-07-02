"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { TargetIcon, Clock01Icon, ZapIcon, LayersIcon, ShieldCheck, CheckmarkCircle01Icon } from '@hugeicons/core-free-icons';
import { Button } from '../ui/Button';

const features = [
  { icon: TargetIcon, title: 'High Precision', desc: 'Complex geometries with fine details and tight tolerances.' },
  { icon: Clock01Icon, title: 'Fast Turnaround', desc: 'Rapid prototyping and quick production to meet your timelines.' },
  { icon: ZapIcon, title: 'Design Freedom', desc: 'No tooling required - bring your ideas to life without limitations.' },
  { icon: LayersIcon, title: 'Multiple Materials', desc: 'Wide range of engineering plastics to suit every application.' },
  { icon: ShieldCheck, title: 'Reliable Quality', desc: 'Consistent, durable, and high-quality components you can trust.' }
];

export function PrintFeatures() {
  return (
    <section className="py-16 bg-white" id="3d-printing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block py-1 px-3 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] rounded mb-6 uppercase">
              Production
            </div>
            <h2 className="text-4xl md:text-5xl font-sans font-light text-slate-900 leading-[1.05] mb-6 tracking-tight">
              3D Printing <span className="font-bold">Components</span>
            </h2>
            <p className="text-xl font-light text-slate-900 mb-4">
              Your Professional Partner for High-Quality Production of Plastic Components.
            </p>
            <p className="text-base text-slate-500 mb-8 leading-relaxed font-light">
              We specialize in 3D printing components, utilizing both FDM and SLA printing processes. We invite you to explore our website to learn more about our company, our services, and how to contact us. We appreciate your visit to our website.
            </p>
            <div className="flex gap-4">
              <a href="/contact" className="inline-flex items-center justify-center font-bold text-sm rounded-full transition-all bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 px-8 py-4">Request a Quote</a>
              <a href="/3d-printing" className="inline-flex items-center justify-center font-bold text-sm rounded-full transition-all bg-transparent border border-slate-200 text-slate-900 hover:bg-slate-50 shadow-sm px-8 py-4">Learn More</a>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm p-2 bg-slate-50">
            <img 
              src="/3d-print.png" 
              alt="3D Printing Process" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center pt-16 border-t border-slate-100">
        <h3 className="text-3xl font-sans font-light text-slate-900 mb-12 tracking-tight">Why Choose 3D Printing with <span className="font-bold">KYROZZ?</span></h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <HugeiconsIcon icon={f.icon} className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-3 text-sm tracking-wide">{f.title}</h4>
              <p className="text-sm sm:text-base text-slate-500 font-light max-w-[200px] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


