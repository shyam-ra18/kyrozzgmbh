import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SubCTA } from "@/components/sections/SubCTA";
import { TeamSection } from "@/components/sections/Team";
import { WhatYouExpect } from "@/components/sections/WhatYouExpect";
import { HugeiconsIcon } from '@hugeicons/react';
import { FactoryIcon, CheckmarkCircle01Icon, GlobeIcon, ShieldCheck, ZapIcon, TrendingUp, GemIcon, MessageCircle } from '@hugeicons/core-free-icons';

import * as de from "@/content/de";
import * as en from "@/content/en";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export async function generateMetadata(): Promise<Metadata> {
  const locale = "en" as string;
  const content = locale === "de" ? de : en;
  return {
    title: content.aboutPage.metadata.title,
    description: content.aboutPage.metadata.description,
  };
}

const reasonIcons = [CheckmarkCircle01Icon, GlobeIcon, ShieldCheck, ZapIcon, TrendingUp, GemIcon, MessageCircle];

export default async function AboutPage() {
  const locale = "en" as string;
  const { aboutPage } = locale === "de" ? de : en;
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PageHero
        badge={aboutPage.hero.badge}
        title={
          <>
            {aboutPage.hero.headingLine1}<br />
            <span className="text-blue-500">{aboutPage.hero.headingLine2}</span>
          </>
        }
        description={aboutPage.hero.description}
      />

      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-wider uppercase mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {aboutPage.model.badge}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">{aboutPage.model.heading}</h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>{aboutPage.model.body1}</p>
                <p>{aboutPage.model.body2}</p>
                <p>{aboutPage.model.body3}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {aboutPage.model.stats.map((stat) => (
                <div key={stat.label} className="bg-white p-8 rounded-2xl border border-slate-100 text-center shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-1 group">
                  <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2 transition-transform duration-500 group-hover:scale-105">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide transition-colors duration-300 group-hover:text-blue-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-wider uppercase mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {aboutPage.whySection.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{aboutPage.whySection.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {aboutPage.whySection.reasons.map((r, idx) => (
              <div key={idx} className="premium-card group flex flex-col">
                <div className="flex items-center gap-4 mb-3 lg:mb-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 shrink-0 bg-blue-50 rounded-xl flex items-center justify-center icon-animate-container">
                    {(() => { const Icon = reasonIcons[idx]; return <HugeiconsIcon icon={Icon} className="w-6 h-6 lg:w-7 lg:h-7 text-blue-500 transition-colors duration-300" />; })()}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug transition-colors duration-300 group-hover:text-blue-900">{r.title}</h3>
                </div>
                <p className="text-[15px] md:text-base text-slate-600 leading-relaxed font-medium">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusing existing Team component */}
      <TeamSection />

      <WhatYouExpect />

      <SubCTA
        title={aboutPage.cta.title}
        description={aboutPage.cta.description}
        primaryText={aboutPage.cta.primaryText}
        primaryHref={aboutPage.cta.primaryHref}
        secondaryText="Request a Quote"
      />
    </div>
  );
}
