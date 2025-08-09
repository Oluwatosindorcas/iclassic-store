export default function WhyChooseUs() {
  const features = [
    "Flexible Swap Options",
    "Competitive Prices",
    "Fast Delivery",
    "Real-Time WhatsApp Support",
    "Verified Devices Only"
  ];

  return (
    <section className="py-16 px-4 bg-white text-gray-900"> {/* Changed background to white, default text to dark */}
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center md:text-left mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800">
            Why Choose iClassic Store
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-12 md:gap-24">
          {/* Image Section */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src="src\images\WhyChoose\Image_fx (2) 2.jpg"
              alt="Green price tag with a checkmark, symbolizing value and trust"
              className="w-64 h-64 md:w-96 md:h-96 object-contain"
            />
          </div>

          {/* Features List Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="text-gray-700 text-xl md:text-2xl font-medium"> {/* Changed feature text to dark gray */}
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
