"use client";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/Contact";
import { useContent } from "@/context/LocaleContext";

export default function ContactPage() {
  const { contactPage } = useContent();
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PageHero
        badge={contactPage.hero.badge}
        title={
          <>
            {contactPage.hero.headingLine1} <br/>
            <span className="text-blue-500">{contactPage.hero.headingLine2}</span>
          </>
        }
        description={contactPage.hero.description}
      />

      <div className="flex-1">
        <ContactSection />
      </div>
    </div>
  );
}
