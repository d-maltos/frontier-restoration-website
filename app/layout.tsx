import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

export const metadata: Metadata = {
  title: "Frontier Restoration LLC | Fairbanks' Fast, Trusted Restoration Experts",
  description: "24/7 Emergency Response • Licensed • IICRC Certified. Serving Fairbanks, North Pole, Eielson, Fort Wainwright & surrounding areas.",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  );
}

