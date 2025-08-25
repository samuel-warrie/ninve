import React, { useState } from 'react';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState('CLASSIC PIZZAS');

  const tabs = [
    'LUNCH',
    'CLASSIC PIZZAS', 
    'SPECIAL PIZZAS',
    'KEBABS',
    'SALADS',
    'OTHER DISHES',
    'DRINKS'
  ];

  const regularPizzas = [
    { name: 'Roma', description: 'Minced meat, ham, pineapple', price: '€11.00' },
    { name: 'Mexicana', description: 'Minced meat, pepperoni, jalapeno', price: '€11.00' },
    { name: 'Tropicana', description: 'Ham, pineapple, blue cheese', price: '€11.00' },
    { name: 'Vegetariana', description: 'Mushroom, pineapple, bell pepper', price: '€11.00' },
    { name: 'Opera Special', description: 'Salami, ham, tuna', price: '€11.00' },
    { name: 'Bella', description: 'Minced meat, pineapple, blue cheese', price: '€11.00' },
    { name: 'Frutti Di Mare', description: 'Tuna, mussel, shrimp', price: '€11.00' },
    { name: 'American Pizza', description: 'Bacon, red onion, ham', price: '€11.00' },
    { name: 'Quattro', description: 'Shrimp, ham, mushroom, tuna', price: '€11.00' },
    { name: 'Al Capone', description: 'Salami, ham, egg', price: '€11.00' },
    { name: 'Pepperone', description: 'Salami, bell pepper, tuna', price: '€11.00' },
    { name: 'Italiano', description: 'Italiano salami, shrimp, blue cheese', price: '€11.00' },
    { name: 'Milano', description: 'Salami, ham, shrimp', price: '€11.00' },
    { name: 'Amigo', description: 'Ham, mushroom, shrimp', price: '€11.00' },
    { name: 'Julia', description: 'Shrimp, ham, pineapple', price: '€11.00' },
    { name: 'Opera', description: 'Tuna, ham', price: '€11.00' },
    { name: 'Dillinger', description: 'Salami, ham, minced meat', price: '€11.00' },
    { name: 'Siciliano', description: 'Sicilian pineapple, salami, blue cheese', price: '€11.00' },
    { name: 'As You Wish', description: '3 toppings of your choice', price: '€11.00' }
  ];

  const specialtyPizzas = [
    { name: 'Bet-Nahren', description: 'Kebab meat, mushrooms, red onion, chili', price: '€12.50' },
    { name: 'Daklat', description: 'Kebab meat, pineapple, blue cheese', price: '€12.50' },
    { name: 'Prat', description: 'Kebab meat, red onion, chili, tomato', price: '€12.50' },
    { name: 'Toro', description: 'Beef, red onion, bacon, blue cheese', price: '€12.50' },
    { name: 'Lapland Pizza', description: 'Smoked reindeer meat, red onion, egg', price: '€12.50' },
    { name: 'Veggie Special', description: 'Tomato, red onion, olive, blue cheese, mozzarella', price: '€12.50' },
    { name: 'Barssa', description: 'Kebab meat, ham, pineapple, bacon', price: '€12.50' },
    { name: 'Meat Lovers', description: 'Kebab meat, ham, salami, minced meat', price: '€12.50' },
    { name: 'Nino', description: 'Chicken, blue cheese, curry, mushroom', price: '€12.50' },
    { name: 'Atran', description: 'Chicken, pineapple, red onion, blue cheese', price: '€12.50' },
    { name: 'Akad', description: 'Chicken, curry, mushrooms, red onion', price: '€12.50' },
    { name: 'Urmi', description: 'Chicken, tomato, capers, red onion', price: '€12.50' },
    { name: 'Arru Special', description: 'Chicken, lettuce, garlic, arugula, bearnaise sauce', price: '€12.50' },
    { name: 'Pork Pizza', description: 'Pulled pork neck, red onion, mozzarella, BBQ sauce', price: '€12.50' },
    { name: 'Salad Pizza', description: 'Kebab meat, cheese, salad, mayonnaise', price: '€12.50' }
  ];

  const kebabs = [
    { name: 'Nohadra Dose', description: 'Kebab meat, french fries, salad, sauce', price: '€13.00' },
    { name: 'Nineveh Dose', description: 'Kebab meat, potato wedges, salad, sauce', price: '€13.00' },
    { name: 'Kebab with Rice', description: 'Kebab meat, rice, salad, sauce', price: '€13.00' },
    { name: 'Iskender Kebab', description: 'Kebab meat, bread, yogurt, salad, sauce', price: '€13.00' }
  ];

  const rolls = [
    { name: 'Reindeer Roll', description: 'Smoked reindeer, egg, tomato, cucumber, onion, iceberg lettuce, sauce', price: '€12.00' },
    { name: 'Kebab Roll', description: 'Kebab meat, tomato, cucumber, onion, iceberg lettuce, sauce', price: '€12.00' },
    { name: 'Chicken Roll', description: 'Chicken, tomato, cucumber, onion, salad cheese, salad, sauce', price: '€12.00' },
    { name: 'Bull Roll', description: 'Beef, tomato, cucumber, onion, lettuce cheese, iceberg lettuce, sauce', price: '€12.00' },
    { name: 'Falafel Roll', description: 'Falafel, tomato, cucumber, pickle, red onion, iceberg lettuce, sauce', price: '€12.00' }
  ];

  const salads = [
    { name: 'Falafel Salad', description: 'Falafel, tomato, cucumber, pickle, red onion, iceberg lettuce, sauce', price: '€10.00' },
    { name: 'Chicken Salad', description: 'Chicken, tomato, cucumber, onion, iceberg lettuce, salad cheese, sauce', price: '€12.00' },
    { name: 'Kebab Salad', description: 'Kebab meat, tomato, cucumber, onion, iceberg lettuce, chili', price: '€12.00' }
  ];

  const lunchItems = [
    { name: 'Lunch Pizza', description: 'Choice of 3 toppings with salad and drink', price: '€9.50' },
    { name: 'Lunch Kebab', description: 'Kebab meat with rice, salad and drink', price: '€10.50' },
    { name: 'Lunch Roll', description: 'Choice of roll with drink', price: '€10.00' }
  ];

  const otherItems = [
    { name: 'Mini Vegetable Rolls (10pcs)', description: 'Crispy vegetable spring rolls', price: '€10.00' },
    { name: 'Chicken Nuggets (10pcs)', description: 'Golden crispy chicken nuggets', price: '€10.00' },
    { name: 'French Fries', description: 'Crispy golden french fries', price: '€5.00' }
  ];

  const drinks = [
    { name: 'Coca-Cola 0.33l', description: 'Classic Coca-Cola', price: '€1.90' },
    { name: 'Pepsi Max 0.33l', description: 'Sugar-free Pepsi', price: '€1.90' },
    { name: 'Jaffa Orange 0.33l', description: 'Orange flavored soda', price: '€1.90' },
    { name: 'Pepsi 1.5l', description: 'Large Pepsi bottle', price: '€5.00' },
    { name: 'Pepsi Max 1.5l', description: 'Large sugar-free Pepsi', price: '€5.00' },
    { name: 'Jaffa Orange 1.5l', description: 'Large orange soda', price: '€5.00' }
  ];

  const getMenuItems = () => {
    switch (activeTab) {
      case 'LUNCH':
        return lunchItems;
      case 'CLASSIC PIZZAS':
        return regularPizzas;
      case 'SPECIAL PIZZAS':
        return specialtyPizzas;
      case 'KEBABS':
        return [...kebabs, ...rolls];
      case 'SALADS':
        return salads;
      case 'OTHER DISHES':
        return otherItems;
      case 'DRINKS':
        return drinks;
      default:
        return regularPizzas;
    }
  };

  const getTabDescription = () => {
    switch (activeTab) {
      case 'LUNCH':
        return 'Available Monday-Friday 11:00-15:00';
      case 'CLASSIC PIZZAS':
        return 'All pizzas also available as pan pizzas (+€2)';
      case 'SPECIAL PIZZAS':
        return 'Special pizzas include double cheese and mayonnaise if desired';
      case 'KEBABS':
        return 'All kebab dishes are also available with chicken kebab';
      case 'SALADS':
        return 'Fresh salads with your choice of protein';
      case 'OTHER DISHES':
        return 'Appetizers and sides to complement your meal';
      case 'DRINKS':
        return 'Refreshing beverages to accompany your meal';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Menu
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
            Discover our delicious selection of pizzas, kebabs, and more
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white py-8 sticky top-20 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-red-500 border-b-2 border-red-500'
                    : 'text-gray-600 hover:text-red-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{activeTab}</h2>
            {getTabDescription() && (
              <p className="text-gray-600 text-lg">{getTabDescription()}</p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {getMenuItems().map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg sm:text-xl font-semibold flex-1 mr-2">{item.name}</h4>
                  <span className="text-red-500 font-bold text-lg whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Order Online Section */}
          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-600 mb-8">Or order from our online partners:</p>
            <div className="flex flex-row gap-8 justify-center items-center mb-6">
              <a 
                href="https://wolt.com/fi/fin/oulu/restaurant/pizzeria-ninve?srsltid=AfmBOop8OjH1-ybhhoba6TUhUZIoTzIPQBaGo86yYl7XmMq18fBft5sP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Wolt</span>
                </div>
                <span className="text-gray-800 font-medium">Order via Wolt</span>
              </a>
              <a 
                href="https://www.foodora.fi/restaurant/oyoj/pizzeria-ninve-oyoj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center">
                  <img 
                    src="https://raw.githubusercontent.com/samuel-warrie/kebab-pizza-lain/8438872477ba1b6dfe90ea1840930bf1cbee5c54/d7d193f561b4ce4035ab92a1181052b6%20(1).png" 
                    alt="Foodora" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <span className="text-gray-800 font-medium">Order via Foodora</span>
              </a>
            </div>
            <p className="text-sm text-gray-500">* Online orders handled via Wolt & Foodora. For direct ordering, please call us.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;