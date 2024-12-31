import React from 'react'
import Image from 'next/image'
import card01 from "@/app/Public/download (3).jpeg"
import card02 from "@/app/Public/download(7).jpeg"
import card03 from "@/app/Public/download (8).jpeg"
import card04 from "@/app/Public/download (6).jpeg"
import Link from 'next/link'
const Card = () => {
  return (
    <> <section className="bg-gray-500 min-h-screen">
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-4xl font-medium title-font mb-2 text-gray-900">
            Creative Corner
            </h1>
            <div className="h-1 w-40 bg-pink-400  rounded" />
          </div>
          <p className="lg:w-1/2 w-full  leading-relaxed text-white">
          Welcome to Creative Corner, a space where imagination meets reality. Here, we explore the world of creativity—from art and design to innovative ideas and creative thinking. Whether you're an aspiring artist, a seasoned professional, or simply someone looking to spark their creative side, Creative Corner offers inspiration, tips, and stories that will ignite your passion.
          </p>
        </div>
        
        {/* Grid layout for larger screens */}
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="bg-gray-400 hover:bg-pink-300 p-6 rounded-lg">
            <Link href="/AI">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={card01}
                alt="content"
              />
            </Link>
            <h3 className="tracking-widest text-red-500 hover:text-red-600 text-xs font-medium title-font">
              The Evolution of AI
            </h3>
            <h2 className="text-lg text-white font-medium title-font mb-4">
              Future of AI
            </h2>
            <p className="leading-relaxed text-base">
              How Artificial Intelligence Will Change the World. AI is constantly changing our world. Here are just a few ways AI will influence our lives.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-400 hover:bg-pink-300 p-6 rounded-lg">
           <Link href="/Shop" > <Image
              className="h-40 rounded w-full object-cover object-center mb-6"
              src={card02}
              alt="content"
            />
            <h3 className="tracking-widest text-red-500 hover:text-red-600 text-xs font-medium title-font">
              Shop
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Trendy Shoping
            </h2>
            <p className="leading-relaxed text-base">
          Mens womens wear.Good clothing .buy good wear good
            </p></Link>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-400 hover:bg-pink-300 p-6 rounded-lg">
            <Link href='/Hermoine'>
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={card03}
                alt="content"
              />
              <h3 className="tracking-widest text-red-500 hover:text-red-600 text-xs font-medium title-font">
                Greatest Witch Of her Age
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Hermoine Granger
              </h2>
              <p className="leading-relaxed text-base">
                Hermione Granger was Harry&apos;s and Ron&apos;s bookish best friend, a Muggle-born student and one of the smartest witches of her generation
              </p>
            </Link>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-400 hover:bg-pink-300 p-6 rounded-lg">
            <Image
              className="h-40 rounded w-full object-cover object-center mb-6"
              src={card04}
              alt="content"
            />
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
              SUBTITLE
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              San Francisco
            </h2>
            <p className="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
      </div>
    </section>
  </section>
   
        
        
        
        
        </>
  )
}

export default Card