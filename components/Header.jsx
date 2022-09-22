import React from 'react'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../public/Images/nasa.json";
import Link from 'next/link';
function Header() {
   
  return (
<div className='grid place-content-between grid-cols-2  text-white '>
    <div className='lg:mt-12  lg:ml-4'>
        <div className='z-50   lg:ml-12 h-[100px] w-[100px]  cursor-pointer hover:scale-90 hover:opacity-95 '>
           <Link className="cursor-pointer" href="/">
            <a >
            <Lottie
             animationData={groovyWalkAnimation} 
             loop={true}
             
             />
             </a>
             </Link>
</div>
    </div>
</div>
    )
}

export default Header