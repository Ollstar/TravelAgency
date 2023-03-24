// data/destinations.ts

export interface Destination {
    id: string;
    name: string;
    description: string;
    image_url: string;
  }
  
  export const destinations: Destination[] = [
    {
      id: '1',
      name: 'Paris, France',
      description: 'Experience the city of love, with its iconic Eiffel Tower and world-class cuisine.',
      image_url: 'https://example.com/paris.jpg',
    },
    {
      id: '2',
      name: 'New York City, USA',
      description: 'Explore the Big Apple, known for its vibrant culture, skyscrapers, and bustling streets.',
      image_url: 'https://example.com/new-york.jpg',
    },
    {
      id: '3',
      name: 'Sydney, Australia',
      description: 'Discover Sydney, with its stunning harbor, iconic Opera House, and beautiful beaches.',
      image_url: 'https://example.com/sydney.jpg',
    },
    {
      id: '4',
      name: 'Tokyo, Japan',
      description: 'Experience the unique blend of tradition and modernity in Tokyo, the bustling capital of Japan.',
      image_url: 'https://example.com/tokyo.jpg',
    },
    {
      id: '5',
      name: 'Rio de Janeiro, Brazil',
      description: 'Visit Rio de Janeiro, known for its famous Carnival, Copacabana beach, and Christ the Redeemer statue.',
      image_url: 'https://example.com/rio.jpg',
    },
    // Add more destinations as desired
  ];
  