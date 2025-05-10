import React from 'react';
import Image from 'next/image';

const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-32 px-5 bg-background">
            <p className="text-xl font-medium text-center">Our Partners</p>
            <div className="mt-5 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 opacity-65 logos-container">
                <Image
                    src="/images/kipp-logo.jpg"
                    alt="KIPP logo"
                    width={200}
                    height={200}
                    className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32 xl:h-40 xl:w-40 object-contain"
                />
                <Image
                    src="/images/republic-logo.jpg"
                    alt="Republic logo"
                    width={200}
                    height={200}
                    className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32 xl:h-40 xl:w-40 object-contain"
                />
                <Image
                    src="/images/newb-logo.jpg"
                    alt="New Believer logo"
                    width={200}
                    height={200}
                    className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32 xl:h-40 xl:w-40 object-contain"
                />
                <Image
                    src="/images/tsu-logo.png"
                    alt="TSU logo"
                    width={200}
                    height={200}
                    className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32 xl:h-40 xl:w-40 object-contain"
                />
            </div>
        </section>
    );
};

export default Logos;