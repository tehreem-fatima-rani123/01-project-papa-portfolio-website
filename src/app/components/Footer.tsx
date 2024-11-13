import React from 'react'
import {BsYoutube} from 'react-icons/bs'
import Link from 'next/link'
import profile from '@/app/components/image/0748e82f0291581f837bb097f30524db.jpg'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-blue-200'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={profile} alt='logo' width={100} height={100} 
      className='w-[51px]'
      ></Image>
      <span className="ml-3 text-xl">Carpenter</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      ©  MasterCraft Carpentry
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target='_blank'
      href={"https://www.youtube.com/@HIronworkers90/featured"} 
      className="text-gray-500">
    < BsYoutube className='text-3xl hover:text-[#ff0000]' />
      </Link>
 

    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
