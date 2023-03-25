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
      className="overflow-hidden h-full rounded-lg shadow-md bg-white"
    >
      <div className="border rounded-lg flex flex-col min-h-full">
        <img
          src={blogPost.imageUrl}
          alt={blogPost.title}
          className="w-full h-48 object-cover"
        />
        <div className="min-h-full justify-between flex-grow flex flex-col p-4">
          <div>
            <h3 className="text-xl font-bold mb-4">{blogPost.title}</h3>
          </div>
          <div className="flex-grow overflow-y-auto mb-4">
            <p>{blogPost.excerpt}</p>
          </div>
        </div>
        <div className="border-t mt-4 flex p-4">
          <p className="text-sm flex-grow">
            By {blogPost.author} on {blogPost.date}
          </p>
          <a
            href={`/blog/${blogPost.title}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-indigo-500 transition duration-200"
          >
            Read More
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;
