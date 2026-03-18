import ServicesClient from "./ServicesClient";

export const metadata = {
  title:
    "Import Export Services | Trade Facilitation & Logistics | Chakra Trading Impex",

  description:
    "Chakra Trading Impex offers end-to-end import export services in Hyderabad including global logistics, trade facilitation, compliance management, sourcing, and project management consulting for international trade.",

  keywords: [
    "import export services Hyderabad",
    "international trade services India",
    "trade facilitation services",
    "export import consultancy Hyderabad",
    "global logistics services India",
    "customs clearance services India",
    "freight forwarding Hyderabad",
    "project management consulting India",
    "international trade advisory",
  ],

  alternates: {
    canonical: "https://www.chakratradingimpex.com/services",
  },

  openGraph: {
    title: "Import Export & Trade Services | Chakra Trading Impex",
    description:
      "End-to-end international trade solutions including import-export services, logistics, compliance, trade facilitation, and project consulting.",
    url: "https://www.chakratradingimpex.com/services",
    siteName: "Chakra Trading Impex",
    images: [
      {
        url: "/logo.png", 
        width: 1200,
        height: 630,
        alt: "Import Export Services - Chakra Trading Impex",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Import Export Services | Chakra Trading Impex",
    description:
      "Global trade solutions including logistics, compliance, sourcing, and consulting.",
  },
};

export default function ServicesPage() {
  return <ServicesClient/>;
}