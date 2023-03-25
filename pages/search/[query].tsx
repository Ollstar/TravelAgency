import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DestinationCard from '../../components/DestinationCard';
import { Destination } from '@/types/Destination';


const SearchResults: React.FC = () => {
  const router = useRouter();
  const { query } = router.query;
  const [searchResults, setSearchResults] = useState<Destination[]>([]);

  useEffect(() => {
    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  const fetchSearchResults = async () => {
    const res = await fetch(`/api/search?query=${query}`);
    const data: Destination[] = await res.json();
    setSearchResults(data);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <div className="bg-gradient-to-r from-blue to-indigo-600 py-16">
          <h2 className="text-4xl font-bold text-white text-center">Search Results</h2>
        </div>
        <section className="container mx-auto my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchResults.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;
