import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <>
      <section id="features" className="mt-6">
        <div className="text-center">
          <p className="relative block text-[17px] leading-[28px] text-[#808080] font-[600px] uppercase mb-[2px]  ">Specials</p>
          <h1 className="relative block text-[50px] leading-[60px]  sm:text-[40px]/[48px] text-textGreen mb-1 text-4xl tracking-tight font-extrabold  ">Why travel with AF Travels?</h1>
          <div className="line w-[240px] h-[4px] mx-auto bg-[#405D72] mb-4"></div>
        </div>
        <div className="flex gap-10 flex-wrap justify-center mt-8 ">
        <div className="fet box-border shadow-xl mt-3 w-[300px] h-[300px]  ">
          <div className="inner-box shadow-md bg-[#FFF8F3] rounded-s-lg mb-[30px]">
           
             <figure className="image-box">
                <Image src='/fe.jpg' width={500} height={100} alt="feature-1"  />
             </figure>
              <div className="lower-content bg-[white] rounded-s-sm">
                <div className="rounded-[50%] h-[100px] w-[100px] border relative  bottom-[66px] m-auto  iconbox ">
                    <Image src='/rate.png' width={80} height={60} alt="icon" />
                </div>
                <h4 className="lowe text-center">Give you the best flight experince</h4>
              </div>
            
          </div>
        </div>
        <div className="fet  h-[300px] mt-3 box-border w-[300px]">
          <div className="inner-box bg-[#FFF8F3] rounded-s-lg  shadow-md mb-[30px]">
           
             <figure className="image-box">
                <Image src='/ex.jpg' width={500} height={100} alt="feature-2" />
             </figure>
              <div className="lower-content bg-white  ">
                <div className="rounded-[50%] h-[100px] w-[100px] border relative  bottom-[66px] m-auto  iconbox ">
                    <Image src='/skill.png' width={80} height={60} alt="icon" />
                </div>
                <h4 className="lowe text-center">5+ Years of Travel Experience</h4>
              </div>
            
          </div>
        </div>
        <div className="fet h-[300px] mt-3 box-border w-[300px]">
          <div className="inner-box bg-[#FFF8F3] shadow-md rounded-s-lg mb-[30px]">
           
             <figure className="image-box">
                <Image src='/girl.jpg' width={500} height={100} alt="feature-3" />
             </figure>
              <div className="lower-content bg-[white] rounded-s-sm">
                <div className="rounded-[50%] h-[100px] w-[100px] border relative  bottom-[66px] m-auto  iconbox ">
                    <Image src='/customer-service.png' width={80} height={60} alt="icon" />
                </div>
                <h4 className="lowe text-center">98% of Our Travelers are Happy</h4>
              </div>
            
          </div>
        </div>
        <div className="fet h-[300px] mt-3 box-border w-[300px]">
          <div className="inner-box bg-[#FFF8F3] shadow-md rounded-s-lg rounded-s-lg mb-[30px]">
           
             <figure className="image-box">
                <Image src='/trust.jpg' width={500} height={100} alt="feature-4" />
             </figure>
              <div className="lower-content bg-[white] rounded-s-sm">
                <div className="rounded-[50%] h-[100px] w-[100px] border relative  bottom-[66px] m-auto  iconbox ">
                    <Image src='/trust.png' width={80} height={60} alt="icon" />
                </div>
                <h4 className="lowe text-center">Your Trusted Journey Starts Here.</h4>
              </div>
            
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
