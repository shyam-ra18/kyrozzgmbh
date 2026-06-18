"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Award, Zap, ShieldCheck, Coins } from 'lucide-react';

const expectations = [
  {
    num: "01",
    icon: HeartHandshake,
    title: "Customer-Focused Solutions",
    desc: "We listen, understand, and deliver solutions tailored exactly to your needs."
  },
  {
    num: "02",
    icon: Award,
    title: "Experienced Professionals",
    desc: "Our expertise ensures flawless results from consultation to completion."
  },
  {
    num: "03",
    icon: Zap,
    title: "Fast & Reliable Turnaround",
    desc: "We value your time and guarantee quick, dependable service and delivery."
  },
  {
    num: "04",
    icon: ShieldCheck,
    title: "High Quality Assured",
    desc: "Premium materials and advanced technology for precise, durable, and consistent parts."
  },
  {
    num: "05",
    icon: Coins,
    title: "Great Value for Money",
    desc: "Excellent quality and service at a competitive price-performance ratio."
  }
];

export function WhatYouExpect() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left sticky column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-mono tracking-wider uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping"></span>
              Our Commitment
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              What You Can <br />
              <span className="text-blue-600 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Expect from KYROZZ</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed max-w-md font-medium">
              We combine German engineering precision with client-oriented service. Every engagement is built on transparency, quality, and exceptional performance.
            </p>
            <div className="pt-4 hidden lg:block">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
            </div>
          </div>

          {/* Right expectations list */}
          <div className="lg:col-span-7 space-y-4">
            {expectations.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle color highlight on hover */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  <div className="flex gap-6 items-center flex-1">
                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-xl bg-blue-50/50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0 shadow-xs">
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-blue-600 transition-colors duration-200">
                        {exp.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-xl font-medium">
                        {exp.desc}
                      </p>
                    </div>
                  </div>

                  {/* Large floating number */}
                  <div className="text-4xl sm:text-5xl font-extrabold font-mono text-slate-100/70 select-none self-end sm:self-center group-hover:text-blue-50 transition-colors duration-300 shrink-0">
                    {exp.num}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
