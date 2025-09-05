
import React, { Fragment } from 'react';
import { useCart } from '../hooks/useCart';
import { XMarkIcon, TrashIcon } from './Icons';

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();

  return (
    <Fragment>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-slate-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-slate-700">
            <h2 className="text-2xl font-bold text-white">Your Cart</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <XMarkIcon className="w-7 h-7" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center text-gray-400 mt-20">
                <p>Your cart is empty.</p>
                <p className="text-sm">Add some courses to get started!</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li key={item.id} className="flex items-center space-x-4 bg-slate-700/50 p-3 rounded-lg">
                    <img src={item.imageUrl} alt={item.title} className="w-20 h-16 object-cover rounded-md" />
                    <div className="flex-grow">
                      <h3 className="text-md font-semibold text-white">{item.title}</h3>
                      <p className="text-indigo-400 font-bold">${item.price.toFixed(2)}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500 p-1">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 border-t border-slate-700 bg-slate-900">
              <div className="flex justify-between items-center mb-4 text-lg">
                <span className="font-semibold text-gray-300">Subtotal:</span>
                <span className="font-bold text-white">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-500 transition-colors">
                Proceed to Checkout
              </button>
               <button onClick={clearCart} className="w-full mt-2 text-sm text-gray-500 hover:text-red-400 transition-colors">
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ShoppingCart;
