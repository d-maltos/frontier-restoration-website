export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 text-center mb-8">
            Contact Us
          </h1>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white text-lg mb-8">
              Contact page coming soon. Call us now for immediate assistance.
            </p>
            <a
              href="tel:9079872916"
              className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-colors duration-200"
            >
              Call Now: (907) 987-2916
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

