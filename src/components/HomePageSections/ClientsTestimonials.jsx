"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Kumar",
    company: "ABC Exports",
    feedback:
      "Hyaline Enviro Engineers provided exceptional water treatment solutions. Their team is highly professional and delivered beyond expectations.",
  },
  {
    name: "Sneha Reddy",
    company: "Global Trade Ltd",
    feedback:
      "We saw significant improvement in efficiency after implementing their systems. Highly reliable and technically strong team.",
  },
  {
    name: "Amit Sharma",
    company: "Oceanic Traders",
    feedback:
      "From design to execution, everything was seamless. Their expertise in wastewater treatment is outstanding.",
  },
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ✅ Auto Slide
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            What Our <span className="text-orange-500">Clients Say</span>
          </motion.h2>
        <p className="text-gray-600 mb-10">
          Real feedback from our valued clients across industries
        </p>

        {/* Carousel */}
        <div
          className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 transition-all duration-500"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Stars */}
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>

          {/* Feedback */}
          <p className="text-gray-600 text-lg italic mb-6 transition-opacity duration-500">
            {testimonials[activeIndex].feedback}
          </p>

          {/* Name */}
          <h4 className="text-xl font-semibold text-gray-800">
            {testimonials[activeIndex].name}
          </h4>
          <p className="text-gray-500">
            {testimonials[activeIndex].company}
          </p>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                activeIndex === index
                  ? "bg-blue-600 w-6"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}