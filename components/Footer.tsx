
import React from 'react';
import { CodeBracketIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
             <CodeBracketIcon className="w-8 h-8 text-indigo-400" />
            <span className="text-xl font-bold text-white">CodeCraft Academy</span>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CodeCraft Academy. All Rights Reserved.
          </p>
        </div>
        <div className="mt-6 text-center text-gray-500 text-xs">
          <p>Built with React & Tailwind CSS for an amazing learning experience.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
