"use client";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PageHero
        badge="Contact"
        title={
          <>
            Let&apos;s Talk About Your <br/>
            <span className="text-blue-500">Project</span>
          </>
        }
        description="Send us your requirements and we'll respond within 24 business hours."
      />

      <div className="flex-1">
        <ContactSection />
      </div>
    </div>
  );
}
