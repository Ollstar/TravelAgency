// api/blog/[title].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { blogPosts } from '@/data/blogPosts';
import { BlogPost } from '@/types/BlogPost';

const handler = (req: NextApiRequest, res: NextApiResponse<BlogPost | { error: string }>): void => {
  const {
    query: { title },
  } = req;

  if (typeof title !== 'string') {
    res.status(400).json({ error: 'Invalid blog post title' });
    return;
  }

  const decodedTitle = decodeURIComponent(title);
  const blogPost = blogPosts.find((post) => post.title.toLowerCase() === decodedTitle.toLowerCase());

  if (!blogPost) {
    res.status(404).json({ error: 'Blog post not found' });
    return;
  }

  res.status(200).json(blogPost);
};

export default handler;
