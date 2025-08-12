export default function NewArrivals() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            New Arrivals & Swap Offers
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Explore our top picks – verified phones, tablets, and laptops at unbeatable prices. Available for purchase or swap. Limited stock!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Android to iPhone */}
          
          <div className="text-center flex flex-col items-center">
          <a href="https://www.instagram.com/iclassicstore/p/C3OYOjlqBMM/" target="_blank">
            <div className="flex gap-4 mb-8">
              <img
                src="\images\Newarrivals\Samsung-Galaxy-S25-Plus.jpg"
                alt="Samsung Galaxy S25 Plus"
                className="rounded-lg w-36 h-48 object-cover"
              />
              <img
                src="\images\Newarrivals\iphone-13-select-2021.jpg"
                alt="iPhone 13"
                className="rounded-lg w-36 h-48 object-cover"
              />
            </div></a>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Android to iPhone
            </h3>
            <p className="text-gray-600 text-lg text-center px-2">
              Buy, sell & swap top brands like iPhone, Samsung, Pixel
            </p>
          </div>

          {/* Windows to Mac */}
          <div className="text-center flex flex-col items-center">
          <a href="https://www.instagram.com/iclassicstore/p/DBLw3wEqR9w/" target="_blank">
            <div className="mb-8">
              <img
                src="\images\Newarrivals\latop.jpg"
                alt="Laptop with colorful display"
                className="rounded-lg w-72 h-48 object-cover"
              />
            </div> </a>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Windows to Mac
            </h3>
            <p className="text-gray-600 text-lg text-center px-2">
              MacBooks, Windows laptops – verified & affordable
            </p>
          </div>

          {/* Tablets */}
          <div className="text-center flex flex-col items-center">
          <a href="https://www.instagram.com/iclassicstore/p/DEhdSAqtTnL/" target="_blank">
            <div className="mb-8">
              <img
                src="\images\Newarrivals\ipad 2 1.jpg"
                alt="iPad and Samsung Tablets"
                className="rounded-lg w-72 h-48 object-cover"
              />
            </div></a>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Tablets
            </h3>
            <p className="text-gray-600 text-lg text-center px-2">
              iPads, Samsung Tabs, and more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
