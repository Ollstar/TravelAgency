import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { blogPosts } from '../../data/blogPosts';
import { BlogPost } from '@/types/BlogPost';
import BlogPostCard from '../../components/BlogPostCard';

const BlogDetail: React.FC = () => {
  const router = useRouter();
  const { title } = router.query;
  const [blogPost, setBlogPost] = useState<BlogPost | undefined>(undefined);

  useEffect(() => {
    if (title && typeof title === 'string') {
      const lowerCaseTitle = title.toLowerCase();
      const post = blogPosts.find((p) => p.title.toLowerCase() === lowerCaseTitle);
      setBlogPost(post);
    }
  }, [title]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16">
          <h2 className="text-4xl font-bold text-white text-center">{blogPost.title}</h2>
        </div>
        <section className="container mx-auto my-8 p-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <img src={blogPost.imageUrl} alt={blogPost.title} className="w-full h-64 lg:h-auto object-cover rounded" />
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-500 mt-4">{blogPost.date}</p>
              <p className="text-gray-500">By {blogPost.author}</p>
              <p className="mt-4">{blogPost.content}</p>
            </div>
          </div>
        </section>
        <section className="container mx-auto my-8 p-4">
          <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {blogPosts
              .filter((p) => p.id !== blogPost.id) // Exclude current blog post
              .map((post) => (
                <BlogPostCard key={post.id} blogPost={post} />
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
