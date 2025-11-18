import React from 'react';

// Define the custom colors based on the theme
const ACCENT_BG = 'bg-[#354F2C]'; // Deep Green
const ACCENT_TEXT = 'text-[#354F2C]'; // Deep Green
const PRIMARY_BG = 'bg-[#EDE7B5]'; // Light Beige

const About = () => {
  return (
    <div className={`py-16 sm:py-24 ${PRIMARY_BG}`}>
      
      {/* 1. Header and Opening Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-5xl font-extrabold tracking-tight ${ACCENT_TEXT} sm:text-6xl`}>
          Our Story & Commitment
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-700">
          We believe that every purchase should be a conscious choice. We're more than just a shop—we're a community dedicated to quality, craftsmanship, and a slower, more intentional way of living.
        </p>
      </div>

      {/* 2. Brand Story / Founder's Note */}
      <section className="mt-16 bg-white shadow-xl rounded-lg p-8 sm:p-12 max-w-5xl mx-auto">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <h2 className={`text-3xl font-bold ${ACCENT_TEXT} mb-4`}>
              The Beginning: Rooted in Quality
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Our journey started with a simple search for products that lasted longer than a season, products that had a **story**. Tired of mass-produced goods, our founder, [Founder's Name], began sourcing from small artisans and ethical manufacturers who shared a commitment to quality materials and fair practices.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Today, our shop is the culmination of that passion: a curated selection of sustainable apparel, handcrafted home goods, and natural wellness products. We vet every item for its **provenance, durability, and positive impact**.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-1 flex items-center justify-center">
            {/*  */}
            <div className={`p-4 rounded-full border-4 border-[#EDE7B5] ${ACCENT_BG} text-white text-center font-semibold w-40 h-40 flex items-center justify-center`}>
                <span className="text-sm uppercase tracking-wider">A Community of Makers</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Mission and Values */}
      <section className="mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-center text-4xl font-extrabold ${ACCENT_TEXT} mb-12`}>
            Our Guiding Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Value 1: Sustainability */}
            <div className="text-center p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition duration-300">
              <span className={`inline-block p-3 rounded-full ${ACCENT_BG} text-white`}>
                {/* Leaf icon placeholder */}
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.666 0 2.992-.767 3.96-1.554.558-.45.892-.816.892-1.186 0-.37-.334-.736-.892-1.186C14.992 3.767 13.666 3 12 3S9.008 3.767 8.04 4.554c-.558.45-.892.816-.892 1.186 0 .37.334.736.892 1.186C9.008 7.233 10.334 8 12 8z"></path></svg>
              </span>
              <h3 className={`mt-4 text-xl font-bold ${ACCENT_TEXT}`}>Sustainability</h3>
              <p className="mt-2 text-gray-600">
                We prioritize eco-friendly materials, minimal waste, and carbon-neutral shipping wherever possible. Good for you, good for the planet.
              </p>
            </div>

            {/* Value 2: Transparency */}
            <div className="text-center p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition duration-300">
              <span className={`inline-block p-3 rounded-full ${ACCENT_BG} text-white`}>
                {/* Eye icon placeholder */}
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </span>
              <h3 className={`mt-4 text-xl font-bold ${ACCENT_TEXT}`}>Transparency</h3>
              <p className="mt-2 text-gray-600">
                We share the story behind every product, including where it’s made and who made it, ensuring **ethical sourcing** is at the forefront.
              </p>
            </div>

            {/* Value 3: Craftsmanship */}
            <div className="text-center p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition duration-300">
              <span className={`inline-block p-3 rounded-full ${ACCENT_BG} text-white`}>
                {/* Hand icon placeholder */}
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10m0 0v10M7 7v10m0-10l-3 3M17 7l3 3"></path></svg>
              </span>
              <h3 className={`mt-4 text-xl font-bold ${ACCENT_TEXT}`}>Lasting Craftsmanship</h3>
              <p className="mt-2 text-gray-600">
                We champion quality over quantity. Our products are investments, built to be loved and used for years, not weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Call to Action - Invitation */}
      <section className="mt-20">
        <div className={`max-w-3xl mx-auto p-10 text-center rounded-lg ${ACCENT_BG} shadow-2xl`}>
            <h3 className="text-3xl font-bold text-[#EDE7B5]">Join Our Intentional Community</h3>
            <p className="mt-4 text-lg text-white">
                Ready to shop with purpose? Explore our full collection and find your next lasting favorite.
            </p>
            <a
                href="/shop" 
                className={`mt-6 inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md ${ACCENT_TEXT} bg-white hover:${PRIMARY_BG} transition duration-150 ease-in-out`}
            >
                Shop Our Curated Products
            </a>
        </div>
      </section>
      
    </div>
  );
}

export default About;