import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontier Restoration LLC | Fairbanks' Fast, Trusted Restoration Experts",
  description: "24/7 Emergency Response • Licensed • IICRC Certified. Serving Fairbanks, North Pole, Eielson, Fort Wainwright & surrounding areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

