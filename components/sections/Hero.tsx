"use client";
import { useContent } from '@/context/LocaleContext';
import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { FileText, LayersIcon, CallIcon } from '@hugeicons/core-free-icons';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  const { hero } = useContent();
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[650px] lg:min-h-[750px] flex items-center bg-[#0A0F1C] py-10 md:py-0 mb-10">
      {/* Main Hero Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[50%] bg-linear-to-r from-[#0A0F1C] via-[#0A0F1C]/60 to-transparent z-10" />
        <Image
          src="/hero2.webp"
          alt="Fertigungshintergrund"
          fill
          priority={true}
          className="absolute left-0 top-0 w-full h-full object-fill mix-blend-lighten"
        />
      </div>

      {/* Content */}
      <div className="relative z-30 section-container w-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-[clamp(2rem,1.5rem+2.5vw,4.5rem)] font-sans font-bold text-white leading-[1.1] tracking-[-1px] mb-6 flex flex-col">
            <span className="block">{hero.line1}</span>
            <span className="block text-blue-600">{hero.line2}</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-lg font-medium">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2.5 bg-blue-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-md text-sm font-bold transition hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(37,99,235,0.35)] group uppercase tracking-wider border border-blue-600 min-h-[44px]">
              <HugeiconsIcon icon={FileText} className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              {hero.ctaPrimary}
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2.5 bg-transparent text-white border border-white/50 px-6 sm:px-8 py-3.5 sm:py-4 rounded-md text-sm font-bold transition hover:border-white hover:bg-white/10 group uppercase tracking-wider min-h-[44px]">
              <HugeiconsIcon icon={CallIcon} className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              {hero.ctaSecondary}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Banner */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-full max-w-[1400px] section-container z-40">
        <div className="bg-gradient-to-br from-slate-900/90 via-[#0B1121]/95 to-slate-800/90 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.3)] p-4 sm:p-6 lg:p-8 flex items-center justify-center">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center text-left gap-2 sm:gap-6 w-full lg:w-11/12 mx-auto">
            {/* Mobile Top Row: Logo + Heading / Desktop Left Col: Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="bg-slate-800/80 border border-slate-700/50 p-2.5 rounded-lg sm:rounded-xl flex items-center justify-center shadow-inner mt-0.5 sm:mt-2">
                <HugeiconsIcon icon={LayersIcon} className="w-5 h-5 sm:w-8 sm:h-8 text-blue-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold text-white sm:hidden">{hero.bannerHeading}</h3>
            </div>

            {/* Mobile Bottom Row: Text / Desktop Right Col: Heading + Text */}
            <div>
              <h3 className="hidden sm:block text-xl font-bold text-white">{hero.bannerHeading}</h3>
              <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed line-clamp-4 mt-1 sm:mt-0">{hero.bannerBody}</p>
            </div>
          </div>

          {/* <div className="hidden lg:block w-px h-16 bg-white/10 shrink-0" />

          <div className="shrink-0 flex justify-center w-full lg:w-auto pt-3 lg:pt-0 border-t border-white/10 lg:border-t-0 mt-1 lg:mt-0">
            <img src="/kyrozz_logo_hd.png" alt="Kyrozz Logo" className="h-[30px] sm:h-[40px] lg:h-[46px] w-auto opacity-100 object-contain" />
          </div> */}

        </div>
      </div>
    </section>
  );
}
