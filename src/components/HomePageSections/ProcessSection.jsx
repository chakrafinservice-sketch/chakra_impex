"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Search,
  Layers,
  Users,
  Rocket,
  Activity,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    title: "Assess",
    desc: "Analyze market readiness and compliance feasibility.",
    icon: Search,
  },
  {
    title: "Structure",
    desc: "Define trade models and commercial frameworks.",
    icon: Layers,
  },
  {
    title: "Align",
    desc: "Coordinate stakeholders and documentation flow.",
    icon: Users,
  },
  {
    title: "Execute",
    desc: "Manage shipment, logistics, and compliance execution.",
    icon: Rocket,
  },
  {
    title: "Monitor",
    desc: "Track shipments and manage operational risks.",
    icon: Activity,
  },
  {
    title: "Improve",
    desc: "Optimize processes for efficiency and scalability.",
    icon: TrendingUp,
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          How we operate{" "}
          <span className="text-orange-500">Export & Import</span>
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          We believe effective trade is built on systems, not shortcuts. Every
          engagement is guided by a defined workflow that prioritizes readiness
          before movement.
        </p>

        {/* TIMELINE */}
        <div className="relative mt-20">
          {/* LINE */}
          <div className="absolute top-8 left-0 w-full h-[2px] bg-gray-200">
            <div
              className="h-[2px] bg-orange-500 transition-all duration-500"
              style={{
                width: `${(active / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* STEPS */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= active;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActive(index)}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  {/* ICON */}
                  <div
                    className={`w-16 h-16 flex items-center justify-center rounded-full border-2 transition-all duration-300
                    ${
                      isActive
                        ? "bg-orange-500 text-white border-orange-500 shadow-lg scale-110"
                        : "bg-white text-gray-400 border-gray-300"
                    }`}
                  >
                    <Icon size={26} />
                  </div>

                  {/* STEP */}
                  <span
                    className={`mt-4 text-sm font-semibold transition ${
                      isActive ? "text-orange-500" : "text-gray-400"
                    }`}
                  >
                    Step {index + 1}
                  </span>

                  {/* TITLE */}
                  <h3
                    className={`mt-2 text-lg font-semibold transition ${
                      isActive ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* DESC */}
                  <p
                    className={`mt-2 text-sm px-2 transition ${
                      isActive ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
