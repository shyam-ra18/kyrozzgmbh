import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | KYROZZ GmbH",
  robots: "noindex",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/60 rounded-3xl p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <h1 className="text-3xl sm:text-4xl font-sans font-bold text-slate-900 tracking-tight mb-8 pb-4 border-b border-slate-100">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            <p>
              We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this Privacy Policy.
            </p>

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">1. Data Controller</h2>
            <p>
              The data controller responsible for processing data on this website is:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-sans text-slate-700">
              <strong>KYROZZ GmbH</strong><br />
              Poschingerstraße 33<br />
              94469 Deggendorf, Germany<br />
              Email: <a href="mailto:info@kyrozz.de" className="text-blue-600">info@kyrozz.de</a>
            </div>

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">2. Collection of Personal Data</h2>
            <p>
              We collect personal data when you voluntarily provide it to us, for example by filling out our contact form, uploading files for quotes, or sending us emails. This data may include your name, company name, email address, phone number, and any project-specific specifications or files you provide.
            </p>

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">3. Purpose of Data Processing</h2>
            <p>
              We process the data you provide to us to respond to your inquiries, provide price quotes, prepare contract negotiations, and process contract agreements. We only process personal data for the purposes for which you have provided it.
            </p>

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">4. Cookies and Web Analytics</h2>
            <p>
              Our website uses cookies to improve user experience, optimize site performance, and analyze traffic. You can configure your browser settings to reject cookies or notify you when a cookie is being set.
            </p>

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">5. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, deletion of, or restriction of processing of your personal data. You also have the right to object to the processing of your data and to request data portability. If you have any questions or wish to exercise these rights, please contact us at <a href="mailto:info@kyrozz.de" className="text-blue-600 hover:underline">info@kyrozz.de</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
