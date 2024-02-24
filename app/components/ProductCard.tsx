import React from 'react';
import Chain from '@/public/silver_necklace.png'
import Image from 'next/image';

export default function ProductCard() {
  return (
    <div className='w-fit p-4 flex flex-col items-center justify-center aspect-square group'>
      <picture>
        <Image
        src={Chain}
        alt={'Silver Chain'}
        style={{zIndex: '0'}} 
        className=' object-cover w-96 h-96 aspect-square relative !z-0'
        />
        <div className='invisible flex flex-col gap-8 items-center justify-center z-10 top-0 left-0 w-full h-96 bg-black bg-opacity-30 absolute self-center opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-linear'>
          <button
          title='Add to Cart'
          className='border border-black text-white bg-black py-2 px-4 text-3xl hover:text-black hover:bg-white transition-all ease-linear duration-200'
          >
            Add to Cart
          </button>
          <button
          title='See Product'
          className='border border-white text-white py-2 px-4 text-3xl hover:text-black hover:bg-white transition-all ease-linear duration-200'
          >
            View More
          </button>
        </div>
      </picture>
      <div className='flex items-center justify-between text-lg w-full font-sans'>
        <h4 className='font-bold'>Silver Chain</h4>
        <p className='font-light'>$10</p>
      </div>
    </div>
  )
}
