"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const ClientsCarousel = () => {
  const partners = [
    { id: 1, title: "Google", image: "/Images/partners/google.png" },
    { id: 2, title: "Ibm", image: "/Images/partners/ibm.png" },
    { id: 3, title: "Amazon", image: "/Images/partners/amazon.png" },
    { id: 4, title: "Coca Cola", image: "/Images/partners/cocacola.png" },
    { id: 5, title: "Microsoft", image: "/Images/partners/Microsoft.png" },
    { id: 6, title: "Honda", image: "/Images/partners/honda.png" },
    { id: 7, title: "Siemens", image: "/Images/partners/siemens.png" },
  ];
  const duplicated = [...partners, ...partners];
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrame;

    const move = () => {
      setOffset((prev) => {
        const trackWidth = trackRef.current.scrollWidth / 2;
        return prev >= trackWidth ? 0 : prev + 0.5;
      });

      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section id="clients" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Our <span className="text-orange-500">Clients</span>
          </motion.h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Connecting exporters, importers, logistics providers, and global
            partners to enable seamless cross-border trade
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-center gap-12"
            style={{
              transform: `translateX(-${offset}px)`,
              willChange: "transform",
            }}
          >
            {duplicated.map((partner, index) => (
              <div
                key={index}
                className="shrink-0 bg-white border border-gray-100 rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={partner.image}
                  alt={partner.title}
                  width={140}
                  height={70}
                  className="object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
