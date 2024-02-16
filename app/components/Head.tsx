'use client'
import Link from 'next/link'
import React from 'react'

export default function Head() {
  return (
    <div className='font-newsreader flex items-center justify-between bg-transparent absolute z-20 w-full h-fit m-2 p-2'>
        <menu className='flex items-center justify-center gap-4 text-2xl font-light'>
            <Link href={'/'} className='group flex flex-col items-center justify-center hover:text-white'>
                Home
                <span className=' group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-black w-full h-[2px]'></span>
            </Link>
            <Link href={'/'} className='group flex flex-col items-center justify-center hover:text-white'>
                Shop
                <span className=' group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-black w-full h-[2px]'></span>
            </Link>
            <Link href={'/'} className='group flex flex-col items-center justify-center hover:text-white'>
                About
                <span className=' group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-black w-full h-[2px]'></span>
            </Link>
            <Link href={'/'} className='group flex flex-col items-center justify-center hover:text-white'>
                Contact
                <span className=' group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-black w-full h-[2px]'></span>
            </Link>
        </menu>
        <p className=' bg-transparent font-newsreader text-6xl font-thin text-white px-2 '>Forged &amp; Tempered</p>

        <menu className='flex items-center justify-center gap-4'>
            <li>
                <Link
                href={'/'}
                className='text-2xl text-black font-light group flex flex-col items-center justify-center hover:text-white'
                >
                    Cart ({0})
                    <span className=' group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-black w-full h-[2px]'></span>
                </Link>
            </li>
            <li>
                <Link
                href='/'
                className='hover:bg-black hover:text-white transition-all ease-in-out duration-500 px-4 py-2 border rounded-full border-black text-black font-newsreader text-2xl bg-white bg-opacity-30 font-light'
                >
                    Account
                </Link>
            </li>
            <li>
                <Link
                href='/'
                className='hover:bg-black hover:text-white transition-all ease-in-out duration-500 px-4 py-2 border rounded-full border-black text-black font-newsreader text-2xl bg-white bg-opacity-30 font-light'
                >
                    Sign Up
                </Link>
            </li>
        </menu>
    </div>
  )
}
