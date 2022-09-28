import React,{useEffect, useRef, useState} from 'react'
import Image from "next/image"
import Lottie from "lottie-react";
import groovyWalkAnimation from "../public/Images/spaceArtic/smilefaceHeader.json";

  function HistoryList() {
    const dataFetchedRef = useRef(false);
const spaceArticlesImage = [
  
 "/Images/spaceArtic/spaceartic1.png",
 "/Images/spaceArtic/spaceartic2.png",
 "/Images/spaceArtic/spaceartic3.png",
 "/Images/spaceArtic/spaceartic4.png",
 "/Images/spaceArtic/spaceartic5.png",
 "/Images/spaceArtic/spaceartic6.png",
 "/Images/spaceArtic/spaceartic7.png",
 "/Images/spaceArtic/spaceartic8.png",
 "/Images/spaceArtic/spaceartic9.png",


]
    const [news,setnews]= useState([])

   useEffect(()=>{
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'f9c66eb69cmsha63de54cc2e0606p1028efjsn7597f9b48eef',
            'X-RapidAPI-Host': 'space-news.p.rapidapi.com'
          }
        };
        
        
        fetch('https://space-news.p.rapidapi.com/news', options)
          .then(response => response.json())
          .then(response => {
            setnews(response)
            console.log(response)})
          .catch(err => console.error(err));


   },[])

   
   function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const lottieRef = useRef();

  async function hoverevent(){
   lottieRef.current.setSpeed(7)
  }
 async function hovereventends(){
   lottieRef.current.setSpeed(1)

  }

  return (
    <div className="h-[300px] relative mb-40  ">
<div className=" h-full">
<div className=" waviy">
<div style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400", lolss : 1,  }} className='text-2xl relative  flex justify-center pt-6 text-white font-extrabold'><span style={{ lolss:2}}>Today &apos;s Pickup </span><div className="relative  w-10">  <Lottie
          className="absolute top-0"
          onMouseOver={hoverevent}
            onMouseLeave={hovereventends}
            lottieRef={lottieRef}
             animationData={groovyWalkAnimation} 
             /></div></div>

        
  </div>


    <div className="gap-2 pb-20 md:pb-40 flex-wrap   mt-7 min-h-[200px] max-w-7xl justify-center flex mx-auto"> 
 {news.sort(() => 0.5 - Math.random())
                  .map((item, i) => (
<a  key={i}  herf={item.url}  target="_blank" onClick={()=>{
 document.location.href = item.url;


}} className="overflow-hidden relative   bg-gray-700/20  justify-center mx-auto  text-gray-400 flex backdrop-blur-md cursor-pointer hover:scale-[1.02] shadow-lg duration-500   mt-2 w-[300px] md:w-[400px] rounded-md min-h-[160px]">
                   
                  
                    <div className="h-[150px] relative  w-[150px] ">
                    <div className="flex justify-center p-2 mt-4">
                    <Image          
                    
                    blurDataURL='data:...'
               placeholder='blur'
             src={spaceArticlesImage[getRandomInt(9)]} alt={"image for the article number" +" "+ ++i}
             height={300}
             width={300}
            />
            
                    </div>
                    </div>
                    <div className="w-full pr-4 grid place-content-center ">
                            <h1  style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }} className="text-xl text-gray-200 font-bold pt-4">{item.title.slice(0,80)}</h1>
                    <div  className="h-full pl-2 pb-2 opacity-60 text-gray-400 break-words max-w-[170px]  md:max-w-[250px]">
                    From : {item.source}
                    </div>
                            </div>   
                           
                                  
                                    </a>
                  ))}

  
   
        

    </div>
</div>
    </div>
  )
}

export default HistoryList
