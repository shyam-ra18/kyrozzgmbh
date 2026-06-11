"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function PageHero({
  badge,
  title,
  description,
  children
}: {
  badge: string;
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-900">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            {badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
            {description}
          </p>
          {children && (
            <div className="flex flex-wrap items-center gap-4">
              {children}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
