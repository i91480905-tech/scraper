
import React, { useState, useCallback } from 'react';
import { SearchForm } from './components/SearchForm';
import { ResultsDisplay } from './components/ResultsDisplay';
import { Header } from './components/Header';
import { fetchBusinessData } from './services/geminiService';
import type { Business, InfoKey } from './types';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('San Francisco');
  const [category, setCategory] = useState<string>('coffee shops');
  const [count, setCount] = useState<number>(10);
  const [infoOptions, setInfoOptions] = useState<Record<InfoKey, boolean>>({
    address: true,
    phone: true,
    website: true,
    rating: true,
    reviewCount: true,
    operatingHours: false,
  });
  
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = useCallback(async () => {
    setLoading(true);
    setError(null);
    setBusinesses([]);

    const selectedOptions = Object.entries(infoOptions)
      .filter(([, isSelected]) => isSelected)
      .map(([key]) => key as InfoKey);

    if (selectedOptions.length === 0) {
        setError("Please select at least one piece of information to fetch.");
        setLoading(false);
        return;
    }

    try {
      const data = await fetchBusinessData(city, category, count, selectedOptions);
      setBusinesses(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(`Scraping Engine Error: ${err.message}`);
      } else {
        setError('An unknown error occurred.');
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [city, category, count, infoOptions]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <main className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <SearchForm
              city={city}
              setCity={setCity}
              category={category}
              setCategory={setCategory}
              count={count}
              setCount={setCount}
              infoOptions={infoOptions}
              setInfoOptions={setInfoOptions}
              onSearch={handleSearch}
              isLoading={loading}
            />
          </div>
          <div className="lg:col-span-2">
            <ResultsDisplay
              businesses={businesses}
              isLoading={loading}
              error={error}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;