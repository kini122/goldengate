export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gold/5 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Get to Know Us
          </h1>
          <p className="text-xl text-gray-600">
            Your Preferred Interior Design Studio
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Golden Gate Curtains were founded in 1992 to provide a
                productive outlet for creative and skilled textile design. We
                make sure to stay at the forefront of all the latest trends so
                we can provide our clients with modern and stylish textile
                designs.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From conceptualization to the final outcomes, each design
                process is completely unique and tailored to suit the specific
                needs of the client. Get in touch to find out more about our
                design services, and let's start working together today.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gold/5 p-6 rounded-sm">
                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">
                    Curtains & Drapes
                  </h3>
                  <p className="text-gray-600">
                    Premium quality curtains and drapes for every room and
                    style.
                  </p>
                </div>
                <div className="bg-gold/5 p-6 rounded-sm">
                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">
                    Blinds & Shades
                  </h3>
                  <p className="text-gray-600">
                    Modern blind solutions for light control and privacy.
                  </p>
                </div>
                <div className="bg-gold/5 p-6 rounded-sm">
                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">
                    Upholstery
                  </h3>
                  <p className="text-gray-600">
                    Expert upholstery services for furniture and décor items.
                  </p>
                </div>
                <div className="bg-gold/5 p-6 rounded-sm">
                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">
                    Interior Design
                  </h3>
                  <p className="text-gray-600">
                    Complete interior design solutions tailored to your style.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-gold font-bold">✓</span>
                  <span className="text-gray-600">
                    Over 30 years of experience in textile design and interior
                    decoration
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold">✓</span>
                  <span className="text-gray-600">
                    Custom designs tailored to your specific needs and
                    preferences
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold">✓</span>
                  <span className="text-gray-600">
                    Quality materials and expert craftsmanship
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold">✓</span>
                  <span className="text-gray-600">
                    Professional consultation and design process
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold">✓</span>
                  <span className="text-gray-600">
                    Commitment to customer satisfaction
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
