import React from 'react'
import Lottie from "lottie-react";
import nasaSplash from "../public/Images/nasaSplash.json";

function LoadingComp() {
  return (
    <div className="absolute  h-[100%] w-full z-[60] grid place-item-center bg-gray-900/70  backdrop-blur-lg  ">
        
       <div className="">
       <Lottie
             animationData={nasaSplash} 
             />
       </div>
         </div>
  )
}

export default LoadingComp