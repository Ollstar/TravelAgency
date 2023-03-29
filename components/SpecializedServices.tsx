// src/components/SpecializedServices.tsx
import React from "react";
import { specializedServicesData } from "@/data/specializedServices";

const SpecializedServices: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8">Specialized Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {specializedServicesData.map((service, index) => (
          <div key={index} className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={service.image_url} alt={service.title} />
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecializedServices;
