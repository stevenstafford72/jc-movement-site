'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/kids-sitting.jpg',
  '/images/kids-standing.jpg',
  '/images/kids1.jpg',
  '/images/kids2.jpg',
  '/images/kids3.jpg',
  '/images/kids4.jpg',
  '/images/kids5.jpg',
];

export default function SchoolSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mt-0 rounded-2xl overflow-hidden shadow-xl border-[6px] border-black bg-[#2f4f4f]">
      <Image
        src={images[index]}
        alt={`slide-${index}`}
        width={600}
        height={400}
        className="object-cover w-full h-auto transition-all duration-700 ease-in-out rounded-xl"
        unoptimized
      />

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 rounded-full p-2"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 rounded-full p-2"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 w-full flex justify-center space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
