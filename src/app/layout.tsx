import type { Metadata } from "next";
import { Montserrat, UnifrakturMaguntia } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const blackletter = UnifrakturMaguntia({
  variable: "--font-blackletter",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Eleanor Proof Calculator | Crowded Barrel Whiskey Co.",
  description:
    "Calculate how much water to add to your pour of Eleanor Straight Bourbon Whiskey to reach your desired proof. Batch 19A & 19B A/B Release.",
  openGraph: {
    title: "Eleanor Proof Calculator",
    description:
      "Find your perfect proof for Eleanor Batch 19A & 19B — Crowded Barrel Whiskey Co.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${blackletter.variable} antialiased`}>{children}</body>
    </html>
  );
}
