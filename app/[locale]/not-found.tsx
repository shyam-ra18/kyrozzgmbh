import Link from 'next/link';
import { ArrowRight, Settings } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <Settings className="w-24 h-24 text-blue-600 relative z-10 animate-[spin_10s_linear_infinite]" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter">
          4<span className="text-blue-600">0</span>4
        </h1>
        
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Part Not Found</h2>
          <p className="text-slate-500 text-lg">
            Looks like this page didn't pass our quality inspection. The link might be broken or the page has been moved to a new assembly line.
          </p>
        </div>

        <div className="pt-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
          >
            Return to Homepage
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
