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
      <section style={{ background: "linear-gradient(135deg, #0A0F1E, #0D1635)", padding: "var(--space-6xl) 0 var(--space-5xl)", position: "relative" }}>
        <div className="hero-pattern" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">{materialsPage.hero.label}</div>
          <h1 style={{ color: "white", maxWidth: 720, marginBottom: "var(--space-lg)" }}>
            {materialsPage.hero.title}
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", maxWidth: 560 }}>
            {materialsPage.hero.description}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-3xl)" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>{materialsPage.table.label}</div>
            <h2>{materialsPage.table.title}</h2>
          </div>

          {/* Desktop table */}
          <div style={{ overflowX: "auto", marginBottom: "var(--space-4xl)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-body)" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--c-border)" }}>
                  {materialsPage.table.headers.map((header) => (
                    <th key={header} style={{ padding: "14px 16px", textAlign: "left", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--c-silver)" }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {materials.map((mat, i) => {
                  const isLow = mat.costLevel === "Low" || mat.costLevel === "Niedrig";
                  const isMedium = mat.costLevel === "Medium" || mat.costLevel === "Mittel";
                  return (
                    <tr key={mat.shortName} style={{ borderBottom: "1px solid var(--c-border)", background: i % 2 === 0 ? "white" : "var(--c-mist)" }}>
                      <td style={{ padding: "16px", verticalAlign: "top" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ width: 8, height: 8, background: mat.color, borderRadius: "50%", flexShrink: 0 }} />
                          <div>
                            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15 }}>{mat.shortName}</div>
                            <div style={{ fontSize: 12, color: "var(--c-silver)" }}>{mat.name}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: "16px", fontSize: 14, verticalAlign: "top", maxWidth: 240 }}>{mat.properties}</td>
                      <td style={{ padding: "16px", fontSize: 14, verticalAlign: "top" }}>{mat.typicalUse}</td>
                      <td style={{ padding: "16px", fontSize: 13, verticalAlign: "top", fontFamily: "var(--font-mono)", color: "var(--c-primary)" }}>{mat.tempRange}</td>
                      <td style={{ padding: "16px", verticalAlign: "top" }}>
                        <span style={{
                          padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600,
                          background: isLow ? "rgba(16,185,129,0.1)" : isMedium ? "rgba(245,158,11,0.1)" : "rgba(239,68,68,0.1)",
                          color: isLow ? "#059669" : isMedium ? "#D97706" : "#DC2626",
                        }}>{mat.costLevel}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="grid-2" style={{ gap: "var(--space-3xl)" }}>
            <div>
              <div className="section-label">{materialsPage.selection.label}</div>
              <h2 style={{ marginBottom: "var(--space-lg)" }}>{materialsPage.selection.title}</h2>
              {materialsPage.selection.items.map((item) => (
                <div key={item.q} style={{ padding: "var(--space-md)", borderRadius: 10, border: "1px solid var(--c-border)", marginBottom: "var(--space-md)" }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "var(--c-ink)", marginBottom: 6 }}>Q: {item.q}</p>
                  <p style={{ fontSize: 14, color: "var(--c-primary)", margin: 0 }}>→ {item.a}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="section-label">{materialsPage.sustainability.label}</div>
              <h2 style={{ marginBottom: "var(--space-lg)" }}>{materialsPage.sustainability.title}</h2>
              <p style={{ marginBottom: "var(--space-lg)" }}>{materialsPage.sustainability.description}</p>
              {materialsPage.sustainability.bullets.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ color: "#10B981" }}>🌱</span>
                  <span style={{ fontSize: 15 }}>{item}</span>
                </div>
              ))}
              <div style={{ marginTop: "var(--space-xl)", padding: "var(--space-lg)", background: "rgba(16,185,129,0.05)", borderRadius: 10, border: "1px solid rgba(16,185,129,0.15)" }}>
                <p style={{ fontSize: 14, color: "#064E3B", margin: 0 }}>
                  {materialsPage.sustainability.notSure}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--c-primary)", padding: "var(--space-4xl) 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "white", marginBottom: "var(--space-md)" }}>{materialsPage.bottomCTA.title}</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "var(--space-xl)" }}>{materialsPage.bottomCTA.description}</p>
          <Link href="/quote" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 36px", background: "white", color: "var(--c-primary)", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
            {materialsPage.bottomCTA.cta} →
          </Link>
        </div>
      </section>
    </>
  );
}
