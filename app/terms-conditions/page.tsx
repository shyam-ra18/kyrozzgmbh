import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | KYROZZ GmbH",
  robots: "noindex",
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/60 rounded-3xl p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <h1 className="text-3xl sm:text-4xl font-sans font-bold text-slate-900 tracking-tight mb-8 pb-4 border-b border-slate-100">
            Terms & Conditions
          </h1>

          <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            <p>
              Welcome to KYROZZ GmbH. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">1. Scope of Application</h2>
            <p>
              These Terms & Conditions apply to all business relations between KYROZZ GmbH and our clients, specifically for the provision of industrial 3D printing, injection molding, CNC machining, and related manufacturing services.
            </p>

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">2. Quotations and Orders</h2>
            <p>
              Our quotations and cost estimates are non-binding unless explicitly stated otherwise. A contract is concluded only when we confirm your order in writing or begin executing the service. Clients are responsible for the accuracy of any 3D files (STL, STEP, etc.) and specifications uploaded or sent to us.
            </p>

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">3. Delivery and Production</h2>
            <p>
              Delivery times provided by us are estimates and are non-binding unless we have agreed in writing on a fixed delivery date. We strive to meet turnaround goals, but factors such as custom tooling, material availability, and shipping transits may influence final delivery.
            </p>

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">4. Intellectual Property</h2>
            <p>
              Clients retain full ownership of all copyrights, industrial designs, intellectual property rights, and technical models they upload. KYROZZ GmbH only uses these designs to execute the client's manufacturing orders.
            </p>

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">5. Warranty and Liability</h2>
            <p>
              We warrant that manufactured parts correspond to the specifications agreed upon in the order confirmation. Due to the custom nature of custom manufactured components, our liability is limited to the value of the ordered goods.
            </p>

            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mt-8 mb-3">6. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of Germany. The exclusive place of jurisdiction for all disputes arising from this contract is Deggendorf, Germany.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
