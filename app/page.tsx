import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ContactSection } from "@/components/sections/Contact";
import { Introduction } from "@/components/sections/Services";
import { IndustriesBento } from "@/components/sections/HTMLSections";
import FeaturedServices from "@/components/sections/FeaturedServices";
import OurMission from "@/components/sections/OurMission";
import { TeamSection } from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "Injection Molding Manufacturer | KYROZZ GmbH Germany",
  description: "KYROZZ GmbH — German-managed injection molding, prototyping to high-volume production. 500+ projects, 20+ global partners, delivered in 15+ countries.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      <Hero />
      <Introduction />
      <FeaturedServices />
      <OurMission />
      <IndustriesBento />
      <TeamSection />
      <ContactSection />
    </div>
  );
}