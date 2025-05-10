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

  // Cycle slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Preload adjacent images
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new window.Image();
      img.src = src;
    };

    preloadImage(images[(index + 1) % images.length]);
    preloadImage(images[(index - 1 + images.length) % images.length]);
  }, [index]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mt-0 rounded-2xl overflow-hidden shadow-xl border-[6px] border-black bg-[#2f4f4f]">
      <div className="relative w-full h-[400px]">
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`slide-${i}`}
            fill
            className={`object-cover rounded-xl transition-opacity duration-700 ease-in-out absolute top-0 left-0 w-full h-full ${
              i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            placeholder="blur"
            blurDataURL="/images/placeholder.jpg"
            priority={i === 0}
            unoptimized
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 rounded-full p-2 z-20"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 rounded-full p-2 z-20"
      >
        ›
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-2 w-full flex justify-center space-x-2 z-20">
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