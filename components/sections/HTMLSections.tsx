"use client";
import React, { useState, Fragment } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, FilePlus2, Settings, Printer, Box, ArrowRight, GraduationCap, Gamepad2, Building2, Wrench } from 'lucide-react';

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
    {
      name: "Industrial Manufacturing",
      desc: "Functional parts, tools, and production aids.",
      icon: <Settings className="w-5 h-5 text-blue-600 shrink-0" />,
      img: "https://images.unsplash.com/photo-1530138754840-ae8d54b809fa?w=600&q=80&auto=format"
    },
    {
      name: "Education & Research",
      desc: "Prototypes, teaching tools, and experiments.",
      icon: <GraduationCap className="w-5 h-5 text-blue-600 shrink-0" />,
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80&auto=format"
    },
    {
      name: "Hobbyist & Maker",
      desc: "Creative projects, custom parts, and more.",
      icon: <Gamepad2 className="w-5 h-5 text-blue-600 shrink-0" />,
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80&auto=format"
    },
    {
      name: "Product Development",
      desc: "Prototypes and functional parts for faster innovation.",
      icon: <Box className="w-5 h-5 text-blue-600 shrink-0" />,
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80&auto=format"
    },
    {
      name: "Model Making & Prototyping",
      desc: "Detailed models and visual prototypes.",
      icon: <Building2 className="w-5 h-5 text-blue-600 shrink-0" />,
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&auto=format"
    },
    {
      name: "Custom Parts & Solutions",
      desc: "Tailored components for unique applications.",
      icon: <Wrench className="w-5 h-5 text-blue-600 shrink-0" />,
      img: "https://images.unsplash.com/photo-1615840287214-7fe58a8b668f?w=600&q=80&auto=format"
    }
  ];

  return (
    <section id="industries" className="bg-[#F5F7FA] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl md:text-[38px] font-extrabold tracking-tight text-center text-slate-900">
          Industries We Empower
        </h2>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="flex flex-col group bg-white rounded-2xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="relative w-full aspect-[16/10] bg-slate-100">
                <Image 
                  src={ind.img} 
                  alt={ind.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    {ind.icon}
                    <h3 className="font-bold text-[14px] text-blue-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors duration-200">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="text-[12px] text-slate-500 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
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
      name: "3D Printing Services", 
      text: "High-precision 3D printing with FDM technology for functional prototypes and end-use parts.", 
      features: ["Prototype Development", "Functional Parts Production", "Wide Range of Materials"], 
      img: "/3dprint-ser1.png" 
    },
    { 
      name: "Design & Engineering Support", 
      text: "From concept to CAD model - we help bring your ideas to life with expert design support.", 
      features: ["3D Modeling", "Design Optimization", "Print-Ready Files"], 
      img: "/design-ser2.png" 
    },
    { 
      name: "Post-Processing & Finishing", 
      text: "Quality finishing and post-processing for perfect fit, look, and performance.", 
      features: ["Surface Finishing", "Support Removal", "Quality Inspection"], 
      img: "/post-ser3.png" 
    }
  ];

  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#0B1523] mb-14">Our Core Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-[#F8F9FA] rounded-[24px] overflow-hidden border border-slate-100 flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-[240px] w-full bg-slate-200">
                <Image src={s.img} alt={s.name} fill className="object-cover" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 leading-tight">{s.name}</h3>
                <p className="text-[14px] text-slate-600 mb-8 leading-relaxed flex-1">{s.text}</p>
                
                <div className="flex flex-col gap-3">
                  {s.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-slate-800 mt-[2px] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[13px] text-slate-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HTMLProcess() {
  const steps = [
    {
      num: "1. SEND YOUR FILE",
      desc: "Upload your 3D model (STL, OBJ, 3MF) and share your requirements.",
      icon: <FilePlus2 className="w-10 h-10 text-blue-600 stroke-[1.25]" />
    },
    {
      num: "2. WE PREPARE & PLAN",
      desc: "We review your file, recommend the best material and settings.",
      icon: <Settings className="w-10 h-10 text-blue-600 stroke-[1.25]" />
    },
    {
      num: "3. WE PRINT",
      desc: "Your part is printed using Bambu Lab H2S or P2S with precision.",
      icon: <Printer className="w-10 h-10 text-blue-600 stroke-[1.25]" />
    },
    {
      num: "4. QUALITY CHECK",
      desc: "Every part is inspected to ensure it meets our high standards.",
      icon: <CheckCircle2 className="w-10 h-10 text-blue-600 stroke-[1.25]" />
    },
    {
      num: "5. PACK & DELIVER",
      desc: "Carefully packed and shipped fast – straight to you.",
      icon: <Box className="w-10 h-10 text-blue-600 stroke-[1.25]" />
    }
  ];

  return (
    <section id="process" className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1523] tracking-tight">
            From Idea to Finished Part – Our Proven Process
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-4">
          {steps.map((step, idx) => (
            <Fragment key={idx}>
              <div className="flex flex-col items-center text-center flex-1 w-full group">
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-full border border-slate-100 bg-slate-50/50 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-blue-50 group-hover:scale-105">
                  {step.icon}
                </div>
                {/* Number & Title */}
                <h3 className="text-[13px] font-extrabold text-blue-600 uppercase tracking-wider mb-2.5 leading-none">
                  {step.num}
                </h3>
                {/* Description */}
                <p className="text-[12px] text-slate-500 leading-relaxed max-w-[220px] font-medium">
                  {step.desc}
                </p>
              </div>

              {/* Arrow Indicator between steps */}
              {idx < 4 && (
                <div className="hidden lg:flex items-center justify-center h-20 text-blue-600">
                  <ArrowRight className="w-5 h-5 text-blue-600 stroke-[2.5]" />
                </div>
              )}
            </Fragment>
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
