import React from 'react';
import { Pizza, Users, Utensils, Clock, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            About Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
            Learn more about our story and commitment to quality
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Story */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-thin mb-4 text-black">— Our Story —</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              Pizzeria Ninve has been serving authentic pizzas and delicious kebabs to Oulu since 1996. 
              What started as a small family restaurant has grown into a beloved local institution, 
              but our commitment to quality and authentic flavors remains unchanged.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pizza className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Fresh Ingredients</h4>
              <p className="text-gray-600">We use only the freshest ingredients, sourced locally when possible, to ensure every bite is delicious.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Traditional Recipes</h4>
              <p className="text-gray-600">Our recipes have been perfected over decades, combining traditional techniques with modern tastes.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Late Night Service</h4>
              <p className="text-gray-600">Open until 4:30 AM every day, we're here when you need us most, especially on weekends.</p>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-6">Visit Us Today</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">Location</h4>
                <p className="text-gray-700">
                  <a 
                    href="https://www.google.com/maps/place/Pizzeria+Ninve/@65.0121,25.4651,17z" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-red-500 transition-colors"
                  >
                    Albertinkatu 11<br />
                    90100 Oulu, Finland
                  </a>
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Hours</h4>
                <p className="text-gray-700">
                  Monday - Sunday<br />
                  16:00 - 04:30
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default About;