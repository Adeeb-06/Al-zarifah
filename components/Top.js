import Image from "next/image";
import Link from "next/link";
import React from "react";

const Top = () => {
  return (
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
        <div className="m-0 p-0 border-none outline-none ">
          <div className="inner-box relative block overflow-hidden rounded-[5px] mb-[30px] ">
            <figure className="image-box-top">
              <Image src="/italy.jpg" height={200} width={290} alt="italy" />
            </figure>
            <div className=" relative">
              <span className="text text-[white] place  z-2 text-[40px] leading-[30px]  ">
                Italy
              </span>
            </div>
          </div>
        </div>
        <div className="m-0 p-0 border-none outline-none ">
          <div className="inner-box relative block overflow-hidden rounded-[5px] mb-[30px] ">
            <figure className="image-box-top">
              <Image src="/china.jpg" height={200} width={290} alt="china" />
            </figure>
            <div className="relative">

              <span className="text text-[white] place text-center z-2 text-[40px] leading-[30px]  ">
                China
              </span>
            </div>
          </div>
        </div>
        <div className="m-0 p-0 border-none outline-none ">
          <div className="inner-box relative block overflow-hidden rounded-[5px] mb-[30px] ">
            <figure className="image-box-top">
              <Image src="/swis.jpg" height={200} width={290} alt="swizerland" />
            </figure>
            <div className="relative">

              <span className="text text-[white] place text-center z-2 text-[40px] leading-[30px]  ">
                Swizerland
              </span>
            </div>
          </div>
        </div>
        <div className="m-0 p-0 border-none outline-none ">
          <div className="inner-box relative block overflow-hidden rounded-[5px] mb-[30px] ">
            <figure className="image-box-top">
              <Image src="/egypt.jpg" height={200} width={290} alt="egypt" />
            </figure>
            <div className="relative">

              <span className="text text-[white] place text-center z-2 text-[40px] leading-[30px]  ">
                Egypt
              </span>
            </div>
          </div>
        </div>
        <div className="m-0 p-0 border-none outline-none ">
          <div className="inner-box relative block overflow-hidden rounded-[5px] mb-[30px] ">
            <figure className="image-box-top">
              <Image src="/malasiya.jpg" height={200} width={290} alt="malasiya" />
            </figure>
            <div className="relative">

              <span className="text text-[white] place text-center z-2 text-[40px] leading-[30px]  ">
                Malasiya
              </span>
            </div>
          </div>
        </div>
        <div className="m-0 p-0 border-none outline-none ">
          <div className="inner-box relative block overflow-hidden rounded-[5px] mb-[30px] ">
            <figure className="image-box-top">
              <Image src="/dub.jpg" height={200} width={290} alt="dubai" />
            </figure>
            <div className="relative">

              <span className="text text-[white] place text-center z-2 text-[40px] leading-[30px]  ">
                Dubai
              </span>
            </div>
          </div>
        </div>
      </div>
        <Link className="text-center" href={'/tour'}>
        <button type="button" class="px-6 py-3.5 text-[25px] font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See More</button>
        </Link>
    </section>
  );
};

export default Top;
