import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import * as de from "@/content/de";
import * as en from "@/content/en";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const content = locale === "de" ? de : en;
  return {
    title: content.materialsPage.metadata.title,
    description: content.materialsPage.metadata.description,
  };
}

export default async function MaterialsPage() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const content = locale === "de" ? de : en;
  const { materials, materialsPage } = content;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-20 lg:pt-24 pb-16 lg:pb-24 bg-gradient-to-br from-slate-900 to-[#0D1635] overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:32px_32px] pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            {materialsPage.hero.label}
          </div>
          <h1 className="text-[clamp(2.5rem,2rem+2.5vw,4rem)] font-bold text-white max-w-3xl mb-6 leading-tight">
            {materialsPage.hero.title}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            {materialsPage.hero.description}
          </p>
        </div>
      </section>

      {/* Main Table Section */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
              {materialsPage.table.label}
            </div>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold text-slate-900">
              {materialsPage.table.title}
            </h2>
          </div>

          {/* Responsive Table Wrapper */}
          <div className="w-full overflow-x-auto mb-16 lg:mb-12 lg:mb-16 rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-50">
                  {materialsPage.table.headers.map((header) => (
                    <th key={header} className="px-5 py-4 text-xs font-bold tracking-widest uppercase text-slate-500">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {materials.map((mat, i) => {
                  const isLow = mat.costLevel === "Low" || mat.costLevel === "Niedrig";
                  const isMedium = mat.costLevel === "Medium" || mat.costLevel === "Mittel";
                  return (
                    <tr key={mat.shortName} className={`hover:bg-slate-50 transition-colors ${i % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}`}>
                      <td className="px-5 py-4 align-top">
                        <div className="flex items-start gap-3">
                          <div className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: mat.color }} />
                          <div>
                            <div className="font-display font-bold text-base text-slate-900">{mat.shortName}</div>
                            <div className="text-sm text-slate-500">{mat.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-600 align-top max-w-xs">{mat.properties}</td>
                      <td className="px-5 py-4 text-sm text-slate-600 align-top">{mat.typicalUse}</td>
                      <td className="px-5 py-4 text-sm font-mono text-blue-600 align-top">{mat.tempRange}</td>
                      <td className="px-5 py-4 align-top">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          isLow ? "bg-emerald-100 text-emerald-700" : 
                          isMedium ? "bg-amber-100 text-amber-700" : 
                          "bg-red-100 text-red-700"
                        }`}>
                          {mat.costLevel}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Grid Layout for FAQ and Sustainability */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* FAQ */}
            <div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
                {materialsPage.selection.label}
              </div>
              <h2 className="text-[clamp(1.5rem,1.25rem+1vw,2rem)] font-bold text-slate-900 mb-8">
                {materialsPage.selection.title}
              </h2>
              <div className="space-y-4">
                {materialsPage.selection.items.map((item) => (
                  <div key={item.q} className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                    <p className="text-sm font-bold text-slate-900 mb-2">Q: {item.q}</p>
                    <p className="text-sm text-blue-600 leading-relaxed font-medium">→ {item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sustainability */}
            <div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
                {materialsPage.sustainability.label}
              </div>
              <h2 className="text-[clamp(1.5rem,1.25rem+1vw,2rem)] font-bold text-slate-900 mb-6">
                {materialsPage.sustainability.title}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                {materialsPage.sustainability.description}
              </p>
              <div className="space-y-3 mb-10">
                {materialsPage.sustainability.bullets.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-0.5">🌱</span>
                    <span className="text-base text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-100">
                <p className="text-sm font-medium text-emerald-800 leading-relaxed">
                  {materialsPage.sustainability.notSure}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-600 py-12 lg:py-12 lg:py-16">
        <div className="section-container text-center">
          <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold text-white mb-6">
            {materialsPage.bottomCTA.title}
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            {materialsPage.bottomCTA.description}
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-base hover:bg-slate-50 transition-colors shadow-lg hover:shadow-xl min-h-[44px]"
          >
            {materialsPage.bottomCTA.cta} →
          </Link>
        </div>
      </section>
    </>
  );
}
