"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Timer,
  ShieldCheck,
  Users,
  Check,
  Layers,
  Cog,
} from "lucide-react";

const valueProps = [
  {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: "Precision",
    sub: "Without Compromise",
  },
  {
    icon: <Timer className="w-8 h-8 text-blue-600" />,
    title: "Faster Product",
    sub: "Development",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Reliable",
    sub: "Manufacturing",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Customer-Focused",
    sub: "Solutions",
  },
];

const commitmentsLeft = [
  "Engineering-Focused Solutions",
  "Industrial-Grade Manufacturing",
  "Fast Turnaround Times",
];

const commitmentsRight = [
  "High-Quality Materials",
  "Transparent Communication",
  "Reliable Delivery Across Europe",
];

export default function OurMission() {
  return (
    <section className="py-24 lg:py-32 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Our Mission (Centered Content) */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center mb-4">
            <span className="text-blue-600 text-[15px] sm:text-base font-bold tracking-[3px] uppercase">
              OUR MISSION
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
            Engineering Ideas <br className="sm:hidden" />
            Into <span className="text-blue-600">Reliable Products</span>
          </h2>
          <div className="space-y-6 text-slate-600 text-[15px] sm:text-base leading-relaxed font-medium">
            <p>
              At <strong className="text-blue-600 font-bold">KYROZZ GmbH</strong>, our mission is to empower engineers and product teams to confidently transform digital designs into dependable, production-ready components.
            </p>
            <p>
              We specialize in application-driven manufacturing solutions, combining engineering expertise with advanced <strong className="text-blue-600 font-bold">3D Printing, CNC Machining</strong>, and <strong className="text-blue-600 font-bold">Injection Molding</strong> technologies to deliver parts that perform reliably in real-world environments.
            </p>
            <p>
              From rapid prototyping and design validation to low-volume production and scalable manufacturing, we help our clients select the <strong className="text-blue-600 font-bold">right process, material</strong>, and production strategy for every stage of product development.
            </p>
            <p>
              By <strong className="text-blue-600 font-bold">accelerating innovation</strong> cycles, <strong className="text-blue-600 font-bold">reducing</strong> technical and manufacturing <strong className="text-blue-600 font-bold">risks</strong>, and ensuring <strong className="text-blue-600 font-bold">consistent quality</strong>, we enable our clients to bring better products to market faster, more efficiently, and with greater confidence.
            </p>
          </div>
        </div>

        {/* 2. Middle Row (Icons & Commitment Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Grid: 4 Icons */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 md:gap-12">
            {valueProps.map((val, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50/50 flex items-center justify-center mb-4 shadow-xs text-blue-600">
                  {val.icon}
                </div>
                <h4 className="font-extrabold text-slate-800 text-sm md:text-base leading-tight">
                  {val.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-500 font-semibold mt-1">
                  {val.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Right Card: Our Commitment */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
              <h3 className="text-blue-900 text-lg md:text-xl font-extrabold mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-blue-600">
                Our Commitment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  {commitmentsLeft.map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-blue-600 stroke-[3]" />
                      </div>
                      <span className="text-slate-700 font-bold text-xs md:text-sm">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {commitmentsRight.map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-blue-600 stroke-[3]" />
                      </div>
                      <span className="text-slate-700 font-bold text-xs md:text-sm">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Row (Dark Blue Banner) */}
        <div className="bg-[#0B1523] rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-2xl border border-white/5">
          {/* Subtle bg glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(37,99,235,0.15),transparent_50%)] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            {/* Left Content */}
            <div className="flex items-start gap-6 max-w-2xl flex-1">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                <Layers className="w-7 h-7 text-blue-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                  Building the Future, Layer by Layer
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-semibold">
                  Our success is measured by the success of our customers. We are committed to delivering innovative manufacturing solutions that help businesses move faster, reduce costs, and bring better products to market.
                </p>
              </div>
            </div>

            {/* Vertical Line Divider (hidden on mobile, shown on lg) */}
            <div className="hidden lg:block w-px h-16 bg-white/10" />

            {/* Right Branding */}
            <div className="shrink-0 w-full lg:w-auto flex justify-center lg:justify-start lg:pl-10">
              <Image
                src="/kyrozz_logo_hd.png"
                alt="Kyrozz Logo"
                width={160}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
