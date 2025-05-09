import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SchoolSlideshow from './SchoolSlideshow';


import { heroDetails } from '@/data/hero';
import { Button } from '@headlessui/react';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="">
                <div className="relative w-full h-full">
                </div>
            </div>

            <div className="">
            </div>

            <div className="">
                <div className="flex-col">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto py-5 md:py-0">{heroDetails.heading}</h1>
                <p className="mt-3 text-foreground max-w-lg mx-auto">{heroDetails.subheading}</p>
                <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-2 w-fit mx-auto gap-1">
                    <Button className="bg-green-300 text-black hover:bg-green-600 px-6 py-3 rounded-full transition-colors border-1 border-2 border-black">
                        Donate Now
                    </Button>
                    <Button className="bg-gray-500 text-white hover:bg-black px-6 py-3 rounded-full transition-colors border-1 border-2 border-black">
                        Learn More
                    </Button>      
                </div>
                </div>
                 <div className=" mt-10 w-full max-w-2xl mx-auto">
                        <SchoolSlideshow />
                    </div>
            </div>
        </section>
    );
};

export default Hero;
