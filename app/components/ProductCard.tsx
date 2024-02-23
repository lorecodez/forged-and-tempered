import React from 'react';
import Chain from '@/public/silver_necklace.png'
import Image from 'next/image';

export default function ProductCard() {
  return (
    <div className='w-fit p-4 flex flex-col items-center justify-center aspect-square'>
      <picture>
        <Image
        src={Chain}
        alt={'Silver Chain'}
        
        className=' object-cover w-96 h-96 aspect-square'
        />
      </picture>
      <div className='flex items-center justify-between text-lg w-full font-sans'>
        <h4 className='font-bold'>Silver Chain</h4>
        <p>$10</p>
      </div>
    </div>
  )
}
