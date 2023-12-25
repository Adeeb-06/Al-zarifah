// "use client"; // for nextjs 13.4 user
// import Link from "next/link";
// import React from "react";
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
// import "./TrendingSlider.css";
// import Image from "next/image";

// const Client = () => {
//   const filteredItems = [
//     {
//       id: 1,
//       img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "camera",
//       price: 200,
//     },
//     {
//       id: 2,
//       img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Phone",
//       price: 100,
//     },
//     {
//       id: 3,
//       img: "https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Laptop",
//       price: 500,
//     },
//     {
//       id: 4,
//       img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Headephone",
//       price: 40,
//     },
//     {
//       id: 5,
//       img: "https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Keyboard",
//       price: 140,
//     },
//     {
//       id: 6,
//       img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Gaming Mouse",
//       price: 140,
//     },
//     {
//       id: 7,
//       img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Gaming Mouse",
//       price: 140,
//     },
//     {
//       id: 8,
//       img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Gaming Mouse",
//       price: 140,
//     },
//     {
//       id: 9,
//       img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Gaming Mouse",
//       price: 140,
//     },
//   ];

//   const slideLeft = () => {
//     let slider = document.getElementById("slider");
//     slider.scrollLeft = slider.scrollLeft - 235;
//   };

//   const slideRight = () => {
//     let slider = document.getElementById("slider");
//     slider.scrollLeft = slider.scrollLeft + 235;
//   };
//   return (
//     <>
//       <div className="trending">
//         <div className="container">
//           <div className="title-btns">
//             <h3></h3>
//             <div className="btns">
//               <button title="scroll left" onClick={slideLeft}>
//                 <AiOutlineArrowLeft />
//               </button>
//               <button title="scroll right" onClick={slideRight}>
//                 <AiOutlineArrowRight />
//               </button>
//             </div>
//           </div>
//           <div className="row-container" id="slider">
//           <section className="bg-white dark:bg-gray-900">
//   <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
//       <figure className="max-w-screen-md mx-auto">
//           <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
//           </svg> 
//           <blockquote>
//               <p className="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
//           </blockquote>
//           <figcaption className="flex items-center justify-center mt-6 space-x-3">
//               {/* <Image width={24} height={24} className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/> */}
//               <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
//                   <div className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
//                   <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
//               </div>
//           </figcaption>
//       </figure>
//   </div>
// </section>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Client;

import React from 'react'

const Client = () => {
  return (
    <div>Client</div>
  )
}

export default Client