import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profile from '@/app/components/image/kaka nono.png'

const Navbar = () => {

  return (
    <div className=' bg-purple-300 z-50 top-0 sticky'>
      <header className="text-gray-600 body-font  ">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={profile} alt='logo' width={100} height={100} 
      className='w-[51px]'
      ></Image>
      <span className="ml-3 text-xl">WoodPecker</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={'/'}      className="mr-5 hover:text-blue-600">Home</Link>
      <Link href={'#about'} className="mr-5 hover:text-blue-600">About</Link>
      <Link href={'#skills'} className="mr-5 hover:text-blue-600">Skills</Link>
    <Link href={'#project'}  className="mr-5 hover:text-blue-600">Project</Link>
    <Link href={'#contact'}  className="mr-5 hover:text-blue-600">Contact</Link>
      
    </nav>
   
  </div>
</header>
    </div>
  )
}

export default Navbar

