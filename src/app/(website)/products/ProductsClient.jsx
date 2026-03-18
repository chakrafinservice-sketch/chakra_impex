"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

 const productsData = [
  {
    id: 1,
    title: "Agro Commodities",
    img: "/images/products/agro-commodities.webp",
    short:
      "Export of rice, wheat, maize, pulses, spices, oil seeds, and animal feed.",
    long: "We export a wide range of agro commodities including rice, wheat, maize, pulses, and oil seeds. Our portfolio also includes high-quality spices such as chilli, turmeric, and cumin, along with animal feed products. All items are sourced from trusted suppliers and meet international quality and safety standards.",
  },

  {
    id: 2,
    title: "Food & FMCG",
    img: "/images/products/food-fmcg.webp",
    short:
      "Processed foods, ready-to-eat items, packaged groceries, and beverages.",
    long: "We supply and export processed foods, ready-to-eat products, packaged groceries, and beverages to global markets. Our FMCG range is carefully selected to ensure quality, hygiene, and compliance with international food safety standards.",
  },

  {
    id: 3,
    title: "Textiles & Garments",
    img: "/images/products/textiles-garments.webp",
    short:
      "Export of fabrics, garments, cotton products, and apparel for global markets.",
    long: "We deal in textiles and garments including cotton yarn, fabrics, ready-made garments, and home textiles. Our products are known for quality, durability, and design, serving both fashion and industrial requirements worldwide.",
  },

  {
    id: 4,
    title: "Industrial & Raw Materials",
    img: "/images/products/industrial-raw-materials.webp",
    short:
      "Minerals, chemicals, scrap, and construction materials for industrial use.",
    long: "We provide export and sourcing solutions for industrial raw materials such as minerals, chemicals, scrap, and construction materials including cement and steel. All materials comply with international standards and are suitable for manufacturing and infrastructure projects.",
  },

  {
    id: 5,
    title: "Handicrafts",
    img: "/images/products/Handicrafts.png",
    short:
      "Traditional Indian handicrafts, decorative items, and cultural artifacts.",
    long: "Our handicraft collection includes handmade decorative items, wooden artifacts, brassware, and cultural products crafted by skilled artisans. These products represent the rich heritage of India and are highly valued in international markets.",
  },

  {
    id: 6,
    title: "Machinery & Equipment",
    img: "/images/products/Machinery-industry-equipments.png",
    short:
      "Industrial machinery, construction equipment, and heavy-duty tools.",
    long: "We export a wide range of machinery and industrial equipment including construction machinery, manufacturing units, and heavy-duty tools. All equipment is sourced from reliable manufacturers and meets global performance and safety standards.",
  },

  {
    id: 7,
    title: "Pharma & Healthcare",
    img: "/images/products/pharma-healthcare.webp",
    short:
      "Generic medicines, medical disposables, and healthcare equipment.",
    long: "We supply pharmaceutical products including generic medicines, medical disposables, and healthcare equipment. All products adhere to strict quality standards and are suitable for hospitals, clinics, and healthcare providers globally.",
  },

  {
    id: 8,
    title: "Electronics & Auto Parts",
    img: "/images/products/electronics-auto.webp",
    short:
      "Consumer electronics and automotive components for global markets.",
    long: "We export consumer electronics such as gadgets and appliances along with automotive components including batteries, filters, brake parts, and engine components. Our products meet international standards for performance and reliability.",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-orange-500">Products</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Delivering high-quality export products across agriculture, textiles,
            spices, and industrial sectors—meeting global standards with reliable sourcing.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-10 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Global <span className="text-orange-500">Product Portfolio</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We export a diverse range of products across multiple industries,
            ensuring quality, compliance, and competitive pricing. Our sourcing
            network and logistics expertise help businesses access global markets
            efficiently.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-10 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-20">

          {productsData.map((product, index) => (
            <div
              key={product.id}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* IMAGE */}
              <div
                className={`relative h-[280px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg
                ${index % 2 !== 0 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {product.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {product.short}
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {product.long}
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition"
                >
                  Enquire Now <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-orange-500 text-white py-16 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Looking for Reliable Export Products?
        </h3>

        <p className="mb-6 text-white/90">
          Partner with us to source high-quality products for your global business needs.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Get in Touch <ArrowRight size={18} />
        </Link>
      </section>

    </div>
  );
}