"use client"
import React from 'react'
import Image from 'next/image'

const data = [
  {
    link: '/emi.png',
    name: 'emirates'
  },
  {
    link: '/biman.png',
    name: 'Bimang bangladesh'
  },
  {
    link: '/british.png',
    name: 'British Airlines'
  },
  {
    link: '/novoair.jpg',
    name: 'novoair'
  },
  {
    link: '/qatar.png',
    name: 'Qatar'
  },
  {
    link: '/sing.png',
    name: 'singapore'
  },
  {
    link: '/usbangla.jpg',
    name: 'us bangla'
  },
  {
    link: '/malin.png',
    name: 'mal'
  },
  {
    link: '/mal.png',
    name: 'emirates'
  },
  {
    link: '/air-astra.jpg',
    name: 'air astra'
  },
  {
    link: '/cathi.png',
    name: 'emirates'
  },
]

const Brand = () => {
  return (
    <>
      <div className="main flex justify-center flex-col h-[100%] relative mt-6">

       
          <h1 className="relative block text-[50px] leading-[60px]  sm:text-[40px]/[48px] text-textGreen mb- text-4xl tracking-tight font-extrabold text-center   ">Search Top Airlines</h1>
          <div className="line w-[240px] h-[4px] mx-auto bg-[#405D72] mb-4"></div>
        
        <div className='flex justify-center  relative  flex-wrap m-4 gap-16'>

          {/* <Image src='/emi.png' height={133} width={125} alt='emirates'  />
        <Image src='/british.png' height={145} width={150} alt='emirates'  />
        <Image src='/qatar.png' height={130} width={140} alt='emirates'  />
        <Image src='/sing.png' height={130} width={140} alt='emirates'  />
        <Image src='/malin.png' height={130} width={124} alt='emirates'  />
        <Image src='/mal.png' height={130} width={124} alt='emirates'  />
        <Image src='/cathi.png' height={130} width={124} alt='emirates'  /> */}

          {data.map((i) => (
            <div key={i.name} className=" max-w-sm p-6 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-center items-center">
              <Image src={i.link} height={120} width={120} alt={i.name} />
            </div>
          ))}

        </div>
      </div>

    </>
  )
}

export default Brand