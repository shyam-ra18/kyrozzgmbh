import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Users, Settings, Factory, Server, Euro, Handshake, ShieldCheck, Box, Globe, SlidersHorizontal, Headset } from "lucide-react";

export const metadata: Metadata = {
  title: "Injection Molding | KYROZZ GmbH",
  description: "Plastic injection molding managed from Germany. Prototyping to mass production, European quality standards.",
  alternates: { canonical: "/injection-molding" },
};

export default function InjectionMoldingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] lg:h-[700px] flex items-center mt-[90px]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/hero-injection.png" 
            alt="Injection Molding Facility" 
            fill 
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1b3f] via-[#0a1b3f]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              We are the legacy of<br />
              <span className="text-[#1d64ff]">engineering plastics</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-white/95">
              Molding relationships with precision plastics
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Image - 3D logo or placeholder */}
            <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none lg:mx-0">
              <Image 
                src="/kyrozz_logo_hd.png" // placeholder for the 3D gear logo
                alt="About Us Gear" 
                fill 
                className="object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-start">
              <div className="inline-block text-[#1d64ff] font-bold text-sm tracking-widest uppercase mb-4">
                ABOUT US
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1523] leading-tight mb-8">
                Our legacy of precision and trust in injection molding
              </h2>
              <p className="text-base text-[#475569] leading-relaxed mb-10 font-medium">
                From a small enterprise in Surat to one of India's leading injection molding manufacturers — our five-decade-long journey reflects reliability, innovation, and superior craftsmanship. Over the years, our precision molding and trusted partnerships have helped us expand to three strategic locations across India. And it doesn't stop there. VFC Plastics is one of the first Indian plastic part manufacturing brand to prioritize sustainability. The trust our customers place in us has always inspired us to take injection molding to another level. Today, we proudly serve clients globally and are recognized as a trusted injection molding partner in various high-demand industries, including Electrical, Automotive, Textile, and Kitchenware. With every new evolving need worldwide, we see an opportunity to deliver even greater value.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#0a42bf] text-white font-bold text-sm rounded-full transition-all hover:bg-[#073092]"
              >
                READ ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="pt-24 pb-32 bg-[#002f87] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
            {/* Left Title */}
            <div>
              <h2 className="text-4xl md:text-[44px] font-bold leading-[1.2] relative">
                We mold more than plastics; We mold relationships
                <span className="absolute -bottom-8 left-0 w-16 h-[3px] bg-[#1d64ff]"></span>
              </h2>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
              <div className="flex items-center gap-6 border-b border-white/10 pb-10 sm:border-b-0 sm:pb-0">
                <Users className="w-16 h-16 text-[#4581ff] stroke-[1.5]" />
                <div>
                  <div className="text-4xl font-bold mb-1">50+</div>
                  <div className="text-base text-white/90">Talented<br/>Employees</div>
                </div>
              </div>
              <div className="flex items-center gap-6 border-b border-white/10 pb-10 sm:border-b-0 sm:pb-0">
                <Settings className="w-16 h-16 text-[#4581ff] stroke-[1.5]" />
                <div>
                  <div className="text-4xl font-bold mb-1">150+</div>
                  <div className="text-base text-white/90">Tonnes<br/>Capacity</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Factory className="w-16 h-16 text-[#4581ff] stroke-[1.5]" />
                <div>
                  <div className="text-4xl font-bold mb-1">2</div>
                  <div className="text-base text-white/90">Manufacturing<br/>Plants</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Server className="w-16 h-16 text-[#4581ff] stroke-[1.5]" />
                <div>
                  <div className="text-4xl font-bold mb-1">5+</div>
                  <div className="text-base text-white/90">Injection Molding<br/>Machines</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner Section */}
      <section className="bg-white relative px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-[1400px] mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative -mt-16 z-20 border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-600/30 flex items-center justify-center">
                <Settings className="w-8 h-8 text-blue-600 stroke-[1.5]" />
              </div>
              <div className="text-[13px] font-bold text-[#0B1523] leading-snug">German<br/>Project<br/>Management</div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-600/30 flex items-center justify-center">
                <Euro className="w-8 h-8 text-blue-600 stroke-[1.5]" />
              </div>
              <div className="text-[13px] font-bold text-[#0B1523] leading-snug">Competitive<br/>Manufacturing<br/>Costs</div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-600/30 flex items-center justify-center">
                <Handshake className="w-8 h-8 text-blue-600 stroke-[1.5]" />
              </div>
              <div className="text-[13px] font-bold text-[#0B1523] leading-snug">Trusted<br/>Production<br/>Partners</div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-600/30 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-blue-600 stroke-[1.5]" />
              </div>
              <div className="text-[13px] font-bold text-[#0B1523] leading-snug">Quality<br/>Inspection &<br/>Control</div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-600/30 flex items-center justify-center">
                <Box className="w-8 h-8 text-blue-600 stroke-[1.5]" />
              </div>
              <div className="text-[13px] font-bold text-[#0B1523] leading-snug">Prototype to<br/>Mass<br/>Production</div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-600/30 flex items-center justify-center">
                <Globe className="w-8 h-8 text-blue-600 stroke-[1.5]" />
              </div>
              <div className="text-[13px] font-bold text-[#0B1523] leading-snug">Worldwide<br/>Shipping</div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-600/30 flex items-center justify-center">
                <SlidersHorizontal className="w-8 h-8 text-blue-600 stroke-[1.5]" />
              </div>
              <div className="text-[13px] font-bold text-[#0B1523] leading-snug">Flexible<br/>Manufacturing<br/>Solutions</div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-600/30 flex items-center justify-center">
                <Headset className="w-8 h-8 text-blue-600 stroke-[1.5]" />
              </div>
              <div className="text-[13px] font-bold text-[#0B1523] leading-snug">Dedicated<br/>Customer<br/>Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
