import { Linkedin, Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-green-900">
      {/* Large iClassic text - standalone */}
      <div className="flex items-center justify-center py-16 lg:py-24">
        <h2 className="text-[8rem] lg:text-[16rem] xl:text-[20rem] font-black text-gray-700 opacity-40 select-none">
          iClassic
        </h2>
      </div>

      <div className="container mx-auto px-4 pb-16">
        {/* Logo, Navigation, Social - same line on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-6">
              <img src="src/images/Landingpage/ICLASSIC 1.png" alt="iClassic Logo" className="h-12 w-auto" />
              <span className="text-white font-bold text-xl"></span>
            </div>
            <address className="text-gray-400 not-italic leading-relaxed">
              1, Otigba Street, Computer Village,<br />
              Ikeja, Lagos, Nigeria.
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Navigation</h3>
            <nav className="space-y-3">
              <a href="https://www.instagram.com/iclassicstore/" target="_blank" className="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="https://wa.me/08173629997" target="_blank" className="block text-gray-400 hover:text-white transition-colors">Buy</a>
              <a href="https://wa.me/08173629997" target="_blank" className="block text-gray-400 hover:text-white transition-colors">Sell</a>
              <a href="https://wa.me/08173629997" target="_blank" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Social</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/ola-akinwale-67770b249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <img src="src\images\Footer\linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/iclassicstore/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <img src="src\images\Footer\instagram.png" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://x.com/irewale08?s=11" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <img src="src\images\Footer\twitter.png" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://x.com/irewale08?s=11" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <img src="src\images\Footer\social-media.png" alt="Facebook" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="max-w-2xl">
          <h3 className="text-white font-semibold text-lg mb-6">Subscribe to our Newsletter</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed">
            By submitting your email address, you agree to receive MyFinance's monthly newsletter. For more information, please read our{" "}
            <a href="#" className="text-green-400 hover:text-green-300 underline">privacy policy</a>. You can always withdraw your consent.
          </p>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 mt-16">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-500 text-sm">
              Copyright © 2025 iclassic. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Terms of Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
