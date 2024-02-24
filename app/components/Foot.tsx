import React from 'react';
import Logo from '@/public/favicon.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Foot() {
  return (
    <div className='flex flex-col w-full items-center justify-center'>
      <div className='flex w-full items-center justify-between px-4'>
        <section className='w-1/3 flex flex-col items-center justify-center text-xl p-4'>
          <h3 className='text-4xl font-bold font-newsreader'>Navigation</h3>
          <ul className='font-sans'>
            <li className='hover:underline'>
              <Link
              href={'/'}
              title='Home'
              >
                Home
              </Link>
            </li>
            <li className='hover:underline'>
              <Link
              href={'/'}
              title='Shop'
              >
                Shop
              </Link>
            </li>
            <li className='hover:underline'>
              <Link
              href={'/'}
              title='Our Story'
              >
                Our Story
              </Link>
            </li>
            <li className='hover:underline'>
              <Link
              href={'/'}
              title='Contact'
              >
                Contact
              </Link>
            </li>
            <li className='hover:underline'>
              <Link
              href={'/'}
              title='Shipping Policy'
              >
                Shipping Policy
              </Link>
            </li>
            <li className='hover:underline'>
              <Link
              href={'/'}
              title='Privacy Policy'
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </section>
        <section className='w-1/3 flex flex-col items-center justify-center'>
          <h4 className='text-4xl font-bold'>Join Our Newsletter</h4>
          <form className='flex flex-col justify-center gap-4'>
            <input
            title='Email'
            placeholder='your@email.com'
            type='email'
            className='border-b border-black p-2 text-xl w-80'
            />
            <button
            className='border border-black text-black text-2xl py-2 px-4 w-80'
            >
              Sign Up
            </button>
          </form>
        </section>
        <section className='w-1/3 flex items-center justify-center gap-4'>
          <Image
          title='Forged & Tempered'
          src={Logo}
          alt='Forged & Tempered'
          className=' w-80 h-80 object-contain'
          />
          <p className='text-4xl'>
            &quot;Hand crafted jewelry. We make each piece is unique to you.&quot;
          </p>
        </section>
      </div>
      <div>
        <Link href={'https://lorenzowashington.com'} className='font-mono hover:underline'>Designed and Developed by Lorenzo Washington</Link>
      </div>
    </div>
  )
}
