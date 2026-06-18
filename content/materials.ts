/**
 * Material-Inhalte — re-exportiert aus der zentralen Inhaltsdatei.
 * Änderungen bitte in content/de.ts vornehmen.
 */
export interface MaterialData {
  name: string;
  shortName: string;
  properties: string;
  typicalUse: string;
  tempRange: string;
  costLevel: "Niedrig" | "Mittel" | "Hoch" | "Sehr hoch";
  color: string;
}

export { materials } from "./de";
