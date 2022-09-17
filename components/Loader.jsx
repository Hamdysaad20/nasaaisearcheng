import React from 'react'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../public/Images/nasaSplash.json";
function loader() {
 
  return (
    <div>
                <div className='lg:ml-12 w-[300px] h-[135px] cursor-pointer scale-90 hover:opacity-95 '>
            <Lottie
              animationData={groovyWalkAnimation} 
             />

</div>
    </div>
  )
}

export default loader