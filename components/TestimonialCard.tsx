import React from 'react';
import { Testimonial } from '@/types/Testimonial';

interface Props {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
  return (
    <div className="border rounded-lg p-4">
      <img
        src={testimonial.imageUrl}
        alt={testimonial.name}
        className="w-16 h-16 object-cover rounded-full mx-auto"
      />
      <h3 className="text-lg font-bold mt-4">{testimonial.name}</h3>
      <p className="text-sm italic">{testimonial.title}</p>
      <p className="mt-2">{testimonial.content}</p>
    </div>
  );
};

export default TestimonialCard;
