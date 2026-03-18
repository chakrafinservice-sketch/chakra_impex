import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Chakra Trading Impex | Export & Import Company in Hyderabad",
  description:
    "Learn about Chakra Trading Impex, a Hyderabad-based export and import company providing global trade solutions, compliance-led documentation, logistics coordination, and trade facilitation services.",

  keywords: [
    "Chakra Trading Impex",
    "export import company Hyderabad",
    "international trade company India",
    "global trade solutions India",
    "trade facilitation services",
    "import export business Hyderabad",
    "logistics and compliance services India",
    "commodity sourcing India",
  ],

  openGraph: {
    title: "About Chakra Trading Impex",
    description:
      "Hyderabad-based export and import company offering global trade, logistics, compliance, and sourcing services.",
    url: "https://www.chakratradingimpex.com/about",
    siteName: "Chakra Trading Impex",
    images: [
      {
        url: "/logo.png", // update with your actual image
        width: 1200,
        height: 630,
        alt: "Chakra Trading Impex - Global Trade Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Chakra Trading Impex",
    description:
      "Trusted export-import partner providing global trade, compliance, and logistics solutions.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
