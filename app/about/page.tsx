import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SubCTA } from "@/components/sections/SubCTA";
import { TeamSection } from "@/components/sections/Team";
import { WhatYouExpect } from "@/components/sections/WhatYouExpect";
import { 
  CheckCircle, 
  Globe, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Gem, 
  MessageCircle,
  Factory
} from "lucide-react";

export const metadata: Metadata = {
  title: "About KYROZZ GmbH — German Injection Molding Project Management",
  description: "50+ years of manufacturing expertise. German-managed global injection molding network. Your trusted partner for precision plastic manufacturing.",
};

const reasons = [
  { icon: <CheckCircle className="w-8 h-8 text-blue-500" />, title: "German Project Management", desc: "Your single point of contact in Germany managing everything." },
  { icon: <Globe className="w-8 h-8 text-blue-500" />, title: "Global Manufacturing Network", desc: "20+ vetted partners worldwide delivering European quality standards." },
  { icon: <ShieldCheck className="w-8 h-8 text-blue-500" />, title: "End-to-End Service", desc: "From DFM review through production, QC, and delivery — we handle it all." },
  { icon: <Zap className="w-8 h-8 text-blue-500" />, title: "Fast Turnaround", desc: "Prototypes in 2 weeks, quotes within 24 hours." },
  { icon: <TrendingUp className="w-8 h-8 text-blue-500" />, title: "Competitive Pricing", desc: "Global manufacturing cost savings with German quality oversight." },
  { icon: <Gem className="w-8 h-8 text-blue-500" />, title: "Quality Guarantee", desc: "100% inspection and European quality standards on every order." },
  { icon: <MessageCircle className="w-8 h-8 text-blue-500" />, title: "Transparent Communication", desc: "Regular updates, English and German support, no surprises." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PageHero
        badge="About KYROZZ"
        title={
          <>
            German Management.<br/>
            <span className="text-blue-500">Global Production. Your Success.</span>
          </>
        }
        description="For 50+ years, KYROZZ GmbH has been connecting European businesses with world-class injection molding manufacturers — managed with German precision from our Munich headquarters."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-wider uppercase mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Our Model
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">We Manage. Partners Produce.</h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  KYROZZ doesn&apos;t operate its own factory. Instead, we maintain a vetted network of world-class injection molding manufacturers that we have rigorously selected and audited over decades.
                </p>
                <p>
                  Our German project management team acts as your single point of contact, coordinating everything from initial DFM review through production, quality control, customs, and delivery.
                </p>
                <p>
                  This model gives you the benefits of global manufacturing cost efficiency with the quality assurance, communication standards, and accountability of a German partner.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { label: "Years in Business", value: "50+" },
                { label: "Completed Projects", value: "500+" },
                { label: "Global Partners", value: "20+" },
                { label: "Countries Served", value: "15+" },
              ].map((stat) => (
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
              Why KYROZZ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">7 Reasons Companies Choose KYROZZ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {reasons.map((r, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {r.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{r.title}</h3>
                <p className="text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusing existing Team component which uses correct team members */}
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
            Global Network
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">A Global Manufacturing Network</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-16">
            Our manufacturing partners are located across Europe, Asia, and beyond — each audited and approved by our German quality team.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["China", "Vietnam", "Germany", "Czech Republic", "Poland", "Turkey"].map((country) => (
              <div key={country} className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-slate-200 font-semibold backdrop-blur-md shadow-lg">
                <Factory className="w-4 h-4 text-blue-400" />
                {country}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubCTA 
        title="Work with a Partner You Can Trust"
        description="50+ years of manufacturing excellence, managed from Germany."
        primaryText="Get in Touch"
        primaryHref="/contact"
      />
    </div>
  );
}
