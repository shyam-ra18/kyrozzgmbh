"use client";
import { useState } from "react";
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, CheckmarkCircle01Icon } from '@hugeicons/core-free-icons';

const STEPS = ["Project Details", "Part Specifications", "Your Contact Info"];

const services = ["Injection Molding", "3D Printing", "Assembly Services", "Tooling & Prototyping", "Other"];
const materials = ["PP (Polypropylene)", "ABS", "PA66 (Nylon)", "POM (Acetal)", "PC (Polycarbonate)", "HDPE", "TPE", "Other / Not Sure"];
const timelines = ["ASAP (2-4 weeks)", "1-3 months", "3-6 months", "6+ months", "Not sure yet"];

export default function QuotePage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: "", quantity: "", timeline: "",
    material: "", dimensions: "", fileDesc: "",
    name: "", company: "", email: "", phone: "", gdpr: false,
  });

  function next() { if (step < STEPS.length - 1) setStep(step + 1); }
  function prev() { if (step > 0) setStep(step - 1); }
  function submit(e: React.FormEvent) { e.preventDefault(); setSubmitted(true); }

  const progress = ((step + 1) / STEPS.length) * 100;

  return (
    <div style={{ minHeight: "100vh", background: "var(--c-mist)", paddingTop: 72 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "var(--space-4xl) var(--space-lg)" }}>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "var(--space-5xl) var(--space-2xl)" }}>
            <div style={{ width: 80, height: 80, background: "rgba(16,185,129,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto var(--space-xl)" }}>
              <HugeiconsIcon icon={CheckmarkCircle01Icon} size={40} style={{ color: "#10B981" }} />
            </div>
            <h1 style={{ marginBottom: "var(--space-md)" }}>Quote Request Sent!</h1>
            <p style={{ fontSize: 18, color: "var(--c-silver)", maxWidth: 480, margin: "0 auto" }}>
              Thank you, {form.name}! Our team will review your requirements and respond within 24 business hours.
            </p>
          </div>
        ) : (
          <div className="grid-2" style={{ gap: "var(--space-3xl)", alignItems: "flex-start" }}>
            {/* Form */}
            <div style={{ background: "white", borderRadius: 16, border: "1px solid var(--c-border)", boxShadow: "var(--shadow-md)", overflow: "hidden" }}>
              {/* Progress */}
              <div style={{ padding: "var(--space-xl) var(--space-2xl)", borderBottom: "1px solid var(--c-border)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-sm)" }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>Step {step + 1} of {STEPS.length}: {STEPS[step]}</span>
                  <span style={{ fontSize: 13, color: "var(--c-silver)" }}>{Math.round(progress)}% complete</span>
                </div>
                <div style={{ height: 4, background: "var(--c-mist)", borderRadius: 100, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, var(--c-primary), var(--c-electric))", borderRadius: 100, transition: "width 0.3s ease" }} />
                </div>
              </div>

              <form onSubmit={submit} style={{ padding: "var(--space-2xl)" }}>
                {step === 0 && (
                  <div>
                    <h2 style={{ fontSize: "1.4rem", marginBottom: "var(--space-xl)" }}>Project Details</h2>
                    <div style={{ marginBottom: "var(--space-md)" }}>
                      <label style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, display: "block" }}>Service Needed *</label>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-sm)" }}>
                        {services.map((s) => (
                          <button key={s} type="button" onClick={() => setForm({ ...form, service: s })} style={{
                            padding: "10px 18px", borderRadius: 8, border: "1.5px solid",
                            borderColor: form.service === s ? "var(--c-primary)" : "var(--c-border)",
                            background: form.service === s ? "rgba(24,64,200,0.06)" : "white",
                            color: form.service === s ? "var(--c-primary)" : "var(--c-ink)",
                            fontSize: 14, fontWeight: 500, cursor: "pointer", transition: "all 0.2s",
                          }}>
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginBottom: "var(--space-md)" }}>
                      <label style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, display: "block" }}>Estimated Quantity</label>
                      <input value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value })} placeholder="e.g. 500, 10,000, 100,000 per year" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid var(--c-border)", fontSize: 15, outline: "none" }} />
                    </div>
                    <div style={{ marginBottom: "var(--space-xl)" }}>
                      <label style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, display: "block" }}>Target Timeline</label>
                      <select value={form.timeline} onChange={e => setForm({ ...form, timeline: e.target.value })} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid var(--c-border)", fontSize: 15, outline: "none", background: "white" }}>
                        <option value="">Select timeline</option>
                        {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <button type="button" onClick={next} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      Next: Part Specifications <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
                    </button>
                  </div>
                )}

                {step === 1 && (
                  <div>
                    <h2 style={{ fontSize: "1.4rem", marginBottom: "var(--space-xl)" }}>Part Specifications</h2>
                    <div style={{ marginBottom: "var(--space-md)" }}>
                      <label style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, display: "block" }}>Preferred Material</label>
                      <select value={form.material} onChange={e => setForm({ ...form, material: e.target.value })} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid var(--c-border)", fontSize: 15, outline: "none", background: "white" }}>
                        <option value="">Select material</option>
                        {materials.map((m) => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </div>
                    <div style={{ marginBottom: "var(--space-md)" }}>
                      <label style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, display: "block" }}>Part Dimensions (approx.)</label>
                      <input value={form.dimensions} onChange={e => setForm({ ...form, dimensions: e.target.value })} placeholder="e.g. 150 x 80 x 40 mm" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid var(--c-border)", fontSize: 15, outline: "none" }} />
                    </div>
                    <div style={{ marginBottom: "var(--space-xl)" }}>
                      <label style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, display: "block" }}>Project Description</label>
                      <textarea value={form.fileDesc} onChange={e => setForm({ ...form, fileDesc: e.target.value })} placeholder="Describe your part, application, special requirements, or attach a CAD file description..." rows={5} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid var(--c-border)", fontSize: 15, outline: "none", resize: "vertical" }} />
                    </div>
                    <div style={{ display: "flex", gap: "var(--space-md)" }}>
                      <button type="button" onClick={prev} className="btn btn-ghost" style={{ flex: 1, justifyContent: "center" }}>← Back</button>
                      <button type="button" onClick={next} className="btn btn-primary" style={{ flex: 2, justifyContent: "center" }}>Next: Contact Info <HugeiconsIcon icon={ArrowRight01Icon} size={16} /></button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 style={{ fontSize: "1.4rem", marginBottom: "var(--space-xl)" }}>Your Contact Info</h2>
                    <div className="grid-2" style={{ gap: "var(--space-md)", marginBottom: "var(--space-md)" }}>
                      <div>
                        <label style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, display: "block" }}>Name *</label>
                        <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid var(--c-border)", fontSize: 15, outline: "none" }} />
                      </div>
                      <div>
                        <label style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, display: "block" }}>Company *</label>
                        <input required value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company name" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid var(--c-border)", fontSize: 15, outline: "none" }} />
                      </div>
                    </div>
                    <div style={{ marginBottom: "var(--space-md)" }}>
                      <label style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, display: "block" }}>Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@company.com" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid var(--c-border)", fontSize: 15, outline: "none" }} />
                    </div>
                    <div style={{ marginBottom: "var(--space-md)" }}>
                      <label style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, display: "block" }}>Phone (optional)</label>
                      <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 95123 60862" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid var(--c-border)", fontSize: 15, outline: "none" }} />
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: "var(--space-xl)" }}>
                      <input type="checkbox" id="gdpr-quote" required checked={form.gdpr} onChange={e => setForm({ ...form, gdpr: e.target.checked })} style={{ marginTop: 2, flexShrink: 0 }} />
                      <label htmlFor="gdpr-quote" style={{ fontSize: 13, color: "var(--c-silver)" }}>
                        I agree to my data being processed by KYROZZ GmbH to prepare my quote request (DSGVO / GDPR). *
                      </label>
                    </div>
                    <div style={{ display: "flex", gap: "var(--space-md)" }}>
                      <button type="button" onClick={prev} className="btn btn-ghost" style={{ flex: 1, justifyContent: "center" }}>← Back</button>
                      <button type="submit" className="btn btn-primary" style={{ flex: 2, justifyContent: "center" }}>
                        Send My Quote Request <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Trust sidebar */}
            <div>
              <div style={{ background: "var(--c-steel)", borderRadius: 16, padding: "var(--space-xl)", color: "white", marginBottom: "var(--space-lg)" }}>
                <h3 style={{ fontSize: 18, marginBottom: "var(--space-lg)", color: "white" }}>What Happens Next?</h3>
                {[
                  "Your enquiry is reviewed by our German engineering team",
                  "We respond within 24 business hours",
                  "DFM review included at no cost",
                  "Quote includes material options and alternatives",
                ].map((item, i) => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: "var(--space-md)" }}>
                    <div style={{ width: 24, height: 24, background: "rgba(59,111,255,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
                {[
                  { icon: "🇩🇪", text: "German Project Management" },
                  { icon: "⏱️", text: "24-Hour Response Guarantee" },
                  { icon: "💬", text: "English & German Support" },
                ].map((badge) => (
                  <div key={badge.text} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", background: "rgba(16,185,129,0.06)", borderRadius: 10, border: "1px solid rgba(16,185,129,0.15)" }}>
                    <span style={{ fontSize: 18 }}>{badge.icon}</span>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#064E3B" }}>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
