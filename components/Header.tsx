
import React from 'react';
import { TargetIcon } from './icons';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <div className="flex items-center justify-center gap-4">
        <TargetIcon className="h-10 w-10 text-cyan-400" />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Local Business Scraper
        </h1>
      </div>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
        Use the power of AI to find and extract details about businesses anywhere.
      </p>
    </header>
  );
};
