import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Destination } from '@/types/Destination';



const DestinationDetails: React.FC = () => {
    const router = useRouter();
    const { name } = router.query;
    const [destination, setDestination] = useState<Destination | null>(null);
  
    useEffect(() => {
      if (name) {
        fetchDestinationDetails();
      }
    }, [name]);
  
    const fetchDestinationDetails = async () => {
      console.log(name);
      if (typeof name !== 'string') return;
      const res = await fetch(`/api/destination/${encodeURIComponent(name)}`);
      const data: Destination = await res.json();
      setDestination(data);
    };
  
    return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {destination && (
          <>
            <div className="bg-gradient-to-r from-blue to-indigo-600 py-16">
              <h2 className="text-4xl font-bold text-white text-center">{destination.name}</h2>
            </div>
            <section className="container mx-auto my-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <img src={destination.image_url} alt={destination.name} className="w-full h-64 lg:h-auto object-cover rounded" />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold">Description</h3>
                  <p className="mt-4">{destination.description}</p>
                  {/* Add more destination-specific information here */}
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DestinationDetails;

