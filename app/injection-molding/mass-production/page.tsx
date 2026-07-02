import type { Metadata } from "next";
import Link from "next/link";
import { HugeiconsIcon } from '@hugeicons/react';
import { CheckmarkCircle01Icon, FactoryIcon, ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { PageHero } from "@/components/sections/PageHero";
import { SubCTA } from "@/components/sections/SubCTA";

export const metadata: Metadata = {
  title: "High-Volume Plastic Injection Molding | KYROZZ GmbH",
  description: "Scale to millions of parts with zero compromise on quality. KYROZZ manages high-volume injection molding with European quality standards.",
};

export default function MassProductionPage() {
  return (
    <>
      <PageHero 
        badge="Mass Production"
        title={<>High-Volume Injection Molding with <span className="text-blue-500">European Standards</span></>}
        description="Scale to millions of parts. Zero compromise on quality. German oversight at every step."
      >
        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-bold text-sm rounded-full transition-all hover:bg-blue-700 shadow-lg shadow-blue-200/50 gap-2">
          Get Volume Quote <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" />
        </Link>
      </PageHero>

      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { label: "Machine Capacity", value: "50T – 1000T" },
              { label: "Shot Weight Range", value: "1g – 10kg+" },
              { label: "Annual Capacity", value: "50M+ parts" },
              { label: "Lead Time", value: "4–6 weeks" },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50">
                <div className="font-bold text-3xl md:text-4xl text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">
                <span className="w-6 h-[2px] bg-blue-600 mr-3"></span>
                Quality
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">European Quality Oversight</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Every production run is overseen by our German project managers enforcing our quality protocol at every partner facility. No part ships without passing our inspection checklist.
              </p>
              <div className="space-y-4">
                {["Pre-production first article inspection", "In-process dimensional monitoring", "Batch sampling and SPC", "Final inspection before shipment", "Full traceability documentation"].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="inline-flex items-center text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">
                <span className="w-6 h-[2px] bg-blue-600 mr-3"></span>
                Industries
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Who We Serve</h2>
              <div className="space-y-4">
                {["Automotive OEMs and Tier 1 suppliers", "Electrical component manufacturers", "Water filtration companies", "Consumer product brands", "Medical device manufacturers"].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                    <HugeiconsIcon icon={FactoryIcon} className="w-6 h-6 text-slate-400" />
                    <span className="text-slate-800 text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubCTA 
        title="Request a Volume Quote"
        description="Tell us your annual volume and part specifications — we respond within 24 hours with competitive pricing."
        primaryHref="/contact"
        primaryText="Get Volume Quote"
        secondaryHref="/contact"
        secondaryText="Talk to a Sourcing Expert"
      />
    </>
  );
}
