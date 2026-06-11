export interface MaterialData {
  name: string;
  shortName: string;
  properties: string;
  typicalUse: string;
  tempRange: string;
  costLevel: "Low" | "Medium" | "High" | "Very High";
  color: string;
}

export const materials: MaterialData[] = [
  {
    name: "Polypropylene",
    shortName: "PP",
    properties: "Lightweight, chemical resistant, good fatigue resistance",
    typicalUse: "Filter housings, packaging, automotive parts",
    tempRange: "-10°C to 130°C",
    costLevel: "Low",
    color: "#3B82F6",
  },
  {
    name: "Acrylonitrile Butadiene Styrene",
    shortName: "ABS",
    properties: "Good impact resistance, rigid, easy to process",
    typicalUse: "Consumer electronics, automotive trim, enclosures",
    tempRange: "-20°C to 80°C",
    costLevel: "Low",
    color: "#10B981",
  },
  {
    name: "Polyamide 66",
    shortName: "PA66",
    properties: "High strength, heat resistant, wear resistant",
    typicalUse: "Pump bodies, gears, connectors",
    tempRange: "-40°C to 120°C",
    costLevel: "Medium",
    color: "#F59E0B",
  },
  {
    name: "Polyoxymethylene",
    shortName: "POM",
    properties: "High stiffness, low friction, dimensional stability",
    typicalUse: "Precision parts, bearings, valve components",
    tempRange: "-40°C to 100°C",
    costLevel: "Medium",
    color: "#8B5CF6",
  },
  {
    name: "Polycarbonate",
    shortName: "PC",
    properties: "High impact resistance, optical clarity, heat resistant",
    typicalUse: "Optical components, safety equipment, medical devices",
    tempRange: "-40°C to 130°C",
    costLevel: "High",
    color: "#EC4899",
  },
  {
    name: "High-Density Polyethylene",
    shortName: "HDPE",
    properties: "Chemical resistant, food-safe, flexible at low temps",
    typicalUse: "Containers, pipes, food contact applications",
    tempRange: "-50°C to 90°C",
    costLevel: "Low",
    color: "#06B6D4",
  },
  {
    name: "Thermoplastic Elastomer",
    shortName: "TPE",
    properties: "Flexible, rubber-like, recyclable",
    typicalUse: "Seals, grips, soft-touch components",
    tempRange: "-40°C to 120°C",
    costLevel: "Medium",
    color: "#F97316",
  },
];
