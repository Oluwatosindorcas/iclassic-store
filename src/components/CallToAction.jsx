
import { MessageCircle } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-green-800 min-h-[500px] lg:min-h-[600px]">
      {/* Background devices - faded in top right */}
      <div className="absolute top-4 right-4 lg:top-8 lg:right-8 opacity-30">
        <div className="flex space-x-2">
          <img src="\images\Landingpage\Samsung-Galaxy-S25-Plus.png" alt="" className="w-16 h-24 lg:w-20 lg:h-30 rounded-lg" />
          <img src="\images\Landingpage\Iphone 17.png" alt="" className="w-16 h-24 lg:w-20 lg:h-30 rounded-lg" />
          <img src="\images\Landingpage\google pixel.png" alt="" className="w-16 h-24 lg:w-20 lg:h-30 rounded-lg" />
          
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left content */}
          <div className="text-center lg:text-left lg:flex-1 mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 lg:mb-8 leading-tight">
              Ready to buy, sell, or<br />
              swap a gadget?
            </h2>
            
            <div className="inline-block shadow-[0_0_30px_rgba(255,255,0,0.3)] rounded-full">
              <button className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-medium transition-colors duration-200">
                <MessageCircle className="w-5 h-5" />
                Message Us on WhatsApp
              </button>
            </div>

            <p className="text-green-100 text-sm lg:text-base mt-4 lg:hidden italic">
              Fast responses. Real-time deals. Hassle-free experience.
            </p>
          </div>

          {/* Right devices - visible */}
          <div className="relative lg:flex-1 lg:max-w-lg mt-16 lg:mt-0">
            {/* Mobile view - stacked */}
            <div className="lg:hidden flex flex-col items-center space-y-6 mt-16">
              <div className="flex space-x-3">
                <img src="\images\Landingpage\Samsung-Galaxy-S25-Plus.png" alt="Phone" className="w-20 h-32 rounded-xl shadow-xl" />
                <img src="\images\Landingpage\Iphone 17.png" alt="Phone" className="w-20 h-32 rounded-xl shadow-xl" />
                <img src="\images\Landingpage\google pixel.png" alt="Phone" className="w-20 h-32 rounded-xl shadow-xl" />
              </div>
              <img src="\images\Landingpage\latop.png" alt="Laptop" className="w-32 h-20 rounded-lg shadow-xl" />
            </div>

            {/* Desktop view - positioned lower right */}
            <div className="hidden lg:block relative h-full">
              <div className="absolute top-1/2 right-0 transform translate-y-1/2 flex space-x-4">
                <img src="\images\Landingpage\Samsung-Galaxy-S25-Plus.png" alt="Phone" className="w-24 h-40 rounded-xl shadow-2xl transform rotate-3" />
                <img src="\images\Landingpage\Iphone 17.png" alt="Phone" className="w-24 h-40 rounded-xl shadow-2xl transform -rotate-2" />
                <img src="\images\Landingpage\google pixel.png" alt="Phone" className="w-24 h-40 rounded-xl shadow-2xl transform rotate-1" />
                <img src="images\Landingpage\latop.png" alt="Laptop" className="w-40 h-24 rounded-lg shadow-2xl transform -rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
