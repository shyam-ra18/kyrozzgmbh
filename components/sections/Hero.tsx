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
          {/* <div className="font-mono text-[11px] tracking-[2px] uppercase text-blue-500 mb-7 before:content-['//_']">
            Your Partner for 3D Printing · Injection Molding · CNC Machining · Global Sourcing
          </div> */}

          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-sans font-black text-white leading-[1.05] tracking-[-1.5px] mb-8 uppercase flex flex-col">
            <span className="block">German</span>
            <span className="block text-blue-600">Engineering.</span>
            <span className="block text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.35)' }}>
              Global Mfg.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
            Your reliable partner for 3D Printing, Injection Molding, CNC Machining, and Global Sourcing. German project management. Trusted worldwide manufacturing network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center gap-2.5 bg-blue-600 text-white px-8 py-4 rounded-md text-sm font-semibold transition hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(37,99,235,0.35)] group">
              Request a Quote
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center justify-center gap-2.5 bg-transparent text-white border border-white/30 px-8 py-4 rounded-md text-sm font-medium transition hover:border-white hover:bg-white/5 group">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
