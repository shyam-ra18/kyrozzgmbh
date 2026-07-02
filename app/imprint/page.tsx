import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | KYROZZ GmbH",
  robots: "noindex",
};

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/60 rounded-3xl p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <h1 className="text-3xl sm:text-4xl font-sans font-bold text-slate-900 tracking-tight mb-8 pb-4 border-b border-slate-100">
            Imprint
          </h1>

          <div className="space-y-8 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            {/* Company Info */}
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-2">Company Information</h2>
              <p className="text-lg font-bold text-blue-600">KYROZZ GmbH</p>
              <p>Managing Director: Nirav Lukhi</p>
            </div>

            {/* Location */}
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-2">Location</h2>
              <p>Poschingerstraße 33</p>
              <p>94469 Deggendorf</p>
              <p>Deutschland</p>
              <p className="text-xs text-slate-400 mt-2 font-mono">KYROZZ is incorporated in Deggendorf, Germany.</p>
            </div>

            {/* Contact */}
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-2">Contact</h2>
              <p><strong>Email:</strong> <a href="mailto:info@kyrozz.de" className="text-blue-600 hover:underline">info@kyrozz.de</a></p>
              <p><strong>Phone:</strong> <a href="tel:+4915758906010" className="text-blue-600 hover:underline">+49 157 5890 6010</a></p>
              <p><strong>VAT ID number:</strong> DE XXXXXXXXX</p>
              <p><strong>Registry court:</strong> Amtsgericht Deggendorf</p>
              <p><strong>Registry number:</strong> HRB XXXXX</p>
            </div>

            {/* Content Responsibility */}
            <div className="space-y-1 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-2">Responsible for Content</h2>
              <p>Nirav Lukhi (<a href="mailto:info@kyrozz.de" className="text-blue-600 hover:underline">info@kyrozz.de</a>)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
