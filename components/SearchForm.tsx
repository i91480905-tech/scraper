
import React from 'react';
import type { InfoKey } from '../types';
import { AddressIcon, PhoneIcon, GlobeIcon, StarIcon, UsersIcon, ClockIcon } from './icons';

interface SearchFormProps {
  city: string;
  setCity: (city: string) => void;
  category: string;
  setCategory: (category: string) => void;
  count: number;
  setCount: (count: number) => void;
  infoOptions: Record<InfoKey, boolean>;
  setInfoOptions: (options: Record<InfoKey, boolean>) => void;
  onSearch: () => void;
  isLoading: boolean;
}

const infoDetails: { key: InfoKey; label: string; icon: React.FC<{className?: string}> }[] = [
  { key: 'address', label: 'Address', icon: AddressIcon },
  { key: 'phone', label: 'Phone Number', icon: PhoneIcon },
  { key: 'website', label: 'Website', icon: GlobeIcon },
  { key: 'rating', label: 'Rating', icon: StarIcon },
  { key: 'reviewCount', label: 'Review Count', icon: UsersIcon },
  { key: 'operatingHours', label: 'Operating Hours', icon: ClockIcon },
];

export const SearchForm: React.FC<SearchFormProps> = ({
  city, setCity, category, setCategory, count, setCount, infoOptions, setInfoOptions, onSearch, isLoading,
}) => {
  const handleInfoChange = (key: InfoKey) => {
    setInfoOptions({ ...infoOptions, [key]: !infoOptions[key] });
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 sticky top-8">
      <h2 className="text-2xl font-bold text-white mb-6">Search Criteria</h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            placeholder="e.g., New York"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">Business Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            placeholder="e.g., restaurants, plumbers"
          />
        </div>
        <div>
          <label htmlFor="count" className="block text-sm font-medium text-gray-300 mb-2">Number of Businesses: <span className="font-bold text-cyan-400">{count}</span></label>
          <input
            type="range"
            id="count"
            min="1"
            max="50"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-300 mb-3">Information to retrieve</h3>
          <div className="grid grid-cols-2 gap-4">
            {infoDetails.map(({ key, label, icon: Icon }) => (
              <label key={key} className="flex items-center space-x-3 cursor-pointer p-2 rounded-md hover:bg-gray-700/50 transition">
                <input
                  type="checkbox"
                  checked={infoOptions[key]}
                  onChange={() => handleInfoChange(key)}
                  className="h-4 w-4 rounded bg-gray-600 border-gray-500 text-cyan-500 focus:ring-cyan-600"
                />
                <Icon className="h-5 w-5 text-gray-400" />
                <span className="text-white text-sm">{label}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          onClick={onSearch}
          disabled={isLoading}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-gray-900 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Scraping...' : 'Scrape Businesses'}
        </button>
      </div>
    </div>
  );
};
