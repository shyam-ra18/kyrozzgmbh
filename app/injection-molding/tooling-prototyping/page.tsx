import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Download, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SubCTA } from "@/components/sections/SubCTA";

export const metadata: Metadata = {
  title: "Prototype Injection Molding & Tooling | KYROZZ GmbH Germany",
  description: "Rapid tooling and prototype injection molding in 2 weeks. From startup MVPs to OEM prototype programs — managed from Germany.",
};

const toolingCapabilities = [
  "Prototype aluminum tooling in 1–2 weeks",
  "Production steel tooling in 4–8 weeks",
  "Single and multi-cavity molds",
  "Side actions, lifters, and collapsible cores",
  "Hot runner and cold runner systems",
  "T1 samples with full dimensional report",
  "Rapid iteration and tool modification",
  "Design for Manufacturability (DFM) review",
  "Full tooling ownership transferred to client",
];

const personas = [
  { icon: "🚀", title: "Startups & Product Developers", desc: "Validate your design before committing to expensive production tooling. Get real injection molded samples in 2 weeks." },
  { icon: "🏭", title: "OEMs & Tier 1 Suppliers", desc: "Prototype new components in production-equivalent materials for testing and approval." },
  { icon: "🔬", title: "R&D Teams", desc: "Iterate quickly through design cycles with fast-turn tooling and minimal lead times." },
];

export default function ToolingPrototypingPage() {
  return (
    <>
      <PageHero 
        badge="Tooling & Prototyping"
        title={<>From Prototype to Production &mdash; <span className="text-blue-500">Rapid Tooling</span></>}
        description="Fast prototyping. Production-ready tooling. German quality oversight from day one."
      >
        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-bold text-sm rounded-full transition-all hover:bg-blue-700 shadow-lg shadow-blue-200/50 gap-2">
          Start Your Project <ArrowRight className="w-4 h-4" />
        </Link>
        <a href="/kyrozz-pricing-guide.pdf" className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-slate-700 text-slate-300 font-bold text-sm rounded-full transition-all hover:bg-slate-800 hover:text-white gap-2" download>
          <Download className="w-4 h-4" /> Pricing Guide
        </a>
      </PageHero>

      {/* Buyer Personas */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">
              <span className="w-8 h-[2px] bg-blue-600 mr-4"></span>
              Who This Is For
              <span className="w-8 h-[2px] bg-blue-600 ml-4"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built for Every Stage of Product Development</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personas.map((p) => (
              <div key={p.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50">
                <div className="text-5xl mb-6">{p.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities & Timeline */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">
                <span className="w-6 h-[2px] bg-blue-600 mr-3"></span>
                Capabilities
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">What We Can Do for You</h2>
              <div className="space-y-4">
                {toolingCapabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="inline-flex items-center text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">
                <span className="w-6 h-[2px] bg-blue-600 mr-3"></span>
                Timeline
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Typical Timelines</h2>
              <div className="space-y-0">
                {[
                  { phase: "DFM Review", time: "24–48 hours" },
                  { phase: "Prototype Tooling", time: "1–2 weeks" },
                  { phase: "T1 Samples", time: "+3–5 business days" },
                  { phase: "Production Tooling", time: "4–8 weeks" },
                  { phase: "Production Samples", time: "+1–2 weeks" },
                  { phase: "Mass Production", time: "Per agreed schedule" },
                ].map((item) => (
                  <div key={item.phase} className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-slate-200 last:border-0">
                    <span className="text-lg font-bold text-slate-800 mb-2 sm:mb-0">{item.phase}</span>
                    <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 font-bold text-sm rounded-full border border-blue-100">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable SubCTA instead of the repetitive one */}
      <SubCTA 
        title="Prototype in 2 Weeks. Tell Us Your Requirements."
        description="Upload your CAD file or describe your part — our engineers will respond within 24 hours."
        primaryHref="/contact"
        primaryText="Start Your Project"
        secondaryHref="/materials"
        secondaryText="View Materials"
      />
    </>
  );
}
