import { Ship, Handshake, BarChart3Icon, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-5 px-6 lg:px-20">
      <div className="py-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delivering structured export-import solutions, trade facilitation,
              and project consulting with precision, compliance, and global
              expertise.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-500 overflow-hidden">
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500 mb-6">
                <Ship size={28} />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Import & Export Services
              </h3>

              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                End-to-end export and import operations including compliance,
                documentation, and global logistics—ensuring seamless
                cross-border execution.
              </p>

              <ul className="text-sm text-gray-500 mb-6 space-y-2">
                <li>✔ Customs Clearance & Compliance</li>
                <li>✔ Global Logistics & Freight</li>
                <li>✔ Documentation Management</li>
              </ul>

              <a
                href="/services#import-export"
                className="inline-flex items-center gap-2 text-md font-semibold text-orange-500 group-hover:gap-3 transition-all"
              >
                Learn More →
              </a>
            </div>

            {/* CARD 2 */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-500 overflow-hidden">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500 mb-6">
                <Handshake size={28} />
              </div>

              <h3 className="text-xl font-semibold mb-3">Trade Facilitation</h3>

              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                We coordinate buyers, sellers, compliance, and logistics into a
                unified workflow for smooth, risk-managed global trade
                execution.
              </p>

              <ul className="text-sm text-gray-500 mb-6 space-y-2">
                <li>✔ Buyer–Seller Alignment</li>
                <li>✔ Transaction Structuring</li>
                <li>✔ Risk Mitigation</li>
              </ul>

              <a
                href="/services#trade-facilitation"
                className="inline-flex items-center gap-2 text-md font-semibold text-orange-500 group-hover:gap-3 transition-all"
              >
                Learn More →
              </a>
            </div>

            {/* CARD 3 */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-500 overflow-hidden">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500 mb-6">
                <BarChart3Icon size={28} />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Project Management Consulting
              </h3>

              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                Execution-focused consulting aligning approvals, stakeholders,
                and timelines to deliver projects from concept to operational
                readiness.
              </p>

              <ul className="text-sm text-gray-500 mb-6 space-y-2">
                <li>✔ Execution Planning</li>
                <li>✔ Compliance Navigation</li>
                <li>✔ Timeline & Risk Governance</li>
              </ul>

              <a
                href="/services#project-management"
                className="inline-flex items-center gap-2 text-md font-semibold  text-orange-500 group-hover:gap-3 transition-all"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center m-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          Ready to Expand Your Business Globally?
        </h4>
        <p className="text-gray-600 mt-3">
          Partner with us for reliable export-import solutions and seamless
          international trade operations.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 bg-[#F47A20] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#d96512] transition"
        >
          Get Started
          <ArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </section>
  );
}
