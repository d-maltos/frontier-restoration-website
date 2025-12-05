import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Frontier Restoration LLC | Fairbanks Restoration Experts",
  description:
    "Learn about Frontier Restoration LLC, your trusted local restoration company in Fairbanks, Alaska. IICRC certified team with over 10 years of experience in water damage, fire damage, and mold remediation.",
  openGraph: {
    title: "About Us | Frontier Restoration LLC",
    description:
      "Learn about Frontier Restoration LLC, your trusted local restoration company in Fairbanks, Alaska.",
    url: "https://frontierrestorationllc.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Page Title */}
      <section className="bg-black py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 text-center">
            About Us
          </h1>
        </div>
      </section>

      {/* Mission Statement Section with Background Image */}
      <section className="relative min-h-[600px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Placeholder for background image - replace with actual image when available */}
          {/* 
          <Image
            src="/about-background.jpg"
            alt="City buildings background"
            fill
            className="object-cover"
            priority
          />
          */}
          <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black" />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>

        {/* Mission Statement Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">
              Mission Statement
            </h2>
            <div className="bg-black/60 backdrop-blur-sm p-8 sm:p-12 rounded-lg border border-white/10">
              <p className="text-lg sm:text-xl text-white leading-relaxed">
                At Frontier Restoration LLC, our mission is to provide
                exceptional restoration services with integrity, expertise, and
                compassion. We are dedicated to restoring properties and peace of
                mind by delivering efficient, high-quality solutions for fire,
                water, mold, and storm damage. Our commitment to customer
                satisfaction and our prompt response ensure that every client can
                return to their home or business with confidence, knowing their
                property has been restored to its pre-loss condition or better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-12 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder for team member cards */}
              {[
                { name: "Team Member", role: "IICRC Certified Specialist" },
                { name: "Team Member", role: "Project Manager" },
                { name: "Team Member", role: "Restoration Specialist" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800"
                >
                  <div className="relative h-64 bg-gradient-to-br from-gray-700 to-gray-900">
                    {/* Placeholder for team member photo */}
                    {/* 
                    <Image
                      src={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/30 text-xl font-bold">
                        {member.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="bg-gray-900 py-12 sm:py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
              Whether it&apos;s mitigating mold, water damage or addressing the
              aftermath of a fire or freeze, our IICRC certified team will ensure
              that we adhere to leading industry practices, providing effective and
              safe restoration to minimize property damage.
            </p>
            <p className="text-base sm:text-lg text-gray-400">
              Serving Fairbanks, North Pole, Eielson, Fort Wainwright, and
              surrounding areas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
