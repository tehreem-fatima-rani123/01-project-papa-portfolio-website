"use client"
import React from 'react'
import profile from '@/app/components/image/Snapchat-642331578~2.jpg'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
  return (
      <section className="text-gray-600 body-font bg-gray-200 items-center">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       I&apos;am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: [
       'Muhammad saleem' ,'MasterCraft  Carpentry', ],
    autoStart: true,
    loop: true,
  }}
/> 
      </h1>
      <div className='w-[100px] h-[2px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed">
       i have 30 years of experience as a Carpenter, specializing in custom furniture and home renovations. I&apos;ve worked on vrious project including building cabinets, repariring firniture, and constructing outdoor structures, I focus on quality workmanship and meeting client needs, always striving to enhance my skills and deliver exceptional results.
      </p>
      <div className="flex justify-center">
        <Link href={"#contact"} >
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
         Contact
        </button>
       </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <Image className='object-cover object-center rounded mx-auto w-[15rem]'
     src={profile} alt='hero' width={500} height={500} 
      
      ></Image>
    </div>
  </div>
</section>

    
  )
}

export default Hero
