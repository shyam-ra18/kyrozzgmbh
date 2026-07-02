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
    <div className="w-full">
      {featuredServices.map((s, index) => {
        return (
          <section
            key={s.id}
            id={s.id}
            className={`relative overflow-hidden py-16 lg:py-24 ${s.bgClass} border-b border-slate-100 group`}
          >
            {/* Dot Pattern Background */}
            <div
              className={`absolute top-0 ${s.alignRight ? "left-0" : "right-0"
                } w-[500px] h-[500px] opacity-15 pointer-events-none`}
              style={{
                backgroundImage: "radial-gradient(#94a3b8 2px, transparent 2px)",
                backgroundSize: "24px 24px",
                maskImage: `radial-gradient(ellipse at top ${s.alignRight ? "left" : "right"
                  }, black 30%, transparent 70%)`,
                WebkitMaskImage: `radial-gradient(ellipse at top ${s.alignRight ? "left" : "right"
                  }, black 30%, transparent 70%)`,
              }}
            />

            {/* Slanted Image Background (Desktop only) */}
            <div
              className={`hidden lg:block absolute top-0 ${s.alignRight ? "right-0" : "left-0"
                } w-[45%] h-full z-0 pointer-events-none`}
            >
              {/* Blue border/line effect */}
              <div
                className="absolute inset-0 bg-blue-600 shadow-2xl transition-transform duration-1000 ease-out group-hover:scale-y-[1.01]"
                style={{
                  clipPath: s.alignRight
                    ? "polygon(10% 0, 100% 0, 100% 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
                }}
              />
              {/* Image Container with smooth shift on group hover */}
              <div
                className={`absolute inset-y-0 ${s.alignRight ? "right-0 ml-1.5" : "left-0 mr-1.5"
                  } w-full bg-white transition-all duration-700 ease-out`}
                style={{
                  clipPath: s.alignRight
                    ? "polygon(10% 0, 100% 0, 100% 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
                }}
              >
                <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className="object-contain p-24 xl:p-28 mix-blend-multiply transition-transform duration-700 ease-out group-hover:rotate-[0.5deg]"
                  />
                </div>
              </div>
            </div>

            <div
              className={`max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row ${s.alignRight ? "lg:justify-start" : "lg:justify-end"
                }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full lg:w-[48%] py-8 lg:py-12 ${s.alignRight ? "lg:pr-8" : "lg:pl-8"
                  }`}
              >
                <h2 className="text-4xl md:text-[48px] font-extrabold text-blue-900 mb-4 tracking-tight leading-[1.1] uppercase">
                  {s.title}
                  <br />
                  <span className="text-blue-600">{s.highlight}</span>
                </h2>
                <p className="text-lg font-bold text-slate-800 mb-4 leading-snug max-w-lg">
                  {s.subtitle}
                </p>

                {/* Mobile Image (shown between subtitle and description on small screens) */}
                <div className="lg:hidden w-56 h-56 mx-auto my-8 relative rounded-3xl flex items-center justify-center overflow-hidden border border-blue-500/10 bg-white shadow-md transition-all duration-500 hover:scale-105 hover:shadow-lg hover:border-blue-500/30">
                  <div className="relative w-full h-full p-6">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      className="object-contain p-6 mix-blend-multiply transition-transform duration-700 ease-out hover:rotate-1"
                    />
                  </div>
                </div>

                <p className="text-base text-slate-600 mb-8 leading-relaxed max-w-lg font-medium">
                  {s.desc}
                </p>
                <div>
                  <Link
                    href={s.ctaHref}
                    className="group/btn inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-0.5 text-sm tracking-wide w-fit"
                  >
                    {s.cta} <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
