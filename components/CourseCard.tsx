
import React from 'react';
import { useCart } from '../hooks/useCart';
import type { Course } from '../types';
import { PlusCircleIcon } from './Icons';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { addToCart, cart } = useCart();
  const isInCart = cart.some(item => item.id === course.id);

  const handleAddToCart = () => {
    addToCart(course);
  };

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 group">
      <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-bold text-white mb-1">{course.title}</h3>
                <p className="text-sm text-gray-400 mb-4">by {course.instructor}</p>
            </div>
            <div className="text-2xl font-black text-indigo-400">
                ${course.price}
            </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.map(tag => (
            <span key={tag} className="bg-slate-700 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <p className="text-gray-300 text-sm mb-6 h-10">{course.description}</p>
        <button
          onClick={handleAddToCart}
          disabled={isInCart}
          className={`w-full flex items-center justify-center text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 ${
            isInCart
              ? 'bg-green-600 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-500'
          }`}
        >
          <PlusCircleIcon className="w-5 h-5 mr-2" />
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
