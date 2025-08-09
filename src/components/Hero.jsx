
import React from 'react';

function Hero() {
  return (
    <section className="bg-green-900 text-white text-center py-16">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <div className="bg-green-700 bg-opacity-50 backdrop-blur-sm rounded-full px-6 py-3 border border-green-600">
            <div className="flex items-center gap-3">
              <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                Gadget
              </span>
              <span className="text-white text-sm font-medium tracking-wider">
                UPGRADE. TRADE. CONNECT.
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Shop or swap phones, laptops, tablets, Macs & accessories — fast and reliable.</h1>
        <p className="text-lg mb-6">Shop the latest iPhones, Samsung, Google Pixel, tablets, Macs & accessories. Buy, sell or swap — all from one trusted source.</p>
        <a href="https://wa.me/08173629997" target="_blank" className="bg-black text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 glow-yellow-button mb-4">
          <span className="text-2xl">💬</span>
          <span className="text-lg">Message Us on WhatsApp</span>
        </a>
        <p className="text-sm">Fast responses. Real-time deals. Hassle-free experience.</p>
        <div className="mt-8 flex justify-center space-x-0 -mx-2">
          <img src="src/images/Landingpage/Samsung-Galaxy-S25-Plus.png" alt="Device 1" className="h-32 sm:h-40 md:h-48 -ml-px -mr-px" />
          <img src="src/images/Landingpage/Iphone 17.png" alt="Device 2" className="h-32 sm:h-40 md:h-48 -ml-px -mr-px" />
          <img src="src/images/Landingpage/google pixel.png" alt="Device 3" className="h-32 sm:h-40 md:h-48 -ml-px -mr-px" />
          <img src="src/images/Landingpage/latop.png" alt="Device 4" className="h-32 sm:h-40 md:h-48 -ml-px -mr-px" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
