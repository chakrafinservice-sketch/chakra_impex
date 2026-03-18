"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import { ClientsCarousel } from "@/components/HomePageSections/ClientsCarousel";
import ClientsTestimonials from "@/components/HomePageSections/ClientsTestimonials";

const clientCategories = [
  "Export-Oriented Manufacturers",
  "Agro Producers & Commodity Traders",
  "Importers & Distributors",
  "SMEs & First-Time Exporters",
  "Industrial & Infrastructure Companies",
  "Global Trading Firms",
];

export default function ClientsPage() {
  return (
    <div className="bg-white">
      {/*  HERO  */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-6 lg:px-20 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Our <span className="text-orange-500">Clients</span>
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Trusted by businesses across industries for reliable import-export
          solutions, compliance, and global trade execution.
        </p>
      </section>

      {/*  INTRO  */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Trusted <span className="text-orange-500">Global Partnerships</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We work with a diverse range of clients across industries, helping
            them navigate international trade with structured execution and
            compliance-driven processes.
          </p>
        </div>
      </section>

      {/*  CLIENT TYPES */}
      <section className="py-10 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Who We <span className="text-orange-500">Serve</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {clientCategories.map((item, index) => (
              <div
                key={index}
                className="p-6 border rounded-xl bg-gray-50 hover:shadow-lg transition"
              >
                <p className="font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  CLIENT LOGOS */}
      {/* <ClientsCarousel /> */}

      {/* TESTIMONIALS  */}
      {/* <ClientsTestimonials /> */}

      {/* CTA */}
      <section className="bg-orange-500 text-white py-16 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Join Our Growing Network of Clients
        </h3>

        <p className="mb-6 text-white/90">
          Partner with us for reliable and efficient global trade solutions.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-white text-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
