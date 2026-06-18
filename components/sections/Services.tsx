"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    image: "/cnc.png",
    title: 'CNC MACHINING',
    desc: 'Precision Components\nwith Tight Tolerances',
  },
  {
    image: "/3d-print.png",
    title: '3D PRINTING',
    desc: 'Rapid Prototyping &\nProduction Parts',
  },
  {
    image: "/injection-molding.png",
    title: 'INJECTION MOLDING',
    desc: 'High-Quality Plastic Parts\nfor Global Markets',
  }
];

export function CoreServices() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {services.map((s, i) => (
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
                {/* Simulate a subtle blue glow under the machine */}
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
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            {/* Kyrozz Logo Large Version */}
            <div className="relative flex flex-col items-center">
              <Image src="/service-logo.png" alt="Kyrozz Service Logo" width={500} height={500} className="w-auto max-h-[400px] object-contain drop-shadow-xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-sans font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Engineering Precision.<br />
              <span className="text-blue-600">Delivering Excellence.</span>
            </h2>
            <p className="text-slate-800 text-lg mb-8 leading-relaxed font-medium max-w-xl">
              KYROZZ GmbH is a German manufacturing partner providing 3D printing, injection molding, CNC machining and sourcing solutions for industrial customers worldwide.<br /><br />With local expertise in Germany and trusted production partners, we deliver quality, reliability and performance at every step.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-bold text-sm rounded-md transition-all hover:bg-blue-700 uppercase tracking-wide gap-2 border border-blue-600 mt-4">
              LEARN MORE ABOUT US <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
