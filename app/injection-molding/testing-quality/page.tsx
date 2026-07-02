import type { Metadata } from "next";
import Link from "next/link";
import { HugeiconsIcon } from '@hugeicons/react';
import { CheckmarkCircle01Icon, ShieldCheck, ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { PageHero } from "@/components/sections/PageHero";
import { SubCTA } from "@/components/sections/SubCTA";

export const metadata: Metadata = {
  title: "Injection Molding Quality Control & Testing | KYROZZ GmbH",
  description: "Zero defects policy. 8 advanced testing methods including melt flow, drop testing, leakage, and IIP certification. European quality standards.",
};

const testingMethods = [
  { icon: "🔬", title: "Melt Flow Testing", desc: "Verifies material viscosity and consistency batch-to-batch." },
  { icon: "⬇️", title: "Drop Testing", desc: "Simulates handling and shipping impact to verify structural integrity." },
  { icon: "📦", title: "Stack Load Testing", desc: "Validates load-bearing capacity for stacking and storage." },
  { icon: "💧", title: "Leakage Testing", desc: "Pressurized leak detection for fluid-handling components." },
  { icon: "💨", title: "Pneumatic Testing", desc: "Air pressure testing for sealed and pressurized assemblies." },
  { icon: "📏", title: "Wall Thickness", desc: "Ultrasonic wall thickness verification across the part surface." },
  { icon: "🔩", title: "Fitment Testing", desc: "Assembly verification with mating components and fixtures." },
  { icon: "⚖️", title: "Tare Weight", desc: "Weight verification to detect underfill or material inconsistency." },
];

export default function TestingQualityPage() {
  return (
    <>
      <PageHero 
        badge="Quality Control"
        title={<>Zero Defects Policy &mdash; <span className="text-blue-500">Advanced Testing</span></>}
        description="We don't ship until it's perfect. 8 testing methods. European standards. 100% inspection."
      >
        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-bold text-sm rounded-full transition-all hover:bg-blue-700 shadow-lg shadow-blue-200/50 gap-2">
          Request a Sample <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" />
        </Link>
        <a href="/kyrozz-quality-standards.pdf" className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-slate-700 text-slate-300 font-bold text-sm rounded-full transition-all hover:bg-slate-800 hover:text-white gap-2" download>
          <HugeiconsIcon icon={ShieldCheck} className="w-4 h-4" /> Quality Policy
        </a>
      </PageHero>

      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">
              <span className="w-8 h-[2px] bg-blue-600 mr-4"></span>
              Testing Methods
              <span className="w-8 h-[2px] bg-blue-600 ml-4"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">8 Quality Testing Methods</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingMethods.map((method) => (
              <div key={method.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{method.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">
                <span className="w-6 h-[2px] bg-blue-600 mr-3"></span>
                External Certification
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">IIP Certification & External Testing</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                For critical applications, KYROZZ arranges external testing and IIP certification through accredited third-party laboratories. This is standard practice for automotive, medical, and regulatory-compliant parts.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Full documentation packages including test reports, certificates of conformance, and material declarations are provided with every shipment.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                "100% dimensional inspection on first article", 
                "Batch sampling per AQL standards", 
                "Third-party IIP certification available", 
                "Material compliance documentation (RoHS, REACH)", 
                "Full batch traceability"
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 p-5 bg-emerald-50 border border-emerald-100 rounded-xl">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-emerald-900 font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SubCTA 
        title="Require Certified Quality Parts?"
        description="Request a sample batch with full quality documentation — no commitment required."
        primaryHref="/contact"
        primaryText="Request a Sample"
        secondaryHref="/contact"
        secondaryText="Contact QA Department"
      />
    </>
  );
}
