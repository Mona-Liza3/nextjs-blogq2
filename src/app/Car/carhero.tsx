import React from 'react'
import Image from 'next/image'
import car from "@/app/Public/cool cars wallpapers for desktop (2).jpeg"
const Carhero = () => {
  return (
    <section className="min-h-24 bg-gray-500 pt-[230px]  z-auto relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg py-16  md:py-20 xl:py-48"> {/* image - start */}
  <Image
    src={car}
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
    Delighted to showcase 
    </p>
    <h1 className="mb-8 text-center px-8 text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
    Driven Chronicles
    </h1>
    <div className="flex  w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
     
    </div>
  </div></section>
  )
}

export default Carhero