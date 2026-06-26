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
                      <div key={idx} className="flex gap-5 group">
                        <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center shrink-0 group-hover:bg-[#0a42bf] group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(10,66,191,0.2)] transition-all duration-300">
                          <Icon className="w-6 h-6 text-[#0a42bf] stroke-[1.5] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-[#0B1523] mb-1.5 transition-colors duration-300 group-hover:text-[#0a42bf]">{item.title}</h4>
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
                    <div key={idx} className="flex items-center gap-3.5 group cursor-default">
                      <CheckCircle2 className="w-5 h-5 text-[#0a42bf] fill-[#eff6ff] shrink-0 stroke-[2] transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-[15px] font-semibold text-[#334155] transition-colors duration-300 group-hover:text-[#0B1523]">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* One Partner Section */}
      <section className="relative py-14 lg:py-16 bg-white overflow-hidden border-t border-slate-100">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="flex flex-col items-start lg:col-span-5 max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#0B1523] leading-tight mb-1">
                {injectionMoldingPage.onePartner.heading1}
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#0a42bf] leading-tight mb-6">
                {injectionMoldingPage.onePartner.heading2}
              </h2>

              {/* Thin Divider Line */}
              <div className="w-12 h-[3px] bg-[#0a42bf] mb-8 rounded-full"></div>

              <p className="text-[15px] text-[#475569] leading-relaxed mb-6 font-medium">
                {injectionMoldingPage.onePartner.body1}
              </p>

              <div className="flex flex-col gap-1 text-[16px] text-blue-900 leading-snug font-bold">
                <p>{injectionMoldingPage.onePartner.body2}</p>
                <p>{injectionMoldingPage.onePartner.body3}</p>
              </div>
            </div>

            {/* Right Graphic Area (Vetted 3D Partner Map Image) */}
            <div className="lg:col-span-7 relative w-full aspect-[21/9] md:aspect-[2.4/1] max-h-[300px] flex items-center justify-center overflow-hidden">
              <Image
                src="/images/world_map_partners_transparent.png"
                alt="KYROZZ Global Sourcing & Manufacturing Sourcing Network"
                fill
                sizes="(max-w-1024px) 100vw, 55vw"
                className="object-contain p-2 md:p-4"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-10 bg-white border-t border-b border-slate-100">
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
