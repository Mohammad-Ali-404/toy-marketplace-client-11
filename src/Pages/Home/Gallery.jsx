/* eslint-disable no-unused-vars */
import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../assets/gallery/image1.jpeg'
import img2 from '../../assets/gallery/image2.jpeg'
import img3 from '../../assets/gallery/image3.png'
import img4 from '../../assets/gallery/image4.png'
import img5 from '../../assets/gallery/image5.jpg'
import img6 from '../../assets/gallery/image6.jpeg'
import img7 from '../../assets/gallery/image7.jpg'
import img8 from '../../assets/gallery/image8.jpeg'
import img9 from '../../assets/gallery/image9.jpeg'
import img10 from '../../assets/gallery/image10.png'
const Gallery = () => {
    return (
        <div className='mt-12'>
            <h1 className='text-4xl text-center italic font-bold'>Our Car Toy Gallery</h1>
            <Marquee>
            <section className="py-6 dark:bg-gray-800 mt-8">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-10 sm:grid-cols-2">
                        <img className="object-cover w-80 dark:bg-gray-500 aspect-square" src={img1} />
                        <img className="object-cover w-80 dark:bg-gray-500 aspect-square" src={img2} />
                        <img className="object-cover w-80 dark:bg-gray-500 aspect-square" src={img3} />
                        <img className="object-cover w-80 dark:bg-gray-500 aspect-square" src={img4} />
                        <img className="object-cover w-80 dark:bg-gray-500 aspect-square" src={img5} />
                        <img className="object-cover w-80 dark:bg-gray-500 aspect-square" src={img6} />
                        <img className="object-cover w-80 dark:bg-gray-500 aspect-square" src={img7} />
                        <img className="object-cover w-80 dark:bg-gray-500 aspect-square" src={img8} />
                        <img className="object-cover w-80 dark:bg-gray-500 aspect-square" src={img9} />
                        <img className="object-cover w-80 dark:bg-gray-500 aspect-square" src={img10} />
                    </div>
                </div>
            </section>
            </Marquee>
        </div>
    );
};

export default Gallery;