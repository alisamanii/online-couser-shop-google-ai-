
import React, { useState } from 'react';
import { CartProvider } from './hooks/useCart';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedCourses from './components/FeaturedCourses';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-slate-900 text-gray-200">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <main>
          <HeroSection />
          <FeaturedCourses />
        </main>
        <Footer />
        <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default App;
