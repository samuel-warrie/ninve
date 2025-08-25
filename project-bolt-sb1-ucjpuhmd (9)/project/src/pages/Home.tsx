import React from 'react';
import { Link } from 'react-router-dom';
import { Pizza, Users, Utensils, ArrowRight, X, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const Home: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null);
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
      alt: 'Delicious pizza with fresh toppings'
    },
    {
      src: 'https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg',
      alt: 'Fresh kebab with vegetables'
    },
    {
      src: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
      alt: 'Pizza preparation in kitchen'
    },
    {
      src: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg',
      alt: 'Fresh salad with vegetables'
    },
    {
      src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      alt: 'Restaurant interior'
    },
    {
      src: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
      alt: 'Variety of pizzas'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  const popularItems = [
    { name: 'As You Wish', description: '3 toppings of your choice', price: '€11.00', category: 'Pizza' },
    { name: 'Kebab Roll', description: 'Kebab meat, tomato, cucumber, onion, iceberg lettuce, sauce', price: '€12.00', category: 'Roll' },
    { name: 'Daklat', description: 'Kebab meat, pineapple, blue cheese', price: '€12.50', category: 'Specialty Pizza' },
    { name: 'Meat Lovers', description: 'Kebab meat, ham, salami, minced meat', price: '€12.50', category: 'Specialty Pizza' },
    { name: 'Tropicana', description: 'Ham, pineapple, blue cheese', price: '€11.00', category: 'Pizza' },
    { name: 'Iskender Kebab', description: 'Kebab meat, bread, yogurt, salad, sauce', price: '€13.00', category: 'Kebab' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center animate-fade-in">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://raw.githubusercontent.com/samuel-warrie/kebab-pizza-lain/main/-yehudittt-YlhmDgI7Bg0-unsplash.jpg)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 animate-slide-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-white whitespace-nowrap" style={{ fontFamily: 'Playfair Display, serif' }}>
            Pizzeria Ninve
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto px-4 -mt-4">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex justify-center">
            <Link 
              to="/menu" 
              className="bg-red-600 hover:bg-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors uppercase font-sans"
              onClick={scrollToTop}
            >
              {t('home.hero.menu')}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-gray-50 animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 text-black font-thin">{t('home.welcome.title')}</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 px-4">
                {t('home.welcome.description')}
              </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Special Section */}
      <section className="py-12 bg-white animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-thin mb-4 text-black">{t('home.special.title')}</h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">{t('home.special.subtitle')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pizza className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{t('home.special.fresh.title')}</h4>
              <p className="text-gray-600">{t('home.special.fresh.description')}</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{t('home.special.traditional.title')}</h4>
              <p className="text-gray-600">{t('home.special.traditional.description')}</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{t('home.special.late.title')}</h4>
              <p className="text-gray-600">{t('home.special.late.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Menu Items */}
      <section className="py-20 bg-gray-50 animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin mb-4 text-black">{t('home.menu.title')}</h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">{t('home.menu.subtitle')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {popularItems.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1 mr-2">
                    <h4 className="text-lg sm:text-xl font-semibold mb-1">{item.name}</h4>
                    <span className="text-sm text-red-500 font-medium">{item.category}</span>
                  </div>
                  <span className="text-red-500 font-bold text-lg whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/menu" 
              className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              onClick={scrollToTop}
            >
              {t('home.menu.view')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-white animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-thin mb-4 text-black">{t('home.gallery.title')}</h2>
            <p className="text-base text-gray-600 px-4">{t('home.gallery.subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in-up cursor-pointer" 
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                onClick={() => openModal(index)}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                    Click to view
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={() => openModal(0)}
              className="text-red-500 hover:text-red-600 font-medium transition-colors"
            >
              {t('home.gallery.view')}
            </button>
          </div>
        </div>
      </section>

      {/* Order Online Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-black">{t('home.order.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('home.order.subtitle')}
            </p>
          </div>

          {/* Call to Order Promotion */}
          <div className="bg-red-50 p-8 rounded-lg mb-12 max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl mr-2">📞</span>
              <h3 className="text-xl font-semibold text-red-600">{t('home.order.call.title')}</h3>
            </div>
            <p className="text-red-600 mb-6">
              {t('home.order.call.subtitle')}
            </p>
            <a 
              href="tel:+358504066766" 
              className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('home.order.call.button')}
            </a>
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg">{t('home.order.partners')}</p>
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
              <span className="text-gray-800 font-medium">{t('home.order.wolt')}</span>
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
              <span className="text-gray-800 font-medium">{t('home.order.foodora')}</span>
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              {t('home.order.note')}
            </p>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <img
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;