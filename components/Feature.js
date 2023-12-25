import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <>
      <section className="" id="features">
        <div className="text-center">
          <p className="relative block text-[17px] leading-[28px] text-[#808080] font-[600px] uppercase mb-[2px]  ">Specials</p>
          <h1 className="relative block text-[50px] leading-[60px]  sm:text-[40px]/[48px] text-textGreen mb-4 text-4xl tracking-tight font-extrabold  ">Why travel with Al-zarifah?</h1>
        </div>
        <div className="flex gap-5 flex-wrap justify-center mt-8 ">
        <div className="fet box-border mt-3 w-[300px] h-[300px]  ">
          <div className="inner-box mb-[30px]">
           
             <figure className="image-box">
                <Image src='/fe.jpg' width={500} height={100} />
             </figure>
              <div className="lower-content bg-[white] rounded-s-sm">
                <div className="rounded-[50%] h-[100px] w-[100px] border relative  bottom-[66px] m-auto  iconbox ">
                    <Image src='/rate.png' width={80} height={60} />
                </div>
                <h4 className="lowe text-center">Give you the best flight experince</h4>
              </div>
            
          </div>
        </div>
        <div className="fet h-[300px] mt-3 box-border w-[300px]">
          <div className="inner-box mb-[30px]">
           
             <figure className="image-box">
                <Image src='/ex.jpg' width={500} height={100} />
             </figure>
              <div className="lower-content bg-[white] rounded-s-sm">
                <div className="rounded-[50%] h-[100px] w-[100px] border relative  bottom-[66px] m-auto  iconbox ">
                    <Image src='/skill.png' width={80} height={60} />
                </div>
                <h4 className="lowe text-center">12+ Years of Travel Experience</h4>
              </div>
            
          </div>
        </div>
        <div className="fet h-[300px] mt-3 box-border w-[300px]">
          <div className="inner-box mb-[30px]">
           
             <figure className="image-box">
                <Image src='/girl.jpg' width={500} height={100} />
             </figure>
              <div className="lower-content bg-[white] rounded-s-sm">
                <div className="rounded-[50%] h-[100px] w-[100px] border relative  bottom-[66px] m-auto  iconbox ">
                    <Image src='/customer-service.png' width={80} height={60} />
                </div>
                <h4 className="lowe text-center">98% of Our Travelers are Happy</h4>
              </div>
            
          </div>
        </div>
        <div className="fet h-[300px] mt-3 box-border w-[300px]">
          <div className="inner-box mb-[30px]">
           
             <figure className="image-box">
                <Image src='/trust.jpg' width={500} height={100} />
             </figure>
              <div className="lower-content bg-[white] rounded-s-sm">
                <div className="rounded-[50%] h-[100px] w-[100px] border relative  bottom-[66px] m-auto  iconbox ">
                    <Image src='/trust.png' width={80} height={60} />
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
