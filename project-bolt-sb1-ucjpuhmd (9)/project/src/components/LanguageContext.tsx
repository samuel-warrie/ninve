import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Home page
    'home.hero.subtitle': 'Restaurant Pizzeria since 1996',
    'home.hero.menu': 'Pizza Menu',
    'home.welcome.title': '— Welcome to Pizzeria Ninve —',
    'home.welcome.description': 'Pizzeria Ninve has been serving authentic pizzas and delicious kebabs to our community since 1996. We pride ourselves on using fresh ingredients and traditional recipes that bring people together around great food.',
    'home.special.title': '— What Makes Us Special —',
    'home.special.subtitle': 'Discover why we\'ve been Oulu\'s favorite since 1996',
    'home.special.fresh.title': 'Fresh Ingredients',
    'home.special.fresh.description': 'We use only the freshest ingredients, sourced locally when possible, to ensure every bite is delicious.',
    'home.special.traditional.title': 'Traditional Recipes',
    'home.special.traditional.description': 'Our recipes have been perfected over decades, combining traditional techniques with modern tastes.',
    'home.special.late.title': 'Open Late',
    'home.special.late.description': 'Open until 4:30 AM every day, we\'re here when you need us most, especially on weekends.',
    'home.menu.title': '— Our Menu —',
    'home.menu.subtitle': 'Try our customers\' favorite dishes',
    'home.menu.view': 'View Full Menu',
    'home.gallery.title': '— Gallery —',
    'home.gallery.subtitle': 'Take a look at our delicious food',
    'home.gallery.view': 'View All Photos →',
    'home.order.title': 'Order for Delivery',
    'home.order.subtitle': 'Order directly from us for personalized service or use our trusted delivery partners',
    'home.order.call.title': 'Call to Order',
    'home.order.call.subtitle': 'Call us directly for the fastest service and personalized orders!',
    'home.order.call.button': 'Call: 050 4066766',
    'home.order.partners': 'Or order from our online partners:',
    'home.order.wolt': 'Order via Wolt',
    'home.order.foodora': 'Order via Foodora',
    'home.order.note': '* Online orders handled via Wolt & Foodora. For direct ordering, please call us.',
    
    // Menu page
    'menu.hero.title': 'Our Menu',
    'menu.hero.subtitle': 'Discover our delicious selection of pizzas, kebabs, and more',
    'menu.lunch': 'LUNCH',
    'menu.classic': 'CLASSIC PIZZAS',
    'menu.special': 'SPECIAL PIZZAS',
    'menu.kebabs': 'KEBABS',
    'menu.salads': 'SALADS',
    'menu.other': 'OTHER DISHES',
    'menu.drinks': 'DRINKS',
    'menu.lunch.desc': 'Available Monday-Friday 11:00-15:00',
    'menu.classic.desc': 'All pizzas also available as pan pizzas (+€2)',
    'menu.special.desc': 'Special pizzas include double cheese and mayonnaise if desired',
    'menu.kebabs.desc': 'All kebab dishes are also available with chicken kebab',
    'menu.salads.desc': 'Fresh salads with your choice of protein',
    'menu.other.desc': 'Appetizers and sides to complement your meal',
    'menu.drinks.desc': 'Refreshing beverages to accompany your meal',
    
    // About page
    'about.hero.title': 'About Us',
    'about.hero.subtitle': 'Learn more about our story and commitment to quality',
    'about.story.title': '— Our Story —',
    'about.story.description': 'Pizzeria Ninve has been serving authentic pizzas and delicious kebabs to Oulu since 1996. What started as a small family restaurant has grown into a beloved local institution, but our commitment to quality and authentic flavors remains unchanged.',
    'about.visit.title': 'Visit Us Today',
    'about.visit.location': 'Location',
    'about.visit.hours': 'Hours',
    'about.visit.hours.time': 'Monday - Sunday\n16:00 - 04:30',
    
    // Contact page
    'contact.hero.title': 'Get In Touch',
    'contact.hero.subtitle': 'We\'re here to help you. Contact us or visit us in Oulu.',
    'contact.call.title': 'Call Us',
    'contact.call.subtitle': 'Available during opening hours',
    'contact.hours.title': 'Opening Hours',
    'contact.location.title': 'Location',
    'contact.location.button': 'Open Map',
    'contact.message.title': '— Send Us a Message —',
    'contact.message.subtitle': 'Fill out the form below and we\'ll get back to you as soon as possible.',
    'contact.form.name': 'Name *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Message *',
    'contact.form.name.placeholder': 'Enter your name',
    'contact.form.email.placeholder': 'Enter your email',
    'contact.form.message.placeholder': 'Write your message here...',
    'contact.form.send': 'Send Message',
    'contact.form.note': '* All fields are required. We will respond to messages as soon as possible.',
    
    // Footer
    'footer.tagline': 'Serving Oulu with authentic flavors since 1996',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.hours': 'Opening Hours',
    'footer.hours.mon': 'Monday - Thursday: 16:00 - 04:00',
    'footer.hours.fri': 'Friday - Saturday: 16:00 - 04:30',
    'footer.hours.sun': 'Sunday: 16:00 - 02:00',
    'footer.copyright': '© 2025 Pizzeria Ninve. All rights reserved.'
  },
  fi: {
    // Navigation
    'nav.home': 'Etusivu',
    'nav.menu': 'Menu',
    'nav.about': 'Tietoa',
    'nav.contact': 'Yhteystiedot',
    
    // Home page
    'home.hero.subtitle': 'Ravintola Pizzeria vuodesta 1996',
    'home.hero.menu': 'Pizza Menu',
    'home.welcome.title': '— Tervetuloa Pizzeria Ninveen —',
    'home.welcome.description': 'Pizzeria Ninve on palvellut aitoja pizzoja ja herkullisia kebabeja yhteisöllemme vuodesta 1996. Olemme ylpeitä käyttämästämme tuoreista aineksista ja perinteisistä resepteistä, jotka tuovat ihmiset yhteen hyvän ruoan äärelle.',
    'home.special.title': '— Mikä tekee meistä erityisiä —',
    'home.special.subtitle': 'Tutustu miksi olemme olleet Oulun suosikki vuodesta 1996',
    'home.special.fresh.title': 'Tuoreet Ainekset',
    'home.special.fresh.description': 'Käytämme vain tuoreimpia aineksia, mahdollisuuksien mukaan paikallisesti hankittuja, varmistaaksemme että jokainen pala on herkullinen.',
    'home.special.traditional.title': 'Perinteiset Reseptit',
    'home.special.traditional.description': 'Reseptimme on hiottu vuosikymmenten aikana, yhdistäen perinteiset tekniikat moderniin makuun.',
    'home.special.late.title': 'Auki Myöhään',
    'home.special.late.description': 'Auki 4:30 asti joka päivä, olemme täällä kun tarvitset meitä eniten, erityisesti viikonloppuisin.',
    'home.menu.title': '— Menumme —',
    'home.menu.subtitle': 'Kokeile asiakkaidemme suosikkiruokia',
    'home.menu.view': 'Katso Koko Menu',
    'home.gallery.title': '— Galleria —',
    'home.gallery.subtitle': 'Tutustu herkulliseen ruokaamme',
    'home.gallery.view': 'Katso Kaikki Kuvat →',
    'home.order.title': 'Tilaa Kotiinkuljetus',
    'home.order.subtitle': 'Tilaa suoraan meiltä henkilökohtaista palvelua varten tai käytä luotettuja kuljetuskumppaneitamme',
    'home.order.call.title': 'Soita Tilataksesi',
    'home.order.call.subtitle': 'Soita meille suoraan nopeinta palvelua ja henkilökohtaisia tilauksia varten!',
    'home.order.call.button': 'Soita: 050 4066766',
    'home.order.partners': 'Tai tilaa verkossa kumppaneiltamme:',
    'home.order.wolt': 'Tilaa Woltista',
    'home.order.foodora': 'Tilaa Foodorasta',
    'home.order.note': '* Verkossa tilaukset hoidetaan Woltin ja Foodoran kautta. Suoraa tilausta varten, soita meille.',
    
    // Menu page
    'menu.hero.title': 'Menumme',
    'menu.hero.subtitle': 'Tutustu herkulliseen valikoimaamme pizzoja, kebabeja ja muuta',
    'menu.lunch': 'LOUNAS',
    'menu.classic': 'PERINTEISIÄ PIZZOJA',
    'menu.special': 'ERIKOISPIZZOJA',
    'menu.kebabs': 'KEBABIT',
    'menu.salads': 'SALAATIT',
    'menu.other': 'MUUT RUOAT',
    'menu.drinks': 'JUOMAT',
    'menu.lunch.desc': 'Saatavilla maanantai-perjantai 11:00-15:00',
    'menu.classic.desc': 'Kaikki pizzat saatavilla myös pannupizzoina (+2€)',
    'menu.special.desc': 'Erikoispizzat sisältävät tuplatuorejuuston ja majoneesia haluttaessa',
    'menu.kebabs.desc': 'Kaikki kebabannokset saatavilla myös kanakebabilla',
    'menu.salads.desc': 'Tuoreita salaatteja valitsemallasi proteiinilla',
    'menu.other.desc': 'Alkupaloja ja lisukkeita täydentämään ateriaasi',
    'menu.drinks.desc': 'Virkistäviä juomia ateriasi seuraksi',
    
    // About page
    'about.hero.title': 'Tietoa Meistä',
    'about.hero.subtitle': 'Lue lisää tarinastamme ja sitoutumisestamme laatuun',
    'about.story.title': '— Tarinmme —',
    'about.story.description': 'Pizzeria Ninve on palvellut aitoja pizzoja ja herkullisia kebabeja Oulussa vuodesta 1996. Se mikä alkoi pienenä perheravintolana on kasvanut rakastetuksi paikalliseksi instituutioksi, mutta sitoutumisemme laatuun ja aitoon makuun pysyy muuttumattomana.',
    'about.visit.title': 'Vieraile Luonamme Tänään',
    'about.visit.location': 'Sijainti',
    'about.visit.hours': 'Aukioloajat',
    'about.visit.hours.time': 'Maanantai - Sunnuntai\n16:00 - 04:30',
    
    // Contact page
    'contact.hero.title': 'Ota Yhteyttä',
    'contact.hero.subtitle': 'Olemme täällä auttamassa sinua. Ota yhteyttä tai vieraile luonamme Oulussa.',
    'contact.call.title': 'Soita Meille',
    'contact.call.subtitle': 'Saatavilla aukioloaikojen aikana',
    'contact.hours.title': 'Aukioloajat',
    'contact.location.title': 'Sijainti',
    'contact.location.button': 'Avaa Kartta',
    'contact.message.title': '— Lähetä Meille Viesti —',
    'contact.message.subtitle': 'Täytä alla oleva lomake ja vastaamme sinulle mahdollisimman pian.',
    'contact.form.name': 'Nimi *',
    'contact.form.email': 'Sähköposti *',
    'contact.form.message': 'Viesti *',
    'contact.form.name.placeholder': 'Syötä nimesi',
    'contact.form.email.placeholder': 'Syötä sähköpostisi',
    'contact.form.message.placeholder': 'Kirjoita viestisi tähän...',
    'contact.form.send': 'Lähetä Viesti',
    'contact.form.note': '* Kaikki kentät ovat pakollisia. Vastaamme viesteihin mahdollisimman pian.',
    
    // Footer
    'footer.tagline': 'Palvelemme Oulua aidoilla mauilla vuodesta 1996',
    'footer.links': 'Pikavalinnat',
    'footer.contact': 'Yhteystiedot',
    'footer.hours': 'Aukioloajat',
    'footer.hours.mon': 'Maanantai - Torstai: 16:00 - 04:00',
    'footer.hours.fri': 'Perjantai - Lauantai: 16:00 - 04:30',
    'footer.hours.sun': 'Sunnuntai: 16:00 - 02:00',
    'footer.copyright': '© 2025 Pizzeria Ninve. Kaikki oikeudet pidätetään.'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};