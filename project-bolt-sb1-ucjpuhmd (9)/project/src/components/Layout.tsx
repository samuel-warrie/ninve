import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Pizza, Facebook } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import LanguageToggle from './LanguageToggle';
import ScrollToTop from './ScrollToTop';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    scrollToTop();
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white text-black px-4 py-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <img 
              src="https://raw.githubusercontent.com/samuel-warrie/kebab-pizza-lain/main/-456962683_1078739550487921_1134633600157524277_n.jpg" 
              alt="Pizzeria Ninve Logo" 
              className="h-16 w-auto object-contain opacity-90 mix-blend-multiply filter brightness-110 contrast-90"
            />
          </Link>
          
          <div className="hidden md:flex space-x-8 ml-auto mr-4">
            <Link 
              to="/" 
              className={`hover:text-red-500 transition-colors font-medium ${isActive('/') ? 'text-red-500' : ''}`}
              onClick={scrollToTop}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/menu" 
              className={`hover:text-red-500 transition-colors font-medium ${isActive('/menu') ? 'text-red-500' : ''}`}
              onClick={scrollToTop}
            >
              {t('nav.menu')}
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-red-500 transition-colors font-medium ${isActive('/about') ? 'text-red-500' : ''}`}
              onClick={scrollToTop}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-red-500 transition-colors font-medium ${isActive('/contact') ? 'text-red-500' : ''}`}
              onClick={scrollToTop}
            >
              {t('nav.contact')}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`hover:text-red-500 transition-colors py-2 font-medium ${isActive('/') ? 'text-red-500' : ''}`}
                onClick={handleLinkClick}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/menu" 
                className={`hover:text-red-500 transition-colors py-2 font-medium ${isActive('/menu') ? 'text-red-500' : ''}`}
                onClick={handleLinkClick}
              >
                {t('nav.menu')}
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-red-500 transition-colors py-2 font-medium ${isActive('/about') ? 'text-red-500' : ''}`}
                onClick={handleLinkClick}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/contact" 
                className={`hover:text-red-500 transition-colors py-2 font-medium ${isActive('/contact') ? 'text-red-500' : ''}`}
                onClick={handleLinkClick}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      {children}

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Restaurant Info */}
            <div>
              <Link to="/" className="text-xl font-bold mb-4 block hover:text-red-500 transition-colors" onClick={scrollToTop}>
                Pizzeria Ninve
              </Link>
              <p className="text-gray-400 mb-4">
                {t('footer.tagline')}
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/keskustan.ninve/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors flex items-center space-x-2">
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.links')}</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-red-500 transition-colors" onClick={scrollToTop}>
                    {t('nav.home')}
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="text-gray-400 hover:text-red-500 transition-colors" onClick={scrollToTop}>
                    {t('nav.menu')}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-red-500 transition-colors" onClick={scrollToTop}>
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-red-500 transition-colors" onClick={scrollToTop}>
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
              <div className="space-y-2 text-gray-400">
                <p>
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
                <p>
                  <a href="tel:+358504066766" className="hover:text-red-500 transition-colors">
                    +358 50 4066766
                  </a>
                </p>
                <p>
                  <a href="mailto:info@pizzerianinve.fi" className="hover:text-red-500 transition-colors">
                    info@pizzerianinve.fi
                  </a>
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.hours')}</h4>
              <div className="space-y-1 text-gray-400">
                <p>{t('footer.hours.mon')}</p>
                <p>{t('footer.hours.fri')}</p>
                <p>{t('footer.hours.sun')}</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;