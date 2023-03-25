import React from 'react';
import { Destination } from '@/types/Destination';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShip,
  faMountain,
  faShoppingBag,
  faMonument,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface Props {
  destination: Destination;
}

const DestinationCard: React.FC<Props> = ({ destination }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden h-full rounded-lg shadow-md bg-white"
    >
      <div className="border rounded-lg flex flex-col min-h-full">
        <img
          src={destination.image_url}
          alt={destination.name}
          className="w-full h-48 object-cover"
        />
        <div className="min-h-full justify-between flex-grow flex flex-col p-4">
          <div>
            <h3 className="text-xl font-bold mb-4">{destination.name}</h3>
            <div className="flex space-x-4 mb-4"></div>
          </div>
          <div className="flex-grow overflow-y-auto mb-4">
            <p>{destination.description}</p>
          </div>
        </div>
        <div className="border-t mt-4 flex p-4">
          <Link
            className="bg-blue-500 text-white px-4 py-2 mr-2 text-center rounded hover:bg-indigo-500 transition duration-200 flex-grow"
            href={`/destinations/${destination.name}`}
          >
            Learn More
          </Link>
          <Link className="bg-blue-500 text-white px-4 py-2 text-center rounded hover:bg-indigo-500 transition duration-200 flex-grow"
          href='/Book'
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
