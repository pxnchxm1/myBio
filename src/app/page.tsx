'use client'
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"));

export default function Home() {
  
  return (
    <div className="flex flex-row items-center justify-between min-h-screen w-full py-3 md:py-5 text-bioblack dark:text-biogray dark:bg-bioblack bg-biogray ">
   
    <Navbar/>
   </div>
  );
}
