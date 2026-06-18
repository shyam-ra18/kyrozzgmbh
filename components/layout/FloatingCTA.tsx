"use client";
import { Mail } from "lucide-react";

export default function FloatingCTA({ locale }: { locale: string }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Email */}
      <a
        href="mailto:info@kyrozz.com"
        title="Send an Email"
        aria-label="Send an Email"
        className="w-[52px] h-[52px] bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/40 text-white hover:scale-110 hover:bg-blue-700 transition-all duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        <Mail size={24} />
      </a>
    </div>
  );
}
