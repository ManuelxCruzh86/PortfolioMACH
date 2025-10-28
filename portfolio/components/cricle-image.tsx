"use client"

import Image from 'next/image'
import flowers from '@/public/flowers.png'

const CircleImage = () => {
    return (
        <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image
                src={flowers}
                width={300}
                height={300}
                className="w-full h-full"
                alt="Decorative flowers"
                placeholder="blur"
                loading="lazy"
            />
        </div>

    );
}

export default CircleImage;