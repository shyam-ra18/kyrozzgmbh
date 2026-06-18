import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Users, Settings, ShieldCheck, Globe, Truck, MessageSquare, ArrowRight, Check, CheckCircle2, Search, TrendingUp, ClipboardList, Handshake, ChevronRight } from "lucide-react";
import { cookies } from "next/headers";
import * as de from "@/content/de";
import * as en from "@/content/en";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const content = locale === "de" ? de : en;
  return {
    title: content.injectionMoldingPage.metadata.title,
    description: content.injectionMoldingPage.metadata.description,
    alternates: { canonical: "/injection-molding" },
  };
}

const heroIcons = [Users, ShieldCheck, Globe, Truck];
const whyIcons = [Users, Settings, Search, TrendingUp];
const metricIcons = [
  <ClipboardList className="w-10 h-10 text-blue-300 stroke-[1.5]" />,
  <Handshake className="w-10 h-10 text-blue-300 stroke-[1.5]" />,
  <Globe className="w-10 h-10 text-blue-300 stroke-[1.5]" />,
  <Check className="w-10 h-10 text-blue-300 stroke-[2.5] border-[2.5px] border-blue-300 rounded-full p-1" />,
];
const processIcons = [MessageSquare, Settings, Users, ShieldCheck, Truck];

export default async function InjectionMoldingPage() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const { injectionMoldingPage } = locale === "de" ? de : en;
  return (
    <div className="bg-white">
      {/* Global Manufacturing Banner (Man Work) */}
      <section className="relative w-full min-h-[700px] flex items-center bg-[#051124] overflow-hidden py-20 mt-16">
        {/* Background Image positioned to the right */}
        <div className="absolute inset-0 w-full h-full lg:w-[70%] lg:left-auto lg:right-0">
          <Image
            src="/man-work.png"
            alt="Ingenieur am CAD-Arbeitsplatz"
            fill
            className="object-cover object-center lg:object-left"
          />
          {/* Gradient Overlays for seamless blend */}
          <div className="absolute inset-0 bg-linear-to-r from-[#051124] via-[#051124]/90 to-transparent lg:via-[#051124]/40"></div>
          <div className="absolute inset-0 bg-linear-to-t from-[#051124] via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.1] mb-6">
              {injectionMoldingPage.hero.heading1}<br />
              <span className="text-[#1d64ff]">{injectionMoldingPage.hero.heading2}</span> {injectionMoldingPage.hero.heading2rest}
            </h2>
            <p className="text-xl md:text-[22px] font-bold text-white mb-6 leading-snug">
              {injectionMoldingPage.hero.subtitle1}<br />
              {injectionMoldingPage.hero.subtitle2}
            </p>
            <p className="text-[15px] text-white/80 max-w-[540px] leading-relaxed mb-14">
              {injectionMoldingPage.hero.body}
            </p>

            {/* 4 Icons Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
              {injectionMoldingPage.hero.icons.map((item, idx) => {
                const Icon = heroIcons[idx];
                return (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-900/40">
                      <Icon className="w-5 h-5 text-blue-400 stroke-[1.5]" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-white mb-1.5 leading-snug uppercase tracking-wide whitespace-pre-line">{item.title}</div>
                      <div className="text-[11px] text-white/60 leading-snug whitespace-pre-line">{item.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Kyrozz Card Block & Metrics Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* WHY KYROZZ & ADVANTAGES Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-slate-100 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

              {/* Left Column: Why Kyrozz */}
              <div className="lg:col-span-7 lg:pr-8 lg:border-r lg:border-slate-200">
                <h3 className="text-xl font-bold text-[#0a42bf] tracking-wider uppercase mb-8 border-b-2 border-[#0a42bf] w-fit pb-2">
                  {injectionMoldingPage.whySection.heading}
                </h3>

                <div className="space-y-8">
                  {injectionMoldingPage.whySection.items.map((item, idx) => {
                    const Icon = whyIcons[idx];
                    return (
                      <div key={idx} className="flex gap-5">
                        <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-[#0a42bf] stroke-[1.5]" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-[#0B1523] mb-1.5">{item.title}</h4>
                          <p className="text-sm text-[#5C6E8A] leading-relaxed font-medium">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Your Advantages */}
              <div className="lg:col-span-5 lg:pl-4">
                <h3 className="text-xl font-bold text-[#0a42bf] tracking-wider uppercase mb-8 border-b-2 border-[#0a42bf] w-fit pb-2">
                  {injectionMoldingPage.whySection.advantagesHeading}
                </h3>

                <div className="space-y-4">
                  {injectionMoldingPage.whySection.advantages.map((adv, idx) => (
                    <div key={idx} className="flex items-center gap-3.5">
                      <CheckCircle2 className="w-5 h-5 text-[#0a42bf] fill-[#eff6ff] shrink-0 stroke-[2]" />
                      <span className="text-[15px] font-semibold text-[#334155]">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* 500+ Metrics Bar */}
          <div className="bg-[#002f87] rounded-3xl p-8 lg:p-10 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
              {injectionMoldingPage.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-5 lg:px-8 ${idx < 3 ? "lg:border-r lg:border-white/10" : ""}`}
                >
                  <div className="shrink-0">{metricIcons[idx]}</div>
                  <div>
                    <div className="text-3xl font-extrabold leading-none mb-1">{metric.val}</div>
                    <div className="text-[12px] text-white/80 font-medium leading-snug">{metric.lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* One Partner Section */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden border-t border-slate-100">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="flex flex-col items-start max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B1523] leading-tight mb-1 lg:whitespace-nowrap">
                {injectionMoldingPage.onePartner.heading1}
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0a42bf] leading-tight mb-6 lg:whitespace-nowrap">
                {injectionMoldingPage.onePartner.heading2}
              </h2>

              {/* Thin Divider Line */}
              <div className="w-full h-px bg-slate-200 mb-8 max-w-[320px]"></div>

              <p className="text-[15px] text-[#475569] leading-relaxed mb-10 font-medium">
                {injectionMoldingPage.onePartner.body}
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#0a42bf] text-white font-bold text-sm rounded-md transition-all hover:bg-[#073092] uppercase tracking-wide gap-3 shadow-lg shadow-blue-500/20"
              >
                {injectionMoldingPage.onePartner.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Graphic Area (Vector Map with Radiating Pins) */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center lg:justify-end">
              <svg viewBox="0 0 1000 500" className="w-full h-full text-slate-200 select-none pointer-events-none opacity-80">
                <defs>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.1" />
                  </filter>
                </defs>
                <path d="M 80,100 C 90,80 120,60 160,60 C 200,60 210,80 230,80 C 250,80 270,110 280,130 C 270,140 250,150 240,160 C 220,170 200,160 190,170 C 180,180 160,210 150,220 C 130,220 120,200 110,180 C 100,160 80,140 70,130 C 65,120 70,110 80,100 Z" fill="currentColor" />
                <path d="M 190,230 C 210,230 230,250 250,280 C 270,310 280,350 260,390 C 240,420 220,450 200,470 C 195,480 190,480 185,460 C 180,440 170,390 170,360 C 170,330 160,290 170,270 C 180,250 185,240 190,230 Z" fill="currentColor" />
                <path d="M 410,200 C 440,190 470,200 490,220 C 510,240 520,270 515,310 C 510,350 490,390 470,410 C 460,420 450,420 445,400 C 440,380 435,350 430,330 C 420,310 405,300 400,280 C 395,260 395,240 400,220 C 405,210 408,205 410,200 Z" fill="currentColor" />
                <path d="M 390,110 C 410,95 440,80 480,80 C 520,80 540,60 580,70 C 620,80 660,60 700,70 C 740,80 780,70 820,90 C 850,110 860,130 850,160 C 840,190 820,220 780,230 C 750,240 710,230 680,240 C 650,250 630,230 610,210 C 590,190 560,180 530,190 C 500,200 470,180 450,160 C 430,140 400,130 390,110 Z" fill="currentColor" />
                <path d="M 450,160 L 460,180 L 480,185 L 470,195 L 450,190 Z M 600,190 L 615,220 L 630,225 L 635,210 L 620,190 Z" fill="currentColor" />
                <path d="M 740,330 C 760,320 790,320 810,340 C 830,360 830,380 810,400 C 790,410 770,410 750,400 C 730,390 730,350 740,330 Z" fill="currentColor" />
                <path d="M 540,150 Q 390,100 240,120" stroke="#0a42bf" strokeWidth="2" strokeDasharray="5" fill="none" opacity="0.6" />
                <path d="M 540,150 Q 500,125 460,110" stroke="#0a42bf" strokeWidth="2" strokeDasharray="5" fill="none" opacity="0.6" />
                <path d="M 540,150 Q 580,180 620,210" stroke="#0a42bf" strokeWidth="2" strokeDasharray="5" fill="none" opacity="0.6" />
                <path d="M 540,150 Q 645,135 750,150" stroke="#0a42bf" strokeWidth="2" strokeDasharray="5" fill="none" opacity="0.6" />
                <path d="M 540,150 Q 400,240 260,330" stroke="#0a42bf" strokeWidth="2" strokeDasharray="5" fill="none" opacity="0.6" />
                <g transform="translate(240, 120)"><circle r="6" fill="#0a42bf" /><circle r="12" fill="#0a42bf" opacity="0.2" className="animate-pulse" /></g>
                <g transform="translate(260, 330)"><circle r="6" fill="#0a42bf" /><circle r="12" fill="#0a42bf" opacity="0.2" className="animate-pulse" /></g>
                <g transform="translate(460, 110)"><circle r="6" fill="#0a42bf" /><circle r="12" fill="#0a42bf" opacity="0.2" className="animate-pulse" /></g>
                <g transform="translate(620, 210)"><circle r="6" fill="#0a42bf" /><circle r="12" fill="#0a42bf" opacity="0.2" className="animate-pulse" /></g>
                <g transform="translate(750, 150)"><circle r="6" fill="#0a42bf" /><circle r="12" fill="#0a42bf" opacity="0.2" className="animate-pulse" /></g>
                <g transform="translate(540, 150)" filter="url(#shadow)"><circle r="36" fill="white" /></g>
                <image href="/service-logo.png" x="507" y="117" width="66" height="66" />
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-white border-t border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
            {injectionMoldingPage.processSteps.map((step, idx) => {
              const Icon = processIcons[idx];
              return (
                <Fragment key={idx}>
                  <div className="flex items-center gap-5 flex-1 w-full lg:w-auto">
                    <div className="shrink-0">
                      <div className="w-[68px] h-[68px] rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                        <Icon className="w-6 h-6 text-[#0a42bf] stroke-[1.5]" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[13px] font-extrabold text-[#0B1523] uppercase tracking-wider mb-1 leading-none">
                        {step.num}. {step.title}
                      </div>
                      <div className="text-[12px] text-[#475569] leading-snug whitespace-pre-line font-medium">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                  {/* Arrow indicator between steps */}
                  {idx < 4 && (
                    <div className="hidden lg:block text-slate-300 mx-2">
                      <ChevronRight className="w-5 h-5 text-slate-300" />
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
