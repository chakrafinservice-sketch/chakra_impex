import "./globals.css";

export const metadata = {
  title: {
    default: "Chakra Trading Impex | Export & Import Company in Hyderabad",
    template: "%s | Chakra Trading Impex",
  },

  description:
    "Chakra Trading Impex is a Hyderabad-based export and import company providing global trade solutions including logistics, compliance, sourcing, trade facilitation, and project management consulting.",

  keywords: [
    "export import company Hyderabad",
    "international trade company India",
    "global trade solutions India",
    "import export services Hyderabad",
    "trade facilitation services India",
    "logistics and freight forwarding India",
    "customs clearance services India",
    "commodity sourcing India",
    "project management consulting India",
  ],

  metadataBase: new URL("https://www.chakratradingimpex.com"),

  openGraph: {
    title: "Chakra Trading Impex | Global Trade Solutions",
    description:
      "End-to-end export and import services including logistics, compliance, sourcing, and trade facilitation for global businesses.",
    url: "https://www.chakratradingimpex.com",
    siteName: "Chakra Trading Impex",
    images: [
      {
        url: "/images/hero2-bg.png",
        width: 1200,
        height: 630,
        alt: "Chakra Trading Impex - Export Import Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chakra Trading Impex",
    description:
      "Global export-import services, logistics, compliance, and trade consulting.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0CSBQXSY0R');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <div className="pt-10">{children}</div>
      </body>
    </html>
  );
}
