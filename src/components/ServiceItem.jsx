import React from 'react'

function ServiceItem() {
  return (
      <section className="bg-[#F5F0E8] py-16 text-[#333]">
          <div className="max-w-6xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-12">
              <p className="text-sm text-[#8B6B4A] uppercase mb-2 tracking-wide">— Recent Projects</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-[#8B6B4A]">Completed Projects</span>
              </h2>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-[#a47454] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="rounded-xl overflow-hidden mb-4 aspect-[4/3]">
                  <img
                    src="/bg-ServiceItem.png"
                    alt="The Business Hub"
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2 leading-0.5">The Business Hub</h3>
                {/* <p className="text-sm text-white/80 mb-4">
                  Modern workspace designed for productivity and collaboration
                </p>
                <ul className="text-sm text-white/70 space-y-1 mb-4">
                  <li>📍 Central Location</li>
                  <li>📏 120 sqm workspace</li>
                  <li>⏱ Mon–Fri, 9AM–6PM</li>
                </ul> */}
                <div className="mt-auto flex justify-between items-center">
                  <a
                    href="#"
                    className="text-white hover:underline hover:text-gary=100 transition flex items-center group"
                  >
                    Learn more
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <span className="text-white font-bold text-3xl bg-[#8B6B4A]/80 px-3 py-1 rounded-full">
                    $199<span className="text-xl font-normal">/day</span>
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#a47454] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="rounded-xl overflow-hidden mb-4 aspect-[4/3]">
                  <img
                    src="/bg2-ServiceItem.png"
                    alt="Sky Haven"
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2 leading-0.5">Sky Haven</h3>
                {/* <p className="text-sm text-white/80 mb-4">
                  Luxury retreat with panoramic mountain views and premium amenities
                </p>
                <ul className="text-sm text-white/70 space-y-1 mb-4">
                  <li>• 3 Bedrooms, 2 Bathrooms</li>
                  <li>• Private Infinity Pool</li>
                  <li>• Mountain View Terrace</li>
                </ul> */}
                <div className="mt-auto flex justify-between items-center">
                  <a
                    href="#"
                    className="text-white hover:underline hover:text-gray-100 transition flex items-center group"
                  >
                    Learn more
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <span className="text-white font-bold text-3xl bg-[#8B6B4A]/80 px-3 py-1 rounded-full">
                    $299<span className="text-xl font-normal">/night</span>
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <button className="inline-block bg-[#8B6B4A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#6e5134] transition hover:shadow-lg">
                View All Projects
              </button>
            </div>
          </div>
        </section>
    )
  }
                




export default ServiceItem