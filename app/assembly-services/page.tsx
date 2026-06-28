import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Factory, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SubCTA } from "@/components/sections/SubCTA";

export const metadata: Metadata = {
  title: "Plastic Parts Assembly Services | Contract Manufacturing | KYROZZ GmbH",
  description: "Complete assembly services — electromechanical, automated, custom, and contract assembly. Beyond just injection molding.",
};

const assemblyTypes = [
  { icon: "⚡", title: "Electromechanical Assembly", desc: "Integration of electronic components, PCBs, connectors, and mechanical plastic parts into complete sub-assemblies." },
  { icon: "🤖", title: "Automated Assembly", desc: "High-speed automated assembly for high-volume programs requiring consistent quality and throughput." },
  { icon: "🔧", title: "Custom Assembly", desc: "Bespoke assembly processes designed around your unique product requirements and specifications." },
  { icon: "📦", title: "Contract Assembly", desc: "Complete contract manufacturing including kitting, packaging, and direct-to-customer fulfillment." },
];

export default function AssemblyServicesPage() {
  return (
    <>
      <PageHero 
        badge="Assembly Services"
        title={<>Complete Assembly Services &mdash; <span className="text-blue-500">Beyond Just Injection Molding</span></>}
        description="We don't just mold parts. We build finished products ready for your customer. Assembly, testing, and packaging in one place."
      >
        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-bold text-sm rounded-full transition-all hover:bg-blue-700 shadow-lg shadow-blue-200/50 gap-2">
          Start Your Project <ArrowRight className="w-4 h-4" />
        </Link>
      </PageHero>

      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">
              <span className="w-8 h-[2px] bg-blue-600 mr-4"></span>
              Assembly Types
              <span className="w-8 h-[2px] bg-blue-600 ml-4"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">4 Types of Assembly Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assemblyTypes.map((type) => (
              <div key={type.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">
                <span className="w-6 h-[2px] bg-blue-600 mr-3"></span>
                Capabilities
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Technical Capabilities</h2>
              <div className="space-y-4">
                {[
                  "Ultrasonic welding and heat staking", 
                  "Press-fit and snap-fit assembly", 
                  "Screw assembly with torque verification", 
                  "Adhesive bonding and sealing", 
                  "Electrical testing and functional verification", 
                  "Kitting and custom packaging"
                ].map((cap) => (
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
                Industries
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Industries Served</h2>
              <div className="space-y-4">
                {[
                  "Consumer electronics and appliances", 
                  "Automotive sub-assemblies", 
                  "Medical device components", 
                  "Water filtration systems", 
                  "Industrial equipment"
                ].map((ind) => (
                  <div key={ind} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <Factory className="w-6 h-6 text-slate-400" />
                    <span className="text-slate-800 text-lg font-medium">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubCTA 
        title="Ready to Simplify Your Supply Chain?"
        description="Get a quote for assembly services — we handle manufacturing, assembly, and delivery in one."
        primaryHref="/contact"
        primaryText="Get Assembly Quote"
        secondaryHref="/contact"
        secondaryText="Talk to our Engineering Team"
      />
    </>
  );
}
