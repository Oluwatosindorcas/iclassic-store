'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    text: "Was nervous about buying online, but iClassic Store earned my trust. I got a legit iPhone 13 Pro, and their WhatsApp support made everything easy.",
    name: "Sandra K.",
    subtitle: "First Time, No Regrets"
  },
  {
    id: 2,
    text: "I just got my iPhone 13 Pro from iClassic Store and I'm honestly impressed! The device is super clean, functions perfectly, and delivery was really fast. Their WhatsApp support made the process so easy. Highly recommend them for anyone looking to buy or swap gadgets!",
    name: "Tobi A",
    subtitle: "Swapped & Smiling"
  },
  {
    id: 3,
    text: "Big shoutout to iClassic Store! Just got my phone and it's clean, sharp, and exactly as advertised. Quick response on WhatsApp and smooth delivery. They're my new plug for gadgets 🔥💯",
    name: "Amaka O",
    subtitle: "Fast Delivery, Clean Phone"
  },
  {
    id: 4,
    text: "Needed a solid MacBook for work and iClassic Store helped me find the perfect one for my budget. It was verified and has worked flawlessly.",
    name: "Chuka E.",
    subtitle: "Trusted Plug for Laptops"
  },
  {
    id: 5,
    text: "iClassic Store is my go-to for all tech needs. Their swap offers are fantastic, and the quality of their devices is always top-notch. Highly recommended!",
    name: "David L.",
    subtitle: "Happy Swapper"
  },
  {
    id: 6,
    text: "Excellent service and genuine products. I bought an iPad from them, and it was exactly as described. The delivery was quick, and their support team was very helpful.",
    name: "Sarah M.",
    subtitle: "Satisfied Buyer"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)
  const cardRefs = useRef([]) // Array to hold refs for each card

  // Ensure cardRefs is cleared/reset if testimonials array changes (though it's static here)
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, testimonials.length);
  }, []);

  const scrollToIndex = (index) => {
    setCurrentIndex(index)
    if (cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'center' // Centers the element in the scroll view
      })
    }
  }

  const nextTestimonial = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length
    scrollToIndex(nextIndex)
  }

  const prevTestimonial = () => {
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    scrollToIndex(prevIndex)
  }

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Satisfied Customers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            What our customers say about buying,{' '}
            <br className="hidden md:block" />
            selling, and swapping with us.
          </p>
        </div>

        {/* Testimonial Cards - Always Horizontal Scroll */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // For Firefox and IE/Edge
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                ref={el => cardRefs.current[index] = el} // Assign ref to each card
                className={`
                  bg-white rounded-2xl p-8 shadow-sm flex-none
                  w-[calc(100%-48px)] md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(25%-18px)]
                  snap-center
                  transition-all duration-300 ease-in-out
                  ${index === currentIndex
                    ? 'scale-[1.05] opacity-100 blur-none' // Active card
                    : 'scale-[0.95] opacity-70 blur-sm' // Inactive cards: increased opacity, slightly less scale
                  }
                `}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg 
                    className="w-12 h-12 text-green-800" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {testimonial.text}
                </p>
                
                {/* Customer Info */}
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
