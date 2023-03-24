import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JetCard from '../components/JetCard';
import { Jet } from '@/types/Jet';

const Jets: React.FC = () => {
  const [jets, setJets] = useState<Jet[]>([]);

  useEffect(() => {
    fetchJets();
  }, []);

  const fetchJets = async () => {
    const res = await fetch('/api/jets');
    const data: Jet[] = await res.json();
    setJets(data);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue to-indigo-600 py-16">
          <h2 className="text-4xl font-bold text-white text-center">
            Explore the World in Style with Our Private Jets
          </h2>
        </div>
        <section className="container mx-auto my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jets.map((jet) => (
              <JetCard key={jet.name} jet={jet} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Jets;
