import React from 'react'

export default function ScrollingText() {

  const array = new Array(4).fill('x')
  return (
    <div className='inline-flex flex-nowrap w-screen overflow-hidden text-2xl text-white justify-between text-nowrap items-center group'>
      <div className='flex  w-full items-center justify-between animate-loop-scroll  group-hover:animate-none'>
        {array.map((x, index) =>  
          <div key={index} className='flex items-center justify-between w-full'>
            <p className='w-full text-center'>
            VALENTINE&apos;S DAY SALE 50% OFF
            </p>
            <span className='text-center'>&#x2022;</span>
          </div>
        )}
      </div>
      <div aria-hidden='true' className='flex items-center w-full justify-between animate-loop-scroll  group-hover:animate-none'>
        {array.map((x, index) =>  
          <div key={index} className='flex items-center justify-between w-full'>
            <p className='w-full text-center'>
            VALENTINE&apos;S DAY SALE 50% OFF
            </p>
            <span className='text-center'>&#x2022;</span>
          </div>
        )}
      </div>
    </div>
  )   
}
