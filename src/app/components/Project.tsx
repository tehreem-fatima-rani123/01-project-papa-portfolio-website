import React from 'react'
import Image from 'next/image'
import profile from '@/app/components/image/papa.jpg'
import picture from'@/app/components/image/papa-image-good.jpg'
import photo from '@/app/components/image/IMG-image.png'
import selfi from '@/app/components/image/abo-Image.png'
import pic from '@/app/components/image/IMG-20220418-WA0019.jpg'
import main from '@/app/components/image/Screenshot_20240108-220949.png'

const Project = () => {
  return (
    <div id='project' className=' bg-blue-200'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
       My Projects
      </h1>
    
    </div>
    <div className="flex flex-wrap -m-8">
      {/* project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
         < Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={profile}
          ></Image>

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
             catering Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             CATERING
            </h1>
            <p className="leading-relaxed">
            This is the Project I&apos;ve created for those who owns a Createing business, 
            </p>
            <p className="leading-relaxed">
          View Project 
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image 
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={photo}
          ></Image>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={picture}
            width={500}
            height={500}
          ></Image>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The 400 Blows
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={selfi}
          ></Image>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Neptune
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={pic}
          ></Image>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Holden Caulfield
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={main}
          ></Image>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Alper Kamu
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
