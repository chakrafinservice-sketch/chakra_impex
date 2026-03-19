// import { ArrowBigRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// export default function AboutSection() {
//   return (
//     <section className="w-full bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-12 items-center">
//         {/* LEFT CONTENT */}
//         <div>
//           <p className="text-[#F47C20] tracking-widest text-xl font-semibold mb-6">
//             ABOUT CHAKRA FINANCES
//           </p>

//           <h2 className="text-5xl md:text-5xl font-light leading-tight text-gray-700 mb-8">
//             Where your financial needs, <br />
//             meet reliable solutions.
//           </h2> 

//           <p className="text-gray-600 leading-relaxed mb-2 text-lg">
//             At{" "}
//             <span className="font-semibold text-[#0d4ca3]">
//               Chakra Financial Services
//             </span>
//             , we believe financial support should be simple, transparent, and
//             accessible to everyone. As a trusted loan advisory and financial
//             services company operating across India, we help individuals,
//             families, entrepreneurs, and businesses secure the right financial
//             solutions with confidence.
//           </p>
//           <p className="text-gray-600 leading-relaxed mb-10 text-lg">
//             {" "}
//             We provide end-to-end assistance across a wide range of services
//             including personal loans, business loans, home loans, mortgage
//             loans, loan against property, education loans, working capital
//             finance, balance transfers, refinancing, and insurance services —
//             ensuring smooth processing and competitive terms for every client.
//           </p>

//           {/* BUTTON */}
//           <Link href="/about" className="group relative inline-flex items-center rounded-md bg-[#F47C20] text-white px-5 py-3 font-semibold tracking-wide overflow-hidden">
//             <span className="relative z-10">DISCOVER MORE</span>

//             {/* Small square element */}
//             {/* <span className="ml-6 w-4 h-4 border border-white relative z-10"><ArrowBigRight/></span> */}
//             <span className="px-3">
//               <ArrowBigRight />{" "}
//             </span>

//             {/* Hover effect */}
//             {/* <span className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span> */}
//           </Link>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative w-full h-[500px]">
//           <Image
//             src="/Images/hero-bg.jpg" // place image inside public folder
//             alt="About Starpowerz"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/about-trade.png" // use shipping/container image
            alt="Global Trade Operations"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        
        {/* RIGHT CONTENT */}
        <div>
         <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
           About <span className="text-orange-500">Chakra Tradeing Impex</span>
          </motion.h2>

          <h2 className="text-xl md:text-2xl font-semibold leading-tight text-[#1E4E8C] mb-6">
            Enabling Reliable Global Trade <br />
            with Structured Execution
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            At{" "}
            <span className="font-semibold text-[#1E4E8C]">
              Chakra Trading Impex
            </span>
            , we specialize in delivering seamless export and import operations
            for businesses engaging with global markets. Our approach integrates
            compliance, documentation, and logistics into a unified trade execution model.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            We support manufacturers, traders, and institutional buyers by managing
            the complexities of cross-border transactions — ensuring clarity,
            consistency, and commercial confidence at every stage of the trade lifecycle.
          </p>

          {/* KEY POINTS */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
            <div className="flex items-start gap-2">
              <span className="w-2 h-2 bg-[#F47A20] mt-2 rounded-full"></span>
              <p className="text-gray-600">Trade Integrity & Compliance</p>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-2 h-2 bg-[#F47A20] mt-2 rounded-full"></span>
              <p className="text-gray-600">End-to-End Logistics Coordination</p>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-2 h-2 bg-[#F47A20] mt-2 rounded-full"></span>
              <p className="text-gray-600">Structured Trade Execution</p>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-2 h-2 bg-[#F47A20] mt-2 rounded-full"></span>
              <p className="text-gray-600">Long-Term Global Partnerships</p>
            </div>
          </div>

          {/* BUTTON */}
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 bg-[#F47A20] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#d96512] transition"
          >
            Discover More
            <ArrowRight className="group-hover:translate-x-1 transition" />
          </Link>
        </div>

      </div>
    </section>
  );
}
