// src/components/Testimonials.tsx
import React from "react";
import { Testimonial2 } from "@/types/Testimonial2";
import { testimonialsData } from "@/data/testimonials";

const Testimonials: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonialsData.map((testimonial: Testimonial2, index: number) => (
          <div key={index} className="bg-gray-100 p-4 rounded">
            <p>{testimonial.testimonial}</p>
            <h3 className="font-bold mt-4">{testimonial.name}</h3>
            <p>{testimonial.trip}</p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Testimonials;
