import React from 'react'
import Image from 'next/image'
import im from "@/app/Public/download (5).jpeg"

const Aibh = () => {
  return (
    <section className='bg-gray-500 text-white w-full flex justify-center'>
      <div className='container px-4 sm:px-8 lg:px-16 xl:px-20 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Left Column */}
          <div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>
              The Future of AI: How Artificial Intelligence Will Change the World
            </h2>
            <div className="h-1 mt-[-10px] w-1/2 bg-pink-400 rounded mb-6" />
            <p className='text-lg mb-4'>
              AI is constantly changing our world. Here are just a few ways AI will influence our lives.
            </p>
            <Image 
              className="rounded-lg object-cover w-full h-auto mb-6" 
              src={im} 
              alt="AI Illustration" 
            />
            <p className='mb-4'>
             <span className='text-blue-400 text-4xl'> I</span>nnovations in the field of artificial intelligence continue to shape the future of humanity across nearly every industry. AI is already the main driver of emerging technologies like big data, robotics, and IoT, and generative AI has further expanded the possibilities and popularity of AI.
            </p>
            <p className='mb-4'>
              According to a 2023 IBM survey, 42 percent of enterprise-scale businesses integrated AI into their operations, and 40 percent are considering AI for their organizations. In addition, 38 percent of organizations have implemented generative AI into their workflows while 42 percent are considering doing so.
            </p>
            <p>
              With so many changes coming at such a rapid pace, here’s what shifts in AI could mean for various industries and society at large.
            </p>
          </div>
          {/* Right Column */}
          <div>
            <h2 className='font-bold text-4xl mb-4'>The Evolution of AI</h2>
            <div className="h-1 mt-[-10px] w-1/4 bg-pink-400 rounded mb-6" />
            <p className='mb-4'>
              AI has come a long way since 1951, when the first documented success of an AI computer program was written by Christopher Strachey, whose checkers program completed a whole game on the Ferranti Mark I computer at the University of Manchester. Thanks to developments in machine learning and deep learning, IBM’s Deep Blue defeated chess grandmaster Garry Kasparov in 1997, and the company’s IBM Watson won Jeopardy! in 2011.
            </p>
            <p className='mb-4'>
              Since then, generative AI has spearheaded the latest chapter in AI’s evolution, with OpenAI releasing its first GPT models in 2018. This has culminated in OpenAI developing its GPT-4 model and ChatGPT, leading to a proliferation of AI generators that can process queries to produce relevant text, audio, images, and other types of content.
            </p>
            <p className='mb-6'>
              AI has also been used to help sequence RNA for vaccines and model human speech, technologies that rely on model- and algorithm-based machine learning and increasingly focus on perception, reasoning, and generalization.
            </p>
            <h2 className='font-bold text-4xl mb-4'>How AI Will Impact the Future</h2>
            <div className="h-1 mt-[-10px] w-1/4 bg-pink-400 rounded mb-6" />
            <h3 className='text-xl font-bold mb-2'>Improved Business Automation</h3>
            <p className='mb-4'>
              About 55 percent of organizations have adopted AI to varying degrees, suggesting increased automation for many businesses in the near future. With the rise of chatbots and digital assistants, companies can rely on AI to handle simple conversations with customers and answer basic queries from employees.
            </p>
            <p className='mb-4'>
              AI’s ability to analyze massive amounts of data and convert its findings into convenient visual formats can also accelerate the decision-making process. Company leaders don’t have to spend time parsing through the data themselves, instead using instant insights to make informed decisions.
            </p>
            <p>
              “If [developers] understand what the technology is capable of and they understand the domain very well, they start to make connections and say, ‘Maybe this is an AI problem, maybe that’s an AI problem,’” said Mike Mendelson, a learner experience designer for NVIDIA. “That’s more often the case than, ‘I have a specific problem I want to solve.’”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aibh
