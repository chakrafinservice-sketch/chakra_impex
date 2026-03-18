import ProductsClient from "./ProductsClient";


export const metadata = {
  title:
    "Export Import Products | Agro, FMCG, Industrial Goods | Chakra Trading Impex",
  description:
    "Explore export and import products by Chakra Trading Impex including agro commodities, food & FMCG, industrial raw materials, textiles, pharma, electronics, and auto parts for global trade.",

  keywords: [
    "export products India",
    "import export products Hyderabad",
    "agro commodities export India",
    "FMCG export import India",
    "industrial raw materials export",
    "textiles export India",
    "pharma products export India",
    "electronics auto parts export import",
    "global trade products India",
  ],

  alternates: {
    canonical: "https://www.chakratradingimpex.com/products",
  },

  openGraph: {
    title: "Export Import Products | Chakra Trading Impex",
    description:
      "Agro commodities, FMCG, industrial materials, textiles, pharma, and electronics for global export and import.",
    url: "https://www.chakratradingimpex.com/products",
    siteName: "Chakra Trading Impex",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Chakra Trading Impex Products",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Export Import Products | Chakra Trading Impex",
    description:
      "Global trade products including agro, FMCG, industrial materials, textiles, pharma, and electronics.",
  },
};

export default function ServicesPage() {
  return <ProductsClient/>;
}