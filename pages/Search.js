import React, { useRef } from 'react'
import SearchEle from '../components/SearchEle' 
import { useRouter } from 'next/router';
import  Head  from 'next/head';
import Lottie from "lottie-react";

import groovyWalkAnimation from "../public/Images/nasa.json";
import Filtering from '../components/Filtering';
import FullsearchList from '../components/FullsearchList';
function Search() {
  let router= useRouter();
  const  pid  = router.asPath;
   let val = decodeURI( pid.slice(router.asPath.lastIndexOf("qqq=")+4));
   const lottieRef = useRef();

   function hoverevent(){
    lottieRef.current.setSpeed(7)
   }
   function hovereventends(){
    lottieRef.current.setSpeed(1)

   }

   return (
    <div   className="text-white overflow-x-hidden">
      <Head>
          <title>{val} - NASA Search</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/ico/nasa.png" />
          
        </Head>


        <main>
          <div className="fixed w-full pb-2 bg-gray-700/20 h-16 md:h-24 backdrop-blur-md"><div className='h-full  md:flex max-w-4xl w-[90%] justify-center  flex mt-1  md:mx-0  mx-auto '>
          <div className='lg:ml-12 w-[80px]  md:w-[100px]  cursor-pointer scale-90 hover:opacity-95 '>      
      <Lottie
      onMouseOver={hoverevent}
      onMouseLeave={hovereventends}
          
            lottieRef={lottieRef}
             animationData={groovyWalkAnimation} 
             />
      </div>
       <div className="w-full mt-2 md:mt-5"> <SearchEle inputDafultVal={val}  /></div>
        </div></div>
       

        </main>
        <div className="pt-[70px] absolute top-0 md:pt-[100px]">
       <Filtering/>
      
       </div>      
       <FullsearchList description={"We offer a dynamic mix of software solutions, consultancy and expert application development backed by over 30 years of maritime experience and focus – allowing ..."} Title={"Marc Sell\u00e9s Llim\u00f3s is the first american on the moon"}/>
 
   
    </div>
  )
}

export default Search