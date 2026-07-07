"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { useContent } from "@/context/LocaleContext";
import { motion } from "framer-motion";

export default function FeaturedServices() {
  const featuredServices = useContent().featuredServices;
  return (
    <section className="relative overflow-hidden py-12 lg:py-12 lg:py-16 bg-white border-b border-slate-100">
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-stretch">
          {featuredServices.map((s, index) => {
            return (
              <React.Fragment key={s.id}>
                {/* Service Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 flex flex-col items-center text-center px-4 py-8 group"
                >
                  {/* Image */}
                  <div className="w-48 h-48 sm:w-56 sm:h-56 relative mb-8 rounded-3xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-105">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      className="object-contain p-6 mix-blend-multiply transition-transform duration-700 ease-out group-hover:rotate-2"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col flex-grow items-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-3 tracking-tight leading-[1.1] uppercase">
                      {s.title}{" "}
                      <span className="text-blue-600 block sm:inline">{s.highlight}</span>
                    </h2>
                    <p className="text-sm font-bold text-slate-800 mb-4 leading-snug">
                      {s.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 mb-8 leading-relaxed font-medium flex-grow">
                      {s.desc}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    href={s.ctaHref}
                    className="group/btn inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-0.5 text-xs tracking-wide uppercase mt-auto"
                  >
                    {s.cta} <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  </Link>
                </motion.div>

                {/* Separator */}
                {index < featuredServices.length - 1 && (
                  <div className="flex items-center justify-center lg:py-8 lg:px-4">
                    {/* Horizontal line on mobile */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent lg:hidden my-8" />
                    {/* Vertical line on desktop */}
                    <div className="hidden lg:block w-px h-full min-h-[400px] bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
