"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Layers, LineChart, Handshake, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Trade Integrity",
    desc: "Accurate documentation and compliance-first execution ensuring smooth cross-border operations.",
    icon: ShieldCheck,
  },
  {
    title: "Operational Clarity",
    desc: "Clearly defined roles, timelines, and workflows to eliminate confusion and delays.",
    icon: Layers,
  },
  {
    title: "Commercial Protection",
    desc: "Structured trade terms designed to safeguard your margins and reduce financial risks.",
    icon: LineChart,
  },
  {
    title: "Long-term Partnerships",
    desc: "Building reliable trade relationships that go beyond one-time transactions.",
    icon: Handshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900"
          >
            Why Choose{" "}
            <span className="text-orange-500">Chakra Trading Impex?</span>
          </motion.h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We bring structure, compliance, and operational clarity into every
            international trade transaction—ensuring your business scales
            globally with confidence and reliability.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F47A20] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#d96512] transition"
            >
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-orange-400 transition"></div>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500 mb-4 group-hover:scale-110 transition">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
