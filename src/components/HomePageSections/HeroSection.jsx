import Image from "next/image";
import { ArrowRight, BarChart3, Boxes, Handshake } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-start justify-center text-white">
      {/* Background Image */}
      <Image
        src="/images/hero2-bg.png"
        alt="Global Trade Logistics"
        fill
        priority
        className="object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content (TOP aligned) */}
      <div className="relative z-5 text-center max-w-4xl px-6 pt-20">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Global Trade <span className="text-yellow-400">Solutions</span>
        </h1>

        <p className="mt-1 text-lg md:text-xl text-gray-200">
          <span className="text-yellow-400 font-semibold">CHAKRA TRADING IMPEX</span> is your Trusted Partner in Export & Import
        </p>
      </div>

      {/* Bottom Feature Card (INSIDE HERO) */}
      <div className="absolute bottom-10 w-full flex justify-center px-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-wrap gap-6 items-center justify-between max-w-5xl w-full">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-[#F47A20] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#d96512] transition"
          >
            Getin Touch
            <ArrowRight className="group-hover:translate-x-1 transition" />
          </Link>

          {/* Item 1 */}
          <div className="flex items-center gap-3">
            <BarChart3 className="text-blue-600" size={32} />
            <p className="font-medium text-gray-700">
              Market <br /> Connect
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3">
            <Boxes className="text-blue-600" size={32} />
            <p className="font-medium text-gray-700">
              Global <br /> Trade
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3">
            <Handshake className="text-blue-600" size={32} />
            <p className="font-medium text-gray-700">
              Buyer <br /> Served
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
