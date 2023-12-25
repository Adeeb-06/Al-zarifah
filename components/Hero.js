import React from 'react'
import Image from 'next/image'

const Hero = () => {
  
  return (
    <>
  <section id='home' className="text-gray-600 body-font relative bottom-[80px] ">
  <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative ">
    <Image height={600} width={500} className="  mb-10 object-cover object-center rounded" alt="hero" src="/pla.png"/>
    {/* <span className="absolute bottom-[5rem] left-[26rem] z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span> */}
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> <span className='text-textGreen'>Al-Zarifah</span> Skyways: Soar to New Horizons with Unmatched Air Travel Experiences!
        
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#4F6F52] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <div className='gap-2 flex flex-col mx-4'>

        <div className='flex gap-2'>
          <div className='bg-black rounded-[50%] h-2 w-2  '></div>
          <div className='bg-black rounded-[50%] h-2 w-2  '></div>
          <div className='bg-black rounded-[50%] h-2 w-2  '></div>
        </div>
        <div className='flex gap-2'>
          <div className='bg-black rounded-[50%] h-2 w-2  '></div>
          <div className='bg-black rounded-[50%] h-2 w-2  '></div>
          <div className='bg-black rounded-[50%] h-2 w-2  '></div>
        </div>
        <div className='flex gap-2'>
          <div className='bg-black rounded-[50%] h-2 w-2  '></div>
          <div className='bg-black rounded-[50%] h-2 w-2  '></div>
          <div className='bg-black rounded-[50%] h-2 w-2  '></div>
        </div>
        </div>
      </div>
    </div>
  </div>
  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ac87c5" fill-opacity="1" d="M0,96L34.3,96C68.6,96,137,96,206,117.3C274.3,139,343,181,411,176C480,171,549,117,617,128C685.7,139,754,213,823,245.3C891.4,277,960,267,1029,256C1097.1,245,1166,235,1234,234.7C1302.9,235,1371,245,1406,250.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg> */}
</section>
    </>
  )
}

export default Hero