


import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
 <section className="text-gray-600 bg-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Master Cleanse Reliac Heirloom
      </h1>
      <p className="lg:w-2/3 mx-auto text-white leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t
        heard of them man bun deep jianbing selfies heirloom.
      </p>
    </div>

    {/* Grid layout for product display */}
    <div className="bg-gray-400 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            Collections
          </h2>
          <Link
            href="#"
            className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            Show more
          </Link>
        </div>

        {/* Grid for products */}
        <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-2 xl:grid-cols-4">
          {/* Product 1 */}
          <div className="group mb-2 block h-full overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
              loading="lazy"
              alt="Photo by Austin Wade"
              className="h-96 w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="flex flex-col p-4">
              <span className="text-gray-500">Men</span>
              <Link
                href="#"
                className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
              >
                Business Casual
              </Link>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group mb-2 block h-full overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
              loading="lazy"
              alt="Photo by engin akyurt"
              className="h-96 w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="flex flex-col p-4">
              <span className="text-gray-500">Women</span>
              <Link
                href="#"
                className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
              >
                Summer Season
              </Link>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group mb-2 block h-full overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
              loading="lazy"
              alt="Photo by Austin Wade"
              className="h-96 w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="flex flex-col p-4">
              <span className="text-gray-500">Men</span>
              <Link
                href="#"
                className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
              >
                Streetwear
              </Link>
            </div>
          </div>

          {/* Product 4 */}
          <div className="group mb-2 block h-full overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700"
              loading="lazy"
              alt="Photo by Austin Wade"
              className="h-96 w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="flex flex-col p-4">
              <span className="text-gray-500">Women</span>
              <Link
                href="#"
                className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
              >
                Sale
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
    </>
  )
}

export default page