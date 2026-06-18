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

const reasons = [
  { icon: <Target className="w-12 h-12 text-blue-600" />, title: "High Precision", desc: "Complex geometries with fine details and tight tolerances." },
  { icon: <Timer className="w-12 h-12 text-blue-600" />, title: "Fast Turnaround", desc: "Rapid prototyping and quick production to meet your timelines." },
  { icon: <Settings className="w-12 h-12 text-blue-600" />, title: "Design Freedom", desc: "No tooling required — bring your ideas to life without limitations." },
  { icon: <Layers className="w-12 h-12 text-blue-600" />, title: "Multiple Materials", desc: "Wide range of engineering plastics to suit every application." },
  { icon: <ShieldCheck className="w-12 h-12 text-blue-600" />, title: "Reliable Quality", desc: "Consistent, durable, and high-quality components you can trust." },
];

const materials = [
  "ABS", "PC", "PLA", "Nylon (PA)", "PETG", "TPU", "ASA", "And More"
];

const applications = [
  { icon: <Box className="w-8 h-8 text-blue-600" />, title: "Prototyping" },
  { icon: <Cog className="w-8 h-8 text-blue-600" />, title: "Product Development" },
  { icon: <Wrench className="w-8 h-8 text-blue-600" />, title: "Jigs & Fixtures" },
  { icon: <Settings className="w-8 h-8 text-blue-600" />, title: "End-Use Parts" },
  { icon: <Lightbulb className="w-8 h-8 text-blue-600" />, title: "Custom Solutions" },
];

export function ThreeDPrintingSection() {
  return (
    <section id="3d-printing" className="bg-white flex flex-col scroll-mt-24">
      
      {/* 1. Hero Section */}
      <div className="relative overflow-hidden py-16 md:py-20">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.png')] opacity-5 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 tracking-tight leading-tight">
                3D Printing<br />
                <span className="text-blue-600">Components</span>
              </h2>
              <p className="text-xl font-bold text-slate-800 mb-6">
                Your Professional Partner for High-Quality Production of Plastic Components.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We specialize in 3D printing components, utilizing both FDM and SLA printing processes. We invite you to explore our website to learn more about our company, our services, and how to contact us. We appreciate your visit to our website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/quote" 
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 text-sm tracking-wide"
                >
                  REQUEST A QUOTE <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 border border-slate-200 rounded-md font-bold hover:bg-slate-50 transition-colors text-sm tracking-wide shadow-sm"
                >
                  LEARN MORE <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <Image 
                src="/images/3d_printer_hero.png" 
                alt="Active 3D Printer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Why Choose 3D Printing */}
      <div className="py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-gradient-to-bl from-blue-50/50 to-transparent pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              The KYROZZ Advantage
            </div>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Why Choose 3D Printing with <span className="text-blue-600">KYROZZ</span>?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((r, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-start p-8 md:p-10 rounded-[2rem] bg-slate-50/80 border border-slate-200/60 hover:bg-white hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:border-blue-100 transition-all duration-500 group relative overflow-hidden ${
                  idx === 3 ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Decorative background glow on hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500" />
                
                {/* Icon Container - Micro UI */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-blue-100 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                    <div className="scale-75 group-hover:scale-90 transition-transform duration-300">
                      {r.icon}
                    </div>
                  </div>
                  
                  {/* Small decorative dot */}
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-100 border-2 border-white rounded-full group-hover:bg-blue-500 transition-colors duration-300" />
                </div>

                <div className="relative z-10 flex-1">
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {r.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {r.desc}
                  </p>
                </div>
                
                {/* Bottom interactive indicator */}
                <div className="mt-8 w-8 h-1 bg-slate-200 rounded-full group-hover:w-16 group-hover:bg-blue-500 transition-all duration-500 ease-out" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Our 3D Printing Technology */}
      <div className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our 3D Printing Technology
            </h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
            {/* Image */}
            <div className="lg:col-span-4 relative aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
              <Image 
                src="/images/3d_printed_bracket.png" 
                alt="3D Printed Part"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Center Content */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-200 pb-10 lg:pb-0 lg:pr-10">
              <h4 className="text-2xl font-bold text-blue-900 mb-4">FDM Printing</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Fused Deposition Modeling (FDM) is ideal for functional prototypes and production parts with durability and cost-efficiency.
              </p>
              <div className="space-y-4">
                {[
                  "Strong & Durable Parts",
                  "Wide Range of Materials",
                  "Cost-Effective Solutions"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="font-bold text-slate-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right List */}
            <div className="lg:col-span-3 lg:pl-4">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Materials We Work With</h4>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                {materials.map((mat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span className="text-sm font-bold text-slate-700">{mat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Applications We Serve */}
      <div className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900">
              Applications We Serve
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16">
            {applications.map((app, idx) => (
              <div key={idx} className="flex items-center gap-4 group cursor-default">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                  {app.icon}
                </div>
                <span className="font-bold text-slate-800 text-sm md:text-base">{app.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Bottom CTA Banner */}
      <div className="py-12 md:py-16 bg-[#0A102A] relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-[800px] h-full bg-blue-600/20 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                From concept to creation,<br/>
                <span className="text-blue-500">we print your ideas into reality.</span>
              </h3>
              <p className="text-slate-300 text-lg mb-10 max-w-xl">
                Partner with KYROZZ for reliable, innovative, and high-quality 3D printed components.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/quote" 
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 text-sm tracking-wide"
                >
                  GET A QUOTE <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border border-slate-600 rounded-md font-bold hover:bg-white/5 transition-colors text-sm tracking-wide"
                >
                  CONTACT US <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block relative h-[300px]">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-30 mix-blend-screen w-[500px] h-[400px]">
                 <Image 
                   src="/images/3d_printed_bracket.png" 
                   alt="3D printed parts concept"
                   fill
                   className="object-cover object-center grayscale opacity-80"
                 />
               </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
