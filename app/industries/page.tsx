import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Injection Molding for Automotive, Medical & Electrical Industries | KYROZZ",
  description: "KYROZZ serves automotive, electrical, medical, and consumer goods industries with precision injection molded plastic components.",
};

export default function IndustriesPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #0A0F1E, #0D1635)", padding: "var(--space-6xl) 0 var(--space-5xl)", position: "relative" }}>
        <div className="hero-pattern" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">Industries</div>
          <h1 style={{ color: "white", maxWidth: 720, marginBottom: "var(--space-lg)" }}>
            Precision Manufacturing Across Every Industry
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", maxWidth: 560 }}>
            From automotive to medical — KYROZZ delivers precision injection molded parts that meet the toughest industry requirements.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: "var(--space-xl)" }}>
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} style={{ textDecoration: "none" }}>
                <div className="card" style={{ display: "flex", gap: "var(--space-lg)", alignItems: "flex-start" }}>
                  <div style={{ fontSize: 48, flexShrink: 0 }}>{ind.icon}</div>
                  <div>
                    <h3 style={{ marginBottom: "var(--space-xs)" }}>{ind.name}</h3>
                    <p style={{ fontSize: 14, marginBottom: "var(--space-sm)" }}>{ind.description}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {ind.painPoints.slice(0, 2).map((p) => (
                        <span key={p} style={{ fontSize: 12, padding: "3px 10px", background: "var(--c-mist)", borderRadius: 100, color: "var(--c-silver)" }}>{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--c-primary)", padding: "var(--space-4xl) 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "white", marginBottom: "var(--space-md)" }}>Don&apos;t See Your Industry?</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "var(--space-xl)" }}>We work across many sectors. Contact us to discuss your specific requirements.</p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 36px", background: "white", color: "var(--c-primary)", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
