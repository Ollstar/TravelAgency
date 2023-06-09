// api/featured-destinations.ts
import { fetchUnsplashImage } from '@/helpers/fetchImage';
import { Destination } from '@/types/Destination';
import type { NextApiRequest, NextApiResponse } from 'next';


const featuredDestinations: Destination[] = [
  {
    id: '1',
    name: 'Paris, France',
    description: 'Experience the city of love, with its iconic Eiffel Tower and world-class cuisine.',
    image_url: '/paris1.jpg',
    cruise: false,
    mountain: false,
    shopping: true,
    ancientRuins: false,
  },
  {
    id: '2',
    name: 'New York City, USA',
    description: 'Explore the Big Apple, known for its vibrant culture, skyscrapers, and bustling streets.',
    image_url: '/newyork1.jpg',
    cruise: false,
    mountain: false,
    shopping: true,
    ancientRuins: false,
  },
  {
    id: '3',
    name: 'Sydney, Australia',
    description: 'Discover Sydney, with its stunning harbor, iconic Opera House, and beautiful beaches.',
    image_url: '/sydney1.jpg',
    cruise: true,
    mountain: false,
    shopping: true,
    ancientRuins: false,
  },
  // Add more destinations as desired
];

const handler = async (req: NextApiRequest, res: NextApiResponse<Destination[]>): Promise<void> => {
  const destinationsWithImages = await Promise.all(
    featuredDestinations.map(async (destination) => {
    //   const imageUrl = await fetchUnsplashImage(destination.name);
    //   return { ...destination, image_url: imageUrl };
    return destination;
    })
  );

  res.status(200).json(destinationsWithImages);
};

export default handler;
