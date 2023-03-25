import React from "react";
import { Destination } from "@/types/Destination";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShip,
  faMountain,
  faShoppingBag,
  faMonument,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className="border rounded-lg flex flex-col h-full">
        <img
          src={destination.image_url}
          alt={destination.name}
          className="w-full h-48 object-cover"
        />
        <div className="min-h-0 justify-between flex-grow flex flex-col">
          <div>
            <h3 className="text-xl font-bold mt-4 ml-2">{destination.name}</h3>
            <div className="flex mt-2 space-x-4"></div>
          </div>
          <div className="flex-grow overflow-y-auto mt-2 p-2">
            <p>{destination.description}</p>
          </div>
        </div>
        <div className="flex mt-4 space-x-4 mb-2 ml-2">
          {destination.cruise && <FontAwesomeIcon icon={faShip} />}
          {destination.mountain && <FontAwesomeIcon icon={faMountain} />}
          {destination.shopping && <FontAwesomeIcon icon={faShoppingBag} />}
          {destination.ancientRuins && <FontAwesomeIcon icon={faMonument} />}
        </div>
        <div className="mt-4 flex p-2">
          <a
            className="bg-blue-500 text-white px-4 py-2 mr-2 text-center   rounded hover:bg-indigo-500 transition duration-200 flex-grow"
            href={`/destinations/${destination.name}`}
          >
            Learn More
          </a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-indigo-500 transition duration-200 flex-grow">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
