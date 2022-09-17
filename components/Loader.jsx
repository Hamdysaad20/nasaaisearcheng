import React from 'react'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../public/Images/nasaSplash.json";
function Loader() {
  return (
    <div>
                <div className='lg:ml-12  w-[300px]  cursor-pointer scale-90 hover:opacity-95 '>
            <Lottie
             animationData={groovyWalkAnimation} 
             
             />
</div>
    </div>
  )
}

export default Loader