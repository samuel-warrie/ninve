import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
            We're here to help you. Contact us or visit us in Oulu.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Call Us Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Call Us</h3>
              <p className="text-3xl font-bold text-red-500 mb-2">
                <a href="tel:+358504066766" className="hover:text-red-600 transition-colors">
                  +358 50 4066766
                </a>
              </p>
              <p className="text-gray-600">Available during opening hours</p>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Opening Hours</h3>
              <div className="space-y-3 text-left max-w-xs mx-auto">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Mon – Thu</span>
                  <span className="text-red-500 font-bold">16:00 – 04:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Fri – Sat</span>
                  <span className="text-red-500 font-bold">16:00 – 04:30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Sun</span>
                  <span className="text-red-500 font-bold">16:00 – 02:00</span>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Location</h3>
              <p className="text-gray-700 mb-2 font-medium">Albertinkatu 11</p>
              <p className="text-gray-600 mb-4">90100 Oulu, Finland</p>
              <a 
                href="https://www.google.com/maps/place/Pizzeria+Ninve/@65.0121,25.4651,17z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Open Map
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-thin mb-4 text-black">
                — Send Us a Message —
              </h2>
              <p className="text-gray-600 text-lg">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-vertical"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
                <p className="text-sm text-gray-500 text-center">
                  * All fields are required. We will respond to messages as soon as possible.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Order Online Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-black">Order for Delivery</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Order directly from us for personalized service or use our trusted delivery partners
            </p>
          </div>

          {/* Call to Order Promotion */}
          <div className="bg-red-50 p-8 rounded-lg mb-12 max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl mr-2">📞</span>
              <h3 className="text-xl font-semibold text-red-600">Call to Order</h3>
            </div>
            <p className="text-red-600 mb-6">
              Call us directly for the fastest service and personalized orders!
            </p>
            <a 
              href="tel:+358504066766" 
              className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: 050 4066766
            </a>
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg">Or order from our online partners:</p>
          </div>

          <div className="flex flex-row gap-8 justify-center items-center mb-8">
            <a 
              href="https://wolt.com/fi/fin/oulu/restaurant/pizzeria-ninve?srsltid=AfmBOop8OjH1-ybhhoba6TUhUZIoTzIPQBaGo86yYl7XmMq18fBft5sP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Wolt</span>
              </div>
              <span className="text-gray-800 font-medium">Order via Wolt</span>
            </a>
            <a 
              href="https://www.foodora.fi/restaurant/oyoj/pizzeria-ninve-oyoj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img 
                  src="https://raw.githubusercontent.com/samuel-warrie/kebab-pizza-lain/8438872477ba1b6dfe90ea1840930bf1cbee5c54/d7d193f561b4ce4035ab92a1181052b6%20(1).png" 
                  alt="Foodora" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-gray-800 font-medium">Order via Foodora</span>
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              * Online orders handled via Wolt & Foodora. For direct ordering, please call us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;