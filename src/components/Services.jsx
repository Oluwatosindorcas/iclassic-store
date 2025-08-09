import { MessageCircle } from 'lucide-react'

export default function Services() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4 md:mb-6">
            Our Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
            Everything you need — from buying new gadgets to swapping and upgrading your devices, all in one trusted store.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          {/* First Row: Phones, Laptops, Tablets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Phones */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
   <a href="https://www.instagram.com/iclassicstore/p/C3OYOjlqBMM/" target="_blank">       
  <div className="mb-4 md:mb-6 flex gap-[2px] overflow-hidden rounded-2xl">
    <img 
      src="src\images\Services\Samsung-Galaxy-S25-Plus.jpg" 
      alt="Samsung Galaxy S25 Plus"
      className="w-1/2 h-40 md:h-48 object-cover rounded-l-2xl"
    />
    
    <img 
      src="src\images\Services\iphone-13-select-2021.jpg" 
      alt="iPhone 13"
      className="w-1/2 h-40 md:h-48 object-cover rounded-r-2xl"
    />
  </div></a>
  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Phones</h3>
  <p className="text-gray-600 text-sm md:text-base">
    Buy, sell & swap top brands like iPhone, Samsung, Pixel
  </p>
</div>


            {/* Laptops */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="mb-4 md:mb-6">
               <a href="https://www.instagram.com/iclassicstore/p/DBLw3wEqR9w/" target="_blank">
                <img 
                  src="src\images\Services\latop.jpg"
                  alt="Laptop with colorful display"
                  className="w-full h-40 md:h-48 object-contain"
                /></a>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Laptops</h3>
              <p className="text-gray-600 text-sm md:text-base">
                MacBooks, Windows laptops – verified & affordable
              </p>
            </div>

            {/* Tablets */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="mb-4 md:mb-6">
               <a href="https://www.instagram.com/iclassicstore/p/DEhdSAqtTnL/" target="_blank">
                <img 
                  src="src\images\Services\ipad 2 1.jpg"
                  alt="Tablets in various colors"
                  className="w-full h-40 md:h-48 object-contain"
                /></a>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Tablets</h3>
              <p className="text-gray-600 text-sm md:text-base">
                iPads, Samsung Tabs, and more
              </p>
            </div>
          </div>

          {/* Second Row: Swap & Trade, Accessories, Gadget Support */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Swap & Trade */}
            
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <a href="https://www.instagram.com/iclassicstore/p/C3OYOjlqBMM/" target="_blank">
  <div className="mb-4 md:mb-6 flex gap-[2px] overflow-hidden rounded-2xl">
   
    <img 
      src="src\images\Services\Samsung-Galaxy-S25-Plus.jpg" 
      alt="Samsung Galaxy S25 Plus"
      className="w-1/2 h-40 md:h-48 object-cover rounded-l-2xl"
    />
  
    <img 
      src="src\images\Services\iphone-13-select-2021.jpg" 
      alt="iPhone 13"
      className="w-1/2 h-40 md:h-48 object-cover rounded-r-2xl"
    />
  </div>
  </a>
  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Swap & Trade</h3>
  <p className="text-gray-600 text-sm md:text-base">
    Exchange your device for something better
  </p>
</div>
            {/* Accessories */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="mb-4 md:mb-6">
               <a href="https://www.instagram.com/stories/highlights/17966581988558864/" target="_blank">
                <img 
                  src="src\images\Services\Accessories 1.jpg"
                  alt="Various tech accessories"
                  className="w-full h-40 md:h-48 object-contain"
                /></a>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Accessories</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Chargers, earbuds, cases & wearables
              </p>
            </div>

            {/* Gadget Support */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="mb-4 md:mb-6">
               <a href="https://wa.me/08173629997" target="_blank">
                <img 
                  src="src\images\Services\image 1.jpg"
                  alt="Various tech accessories"
                  className="w-full h-40 md:h-48 object-contain"
                /></a>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Gadget Support</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Quick help, diagnostics & guidance via WhatsApp
              </p>
            </div>


            
            
            </div>
          </div>
        

        {/* WhatsApp Button */}
        <div className="flex justify-center px-4">
          <div className="relative">
            {/* Green glow effect */}
            <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 scale-110"></div>
            <button className="relative bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center gap-2 md:gap-3 hover:bg-gray-800 transition-colors text-sm md:text-base">
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
               <a href="https://wa.me/08173629997" target="_blank">
              <span className="font-medium">Message Us on WhatsApp</span></a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
