import React from 'react'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../public/Images/404.json";
import Header from './../components/Header';
function Four0Foure() {
  return (
    <div className="h-screen w-full ">
       <Header/>
       <div className="z-10 top-0 absolute sm:mt-[1px] mt-[20%] w-[100%] md:w-[60%]  justify-center flex mx-auto  ">
        <Lottie
             animationData={groovyWalkAnimation} 
setSpeed={2}
             />
             
             
             
             
             </div>
             <div className="  mt-[110%] sm:mt-[100%] lg:ml-[600px] lg:mt-[20%]    justify-center flex mx-auto  ">
          <div>
          <h1 className="text-white text-4xl font-bold ">Page Not Found - <span className="text-red-500"> 404 Error </span></h1>
          <p className="max-w-lg m-2 text-gray-400  text-2xl">SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
             <a
              aria-label="Our Services"
              className='select-none font-bold max-w-sm  bg-white mt-4 sm:mt-0 shadow-md  hover:shadow-red-500/50  ring-2  ring-slate-900 hover:bg-gray-300 focus:outline-none focus:ring-2 opacity-90  focus:ring-offset-2 active:scale-95 duration-100 0  text-gray-900  h-12 px-3  sm:px-16 rounded-lg w-full flex items-center justify-center sm:w-auto highlight-white/20 '
              href={"/"}
              passHref>
            Go Home 
            </a>
          </div>
             </div>


    </div>
  )
}

export default Four0Foure