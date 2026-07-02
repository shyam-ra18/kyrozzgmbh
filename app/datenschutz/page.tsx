import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | KYROZZ GmbH",
  robots: "noindex",
};

export default function DatenschutzPage() {
  return (
    <div style={{ paddingTop: "calc(72px + var(--space-4xl))", paddingBottom: "var(--space-5xl)" }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <h1 style={{ marginBottom: "var(--space-2xl)" }}>Datenschutzerklärung</h1>
        <div style={{ color: "var(--c-ink)", lineHeight: 1.8 }}>
          <h2 style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)", marginTop: "var(--space-xl)" }}>1. Datenschutz auf einen Blick</h2>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>

          <h2 style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)", marginTop: "var(--space-xl)" }}>2. Allgemeine Hinweise</h2>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

          <h2 style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)", marginTop: "var(--space-xl)" }}>3. Verantwortliche Stelle</h2>
          <p>Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <p><strong>KYROZZ GmbH</strong><br />Poschingerstraße 33<br />94469 Deggendorf<br />E-Mail: info@kyrozz.de</p>

          <h2 style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)", marginTop: "var(--space-xl)" }}>4. Erhebung und Speicherung personenbezogener Daten</h2>
          <p>Bei Nutzung unserer Kontaktformulare werden die von Ihnen eingegebenen Daten (Name, E-Mail, Unternehmen, Nachricht) gespeichert, um Ihre Anfrage bearbeiten zu können. Die Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben.</p>

          <h2 style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)", marginTop: "var(--space-xl)" }}>5. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
          <p>Bei Fragen zum Datenschutz wenden Sie sich an: info@kyrozz.de</p>
        </div>
      </div>
    </div>
  );
}
