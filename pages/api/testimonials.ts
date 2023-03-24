// api/testimonials.ts
import { Testimonial } from '@/types/Testimonial';
import type { NextApiRequest, NextApiResponse } from 'next';


const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jane Doe',
    title: 'CEO, Example Company',
    content: 'The private jet experience was exceptional. Highly recommended.',
    imageUrl: 'https://example.com/jane-doe.jpg',
  },
  {
    id: 2,
    name: 'John Smith',
    title: 'Entrepreneur',
    content: 'Outstanding service, comfortable flights, and great destinations.',
    imageUrl: 'https://example.com/john-smith.jpg',
  },
  // Add more testimonials as desired
];

const handler = async (req: NextApiRequest, res: NextApiResponse<Testimonial[]>): Promise<void> => {
  res.status(200).json(testimonials);
};

export default handler;
