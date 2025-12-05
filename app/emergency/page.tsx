import Link from "next/link";

export default function EmergencyPage() {
  const emergencyChecklist = [
    "Turn off the main water supply if it's a water emergency",
    "Turn off electricity to affected areas if safe to do so",
    "Remove valuable items from the affected area",
    "Don't attempt to clean up large amounts of water yourself",
    "Take photos of the damage for insurance purposes",
    "Call us immediately at (907) 987-2916",
  ];

  const responseProcess = [
    {
      step: 1,
      title: "Immediate Phone Assessment",
      description:
        "We'll assess your situation over the phone and provide immediate guidance on what to do next.",
    },
    {
      step: 2,
      title: "On-site Within 2 Hours",
      description:
        "Our certified technicians will arrive at your property within 2 hours of your call, ready to begin mitigation.",
    },
    {
      step: 3,
      title: "Moisture Mapping",
      description:
        "Using advanced moisture detection equipment, we'll identify all affected areas, including hidden damage.",
    },
    {
      step: 4,
      title: "Extraction & Drying",
      description:
        "We'll quickly extract standing water and set up professional drying equipment to prevent further damage.",
    },
    {
      step: 5,
      title: "Photo Documentation for Insurance",
      description:
        "We'll document everything with detailed photos and reports to streamline your insurance claim process.",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              24/7 Emergency Response
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-red-100">
              We&apos;re here when you need us most. Fast, professional
              restoration services available 24/7.
            </p>
            <a
              href="tel:9079872916"
              className="inline-block px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2 mx-auto"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now: (907) 987-2916
            </a>
          </div>
        </div>
      </section>

      {/* What to Do Right Now Section */}
      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-8 text-center">
              What to Do Right Now
            </h2>
            <div className="bg-gray-800 border-l-4 border-yellow-400 p-6 sm:p-8 rounded-lg">
              <ul className="space-y-4">
                {emergencyChecklist.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-white text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Guarantee */}
      <section className="py-12 sm:py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">
                Response Time Guarantee
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                We understand emergencies can&apos;t wait. That&apos;s why we
                guarantee to be on-site within{" "}
                <span className="font-bold text-yellow-400">2 hours</span> of
                your call, 24 hours a day, 7 days a week.
              </p>
              <p className="text-lg text-gray-400">
                Our team is always ready to respond to water damage, fire damage,
                mold issues, and other restoration emergencies throughout
                Fairbanks and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Process */}
      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-12 text-center">
              Our Emergency Response Process
            </h2>
            <div className="space-y-8">
              {responseProcess.map((process, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-6 items-start"
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center text-2xl font-bold">
                      {process.step}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {process.title}
                    </h3>
                    <p className="text-lg text-gray-300">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Don&apos;t Wait - Call Now
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Every minute counts in an emergency. Our certified technicians are
              standing by 24/7 to help restore your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9079872916"
                className="px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call (907) 987-2916
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-lg rounded-lg shadow-lg transition-colors duration-200"
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

