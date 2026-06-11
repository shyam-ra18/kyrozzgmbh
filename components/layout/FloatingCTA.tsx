"use client";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function FloatingCTA({ locale }: { locale: string }) {
  const prefix = locale === "de" ? "/de" : "";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/49XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
        className="w-[52px] h-[52px] bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/40 text-white hover:scale-110 hover:bg-[#20bd5a] transition-transform duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        <MessageCircle size={24} fill="currentColor" />
      </a>
    </div>
  );
}
