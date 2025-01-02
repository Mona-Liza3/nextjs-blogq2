
import car01 from "@/app/Public/Cars/Manny Khoshbin’s Hermes-Edition Bugatti Chiron - 1 of 1.jpeg"
import car02 from "@/app/Public/Cars/Race car iPhone wallpaper.jpeg"
import car03 from "@/app/Public/Cars/The All-New 2021 Rolls-Royce Ghost Will Spoil You For Choice _ Carscoops.jpeg"
import car04 from "@/app/Public/Cars/download (10).jpeg"
import car05 from   "@/app/Public/Cars/download (11).jpeg"
import React from 'react'

import Image from 'next/image'

const Cargallery = () => {
  return (
    <>
    <section className="bg-gray-500 body-font min-screen-400">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    {/* <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
        Master Cleanse Reliac Heirloom
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep jianbing selfies heirloom.
      </p>
    </div> */}
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src={car01}
           
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src={car02}
            
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src={car03}
          
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src={car04}
            
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src={car04}
           
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src={car05}
          />
        </div>
      </div>
    </div>
  </div>
</section>

    
    
    
    
    </>
  )
}

export default Cargallery