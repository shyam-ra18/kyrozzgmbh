import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | KYROZZ GmbH",
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
            <p><strong>Last updated:</strong> 25 July 2026</p>

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">1. Introduction</h2>
            <p>
              KYROZZ GmbH (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR) and applicable German data protection laws.
            </p>
            <p>
              This Privacy Policy explains how we collect, process, use and protect your personal data when you visit our website, request quotations, place orders or otherwise communicate with us.
            </p>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">2. Controller</h2>
            <p>The controller responsible for data processing is:</p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-sans text-slate-700">
              <strong>KYROZZ GmbH</strong><br />
              Poschingerstraße 33<br />
              94469 Deggendorf<br />
              Germany<br /><br />
              Email: <strong><a href="mailto:info@kyrozz.de" className="text-blue-600 hover:underline">info@kyrozz.de</a></strong>
            </div>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">3. What Personal Data We Collect</h2>
            <p>Depending on your interaction with us, we may collect the following information:</p>

            <h3 className="font-bold text-slate-800 mt-6 mb-2">Contact Information</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name</li>
              <li>Company name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Billing and shipping address</li>
            </ul>

            <h3 className="font-bold text-slate-800 mt-6 mb-2">Project Information</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>CAD files (STL, STEP, STP, 3MF, OBJ, DXF, SVG and similar formats)</li>
              <li>Technical drawings</li>
              <li>Manufacturing specifications</li>
              <li>Material preferences</li>
              <li>Quantity requirements</li>
              <li>Delivery instructions</li>
            </ul>

            <h3 className="font-bold text-slate-800 mt-6 mb-2">Order Information</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Quotations</li>
              <li>Purchase orders</li>
              <li>Invoices</li>
              <li>Shipping information</li>
              <li>Payment status</li>
            </ul>

            <h3 className="font-bold text-slate-800 mt-6 mb-2">Technical Information</h3>
            <p>When you visit our website, our hosting provider may automatically process technical information such as:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Date and time of access</li>
              <li>Requested pages</li>
              <li>Referrer URL (if applicable)</li>
              <li>IP address (only where technically necessary for security and operation)</li>
            </ul>
            <p>We do not use this information for advertising, profiling or marketing purposes.</p>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">4. Purpose of Processing</h2>
            <p>We process personal data solely for legitimate business purposes, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responding to enquiries</li>
              <li>Preparing quotations</li>
              <li>Reviewing uploaded CAD files</li>
              <li>Manufacturing requested products</li>
              <li>Quality assurance</li>
              <li>Processing orders</li>
              <li>Shipping products</li>
              <li>Customer support</li>
              <li>Accounting and invoicing</li>
              <li>Compliance with legal obligations</li>
              <li>Protection against fraud and misuse</li>
            </ul>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">5. Legal Basis for Processing</h2>
            <p>We process your personal data based on Article 6 GDPR:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Art. 6(1)(a)</strong> GDPR &ndash; Consent</li>
              <li><strong>Art. 6(1)(b)</strong> GDPR &ndash; Performance of a contract or pre-contractual measures</li>
              <li><strong>Art. 6(1)(c)</strong> GDPR &ndash; Compliance with legal obligations</li>
              <li><strong>Art. 6(1)(f)</strong> GDPR &ndash; Legitimate business interests</li>
            </ul>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">6. CAD Files and Confidential Information</h2>
            <p>We understand that many uploaded CAD files and technical drawings are confidential.</p>
            <p>Uploaded project files are processed exclusively for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>quotation preparation</li>
              <li>manufacturing</li>
              <li>quality control</li>
              <li>technical consultation</li>
            </ul>
            <p>We do not sell, publish or use customer designs for our own commercial purposes.</p>
            <p>Only employees and trusted production partners who require access to fulfil your order may access these files.</p>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">7. Manufacturing Partners</h2>
            <p>Where necessary, we may share technical project information with carefully selected manufacturing partners for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>CNC machining</li>
              <li>3D printing</li>
              <li>injection moulding</li>
              <li>sourcing</li>
              <li>finishing processes</li>
            </ul>
            <p>Only the information necessary to complete your project will be shared.</p>
            <p>All partners are expected to maintain appropriate confidentiality and data protection standards.</p>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">8. Import and Export</h2>
            <p>As part of our international sourcing and manufacturing services, personal and project-related information may be shared with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>logistics companies</li>
              <li>customs authorities</li>
              <li>freight forwarders</li>
              <li>shipping providers</li>
              <li>manufacturing partners</li>
            </ul>
            <p>Such sharing occurs only where necessary for fulfilling contractual obligations or complying with applicable legal requirements.</p>
            <p>Where personal data is transferred outside the European Economic Area (EEA), we implement appropriate safeguards in accordance with the GDPR.</p>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">9. Online Marketplace Sales</h2>
            <p>Our products may also be sold through third-party marketplaces including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Etsy</li>
              <li>Amazon</li>
              <li>eBay</li>
            </ul>
            <p>Orders placed through these marketplaces are additionally subject to the respective privacy policies of those platforms.</p>
            <p>We process only the customer information necessary to fulfil marketplace orders.</p>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">10. Contact Forms and Email</h2>
            <p>When you contact us via:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>contact form</li>
              <li>email</li>
              <li>quotation request</li>
              <li>file upload</li>
            </ul>
            <p>we process your information solely to respond to your enquiry and, where applicable, prepare a quotation or fulfil your order.</p>
            <p>Providing this information is voluntary. However, certain information is required to prepare quotations and process orders.</p>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">11. Cookies</h2>
            <p>Our website uses only technically necessary cookies required for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>website functionality</li>
              <li>security</li>
              <li>contact forms</li>
              <li>quotation requests</li>
            </ul>
            <p>We do not use advertising cookies or tracking cookies unless expressly stated and consented to where required by law.</p>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">12. Hosting</h2>
            <p>Our website is hosted by a professional hosting provider.</p>
            <p>For technical and security reasons, the hosting provider may process technical server data required for reliable website operation.</p>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">13. SSL/TLS Encryption</h2>
            <p>Our website uses SSL/TLS encryption to protect the transmission of confidential information submitted through our website.</p>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">14. Data Retention</h2>
            <p>We retain personal data only as long as necessary to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>provide quotations</li>
              <li>fulfil contracts</li>
              <li>comply with statutory retention obligations</li>
              <li>resolve disputes</li>
              <li>exercise legal claims</li>
            </ul>
            <p>After expiration of the applicable retention periods, personal data will be securely deleted or anonymised unless legal obligations require longer storage.</p>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">15. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>unauthorised access</li>
              <li>accidental loss</li>
              <li>misuse</li>
              <li>destruction</li>
              <li>alteration</li>
              <li>disclosure</li>
            </ul>
            <p>However, no internet transmission can be guaranteed to be completely secure.</p>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">16. Sharing of Personal Data</h2>
            <p>We do not sell personal data.</p>
            <p>We may share information only with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>shipping providers</li>
              <li>logistics companies</li>
              <li>payment service providers (where applicable)</li>
              <li>manufacturing partners</li>
              <li>tax advisors</li>
              <li>legal authorities where required by law</li>
            </ul>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">17. Automated Decision-Making</h2>
            <p>We do not use automated decision-making or profiling within the meaning of Article 22 GDPR.</p>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">18. Your Rights</h2>
            <p>Under the GDPR, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Erase personal data</li>
              <li>Restrict processing</li>
              <li>Object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with a competent supervisory authority</li>
            </ul>
            <p>To exercise your rights, please contact:</p>
            <p><strong><a href="mailto:info@kyrozz.de" className="text-blue-600 hover:underline">info@kyrozz.de</a></strong></p>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">19. Changes to this Privacy Policy</h2>
            <p>We reserve the right to update this Privacy Policy where necessary to reflect legal, technical or operational changes.</p>
            <p>The latest version will always be published on this website.</p>

            <hr className="border-slate-100 my-8" />

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">20. Contact</h2>
            <p>If you have any questions regarding this Privacy Policy or the processing of your personal data, please contact:</p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-sans text-slate-700">
              <strong>KYROZZ GmbH</strong><br />
              Poschingerstraße 33<br />
              94469 Deggendorf<br />
              Germany<br /><br />
              Email: <strong><a href="mailto:info@kyrozz.de" className="text-blue-600 hover:underline">info@kyrozz.de</a></strong>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
