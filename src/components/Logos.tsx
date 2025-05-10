import React from 'react'
import Image from 'next/image'

const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-32 px-5 bg-background">
            <p className="text-xl font-medium text-center">Our Partners </p>
            <div className="mt-5 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 opacity-65 logos-container">
                <Image
                    src="/images/kipp-logo.jpg"
                    alt="kipp logo"
                    width={200}
                    height={200}
                    className="h-25 w-25 object-contain"
                />
                <Image
                    src="/images/republic-logo.jpg"
                    alt="republic logo"
                    width={200}
                    height={200}
                    className="h-25 w-25 object-contain"
                />
                <Image
                    src="/images/newb-logo.jpg"
                    alt="new believer logo"
                    width={200}
                    height={200}
                    className="h-25 w-25 object-contain"
                />
                <Image
                    src="/images/tsu-logo.png"
                    alt="tsu logo"
                    width={200}
                    height={200}
                    className="h-25 w-25 object-contain"
                />
            
               
            </div>
        </section>
    )
}

export default Logos