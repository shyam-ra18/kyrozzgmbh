import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | KYROZZ GmbH",
  robots: "noindex",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/60 rounded-3xl p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <h1 className="text-3xl sm:text-4xl font-sans font-bold text-slate-900 tracking-tight mb-8 pb-4 border-b border-slate-100">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">1. An overview of data protection</h2>
            <p>
              <strong>General information</strong><br/>
              The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. We respect your privacy and process data strictly for quotation and service fulfillment. We do not engage in direct online sales on this platform, and we do not collect or store IP addresses in our log files.
            </p>

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">2. General information and mandatory information</h2>
            <p>
              <strong>Data protection</strong><br/>
              The operators of this website and its pages take the protection of your personal data very seriously. Hence, we handle your personal data as confidential information and in compliance with the statutory data protection regulations and this Data Protection Declaration.
            </p>
            <p>
              <strong>Information about the responsible party (referred to as the &quot;controller&quot; in the GDPR)</strong><br/>
              The data processing controller on this website is:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-sans text-slate-700">
              <strong>KYROZZ GmbH</strong><br />
              Poschingerstraße 33<br />
              94469 Deggendorf, Germany<br />
              Email: <a href="mailto:info@kyrozz.de" className="text-blue-600">info@kyrozz.de</a>
            </div>

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">3. Data collection on this website</h2>
            <p>
              <strong>Information collected for quotations</strong><br/>
              When you submit inquiries to us via our contact form, email, or quotation upload, we collect specific information strictly for the purpose of reviewing your project and preparing a customized quotation. 
            </p>
            <p>
              This information may include:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your name and company name</li>
              <li>Contact details (email address, phone number)</li>
              <li>Project specifications and 3D CAD files</li>
            </ul>
            <p>
              <strong>No IP Address Collection</strong><br/>
              To maximize your privacy, our systems are configured to NOT log or collect your IP address when you browse our website.
            </p>
            <p>
              <strong>Cookies</strong><br/>
              Our website uses only technically necessary cookies required for the basic functionality of the contact and quotation forms. We do not use tracking or advertising cookies.
            </p>

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">4. Purpose of data processing</h2>
            <p>
              We process the data you provide exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responding to your inquiries</li>
              <li>Preparing and sending price quotations based on your submitted files</li>
              <li>Handling contractual negotiations and service fulfillment</li>
            </ul>
            <p>
              We do not use your personal data for automated decision-making, profiling, or direct marketing without your explicit consent. Your data will not be shared with third parties, except as strictly necessary to fulfill your manufacturing request (e.g., sharing necessary technical details with trusted production partners, as outlined in our Terms &amp; Conditions).
            </p>

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">5. Your Rights</h2>
            <p>
              You have the right to request information about your archived personal data, their source and recipients as well as the purpose of the processing of your data at any time. You also have a right to demand that your data are rectified or eradicated. If you have consented to data processing, you may revoke this consent at any time, which shall affect all future data processing. Moreover, you have the right to demand that the processing of your data be restricted under certain circumstances. 
            </p>
            <p>
              To exercise these rights, simply contact us at <a href="mailto:info@kyrozz.de" className="text-blue-600 hover:underline">info@kyrozz.de</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
