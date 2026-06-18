"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, FileText, Clock, Truck } from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'materials' | 'lead-times' | 'shipping' | 'general';
  icon: React.ReactNode;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'mat-1',
    category: 'materials',
    icon: <FileText className="w-5 h-5 text-blue-600" />,
    question: 'How do I choose the right 3D printing material for my project?',
    answer: 'Material selection depends on the application of your part. For high-temperature or high-durability mechanical components, we recommend Nylon or ABS/ASA. For highly accurate aesthetic prototypes with an exceptionally smooth finish, SLA resin is best. For general low-maintenance concept models, PLA or PETG offer excellent stability and cost-efficiency. Our experts can assist you in selecting the ideal plastic or composite during the quotation process.'
  },
  {
    id: 'lead-1',
    category: 'lead-times',
    icon: <Clock className="w-5 h-5 text-blue-600" />,
    question: 'What are your typical production lead times?',
    answer: 'Standard 3D printing and rapid prototyping jobs are completed and shipped within 3 to 5 business days. CNC machining and low-volume injection molding jobs typically range from 7 to 15 business days depending on part complexity, tooling complexity, and specified finishes. Express options are available for urgent project schedules.'
  },
  {
    id: 'ship-1',
    category: 'shipping',
    icon: <Truck className="w-5 h-5 text-blue-600" />,
    question: 'How do you coordinate international shipments and custom clearance?',
    answer: 'With our corporate headquarters in Germany and specialized production pipelines in India, we manage the complete logistical process. We offer DDP (Delivered Duty Paid) shipping options across the EU and globally, meaning we handle customs clearance, duties, and import taxes. Your parts arrive directly at your location without administrative delays.'
  },
  {
    id: 'mat-2',
    category: 'materials',
    icon: <FileText className="w-5 h-5 text-blue-600" />,
    question: 'Do you support custom or high-performance polymers?',
    answer: 'Yes. Beyond standard materials, we process glass-reinforced and carbon-filled polymers, TPU elastomers, and polycarbonate. For specialized engineering requests demanding chemical resilience, low outgassing, or biocompatibility, please detail your requirements in our quote form.'
  },
  {
    id: 'gen-1',
    category: 'general',
    icon: <HelpCircle className="w-5 h-5 text-blue-600" />,
    question: 'Is my IP (Intellectual Property) secure during the quotation process?',
    answer: 'Absolutely. We treat all customer files and CAD models as strictly confidential. Digital transfers are encrypted, and we are glad to sign a formal Non-Disclosure Agreement (NDA) before you transmit any engineering files or technical drawings to us.'
  }
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('mat-1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100" id="faq">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] rounded mb-6 uppercase">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-light text-slate-900 mb-6 tracking-tight">
            Common <span className="font-bold">Questions</span> answered
          </h2>
          <p className="text-slate-500 text-lg font-light">
            Answers to frequently asked questions about engineering design, material properties, logistics, and production.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="max-w-3xl mx-auto space-y-4">
          <AnimatePresence initial={false}>
            {faqItems.map(item => {
              const isOpen = openId === item.id;
              return (
                <motion.div
                  key={item.id}
                  layout
                  className={`bg-white border rounded-xl overflow-hidden transition-colors ${
                    isOpen ? 'border-blue-500 shadow-sm' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none select-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-lg transition-colors ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
                        {item.icon}
                      </div>
                      <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                        {item.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`shrink-0 transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-400'}`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed pl-16">
                          <p className="font-light">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
