import React from 'react'
import Image from 'next/image'
import banner from "@/app/Public/download (6).jpeg"
import Link from 'next/link'

const Banner = () => {
  return (
   <>      <section className="min-h-24 bg-gray-500  z-auto relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg py-16  md:py-20 xl:py-48">
   {/* image - start */}
   <Image
     src={banner}
     loading="lazy"
     alt="Photo by Fakurian Design"
     className="absolute  w-full object-cover object-center"
   />
   {/* image - end */}
   {/* overlay - start */}
   <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
   {/* overlay - end */}
   {/* text start */}
   <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
     <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
       Very proud to introduce
     </p>
     <h1 className="mb-8 text-center px-8 text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
       The Creative Corner
     </h1>
     <div className="flex  w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
       <Link
         href="/"
         className="inline-block rounded-lg bg-pink-400 px-4 py-2 text-center text-sm font-semibold text-white outline-none ring-pink-300 transition duration-100 hover:bg-pink-500 focus-visible:ring active:bg-indigo-700 md:text-base"
       >
         Start now
       </Link>
       <Link
         href="/"
         className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
       >
         Take tour
       </Link>
     </div>
   </div>
   {/* text end */}
 </section></>

  )
}

export default Banner
