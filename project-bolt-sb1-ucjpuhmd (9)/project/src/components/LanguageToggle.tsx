import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fi' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase">{language === 'en' ? 'FI' : 'EN'}</span>
    </button>
  );
};

export default LanguageToggle;