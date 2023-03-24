// api/featured-blog-posts.ts
import { BlogPost } from '@/types/BlogPost';
import type { NextApiRequest, NextApiResponse } from 'next';


const featuredBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Top 5 Private Jet Destinations for 2023',
    imageUrl: 'https://example.com/blog-post-1.jpg',
    excerpt: 'Discover the most popular private jet destinations for this year.',
    author: 'Jane Doe',
    content: 'Are you looking for a luxurious getaway in 2023? Look no further than these top private jet destinations! From the picturesque beaches of Bali to the snow-capped mountains of Aspen, these destinations offer the perfect mix of relaxation and adventure. So why wait? Book your private jet today and get ready for the trip of a lifetime!',
    date: '2023-01-15',
  },
  {
    id: 2,
    title: 'The Benefits of Private Jet Travel',
    imageUrl: 'https://example.com/blog-post-2.jpg',
    excerpt: 'Learn about the advantages of private jet travel over commercial flights.',
    content: 'Tired of the long lines and delays at the airport? Private jet travel is the solution you’ve been looking for! With a private jet, you can skip the airport crowds and enjoy personalized service, comfortable seating, and a stress-free travel experience. Plus, with the ability to fly to smaller airports, you can get closer to your final destination and save time on ground transportation. Discover the benefits of private jet travel today!',
    author: 'John Smith',
    date: '2023-02-10',
  },
  // Add more blog posts as desired
];

const handler = async (req: NextApiRequest, res: NextApiResponse<BlogPost[]>): Promise<void> => {
  res.status(200).json(featuredBlogPosts);
};

export default handler;
