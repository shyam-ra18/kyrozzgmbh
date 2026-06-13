import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/content/products";
import { ChevronRight, ArrowRight, MessageSquare } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Injection Molded Products | KYROZZ GmbH`,
    description: `${product.description} Material: ${product.material}. Request a quote from KYROZZ GmbH.`,
  };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 md:pt-32">
      <section className="pb-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 font-medium">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Image */}
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm group">
              <Image 
                src={product.image || "/images/products/placeholder.jpg"} 
                alt={product.name}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col h-full justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-wider uppercase mb-6 w-fit">
                {product.category.replace(/-/g, " ")}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                {product.name}
              </h1>
              
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                {product.description}
              </p>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-10">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100 mb-4">
                  <span className="text-slate-500 font-medium">Material</span>
                  <span className="text-slate-900 font-bold">{product.material}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Manufacturing</span>
                  <span className="text-slate-900 font-bold">Injection Molding</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30"
                >
                  Enquire Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-500/30"
                >
                  Ask a Question <MessageSquare className="w-5 h-5 text-slate-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link 
                  key={rp.id} 
                  href={`/products/${rp.slug}`} 
                  className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-slate-100">
                    <Image 
                      src={rp.image || "/images/products/placeholder.jpg"} 
                      alt={rp.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {rp.name}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2">
                      {rp.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "description": product.description,
            "material": product.material,
            "brand": { "@type": "Brand", "name": "KYROZZ GmbH" },
          }),
        }}
      />
    </div>
  );
}
