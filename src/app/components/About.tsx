import React from 'react'
import Link from 'next/link'
import profile from '@/app/components/image/IMG-image.png'
import Image from 'next/image'
const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font bg-pink-200">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
        alt="hero"
        src={profile}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-3 font-medium text-gray-900">
     About Me
      </h1>
      <h4 className='title-font sm:text-4xl  text-2xl mb-1 font-medium text-red-900 '> some text about Me</h4>  
      <p className="mb-5 leading-relaxed">

    

Hello! My name is Muhammad Saleem, and I am a skilled carpenter with years of experience in creating high-quality furniture. I specialize in designing and building a wide variety of furniture pieces, including chairs, tables, wardrobes, and custom-made items. My craftsmanship is driven by precision, attention to detail, and a deep understanding of the materials I work with. <br />


As a master carpenter I am dedicated to delivering durable and beautifully crafted furniture that meets my client&apos;s

 specific needs and preferences. Whether you are looking for a modern design or something more traditional, I am confident in my ability to bring your vision to life. <br />


Feel free to contact me for your furniture needs, and lets create something exceptional together! <span id="dots">...</span>

</p>
      <div className="flex justify-center">
        <Link href={"#project"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
         Project
        </button>
      </Link >
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
