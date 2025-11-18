import React from 'react';

// Define the custom colors for easy reference in classes
const ACCENT_BG = 'bg-[#354F2C]'; // Deep Green for buttons/accents
const ACCENT_TEXT = 'text-[#354F2C]'; // Deep Green for text
const PRIMARY_BG = 'bg-[#EDE7B5]'; // Light Beige for main background
const PRIMARY_TEXT = 'text-gray-900'; // Darker text for readability

const Home = () => {
  return (
    // Main container uses your primary background color
    <div className={`min-h-screen ${PRIMARY_BG}`}>
      
      {/* 1. Hero Section - Focus on Product/Discovery */}
      <header className={`bg-white shadow-md py-16 sm:py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl font-extrabold tracking-tight ${PRIMARY_TEXT} sm:text-6xl`}>
            Discover <span className={ACCENT_TEXT}>Curated Finds</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Hand-picked products for your sustainable lifestyle. Quality, craft, and conscience in every collection.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <a
              href="#products"
              className={`px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${ACCENT_BG} hover:opacity-90 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out shadow-lg`}
            >
              Shop All Products
            </a>
            <a
              href="#collections"
              className={`px-8 py-3 border border-2 ${ACCENT_TEXT} text-base font-medium rounded-md ${ACCENT_TEXT} bg-white hover:${PRIMARY_BG} md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out`}
            >
              View Collections
            </a>
          </div>
        </div>
      </header>
      
      {/* 2. Featured Product Categories/Cards */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-base ${ACCENT_TEXT} font-semibold tracking-wide uppercase`}>Explore Our Range</h2>
            <p className={`mt-2 text-3xl font-extrabold ${PRIMARY_TEXT} sm:text-4xl`}>
              Shop by Category
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Category Card 1: Apparel */}
            <div className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                {/*  */}
                <img src="two.jpg" alt="Sustainable Apparel" className="w-full h-48 object-cover group-hover:scale-105 transition duration-500 ease-in-out"/>
              </div>
              <div className={`p-4 text-center ${PRIMARY_BG}`}>
                <h3 className={`text-xl font-semibold ${ACCENT_TEXT}`}>Apparel</h3>
                <p className="mt-1 text-sm text-gray-600">Ethically Sourced</p>
              </div>
            </div>

            {/* Category Card 2: Home Goods */}
            <div className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                {/*  */}
                <img src="five.jpg" alt="Handcrafted Home Goods" className="w-full h-48 object-cover group-hover:scale-105 transition duration-500 ease-in-out"/>
              </div>
              <div className={`p-4 text-center ${PRIMARY_BG}`}>
                <h3 className={`text-xl font-semibold ${ACCENT_TEXT}`}>Home & Living</h3>
                <p className="mt-1 text-sm text-gray-600">Artisan Crafted</p>
              </div>
            </div>
            
            {/* Category Card 3: Wellness */}
            <div className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                {/*  */}
                <img src="/third.jpg" alt="Natural Wellness Products" className="w-full h-48 object-cover group-hover:scale-105 transition duration-500 ease-in-out"/>
              </div>
              <div className={`p-4 text-center ${PRIMARY_BG}`}>
                <h3 className={`text-xl font-semibold ${ACCENT_TEXT}`}>Wellness</h3>
                <p className="mt-1 text-sm text-gray-600">All Natural</p>
              </div>
            </div>

            {/* Category Card 4: Accessories */}
            <div className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                {/*  */}
                <img src="fourth.jpg" alt="Unique Accessories" className="w-full h-48 object-cover group-hover:scale-105 transition duration-500 ease-in-out"/>
              </div>
              <div className={`p-4 text-center ${PRIMARY_BG}`}>
                <h3 className={`text-xl font-semibold ${ACCENT_TEXT}`}>Accessories</h3>
                <p className="mt-1 text-sm text-gray-600">Limited Edition</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. Call-to-Action (CTA) Section - Newsletter Signup */}
      <section id="collections" className={`${ACCENT_BG}`}>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Don't Miss Out!</span>
              <span className="block text-[#EDE7B5]">Get 10% Off Your First Order.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="/signup" // Assuming a signup route
                  className={`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${ACCENT_TEXT} bg-white hover:${PRIMARY_BG}`}
                >
                  Sign Up for Exclusive Offers
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Home;