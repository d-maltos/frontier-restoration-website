import Link from "next/link";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  items: string[];
  imagePlaceholder: string;
}

const services: Service[] = [
  {
    title: "Mitigation",
    description: "Fast response to prevent further damage and protect your property.",
    items: [
      "Water Damage Mitigation",
      "Structural Drying (IICRC S500)",
      "Mold Remediation (IICRC S520)",
      "Sewage Backup Cleanup",
    ],
    imagePlaceholder: "mitigation",
  },
  {
    title: "Restoration / Rebuild",
    description: "Complete restoration services to bring your property back to pre-loss condition.",
    items: [
      "Drywall, Trim, Flooring",
      "Painting",
      "Cabinet & Finish Work",
    ],
    imagePlaceholder: "restoration",
  },
  {
    title: "Specialty Services",
    description: "Advanced services for comprehensive property care and safety.",
    items: [
      "Air Quality Testing",
      "Microbial Growth Inspections",
      "Fire & Smoke Damage",
      "Ozone Deodorization",
      "Content Cleaning",
    ],
    imagePlaceholder: "specialty",
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive restoration services for water, mold, fire, and more.
            We&apos;re here to help restore your property quickly and professionally.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Service Image */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-blue-600 to-gray-700">
                {/* Placeholder for service image - replace with actual image when available */}
                {/* 
                <Image
                  src={`/services/${service.imagePlaceholder}.jpg`}
                  alt={`${service.title} services`}
                  fill
                  className="object-cover"
                />
                */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/30 text-4xl font-bold uppercase">
                    {service.imagePlaceholder}
                  </span>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-base sm:text-lg">
                  {service.description}
                </p>

                {/* Service Items List */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start text-gray-700 text-sm sm:text-base"
                    >
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-200 mt-auto"
                >
                  Get Help Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

