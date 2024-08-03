import About from "@/components/About";
import Brand from "@/components/Brand";
import Client from "@/components/Client";
import Contact from "@/components/Contact";
import Feature from "@/components/Feature";
import Hajj from "@/components/Hajj";
import Hero from "@/components/Hero";
import SearchPanel from "@/components/SearchPanel";
import Top from "@/components/Top";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero/>
      <SearchPanel/>
      <Brand/>
      <Feature/>
      <Top/>
      <Hajj/>
      {/* <Client/> */}
    
    </>
  );
}
