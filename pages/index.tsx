import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DestinationCard from "../components/DestinationCard";
import TestimonialsCard from "../components/TestimonialCard";
import BlogPostCard from "../components/BlogPostCard";
import { Destination } from "@/types/Destination";
import { Testimonial } from "@/types/Testimonial";
import { BlogPost } from "@/types/BlogPost";
import { Jet } from "@/types/Jet";
import JetList from "@/components/JetList";
import { motion } from "framer-motion";
import Carousel from "@/components/Carousel";
import { CarouselItem } from "@/types/CarouselItem";
import Hero from "@/components/Hero";

const Index: React.FC = () => {
  const [featuredDestinations, setFeaturedDestinations] = useState<
    Destination[]
  >([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [featuredBlogPosts, setFeaturedBlogPosts] = useState<BlogPost[]>([]);
  const [jets, setJets] = useState<Jet[]>([]);

  useEffect(() => {
    fetchFeaturedDestinations();
    fetchTestimonials();
    fetchFeaturedBlogPosts();
    fetchJets();
  }, []);

  const fetchFeaturedDestinations = async () => {
    const res = await fetch("/api/featured-destinations");
    const data: Destination[] = await res.json();
    setFeaturedDestinations(data);
  };
  const fetchTestimonials = async () => {
    const res = await fetch("/api/testimonials");
    const data: Testimonial[] = await res.json();
    setTestimonials(data);
  };

  const fetchFeaturedBlogPosts = async () => {
    const res = await fetch("/api/featured-blog-posts");
    const data: BlogPost[] = await res.json();
    setFeaturedBlogPosts(data);
  };

  const fetchJets = async () => {
    const res = await fetch("/api/jets");
    const data: Jet[] = await res.json();
    setJets(data);
  };
  const carouselItems: CarouselItem[] = featuredDestinations.map(
    (destination) => ({
      id: destination.id,
      image: destination.image_url,
      alt: destination.name,
      title: destination.name,
      description: destination.description,
    })
  );
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section className="container my-16 ">
          <div className=" inset-0">
            <video
              src={"/sky.mp4"}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          
        </section>
        {/* Replace the static background with the Carousel component */}
        {/* <Carousel carouselItems={carouselItems} /> */}
        <section className="container mx-auto my-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </section>
        {/* Testimonials section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialsCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </section>
        {/* Jet Section */}
        <section className="container mx-auto my-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Jets</h2>
          <JetList jets={jets} />
        </section>
        {/* Blog Posts section */}
        <section className="container mx-auto my-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Blog Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogPosts.map((blogPost) => (
              <BlogPostCard key={blogPost.id} blogPost={blogPost} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
