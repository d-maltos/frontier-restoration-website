import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export const metadata = {
  title: "Water Damage Fairbanks | Mold Remediation | Fire Damage Restoration",
  description:
    "Frontier Restoration LLC: 24/7 emergency water damage, fire damage, and mold remediation services in Fairbanks, Alaska. IICRC certified, licensed restoration contractor serving Fairbanks, North Pole, Eielson, and Fort Wainwright.",
  keywords: [
    "water damage Fairbanks",
    "mold remediation Fairbanks",
    "fire damage cleanup Fairbanks",
    "restoration contractor Fairbanks",
    "water damage restoration Alaska",
    "emergency restoration Fairbanks",
  ],
  openGraph: {
    title: "Frontier Restoration LLC | Fairbanks' Fast, Trusted Restoration Experts",
    description:
      "24/7 Emergency Response • Licensed • IICRC Certified. Serving Fairbanks, North Pole, Eielson, Fort Wainwright & surrounding areas.",
    url: "https://frontierrestorationllc.com",
    siteName: "Frontier Restoration LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <main className="min-h-screen bg-black">
        <Hero />
        <WhyChooseUs />
        <Services />
      </main>
    </>
  );
}

