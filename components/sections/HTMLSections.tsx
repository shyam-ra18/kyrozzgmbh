"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Clock, Zap, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function Ticker() {
  return (
    <>
      <style>{`
        @keyframes tick {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div className="bg-blue-600 overflow-hidden h-11 flex items-center">
        <div className="flex whitespace-nowrap hover:[animation-play-state:paused]" style={{ animation: 'tick 30s linear infinite' }}>
          {Array(2).fill([
            "3D Printing", "Injection Molding", "CNC Machining", "German Project Management", 
            "Rapid Prototyping", "FDM · SLA · SLS", "Bambu Lab H2S & P2S", "ABS · PLA · PETG · Nylon · TPU", 
            "500+ Projects Delivered", "Global Sourcing", "ISO 9001 Certified Partners"
          ]).flat().map((item, i) => (
            <span key={i} className="inline-flex items-center font-sans text-[15px] font-semibold tracking-[2px] uppercase text-white/90 px-10">
              {item}
              <span className="inline-block w-1 h-1 bg-white/40 rounded-full ml-10"></span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export function IndustriesBento() {
  const industries = [
    { img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=75&auto=format", name: "Automotive", sub: "OEM components, jigs, fixtures & prototypes for Tier-1 suppliers", wide: true, tall: true },
    { img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=700&q=75&auto=format", name: "Medical", sub: "Biocompatible parts, Class I housings, surgical tools", wide: true, tall: false },
    { img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&q=75&auto=format", name: "Robotics", sub: "Lightweight structural parts, grippers, enclosures", wide: false, tall: false },
    { img: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=700&q=75&auto=format", name: "Aerospace", sub: "Low-volume metal & high-performance polymer parts", wide: false, tall: false },
    { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=75&auto=format", name: "Electronics", sub: "ESD-safe enclosures, EMI shielding, product housings", wide: false, tall: false },
    { img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=700&q=75&auto=format", name: "Research & Education", sub: "Microfluidics, custom labware, research apparatus", wide: false, tall: false },
  ];

  return (
    <section id="industries" className="bg-[#F5F7FA] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="font-mono text-[11px] tracking-[2px] uppercase text-blue-600 mb-4 before:content-['—_']">Industries We Serve</div>
        <h2 className="text-4xl md:text-[clamp(44px,5vw,68px)] font-black tracking-[-1px] leading-[0.95] text-slate-900 uppercase">
          Built for<br /><em className="text-blue-600 not-italic">Every Industry</em>
        </h2>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[260px]">
          {industries.map((ind, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-xl group ${ind.tall ? 'md:row-span-2' : ''} ${ind.wide ? 'md:col-span-2' : ''}`}
            >
              <Image 
                src={ind.img} 
                alt={ind.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1523]/85 to-transparent to-[55%] transition-all duration-300 group-hover:from-blue-600/70" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className={`font-sans font-bold tracking-[1px] uppercase text-white mb-1 ${i === 0 ? 'text-3xl' : 'text-[22px]'}`}>
                  {ind.name}
                </div>
                <div className="text-xs text-white/55 leading-[1.5]">
                  {ind.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Metrics() {
  const metrics = [
    { n: "500", sup: "+", label: "Projects delivered across 15+ countries", tag: "Completed Projects" },
    { n: "72", sup: "h", label: "Express turnaround for 3D printed prototypes", tag: "Express Delivery" },
    { n: "±0.1", sup: "mm", label: "Standard tolerance for FDM and SLA printing", tag: "Precision" },
    { n: "20", sup: "+", label: "Audited global manufacturing partners", tag: "Global Network" },
    { n: "150", sup: "T", label: "Injection molding capacity in tonnes", tag: "IM Capacity" },
    { n: "5", sup: "dec", label: "Decades of injection molding legacy", tag: "Manufacturing Heritage" },
    { n: "24", sup: "h", label: "Free DFM review turnaround on every quote", tag: "Design Review" },
    { n: "100", sup: "%", label: "Customer-focused German project management", tag: "Satisfaction Focus" },
  ];

  return (
    <section id="metrics" className="bg-[#15243A] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-16">
          <div>
            <div className="font-mono text-[11px] tracking-[2px] uppercase text-blue-500 mb-4 before:content-['//_']">By The Numbers</div>
            <h2 className="text-4xl md:text-[clamp(44px,4.5vw,64px)] font-black tracking-[-1px] leading-[0.95] text-white uppercase">
              Performance<br />You Can <em className="text-blue-500 not-italic">Measure</em>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.8] text-white/45 lg:pb-2">
            Real numbers from real projects. KYROZZ combines German engineering discipline with the cost efficiency of a trusted global production network — and these metrics prove it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
          {metrics.map((m, i) => (
            <div key={i} className="bg-[#15243A] p-8 md:p-9 transition-colors duration-200 hover:bg-blue-600/10">
              <div className="font-sans text-[52px] font-extrabold tracking-[-2px] text-white leading-none">
                {m.n}<em className="text-blue-500 not-italic">{m.sup}</em>
              </div>
              <div className="text-[13px] text-white/40 mt-2 leading-[1.5] min-h-[40px]">{m.label}</div>
              <span className="font-mono text-[10px] tracking-[1px] uppercase text-blue-500 mt-3 block">{m.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HTMLServices() {
  const services = [
    { 
      num: "S.01", 
      name: "3D Printing Services", 
      text: "High-precision 3D printing with FDM technology for functional prototypes and end-use parts.", 
      features: ["Prototype Development", "Functional Parts Production", "Wide Range of Materials"], 
      img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=75&auto=format" 
    },
    { 
      num: "S.02", 
      name: "Design & Engineering Support", 
      text: "From concept to CAD model - we help bring your ideas to life with expert design support.", 
      features: ["3D Modeling", "Design Optimization", "Print-Ready Files"], 
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&q=75&auto=format" 
    },
    { 
      num: "S.03", 
      name: "Post-Processing & Finishing", 
      text: "Quality finishing and post-processing for perfect fit, look, and performance.", 
      features: ["Surface Finishing", "Support Removal", "Quality Inspection"], 
      img: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=600&q=75&auto=format" 
    }
  ];

  return (
    <section id="services" className="bg-white pt-28 pb-0">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end mb-16">
        <div>
          <div className="font-mono text-[11px] tracking-[2px] uppercase text-blue-600 mb-4 before:content-['—_']">Core Services</div>
          <h2 className="text-4xl md:text-[clamp(44px,5vw,68px)] font-black tracking-[-1px] leading-[0.95] text-[#0B1523] uppercase">
            Everything You Need<br />to <em className="text-blue-600 not-italic">Build Your Parts</em>
          </h2>
        </div>
        <div>
          <p className="text-base leading-[1.75] text-[#5C6E8A] max-w-[400px]">From rapid prototyping to high-volume serial production — precision manufacturing managed from Germany, produced globally.</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-[13px] font-semibold text-blue-600 mt-5 tracking-[0.3px] transition-all hover:gap-3.5">
            Let's Build Your Parts 
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </a>
        </div>
      </div>
      
      <div className="border-t border-[#0B1523]/10">
        {services.map((s, i) => (
          <div key={i} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[200px_1fr_300px] gap-6 lg:gap-12 items-stretch border-b border-[#0B1523]/10 transition-colors duration-300 hover:bg-[#EEF2FF] group cursor-pointer">
            <div className="font-mono text-[11px] text-[#5C6E8A] pt-8 lg:pt-11 pb-4 lg:pb-10 flex items-start">{s.num}</div>
            <div className="pt-2 lg:pt-10 pb-10">
              <div className="font-sans text-[32px] font-bold tracking-[0.5px] text-[#0B1523] uppercase mb-2.5 transition-colors duration-200 group-hover:text-blue-600">{s.name}</div>
              <p className="text-[14px] leading-[1.7] text-[#5C6E8A] max-w-[480px] mb-6">{s.text}</p>
              <div className="flex flex-col gap-2.5">
                {s.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-[18px] h-[18px] text-blue-600 shrink-0" strokeWidth={2} />
                    <span className="text-[14px] text-[#0B1523] font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block overflow-hidden my-4 relative h-[200px] rounded-md">
              <Image src={s.img} alt={s.name} fill className="object-cover transition-transform duration-[600ms] filter grayscale-[30%] group-hover:scale-[1.04] group-hover:grayscale-0" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HTMLProcess() {
  const steps = [
    { num: "01", title: "Upload CAD", text: "STEP, IGES, STL, OBJ, 3MF — all major formats. Send what you have; we work with it." },
    { num: "02", title: "Project Review", text: "Engineers assess your design for manufacturability within 24 hours. Free DFM always included." },
    { num: "03", title: "Partner Selection", text: "We match your project to the best-fit global partner — screened, audited, and approved." },
    { num: "04", title: "Quote & Material", text: "Transparent pricing, material recommendations, and lead time. Zero hidden costs." },
    { num: "05", title: "Production & QC", text: "Certified machines, real-time QC monitoring, and German quality oversight at every stage." },
    { num: "06", title: "Delivery & Docs", text: "Parts ship with full quality report, dimensional data, and material certificates." }
  ];

  return (
    <section id="process" className="bg-[#F5F7FA] py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10 mb-16">
          <div>
            <div className="font-mono text-[11px] tracking-[2px] uppercase text-blue-600 mb-4 before:content-['—_']">Our Process</div>
            <h2 className="text-4xl md:text-[clamp(40px,4.5vw,60px)] font-black tracking-[-1px] leading-[0.95] text-[#0B1523] uppercase">
              From File<br />to <em className="text-blue-600 not-italic">Factory Floor</em>
            </h2>
          </div>
          <p className="text-[14px] leading-[1.75] text-[#5C6E8A] max-w-[300px] md:text-right">
            A transparent, engineer-led workflow built for industrial buyers who cannot afford surprises.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 relative gap-8 lg:gap-2">
          <div className="hidden lg:block absolute top-[27px] left-[4%] right-[4%] h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent pointer-events-none" />
          
          {steps.map((s, i) => (
            <div key={i} className="relative lg:pr-3 group cursor-pointer">
              <div className="w-[54px] h-[54px] rounded-full bg-white border-[1.5px] border-[#0B1523]/10 flex items-center justify-center mb-6 relative z-10 transition-colors duration-300 group-hover:bg-blue-600 group-hover:border-blue-600">
                <span className="font-mono text-[11px] text-blue-600 transition-colors duration-200 group-hover:text-white">{s.num}</span>
              </div>
              <div className="font-sans text-[17px] font-bold tracking-[0.5px] uppercase text-[#0B1523] mb-2 transition-colors duration-200 group-hover:text-blue-600">{s.title}</div>
              <p className="text-[13px] leading-[1.65] text-[#5C6E8A]">{s.text}</p>
            </div>
          ))}
        </div>

        {/* 3D Printing Technology section */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h3 className="text-[28px] font-bold text-[#0B1523]">Our 3D Printing Technology</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 bg-white rounded-[24px] p-8 lg:p-12 shadow-[0_4px_24px_rgb(0,0,0,0.03)] border border-[#0B1523]/5">
            
            {/* Left: H2S */}
            <div className="flex flex-col md:flex-row gap-8 items-center lg:items-start lg:pr-12 pb-12 lg:pb-0">
              <div className="w-full md:w-[45%] flex-shrink-0">
                <Image src="/bambulab-h2s.png" alt="Bambu Lab H2S" width={400} height={400} className="w-full h-auto object-contain" />
              </div>
              <div className="w-full md:w-[55%] space-y-3 pt-2">
                <div>
                  <h4 className="text-[22px] font-bold text-blue-600 mb-1.5">Bambu Lab H2S</h4>
                  <p className="text-[13px] font-semibold text-[#0B1523]">Dual Nozzle. Maximum Versatility.</p>
                </div>
                <div className="space-y-3 pt-3">
                  {[
                    "Dual-extruder for multi-material and multi-color printing",
                    "High-speed, high-accuracy output",
                    "Large build volume for bigger parts",
                    "Advanced automation for unmatched reliability"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-blue-600 shrink-0 mt-[1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-[13px] text-slate-600 leading-snug font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: P2S */}
            <div className="flex flex-col md:flex-row gap-8 items-center lg:items-start lg:pl-12 pt-12 lg:pt-0">
              <div className="w-full md:w-[45%] flex-shrink-0">
                <Image src="/bambulab-p2s.png" alt="Bambu Lab P2S" width={400} height={400} className="w-full h-auto object-contain" />
              </div>
              <div className="w-full md:w-[55%] space-y-3 pt-2">
                <div>
                  <h4 className="text-[22px] font-bold text-blue-600 mb-1.5">Bambu Lab P2S</h4>
                  <p className="text-[13px] font-semibold text-[#0B1523]">Speed. Precision. Performance.</p>
                </div>
                <div className="space-y-3 pt-3">
                  {[
                    "High-speed printing with outstanding accuracy",
                    "Reliable performance for prototypes and functional parts",
                    "Easy to use, easy to trust",
                    "Ideal for everyday production and engineering parts"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-blue-600 shrink-0 mt-[1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-[13px] text-slate-600 leading-snug font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export function WhyKyrozz() {
  const feats = [
    { icon: <Target className="w-[22px] h-[22px] stroke-white" strokeWidth={1.5} />, title: "German Project Management", text: "One dedicated project engineer manages your order end-to-end — from DFM review to final delivery. German precision oversight combined with local production expertise in India for the best of both worlds." },
    { icon: <Clock className="w-[22px] h-[22px] stroke-white" strokeWidth={1.5} />, title: "72-Hour Express Turnaround", text: "Prototypes ship in 72 hours without shortcuts. Standard lead time 5-7 business days with full quality documentation. Production-floor scheduling that actually works — we don't overcommit and underdeliver." },
    { icon: <Zap className="w-[22px] h-[22px] stroke-white" strokeWidth={1.5} />, title: "±0.1mm Tolerance, Verified", text: "Machines calibrated daily. Every critical dimension verified with CMM coordinate measuring equipment. CMM reports available on request for all regulated industries including automotive and medical." },
    { icon: <Layers className="w-[22px] h-[22px] stroke-white" strokeWidth={1.5} />, title: "1 Part or 500,000 — Same Care", text: "No minimum order on 3D printing. Injection molding from 500 units. The same QC process applies regardless of volume. Infrastructure scales with your roadmap, not the other way around." },
    { icon: <ShieldCheck className="w-[22px] h-[22px] stroke-white" strokeWidth={1.5} />, title: "Complete Confidentiality", text: "Your files, designs, and IP are encrypted and handled with complete confidentiality. NDAs available before any design review. Secure file transfer with end-to-end encryption as standard." }
  ];

  return (
    <section id="why" className="bg-[#0B1523] py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-24 items-start">
        <div className="lg:sticky lg:top-[120px]">
          <div className="font-mono text-[11px] tracking-[2px] uppercase text-blue-500 mb-4 before:content-['//_']">Why KYROZZ</div>
          <h2 className="text-4xl md:text-[clamp(44px,4.5vw,68px)] font-black tracking-[-1px] leading-[0.9] text-white uppercase mb-6">
            Precision<br />Without<br /><em className="text-blue-500 not-italic block">Exception</em>
          </h2>
          <p className="text-[15px] leading-[1.8] text-white/50 mb-8">
            We operate where quality, speed, and engineering know-how converge. German project management meets trusted global production — every order gets the same level of rigour, from prototype to series.
          </p>
          <div className="flex flex-col gap-2">
            {[
              "ISO 9001:2015 Certified Partners",
              "DIN EN ISO 3302 Compliant",
              "REACH & RoHS Compliant",
              "IATF 16949 Ready"
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3 font-mono text-[11px] tracking-[1px] uppercase text-white/50 py-3 px-4 border border-white/10 rounded-md transition-all duration-200 hover:border-blue-600/40 hover:text-white/80 hover:bg-blue-600/5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                {c}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          {feats.map((f, i) => (
            <div key={i} className="py-8 border-b border-white/10 grid grid-cols-[52px_1fr] gap-6 items-start transition-all duration-200 group hover:bg-white/5 hover:px-3 hover:rounded-xl hover:-mx-3 first:border-t cursor-pointer">
              <div className="w-[52px] h-[52px] rounded-xl bg-[#1A56DB]/15 border border-[#1A56DB]/25 flex items-center justify-center shrink-0 transition-colors duration-250 group-hover:bg-[#1A56DB] group-hover:border-[#1A56DB]">
                {f.icon}
              </div>
              <div>
                <div className="font-sans text-[21px] font-bold tracking-[0.5px] uppercase text-white mb-2">{f.title}</div>
                <p className="text-[14px] leading-[1.7] text-white/45">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HTMLFAQ() {
  const faqs = [
    { 
      icon: <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      q: "How does an order for a 3D print work?", 
      a: "Fill out our contact form and send us your files if available. We will get in touch to discuss your requirements. After rebuilding the part digitally, we will confirm the details (material, color, etc.) and provide you with a custom offer for printing." 
    },
    { 
      icon: <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 9h1M9 13h6M9 17h6" /></svg>,
      q: "What 3D file formats can you use?", 
      a: "We support STL, STEP, 3MF, STP, and OBJ." 
    },
    { 
      icon: <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
      q: "What is 3D printing?", 
      a: "3D printing, also known as additive manufacturing, is the process of creating three-dimensional objects by building them layer by layer using a computer-controlled printer." 
    },
    { 
      icon: <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      q: "How does FDM 3D printing work?", 
      a: "FDM (Fused Deposition Modeling) melts a thermoplastic filament and deposits it layer by layer to build the object. It is a reliable process for strong, functional parts and prototypes." 
    },
    { 
      icon: <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      q: "How long does it take to 3D print an object?", 
      a: "The printing time depends on the size, complexity, material and quantity. Small parts may take a few hours, while larger or complex parts can take several days." 
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-28">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0B1523] mb-5 tracking-tight">Frequently Asked Questions</h2>
          <div className="w-10 h-[3px] bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div 
                key={i} 
                className="bg-white rounded-[20px] p-5 sm:p-7 shadow-[0_2px_16px_rgb(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_4px_24px_rgb(0,0,0,0.06)]"
              >
                <div 
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="flex items-start gap-5 sm:gap-6 cursor-pointer group"
                >
                  <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                    {f.icon}
                  </div>
                  <div className="flex-1 pt-3 md:pt-4">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className={`text-[17px] font-bold leading-snug transition-colors duration-200 ${isOpen ? 'text-[#0B1523]' : 'text-[#0B1523] group-hover:text-blue-600'}`}>
                        {f.q}
                      </h3>
                      <div className="shrink-0 mt-0.5">
                        <svg 
                          className={`w-[22px] h-[22px] text-blue-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <div className={`overflow-hidden transition-[max-height,opacity] duration-400 ease-in-out ${isOpen ? 'max-h-[300px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-[14px] leading-[1.8] text-[#5C6E8A] pr-4">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
