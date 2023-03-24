import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Redirect to dynamic route for search results
    window.location.href = `/search/${searchTerm}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue to-indigo-600 py-16">
          <h2 className="text-4xl font-bold text-white text-center">Search Destinations</h2>
        </div>
        <section className="container mx-auto my-8">
          <form onSubmit={handleSearch} className="w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded border border-blue focus:ring-2 focus:ring-blue"
            />
            <button
              type="submit"
              className="bg-blue text-white px-4 py-2 mt-4 rounded hover:bg-indigo-600 transition duration-200 w-full"
            >
              Search
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

