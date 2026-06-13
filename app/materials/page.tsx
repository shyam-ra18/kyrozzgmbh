import type { Metadata } from "next";
import Link from "next/link";
import { materials } from "@/content/materials";

export const metadata: Metadata = {
  title: "Injection Molding Materials Guide | PP, ABS, PA, POM | KYROZZ GmbH",
  description: "Complete guide to injection molding materials. Compare PP, ABS, PA66, POM, PC, HDPE, TPE for your application. Material selection help from KYROZZ engineers.",
};

export default function MaterialsPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #0A0F1E, #0D1635)", padding: "var(--space-6xl) 0 var(--space-5xl)", position: "relative" }}>
        <div className="hero-pattern" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">Materials Guide</div>
          <h1 style={{ color: "white", maxWidth: 720, marginBottom: "var(--space-lg)" }}>
            Which Plastic Material Is Right for Your Part?
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", maxWidth: 560 }}>
            Material expertise that ensures your parts perform in their intended environment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-3xl)" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Comparison</div>
            <h2>Material Comparison Table</h2>
          </div>

          {/* Desktop table */}
          <div style={{ overflowX: "auto", marginBottom: "var(--space-4xl)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-body)" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--c-border)" }}>
                  {["Material", "Properties", "Typical Use", "Temp Range", "Cost"].map((header) => (
                    <th key={header} style={{ padding: "14px 16px", textAlign: "left", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--c-silver)" }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {materials.map((mat, i) => (
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
                        background: mat.costLevel === "Low" ? "rgba(16,185,129,0.1)" : mat.costLevel === "Medium" ? "rgba(245,158,11,0.1)" : "rgba(239,68,68,0.1)",
                        color: mat.costLevel === "Low" ? "#059669" : mat.costLevel === "Medium" ? "#D97706" : "#DC2626",
                      }}>{mat.costLevel}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid-2" style={{ gap: "var(--space-3xl)" }}>
            <div>
              <div className="section-label">Selection Guide</div>
              <h2 style={{ marginBottom: "var(--space-lg)" }}>How to Choose the Right Material</h2>
              {[
                { q: "Is the part in contact with food or drinking water?", a: "PP, HDPE, or PETG (food-grade grades)" },
                { q: "Does the part need to withstand >100°C?", a: "PA66, PC, or PPS" },
                { q: "Is flexiblity or rubber-feel required?", a: "TPE or TPU" },
                { q: "Is dimensional stability critical?", a: "POM or PA66+GF" },
                { q: "Is optical clarity needed?", a: "PC or PMMA" },
              ].map((item) => (
                <div key={item.q} style={{ padding: "var(--space-md)", borderRadius: 10, border: "1px solid var(--c-border)", marginBottom: "var(--space-md)" }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "var(--c-ink)", marginBottom: 6 }}>Q: {item.q}</p>
                  <p style={{ fontSize: 14, color: "var(--c-primary)", margin: 0 }}>→ {item.a}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="section-label">Sustainability</div>
              <h2 style={{ marginBottom: "var(--space-lg)" }}>Sustainable Material Options</h2>
              <p style={{ marginBottom: "var(--space-lg)" }}>KYROZZ supports sustainable manufacturing with bio-based and recycled material options for qualifying applications.</p>
              {["Bio-based PLA and PHA options", "Post-consumer recycled (PCR) PP and HDPE", "Ocean-bound plastic materials (on request)", "Halogen-free formulations available", "Full material data sheets and compliance docs"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ color: "#10B981" }}>🌱</span>
                  <span style={{ fontSize: 15 }}>{item}</span>
                </div>
              ))}
              <div style={{ marginTop: "var(--space-xl)", padding: "var(--space-lg)", background: "rgba(16,185,129,0.05)", borderRadius: 10, border: "1px solid rgba(16,185,129,0.15)" }}>
                <p style={{ fontSize: 14, color: "#064E3B", margin: 0 }}>
                  <strong>Not sure which material?</strong> Our engineers will review your application and recommend the optimal material for performance and cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--c-primary)", padding: "var(--space-4xl) 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "white", marginBottom: "var(--space-md)" }}>Not Sure Which Material?</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "var(--space-xl)" }}>Ask our engineers — free material consultation with every quote request.</p>
          <Link href="/quote" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 36px", background: "white", color: "var(--c-primary)", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
            Ask Our Engineers →
          </Link>
        </div>
      </section>
    </>
  );
}
