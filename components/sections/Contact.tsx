"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, UploadCloud, Shield, Zap, HeadphonesIcon } from 'lucide-react';
import { Button } from '../ui/Button';

export function ContactSection() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] rounded mb-6 uppercase">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-light text-slate-900 mb-6 tracking-tight">Let's Build <span className="font-bold text-slate-900">Your Parts!</span></h2>
          <p className="text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">Fill out the form below and upload your 3D files to get a fast, personalized quote for your project.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-8 lg:p-12 space-y-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Name *</label>
                  <input type="text" className="w-full px-4 py-3 rounded border border-slate-200 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm font-light bg-slate-50" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 rounded border border-slate-200 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm font-light bg-slate-50" placeholder="Enter your company name" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Email *</label>
                <input type="email" className="w-full px-4 py-3 rounded border border-slate-200 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm font-light bg-slate-50" placeholder="Enter your email address" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Project / Description *</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded border border-slate-200 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm font-light bg-slate-50" placeholder="Tell us about your project, requirements, materials..." />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">3D Files</label>
                <div className="flex justify-center px-6 py-8 border-2 border-slate-200 border-dashed rounded bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                  <div className="space-y-2 text-center flex flex-col items-center">
                    <UploadCloud className="mx-auto h-6 w-6 text-slate-400" />
                    <div className="text-sm text-slate-600 flex gap-1 items-center justify-center">
                      <span className="font-bold text-blue-600 hover:text-blue-700">Upload a file</span>
                      <span>or drag and drop</span>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">STL, STEP, OBJ, 3MF</p>
                  </div>
                </div>
              </div>
            </form>

          </div>
          <div className="bg-slate-50 p-6 sm:px-12 border-t border-slate-200 flex justify-end">
             <Button type="button" className="w-full md:w-auto px-12 py-4 rounded shadow-md text-sm">Submit Request</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
