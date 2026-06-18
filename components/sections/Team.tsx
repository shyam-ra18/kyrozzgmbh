"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '@/context/LocaleContext';

export function TeamSection() {
  const { team } = useContent();
  return (
    <section className="py-16 bg-white border-t border-slate-100" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] rounded mb-6 uppercase">
            {team.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-light text-slate-900 mb-6 tracking-tight">
            {team.heading1} <span className="font-bold">{team.heading2}</span> {team.heading2suffix}
          </h2>
          <p className="text-slate-500 text-lg font-light">{team.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.members.map((member, i) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex flex-col p-2"
            >
              <div className="h-64 overflow-hidden relative rounded-xl bg-slate-200">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top mix-blend-luminosity opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
              </div>
              <div className="p-8 pt-4 text-center flex-grow flex flex-col bg-slate-50">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">{member.role}</p>
                <p className="text-slate-500 font-light leading-relaxed mb-8">{member.desc}</p>
                
                <div className="mt-auto">
                  <h4 className="flex items-center justify-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-widest mb-6 border-t border-slate-200 pt-6">
                    {team.areasTitle}
                  </h4>
                  <ul className="text-left grid grid-cols-2 gap-3 text-sm text-slate-600">
                    {member.areas.map(area => (
                      <li key={area} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-slate-300 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
