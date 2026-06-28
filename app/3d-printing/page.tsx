import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Timer,
  Settings,
  Layers,
  ShieldCheck,
  Check,
  Box,
  Cog,
  Wrench,
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { HTMLServices, HTMLFAQ } from "@/components/sections/HTMLSections";
import { SimpleOrderingProcess } from "@/components/sections/SimpleOrderingProcess";
import { BambuTechShowcase } from "@/components/sections/BambuTechShowcase";
import { cookies } from "next/headers";
import * as de from "@/content/de";
import * as en from "@/content/en";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const content = locale === "de" ? de : en;
  return {
    title: content.threeDPrintingPage.metadata.title,
    description: content.threeDPrintingPage.metadata.description,
  };
}

const reasonIcons = [
  <Target className="w-12 h-12 text-blue-600" />,
  <Timer className="w-12 h-12 text-blue-600" />,
  <Settings className="w-12 h-12 text-blue-600" />,
  <Layers className="w-12 h-12 text-blue-600" />,
  <ShieldCheck className="w-12 h-12 text-blue-600" />,
];

const applicationIcons = [
  <Box className="w-8 h-8 text-blue-600" />,
  <Cog className="w-8 h-8 text-blue-600" />,
  <Wrench className="w-8 h-8 text-blue-600" />,
  <Settings className="w-8 h-8 text-blue-600" />,
  <Lightbulb className="w-8 h-8 text-blue-600" />,
];

export default async function ThreeDPrintingPage() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const { threeDPrintingPage } = locale === "de" ? de : en;
  return (
    <div className="min-h-screen bg-white flex flex-col pt-20 md:pt-28">

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pb-12 lg:pb-16 bg-white">
        {/* Subtle dot pattern background in top left */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#94a3b8 2px, transparent 2px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse at top left, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at top left, black 30%, transparent 70%)'
          }}
        />

        {/* Slanted Image Background (Desktop) */}
        <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full z-0 pointer-events-none">
          {/* Blue border/line effect */}
          <div className="absolute inset-0 bg-blue-600 shadow-2xl" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }} />
          {/* Image */}
          <div className="absolute inset-y-0 right-0 w-full ml-1.5" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}>
            <Image
              src="/images/3d_printer_hero.png"
              alt="Aktiver 3D-Drucker"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 py-8 lg:py-12 lg:pr-12">
            <h1 className="text-4xl md:text-[48px] font-extrabold text-blue-900 mb-4 tracking-tight leading-[1.1]">
              {threeDPrintingPage.hero.heading1}<br />
              <span className="text-blue-600">{threeDPrintingPage.hero.heading2}</span>
            </h1>
            <p className="text-lg font-bold text-slate-800 mb-4 leading-snug max-w-lg">
              {threeDPrintingPage.hero.subtitle}
            </p>
            <p className="text-sm text-slate-600 mb-8 leading-relaxed max-w-lg">
              {threeDPrintingPage.hero.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 text-sm tracking-wide"
              >
                {threeDPrintingPage.hero.ctaPrimary} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-blue-600 border border-slate-200 rounded-md font-bold hover:bg-slate-50 transition-colors text-sm tracking-wide shadow-sm"
              >
                {threeDPrintingPage.hero.ctaSecondary} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden w-full mt-12 relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="/images/3d_printer_hero.png"
              alt="Aktiver 3D-Drucker"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. Why Choose 3D Printing */}
      <section className="py-12 md:py-14 bg-white border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="font-mono text-[11px] tracking-[2px] uppercase text-blue-600 mb-3 before:content-['—_'] after:content-['_—']">{threeDPrintingPage.whySection.badge}</div>
            <h2 className="text-2xl md:text-[32px] font-black tracking-[-0.5px] leading-tight text-[#0B1523] uppercase">
              {threeDPrintingPage.whySection.heading} <em className="text-blue-600 not-italic">{threeDPrintingPage.whySection.headingHighlight}</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {threeDPrintingPage.reasons.map((r, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {reasonIcons[idx]}
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">{r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our 3D Printing Technology */}
      <section className="py-12 md:py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-[32px] font-black tracking-[-0.5px] leading-tight text-[#0B1523] uppercase">
              {threeDPrintingPage.technologySection.heading1} <em className="text-blue-600 not-italic">{threeDPrintingPage.technologySection.heading2}</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
            {/* Image */}
            <div className="lg:col-span-4 relative aspect-4/3 flex items-center justify-center drop-shadow-xl">
              <Image
                src="/images/3d_printed_bracket.png"
                alt="3D-gedrucktes Teil"
                fill
                className="object-contain p-4"
              />
            </div>

            {/* Center Content */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-200 pb-10 lg:pb-0 lg:pr-10">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{threeDPrintingPage.fdmSection.heading}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {threeDPrintingPage.fdmSection.body}
              </p>
              <div className="space-y-4">
                {threeDPrintingPage.fdmSection.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="font-bold text-slate-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right List */}
            <div className="lg:col-span-3 lg:pl-4">
              <h3 className="text-xl font-bold text-slate-900 mb-6">{threeDPrintingPage.fdmSection.materialsHeading}</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                {threeDPrintingPage.materials.map((mat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span className="text-sm font-bold text-slate-700">{mat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Applications We Serve */}
      <section className="py-12 md:py-14 bg-white border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="font-mono text-[11px] tracking-[2px] uppercase text-blue-600 mb-3 before:content-['—_'] after:content-['_—']">{threeDPrintingPage.applicationsSection.badge}</div>
            <h2 className="text-2xl md:text-[32px] font-black tracking-[-0.5px] leading-tight text-[#0B1523] uppercase">
              {threeDPrintingPage.applicationsSection.heading} <em className="text-blue-600 not-italic">{threeDPrintingPage.applicationsSection.headingHighlight}</em>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {threeDPrintingPage.applications.map((app, idx) => (
              <div key={idx} className="flex items-center gap-3 px-2 lg:px-6 py-4 lg:py-0 w-full lg:w-auto justify-center group cursor-default">
                <div className="group-hover:scale-110 transition-transform">
                  {applicationIcons[idx]}
                </div>
                <span className="font-bold text-slate-800 text-sm whitespace-nowrap">{app.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HTMLServices />

      <SimpleOrderingProcess />

      <BambuTechShowcase />

      <HTMLFAQ />

      {/* 5. Bottom CTA Banner */}
      <section className="py-12 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0B1523]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/bottom-cta-bg.png"
                alt="3D-gedruckte Teile"
                fill
                className="object-cover object-right lg:object-center"
              />
            </div>
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-10 bg-linear-to-r from-[#0B1523] via-[#0B1523]/80 to-transparent" />

            <div className="relative z-20 px-8 py-10 lg:px-12 lg:py-12 max-w-xl">
              <h2 className="text-2xl md:text-[28px] font-bold text-white mb-3 leading-snug">
                {threeDPrintingPage.cta.heading1}<br />
                <span className="text-blue-500">{threeDPrintingPage.cta.heading2}</span>
              </h2>
              <p className="text-slate-300 text-xs md:text-sm mb-6 max-w-md leading-relaxed">
                {threeDPrintingPage.cta.body}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-1.5 px-6 py-2.5 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 text-[11px] tracking-wide w-fit"
                >
                  {threeDPrintingPage.cta.ctaPrimary} <ArrowRight className="w-3 h-3" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-1.5 px-6 py-2.5 bg-transparent text-white border border-slate-500 rounded font-bold hover:bg-white/10 hover:border-white transition-colors text-[11px] tracking-wide w-fit"
                >
                  {threeDPrintingPage.cta.ctaSecondary} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
