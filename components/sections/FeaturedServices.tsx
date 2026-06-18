"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const servicesData = [
  {
    id: "3d-printing",
    title: "3D Printing",
    highlight: "Components",
    subtitle: "Your Professional Partner for High-Quality Production of Plastic Components.",
    desc: "We specialize in 3D printing components, utilizing the FDM printing process. We invite you to explore our website to learn more about our company, our services, and how to contact us. We appreciate your visit to our website.",
    image: "/images/3d_printer_hero.png",
    imageAlt: "Active 3D Printer",
    ctaHref: "/3d-printing",
    alignRight: true,
    bgClass: "bg-white",
  },
  {
    id: "injection-molding",
    title: "Injection Molding",
    highlight: "Solutions",
    subtitle: "Precision Injection Molding Solutions Through Our Trusted Sourcing Network.",
    desc: "KYROZZ GmbH is a German-based project management company that delivers high-precision injection molded components through a network of carefully selected manufacturing partners worldwide. We manage your injection molding project from Germany — prototyping to high-volume production, delivered on time.",
    image: "/man-work.png",
    imageAlt: "Injection Molding Engineering",
    ctaHref: "/injection-molding",
    alignRight: false,
    bgClass: "bg-slate-50",
  },
  {
    id: "cnc-machining",
    title: "CNC Machining",
    highlight: "Services",
    subtitle: "High-Precision CNC Machined Parts with Tight Tolerances.",
    desc: "Precision milling and turning services in engineering metals and plastics. Ideal for functional parts, tooling, and low-volume production. Get components machined to your exact CAD specifications with fast turnaround times and German project management oversight.",
    image: "/cnc.png",
    imageAlt: "CNC Machined Component",
    ctaHref: "/injection-molding",
    alignRight: true,
    bgClass: "bg-white",
  },
];

export default function FeaturedServices() {
  return (
    <div className="w-full">
      {servicesData.map((s) => {
        return (
          <section
            key={s.id}
            id={s.id}
            className={`relative overflow-hidden py-24 lg:py-36 ${s.bgClass} border-b border-slate-100`}
          >
            {/* Dot Pattern Background */}
            <div
              className={`absolute top-0 ${
                s.alignRight ? "left-0" : "right-0"
              } w-[500px] h-[500px] opacity-15 pointer-events-none`}
              style={{
                backgroundImage: "radial-gradient(#94a3b8 2px, transparent 2px)",
                backgroundSize: "24px 24px",
                maskImage: `radial-gradient(ellipse at top ${
                  s.alignRight ? "left" : "right"
                }, black 30%, transparent 70%)`,
                WebkitMaskImage: `radial-gradient(ellipse at top ${
                  s.alignRight ? "left" : "right"
                }, black 30%, transparent 70%)`,
              }}
            />

            {/* Slanted Image Background (Desktop only) */}
            <div
              className={`hidden lg:block absolute top-0 ${
                s.alignRight ? "right-0" : "left-0"
              } w-[45%] h-full z-0 pointer-events-none`}
            >
              {/* Blue border/line effect */}
              <div
                className="absolute inset-0 bg-blue-600 shadow-2xl"
                style={{
                  clipPath: s.alignRight
                    ? "polygon(10% 0, 100% 0, 100% 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
                }}
              />
              {/* Image */}
              <div
                className={`absolute inset-y-0 ${
                  s.alignRight ? "right-0 ml-1.5" : "left-0 mr-1.5"
                } w-full`}
                style={{
                  clipPath: s.alignRight
                    ? "polygon(10% 0, 100% 0, 100% 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
                }}
              >
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div
              className={`max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex ${
                s.alignRight ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-full lg:w-[48%] py-8 lg:py-12 ${
                  s.alignRight ? "lg:pr-8" : "lg:pl-8"
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
                <p className="text-sm text-slate-600 mb-8 leading-relaxed max-w-lg font-medium">
                  {s.desc}
                </p>
                <div>
                  <Link
                    href={s.ctaHref}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 text-sm tracking-wide w-fit"
                  >
                    LEARN MORE <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Mobile Image (shown below text on small screens) */}
              <div className="lg:hidden max-w-lg mx-auto w-full mt-12 relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
