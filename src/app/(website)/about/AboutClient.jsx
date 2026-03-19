"use client";

import Image from "next/image";
export default function AboutPage() {

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-orange-500">Chakra Trading Impex</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Enabling seamless import and export operations with structured execution,
            compliance-first processes, and reliable global trade partnerships.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-10 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Who <span className="text-orange-500">We Are</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Chakra Trading Impex is a trade-focused company dedicated to enabling reliable
            import and export operations for businesses engaging in global markets. We help
            companies navigate cross-border trade with structured execution, compliance-led
            documentation, and coordinated logistics.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Our process-driven and partnership-oriented approach ensures that international
            transactions move smoothly from origin to destination, allowing businesses to
            scale globally with confidence.
          </p>
        </div>
      </section>

      {/* ================= WHAT WE STAND FOR ================= */}
      <section className="py-10 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-10 text-center">
            What We <span className="text-orange-500">Stand For</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 rounded-xl border bg-gray-50">
              <h3 className="font-semibold text-lg mb-2">Trade Integrity</h3>
              <p className="text-gray-600 text-sm">
                Accurate documentation and compliance-first execution ensuring smooth
                customs clearance and regulatory alignment.
              </p>
            </div>

            <div className="p-6 rounded-xl border bg-gray-50">
              <h3 className="font-semibold text-lg mb-2">Operational Clarity</h3>
              <p className="text-gray-600 text-sm">
                Clearly defined roles, timelines, and structured workflows for seamless
                coordination across all stakeholders.
              </p>
            </div>

            <div className="p-6 rounded-xl border bg-gray-50">
              <h3 className="font-semibold text-lg mb-2">Commercial Protection</h3>
              <p className="text-gray-600 text-sm">
                Well-structured trade terms that protect margins and reduce financial risks
                in international transactions.
              </p>
            </div>

            <div className="p-6 rounded-xl border bg-gray-50">
              <h3 className="font-semibold text-lg mb-2">Long-Term Partnerships</h3>
              <p className="text-gray-600 text-sm">
                Building lasting trade relationships that go beyond one-time transactions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= OUR ROLE ================= */}
      <section className="py-10 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our Role in <span className="text-orange-500">Global Growth</span>
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              We work with manufacturers, producers, traders, and institutional buyers
              to support their international trade ambitions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Whether it’s opening new export markets, structuring import supply chains,
              or managing multi-party trade relationships, Chakra Trading Impex acts as a
              reliable execution partner across the entire trade lifecycle.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✔ Export & Import Operations</li>
              <li>✔ Trade Facilitation</li>
              <li>✔ Commodity Sourcing</li>
              <li>✔ Compliance Coordination</li>
              <li>✔ Logistics Planning</li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/about-trade.png"
              alt="Global Trade"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>
      {/* ================= FOUNDER ================= */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/about-trade.png"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-orange-500">Founder</span>
            </h2>

            <h3 className="text-xl font-semibold mb-2">C S Reddy</h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Founder of Chakra Groups, with over 10+ years of experience across
              financial services and import-export industries.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With a strong commitment to customer-centric solutions and transparent
              operations, he established Chakra Trading Impex to help businesses
              navigate international trade with confidence, clarity, and reliability.
              His expertise has played a key role in building a trusted name in the
              global trade ecosystem.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-orange-500 text-white py-16 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Let’s Build Your Global Trade Journey
        </h3>

        <p className="mb-6 text-white/90">
          Partner with us to simplify your import-export operations and grow globally.
        </p>

        <a
          href="/contact"
          className="inline-block bg-white text-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}
