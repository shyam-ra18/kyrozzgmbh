import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ContactSection } from "@/components/sections/Contact";
import { Introduction } from "@/components/sections/Services";
import { IndustriesBento } from "@/components/sections/HTMLSections";
import FeaturedServices from "@/components/sections/FeaturedServices";
import OurMission from "@/components/sections/OurMission";
import { TeamSection } from "@/components/sections/Team";
import { cookies } from "next/headers";
import * as de from "@/content/de";
import * as en from "@/content/en";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const content = locale === "de" ? de : en;
  return {
    title: content.homePage.metadata.title,
    description: content.homePage.metadata.description,
    alternates: { canonical: "/" },
  };
}

export default function HomePage() {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      <Hero />
      <Introduction />
      <FeaturedServices />
      <OurMission />
      <IndustriesBento />
      {/* <TeamSection /> */}
      {/* <ContactSection /> */}
    </div>
  );
}