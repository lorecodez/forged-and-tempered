'use client'
import React, { Suspense, lazy } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

const ProductCard = lazy(() => import('@/app/components/ProductCard').then(module => {
    return {default: module.default}
  })
);

export default function Featured() {

  const array = Array(10).fill('');
  
  return (
    <div className='p-2 flex flex-col justify-center items-center mb-28'>
      <h2 className='text-7xl font-bold m-10'>Featured Products</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[ Navigation ]}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }}
        className="mySwiper h-full w-full py-2 flex gap-4"
      >
        {array.map((item, index) =>
          <SwiperSlide key={index} className='flex flex-col items-center justify-center border'>
            <Suspense fallback={<p>Loading...</p>}>
              <ProductCard/>
            </Suspense>
          </SwiperSlide>
        )} 
      </Swiper>
    </div>
  )
}
