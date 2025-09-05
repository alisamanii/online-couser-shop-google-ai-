
import React from 'react';
import { useCart } from '../hooks/useCart';
import { ShoppingCartIcon, CodeBracketIcon } from './Icons';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { getCartItemCount } = useCart();
  const itemCount = getCartItemCount();

  return (
    <header className="bg-slate-900/70 backdrop-blur-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <CodeBracketIcon className="w-8 h-8 text-indigo-400" />
          <span className="text-2xl font-bold text-white">CodeCraft</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-gray-300">
          <a href="#" className="hover:text-indigo-400 transition-colors">Courses</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">About Us</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Contact</a>
        </div>
        <div className="flex items-center">
          <button onClick={onCartClick} className="relative text-gray-300 hover:text-indigo-400 transition-colors">
            <ShoppingCartIcon className="w-7 h-7" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-indigo-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
