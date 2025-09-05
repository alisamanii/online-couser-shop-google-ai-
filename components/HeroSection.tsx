
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
        <div 
            aria-hidden="true" 
            className="absolute -top-96 left-1/2 flex -translate-x-1/2 transform">
            <div className="h-[44rem] w-[80rem] -translate-x-[10rem] rotate-[-60deg] transform bg-gradient-to-r from-violet-600/50 to-indigo-800/50 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 text-center relative">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
            Unlock Your Coding Potential
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master in-demand technologies with project-based courses from industry experts. Your journey to becoming a top-tier developer starts here.
        </p>
        <button className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-600/30">
            Browse Courses
        </button>
        </div>
    </div>
  );
};

export default HeroSection;
