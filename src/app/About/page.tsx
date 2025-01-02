'use client';

import React from 'react'

import Image from 'next/image'
import portfolio from "@/app/Public/ukhti hit am.jpeg"


import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";

import { useTypewriter } from 'react-simple-typewriter'


const About = () => {

  
    const [text] = useTypewriter({
      words: ['UI/UX Designer',  `Full Stack Developer`],
      loop: true,
      typeSpeed:50,
      deleteSpeed:100,
      delaySpeed:3000
    })

  return (
<section className="bg-gray-500 text-white border-b-[1px] border-b-blue-500 p-8 w-full flex flex-col md:flex-row items-center gap-8">
  {/* Left Content */}
  <div className="grid text-center md:text-left w-full md:w-1/2">
    <div className="flex flex-col gap-5">
      <h4 className="text-2xl font-normal">Welcome</h4>
      <h4 className="text-4xl md:text-6xl font-bold">
        Hi, I&apos;m <span className="text-pink-400">Sahar Fatima</span>
      </h4>
      <h2 className="text-2xl md:text-3xl font-bold">
        your <span className="text-pink-400">{text}</span>
      </h2>

      {/* Social Media Section */}
      <div>
        <h4 className="text-xl md:text-2xl pt-12 uppercase font-titleFont mb-4">Find Me In</h4>
        <div className="flex justify-center md:justify-start gap-4">
          <FaInstagram className="bg-black w-10 h-10 md:w-12 md:h-12 bg-opacity-25 text-gray-200 inline-flex items-center rounded-md hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-pink-500 cursor-pointer duration-300" />
          <FaFacebookF className="bg-black w-10 h-10 md:w-12 md:h-12 bg-opacity-25 text-gray-200 inline-flex items-center rounded-md hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-pink-500 cursor-pointer duration-300" />
          <CiLinkedin className="bg-black w-10 h-10 md:w-12 md:h-12 bg-opacity-25 text-gray-200 inline-flex items-center rounded-md hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-pink-500 cursor-pointer duration-300" />
          <FaSquareGithub className="bg-black w-10 h-10 md:w-12 md:h-12 bg-opacity-25 text-gray-200 inline-flex items-center rounded-md hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-pink-500 cursor-pointer duration-300" />
        </div>
      </div>
    </div>
  </div>

  {/* Right Content */}
  <div className="w-full md:w-1/2">
    <Image
      className="object-cover mx-auto md:mx-0 rounded-lg"
      src={portfolio}
      alt="Portfolio"
      width={530}
      height={930}
    />



    
  </div>
</section>

  )
}

export default About