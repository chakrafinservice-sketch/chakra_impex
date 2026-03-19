// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// export default function ProductsSections() {
//   const productsData = [
//   {
//     id: 1,
//     title: "Agro Commodities",
//     img: "/images/products/agro-commodities.webp",
//     short:
//       "Export of rice, wheat, maize, pulses, spices, oil seeds, and animal feed.",
//     long: "We export a wide range of agro commodities including rice, wheat, maize, pulses, and oil seeds. Our portfolio also includes high-quality spices such as chilli, turmeric, and cumin, along with animal feed products. All items are sourced from trusted suppliers and meet international quality and safety standards.",
//   },

//   {
//     id: 2,
//     title: "Food & FMCG",
//     img: "/images/products/food-fmcg.webp",
//     short:
//       "Processed foods, ready-to-eat items, packaged groceries, and beverages.",
//     long: "We supply and export processed foods, ready-to-eat products, packaged groceries, and beverages to global markets. Our FMCG range is carefully selected to ensure quality, hygiene, and compliance with international food safety standards.",
//   },

//   {
//     id: 3,
//     title: "Textiles & Garments",
//     img: "/images/products/textiles-garments.webp",
//     short:
//       "Export of fabrics, garments, cotton products, and apparel for global markets.",
//     long: "We deal in textiles and garments including cotton yarn, fabrics, ready-made garments, and home textiles. Our products are known for quality, durability, and design, serving both fashion and industrial requirements worldwide.",
//   },

//   {
//     id: 4,
//     title: "Industrial & Raw Materials",
//     img: "/images/products/industrial-raw-materials.webp",
//     short:
//       "Minerals, chemicals, scrap, and construction materials for industrial use.",
//     long: "We provide export and sourcing solutions for industrial raw materials such as minerals, chemicals, scrap, and construction materials including cement and steel. All materials comply with international standards and are suitable for manufacturing and infrastructure projects.",
//   },

//   {
//     id: 5,
//     title: "Handicrafts",
//     img: "/images/products/Handicrafts.png",
//     short:
//       "Traditional Indian handicrafts, decorative items, and cultural artifacts.",
//     long: "Our handicraft collection includes handmade decorative items, wooden artifacts, brassware, and cultural products crafted by skilled artisans. These products represent the rich heritage of India and are highly valued in international markets.",
//   },

//   {
//     id: 6,
//     title: "Machinery & Equipment",
//     img: "/images/products/Machinery-industry-equipments.png",
//     short:
//       "Industrial machinery, construction equipment, and heavy-duty tools.",
//     long: "We export a wide range of machinery and industrial equipment including construction machinery, manufacturing units, and heavy-duty tools. All equipment is sourced from reliable manufacturers and meets global performance and safety standards.",
//   },

//   {
//     id: 7,
//     title: "Pharma & Healthcare",
//     img: "/images/products/pharma-healthcare.webp",
//     short:
//       "Generic medicines, medical disposables, and healthcare equipment.",
//     long: "We supply pharmaceutical products including generic medicines, medical disposables, and healthcare equipment. All products adhere to strict quality standards and are suitable for hospitals, clinics, and healthcare providers globally.",
//   },

//   {
//     id: 8,
//     title: "Electronics & Auto Parts",
//     img: "/images/products/electronics-auto.webp",
//     short:
//       "Consumer electronics and automotive components for global markets.",
//     long: "We export consumer electronics such as gadgets and appliances along with automotive components including batteries, filters, brake parts, and engine components. Our products meet international standards for performance and reliability.",
//   },
// ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) =>
//         prev === productsData.length - 1 ? 0 : prev + 1,
//       );
//     }, 2500);

//     return () => clearInterval(interval);
//   }, [productsData.length]);

//   return (
//     <section id="services" className="py-6 lg:pt-30 lg:-mt-20 px-6 lg:px-18">
//       <div className="max-w-7xl mx-auto">
//         {/* ---------- TITLE ---------- */}
//         <div className="text-center pb-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl font-bold mb-4"
//           >
//             Our <span className="text-orange-500">Products</span>
//           </motion.h2>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             We specialize in exporting a wide range of high-quality products
//             across multiple industries, ensuring global standards and customer
//             satisfaction.
//           </p>
//         </div>

//         {/* ================= MOBILE AUTO SLIDER ================= */}
//         <div className="sm:hidden overflow-hidden relative">
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * 100}%)`,
//             }}
//           >
//             {productsData.map((service) => (
//               <div key={service.id} className="min-w-full px-4">
//                 <div className="bg-white rounded-2xl shadow-md border-t-4 border-[#1E6FB8] overflow-hidden">
//                   <div className="h-40 w-full">
//                     <Image
//                       src={service.img}
//                       alt={service.title}
//                       width={400}
//                       height={250}
//                       className="object-cover"
//                     />
//                   </div>

//                   <div className="p-5">
//                     <h3 className="text-lg font-semibold text-[#1E6FB8] mb-2">
//                       {service.title}
//                     </h3>

//                     <p className="text-sm text-gray-600 leading-relaxed">
//                       {service.short}
//                     </p>

//                     <Link
//                       href="/products"
//                       className="inline-flex items-center gap-2 text-md font-semibold text-orange-500 group-hover:gap-3 transition-all"
//                     >
//                       View More →
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ================= DESKTOP GRID ================= */}
//         <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {productsData.map((service) => (
//             <div
//               key={service.id}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border-t-4 border-[#1E6FB8] hover:scale-[1.03]"
//             >
//               <div className="h-40 w-full">
//                 <Image
//                   src={service.img}
//                   alt={service.title}
//                   width={400}
//                   height={200}
//                   className="object-cover rounded-xl"
//                 />
//               </div>

//               <div className="p-5">
//                 <h3 className="text-lg font-semibold text-[#1E6FB8] mb-2 mt-3">
//                   {service.title}
//                 </h3>

//                 <p className="text-sm text-gray-600 leading-relaxed">
//                   {service.short}
//                 </p>

//                 <Link
//                   href="/products"
//                   className="inline-flex items-center gap-2 text-md font-semibold text-orange-500 group-hover:gap-3 transition-all"
//                 >
//                   View More →
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ProductsSections() {
  const productsData = [
    {
      id: 1,
      title: "Agro Commodities",
      img: "/images/products/agro-commodities.webp",
      short:
        "Export of rice, wheat, maize, pulses, spices, oil seeds, and animal feed.",
    },
    {
      id: 2,
      title: "Food & FMCG",
      img: "/images/products/food-fmcg.webp",
      short:
        "Processed foods, ready-to-eat items, packaged groceries, and beverages.",
    },
    {
      id: 3,
      title: "Textiles & Garments",
      img: "/images/products/Textiles-garments.webp",
      short:
        "Export of fabrics, garments, cotton products, and apparel for global markets.",
    },
    {
      id: 4,
      title: "Industrial & Raw Materials",
      img: "/images/products/industrial-raw-materials.webp",
      short:
        "Minerals, chemicals, scrap, and construction materials.",
    },
    {
      id: 5,
      title: "Handicrafts",
      img: "/images/products/Handicrafts.png",
      short:
        "Traditional Indian handicrafts and decorative cultural artifacts.",
    },
    {
      id: 6,
      title: "Machinery & Equipment",
      img: "/images/products/Machinery-industry-equipments.png",
      short:
        "Industrial machinery, construction equipment, and heavy tools.",
    },
    {
      id: 7,
      title: "Pharma & Healthcare",
      img: "/images/products/pharma-healthcare.webp",
      short:
        "Generic medicines, medical disposables, and healthcare equipment.",
    },
    {
      id: 8,
      title: "Electronics & Auto Parts",
      img: "/images/products/electronics-auto.webp",
      short:
        "Consumer electronics and automotive components.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === productsData.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [productsData.length]);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* ---------- TITLE ---------- */}
        <div className="text-center pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl font-bold mb-4"
          >
            Our <span className="text-orange-500">Products</span>
          </motion.h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            We specialize in exporting high-quality products across industries,
            ensuring global standards and customer satisfaction.
          </p>
        </div>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="sm:hidden overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {productsData.map((item) => (
              <div key={item.id} className="min-w-full px-2">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden border-t-4 border-[#1E6FB8]">

                  {/* IMAGE */}
                  <div className="relative w-full h-44">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="100vw"
                      className="object-cover rounded-t-2xl"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 flex flex-col justify-between h-[180px]">
                    <div>
                      <h3 className="text-lg font-semibold text-[#1E6FB8] mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.short}
                      </p>
                    </div>

                    <Link
                      href="/products"
                      className="mt-3 inline-flex items-center text-sm font-semibold text-orange-500"
                    >
                      View More →
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border-t-4 border-[#1E6FB8] hover:scale-[1.03]"
            >
              {/* IMAGE */}
              <div className="relative w-full h-40">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col justify-between h-[180px]">
                <div>
                  <h3 className="text-lg font-semibold text-[#1E6FB8] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.short}
                  </p>
                </div>

                <Link
                  href="/products"
                  className="mt-3 inline-flex items-center text-sm font-semibold text-orange-500"
                >
                  View More →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
