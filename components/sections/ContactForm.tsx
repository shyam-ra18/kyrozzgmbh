"use client";
import React, { useState, useRef, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const ALLOWED_EXTENSIONS = ['stl', 'step', 'stp', 'obj', 'cad', 'dxf', '3mf', 'iges', 'igs'];
const MAX_FILE_SIZE_MB = 50;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export function ContactForm({ isModal = false }: { isModal?: boolean }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [fileWarning, setFileWarning] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const clearFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const validateFile = (selected: File): boolean => {
    const ext = selected.name.split('.').pop()?.toLowerCase();
    if (!ext || !ALLOWED_EXTENSIONS.includes(ext)) {
      clearFile();
      setFileWarning(
        `"${selected.name}" is not a supported file type. Only ${ALLOWED_EXTENSIONS.map(e => e.toUpperCase()).join(', ')} files are accepted. File has been removed.`
      );
      return false;
    }
    if (selected.size > MAX_FILE_SIZE_BYTES) {
      clearFile();
      setFileWarning(
        `"${selected.name}" is too large (${(selected.size / 1024 / 1024).toFixed(1)}MB). Max allowed is ${MAX_FILE_SIZE_MB}MB. File has been removed.`
      );
      return false;
    }
    setFileWarning(null);
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    if (validateFile(selected)) setFile(selected);
    else e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const selected = e.dataTransfer.files?.[0];
    if (!selected) return;
    if (validateFile(selected)) setFile(selected);
  };

  const resetForm = () => {
    setName(''); setEmail(''); setCompany(''); setPhone('');
    setDescription(''); clearFile(); setUploadProgress(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) { setError('Name is required.'); return; }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.'); return;
    }
    if (!description.trim()) { setError('Project description is required.'); return; }

    setIsSubmitting(true);
    setError(null);
    setUploadProgress(0);

    try {
      let file_url: string | null = null;
      let file_name: string | null = null;
      let file_size_kb: number | null = null;

      if (file) {
        const ext = file.name.split('.').pop();
        const uniqueName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${ext}`;
        const filePath = `uploads/${uniqueName}`;
        file_name = file.name;
        file_size_kb = Math.round(file.size / 1024);
        setUploadProgress(10);

        const { error: uploadError } = await supabase.storage
          .from('quotes')
          .upload(filePath, file, { cacheControl: '3600', upsert: false });

        if (uploadError) throw new Error(`File upload failed: ${uploadError.message}`);
        setUploadProgress(80);

        const { data: urlData } = supabase.storage.from('quotes').getPublicUrl(filePath);
        file_url = urlData.publicUrl;
        setUploadProgress(100);
      }

      const { error: dbError } = await supabase.from('quotes').insert([{
        name: name.trim(),
        email: email.trim(),
        company: company.trim() || null,
        phone: phone.trim() || null,
        description: description.trim(),
        file_url,
        file_name,
        file_size_kb,
      }]);

      if (dbError) throw new Error(dbError.message);

      resetForm();
      setIsSuccess(true);

    } catch (err: any) {
      console.error('Form submission error:', err);
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── SUCCESS SCREEN ──────────────────────────────────────────────────────────
  if (isSuccess) {
    return (
      <div className={`overflow-auto ${isModal ? 'py-12' : 'bg-white border border-green-200 rounded-2xl p-8 sm:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)]'} w-full flex flex-col items-center justify-center text-center min-h-[420px]`}>
        {/* Animated check circle */}
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center animate-[ping_1s_ease-in-out_1]">
            <div className="absolute inset-0 rounded-full bg-green-100" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-200">
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 tracking-tight">Thank You!</h3>
        <p className="text-slate-500 text-base max-w-sm mb-1">
          Your quote request has been submitted successfully.
        </p>
        <p className="text-slate-400 text-sm mb-8">
          We&apos;ll review your project and get back to you within <strong className="text-slate-600">24 hours</strong>.
        </p>

        <button
          onClick={() => setIsSuccess(false)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Submit Another Query
        </button>
      </div>
    );
  }

  // ── FORM ────────────────────────────────────────────────────────────────────
  return (
    <div className={`${isModal ? '' : 'bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:border-blue-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)]'} transition-all duration-300 w-full`}>
      {!isModal && (
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">Request a Quote</h3>
          <p className="text-sm text-slate-500">Fill out the form below. CAD files up to {MAX_FILE_SIZE_MB}MB accepted.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>

        {/* Error Banner */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg flex items-start gap-2">
            <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {error}
          </div>
        )}

        {/* Name + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label htmlFor="cf-name" className="text-sm font-semibold text-slate-700">Name <span className="text-red-500">*</span></label>
            <input id="cf-name" type="text" required value={name} onChange={e => setName(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none" placeholder="John Doe" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="cf-company" className="text-sm font-semibold text-slate-700">Company</label>
            <input id="cf-company" type="text" value={company} onChange={e => setCompany(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none" placeholder="Acme Corp" />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label htmlFor="cf-email" className="text-sm font-semibold text-slate-700">Email <span className="text-red-500">*</span></label>
            <input id="cf-email" type="email" required value={email} onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none" placeholder="john@example.com" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="cf-phone" className="text-sm font-semibold text-slate-700">Phone</label>
            <input id="cf-phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none" placeholder="+49 123 456 7890" />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-1.5">
          <label htmlFor="cf-description" className="text-sm font-semibold text-slate-700">Project Description <span className="text-red-500">*</span></label>
          <textarea id="cf-description" required rows={4} value={description} onChange={e => setDescription(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none"
            placeholder="Describe your project requirements, material preferences, quantity..." />
        </div>

        {/* File Upload */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700">Upload 3D File <span className="text-slate-400 font-normal">(optional)</span></label>

          {/* File type warning */}
          {fileWarning && (
            <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 text-xs font-medium">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /></svg>
              <span>{fileWarning}</span>
            </div>
          )}

          <div
            onDragOver={e => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/30 transition-colors"
          >
            <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange}
              accept={ALLOWED_EXTENSIONS.map(e => `.${e}`).join(',')} />

            {file ? (
              <div className="flex flex-col items-center gap-1">
                <svg className="w-7 h-7 text-blue-500 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span className="text-sm font-semibold text-slate-700">{file.name}</span>
                <span className="text-xs text-slate-400">{(file.size / 1024 / 1024).toFixed(1)} MB</span>
                <button
                  type="button"
                  onClick={e => { e.stopPropagation(); clearFile(); }}
                  className="mt-1 text-xs text-red-500 hover:text-red-700 font-semibold underline underline-offset-2"
                >Remove file</button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1">
                <svg className="w-9 h-9 text-slate-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                <span className="text-sm font-medium text-slate-600">Click to upload or drag and drop</span>
                <span className="text-xs text-slate-400 mt-0.5">
                  {ALLOWED_EXTENSIONS.map(e => e.toUpperCase()).join(', ')} · Max {MAX_FILE_SIZE_MB}MB
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Upload Progress */}
        {isSubmitting && file && uploadProgress > 0 && uploadProgress < 100 && (
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold text-slate-500">
              <span>Uploading file...</span><span>{uploadProgress}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: `${uploadProgress}%` }} />
            </div>
          </div>
        )}

        {/* Submit */}
        <button type="submit" disabled={isSubmitting}
          className="w-full py-3.5 px-6 min-h-[44px] bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2">
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {file && uploadProgress < 100 ? `Uploading... ${uploadProgress}%` : 'Saving...'}
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              Submit Request
            </>
          )}
        </button>
      </form>
    </div>
  );
}
