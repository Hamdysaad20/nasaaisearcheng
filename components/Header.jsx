import React from 'react'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../public/Images/nasa.json";
function Header() {
   
  return (
<div className='grid place-content-between grid-cols-2  text-white '>
    <div className='lg:mt-12 lg:ml-4'>
        <div className='z-50  lg:ml-12 h-[100px] w-[100px]  cursor-pointer scale-90 hover:opacity-95 '>
            <Lottie
             animationData={groovyWalkAnimation} 
             loop={true}
             
             />
</div>
    </div>
    <div className='bg-red-300'>Controlers</div>
</div>
    )
}

export default Header