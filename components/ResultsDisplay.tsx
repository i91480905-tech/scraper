
import React from 'react';
import type { Business } from '../types';
import { BusinessCard } from './BusinessCard';

interface ResultsDisplayProps {
  businesses: Business[];
  isLoading: boolean;
  error: string | null;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-800/50 rounded-lg">
        <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="mt-4 text-lg font-semibold text-white">Contacting Scraping Engine...</p>
        <p className="text-sm text-gray-400">Performing live data extraction, please wait.</p>
    </div>
);

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
    <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{message}</span>
    </div>
);

const InitialState: React.FC = () => (
    <div className="text-center p-8 bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-700">
        <h3 className="text-xl font-semibold text-white">Ready to Scrape</h3>
        <p className="mt-2 text-gray-400">Fill out the form on the left and click "Scrape Businesses" to see the results here.</p>
    </div>
);


export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ businesses, isLoading, error }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  if (businesses.length === 0) {
    return <InitialState />;
  }

  return (
    <div className="space-y-4">
      {businesses.map((business, index) => (
        <BusinessCard key={`${business.name}-${index}`} business={business} />
      ))}
    </div>
  );
};