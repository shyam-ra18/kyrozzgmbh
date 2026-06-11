import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries } from "@/content/industries";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return { title: "Not Found" };
  return {
    title: `${industry.h1} | KYROZZ GmbH`,
    description: `${industry.description} Learn how KYROZZ serves the ${industry.name} industry with precision injection molded components.`,
  };
}

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #0A0F1E, #0D1635)", padding: "var(--space-6xl) 0 var(--space-5xl)", position: "relative" }}>
        <div className="hero-pattern" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 64, marginBottom: "var(--space-md)" }}>{industry.icon}</div>
          <div className="section-label">{industry.name}</div>
          <h1 style={{ color: "white", maxWidth: 720, marginBottom: "var(--space-lg)" }}>{industry.h1}</h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", maxWidth: 560, marginBottom: "var(--space-2xl)" }}>{industry.description}</p>
          <Link href="/quote" className="btn btn-primary btn-lg">Get Industry Quote →</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: "var(--space-4xl)" }}>
            <div>
              <div className="section-label">Challenges</div>
              <h2 style={{ marginBottom: "var(--space-xl)" }}>Pain Points We Solve</h2>
              {industry.painPoints.map((point) => (
                <div key={point} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "#FEF2F2", borderRadius: 8, border: "1px solid #FECACA", marginBottom: "var(--space-sm)" }}>
                  <span style={{ fontSize: 16 }}>❌</span>
                  <span style={{ fontSize: 15, color: "#7F1D1D" }}>{point}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="section-label">Solutions</div>
              <h2 style={{ marginBottom: "var(--space-xl)" }}>How KYROZZ Solves It</h2>
              {industry.solutions.map((sol) => (
                <div key={sol} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "rgba(16,185,129,0.05)", borderRadius: 8, border: "1px solid rgba(16,185,129,0.15)", marginBottom: "var(--space-sm)" }}>
                  <span style={{ color: "#10B981" }}>✓</span>
                  <span style={{ fontSize: 15, color: "#064E3B" }}>{sol}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--c-primary)", padding: "var(--space-4xl) 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "white", marginBottom: "var(--space-md)" }}>Ready to Work Together?</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "var(--space-xl)" }}>Tell us about your {industry.name.toLowerCase()} project — free quote within 24 hours.</p>
          <Link href="/quote" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 36px", background: "white", color: "var(--c-primary)", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
