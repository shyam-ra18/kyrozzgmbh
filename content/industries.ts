export interface IndustryData {
  slug: string;
  name: string;
  icon: string;
  h1: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  keyAngle: string;
}

export const industries: IndustryData[] = [
  {
    slug: "automotive",
    name: "Automotive",
    icon: "🚗",
    h1: "Automotive Plastic Parts — Precision Under Pressure",
    description: "Tight tolerances, heat-resistant materials, and zero defects for the automotive supply chain.",
    keyAngle: "Tight tolerances, heat resistance",
    painPoints: [
      "Stringent dimensional tolerances",
      "High-temperature environment requirements",
      "Long-term durability under vibration",
      "Strict OEM quality documentation",
    ],
    solutions: [
      "DFM-optimized tool design for tight tolerances",
      "PA66, POM, and PC materials for heat resistance",
      "Full dimensional reports and PPAP documentation",
      "European quality oversight on every batch",
    ],
  },
  {
    slug: "electrical",
    name: "Electrical",
    icon: "⚡",
    h1: "Electrical Housing & Enclosures — Injection Molded",
    description: "UL-rated materials, IP-rated housings, and precise fitment for electrical and electronic components.",
    keyAngle: "UL-rated materials, IP ratings",
    painPoints: [
      "Flammability and UL rating requirements",
      "Precise fitment for connectors and PCBs",
      "IP-rated sealing requirements",
      "EMI shielding compatibility",
    ],
    solutions: [
      "V0-rated PC/ABS blends for flammability",
      "±0.05mm tolerance for electrical fitment",
      "Overmolding for integrated seals",
      "Conductive material options for EMI",
    ],
  },
  {
    slug: "medical",
    name: "Medical",
    icon: "🏥",
    h1: "Medical-Grade Plastic Components",
    description: "ISO cleanroom production, biocompatible materials, and full traceability for medical devices.",
    keyAngle: "ISO cleanroom, biocompatible materials",
    painPoints: [
      "Biocompatibility and FDA/CE compliance",
      "Full material and process traceability",
      "Sterile packaging requirements",
      "Rigorous dimensional validation",
    ],
    solutions: [
      "ISO 10993-tested biocompatible materials",
      "Full batch traceability and documentation",
      "Cleanroom molding conditions available",
      "CMM dimensional validation reports",
    ],
  },
  {
    slug: "consumer-goods",
    name: "Consumer Goods",
    icon: "🛍️",
    h1: "Consumer Product Injection Molding",
    description: "Speed to market, design flexibility, and competitive unit costs for consumer product brands.",
    keyAngle: "Speed to market, design flexibility",
    painPoints: [
      "Short time-to-market pressure",
      "Cost sensitivity at consumer price points",
      "Complex aesthetics and surface finishes",
      "Frequent design iteration requirements",
    ],
    solutions: [
      "Rapid tooling in 2-4 weeks",
      "Competitive pricing through global partner network",
      "Class A surface finishes and custom colors",
      "Agile tooling changes with fast turnaround",
    ],
  },
];
