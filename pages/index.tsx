import React, { useState, useEffect, useRef } from "react";
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
import {
  motion,
  useAnimation,
  useTransform,
  useMotionValue,
} from "framer-motion";
import Carousel from "@/components/Carousel";
import { CarouselItem } from "@/types/CarouselItem";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTAsection";

const Index: React.FC = () => {
  const [featuredDestinations, setFeaturedDestinations] = useState<
    Destination[]
  >([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [featuredBlogPosts, setFeaturedBlogPosts] = useState<BlogPost[]>([]);
  const [jets, setJets] = useState<Jet[]>([]);
  const jetsSectionRef = useRef(null);
  const observeJetsSection = () => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting) {
          await animateJets();
          observer.disconnect(); // Stop observing once the animation is triggered
        }
      },
      { threshold: 0.1 } // Trigger the callback when at least 10% of the section is visible
    );

    if (jetsSectionRef.current) {
      observer.observe(jetsSectionRef.current);
    }
  };

  useEffect(() => {
    fetchFeaturedDestinations();
    fetchTestimonials();
    fetchFeaturedBlogPosts();
    fetchJets();
    observeJetsSection();
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
    animateJets();
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
  const useParallax = (minY: number, maxY: number, duration: number) => {
    const scrollY = useMotionValue(0);
    const scrollYRange = useTransform(scrollY, [0, duration], [minY, maxY]);

    useEffect(() => {
      const updateScrollY = () => scrollY.set(window.scrollY);
      window.addEventListener("scroll", updateScrollY);
      return () => window.removeEventListener("scroll", updateScrollY);
    }, [scrollY]);

    return scrollYRange;
  };

  const heroParallax = useParallax(0, -200, 1000);
  const featuredDestinationsParallax = useParallax(-90, 50, 1000);
  const jetsAnimation = useAnimation();
  const animateJets = async () => {
    await jetsAnimation.start({
      x: "-100%",
      opacity: 0,
      transition: { duration: 0 },
    });

    await jetsAnimation.start({
      x: "0%",
      opacity: 1,
      transition: { duration: 0.5 },
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <motion.div style={{ y: heroParallax }}>
          <Hero />
        </motion.div>
        <motion.div style={{ y: featuredDestinationsParallax }}>
          <section className="container mx-auto my-16 px-4 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Destinations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>
          </section>
        </motion.div>
        {/* Replace the static background with the Carousel component */}
        {/* <Carousel carouselItems={carouselItems} /> */}
        <CTASection />
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
        <h2 className="text-3xl font-bold text-center mt-2 mb-12">Jets</h2>

        <motion.section
          ref={jetsSectionRef}
          className="container mx-auto px-4 relative z-10"
          animate={jetsAnimation}
        >
          <JetList jets={jets} />
        </motion.section>

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
