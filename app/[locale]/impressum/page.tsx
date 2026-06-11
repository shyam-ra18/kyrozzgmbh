import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | KYROZZ GmbH",
  robots: "noindex",
};

export default function ImpressumPage() {
  return (
    <div style={{ paddingTop: "calc(72px + var(--space-4xl))", paddingBottom: "var(--space-5xl)" }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <h1 style={{ marginBottom: "var(--space-2xl)" }}>Impressum</h1>
        <div style={{ color: "var(--c-ink)", lineHeight: 1.8 }}>
          <h2 style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)", marginTop: "var(--space-xl)" }}>Angaben gemäß § 5 TMG</h2>
          <p><strong>KYROZZ GmbH</strong></p>
          <p>Musterstraße 1</p>
          <p>80331 München, Deutschland</p>
          <p style={{ marginTop: "var(--space-md)" }}><strong>Handelsregister:</strong> HRB XXXXX</p>
          <p><strong>Registergericht:</strong> Amtsgericht München</p>
          <h2 style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)", marginTop: "var(--space-xl)" }}>Vertreten durch</h2>
          <p>Geschäftsführer: [Name des Geschäftsführers]</p>
          <h2 style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)", marginTop: "var(--space-xl)" }}>Kontakt</h2>
          <p><strong>Telefon:</strong> +49 XXX XXX XXXX</p>
          <p><strong>E-Mail:</strong> info@kyrozz.com</p>
          <h2 style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)", marginTop: "var(--space-xl)" }}>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE XXXXXXXXX</p>
          <h2 style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)", marginTop: "var(--space-xl)" }}>Haftungsausschluss</h2>
          <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
        </div>
      </div>
    </div>
  );
}
