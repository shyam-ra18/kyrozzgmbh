/**
 * ============================================================
 * KYROZZ GmbH — Zentralisierte Inhaltsdatei (Deutsch)
 * ============================================================
 * Dies ist die einzige Quelle für alle sichtbaren Texte
 * auf der Website. Änderungen hier wirken sich auf alle
 * Seiten und Komponenten aus.
 * ============================================================
 */

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────
export const navbar = {
  links: [
    { label: "STARTSEITE", href: "/" },
    { label: "3D-DRUCK", href: "/3d-printing" },
    { label: "SPRITZGUSS & CNC", href: "/injection-molding" },
    { label: "ÜBER UNS", href: "/about" },
    { label: "KONTAKT", href: "/contact" },
  ],
  languageLabel: "Sprache:",
};

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────
export const footer = {
  links: [
    { label: "STARTSEITE", href: "/" },
    { label: "3D-DRUCK", href: "/3d-printing" },
    { label: "SPRITZGUSS & CNC", href: "/injection-molding" },
    { label: "ÜBER UNS", href: "/about" },
    { label: "KONTAKT", href: "/contact" },
  ],
  description:
    "Ihr deutscher Fertigungspartner für industriellen 3D-Druck, Spritzguss, CNC-Bearbeitung und strategische Beschaffungslösungen weltweit.",
  badge1: "🇩🇪 Deutsches Management",
  badge2: "ISO-Qualität",
  location: "Deutschland (München HQ)",
  copyright: "Alle Rechte vorbehalten.",
};

// ─────────────────────────────────────────────
// HERO (Startseite)
// ─────────────────────────────────────────────
export const hero = {
  line1: "Deutsche Ingenieurskunst.",
  line2: "Globale Fertigung.",
  subtitle:
    "Ihr Partner für 3D-Druck, Spritzguss, CNC-Bearbeitung & globale Beschaffung.",
  ctaPrimary: "ANGEBOT ANFORDERN",
  ctaSecondary: "KONTAKT",
};

// ─────────────────────────────────────────────
// INTRODUCTION / SERVICES (Startseite)
// ─────────────────────────────────────────────
export const introduction = {
  heading1: "Ingenieursgenauigkeit.",
  heading2: "Exzellenz liefern.",
  body: "KYROZZ GmbH ist ein deutscher Fertigungspartner, der 3D-Druck, Spritzguss, CNC-Bearbeitung und Beschaffungslösungen für Industriekunden weltweit anbietet.\n\nMit lokalem Know-how in Deutschland und vertrauenswürdigen Produktionspartnern liefern wir Qualität, Zuverlässigkeit und Leistung auf jedem Schritt des Weges.",
  cta: "MEHR ÜBER UNS",
  services: [
    {
      image: "/cnc.png",
      title: "CNC-BEARBEITUNG",
      desc: "Präzisionsbauteile\nmit engen Toleranzen",
    },
    {
      image: "/3d-print.png",
      title: "3D-DRUCK",
      desc: "Rapid Prototyping &\nProduktionsteile",
    },
    {
      image: "/injection-molding.png",
      title: "SPRITZGUSS",
      desc: "Hochwertige Kunststoffteile\nfür globale Märkte",
    },
  ],
};

// ─────────────────────────────────────────────
// FEATURED SERVICES (Startseite)
// ─────────────────────────────────────────────
export const featuredServices = [
  {
    id: "3d-printing",
    title: "3D-Druck",
    highlight: "Bauteile",
    subtitle:
      "Ihr professioneller Partner für die hochwertige Produktion von Kunststoffbauteilen.",
    desc: "Wir sind spezialisiert auf den 3D-Druck von Bauteilen und nutzen das FDM-Druckverfahren. Wir laden Sie ein, unsere Website zu erkunden und mehr über unser Unternehmen, unsere Dienstleistungen und Kontaktmöglichkeiten zu erfahren.",
    image: "/3d-print.png",
    imageAlt: "3D-Druck Logo",
    ctaHref: "/3d-printing",
    alignRight: true,
    bgClass: "bg-white",
    cta: "MEHR ERFAHREN",
  },
  {
    id: "injection-molding",
    title: "Spritzguss",
    highlight: "Lösungen",
    subtitle:
      "Präzisions-Spritzgusslösungen über unser vertrauenswürdiges Beschaffungsnetzwerk.",
    desc: "KYROZZ GmbH ist ein in Deutschland ansässiges Projektmanagement-Unternehmen, das hochpräzise Spritzgussbauteile über ein Netzwerk sorgfältig ausgewählter Fertigungspartner weltweit liefert. Wir verwalten Ihr Spritzgussprojekt aus Deutschland — vom Prototyp bis zur Großserienproduktion, termingerecht geliefert.",
    image: "/injection-molding.png",
    imageAlt: "Spritzguss Logo",
    ctaHref: "/injection-molding",
    alignRight: false,
    bgClass: "bg-slate-50",
    cta: "MEHR ERFAHREN",
  },
  {
    id: "cnc-machining",
    title: "CNC-Bearbeitung",
    highlight: "Dienstleistungen",
    subtitle: "Hochpräzise CNC-gefertigte Teile mit engen Toleranzen.",
    desc: "Präzisionsfräs- und -drehservices für technische Metalle und Kunststoffe. Ideal für Funktionsteile, Werkzeuge und Kleinserienfertigung. Erhalten Sie nach Ihren CAD-Spezifikationen gefertigte Bauteile mit kurzen Lieferzeiten und deutschem Projektmanagement.",
    image: "/laser_icon.svg",
    imageAlt: "CNC-Bearbeitung Logo",
    ctaHref: "/injection-molding",
    alignRight: true,
    bgClass: "bg-white",
    cta: "MEHR ERFAHREN",
  },
];

// ─────────────────────────────────────────────
// OUR MISSION (Startseite)
// ─────────────────────────────────────────────
export const ourMission = {
  badge: "UNSERE MISSION",
  heading1: "Ideen ingenieursmäßig in",
  heading2: "verlässliche Produkte",
  body1:
    "Bei KYROZZ GmbH ist es unsere Mission, Ingenieure und Produktteams zu befähigen, digitale Entwürfe sicher in zuverlässige, produktionsreife Bauteile umzuwandeln.",
  body2:
    "Wir sind spezialisiert auf anwendungsorientierte Fertigungslösungen und kombinieren Ingenieur-Know-how mit fortschrittlichem 3D-Druck, CNC-Bearbeitung und Spritzguss, um Teile zu liefern, die in realen Umgebungen zuverlässig funktionieren.",
  body3:
    "Vom Rapid Prototyping und der Designvalidierung bis hin zur Kleinserienfertigung und skalierbaren Produktion helfen wir unseren Kunden, den richtigen Prozess, das richtige Material und die richtige Produktionsstrategie für jede Phase der Produktentwicklung zu wählen.",
  body4:
    "Indem wir Innovationszyklen beschleunigen, technische und fertigungstechnische Risiken reduzieren und konsistente Qualität sicherstellen, ermöglichen wir unseren Kunden, bessere Produkte schneller, effizienter und mit größerem Vertrauen auf den Markt zu bringen.",
  valueProps: [
    { title: "Präzision", sub: "Ohne Kompromisse" },
    { title: "Schnellere Produkt-", sub: "entwicklung" },
    { title: "Zuverlässige", sub: "Fertigung" },
    { title: "Kundenorientierte", sub: "Lösungen" },
  ],
  commitmentTitle: "Unser Versprechen",
  commitmentsLeft: [
    "Ingenieursorientierte Lösungen",
    "Industrielle Fertigung",
    "Kurze Durchlaufzeiten",
  ],
  commitmentsRight: [
    "Hochwertige Materialien",
    "Transparente Kommunikation",
    "Zuverlässige Lieferung in Europa",
  ],
  bannerHeading: "Die Zukunft bauen, Schicht für Schicht",
  bannerBody:
    "Unser Erfolg misst sich am Erfolg unserer Kunden. Wir sind bestrebt, innovative Fertigungslösungen zu liefern, die Unternehmen helfen, schneller voranzukommen, Kosten zu senken und bessere Produkte auf den Markt zu bringen.",
};

// ─────────────────────────────────────────────
// INDUSTRIES BENTO (Startseite)
// ─────────────────────────────────────────────
export const industriesBento = {
  heading: "Branchen, die wir stärken",
  industries: [
    {
      name: "Industrielle Fertigung",
      desc: "Funktionsteile, Werkzeuge und Produktionshilfsmittel.",
      img: "/industrial-manufacturing.png",
    },
    {
      name: "Bildung & Forschung",
      desc: "Prototypen, Lehrmittel und Experimente.",
      img: "/education.png",
    },
    {
      name: "Hobby & Maker",
      desc: "Kreative Projekte, individuelle Teile und mehr.",
      img: "/hobbyist.png",
    },
    {
      name: "Produktentwicklung",
      desc: "Prototypen und Funktionsteile für schnellere Innovation.",
      img: "/product-dev.png",
    },
    {
      name: "Modellbau & Prototyping",
      desc: "Detaillierte Modelle und visuelle Prototypen.",
      img: "/model-making-prototype.png",
    },
    {
      name: "Individuelle Teile & Lösungen",
      desc: "Maßgeschneiderte Komponenten für besondere Anwendungen.",
      img: "/custom-part-sol.png",
    },
  ],
};

// ─────────────────────────────────────────────
// TEAM (Startseite + About)
// ─────────────────────────────────────────────
export const team = {
  badge: "Unser Team",
  heading1: "Lernen Sie unsere",
  heading2: "Experten",
  heading2suffix: "kennen",
  subheading:
    "Ein engagiertes Team, das gemeinsam zuverlässige, hochwertige 3D-Drucklösungen liefert.",
  areasTitle: "Schwerpunktbereiche",
  members: [
    {
      name: "Nirav Lukhi",
      role: "Gründer & CEO",
      image: "/nirav.png",
      desc: "Getrieben von einer starken unternehmerischen Vision gründete Nirav KYROZZ GmbH, um innovative Fertigungslösungen mit globalen Geschäftsmöglichkeiten zu verbinden.",
      areas: [
        "Geschäftsentwicklung",
        "Globale Beschaffung",
        "Strategische Partnerschaften",
        "Unternehmensführung",
      ],
    },
    {
      name: "Pratik Kachariya",
      role: "AM-Ingenieur",
      image: "/pratik.png",
      desc: "Pratik ist spezialisiert auf additive Fertigung und begleitet Kunden durch den gesamten Produktionsprozess. Sein Fachwissen umfasst FDM-3D-Druck und Druckoptimierung.",
      areas: [
        "Additive Fertigung",
        "Druckoptimierung",
        "FDM-Drucktechnologien",
        "Qualitätssicherung",
      ],
    },
  ],
};

// ─────────────────────────────────────────────
// CONTACT SECTION
// ─────────────────────────────────────────────
export const contactSection = {
  badge: "Kontakt aufnehmen",
  heading: "Dateien hochladen & sofortiges",
  headingHighlight: "Angebot erhalten",
  subheading:
    "Füllen Sie das Formular aus und laden Sie Ihre 3D-Dateien hoch, um ein schnelles, persönliches Angebot für Ihr Projekt zu erhalten.",
  labels: {
    name: "Name *",
    company: "Unternehmen",
    email: "E-Mail *",
    projectDesc: "Projekt / Beschreibung *",
    files: "3D-Dateien",
  },
  placeholders: {
    name: "Ihren Namen eingeben",
    company: "Ihren Firmennamen eingeben",
    email: "Ihre E-Mail-Adresse eingeben",
    message: "Erzählen Sie uns von Ihrem Projekt, Anforderungen, Materialien...",
  },
  upload: {
    cta: "Datei hochladen",
    or: "oder per Drag & Drop",
    formats: "STL, STEP, OBJ, 3MF",
  },
  submitBtn: "Anfrage absenden",
  successTitle: "Anfrage erfolgreich gesendet!",
  successBody:
    "Wir prüfen Ihr Projekt und melden uns innerhalb von 24 Stunden bei Ihnen.",
  successBtn: "Weitere Anfrage senden",
  errors: {
    name: "Name ist erforderlich",
    emailRequired: "E-Mail ist erforderlich",
    emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
    message: "Projektbeschreibung ist erforderlich",
  },
};

// ─────────────────────────────────────────────
// HTML SECTIONS (3D-Druck Seite)
// ─────────────────────────────────────────────
export const htmlSections = {
  ticker: [
    "3D-Druck",
    "Spritzguss",
    "CNC-Bearbeitung",
    "Deutsches Projektmanagement",
    "Rapid Prototyping",
    "FDM · SLA · SLS",
    "Bambu Lab H2S & P2S",
    "ABS · PLA · PETG · Nylon · TPU",
    "500+ abgeschlossene Projekte",
    "Globale Beschaffung",
    "ISO 9001 zertifizierte Partner",
  ],
  services: {
    heading: "Unsere Kernleistungen",
    items: [
      {
        name: "3D-Druckdienstleistungen",
        text: "Hochpräziser 3D-Druck mit FDM-Technologie für funktionale Prototypen und Endverbrauchsteile.",
        features: ["Prototypenentwicklung", "Funktionsteile-Produktion", "Breites Materialspektrum"],
        img: "/3dprint-ser1.png",
      },
      {
        name: "Design- & Ingenieur-Support",
        text: "Vom Konzept zum CAD-Modell — wir helfen, Ihre Ideen mit fachkundiger Designunterstützung zum Leben zu erwecken.",
        features: ["3D-Modellierung", "Design-Optimierung", "Druckfertige Dateien"],
        img: "/design-ser2.png",
      },
      {
        name: "Nachbearbeitung & Veredelung",
        text: "Hochwertige Nachbearbeitung für perfekte Passform, Optik und Leistung.",
        features: ["Oberflächenbehandlung", "Stützstruktur-Entfernung", "Qualitätsprüfung"],
        img: "/post-ser3.png",
      },
    ],
  },
  process: {
    heading: "Vom Konzept zum fertigen Teil – unser bewährter Prozess",
    steps: [
      {
        num: "1. DATEI SENDEN",
        desc: "Laden Sie Ihr 3D-Modell (STL, OBJ, 3MF) hoch und teilen Sie uns Ihre Anforderungen mit.",
      },
      {
        num: "2. WIR BEREITEN VOR & PLANEN",
        desc: "Wir prüfen Ihre Datei und empfehlen das beste Material und die optimalen Einstellungen.",
      },
      {
        num: "3. WIR DRUCKEN",
        desc: "Ihr Teil wird präzise mit dem Bambu Lab H2S oder P2S gedruckt.",
      },
      {
        num: "4. QUALITÄTSPRÜFUNG",
        desc: "Jedes Teil wird kontrolliert, um unsere hohen Standards zu erfüllen.",
      },
      {
        num: "5. VERPACKEN & LIEFERN",
        desc: "Sorgfältig verpackt und schnell geliefert — direkt zu Ihnen.",
      },
    ],
  },
  faq: {
    heading: "Häufig gestellte Fragen",
    items: [
      {
        q: "Wie funktioniert eine Bestellung für einen 3D-Druck?",
        a: "Füllen Sie unser Kontaktformular aus und senden Sie uns Ihre Dateien, falls vorhanden. Wir melden uns, um Ihre Anforderungen zu besprechen. Nach der digitalen Rekonstruktion des Teils bestätigen wir die Details (Material, Farbe usw.) und unterbreiten Ihnen ein individuelles Druckangebot.",
      },
      {
        q: "Welche 3D-Dateiformate können Sie verwenden?",
        a: "Wir unterstützen STL, STEP, 3MF, STP und OBJ.",
      },
      {
        q: "Was ist 3D-Druck?",
        a: "3D-Druck, auch bekannt als additive Fertigung, ist der Prozess der Herstellung dreidimensionaler Objekte, indem sie Schicht für Schicht mit einem computergesteuerten Drucker aufgebaut werden.",
      },
      {
        q: "Wie funktioniert FDM-3D-Druck?",
        a: "FDM (Fused Deposition Modeling) schmilzt ein thermoplastisches Filament und trägt es Schicht für Schicht auf, um das Objekt aufzubauen. Es ist ein zuverlässiges Verfahren für robuste Funktionsteile und Prototypen.",
      },
      {
        q: "Wie lange dauert der 3D-Druck eines Objekts?",
        a: "Die Druckzeit hängt von Größe, Komplexität, Material und Menge ab. Kleine Teile können einige Stunden dauern, während größere oder komplexe Teile mehrere Tage in Anspruch nehmen können.",
      },
    ],
  },
};

// ─────────────────────────────────────────────
// BAMBU TECH SHOWCASE (3D-Druck Seite)
// ─────────────────────────────────────────────
export const bambuTechShowcase = {
  technologyHeading: "Unsere 3D-Drucktechnologie",
  h2s: {
    tagline: "Doppeldüse. Maximale Vielseitigkeit.",
    features: [
      "Doppelextruder für Mehrfachmaterial- und Mehrfarben-Druck",
      "Hochgeschwindigkeit mit hoher Präzision",
      "Großes Bauvolumen für größere Teile",
      "Fortschrittliche Automatisierung für unübertroffene Zuverlässigkeit",
    ],
  },
  p2s: {
    tagline: "Geschwindigkeit. Präzision. Leistung.",
    features: [
      "Hochgeschwindigkeitsdruck mit hervorragender Genauigkeit",
      "Zuverlässige Leistung für Prototypen und Funktionsteile",
      "Einfach zu bedienen, einfach zu vertrauen",
      "Ideal für alltägliche Produktion und technische Teile",
    ],
  },
  advantagesHeading: "Vorteile des FDM-3D-Drucks",
  advantages: [
    {
      title: "1. Vereinfachtes Design & vereinfachte Fertigung",
      desc: "Komplexe Geometrien als ein einziges Bauteil herstellen, Montageanforderungen reduzieren und Produktionsprozesse vereinfachen.",
      checklist: [
        "Reduzierte Montagezeit",
        "Komplexe Geometrien",
        "Leichte Strukturen",
        "Schnellere Produktentwicklung",
      ],
    },
    {
      title: "2. Kosteneffiziente Produktion",
      desc: "FDM-Druck reduziert Werkzeugkosten und Produktionsaufwand im Vergleich zur traditionellen Fertigung erheblich.",
      checklist: [
        "Kein Werkzeug erforderlich",
        "Niedrigere Produktionskosten",
        "Ideal für Kleinserien",
        "Reduzierter Lagerbedarf",
      ],
    },
    {
      title: "3. Kurze Durchlaufzeiten",
      desc: "Die meisten Bauteile können innerhalb von Stunden statt Wochen gefertigt werden.",
      checklist: [
        "Rapid Prototyping",
        "Schnellere Designvalidierung",
        "Kurze Lieferzeiten",
        "Schneller Markteinstieg",
      ],
    },
    {
      title: "4. Nachhaltige Fertigung",
      desc: "FDM-Druck verwendet nur das für das Teil benötigte Material und minimiert so Abfall und Umweltauswirkungen.",
      checklist: [
        "Minimaler Materialabfall",
        "Energieeffiziente Produktion",
        "Recycelbare Materialoptionen",
        "Umweltbewusst",
      ],
    },
    {
      title: "5. Robuste & langlebige Bauteile",
      desc: "FDM-gedruckte Teile bieten hervorragende mechanische Leistung und eignen sich für anspruchsvolle Industrieanwendungen.",
      checklist: [
        "Hohe Festigkeit",
        "Schlagfestigkeit",
        "Temperaturbeständigkeit",
        "Lange Lebensdauer",
      ],
    },
  ],
  highlights: [
    { label: "Mehrere fortschrittliche\nDrucker", desc: "Bambu Lab H2S & P2S" },
    { label: "Breites Material-\nspektrum", desc: "Technische Filamente" },
    { label: "Hohe\nPräzision", desc: "Konsistente Genauigkeit für jedes Projekt" },
    { label: "Kurze\nDurchlaufzeiten", desc: "Schnelle Produktion, pünktliche Lieferung" },
    { label: "Zufriedenheit\ngarantiert", desc: "Qualität, der Sie vertrauen können" },
  ],
  fdmSection: {
    heading1: "Warum",
    heading2: "FDM-3D-Druck?",
    tagline: "Effizient. Langlebig. Kosteneffektiv.",
    body1:
      "FDM (Fused Deposition Modeling) ist eine der zuverlässigsten und am weitesten verbreiteten additiven Fertigungstechnologien für funktionale Prototypen, technische Bauteile und Kleinserienfertigung.",
    body2:
      "Bei KYROZZ GmbH nutzen wir fortschrittliche Bambu Lab H2S- und P2S-Systeme, um präzise, langlebige und erschwingliche 3D-gedruckte Bauteile für industrielle und kommerzielle Anwendungen zu liefern.",
    ctaPrimary: "ANGEBOT ANFORDERN",
    ctaSecondary: "KONTAKT",
  },
  processHeading: "Vom Konzept zum fertigen Teil",
  processSteps: [
    { num: "1. DATEI SENDEN", desc: "Laden Sie Ihr 3D-Modell (STL, OBJ, 3MF) hoch und teilen Sie Ihre Anforderungen mit." },
    { num: "2. WIR BEREITEN VOR & PLANEN", desc: "Wir prüfen Ihre Datei und empfehlen das beste Material und die Einstellungen." },
    { num: "3. WIR DRUCKEN", desc: "Ihr Teil wird präzise mit dem Bambu Lab H2S oder P2S gedruckt." },
    { num: "4. QUALITÄTSPRÜFUNG", desc: "Jedes Teil wird kontrolliert, um unsere hohen Standards zu erfüllen." },
    { num: "5. VERPACKEN & LIEFERN", desc: "Sorgfältig verpackt und schnell geliefert — direkt zu Ihnen." },
  ],
};

// ─────────────────────────────────────────────
// SIMPLE ORDERING PROCESS (3D-Druck Seite)
// ─────────────────────────────────────────────
export const simpleOrderingProcess = {
  heading: "Unser einfacher 3-Schritte-Bestellprozess",
  steps: [
    {
      num: "01",
      title: "Datei hochladen",
      desc: "Laden Sie Ihre STL-, OBJ-, AMF- oder 3MF-Datei über unser sicheres Upload-System hoch. Wir unterstützen .zip-Dateien für mehrere Dateien.",
    },
    {
      num: "02",
      title: "Material auswählen",
      desc: "Wählen Sie das beste Material für Ihr Projekt aus unserem breiten Sortiment hochwertiger Optionen.",
    },
    {
      num: "03",
      title: "Wir drucken & liefern",
      desc: "Wir drucken präzise, führen Qualitätskontrollen durch und liefern Ihre Teile sicher zu Ihrer Haustür.",
    },
  ],
  bullets: [
    "Wir prüfen Ihre Datei auf Druckbarkeit und kontaktieren Sie, falls Anpassungen erforderlich sind.",
    "Sie erhalten eine Auftragsbestätigung mit voraussichtlicher Lieferzeit.",
    "Nach dem Druck wird jedes Teil einer gründlichen Qualitätsprüfung unterzogen.",
    "Ihre Bestellung wird sorgfältig verpackt und mit Sendungsverfolgung versandt.",
  ],
  cardHeading: "Präzision. Qualität. Geliefert.",
  highlights: [
    {
      title: "Datei-Prüfung",
      desc: "Wir überprüfen Ihre Datei, um beste Ergebnisse zu gewährleisten.",
    },
    {
      title: "Materialberatung",
      desc: "Unsicher, welches Material zu wählen ist? Wir helfen Ihnen gerne.",
    },
    {
      title: "Echtzeit-Updates",
      desc: "Bleiben Sie bei jedem Schritt Ihrer Bestellung informiert.",
    },
    {
      title: "Sichere Verpackung",
      desc: "Ihre Teile werden sicher verpackt, um eine sichere Lieferung zu gewährleisten.",
    },
  ],
};

// ─────────────────────────────────────────────
// WHAT YOU EXPECT (About + 3D-Druck Seite)
// ─────────────────────────────────────────────
export const whatYouExpect = {
  badge: "Unser Versprechen",
  heading1: "Was Sie von",
  heading2: "KYROZZ erwarten können",
  body: "Wir verbinden deutsche Ingenieursgenauigkeit mit kundenorientiertem Service. Jede Zusammenarbeit basiert auf Transparenz, Qualität und außergewöhnlicher Leistung.",
  expectations: [
    {
      num: "01",
      title: "Kundenorientierte Lösungen",
      desc: "Wir hören zu, verstehen und liefern Lösungen, die genau auf Ihre Bedürfnisse zugeschnitten sind.",
    },
    {
      num: "02",
      title: "Erfahrene Fachleute",
      desc: "Unser Fachwissen garantiert einwandfreie Ergebnisse von der Beratung bis zum Abschluss.",
    },
    {
      num: "03",
      title: "Schnelle & zuverlässige Lieferung",
      desc: "Wir schätzen Ihre Zeit und garantieren schnellen, zuverlässigen Service und Lieferung.",
    },
    {
      num: "04",
      title: "Garantierte Hochqualität",
      desc: "Premium-Materialien und fortschrittliche Technologie für präzise, langlebige und konsistente Teile.",
    },
    {
      num: "05",
      title: "Hervorragendes Preis-Leistungs-Verhältnis",
      desc: "Ausgezeichnete Qualität und Service zu einem wettbewerbsfähigen Preis-Leistungs-Verhältnis.",
    },
  ],
};

// ─────────────────────────────────────────────
// COMPANY HIGHLIGHTS (CompanyHighlights.tsx)
// ─────────────────────────────────────────────
export const companyHighlights = {
  definesHeading: "Was KYROZZ auszeichnet",
  defines: [
    {
      title: "Agiles &\nkompetentes Team",
      desc: "Erfahrene Fachleute, die in jedem Projekt Präzision und Innovation liefern.",
    },
    {
      title: "Qualität, der\nSie vertrauen können",
      desc: "Hochwertige, präzise Bauteile, die Erwartungen übertreffen.",
    },
    {
      title: "Kundenorientierter\nAnsatz",
      desc: "Ihre Zufriedenheit hat Priorität — Lösungen, die auf Ihre Bedürfnisse zugeschnitten sind.",
    },
    {
      title: "Individuelle\nLösungen",
      desc: "Maßgeschneiderte 3D-Drucklösungen, die Ihren genauen Anforderungen entsprechen.",
    },
    {
      title: "Modernste\nTechnologie",
      desc: "Fortschrittliche 3D-Druck- und Scantechnologien für effiziente, zuverlässige Ergebnisse.",
    },
  ],
  processHeading: "Unser 3D-Druckprozess",
  processSteps: [
    { title: "1. BERATUNG", desc: "Wir verstehen Ihre Ideen und technischen Anforderungen." },
    { title: "2. DESIGN & ÜBERPRÜFUNG", desc: "Wir optimieren Ihr Modell für Leistung und Druckbarkeit." },
    { title: "3. DRUCKEN", desc: "Hochpräziser Druck mit fortschrittlicher Technologie und hochwertigen Materialien." },
    { title: "4. QUALITÄTSPRÜFUNG", desc: "Jedes Teil wird auf Genauigkeit, Festigkeit und Konsistenz geprüft." },
    { title: "5. LIEFERUNG", desc: "Schnelle, sichere Lieferung direkt zu Ihnen." },
  ],
  industriesHeading: "Branchen, die wir stärken",
  industries: [
    { image: "/industries/industry-1.png", title: "Industrielle Fertigung", desc: "Funktionsteile, Werkzeuge und Produktionshilfsmittel." },
    { image: "/industries/industry-2.png", title: "Bildung & Forschung", desc: "Prototypen, Lehrmittel und Experimente." },
    { image: "/industries/industry-3.png", title: "Hobby & Maker", desc: "Kreative Projekte, individuelle Teile und mehr." },
    { image: "/industries/industry-4.png", title: "Produktentwicklung", desc: "Prototypen und Funktionsteile für schnellere Innovation." },
    { image: "/industries/industry-5.png", title: "Modellbau & Prototyping", desc: "Detaillierte Modelle und visuelle Prototypen." },
    { image: "/industries/industry-6.png", title: "Individuelle Teile & Lösungen", desc: "Maßgeschneiderte Komponenten für besondere Anwendungen." },
  ],
};

// ─────────────────────────────────────────────
// PAGE HERO COMPONENT (Reusable)
// ─────────────────────────────────────────────
export const pageHero = {
  // Defaults — each page overrides these via props
  defaultBadge: "Seite",
};

// ─────────────────────────────────────────────
// SUB CTA COMPONENT DEFAULTS
// ─────────────────────────────────────────────
export const subCTA = {
  defaultPrimary: "Angebot anfordern",
  defaultSecondary: "Mit einem Experten sprechen",
};

// ─────────────────────────────────────────────
// PAGE: STARTSEITE (/)
// ─────────────────────────────────────────────
export const homePage = {
  metadata: {
    title: "Spritzgusshersteller | KYROZZ GmbH Deutschland",
    description:
      "KYROZZ GmbH — Deutsches Spritzguss-Management, vom Prototyp bis zur Großserienfertigung. 500+ Projekte, 20+ globale Partner, geliefert in 15+ Länder.",
  },
};

// ─────────────────────────────────────────────
// PAGE: 3D-DRUCK (/3d-printing)
// ─────────────────────────────────────────────
export const threeDPrintingPage = {
  metadata: {
    title: "3D-Druckservice Deutschland | Industrielles Prototyping | KYROZZ GmbH",
    description:
      "Industrieller 3D-Druck für schnelle Prototypen in echten Konstruktionsmaterialien. ABS, PLA, Aluminium und mehr. Vom CAD zum Teil in wenigen Tagen.",
  },
  hero: {
    heading1: "3D-Druck",
    heading2: "Bauteile",
    subtitle:
      "Ihr professioneller Partner für die hochwertige Produktion von Kunststoffbauteilen.",
    body: "Wir sind spezialisiert auf den 3D-Druck von Bauteilen und nutzen den FDM-Druckprozess. Wir laden Sie ein, unsere Website zu erkunden und mehr über unser Unternehmen, unsere Dienstleistungen und wie Sie uns kontaktieren können zu erfahren.",
    ctaPrimary: "ANGEBOT ANFORDERN",
    ctaSecondary: "MEHR ERFAHREN",
  },
  whySection: {
    badge: "Vorteile",
    heading: "Warum 3D-Druck mit",
    headingHighlight: "KYROZZ?",
  },
  technologySection: {
    heading1: "Unser 3D-Druck",
    heading2: "Technologie",
  },
  applicationsSection: {
    badge: "Branchen",
    heading: "Anwendungen, die wir",
    headingHighlight: "bedienen",
  },
  cta: {
    heading1: "Vom Konzept zur Schöpfung,",
    heading2: "wir drucken Ihre Ideen in die Realität.",
    body: "Arbeiten Sie mit KYROZZ für zuverlässige, innovative und hochwertige 3D-gedruckte Bauteile zusammen.",
    ctaPrimary: "ANGEBOT HOLEN",
    ctaSecondary: "KONTAKT",
  },
  reasons: [
    { title: "Hohe Präzision", desc: "Komplexe Geometrien mit feinen Details und engen Toleranzen." },
    { title: "Schnelle Lieferung", desc: "Rapid Prototyping und schnelle Produktion für Ihre Zeitpläne." },
    { title: "Designfreiheit", desc: "Kein Werkzeug erforderlich — bringen Sie Ihre Ideen ohne Einschränkungen zum Leben." },
    { title: "Mehrere Materialien", desc: "Breites Spektrum an technischen Kunststoffen für jede Anwendung." },
    { title: "Zuverlässige Qualität", desc: "Konsistente, langlebige und hochwertige Bauteile, denen Sie vertrauen können." },
  ],
  materials: ["ABS", "PC", "PLA", "Nylon (PA)", "PETG", "TPU", "ASA", "Und mehr"],
  fdmSection: {
    heading: "FDM-Druck",
    body: "Fused Deposition Modeling (FDM) ist ideal für funktionale Prototypen und Produktionsteile mit Langlebigkeit und Kosteneffizienz.",
    features: ["Robuste & langlebige Teile", "Breites Materialspektrum", "Kosteneffiziente Lösungen"],
    materialsHeading: "Materialien, mit denen wir arbeiten",
  },
  applications: [
    { title: "Prototyping" },
    { title: "Produktentwicklung" },
    { title: "Vorrichtungen & Spannmittel" },
    { title: "Endverbrauchsteile" },
    { title: "Individuelle Lösungen" },
  ],
};

// ─────────────────────────────────────────────
// PAGE: SPRITZGUSS & CNC (/injection-molding)
// ─────────────────────────────────────────────
export const injectionMoldingPage = {
  metadata: {
    title: "Spritzguss | KYROZZ GmbH",
    description:
      "Kunststoff-Spritzguss, verwaltet aus Deutschland. Vom Prototyp zur Massenfertigung, europäische Qualitätsstandards.",
  },
  hero: {
    heading1: "Globale Fertigung.",
    heading2: "Deutsche",
    heading2rest: "Zuverlässigkeit.",
    subtitle1: "Präzisions-Spritzgusslösungen",
    subtitle2: "über unser vertrauenswürdiges globales Fertigungsnetzwerk.",
    body: "KYROZZ GmbH ist ein in Deutschland ansässiges Projektmanagement-Unternehmen, das hochpräzise Spritzgussbauteile über ein Netzwerk sorgfältig ausgewählter Fertigungspartner weltweit liefert.",
    icons: [
      {
        title: "Deutsches\nProjekt-\nmanagement",
        sub: "Ihr einziger Ansprechpartner\nin Europa",
      },
      {
        title: "Qualitäts-\nüberwachung",
        sub: "Strenge Qualitätskontrolle\n& Inspektion",
      },
      {
        title: "Globales\nFertigungs-\nnetzwerk",
        sub: "Vertrauenswürdige Partner\nweltweit",
      },
      {
        title: "Pünktliche\nLieferung",
        sub: "Termingerechte Lieferung\nauf die Sie zählen können",
      },
    ],
  },
  whySection: {
    heading: "WARUM KYROZZ SPRITZGUSS?",
    items: [
      {
        title: "Wir fertigen hier nicht selbst.",
        desc: "Wir arbeiten mit einem sorgfältig ausgewählten Netzwerk zertifizierter Fertigungspartner, die unsere strengen Qualitäts- und Zuverlässigkeitsstandards erfüllen.",
      },
      {
        title: "Deutsches Projektmanagement.",
        desc: "Wir übernehmen jeden Schritt — von der Ingenieurprüfung über die Partnerauswahl bis hin zur Produktionsüberwachung und Endlieferung.",
      },
      {
        title: "Qualität, der Sie vertrauen können.",
        desc: "Unsere Qualitätsexperten stellen sicher, dass jede Komponente durch strenge Inspektionen und kontinuierliche Prozesskontrolle europäischen Standards entspricht.",
      },
      {
        title: "Pünktlich. Immer.",
        desc: "Wir koordinieren die gesamte Lieferkette, um sicherzustellen, dass Ihre Produkte pünktlich geliefert werden — immer.",
      },
    ],
    advantagesHeading: "IHRE VORTEILE",
    advantages: [
      "Deutschsprachiger Kundensupport",
      "Dediziertes Projektmanagement",
      "Vertrauenswürdige globale Fertigungspartner",
      "Hochpräziser Spritzguss",
      "Wettbewerbsfähige Produktionskosten",
      "Qualitätskontrolle & Inspektion",
      "Zuverlässige Logistik & Lieferung",
      "Einziger Ansprechpartner in Europa",
    ],
  },
  metrics: [
    { val: "500+", lbl: "Abgeschlossene Projekte" },
    { val: "20+", lbl: "Globale Fertigungspartner" },
    { val: "15+", lbl: "Bediente Länder" },
    { val: "100%", lbl: "Kundenorientiertes Projektmanagement" },
  ],
  onePartner: {
    heading1: "Ein Partner.",
    heading2: "Globale Fertigungskapazität.",
    body: "Vom Konzept bis zur Lieferung fungiert KYROZZ GmbH als Ihr Fertigungspartner und stellt sicher, dass jedes Projekt effizient, professionell und gemäß Ihren Anforderungen abgeschlossen wird.",
    cta: "ANGEBOT ANFORDERN",
  },
  processSteps: [
    { num: "1", title: "IHRE ANFRAGE", desc: "Sie senden uns Ihre\nAnforderungen" },
    { num: "2", title: "PROJEKTPRÜFUNG", desc: "Wir analysieren &\nliefern die beste Lösung" },
    { num: "3", title: "PARTNERAUSWAHL", desc: "Wir wählen den richtigen\nFertigungspartner" },
    { num: "4", title: "PRODUKTION & QK", desc: "Produktion mit strenger\nQualitätskontrolle" },
    { num: "5", title: "LIEFERUNG", desc: "Pünktliche Lieferung an\nIhren Standort" },
  ],
};

// ─────────────────────────────────────────────
// PAGE: ÜBER UNS (/about)
// ─────────────────────────────────────────────
export const aboutPage = {
  metadata: {
    title: "Über KYROZZ GmbH — Deutsches Spritzguss-Projektmanagement",
    description:
      "50+ Jahre Fertigungserfahrung. Deutsches globales Spritzguss-Netzwerk. Ihr vertrauenswürdiger Partner für präzise Kunststofffertigung.",
  },
  hero: {
    badge: "Über KYROZZ",
    headingLine1: "Deutsches Management.",
    headingLine2: "Globale Produktion. Ihr Erfolg.",
    description:
      "Seit 50+ Jahren verbindet KYROZZ GmbH europäische Unternehmen mit erstklassigen Spritzgussherstellern — verwaltet mit deutscher Präzision von unserem Münchner Hauptsitz.",
  },
  model: {
    badge: "Unser Modell",
    heading: "Wir verwalten. Partner produzieren.",
    body1:
      "KYROZZ betreibt keine eigene Fabrik. Stattdessen pflegen wir ein geprüftes Netzwerk erstklassiger Spritzgusshersteller, die wir über Jahrzehnte hinweg sorgfältig ausgewählt und geprüft haben.",
    body2:
      "Unser deutsches Projektmanagement-Team fungiert als Ihr einziger Ansprechpartner und koordiniert alles von der ersten DFM-Prüfung über Produktion, Qualitätskontrolle, Zoll und Lieferung.",
    body3:
      "Dieses Modell bietet Ihnen die Vorteile globaler Fertigungskosteneffizienz mit den Qualitätssicherungs-, Kommunikationsstandards und der Verantwortlichkeit eines deutschen Partners.",
    stats: [
      { label: "Jahre in der Branche", value: "50+" },
      { label: "Abgeschlossene Projekte", value: "500+" },
      { label: "Globale Partner", value: "20+" },
      { label: "Bediente Länder", value: "15+" },
    ],
  },
  whySection: {
    badge: "Warum KYROZZ",
    heading: "7 Gründe, warum Unternehmen KYROZZ wählen",
    reasons: [
      { title: "Deutsches Projektmanagement", desc: "Ihr einziger Ansprechpartner in Deutschland, der alles koordiniert." },
      { title: "Globales Fertigungsnetzwerk", desc: "20+ geprüfte Partner weltweit, die europäische Qualitätsstandards erfüllen." },
      { title: "End-to-End-Service", desc: "Von der DFM-Prüfung über Produktion, QK bis zur Lieferung — wir übernehmen alles." },
      { title: "Schnelle Lieferung", desc: "Prototypen in 2 Wochen, Angebote innerhalb von 24 Stunden." },
      { title: "Wettbewerbsfähige Preise", desc: "Globale Fertigungskosteneinsparungen mit deutschem Qualitätsmanagement." },
      { title: "Qualitätsgarantie", desc: "100% Inspektion und europäische Qualitätsstandards bei jeder Bestellung." },
      { title: "Transparente Kommunikation", desc: "Regelmäßige Updates, englisch- und deutschsprachiger Support, keine Überraschungen." },
    ],
  },
  globalNetwork: {
    badge: "Globales Netzwerk",
    heading: "Ein globales Fertigungsnetzwerk",
    body: "Unsere Fertigungspartner befinden sich in Europa, Asien und darüber hinaus — jeder geprüft und zugelassen von unserem deutschen Qualitätsteam.",
    countries: ["China", "Vietnam", "Deutschland", "Tschechische Republik", "Polen", "Türkei"],
  },
  cta: {
    title: "Arbeiten Sie mit einem Partner, dem Sie vertrauen können",
    description: "50+ Jahre Fertigungsexzellenz, verwaltet aus Deutschland.",
    primaryText: "Kontakt aufnehmen",
    primaryHref: "/contact",
  },
};

// ─────────────────────────────────────────────
// PAGE: KONTAKT (/contact)
// ─────────────────────────────────────────────
export const contactPage = {
  hero: {
    badge: "Kontakt",
    headingLine1: "Lassen Sie uns über Ihr",
    headingLine2: "Projekt sprechen",
    description: "Senden Sie uns Ihre Anforderungen und wir antworten innerhalb von 24 Geschäftsstunden.",
  },
};

// ─────────────────────────────────────────────
// CONTENT FILES: FAQ (Injection Molding)
// ─────────────────────────────────────────────
export const injectionMoldingFAQs = [
  {
    question: "Was ist die Mindestbestellmenge für Spritzguss?",
    answer:
      "KYROZZ arbeitet mit Projekten ab Prototypenmengen (ab 50–100 Teile) bis hin zu Millionen von Einheiten. Unsere Mindestbestellung hängt von der Teilekomplexität und den Werkzeugkosten ab. Wir empfehlen, uns mit Ihren Projektdetails zu kontaktieren, für eine genaue Einschätzung.",
  },
  {
    question: "Wie lange dauert es, ein Prototypen-Spritzgusswerkzeug zu erhalten?",
    answer:
      "Rapid-Prototypen-Werkzeuge dauern in der Regel 2–4 Wochen, je nach Teilekomplexität. Produktionsqualitätswerkzeuge aus Stahl dauern 4–8 Wochen. Für dringende Projekte können wir Zeitpläne beschleunigen. Nach Fertigstellung des Werkzeugs werden Musterteile innerhalb von 1–2 Wochen zur Prüfung zugesandt.",
  },
  {
    question: "Welche Qualitätsstandards setzt KYROZZ um?",
    answer:
      "Alle Teile werden nach europäischen Qualitätsstandards mit 100% Maßprüfung hergestellt. Wir führen Schmelzflusstests, Falltests, Stapelbelastungstests, Dichtigkeitstests und Wandstärkenprüfungen durch. Kritische Teile können zur externen IIP-Zertifizierungsprüfung eingesandt werden.",
  },
  {
    question: "Können Sie sowohl Prototyping als auch Massenproduktion übernehmen?",
    answer:
      "Ja. KYROZZ verwaltet den gesamten Produktlebenszyklus — von der ersten Designberatung und DFM-Prüfung über Prototypen-Werkzeuge, Bemusterung, Produktionshochlauf bis zur Massenproduktion. Ihr Projektmanager in Deutschland koordiniert alles mit unseren geprüften globalen Fertigungspartnern.",
  },
  {
    question: "Welche Materialien können Sie im Spritzguss verarbeiten?",
    answer:
      "Wir arbeiten mit allen wichtigen technischen Thermoplasten einschließlich PP, ABS, PA66, POM, PC, HDPE, LDPE, TPE und Spezialmaterialien für medizinische und lebensmittelkontaktgeeignete Anwendungen. Unsere Ingenieure können das optimale Material basierend auf Ihren Teileanforderungen und Ihrem Budget empfehlen.",
  },
];

// ─────────────────────────────────────────────
// CONTENT FILES: INDUSTRIES
// ─────────────────────────────────────────────
export const industries = [
  {
    slug: "automotive",
    name: "Automobilindustrie",
    icon: "🚗",
    h1: "Automobil-Kunststoffteile — Präzision unter Druck",
    description: "Enge Toleranzen, hitzebeständige Materialien und null Defekte für die Automobilzulieferkette.",
    keyAngle: "Enge Toleranzen, Hitzebeständigkeit",
    painPoints: [
      "Strenge Maßtoleranzen",
      "Anforderungen an Hochtemperaturumgebungen",
      "Langzeithaltbarkeit unter Vibration",
      "Strenge OEM-Qualitätsdokumentation",
    ],
    solutions: [
      "DFM-optimiertes Werkzeugdesign für enge Toleranzen",
      "PA66-, POM- und PC-Materialien für Hitzebeständigkeit",
      "Vollständige Maßberichte und PPAP-Dokumentation",
      "Europäische Qualitätsüberwachung bei jeder Charge",
    ],
  },
  {
    slug: "electrical",
    name: "Elektrotechnik",
    icon: "⚡",
    h1: "Elektrische Gehäuse & Umhausungen — Spritzgegossen",
    description: "UL-geprüfte Materialien, IP-geprüfte Gehäuse und präzise Passform für elektrische und elektronische Komponenten.",
    keyAngle: "UL-geprüfte Materialien, IP-Schutzarten",
    painPoints: [
      "Entflammbarkeit und UL-Schutzklasse-Anforderungen",
      "Präzise Passform für Steckverbinder und Leiterplatten",
      "IP-geprüfte Dichtungsanforderungen",
      "EMI-Abschirmungskompatibilität",
    ],
    solutions: [
      "V0-geprüfte PC/ABS-Mischungen für Entflammbarkeit",
      "±0,05 mm Toleranz für elektrische Passform",
      "Umspritzen für integrierte Dichtungen",
      "Leitfähige Materialoptionen für EMI",
    ],
  },
  {
    slug: "medical",
    name: "Medizintechnik",
    icon: "🏥",
    h1: "Medizinische Kunststoffkomponenten in Lebensmittelqualität",
    description: "ISO-Reinraumproduktion, biokompatible Materialien und vollständige Rückverfolgbarkeit für Medizinprodukte.",
    keyAngle: "ISO-Reinraum, biokompatible Materialien",
    painPoints: [
      "Biokompatibilität und FDA/CE-Konformität",
      "Vollständige Material- und Prozessrückverfolgbarkeit",
      "Sterilverpackungsanforderungen",
      "Strenge Maßvalidierung",
    ],
    solutions: [
      "ISO 10993-getestete biokompatible Materialien",
      "Vollständige Chargenrückverfolgbarkeit und Dokumentation",
      "Reinraum-Spritzgussbedingungen verfügbar",
      "CMM-Maßvalidierungsberichte",
    ],
  },
  {
    slug: "consumer-goods",
    name: "Konsumgüter",
    icon: "🛍️",
    h1: "Spritzguss für Konsumgüter",
    description: "Schnelle Markteinführung, Designflexibilität und wettbewerbsfähige Stückkosten für Konsumgütermarken.",
    keyAngle: "Schnelle Markteinführung, Designflexibilität",
    painPoints: [
      "Kurzer Zeitdruck bis zur Markteinführung",
      "Kostenempfindlichkeit bei Verbraucherpreispunkten",
      "Komplexe Ästhetik und Oberflächenfinishes",
      "Häufige Designiterationsanforderungen",
    ],
    solutions: [
      "Rapid Tooling in 2–4 Wochen",
      "Wettbewerbsfähige Preise durch globales Partnernetzwerk",
      "Class A Oberflächenfinishes und individuelle Farben",
      "Agile Werkzeugänderungen mit schneller Bearbeitung",
    ],
  },
];

// ─────────────────────────────────────────────
// CONTENT FILES: MATERIALS
// ─────────────────────────────────────────────
export const materials = [
  {
    name: "Polypropylen",
    shortName: "PP",
    properties: "Leichtgewichtig, chemikalienbeständig, gute Ermüdungsbeständigkeit",
    typicalUse: "Filtergehäuse, Verpackungen, Automobilteile",
    tempRange: "-10°C bis 130°C",
    costLevel: "Niedrig" as const,
    color: "#3B82F6",
  },
  {
    name: "Acrylnitril-Butadien-Styrol",
    shortName: "ABS",
    properties: "Gute Schlagfestigkeit, steif, leicht zu verarbeiten",
    typicalUse: "Unterhaltungselektronik, Automobilzierteile, Gehäuse",
    tempRange: "-20°C bis 80°C",
    costLevel: "Niedrig" as const,
    color: "#10B981",
  },
  {
    name: "Polyamid 66",
    shortName: "PA66",
    properties: "Hohe Festigkeit, hitzebeständig, verschleißbeständig",
    typicalUse: "Pumpengehäuse, Zahnräder, Steckverbinder",
    tempRange: "-40°C bis 120°C",
    costLevel: "Mittel" as const,
    color: "#F59E0B",
  },
  {
    name: "Polyoxymethylen",
    shortName: "POM",
    properties: "Hohe Steifigkeit, niedrige Reibung, Maßstabilität",
    typicalUse: "Präzisionsteile, Lager, Ventilkomponenten",
    tempRange: "-40°C bis 100°C",
    costLevel: "Mittel" as const,
    color: "#8B5CF6",
  },
  {
    name: "Polycarbonat",
    shortName: "PC",
    properties: "Hohe Schlagfestigkeit, optische Klarheit, hitzebeständig",
    typicalUse: "Optische Komponenten, Schutzausrüstung, Medizinprodukte",
    tempRange: "-40°C bis 130°C",
    costLevel: "Hoch" as const,
    color: "#EC4899",
  },
  {
    name: "Polyethylen hoher Dichte",
    shortName: "HDPE",
    properties: "Chemikalienbeständig, lebensmittelsicher, flexibel bei niedrigen Temperaturen",
    typicalUse: "Behälter, Rohre, Lebensmittelkontaktanwendungen",
    tempRange: "-50°C bis 90°C",
    costLevel: "Niedrig" as const,
    color: "#06B6D4",
  },
  {
    name: "Thermoplastisches Elastomer",
    shortName: "TPE",
    properties: "Flexibel, gummiartig, recycelbar",
    typicalUse: "Dichtungen, Griffe, Soft-Touch-Komponenten",
    tempRange: "-40°C bis 120°C",
    costLevel: "Mittel" as const,
    color: "#F97316",
  },
];

// ─────────────────────────────────────────────
// CONTENT FILES: PRODUCTS
// ─────────────────────────────────────────────
export const products = [
  {
    id: "1",
    slug: "pp-filter-housing-10",
    name: 'PP-Filtergehäuse 10"',
    category: "water-filtration" as const,
    description: "Standard 10-Zoll Polypropylen-Filtergehäuse für Wasserfilteranlagen in Privathaushalten und leichter Gewerbenutzung.",
    material: "Polypropylen (PP)",
    image: "/images/products/filter-housing.png",
  },
  {
    id: "2",
    slug: "pp-filter-housing-20",
    name: 'PP-Filtergehäuse 20"',
    category: "water-filtration" as const,
    description: "Robustes 20-Zoll Filtergehäuse für gewerbliche und industrielle Wasseraufbereitungsanwendungen.",
    material: "Polypropylen (PP)",
    image: "/images/products/filter-housing-20.png",
  },
  {
    id: "3",
    slug: "twin-filter-housing",
    name: "Doppel-PP-Filtergehäuse",
    category: "water-filtration" as const,
    description: "Zweistufiges Filtergehäuse für verbesserte Wasserreinigung mit zwei Kartuschenplätzen.",
    material: "Polypropylen (PP)",
    image: "/images/products/twin-housing.png",
  },
  {
    id: "4",
    slug: "centrifugal-pump-body",
    name: "Kreiselpumpengehäuse",
    category: "pump-components" as const,
    description: "Präzisionsgefertigtes Kreiselpumpengehäuse für Wasserumwälzsysteme, chemikalienbeständig.",
    material: "PA66 (Nylon)",
    image: "/images/products/pump-body.png",
  },
  {
    id: "5",
    slug: "pump-impeller",
    name: "Pumpenflügelrad",
    category: "pump-components" as const,
    description: "Hocheffizientes spritzgegossenes Flügelrad für Kreiselpumpen, ausgewuchtet für minimale Vibration.",
    material: "PPO (Noryl)",
    image: "/images/products/impeller.png",
  },
  {
    id: "6",
    slug: "sediment-filter-cartridge",
    name: "Sedimentfilterkartusche",
    category: "filter-media" as const,
    description: "5-Mikron-Sedimentfilterkartusche zur Vorfilterung von Wassersystemen.",
    material: "Polypropylen (PP)",
    image: "/images/products/sediment-filter.png",
  },
  {
    id: "7",
    slug: "carbon-block-cartridge",
    name: "Aktivkohleblock-Kartusche",
    category: "filter-media" as const,
    description: "Aktivkohleblock-Kartusche zur Reduktion von Chlor, Geschmack und Geruch.",
    material: "Aktivkohle / PP",
    image: "/images/products/carbon-block.png",
  },
  {
    id: "8",
    slug: "pp-granules-injection",
    name: "PP-Granulat (Spritzgussqualität)",
    category: "raw-materials" as const,
    description: "Lebensmittelechtes Polypropylen-Granulat, optimiert für Spritzgussanwendungen.",
    material: "Polypropylen (PP)",
    image: "/images/products/pp-granules.png",
  },
];

export const productCategories = [
  { id: "all", label: "Alle Produkte" },
  { id: "water-filtration", label: "Wasserfilterung" },
  { id: "pump-components", label: "Pumpenkomponenten" },
  { id: "filter-media", label: "Filtermedien" },
  { id: "raw-materials", label: "Rohmaterialien" },
];

// ─────────────────────────────────────────────
// PAGE: MATERIALS (/materials)
// ─────────────────────────────────────────────
export const materialsPage = {
  metadata: {
    title: "Spritzguss-Materialien | PP, ABS, PA, POM | KYROZZ GmbH",
    description: "Vollständiger Leitfaden zu Spritzgussmaterialien. PP, ABS, PA66, POM, PC, HDPE, TPE für Ihre Anwendung vergleichen. Materialauswahl-Hilfe von KYROZZ-Ingenieuren.",
  },
  hero: {
    label: "Materialien-Leitfaden",
    title: "Welches Kunststoffmaterial ist das richtige für Ihr Bauteil?",
    description: "Materialfachkenntnisse, die sicherstellen, dass Ihre Bauteile in ihrer vorgesehenen Umgebung funktionieren.",
  },
  table: {
    label: "Vergleich",
    title: "Materialvergleichstabelle",
    headers: ["Material", "Eigenschaften", "Typische Anwendung", "Temperaturbereich", "Kosten"],
  },
  selection: {
    label: "Auswahlhilfe",
    title: "Wie wählen Sie das richtige Material?",
    items: [
      { q: "Hat das Teil Kontakt zu Lebensmitteln oder Trinkwasser?", a: "PP, HDPE oder PETG (lebensmittelechte Qualitäten)" },
      { q: "Muss das Teil Temperaturen >100°C standhalten?", a: "PA66, PC oder PPS" },
      { q: "Ist Flexibilität oder Gummigefühl erforderlich?", a: "TPE oder TPU" },
      { q: "Ist Formstabilität kritisch?", a: "POM oder PA66+GF" },
      { q: "Ist optische Klarheit erforderlich?", a: "PC oder PMMA" },
    ],
  },
  sustainability: {
    label: "Nachhaltigkeit",
    title: "Nachhaltige Materialoptionen",
    description: "KYROZZ unterstützt nachhaltige Fertigung mit bio-basierten und recycelten Materialoptionen für geeignete Anwendungen.",
    bullets: [
      "Bio-basierte PLA- und PHA-Optionen",
      "Post-Consumer-Recycling (PCR) PP und HDPE",
      "Ocean-Bound-Kunststoffmaterialien (auf Anfrage)",
      "Halogenfreie Formulierungen verfügbar",
      "Vollständige Materialdaten und Konformitätsdokumente",
    ],
    notSure: "Unsicher, welches Material? Unsere Ingenieure prüfen Ihre Anwendung und empfehlen das optimale Material für Leistung und Kosten.",
  },
  bottomCTA: {
    title: "Unsicher, welches Material?",
    description: "Fragen Sie unsere Ingenieure — kostenlose Materialberatung bei jeder Angebotsanfrage.",
    cta: "Unsere Ingenieure fragen",
  }
};

// ─────────────────────────────────────────────
// PAGE: PRODUCTS (/products)
// ─────────────────────────────────────────────
export const productsPage = {
  hero: {
    badge: "Produktkatalog",
    title: "Spritzguss-Produkte",
    titleHighlight: "— Standard & Individuell",
    description: "Durchsuchen Sie unsere hergestellten Produkte oder fordern Sie ein individuelles Bauteil für Ihre Anwendung an.",
  },
  enquire: "Anfragen",
  noProducts: "Keine Produkte in dieser Kategorie gefunden.",
  subCTA: {
    title: "Nicht das Richtige gefunden?",
    description: "Wir fertigen individuelle Spritzgussteile nach Ihren Spezifikationen. Teilen Sie uns Ihre Anforderungen mit.",
    primaryText: "Individuelles Teil anfragen",
  }
};
