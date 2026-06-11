export interface ProductData {
  id: string;
  slug: string;
  name: string;
  category: "water-filtration" | "pump-components" | "filter-media" | "raw-materials";
  description: string;
  material: string;
  image: string;
}

export const products: ProductData[] = [
  {
    id: "1",
    slug: "pp-filter-housing-10",
    name: 'PP Filter Housing 10"',
    category: "water-filtration",
    description: "Standard 10-inch polypropylene filter housing for residential and light commercial water filtration systems.",
    material: "Polypropylene (PP)",
    image: "/images/products/filter-housing.png",
  },
  {
    id: "2",
    slug: "pp-filter-housing-20",
    name: 'PP Filter Housing 20"',
    category: "water-filtration",
    description: "Heavy-duty 20-inch filter housing for commercial and industrial water treatment applications.",
    material: "Polypropylene (PP)",
    image: "/images/products/filter-housing-20.png",
  },
  {
    id: "3",
    slug: "twin-filter-housing",
    name: "Twin PP Filter Housing",
    category: "water-filtration",
    description: "Dual-stage filtration housing for enhanced water purification with two cartridge slots.",
    material: "Polypropylene (PP)",
    image: "/images/products/twin-housing.png",
  },
  {
    id: "4",
    slug: "centrifugal-pump-body",
    name: "Centrifugal Pump Body",
    category: "pump-components",
    description: "Precision-molded centrifugal pump body for water circulation systems, chemical-resistant.",
    material: "PA66 (Nylon)",
    image: "/images/products/pump-body.png",
  },
  {
    id: "5",
    slug: "pump-impeller",
    name: "Pump Impeller",
    category: "pump-components",
    description: "High-efficiency injection molded impeller for centrifugal pumps, balanced for low vibration.",
    material: "PPO (Noryl)",
    image: "/images/products/impeller.png",
  },
  {
    id: "6",
    slug: "sediment-filter-cartridge",
    name: "Sediment Filter Cartridge",
    category: "filter-media",
    description: "5-micron sediment filter cartridge for pre-filtration of water systems.",
    material: "Polypropylene (PP)",
    image: "/images/products/sediment-filter.png",
  },
  {
    id: "7",
    slug: "carbon-block-cartridge",
    name: "Carbon Block Cartridge",
    category: "filter-media",
    description: "Activated carbon block cartridge for chlorine, taste, and odor reduction.",
    material: "Activated Carbon / PP",
    image: "/images/products/carbon-block.png",
  },
  {
    id: "8",
    slug: "pp-granules-injection",
    name: "PP Granules (Injection Grade)",
    category: "raw-materials",
    description: "Food-grade polypropylene granules optimized for injection molding applications.",
    material: "Polypropylene (PP)",
    image: "/images/products/pp-granules.png",
  },
];

export const productCategories = [
  { id: "all", label: "All Products" },
  { id: "water-filtration", label: "Water Filtration" },
  { id: "pump-components", label: "Pump Components" },
  { id: "filter-media", label: "Filter Media" },
  { id: "raw-materials", label: "Raw Materials" },
];
