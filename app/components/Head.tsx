'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Head() {
    
    const pathname = usePathname();

  return (
    <div className='font-newsreader flex items-center justify-between bg-transparent sticky z-20 w-full h-fit m-2 p-2'>
        <menu className='flex items-center justify-center gap-4 text-xl font-sans font-light'>
            <Link href={'/'} className='group flex flex-col items-center justify-center hover:text-white'>
                Home
                <span className={`${pathname == '/' && 'scale-100'} group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-black w-full h-[2px]`}></span>
            </Link>
            <Link href={'/'} className='group flex flex-col items-center justify-center hover:text-white'>
                Shop
                <span className={`${pathname == '/shop' && 'scale-100'} group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-black w-full h-[2px]`}></span>
            </Link>
            <Link href={'/'} className='group flex flex-col items-center justify-center hover:text-white'>
                Our Story
                <span className={`${pathname == '/about' && 'scale-100'} group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-black w-full h-[2px]`}></span>
            </Link>
            <Link href={'/'} className='group flex flex-col items-center justify-center hover:text-white'>
                Contact
                <span className={`${pathname == '/contact' && 'scale-100'} group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-black w-full h-[2px]`}></span>
            </Link>
        </menu>
        <p className=' bg-transparent font-newsreader text-6xl font-thin text-white px-2 '>Forged &amp; Tempered</p>

        <menu className='flex items-center justify-center gap-4 font-sans font-light'>
            <li>
                <Link
                href={'/'}
                className='text-xl text-black group flex flex-col items-center justify-center hover:text-white'
                >
                    Cart ({0})
                    <span className=' group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-black w-full h-[2px]'></span>
                </Link>
            </li>
            <li>
                <Link
                href='/'
                className='hover:bg-black hover:text-white transition-all ease-in-out duration-500 px-4 py-2 border rounded-full border-black text-black font-newsreader text-xl bg-white bg-opacity-30'
                >
                    Account
                </Link>
            </li>
            <li>
                <Link
                href='/'
                className='hover:bg-black hover:text-white transition-all ease-in-out duration-500 px-4 py-2 border rounded-full border-black text-black font-newsreader text-xl bg-white bg-opacity-30 '
                >
                    Sign Up
                </Link>
            </li>
        </menu>
    </div>
  )
}
