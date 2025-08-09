
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-900 text-white p-4 flex justify-between items-center relative">
      <div className="flex items-center">
        <img src="src/images/Landingpage/ICLASSIC 1.png" alt="iClassic Logo" className="h-12 w-auto" />
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#home" className="hover:text-yellow-400 text-base">Home</a>
        <a href="#services" className="hover:text-yellow-400 text-base">Service</a>
        <a href="#why-choose-us" className="hover:text-yellow-400 text-base">Why Choose Us</a>
        <a href="#testimonials" className="hover:text-yellow-400 text-base">Testimonial</a>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
          ☰
        </button>
      </div>
      <div className="hidden md:block">
        <a href="https://wa.me/08173629997" target="_blank" className="bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2 glow-yellow-button">
          <span className="text-2xl">💬</span>
          <span className="text-lg">Get in Touch</span>
        </a>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-green-900 p-4 md:hidden z-10">
          <a href="#home" className="block py-2 hover:text-yellow-400 text-base">Home</a>
          <a href="#services" className="block py-2 hover:text-yellow-400 text-base">Service</a>
          <a href="#why-choose-us" className="block py-2 hover:text-yellow-400 text-base">Why Choose Us</a>
          <a href="#testimonial" className="block py-2 hover:text-yellow-400 text-base">Testimonial</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
