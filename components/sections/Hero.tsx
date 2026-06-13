"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-[#0A0F1C]">
      {/* Main Hero Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#030712] via-[#0f172a]/50 to-[#0A0F1C]/20 z-10" />
        <Image
          src="/hero.png"
          alt="Manufacturing Background"
          fill
          priority={true}
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-lighten"
        />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center min-h-screen pb-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-sans font-bold text-white leading-[1.1] tracking-[-1px] mb-6 flex flex-col">
            <span className="block">German Engineering.</span>
            <span className="block text-blue-600">Global Manufacturing.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-lg font-medium">
            Your Partner for 3D Printing, Injection Molding, CNC Machining & Global Sourcing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center gap-2.5 bg-blue-600 text-white px-8 py-4 rounded-md text-sm font-bold transition hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(37,99,235,0.35)] group uppercase tracking-wider border border-blue-600">
              REQUEST A QUOTE
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center justify-center gap-2.5 bg-transparent text-white border border-white/50 px-8 py-4 rounded-md text-sm font-bold transition hover:border-white hover:bg-white/10 group uppercase tracking-wider">
              CONTACT US
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
