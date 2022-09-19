import React, { useRef } from 'react'
import Lottie from "lottie-react";

import groovyWalkAnimation from "../public/Images/nasa.json";
function Loader() {
  const lottieRef = useRef();

  function hoverevent(){
   lottieRef.current.setSpeed(7)
  }
  function hovereventends(){
   lottieRef.current.setSpeed(1)

  }
 
  return (
    <div>
                <div className='lg:ml-12  w-[300px]  cursor-pointer scale-90 hover:opacity-95 '>
            <Lottie
            onMouseOver={hoverevent}
            onMouseLeave={hovereventends}
            lottieRef={lottieRef}
             animationData={groovyWalkAnimation} 
             />
</div>
    </div>
  )

}

export default Loader