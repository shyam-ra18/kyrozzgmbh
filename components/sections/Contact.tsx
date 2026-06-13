"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.message.trim()) newErrors.message = 'Project description is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    // Add API logic here for real submission
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] rounded mb-6 uppercase">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-light text-slate-900 mb-6 tracking-tight">Upload Your Files Get an <span className="font-bold text-blue-600">Instant Quote</span></h2>
          <p className="text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">Fill out the form below and upload your 3D files to get a fast, personalized quote for your project.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          {submitted ? (
            <div className="p-16 text-center">
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent Successfully!</h3>
              <p className="text-slate-500">We will review your project and get back to you within 24 hours.</p>
              <Button onClick={() => setSubmitted(false)} className="mt-8 px-8" variant="outline">Submit Another Request</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="p-8 lg:p-12 space-y-12">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded border focus:ring-1 outline-none transition-all text-sm font-light bg-slate-50 ${errors.name ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : 'border-slate-200 focus:ring-blue-500 focus:border-blue-500'}`}
                        placeholder="Enter your name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded border border-slate-200 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm font-light bg-slate-50"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded border focus:ring-1 outline-none transition-all text-sm font-light bg-slate-50 ${errors.email ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : 'border-slate-200 focus:ring-blue-500 focus:border-blue-500'}`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Project / Description *</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded border focus:ring-1 outline-none transition-all text-sm font-light bg-slate-50 ${errors.message ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : 'border-slate-200 focus:ring-blue-500 focus:border-blue-500'}`}
                      placeholder="Tell us about your project, requirements, materials..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
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
                </div>
              </div>
              <div className="bg-slate-50 p-6 sm:px-12 border-t border-slate-200 flex justify-end">
                <Button type="submit" className="w-full md:w-auto px-12 py-4 rounded shadow-md text-sm">Submit Request</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
