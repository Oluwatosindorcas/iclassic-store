
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import NewArrivals from './components/NewArrivals';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="services" className="mt-16">
        <Services />
      </section>
      <section id="why-choose-us" className="mt-16">
        <WhyChoose />
      </section>
      <section id="new-arrivals" className="mt-16">
        <NewArrivals />
      </section>
      <section id="testimonials" className="mt-16">
        <Testimonials />
      </section>
      <section id="call-to-action" className="mt-16">
        <CallToAction />
      </section>
      <footer id="footer" className="mt-16">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
