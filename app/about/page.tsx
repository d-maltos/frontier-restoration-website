import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const coreValues = [
    {
      name: "Honesty",
      description:
        "We believe in transparent communication and honest assessments. You'll always know exactly what needs to be done and what it will cost.",
    },
    {
      name: "Integrity",
      description:
        "We stand behind our work and do what's right, even when no one is watching. Our reputation is built on trust and reliability.",
    },
    {
      name: "Respect",
      description:
        "We treat your property and your family with the utmost respect. We understand that restoration work can be disruptive, and we work to minimize that impact.",
    },
    {
      name: "Accountability",
      description:
        "We take full responsibility for our work. If something isn't right, we'll make it right—no questions asked.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              About Frontier Restoration LLC
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100">
              Your trusted local restoration experts in Fairbanks, Alaska
            </p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Frontier Restoration LLC was built right here in Fairbanks,
                Alaska, by people who understand the unique challenges of
                property restoration in the Last Frontier. We know firsthand what
                it means to deal with water damage in sub-zero temperatures,
                the impact of permafrost on foundations, and the importance of
                proper humidity control during our harsh winters.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our company was founded with a simple mission: to provide
                fast, reliable, and professional restoration services to our
                neighbors throughout Fairbanks, North Pole, Eielson, Fort
                Wainwright, and the surrounding areas. We&apos;re not just
                another contractor—we&apos;re your neighbors, and we treat
                your property like it&apos;s our own.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 10 years of combined experience and IICRC
                certifications, our team brings industry-leading expertise to
                every job. But more importantly, we bring a commitment to
                honesty, integrity, and doing the job right the first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Core Values */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Mission Statement */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                To restore properties and rebuild communities with integrity,
                professionalism, and a commitment to excellence. We&apos;re
                dedicated to helping our neighbors recover from disasters and
                return their properties to pre-loss condition.
              </p>
            </div>

            {/* Core Values */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-2xl font-bold text-blue-600 mb-3">
                      {value.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              The Frontier Restoration Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder for team photos - replace with actual images */}
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
                >
                  <div className="relative h-64 bg-gradient-to-br from-blue-400 to-gray-400">
                    {/* Placeholder for team member photo */}
                    {/* 
                    <Image
                      src={`/team/team-member-${item}.jpg`}
                      alt={`Team member ${item}`}
                      fill
                      className="object-cover"
                    />
                    */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/50 text-2xl font-bold">
                        Team Photo
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Team Member {item}
                    </h3>
                    <p className="text-gray-600">
                      IICRC Certified Restoration Specialist
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8 text-lg">
              Our certified team is ready to help restore your property 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-12 sm:py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Built for Fairbanks, Built by Fairbanks
            </h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              We understand the unique challenges of property restoration in
              Alaska. From permafrost considerations to sub-zero humidity
              impacts, our team has the local knowledge and expertise to handle
              any restoration challenge in the Interior.
            </p>
            <p className="text-lg mb-8 text-blue-100">
              Serving Fairbanks, North Pole, Eielson, Fort Wainwright, and
              surrounding areas.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

