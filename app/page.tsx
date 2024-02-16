'use sever'

import Image from "next/image";
import Jewelrybg from "@/public/jewelrybg.jpg";
import { Suspense, lazy } from "react";

const Featured = lazy(() => import('@/app/components/Featured').then(module => {
    return {default: module.default}
  })
);

const ScrollingText = lazy(() => import('@/app/components/ScrollingText').then(module => {
  return {default: module.default}
})
);

export default function Home() {
  return (
    <div className="flex min-h-screen h-full flex-col items-center justify-center">
      <div className="sticky w-full h-full -z-20">
        <Image
        className="w-full h-full object-cover"
        title="Jewelry Background"
        src={Jewelrybg}
        alt=""
        />
      </div>
      <div className="absolute w-screen h-full flex-col flex items-center justify-center z-10 mt-96">
        <section className="w-full h-fit flex flex-col items-center justify-center">
          <h1 className=" text-9xl p-2  font-thin text-white">Quality, Handmade Jewelry</h1>
          <p className="p-2 text-white text-3xl font-light text-center w-full">For Those Who Crave a One of a Kind Style.</p>
          <button
          name="explore"
          title="Explore."
          type="button"
          className="text-white py-3 px-4 text-7xl bg-black bg-opacity-30 font-thin border border-white my-24 hover:bg-white hover:text-black transition-all ease-in-out duration-500"
          >
            Explore
          </button>
        </section>
        <section className="">
          <Suspense fallback={<p>Loading...</p>}>
            <ScrollingText/>
          </Suspense>
        </section>
        <section className="bg-white w-full min-h-96 m-10">
          <Suspense fallback={<p>Loading...</p>}>
            <Featured/>
          </Suspense>
        </section>
      </div>
    </div>
  );
}
