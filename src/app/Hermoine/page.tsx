import React from 'react'
import Image from 'next/image'
import hermoine from "@/app/Public/Hermione Granger - Anatomy.jpeg"
import trio from "@/app/Public/download (8).jpeg"
const Hermoine = () => {
  return (
    <section className='bg-gray-500 text-white w-full flex justify-center'>
    <div className='container px-4 sm:px-8 lg:px-16 xl:px-20 py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left Column */}
        <div>
            <h2 className='font-bold text-3xl text-black py-4'>Welcome!</h2>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>
             Hermoine Granger:
          </h2>
             <Image 
            className="rounded-lg object-cover w-full h-auto mb-6" 
            src={hermoine} 
            alt="AI Illustration" 
          />
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>
            Main charcter of Harry Potter
          </h2>
          <div className="h-1 mt-[-10px] w-1/4 bg-pink-400 rounded mb-6" />

          <h2 className='font-bold text-3xl py-2'>Introduction</h2>
          <p className='text-lg mb-4'>
          Hermione Granger was Harry&apos;s and Ron&apos;s bookish best friend, a Muggle-born student and one of the smartest witches of her generation. Though incredibly clever, she proved herself a true Gryffindor time and time again, using her courage as well as problem-solving skills in the face of danger, proving vital in the struggle against Lord Voldemort. As Hermione says herself: &lsquo;Books! And cleverness! There are more important things - friendship and bravery...&lsquo;
          </p>
         
          
         
        </div>
        {/* Right Column */}
        <div>
          <h2 className='font-bold text-4xl mb-4'>Intelligence</h2>
          <div className="h-1 mt-[-10px] w-1/4 bg-pink-400 rounded mb-6" />
          <p className='mb-4'>
          Many times throughout the Harry Potter Books have we seen Hermione as being the most rational and sensible girl in her class. She was able to solve Severus Snape&apos;s riddle, one of the many obstacles to prevent from anyone taking the Philosopher&apos;s Stone whilst it was hidden at Hogwarts.
          </p>
          <p className='mb-4'>
          She was also able to brew the highly-advanced Polyjuice Potion—a feat even made more admirable by taking into account the fact that she was a mere second year. Although her own disguise did not work, Harry&apos;s and Ron&apos;s did. She was the first person ever to figure out what kind of monster was being kept in the Chamber of Secrets: a Basilisk. After having done so, she took a mirror wherever she went for precaution, advising Penelope Clearwater, a fellow Muggle-born, to do the same thing.


          </p>
          <p className='mb-6'>Not only is Hermione &lsquo;book smart,&lsquo; but she also has common sense. When Harry mysteriously received a Firebolt—the fastest and most expensive broomstick available at the time—she confronted her best friends and confessed her fears about the broomstick (that it may be jinxed, probably by Sirius Black, who was then on the run and was known to have a desire to kill Harry) to Professor McGonagall.
          </p>
          <Image src={trio} alt="harry trio"/>
          
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Hermoine