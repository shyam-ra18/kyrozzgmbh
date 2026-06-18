/**
 * Produkt-Inhalte — re-exportiert aus der zentralen Inhaltsdatei.
 * Änderungen bitte in content/de.ts vornehmen.
 */
export interface ProductData {
  id: string;
  slug: string;
  name: string;
  category: "water-filtration" | "pump-components" | "filter-media" | "raw-materials";
  description: string;
  material: string;
  image: string;
}

export { products, productCategories } from "./de";
