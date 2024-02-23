import React from 'react'
import RingModel1 from '@/public/ring_model_1.jpg'
import RingModel2 from '@/public/ring_model_2.jpg'
import Image from "next/image";
import Link from 'next/link';

export default function WinterCollection() {
  return (
    <div className='flex p-4 h-screen'>
      <div className='flex items-center justify-center w-1/2'>
        <Image
        src={RingModel1}
        alt='Ring Model 1'
        className='object-cover w-2/3'
        />
        
        
      </div>
        
      {/* <section className='flex items-start h-full w-1/4 z-20 left-96 text-4xl'>
       
      </section> */}
      <div className='w-1/3'>
        <picture className=' w-96 justify-center flex flex-col items-center h-full p-2'>
            <Image
            src={RingModel2}
            alt='Ring Model 2'
            className='object-cover w-full'
            />
        </picture>
      </div>
      {/* <section className='flex items-center h-full w-fit z-20 left-96 text-4xl'>
        
      </section> */}
      <div className='flex flex-col justify-center items-start h-full w-1/3 z-30 left-96 text-4xl gap-4'>
        <p className='text-7xl w-full font-bold text-black'>
            2023 Winter Collection
        </p>
        <p className='text-2xl'>
        BUILT TO WITHSTAND, CHANGE, AND MOVE THROUGH LIFE WITH YOU.
        </p>
        <Link
        title='Shop Winter Collection'
        href={'/collection/2023/winter'}
        className='border border-black px-4 py-3 whitespace-nowrap hover:bg-black hover:text-white transition-all ease-in-out duration-300'>
            Shop Collection
        </Link>
      </div>
    </div>
  )
}
