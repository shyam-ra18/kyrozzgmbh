import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Terms and Conditions | KYROZZ GmbH",
  description: "General Terms and Conditions of KYROZZ GmbH for custom manufacturing services, online sales, delivery, payment, warranty, and liability.",
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/60 rounded-3xl p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <h1 className="text-3xl sm:text-4xl font-sans font-bold text-slate-900 tracking-tight mb-2 pb-4 border-b border-slate-100">
            General Terms and Conditions
          </h1>
          <p className="text-xs text-slate-400 mb-8 font-medium">Last updated: 25 July 2026</p>

          <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">1. Scope</h2>
              <p>These General Terms and Conditions apply to all quotations, custom manufacturing services, orders and sales provided by KYROZZ GmbH.</p>
              <p className="mt-3">Our business consists of two different service models:</p>
              <p className="mt-2"><strong>(a) Custom Manufacturing Services</strong><br />
              Customers may submit enquiries and upload CAD files or technical drawings through our website. Based on the submitted information, KYROZZ GmbH prepares an individual quotation. No contract is concluded through the website itself. A binding contract is formed only after the customer expressly accepts our written quotation.</p>
              <p className="mt-2"><strong>(b) Online Sale of Standard Products</strong><br />
              KYROZZ GmbH also offers selected standard products designed and manufactured by us through online marketplaces such as Etsy, Amazon and eBay. Orders placed through these marketplaces are concluded according to the ordering process and terms of the respective platform, supplemented by these Terms where applicable.</p>
              <p className="mt-3">These Terms apply to both consumers and businesses.</p>
              <p className="mt-2">A <strong>consumer</strong> is any natural person who enters into a legal transaction for purposes that are predominantly outside their trade, business or profession.</p>
              <p className="mt-2">An <strong>entrepreneur (business customer)</strong> is a natural or legal person or a partnership with legal capacity acting in the exercise of its commercial or independent professional activity.</p>
              <p className="mt-2">If an entrepreneur uses conflicting or supplementary general terms and conditions, their validity is hereby rejected unless expressly agreed to by KYROZZ GmbH in writing.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">2. Contracting Party, Conclusion of Contract</h2>
              <p>The contract is concluded with <strong>KYROZZ GmbH</strong> (Poschingerstraße 33, 94469 Deggendorf, Germany, VAT ID: DE463952764, HRB 6560).</p>
              <p className="mt-2">By submitting an inquiry through our website, you are making a non-binding request for a quotation. We will review the data provided (e.g., 3D CAD files) and send you a binding, individualized offer. The contract is concluded only when you explicitly accept our customized quotation in writing. Electronic acceptance by email shall be sufficient unless otherwise agreed.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">3. Contract Language, Contract Text Storage</h2>
              <p>The contract language shall be German or English, depending on the language used in the individual quotation and accepted by the Customer. In the event of discrepancies between different language versions of these Terms, the German version shall prevail.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">4. Delivery Terms</h2>
              <p>Shipping costs may also apply in addition to the stated service prices. Applicable shipping costs will be clearly detailed in your individual quotation.</p>
              <p className="mt-2">You generally have the option of collection from KYROZZ GmbH, Poschingerstraße 33, 94469 Deggendorf, Germany at the following business hours: 8 a.m.–6 p.m.</p>
              <p className="mt-2">Delivery dates are estimates unless expressly agreed otherwise. We shall not be liable for delays caused by force majeure, supply shortages, transport disruptions or circumstances beyond our reasonable control.</p>
              <p className="mt-2">We do not deliver to packing stations.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">5. Payment</h2>
              <p>Payment terms will be specified in your individual quotation. Generally, we offer the following payment method: <strong>Invoice</strong></p>
              <p className="mt-2">You will pay the invoice amount after receiving the goods and the invoice by bank transfer to our bank account. We reserve the right to offer the purchase on account only after a successful credit check.</p>
              <p className="mt-2">We reserve the right to require advance payment, partial payment or full payment before production begins.</p>
              <p className="mt-2">In the event of late payment, KYROZZ GmbH reserves the right to charge statutory default interest and any applicable reminder fees in accordance with German law.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">6. Right of Withdrawal</h2>
              <p>Consumers have the statutory right of withdrawal, as described in the withdrawal instructions. Please note that the right of withdrawal may not apply to custom-made goods manufactured specifically to your specifications (e.g., custom 3D prints). Individually manufactured products according to customer specifications are excluded from the statutory right of withdrawal pursuant to § 312g (2) No. 1 BGB.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">7. No Engineering Review</h2>
              <p>Unless expressly agreed in writing, KYROZZ GmbH does not perform engineering validation, structural analysis, design optimization or safety assessment of Customer files. The Customer remains solely responsible for the design and intended use of the products.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">8. Photographs</h2>
              <p>KYROZZ GmbH will not publish photographs or renderings of confidential customer projects without the Customer&apos;s prior written consent.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">9. Retention of Title</h2>
              <p>The goods remain our property until full payment is received.</p>
              <p className="mt-2">For entrepreneurs, the following also applies: We reserve ownership of the goods until all claims arising from an ongoing business relationship have been fully settled. You may resell the reserved goods in ordinary business operations; all claims arising from this resale are assigned to us in advance – irrespective of any connection or mixing of the reserved goods with a new item – in the amount of the invoice, and we accept this assignment. You remain authorized to collect the receivables; however, we may also collect receivables ourselves if you fail to meet your payment obligations.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">10. Transport Damage</h2>
              <p>For consumers: If goods are delivered with obvious transport damage, please report such errors to the delivery person as soon as possible and contact us immediately. Failure to file a complaint or contact will have no consequences whatsoever for your legal claims and their enforcement, in particular your warranty rights. However, they help us to assert our own claims against the carrier or to be able to claim the transport insurance.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">11. Warranty and Warranties</h2>
              <p>Unless expressly agreed otherwise below, the statutory right to liability for defects applies. When consumers purchase used goods, the following applies: if the defect occurs after one year from delivery of the goods, claims for defects are excluded. Defects that occur within one year of delivery of the goods can be claimed within the framework of the statutory limitation period of two years from delivery of the goods.</p>
              <p className="mt-2">For entrepreneurs, the limitation period for claims for defects in newly manufactured goods is one year from the transfer of risk. Used goods are sold without any warranty. The statutory limitation periods for the right of recourse according to § 445a BGB remain unaffected.</p>
              <p className="mt-2">Only our own information and the manufacturer&apos;s product descriptions, which have been included in the contract, are considered an agreement with entrepreneurs regarding the nature of the goods; we assume no liability for public statements made by the manufacturer or other advertising claims.</p>
              <p className="mt-2">If the delivered item is defective, we will first guarantee to entrepreneurs of our choice by eliminating the defect (repair) or by delivering an item free of defects (replacement delivery).</p>
              <p className="mt-2">The above restrictions and reductions in time limits do not apply to claims arising from damages caused by us, our legal representatives or agents:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>in case of injury to life, body or health</li>
                <li>in cases of intentional or grossly negligent breach of duty and fraud</li>
                <li>in the event of a breach of essential contractual obligations, the fulfillment of which enables the proper execution of the contract in the first place and on whose compliance the contracting party may regularly rely (cardinal obligations)</li>
                <li>within the framework of a guarantee, insofar as agreed</li>
                <li>where the German Product Liability Act applies</li>
              </ul>
              <p className="mt-2">Minor deviations in colour, dimensions, weight, material texture, layer appearance and surface finish resulting from the manufacturing process or material properties shall not constitute defects.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">12. Liability</h2>
              <p>We are always fully liable for claims arising from damages caused by us, our legal representatives, or agents:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>in case of injury to life, body or health</li>
                <li>in cases of intentional or grossly negligent breach of duty</li>
                <li>in the case of warranty promises, as agreed, or</li>
                <li>where the German Product Liability Act applies</li>
              </ul>
              <p className="mt-2">In the event of a breach of essential contractual obligations, the fulfillment of which enables the proper execution of the contract in the first place and on whose compliance the contracting party may regularly rely (cardinal obligations), due to slight negligence on the part of us, our legal representatives or agents, liability is limited in amount to the damage foreseeable at the time of conclusion of the contract, the occurrence of which must typically be expected.</p>
              <p className="mt-2">Furthermore, claims for damages are excluded.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">13. Dispute Resolution</h2>
              <p>KYROZZ GmbH is neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board in accordance with applicable German law.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">14. License</h2>
              <p>The Customer grants KYROZZ GmbH a non-exclusive, limited license solely for the purpose of reviewing, manufacturing and delivering the ordered products.</p>
              <p className="mt-2">The Customer retains all intellectual property rights in the submitted files unless otherwise expressly agreed in writing.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">15. Industrial Property Rights / Copyrights / Rights to Documents, Data</h2>
              <p>(1) The Customer assures that the data and/or products it submits for printing are free from third-party rights in such a way that the printing by KYROZZ GmbH and its producers does not infringe any third-party rights (in particular, but not definitively, copyrights, patent rights, design rights, competition rights) or that the rights holder has given appropriate permission, and furthermore that no statutory prohibitions are violated. KYROZZ GmbH is only liable for legal violations if they acted intentionally or with gross negligence and could have recognized the violation. If you are unsure whether your file is free of third-party rights, do not upload it.</p>
              <p className="mt-2">(2) The Customer shall indemnify KYROZZ GmbH against all legitimate claims and demands made as a result of the infringement of third-party rights. This also includes reasonable expenses for the legal defense of KYROZZ GmbH with regard to which KYROZZ GmbH is also entitled to an advance payment against the Customer in the amount of the anticipated costs.</p>
              <p className="mt-2">(3) The Customer is obliged to notify KYROZZ GmbH in writing without delay if claims are made against it for infringement of third-party rights in connection with products manufactured at KYROZZ GmbH.</p>
              <p className="mt-2">(4) KYROZZ GmbH cooperates with contractual partners and issues 3D printing orders to them for the performance of the order with KYROZZ GmbH&apos;s customers. The Customer shall transfer to KYROZZ GmbH – if necessary – the usage rights required for the execution of the order as described in Section 14 (License). In the event of a violation of the intellectual property rights by the contracting parties of KYROZZ GmbH, they must be called upon to claim damages. KYROZZ GmbH is not obliged to examine uploaded files for possible infringements of third-party intellectual property rights.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">16. Confidentiality</h2>
              <p>KYROZZ GmbH treats all customer files and technical information as confidential and uses them solely for quotation preparation, manufacturing and order fulfilment.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">17. Manufacturing Tolerances</h2>
              <p>Due to the nature of additive manufacturing and CNC machining, dimensional deviations within commercially accepted tolerances may occur. Unless otherwise expressly agreed, dimensional tolerances shall be interpreted in accordance with commercially accepted manufacturing standards for the selected production process. Manufacturing tolerances may vary depending on the selected material and manufacturing process.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">18. Color Variations</h2>
              <p>Color variations between production batches, raw materials and manufacturing processes are technically unavoidable and shall not constitute defects.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">19. Customer Approval</h2>
              <p>The Customer is solely responsible for verifying the accuracy, dimensions, functionality, safety and suitability of all submitted files and specifications before placing the order.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">20. File Retention</h2>
              <p>CAD files may be retained for a reasonable period to facilitate repeat orders unless deletion is requested or legal obligations require longer retention.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">21. Export Compliance</h2>
              <p>The customer is responsible for compliance with applicable export control and import regulations relating to the supplied products.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">22. Product Safety</h2>
              <p>Products manufactured by KYROZZ GmbH are not certified for medical, aviation, life-support or other safety-critical applications unless expressly agreed in writing. The Customer is responsible for determining whether the manufactured products are suitable for their intended application. Products are intended solely for the applications agreed between the parties.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">23. Marketplace Orders</h2>
              <p>Orders placed through Etsy, Amazon, eBay and other online selling platforms are additionally governed by the terms and conditions of the respective marketplace.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">24. Force Majeure</h2>
              <p>KYROZZ GmbH shall not be liable for delays resulting from force majeure, governmental measures, natural disasters, strikes, supplier failures or other events beyond its reasonable control. Delivery times shall be extended for the duration of the force majeure event.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">25. Limitation for Prototype Parts</h2>
              <p>Prototype parts are supplied for evaluation purposes only and are not guaranteed to be suitable for serial production unless expressly agreed.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">26. Packaging</h2>
              <p>Packaging shall be selected by KYROZZ GmbH at its reasonable discretion unless otherwise agreed.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">27. Limitation of Manufacturing Liability</h2>
              <p>KYROZZ GmbH manufactures products strictly according to the files, drawings and specifications provided by the Customer. KYROZZ GmbH is not responsible for design errors, dimensional inaccuracies, functional defects or engineering mistakes contained in the submitted files.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">28. Inspection on Delivery</h2>
              <p>The Customer shall inspect the delivered products without undue delay upon receipt and notify KYROZZ GmbH of any visible defects within a reasonable period.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">29. Final Provisions</h2>
              <p>If you are an entrepreneur, then German law applies, excluding the UN Convention on Contracts for the International Sale of Goods.</p>
              <p className="mt-2">If you are a merchant within the meaning of the Commercial Code, a legal entity under public law or a special public-law asset, our place of business is the exclusive place of jurisdiction for all disputes arising from contractual relationships between us and you.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">30. Severability Clause</h2>
              <p>If any provision of these Terms is held invalid, the remaining provisions shall remain unaffected.</p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
