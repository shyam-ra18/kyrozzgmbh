"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, productCategories } from "@/content/products";
import { ArrowRight, Droplets, Settings, FlaskConical, Package } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SubCTA } from "@/components/sections/SubCTA";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "water-filtration": return <Droplets className="w-4 h-4 mr-2" />;
      case "pump-components": return <Settings className="w-4 h-4 mr-2" />;
      case "filter-media": return <FlaskConical className="w-4 h-4 mr-2" />;
      case "raw-materials": return <Package className="w-4 h-4 mr-2" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PageHero
        badge="Product Catalogue"
        title={
          <>
            Injection Molded Products <br />
            <span className="text-blue-500">— Standard & Custom</span>
          </>
        }
        description="Browse our manufactured products or request a custom part for your application."
      />

      <section className="py-16 md:py-24 flex-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`min-h-[44px] flex items-center px-6 py-2.5 rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 ${activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}
              >
                {getCategoryIcon(cat.id)}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                  <Image
                    src={product.image || "/images/products/placeholder.jpg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-1">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                      {product.material}
                    </span>
                    <Link href="/contact" className="text-blue-600 text-sm font-bold flex items-center gap-1.5 group-hover:gap-2 transition-all focus-visible:outline-none focus-visible:underline">
                      Enquire <ArrowRight size={16} className="text-blue-500 group-hover:text-blue-600" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <SubCTA
        title="Don't See What You Need?"
        description="We manufacture custom injection molded parts to your specifications. Share your requirements and we'll build it."
        primaryText="Request Custom Part"
      />
    </div>
  );
}
