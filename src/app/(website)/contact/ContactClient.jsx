"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en.json";

function getFlagEmoji(countryCode) {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt()));
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("IN");

  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800
text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Contact <span className="text-orange-500">Us</span>
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Let’s discuss your import-export requirements and build reliable
          global trade solutions.
        </p>
      </section>

      {/* ================= FORM ================= */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* LEFT INFO */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Let’s Build Your Global Trade Network
            </h2>

            <p className="text-gray-600 mb-6">
              Share your requirements and our team will get back to you with the
              best import-export solutions.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Fast response within 24 hours</li>
              <li>✔ Expert trade consultation</li>
              <li>✔ End-to-end import/export support</li>
            </ul>

            {/* CONTACT DETAILS */}
            <div className="space-y-4 p-10">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-xl
bg-gray-50 border hover:shadow-md transition">
                <MapPin className="text-orange-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Office Address</h4>
                  <p className="text-sm text-gray-600">
                    13A, 1st Floor, Block C, Sri Sai Krupa Apartments,
                    Ramakrishna Nagar, Madeenaguda, Hyderabad – 500049, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-xl
bg-gray-50 border hover:shadow-md transition">
                <Phone className="text-orange-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-sm text-gray-600">+91 9030972851</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl
bg-gray-50 border hover:shadow-md transition">
                <Mail className="text-orange-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-sm text-gray-600">info@chakraimpex.com</p>
                  <p className="text-sm text-gray-600">
                    chakratradingimpex@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-md border">
              <iframe

src="https://www.google.com/maps?q=Madeenaguda,Hyderabad&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* FORM */}
          <form className="bg-gray-100 p-8 rounded-2xl shadow-lg space-y-5">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full border p-3 rounded-md focus:ring-2
focus:ring-orange-400 outline-none"
            />

            {/* Company */}
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="w-full border p-3 rounded-md"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full border p-3 rounded-md"
            />

            {/* Phone */}

            {/* Phone (Split UI) */}
            <div className="flex w-full border p-3 rounded-md">
              {/* Country Code */}
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-[100px] bg-gray-100 px-3 outline-none text-sm"
              >
                {getCountries().map((c) => (
                  <option key={c} value={c}>
                    {en[c]} {" "} +{getCountryCallingCode(c)}
                  </option>
                ))}
              </select>

              {/* Phone Number */}
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                required
                className="flex-1 p-3 outline-none"
              />
            </div>

            {/* Business Type */}
            <select
              name="businessType"
              className="w-full border p-3 rounded-md"
            >
              <option>Business Type</option>
              <option>Exporter</option>
              <option>Importer</option>
              <option>Trader</option>
            </select>

            {/* Service */}
            <select name="service" className="w-full border p-3 rounded-md">
              <option>Service Required</option>
              <option>Import & Export</option>
              <option>Trade Facilitation</option>
              <option>Project Consulting</option>
            </select>

            {/* Product */}
            <input
              type="text"
              name="product"
              placeholder="Product / Commodity"
              className="w-full border p-3 rounded-md"
            />

            {/* Country */}
            <input
              type="text"
              name="country"
              placeholder="Target Country"
              className="w-full border p-3 rounded-md"
            />

            {/* Quantity */}
            <input
              type="text"
              name="quantity"
              placeholder="Estimated Quantity / Order Size"
              className="w-full border p-3 rounded-md"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Describe your requirement..."
              rows="4"
              className="w-full border p-3 rounded-md"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3
rounded-md font-semibold hover:bg-orange-600 transition flex
justify-center items-center gap-2"
            >
              Submit Enquiry <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-orange-500 text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Start Your Trade Journey?
        </h3>

        <p className="mb-6">
          Get in touch with our experts for seamless global trade solutions.
        </p>

        <a
          href="https://wa.me/919030972851"
          target="_blank"
          className="bg-white text-orange-500 px-6 py-3 rounded-md
font-semibold"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}

