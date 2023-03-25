import { Destination } from "@/types/Destination";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  destination: Destination;
}

const DestinationCard: React.FC<Props> = ({ destination }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-lg shadow-md"
    >
      <div className="border rounded-lg p-4">
        <img
          src={destination.image_url}
          alt={destination.name}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="text-xl font-bold mt-4">{destination.name}</h3>
        <p className="mt-2">{destination.description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-indigo-500 transition duration-200">
          <a href={`/destinations/${destination.name}`}>Learn More</a>
        </button>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
