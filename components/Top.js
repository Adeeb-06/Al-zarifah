import Image from "next/image";
import React from "react";

const Top = () => {
  return (
    <section className="mt-14">
      <div className="text-center">
        <p className="relative block text-[17px] leading-[28px] text-[#808080] font-[600px] uppercase mb-[2px]  ">
          Top Places
        </p>
        <h1 className="mb-4 text-4xl tracking-tight font-extrabold  sm:text-[40px]/[48px] text-gray-900 dark:text-white relative block text-[50px] leading-[60px] text-textGreen">
          Top visited Places
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 m-10 items-center">
        <div className="m-0 p-0 border-none outline-none ">
          <div className="inner-box relative block overflow-hidden rounded-[5px] mb-[30px] ">
            <figure className="image-box-top">
              <Image src="/italy.jpg" height={200} width={290} />
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
              <Image src="/china.jpg" height={200} width={290} />
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
              <Image src="/swis.jpg" height={200} width={290} />
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
              <Image src="/egypt.jpg" height={200} width={290} />
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
              <Image src="/malasiya.jpg" height={200} width={290} />
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
              <Image src="/dub.jpg" height={200} width={290} />
            </figure>
            <div className="relative">

            <span className="text text-[white] place text-center z-2 text-[40px] leading-[30px]  ">
              Dubai
            </span>
            </div>
          </div>
        </div>
        <div className="m-0 p-0 border-none outline-none ">
          <div className="inner-box relative block overflow-hidden rounded-[5px] mb-[30px] ">
            <figure className="image-box-top">
              <Image src="/ta.jpg" height={200} width={290} />
            </figure>
            <div className="relative">

            <span className="text text-[white] place text-center z-2 text-[40px] leading-[30px]  ">
              India
            </span>
            </div>
          </div>
        </div>
        <div className="m-0 p-0 border-none outline-none ">
          <div className="inner-box relative block overflow-hidden rounded-[5px] mb-[30px] ">
            <figure className="image-box-top">
              <Image src="/canada.jpg" height={200} width={290} />
            </figure>
            <div className="relative">

            <span className="text text-[white] place text-center z-2 text-[40px] leading-[30px]  ">
              Canada
            </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
