import Link from "next/link";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  imagePlaceholder: string;
}

const services: Service[] = [
  {
    title: "Water Damage Restoration",
    description:
      "Our team of experts is proficient in identifying all types of water damage, both visible and hidden. Utilizing advanced tools such as moisture detectors and hygrometers, we conduct thorough inspections to ensure no damage goes undetected, whether it is in walls, floors, or ceilings. This gives you peace of mind that your property is fully evaluated.",
    imagePlaceholder: "water-damage",
  },
  {
    title: "Fire Damage Restoration",
    description:
      "Our certified experts conduct a comprehensive assessment of the total fire damage, meticulously evaluating the various effects caused by smoke, intense heat, and ash residue left behind. This thorough analysis ensures that all aspects of the damage are identified and addressed appropriately.",
    imagePlaceholder: "fire-damage",
  },
  {
    title: "Mold Remediation",
    description:
      "Frontier Restoration LLC is committed to providing a comprehensive solution for mold remediation that not only tackles existing mold issues but also helps prevent future occurrences. Our approach is designed to protect both the health of building occupants and the integrity of residential and commercial properties.",
    imagePlaceholder: "mold-remediation",
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-4">
            Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-800"
            >
              {/* Service Image */}
              <div className="relative h-64 sm:h-72 bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src={`/images/${service.imagePlaceholder}.png`}
                  alt={`${service.title}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Service Content */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col">
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-colors duration-200 mt-auto"
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
