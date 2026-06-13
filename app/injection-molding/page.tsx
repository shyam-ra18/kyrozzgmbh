import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Users, Settings, Factory, Server, Euro, Handshake, ShieldCheck, Box, Globe, SlidersHorizontal, Headset, Truck, MessageSquare, ArrowRight, Check, CheckCircle2, Search, TrendingUp, ClipboardList, ChevronRight } from "lucide-react";

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
        <div className="absolute inset-0 w-full h-[full]">
          <Image
            src="/hero-injection.png"
            alt="Injection Molding Facility"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0a1b3f] via-[#0a1b3f]/70 to-transparent"></div>
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
      <section className="relative pt-24 pb-40 bg-[#002f87] text-white mb-40">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 relative gap-y-0 gap-x-0">
              {/* Horizontal Line (Desktop) */}
              <div className="hidden sm:block absolute top-1/2 left-0 w-full h-px bg-white/20 -translate-y-1/2"></div>
              {/* Vertical Line (Desktop) */}
              <div className="hidden sm:block absolute top-0 left-1/2 w-px h-full bg-white/20 -translate-x-1/2"></div>

              <div className="flex items-center gap-6 p-8 border-b border-white/20 sm:border-none">
                <Users className="w-16 h-16 text-[#4581ff] stroke-[1.5]" />
                <div>
                  <div className="text-4xl font-bold mb-1">50+</div>
                  <div className="text-base text-white/90">Talented<br />Employees</div>
                </div>
              </div>
              <div className="flex items-center gap-6 p-8 border-b border-white/20 sm:border-none">
                <Settings className="w-16 h-16 text-[#4581ff] stroke-[1.5]" />
                <div>
                  <div className="text-4xl font-bold mb-1">150+</div>
                  <div className="text-base text-white/90">Tonnes<br />Capacity</div>
                </div>
              </div>
              <div className="flex items-center gap-6 p-8 border-b border-white/20 sm:border-none">
                <Factory className="w-16 h-16 text-[#4581ff] stroke-[1.5]" />
                <div>
                  <div className="text-4xl font-bold mb-1">2</div>
                  <div className="text-base text-white/90">Manufacturing<br />Plants</div>
                </div>
              </div>
              <div className="flex items-center gap-6 p-8">
                <Server className="w-16 h-16 text-[#4581ff] stroke-[1.5]" />
                <div>
                  <div className="text-4xl font-bold mb-1">5+</div>
                  <div className="text-base text-white/90">Injection Molding<br />Machines</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Features Banner Section */}
        <section className="absolute -bottom-28 w-full px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-[1400px] mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative -mt-32 z-20 border border-slate-100">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-600/30 flex items-center justify-center">
                  <Settings className="w-8 h-8 text-blue-600 stroke-[1.5]" />
                </div>
                <div className="text-[13px] font-bold text-[#0B1523] leading-snug">German<br />Project<br />Management</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-600/30 flex items-center justify-center">
                  <Euro className="w-8 h-8 text-blue-600 stroke-[1.5]" />
                </div>
                <div className="text-[13px] font-bold text-[#0B1523] leading-snug">Competitive<br />Manufacturing<br />Costs</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-600/30 flex items-center justify-center">
                  <Handshake className="w-8 h-8 text-blue-600 stroke-[1.5]" />
                </div>
                <div className="text-[13px] font-bold text-[#0B1523] leading-snug">Trusted<br />Production<br />Partners</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-600/30 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-blue-600 stroke-[1.5]" />
                </div>
                <div className="text-[13px] font-bold text-[#0B1523] leading-snug">Quality<br />Inspection &<br />Control</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-600/30 flex items-center justify-center">
                  <Box className="w-8 h-8 text-blue-600 stroke-[1.5]" />
                </div>
                <div className="text-[13px] font-bold text-[#0B1523] leading-snug">Prototype to<br />Mass<br />Production</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-600/30 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-blue-600 stroke-[1.5]" />
                </div>
                <div className="text-[13px] font-bold text-[#0B1523] leading-snug">Worldwide<br />Shipping</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-600/30 flex items-center justify-center">
                  <SlidersHorizontal className="w-8 h-8 text-blue-600 stroke-[1.5]" />
                </div>
                <div className="text-[13px] font-bold text-[#0B1523] leading-snug">Flexible<br />Manufacturing<br />Solutions</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-600/30 flex items-center justify-center">
                  <Headset className="w-8 h-8 text-blue-600 stroke-[1.5]" />
                </div>
                <div className="text-[13px] font-bold text-[#0B1523] leading-snug">Dedicated<br />Customer<br />Support</div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Global Manufacturing Banner (Man Work) */}
      <section className="relative w-full min-h-[700px] flex items-center bg-[#051124] overflow-hidden py-20 mt-16">
        {/* Background Image positioned to the right */}
        <div className="absolute inset-0 w-full h-full lg:w-[70%] lg:left-auto lg:right-0">
          <Image
            src="/man-work.png"
            alt="Engineer working on CAD"
            fill
            className="object-cover object-center lg:object-left"
          />
          {/* Gradient Overlays for seamless blend */}
          <div className="absolute inset-0 bg-linear-to-r from-[#051124] via-[#051124]/90 to-transparent lg:via-[#051124]/40"></div>
          <div className="absolute inset-0 bg-linear-to-t from-[#051124] via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.1] mb-6">
              Global Manufacturing.<br />
              <span className="text-[#1d64ff]">German</span> Reliability.
            </h2>
            <p className="text-xl md:text-[22px] font-bold text-white mb-6 leading-snug">
              Precision Injection Molding Solutions<br />
              Through Our Trusted Global Manufacturing Network.
            </p>
            <p className="text-[15px] text-white/80 max-w-[540px] leading-relaxed mb-14">
              KYROZZ GmbH is a German-based project management company that delivers high-precision injection molded components through a network of carefully selected manufacturing partners worldwide.
            </p>

            {/* 4 Icons Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-900/40">
                  <Users className="w-5 h-5 text-blue-400 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-white mb-1.5 leading-snug uppercase tracking-wide">German<br />Project<br />Management</div>
                  <div className="text-[11px] text-white/60 leading-snug">Your single point<br />of contact in Europe</div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-900/40">
                  <ShieldCheck className="w-5 h-5 text-blue-400 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-white mb-1.5 leading-snug uppercase tracking-wide">Quality<br />Oversight</div>
                  <div className="text-[11px] text-white/60 leading-snug">Strict quality control<br />& inspection</div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-900/40">
                  <Globe className="w-5 h-5 text-blue-400 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-white mb-1.5 leading-snug uppercase tracking-wide">Global<br />Manufacturing<br />Network</div>
                  <div className="text-[11px] text-white/60 leading-snug">Trusted partners<br />worldwide</div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-900/40">
                  <Truck className="w-5 h-5 text-blue-400 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-white mb-1.5 leading-snug uppercase tracking-wide">Timely<br />Delivery</div>
                  <div className="text-[11px] text-white/60 leading-snug">On-time delivery<br />you can depend on</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kyrozz Card Block & Metrics Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* WHY KYROZZ & ADVANTAGES Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-slate-100 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Column: Why Kyrozz */}
              <div className="lg:col-span-7 lg:pr-8 lg:border-r lg:border-slate-200">
                <h3 className="text-xl font-bold text-[#0a42bf] tracking-wider uppercase mb-8 border-b-2 border-[#0a42bf] w-fit pb-2">
                  WHY KYROZZ INJECTION MOLDING?
                </h3>
                
                <div className="space-y-8">
                  {[
                    {
                      icon: <Users className="w-6 h-6 text-[#0a42bf] stroke-[1.5]" />,
                      title: "We Don't Manufacture Here.",
                      desc: "We work with a carefully selected network of certified manufacturing partners who meet our strict standards for quality, precision, and reliability."
                    },
                    {
                      icon: <Settings className="w-6 h-6 text-[#0a42bf] stroke-[1.5]" />,
                      title: "German Project Management.",
                      desc: "We handle every step – from engineering review and partner selection to production monitoring and final delivery."
                    },
                    {
                      icon: <Search className="w-6 h-6 text-[#0a42bf] stroke-[1.5]" />,
                      title: "Quality You Can Trust.",
                      desc: "Our quality experts ensure every component meets European standards through rigorous inspections and continuous process control."
                    },
                    {
                      icon: <TrendingUp className="w-6 h-6 text-[#0a42bf] stroke-[1.5]" />,
                      title: "On Time. Every Time.",
                      desc: "We coordinate the entire supply chain to ensure your products are delivered on time – every time."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-5">
                      <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#0B1523] mb-1.5">{item.title}</h4>
                        <p className="text-sm text-[#5C6E8A] leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Your Advantages */}
              <div className="lg:col-span-5 lg:pl-4">
                <h3 className="text-xl font-bold text-[#0a42bf] tracking-wider uppercase mb-8 border-b-2 border-[#0a42bf] w-fit pb-2">
                  YOUR ADVANTAGES
                </h3>
                
                <div className="space-y-4">
                  {[
                    "German Customer Support",
                    "Dedicated Project Management",
                    "Trusted Global Manufacturing Partners",
                    "High-Precision Injection Molding",
                    "Competitive Production Costs",
                    "Quality Control & Inspection",
                    "Reliable Logistics & Delivery",
                    "Single Point of Contact in Europe"
                  ].map((adv, idx) => (
                    <div key={idx} className="flex items-center gap-3.5">
                      <CheckCircle2 className="w-5 h-5 text-[#0a42bf] fill-[#eff6ff] shrink-0 stroke-[2]" />
                      <span className="text-[15px] font-semibold text-[#334155]">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* 500+ Metrics Bar */}
          <div className="bg-[#002f87] rounded-3xl p-8 lg:p-10 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
              {[
                {
                  icon: <ClipboardList className="w-10 h-10 text-blue-300 stroke-[1.5]" />,
                  val: "500+",
                  lbl: "Completed Projects"
                },
                {
                  icon: <Handshake className="w-10 h-10 text-blue-300 stroke-[1.5]" />,
                  val: "20+",
                  lbl: "Global Manufacturing Partners"
                },
                {
                  icon: <Globe className="w-10 h-10 text-blue-300 stroke-[1.5]" />,
                  val: "15+",
                  lbl: "Countries Served"
                },
                {
                  icon: <Check className="w-10 h-10 text-blue-300 stroke-[2.5] border-[2.5px] border-blue-300 rounded-full p-1" />,
                  val: "100%",
                  lbl: "Customer-Focused Project Management"
                }
              ].map((metric, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center gap-5 lg:px-8 ${
                    idx < 3 ? "lg:border-r lg:border-white/10" : ""
                  }`}
                >
                  <div className="shrink-0">{metric.icon}</div>
                  <div>
                    <div className="text-3xl font-extrabold leading-none mb-1">{metric.val}</div>
                    <div className="text-[12px] text-white/80 font-medium leading-snug">{metric.lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* One Partner Section */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden border-t border-slate-100">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col items-start max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B1523] leading-tight mb-1 lg:whitespace-nowrap">
                One Partner.
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0a42bf] leading-tight mb-6 lg:whitespace-nowrap">
                Global Manufacturing Capability.
              </h2>
              
              {/* Thin Divider Line */}
              <div className="w-full h-px bg-slate-200 mb-8 max-w-[320px]"></div>
              
              <p className="text-[15px] text-[#475569] leading-relaxed mb-10 font-medium">
                From concept to delivery, KYROZZ GmbH acts as your manufacturing partner, ensuring that every project is completed efficiently, professionally, and according to your requirements.
              </p>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#0a42bf] text-white font-bold text-sm rounded-md transition-all hover:bg-[#073092] uppercase tracking-wide gap-3 shadow-lg shadow-blue-500/20"
              >
                REQUEST A QUOTE <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Graphic Area (Vector Map with Radiating Pins) */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center lg:justify-end">
              <svg viewBox="0 0 1000 500" className="w-full h-full text-slate-200 select-none pointer-events-none opacity-80">
                <defs>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.1" />
                  </filter>
                </defs>

                {/* Stylized Continents Paths */}
                {/* North America */}
                <path d="M 80,100 C 90,80 120,60 160,60 C 200,60 210,80 230,80 C 250,80 270,110 280,130 C 270,140 250,150 240,160 C 220,170 200,160 190,170 C 180,180 160,210 150,220 C 130,220 120,200 110,180 C 100,160 80,140 70,130 C 65,120 70,110 80,100 Z" fill="currentColor" />
                {/* South America */}
                <path d="M 190,230 C 210,230 230,250 250,280 C 270,310 280,350 260,390 C 240,420 220,450 200,470 C 195,480 190,480 185,460 C 180,440 170,390 170,360 C 170,330 160,290 170,270 C 180,250 185,240 190,230 Z" fill="currentColor" />
                {/* Africa */}
                <path d="M 410,200 C 440,190 470,200 490,220 C 510,240 520,270 515,310 C 510,350 490,390 470,410 C 460,420 450,420 445,400 C 440,380 435,350 430,330 C 420,310 405,300 400,280 C 395,260 395,240 400,220 C 405,210 408,205 410,200 Z" fill="currentColor" />
                {/* Eurasia */}
                <path d="M 390,110 C 410,95 440,80 480,80 C 520,80 540,60 580,70 C 620,80 660,60 700,70 C 740,80 780,70 820,90 C 850,110 860,130 850,160 C 840,190 820,220 780,230 C 750,240 710,230 680,240 C 650,250 630,230 610,210 C 590,190 560,180 530,190 C 500,200 470,180 450,160 C 430,140 400,130 390,110 Z" fill="currentColor" />
                <path d="M 450,160 L 460,180 L 480,185 L 470,195 L 450,190 Z M 600,190 L 615,220 L 630,225 L 635,210 L 620,190 Z" fill="currentColor" />
                {/* Australia */}
                <path d="M 740,330 C 760,320 790,320 810,340 C 830,360 830,380 810,400 C 790,410 770,410 750,400 C 730,390 730,350 740,330 Z" fill="currentColor" />

                {/* Curved Dotted Blue Lines radiating from center gear at (540, 150) */}
                <path d="M 540,150 Q 390,100 240,120" stroke="#0a42bf" strokeWidth="2" strokeDasharray="5" fill="none" opacity="0.6" />
                <path d="M 540,150 Q 500,125 460,110" stroke="#0a42bf" strokeWidth="2" strokeDasharray="5" fill="none" opacity="0.6" />
                <path d="M 540,150 Q 580,180 620,210" stroke="#0a42bf" strokeWidth="2" strokeDasharray="5" fill="none" opacity="0.6" />
                <path d="M 540,150 Q 645,135 750,150" stroke="#0a42bf" strokeWidth="2" strokeDasharray="5" fill="none" opacity="0.6" />
                <path d="M 540,150 Q 400,240 260,330" stroke="#0a42bf" strokeWidth="2" strokeDasharray="5" fill="none" opacity="0.6" />

                {/* Pins */}
                {/* US East */}
                <g transform="translate(240, 120)">
                  <circle r="6" fill="#0a42bf" />
                  <circle r="12" fill="#0a42bf" opacity="0.2" className="animate-pulse" />
                </g>
                {/* Brazil */}
                <g transform="translate(260, 330)">
                  <circle r="6" fill="#0a42bf" />
                  <circle r="12" fill="#0a42bf" opacity="0.2" className="animate-pulse" />
                </g>
                {/* Germany */}
                <g transform="translate(460, 110)">
                  <circle r="6" fill="#0a42bf" />
                  <circle r="12" fill="#0a42bf" opacity="0.2" className="animate-pulse" />
                </g>
                {/* India */}
                <g transform="translate(620, 210)">
                  <circle r="6" fill="#0a42bf" />
                  <circle r="12" fill="#0a42bf" opacity="0.2" className="animate-pulse" />
                </g>
                {/* China */}
                <g transform="translate(750, 150)">
                  <circle r="6" fill="#0a42bf" />
                  <circle r="12" fill="#0a42bf" opacity="0.2" className="animate-pulse" />
                </g>

                {/* Central Gear White Card Container and Logo */}
                <g transform="translate(540, 150)" filter="url(#shadow)">
                  <circle r="36" fill="white" />
                </g>
                
                {/* Central Gear Image */}
                <image href="/service-logo.png" x="507" y="117" width="66" height="66" />
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-white border-t border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
            {[
              { num: "1", title: "YOUR INQUIRY", desc: "You send us your\nrequirements", icon: <MessageSquare className="w-6 h-6 text-[#0a42bf] stroke-[1.5]" /> },
              { num: "2", title: "PROJECT REVIEW", desc: "We analyze & provide\nbest solution", icon: <Settings className="w-6 h-6 text-[#0a42bf] stroke-[1.5]" /> },
              { num: "3", title: "PARTNER SELECTION", desc: "We choose the right\nmanufacturing partner", icon: <Users className="w-6 h-6 text-[#0a42bf] stroke-[1.5]" /> },
              { num: "4", title: "PRODUCTION & QC", desc: "Production with strict\nquality control", icon: <ShieldCheck className="w-6 h-6 text-[#0a42bf] stroke-[1.5]" /> },
              { num: "5", title: "DELIVERY", desc: "On-time delivery to\nyour location", icon: <Truck className="w-6 h-6 text-[#0a42bf] stroke-[1.5]" /> },
            ].map((step, idx) => (
              <Fragment key={idx}>
                <div className="flex items-center gap-5 flex-1 w-full lg:w-auto">
                  <div className="shrink-0">
                    <div className="w-[68px] h-[68px] rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[13px] font-extrabold text-[#0B1523] uppercase tracking-wider mb-1 leading-none">
                      {step.num}. {step.title}
                    </div>
                    <div className="text-[12px] text-[#475569] leading-snug whitespace-pre-line font-medium">
                      {step.desc}
                    </div>
                  </div>
                </div>
                {/* Arrow indicator between steps */}
                {idx < 4 && (
                  <div className="hidden lg:block text-slate-300 mx-2">
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
