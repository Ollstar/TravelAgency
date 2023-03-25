import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Jet } from '@/types/Jet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserFriends,
  faRulerHorizontal,
  faPlaneDeparture,
  faPlaneArrival,
} from '@fortawesome/free-solid-svg-icons';

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
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16">
          <h2 className="text-4xl font-bold text-white text-center">
            {jet.name}
          </h2>
        </div>
        <section className="container mx-auto my-8 p-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <img
                src={jet.imageUrl}
                alt={jet.name}
                className="w-full h-64 lg:h-auto object-cover rounded"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="mt-4 text-lg leading-7">{jet.description}</p>
              <div className="flex flex-wrap mt-4 space-x-4">
                <div className="flex items-center mt-2">
                  <FontAwesomeIcon
                    icon={faUserFriends}
                    className="mr-2 text-gray-500"
                  />
                  <span>{jet.capacity} passengers</span>
                </div>
                <div className="flex items-center mt-2">
                  <FontAwesomeIcon
                    icon={faRulerHorizontal}
                    className="mr-2 text-gray-500"
                  />
                  <span>{jet.range} mi range</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JetDetail;
