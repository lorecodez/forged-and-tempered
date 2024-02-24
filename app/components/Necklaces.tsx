import React from 'react';
import Image from 'next/image';
import Necklacesbg from '@/public/necklacesbanner.jpg'

export default function Necklaces() {
  return (
    <div className='w-3/4 h-screen flex flex-col items-start justify-center mb-24'>
        <picture className='w-full h-full'>
            <Image
            title='background'
            src={Necklacesbg}
            alt='Necklaces'
            className=' object-contain w-full h-full'
            />
        </picture>
        <div className='z-10 absolute left-0 w-full h-full flex flex-col items-start justify-center gap-28'>
            <p className='text-7xl font-bold text-white'>
                Elegance is calling your name
            </p>
            <button className='border border-white text-white bg-black bg-opacity-30 text-7xl py-2 px-4'>
                Shop Now
            </button>
        </div>
      
    </div>
  )
}
