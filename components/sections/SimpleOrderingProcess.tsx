"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, Layers, Printer, Check, FileCheck, Compass, Clock, Package, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useContent } from '@/context/LocaleContext';

const stepIcons = [UploadCloud, Layers, Printer];
const highlightIcons = [FileCheck, Compass, Clock, Package];

export function SimpleOrderingProcess() {
  const { simpleOrderingProcess } = useContent();
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#0B1523] tracking-tight">
            {simpleOrderingProcess.heading}
          </h2>
        </div>

        {/* 3-Step Process Grid */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 mb-24 max-w-6xl mx-auto">
          {simpleOrderingProcess.steps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center flex-1 p-6 bg-slate-50/50 rounded-2xl border border-slate-50 hover:bg-slate-50 hover:border-slate-100 transition-all duration-300 group">
                  {/* Step Badge & Icon Container */}
                  <div className="relative mb-6">
                    <div className="absolute -top-2 -left-8 bg-blue-600 text-white font-mono font-bold text-xs px-2 py-1 rounded-sm shadow-md">
                      {step.num}
                    </div>
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-800 mb-3">
                    {step.title}
                  </h3>
                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[260px] font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow between steps */}
                {idx < 2 && (
                  <div className="hidden lg:flex items-center justify-center text-slate-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Detailed Info Card Panel */}
        <div className="max-w-6xl mx-auto bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 sm:p-10 lg:p-12 items-center">

            {/* Left Image Column */}
            <div className="lg:col-span-5 relative w-full aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/3d-print.png"
                alt="Präzise 3D-gedruckte Bauteile"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h3 className="text-2xl font-extrabold text-[#0B1523] mb-5 tracking-tight">
                  {simpleOrderingProcess.cardHeading}
                </h3>
                <ul className="space-y-3">
                  {simpleOrderingProcess.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-blue-600" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-slate-600 leading-relaxed font-medium">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Grid of 4 highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-slate-200/60">
                {simpleOrderingProcess.highlights.map((item, i) => {
                  const Icon = highlightIcons[i];
                  return (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-blue-50/50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-50">
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
