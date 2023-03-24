import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Jet } from '@/types/Jet';

const JetDetail: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const [jet, setJet] = useState<Jet | undefined>(undefined);

  useEffect(() => {
    if (name && typeof name === 'string') {
      const lowerCaseName = name.toLowerCase();
      fetch(`/api/jet/${encodeURIComponent(lowerCaseName)}`)
        .then((res) => res.json())
        .then((data) => setJet(data))
        .catch((err) => console.error(err));
    }
  }, [name]);

  if (!jet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue to-indigo-600 py-16">
          <h2 className="text-4xl font-bold text-white text-center">{jet.name}</h2>
        </div>
        <section className="container mx-auto my-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <img src={jet.imageUrl} alt={jet.name} className="w-full h-64 lg:h-auto object-cover rounded" />
            </div>
            <div className="lg:w-1/2">
              <p className="mt-4">{jet.description}</p>
              <p className="mt-2">Capacity: {jet.capacity}</p>
              <p className="mt-2">Range: {jet.range} miles</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JetDetail;
