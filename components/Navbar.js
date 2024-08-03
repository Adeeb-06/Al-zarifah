// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// const Navbar = () => {
//   return (
//     <>
//     <div className='flex nv justify-center   items-center text-[20px] mt-[30px] fixed   '>
//         <div className='flex justify-between w-[600px] rounded-[50px] p-3 px-[30px]  shadow bg-[#fff]  '>

//         <div className="first p-3">
//             Logo
//         </div>
//         <div className="sec p-3">
//             <ul className='flex gap-[50px]  font-[600px] '>
//                 <li><Link href='/'>Home</Link></li>
//                 <li><Link href='/'>About</Link></li>
//                 <li><Link href='/'>Features</Link></li>

//             </ul>
//         </div>
//         <div className="last">
//             <button className='bg-[#756AB6] rounded-[50px] p-3  '>Contact</button>
//         </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Navbar



"use client"

// import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";

function Navbar() {
  const ref = useRef("")
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  return (

    <div
      className="  shadow-navbarShadow h-24
     lg:h[12vh] sticky 
      z-50   "
    >
      <div className="max-w-container h-full   font-titleFont flex  items-center justify-between  p-3 px-[30px]  shadow bg-[#6482AD] text-[white] ">
        <div className="logo">
          <Link href={'/'}>
            <Image src={'/logo1.png'} width={100} height={100} alt="logo" />
          </Link>
        </div>
        <div className="hidden mdl:inline-flex items-start gap-7">
          <ul className="flex text-[17px] gap-7">
            <Link
              href={"/"}
              className="flex items-center gap-1 font-medium text-[white] hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li>
                Home
              </li>
            </Link>
            <Link

              href={"/about"}
              className="flex items-center gap-1 font-medium text-[white]  hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li>
                About
              </li>
            </Link>
            <Link
              href={"/features"}
              className="flex items-center gap-1 font-medium text-[white]  hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li>
                Features
              </li>
            </Link>
            <Link

              href={"/tour"}
              className="flex items-center gap-1 font-medium text-[white]  hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li

              >
                Tour
              </li>
            </Link>
            <Link
              onClick={handleScroll}
              href={"#contact"}
              className="flex items-center gap-1 font-medium text-[white]  hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li

              >
                Contact
              </li>
            </Link>
            <Link

              href={"/login"}
              className="flex items-center gap-1 p-3 rounded-xl bg-[#0300a7] font-medium text-[white]  hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li

              >
                Login/Register
              </li>
            </Link>
          </ul>
        </div>
        {/* small icon section */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-black inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-black inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-black inline-flex transform translate-x-1  group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-white bg-opacity-50 flex flex-col items-end"
          >
            <div

              className="w-[60%] h-full overflow-y-scroll scrobarHide bg-[#6482AD] flex flex-col justify-center items-center px-4 py-8 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col justify-center items-center gap-6">
                <ul className="flex flex-col text-[20px] gap-14 text-center ">
                  <Link
                    onClick={handleScroll}
                    href={"#home"}
                    className="flex items-center gap-1 font-medium text-[white] hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <li

                    >
                      Home
                    </li>
                  </Link>
                  <Link
                    href={"/about"}
                    className="flex items-center gap-1 font-medium text-[white]  hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <li

                    >
                      About
                    </li>
                  </Link>
                  <Link

                    href={"/features"}
                    className="flex items-center gap-1 font-medium text-[white]  hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <li

                    >
                      Features
                    </li>
                  </Link>
                  <Link

                    href={"/tour"}
                    className="flex items-center gap-1 font-medium text-[white]  hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <li

                    >
                      Tour
                    </li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    href={"#contact"}
                    className="flex items-center gap-1 font-medium text-[white]  hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <li

                    >
                      Contact
                    </li>
                  </Link>
                  <Link

                    href={"/login"}
                    className="flex items-center gap-1 p-3 rounded-xl bg-[#0300a7] font-medium text-[white]  hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <li

                    >
                      Login/Register
                    </li>
                  </Link>
                </ul>
                <div className=" items-center justify-center w-full py-6 gap-8 flex flex-1 relative ">
                  <div

                  >
                    <a href="" target="_blank">
                      <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        {/* <TbBrandGithub /> */}
                        <SlSocialFacebook />
                      </span>
                    </a>
                  </div>
                  <div

                  >
                    <a href="" target="_blank">
                      <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        <SlSocialInstagram />
                      </span>
                    </a>
                  </div>
                  <div

                  >
                    <a href="" target="_blank">
                      <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        <SlSocialLinkedin />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
