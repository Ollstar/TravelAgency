// components/BlogPostCard.tsx
import React from 'react';
import { BlogPost } from '@/types/BlogPost';
import { motion } from 'framer-motion';

interface Props {
  blogPost: BlogPost;
}

const BlogPostCard: React.FC<Props> = ({ blogPost }) => {
  return (
    <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="overflow-hidden rounded-lg shadow-md"
  >
    <div className="border rounded-lg p-4">
      <img
        src={blogPost.imageUrl}
        alt={blogPost.title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-xl font-bold mt-4">{blogPost.title}</h3>
      <p className="mt-2">{blogPost.excerpt}</p>
      <p className="text-sm mt-2">By {blogPost.author} on {blogPost.date}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-indigo-500 transition duration-200">
        <a href={`/blog/${blogPost.title}`}>Read More</a>
      </button>
    </div>
  </motion.div>
  );
};

export default BlogPostCard;
