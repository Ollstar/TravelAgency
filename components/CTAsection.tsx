// src/components/CTASection.tsx
import React from "react";

const CTASection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Start Planning Your Next Adventure</h2>
      <div className="flex justify-center">
        <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded hover:bg-blue-200 transition duration-200">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CTASection;
