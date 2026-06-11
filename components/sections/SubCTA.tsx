import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export function SubCTA({ 
  title, 
  description, 
  primaryHref = "/quote", 
  primaryText = "Request a Quote", 
  secondaryHref = "/contact", 
  secondaryText = "Talk to an Expert" 
}: { 
  title: string, 
  description: string, 
  primaryHref?: string, 
  primaryText?: string, 
  secondaryHref?: string, 
  secondaryText?: string 
}) {
  return (
    <section className="bg-blue-600 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primaryHref} className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-slate-50 font-bold text-sm rounded-full transition-all shadow-lg hover:-translate-y-0.5 gap-2">
            {primaryText} <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href={secondaryHref} className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border border-blue-400 text-white hover:bg-blue-700 font-bold text-sm rounded-full transition-all gap-2">
            <Mail className="w-4 h-4" /> {secondaryText}
          </Link>
        </div>
      </div>
    </section>
  );
}
