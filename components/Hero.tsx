import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero: React.FC = () => {
  const textVariants = {
    header: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    },
    text: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    },
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 relative h-screen">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.h1
          className="text-6xl font-bold text-white text-center mb-4"
          initial="hidden"
          animate="visible"
          variants={textVariants.header}
        >
          Discover Your Next Adventure
        </motion.h1>
        <motion.p
          className="text-2xl text-white text-center mb-4"
          initial="hidden"
          animate="visible"
          variants={textVariants.text}
          transition={{ delay: 0.4 }}
        >
          Explore the world with our curated collection of stunning destinations.
        </motion.p>
          <motion.a
          href='/Book'
            className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Book Now
          </motion.a>

      </div>
    </section>
  );
};

export default Hero;
