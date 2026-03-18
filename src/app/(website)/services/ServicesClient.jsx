"use client";

import {
  Ship,
  Handshake,
  BarChart3,
  ArrowRight,
  BarChart3Icon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesClient() {
  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-6">
            Global <span className="text-orange-500">Import & Export</span>{" "}
            Solutions
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-base sm:text-lg">
            Delivering seamless international trade services with compliance,
            logistics, and strategic consulting tailored for global business
            growth.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-8 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We provide end-to-end solutions in international trade, ensuring
            smooth execution from sourcing to delivery. Our expertise spans
            across logistics, compliance, and strategic project consulting to
            help businesses expand globally.
          </p>
        </div>
      </section>

      {/* ================= SERVICE 1 ================= */}
      <section id="import-export" className="py-10 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <Ship className="text-orange-500" size={34} />
              <h2 className="text-3xl font-bold">Import & Export Services</h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              As a professional export-import company in Hyderabad,{" "}
              <span className="font-semibold text-blue-600">
                Chakra Trading Impex
              </span>{" "}
              delivers integrated trade solutions designed to simplify
              cross-border operations, ensure regulatory compliance, and reduce
              operational risks. We support businesses across India in scaling
              their global trade activities with structured execution and
              strategic guidance.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                International Market Access & Sourcing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We help Indian exporters expand into international markets and
                assist importers in sourcing reliable global suppliers based on
                demand analysis, pricing benchmarks, and compliance feasibility.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Customs Clearance & Compliance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team manages HS code classification, DGFT-aligned
                procedures, and complete export-import documentation while
                coordinating with customs authorities for smooth and timely
                clearance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Global Logistics & Freight Forwarding
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We handle sea freight, air freight, and multimodal transport
                from major ports and airports connected to Hyderabad, ensuring
                optimized cost, reduced transit time, and cargo safety.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Documentation Management
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We manage all critical documents including invoices, packing
                lists, certificates of origin, shipping bills, BL/AWB, and
                insurance paperwork to avoid delays and compliance risks.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                International Trade Advisory
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our experts guide you on Incoterms, pricing strategies, trade
                contracts, and payment risk management to protect your margins
                and ensure secure transactions.
              </p>
            </div>
          </div>

          {/* WHO WE SERVE */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Who We Serve</h3>

            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li>
                ✔ Export-oriented manufacturers in Telangana & Andhra Pradesh
              </li>
              <li>✔ Agro producers and commodity traders</li>
              <li>✔ Importers sourcing machinery, raw materials, and goods</li>
              <li>✔ SMEs and first-time exporters</li>
              <li>✔ Established trading companies expanding globally</li>
            </ul>
          </div>

          {/* WHY CHOOSE */}
          <div className="mb-12 bg-gray-50 p-6 rounded-xl border">
            <h3 className="text-xl font-semibold mb-4">
              Why Choose Chakra Trading Impex
            </h3>

            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li>✔ Hyderabad-based company with global trade reach</li>
              <li>✔ Compliance-first structured execution</li>
              <li>✔ Transparent documentation & shipment tracking</li>
              <li>✔ Strong global logistics network</li>
              <li>✔ Single-point coordination for all operations</li>
            </ul>
          </div>
        </div>

        {/* FULL WIDTH IMAGE */}
        <div className="w-full mt-6">
          <Image
            src="/Images/services/import-export.png"
            alt="Import Export Services"
            width={1920}
            height={600}
            className="w-full aspect-[16/9] object-cover rounded-lg"
            priority
          />
        </div>
      </section>

      {/*  SERVICE 2  */}
      <section
        id="trade-facilitation"
        className="py-10 px-6 lg:px-20 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <Handshake className="text-orange-500" size={34} />
              <h2 className="text-3xl font-bold">Trade Facilitation</h2>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Turning Cross-Border Complexity into Business Advantage
            </h3>

            <p className="text-gray-600 leading-relaxed">
              International trade is rarely limited by opportunity—it is limited
              by process. At
              <span className="font-semibold text-gray-800">
                {" "}
                Chakra Trading Impex
              </span>
              , we bridge the gap between intent and execution by aligning
              commercial terms, regulatory pathways, documentation, and
              operational coordination into a seamless workflow.
            </p>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Our structured trade facilitation services enable buyers and
              sellers to complete international transactions with speed,
              clarity, and reduced risk—especially in multi-country and
              multi-party trade environments.
            </p>
          </div>

          {/* WHAT IT MEANS */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">
              What Trade Facilitation Means
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Trade facilitation is not just logistics or brokering—it is the
              orchestration of people, processes, compliance, and execution
              required to move a transaction from agreement to successful
              delivery. We ensure every stakeholder operates within a unified
              and structured framework.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-lg mb-2">
                Buyer–Seller Alignment
              </h4>
              <p className="text-gray-600 text-sm">
                We connect credible global buyers and sellers, support
                negotiations, and ensure commercially viable and legally
                executable agreements.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                Transaction Structuring
              </h4>
              <p className="text-gray-600 text-sm">
                Each transaction is designed with clear roles, Incoterms,
                timelines, and documentation flows to eliminate ambiguity.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                Regulatory Pathway Design
              </h4>
              <p className="text-gray-600 text-sm">
                We map compliance requirements, permissions, and
                country-specific regulations to prevent shipment delays.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                Documentation Governance
              </h4>
              <p className="text-gray-600 text-sm">
                We align commercial, transport, and regulatory documents to
                ensure smooth transitions across all stages.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                Multi-Party Coordination
              </h4>
              <p className="text-gray-600 text-sm">
                Acting as a central coordination layer, we synchronize all
                stakeholders across borders and time zones.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Risk Mitigation</h4>
              <p className="text-gray-600 text-sm">
                We proactively identify risks in compliance, logistics, and
                payments, building safeguards into every transaction.
              </p>
            </div>
          </div>

          {/* WHO USES */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">
              Who Uses Trade Facilitation
            </h3>

            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li>✔ Exporters entering new international markets</li>
              <li>✔ Importers dealing with new overseas suppliers</li>
              <li>✔ Trading companies managing multi-country supply chains</li>
              <li>✔ Manufacturers handling indirect exports</li>
              <li>
                ✔ Businesses executing high-value or project-based shipments
              </li>
            </ul>
          </div>

          {/* PHILOSOPHY */}
          <div className="mb-12 bg-white p-6 rounded-xl border">
            <h3 className="text-xl font-semibold mb-4">
              Our Facilitation Philosophy
            </h3>

            <p className="text-gray-600 mb-4">
              We don’t just move shipments—we engineer transactions that work in
              real-world trade systems.
            </p>

            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li>✔ Executable – practical and operationally realistic</li>
              <li>✔ Compliant – aligned with regulations</li>
              <li>✔ Coordinated – unified across stakeholders</li>
              <li>✔ Repeatable – scalable for long-term growth</li>
            </ul>
          </div>
        </div>

        {/* FULL WIDTH IMAGE */}
        <div className="w-full mt-6">
          <Image
            src="/Images/services/trade-facilitation.png"
            alt="Trade Facilitation Services"
            width={1920}
            height={600}
            className="w-full aspect-[16/9] object-cover rounded-lg"
            priority
          />
        </div>
      </section>

      {/*  SERVICE 3  */}
      <section id="project-management" className="py-10 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <BarChart3Icon className="text-orange-500" size={34} />
              <h2 className="text-3xl font-bold">
                Project Management Consulting
              </h2>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              From Idea Approval to Operational Readiness
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Projects do not fail because of lack of intent—they fail when
              execution becomes fragmented. At{" "}
              <span className="font-semibold text-gray-800">
                Chakra Trading Impex
              </span>
              , our Project Management Consulting service provides a structured
              execution backbone for complex initiatives by aligning
              stakeholders, approvals, timelines, and compliance into a single
              accountable delivery model.
            </p>

            <p className="text-gray-600 mt-3 leading-relaxed">
              We support businesses and investors in converting plans into
              operational outcomes across IT and digital projects,
              investment-led ventures in India, and industrial setup initiatives
              including factory licensing and regulatory clearances.
            </p>
          </div>

          {/* What We Deliver */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">What We Deliver</h3>
            <p className="text-gray-600 leading-relaxed">
              Our consulting model is built around end-to-end project
              stewardship, covering planning, coordination, compliance
              navigation, and execution oversight. We focus on turning approved
              ideas into operationally ready outcomes with practical governance
              at every stage.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-lg mb-2">
                IT & Digital Project Delivery
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We align business requirements, vendors, development milestones,
                security considerations, and go-live readiness so that
                technology investments result in usable systems rather than
                incomplete execution.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                Investment Project Enablement in India
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                For domestic and international investors, we coordinate
                feasibility structuring, local partner alignment, statutory
                pathways, and milestone governance to reduce entry friction and
                execution risk in India-focused projects.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                Industrial Setup & Factory Licensing Support
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We support manufacturing and infrastructure initiatives with
                execution planning across land identification, statutory
                approvals, factory licensing, utilities coordination, and
                site-level operational readiness.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                Multi-Stakeholder Coordination
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We act as the central coordination layer between promoters,
                consultants, vendors, contractors, and government interfaces to
                keep projects moving under one aligned delivery plan.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                Approval & Compliance Navigation
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We design approval roadmaps and compliance sequences so that
                licenses, permissions, and registrations are obtained in the
                correct order, avoiding costly delays and rework.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                Timeline, Cost & Risk Governance
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We establish practical schedules, track milestone dependencies,
                and surface execution risks early to protect launch timelines,
                budgets, and operational objectives.
              </p>
            </div>
          </div>

          {/* Who This Service Is For */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">
              Who This Service Is For
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li>✔ IT and digital transformation initiatives</li>
              <li>
                ✔ Foreign and domestic investors setting up projects in India
              </li>
              <li>
                ✔ Manufacturing units, warehouses, and industrial facilities
              </li>
              <li>✔ Startups moving from concept to operational scale</li>
              <li>
                ✔ Enterprises handling multi-location or multi-vendor projects
              </li>
            </ul>

            <p className="text-gray-600 mt-4 leading-relaxed">
              This service is especially valuable for projects involving
              multiple approvals, regulatory interfaces, and parallel execution
              workstreams.
            </p>
          </div>

          {/* Philosophy */}
          <div className="mb-12 bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">
              Our Consulting Philosophy
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We do not manage projects on spreadsheets alone. We manage
              real-world execution environments—where approvals move at
              different speeds, vendors work with different assumptions, and
              timelines must adapt without losing control.
            </p>

            <div className="grid md:grid-cols-2 gap-3 text-gray-700">
              <div>
                ✔ Execution realism – plans grounded in on-ground constraints
              </div>
              <div>
                ✔ Regulatory awareness – approvals embedded into project design
              </div>
              <div>
                ✔ Stakeholder alignment – fewer handoffs, clearer accountability
              </div>
              <div>
                ✔ Operational readiness – not just completion, but go-live
                success
              </div>
            </div>
          </div>

          {/* Why Engage */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">
              Why Engage Our Project Management Consulting
            </h3>

            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li>
                ✔ Single-window coordination across technical and regulatory
                tracks
              </li>
              <li>✔ Structured milestone governance for complex initiatives</li>
              <li>
                ✔ Practical experience with India-focused project environments
              </li>
              <li>✔ Reduced execution risk and approval-related delays</li>
              <li>
                ✔ Strong focus on operational outcomes, not just task completion
              </li>
            </ul>
          </div>

          {/* Closing */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-3">
              Turn Projects into Operational Assets
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Whether you are launching an IT platform, investing in India, or
              setting up a licensed industrial facility, our Project Management
              Consulting service provides the execution discipline required to
              move from approval to operations—efficiently, practically, and
              compliantly.
            </p>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="w-full mt-6">
          <Image
            src="/Images/services/project-management.png"
            alt="Project Management Consulting Services"
            width={1920}
            height={600}
            className="w-full aspect-[16/9] object-cover rounded-lg"
            priority
          />
        </div>
      </section>

      {/*  CTA */}
      <section className="bg-orange-500 text-white py-16 text-center px-6">
        <h4 className="text-3xl font-bold mb-4">Ready to Expand Globally?</h4>
        <p className="mb-6 text-white/90">
          Let us simplify your international trade journey with expert
          solutions.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
