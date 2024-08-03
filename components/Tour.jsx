import React from 'react'
import Image from 'next/image'

const data = [
    {
        name:'Dubai',
        image:'/dubai.jpg'
    },
    {
        name:'Malasiya',
        image:'/malasiya.jpg'
    },
    {
        name:'Singapore',
        image:'/singapore.jpg'
    },
    {
        name:'Maldives',
        image:'/mal2.jpg'
    },
    {
        name:'Saudi',
        image:'/saudi.jpg'
    },
    {
        name:'Bangkok',
        image:'/bang.jpg'
    },
    {
        name:'China',
        image:'/china.jpg'
    },
    
]

const Tour = () => {
    return (
        <>
        <section className="mt-20 flex flex-col justify-center">
      <div className="text-center">
        <p className="relative block text-[17px] leading-[28px] text-[#808080] font-[600px] uppercase mb-[2px]  ">
          Top Places
        </p>
        <h1 className="mb-1 text-4xl tracking-tight font-extrabold  sm:text-[40px]/[48px] text-gray-900 dark:text-white relative block text-[50px] leading-[60px] text-textGreen">
          Our Packages For You
        </h1>
        <div className="line w-[240px] h-[4px] mx-auto bg-[#405D72] mb-4"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 m-10 items-center">
        {data.map((i)=>(

        <div className="m-0 p-0 border-none outline-none ">
          <div className="inner-box relative block overflow-hidden rounded-[5px] mb-[30px] ">
            <figure className="image-box-top">
              <Image src={i.image} height={200} width={290} alt="italy" />
            </figure>
            <div className=" relative">
              <span className="text text-[white] place  z-2 text-[40px] leading-[30px]  ">
                {i.name}
              </span>
            </div>
            </div>
          </div>
        ))}
        </div>
    
    </section>

        </>
    )
}

export default Tour