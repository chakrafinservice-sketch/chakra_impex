"use client";
import { motion } from "framer-motion";
import { Globe, Ship, Users, TrendingUp } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      number: "1200+",
      label: "Global Shipments",
      icon: <Ship size={28} />,
    },
    {
      number: "35+",
      label: "Countries Connected",
      icon: <Globe size={28} />,
    },
    {
      number: "800+",
      label: "Business Clients",
      icon: <Users size={28} />,
    },
    {
      number: "10+",
      label: "Years of Experience",
      icon: <TrendingUp size={28} />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Powering <span className="text-orange-500">Global Trade Exporting</span>
          </motion.h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Seamless export-import solutions with compliance, logistics, and
            global connectivity
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 text-[#F47A20] group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="text-3xl md:text-4xl font-bold text-[#1E4E8C]">
                {item.number}
              </h3>

              {/* Orange Divider */}
              <div className="w-8 h-1 bg-[#F47A20] mx-auto my-3 rounded"></div>

              {/* Label */}
              <p className="text-gray-600 text-sm md:text-base font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
