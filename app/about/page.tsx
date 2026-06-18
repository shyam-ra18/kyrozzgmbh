import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SubCTA } from "@/components/sections/SubCTA";
import { TeamSection } from "@/components/sections/Team";
import { WhatYouExpect } from "@/components/sections/WhatYouExpect";
import { Factory, CheckCircle, Globe, ShieldCheck, Zap, TrendingUp, Gem, MessageCircle } from "lucide-react";
import { cookies } from "next/headers";
import * as de from "@/content/de";
import * as en from "@/content/en";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const content = locale === "de" ? de : en;
  return {
    title: content.aboutPage.metadata.title,
    description: content.aboutPage.metadata.description,
  };
}

const reasonIcons = [CheckCircle, Globe, ShieldCheck, Zap, TrendingUp, Gem, MessageCircle];

export default async function AboutPage() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const { aboutPage } = locale === "de" ? de : en;
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PageHero
        badge={aboutPage.hero.badge}
        title={
          <>
            {aboutPage.hero.headingLine1}<br/>
            <span className="text-blue-500">{aboutPage.hero.headingLine2}</span>
          </>
        }
        description={aboutPage.hero.description}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
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
                <div key={stat.label} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-wider uppercase mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {aboutPage.whySection.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">{aboutPage.whySection.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {aboutPage.whySection.reasons.map((r, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {(() => { const Icon = reasonIcons[idx]; return <Icon className="w-8 h-8 text-blue-500" />; })()}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{r.title}</h3>
                <p className="text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusing existing Team component */}
      <TeamSection />

      <WhatYouExpect />

      <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
        {/* Background graphics */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.5)_0,transparent_50%)]"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            {aboutPage.globalNetwork.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{aboutPage.globalNetwork.heading}</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-16">
            {aboutPage.globalNetwork.body}
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {aboutPage.globalNetwork.countries.map((country) => (
              <div key={country} className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-slate-200 font-semibold backdrop-blur-md shadow-lg">
                <Factory className="w-4 h-4 text-blue-400" />
                {country}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubCTA 
        title={aboutPage.cta.title}
        description={aboutPage.cta.description}
        primaryText={aboutPage.cta.primaryText}
        primaryHref={aboutPage.cta.primaryHref}
      />
    </div>
  );
}
