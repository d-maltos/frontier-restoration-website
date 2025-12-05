import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Water Damage, Fire Damage & Mold Remediation Fairbanks",
  description:
    "Comprehensive restoration services in Fairbanks, Alaska: Water damage mitigation, fire damage restoration, mold remediation, structural drying, and more. 24/7 emergency response.",
  keywords: [
    "water damage restoration Fairbanks",
    "fire damage restoration Fairbanks",
    "mold remediation Fairbanks",
    "structural drying Fairbanks",
    "sewage backup cleanup Fairbanks",
  ],
  openGraph: {
    title: "Services | Frontier Restoration LLC",
    description:
      "Comprehensive restoration services in Fairbanks, Alaska: Water damage, fire damage, and mold remediation.",
    url: "https://frontierrestorationllc.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 text-center mb-8">
            Services
          </h1>
          <p className="text-white text-center text-lg">
            Our services page is coming soon. For now, see our services on the{" "}
            <a href="/" className="text-yellow-400 hover:underline">
              home page
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

