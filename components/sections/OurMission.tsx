"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Timer,
  ShieldCheck,
  Users,
  Check,
  Layers,
} from "lucide-react";
import { useContent, useLocale } from "@/context/LocaleContext";

const valueIcons = [
  <Target key="target" className="w-8 h-8 text-blue-600" />,
  <Timer key="timer" className="w-8 h-8 text-blue-600" />,
  <ShieldCheck key="shield" className="w-8 h-8 text-blue-600" />,
  <Users key="users" className="w-8 h-8 text-blue-600" />,
];

export default function OurMission() {
  const { ourMission } = useContent();
  const locale = useLocale();
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Our Mission (Centered Content) */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center mb-4">
            <span className="text-blue-600 text-[15px] sm:text-base font-bold tracking-[3px] uppercase">
              {ourMission.badge}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
            {ourMission.heading1} <br className="sm:hidden" />
            <span className="text-blue-600">{ourMission.heading2}</span>
          </h2>
          <div className="space-y-6 text-slate-600 text-[15px] sm:text-base leading-relaxed font-medium">
            <p>
              {ourMission.body1.split("KYROZZ GmbH").map((part, i) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <strong className="text-blue-600 font-bold">KYROZZ GmbH</strong>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
            <p>
              {locale === "en" ? (
                ourMission.body2.split("3D Printing, CNC Machining").map((part, i) =>
                  i === 0 ? (
                    <span key={i}>
                      {part}
                      <strong className="text-blue-600 font-bold">3D Printing, CNC Machining</strong>
                    </span>
                  ) : (
                    <span key={i}>
                      {part.split("Injection Molding").map((p, j) =>
                        j === 0 ? (
                          <span key={j}>
                            {p}
                            <strong className="text-blue-600 font-bold">Injection Molding</strong>
                          </span>
                        ) : (
                          <span key={j}>{p}</span>
                        )
                      )}
                    </span>
                  )
                )
              ) : (
                ourMission.body2.split("3D-Druck, CNC-Bearbeitung").map((part, i) =>
                  i === 0 ? (
                    <span key={i}>
                      {part}
                      <strong className="text-blue-600 font-bold">3D-Druck, CNC-Bearbeitung</strong>
                    </span>
                  ) : (
                    <span key={i}>
                      {part.split("Spritzguss").map((p, j) =>
                        j === 0 ? (
                          <span key={j}>
                            {p}
                            <strong className="text-blue-600 font-bold">Spritzguss</strong>
                          </span>
                        ) : (
                          <span key={j}>{p}</span>
                        )
                      )}
                    </span>
                  )
                )
              )}
            </p>
            <p>{ourMission.body3}</p>
            <p>{ourMission.body4}</p>
          </div>
        </div>

        {/* 2. Middle Row (Icons & Commitment Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Grid: 4 Icons */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 md:gap-12">
            {ourMission.valueProps.map((val, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-50/50 flex items-center justify-center mb-4 shadow-xs text-blue-600">
                  {valueIcons[idx]}
                </div>
                <h4 className="font-extrabold text-slate-800 text-sm md:text-base leading-tight">
                  {val.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-500 font-semibold mt-1">
                  {val.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Right Card: Our Commitment */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
              <h3 className="text-blue-900 text-lg md:text-xl font-extrabold mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-blue-600">
                {ourMission.commitmentTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  {ourMission.commitmentsLeft.map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-blue-600 stroke-[3]" />
                      </div>
                      <span className="text-slate-700 font-bold text-xs md:text-sm">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {ourMission.commitmentsRight.map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-blue-600 stroke-[3]" />
                      </div>
                      <span className="text-slate-700 font-bold text-xs md:text-sm">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
