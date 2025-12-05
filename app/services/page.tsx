import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Water Damage Restoration",
    description:
      "Our team of experts is proficient in identifying all types of water damage, both visible and hidden. Utilizing advanced tools such as moisture detectors and hygrometers, we conduct thorough inspections to ensure no damage goes undetected, whether it is in walls, floors, or ceilings. This gives you peace of mind that your property is fully evaluated.",
    imagePlaceholder: "water-damage",
    imageSide: "left" as const,
  },
  {
    title: "Fire Damage Restoration",
    description:
      "Our certified experts conduct a comprehensive assessment of the total fire damage, meticulously evaluating the various effects caused by smoke, intense heat, and ash residue left behind. This thorough analysis ensures that all aspects of the damage are identified and addressed appropriately.",
    imagePlaceholder: "fire-damage",
    imageSide: "right" as const,
  },
  {
    title: "Mold Remediation",
    description:
      "Frontier Restoration LLC is committed to providing a comprehensive solution for mold remediation that not only tackles existing mold issues but also helps prevent future occurrences. Our approach is designed to protect both the health of building occupants and the integrity of residential and commercial properties.",
    imagePlaceholder: "mold-remediation",
    imageSide: "left" as const,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Page Title */}
      <section className="bg-black py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 text-center">
            Services
          </h1>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`py-12 sm:py-16 ${
            index % 2 === 0 ? "bg-gray-900" : "bg-black"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                service.imageSide === "right" ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image Section */}
              <div
                className={`relative h-96 lg:h-[500px] rounded-lg overflow-hidden ${
                  service.imageSide === "right" ? "lg:col-start-2" : ""
                }`}
              >
                {/* Placeholder for service image - replace with actual image when available */}
                {/* 
                <Image
                  src={`/services/${service.imagePlaceholder}.jpg`}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <span className="text-white/30 text-2xl font-bold uppercase text-center px-4">
                    {service.imagePlaceholder.replace("-", " ")}
                  </span>
                </div>
              </div>

              {/* Text Content Section */}
              <div
                className={`bg-yellow-400 p-8 sm:p-12 rounded-lg shadow-lg ${
                  service.imageSide === "right" ? "lg:col-start-1" : ""
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                  {service.title}
                </h2>
                <div className="h-1 w-16 bg-black mb-6"></div>
                <p className="text-black text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services Overview */}
      <section className="bg-gray-900 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-8 text-center">
              All Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Mitigation Services */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">
                  Mitigation
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Water Damage Mitigation</li>
                  <li>• Structural Drying (IICRC S500)</li>
                  <li>• Mold Remediation (IICRC S520)</li>
                  <li>• Sewage Backup Cleanup</li>
                </ul>
              </div>

              {/* Restoration Services */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">
                  Restoration / Rebuild
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Drywall, Trim, Flooring</li>
                  <li>• Painting</li>
                  <li>• Cabinet & Finish Work</li>
                </ul>
              </div>

              {/* Specialty Services */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">
                  Specialty Services
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Air Quality Testing</li>
                  <li>• Microbial Growth Inspections</li>
                  <li>• Fire & Smoke Damage</li>
                  <li>• Ozone Deodorization</li>
                  <li>• Content Cleaning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">
              Need Help? We&apos;re Here 24/7
            </h2>
            <p className="text-white text-lg mb-8">
              Our certified team is ready to help restore your property. Call us
              anytime for emergency response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9079872916"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-200"
              >
                Call Now: (907) 987-2916
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-colors duration-200"
              >
                Request Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
