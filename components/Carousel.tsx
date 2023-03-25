import React, { useRef, useState } from 'react';
import { CarouselItem } from '@/types/CarouselItem';

interface CarouselProps {
  carouselItems: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ carouselItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    const newIndex = activeIndex - 1 < 0 ? carouselItems.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % carouselItems.length;
    setActiveIndex(newIndex);
  };

  const renderIndicators = () => {
    return carouselItems.map((_, index) => (
      <button
        key={index}
        className={`mx-1 h-1 w-6 ${
          index === activeIndex ? 'bg-white' : 'bg-white opacity-50'
        }`}
        onClick={() => setActiveIndex(index)}
        aria-label={`Slide ${index + 1}`}
      ></button>
    ));
  };

  return (
    <div className="relative w-full overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          ref={carouselRef}
          className={`absolute top-0 left-0 w-full h-full ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-600 ease-in-out`}
        >
          <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
          <div className="absolute bottom-5 inset-x-0 py-5 text-center text-white md:block">
            <h5 className="text-xl">{item.title}</h5>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center items-center mb-4">
        {renderIndicators()}
      </div>
      <button
        className="absolute top-0 bottom-0 left-0 z-10 w-16 flex items-center justify-center text-white opacity-50 hover:opacity-90 focus:outline-none"
        onClick={handlePrev}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="absolute top-0 bottom-0 right-0 z-10 w-16 flex items-center justify-center text-white opacity-50 hover:opacity-90 focus:outline-none"
        onClick={handleNext}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Carousel;
