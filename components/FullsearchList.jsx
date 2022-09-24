import React,{useEffect, useState} from 'react'
import ImagesSearchAll from './ImagesSearchAll'
import FullDisplay from './FullDisplay';
import { motion } from "framer-motion";
import { Pagination } from "@nextui-org/react";
import { useRouter } from 'next/router'
import MissDestants from './MissDestants';
import { parse } from 'postcss';

function FullsearchList(props) {
  let count=1;  
  const [show, setShow]= useState(false)
    const router = useRouter()
    let val =typeof props.val === "undefined" ? "" : props.val;
    function isUndefinded(val){
if (typeof val === "undefined"){
  return true;
}else{
  return false;
}
    }
    let ru = "/Search?"
    let qu="&page="

    let herf= ru+ "qqq"+"="+"("+"all"+")"+"qqq"+"="+val+qu;
  return (
    <div>
        <div className="  w-full max-w-[1980px] h-screen">
            <div className=" max-w-[1380px] relative md:pt-28 md:ml-36 h-screen pt-32 px-1 ">

                <div  className=" font-light text-gray-300">About ({parseInt((Math.random() * 30867))} results)   ({(Math.random() * 3).toFixed(2)} seconds) </div>
           

{ isUndefinded(props.dataFull)?"": props.dataFull.map((item, i) => (

<div>
 {item.result.orbiting_body? (
 <div className='bg-gray-700/20 overflow-hidden mt-2 backdrop-md w-full rounded-lg   max-h-48'>
<div className='flex mx-auto justify-center text-2xl  '>{item.result.orbiting_body}</div>
<div className='flex justify-center mx-auto'>
<div style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }} className='flex gap-2   justify-between max-w-3xl'>
<div>Close approach date : <span className="text-red-400 font-light text-lg"> {item.result.close_approach_date.toLocaleString()} </span></div>
<div>Epoch date close approach  : <span className="text-red-400  font-light text-lg"> {item.result.epoch_date_close_approach} </span></div>

</div>

</div>
<div className='flex justify-center mx-auto text-2xl font-semibold '>
Miss distance
</div>
<div className="justify-center mx-auto flex">
<div className="flex gap-2 mx-auto justify-center flex-wrap">
<div>Astronomical : <span className="text-red-400  font-light text-lg"> {parseInt(item.result.miss_distance.astronomical).toFixed(4)  }</span></div>
<div>Kilometers : <span className="text-red-400 font-light text-lg"> {parseInt(item.result.miss_distance.kilometers).toFixed(4)}</span></div>
</div>
<div className="flex mx-auto gap-2 justify-center flex-wrap">

<div>Lunar : <span className="text-red-400 font-light text-lg"> {parseInt(item.result.miss_distance.lunar).toFixed(3)}</span></div>
<div>Miles  : <span className="text-red-400 font-light text-lg"> {

parseInt(item.result.miss_distance.miles).toFixed(3)
}</span></div>

</div>

</div>
 </div>
 ):""}

<div key={i} className="bg-gray-700/20 overflow-hidden mt-2 backdrop-md w-full rounded-lg   max-h-32 ">
<div className="p-1">
<div className="">
 
    <h1 style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}  className="font-bold px-1 text-left text-xl md:text-2xl">{item.result.title || item.result.epoch_date_close_approach || item.result.service_version} </h1>
</div>
<div>
    <p className="py-2 text-gray-300 font-normal	 text-ellipsis  px-1">{item.result.orbiting_body||item.result.explanation || item.result.close_approach_date || item.result.messageBody||  item.result.note }  </p>
</div>
</div>
            </div>
</div>


)
)}


<div className="flex max-w-6xl pb-12 md:pb-4  overflow-hidden overflow-x-scroll">         
  <div onClick={()=>{

    setShow(true)
  }}>  <ImagesSearchAll  dataFull={props.dataFull} show={show}  Title={"Marc Sell\u00e9s Llim\u00f3s is the first american on the moon"}/></div>
 
         
</div>

            </div>
        </div>
      {show?(  <div>
        <motion.div
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                scale: .7,
                opacity: 0.0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.04,
                },
              },
            }}>
        <FullDisplay/>
      


      <div onClick={()=>{setShow(false)}} className="absolute top-[124px] md:top-[140px] right-5 md:right-12 z-50">

      <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="#e5e7eb" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>


      </div>
  
  </motion.div>
      </div>


      ):null}
      <div className='absolute flex justify-center mx-auto w-full bottom-12  '>


   <Pagination onChange={()=>{
   count++;
   router.push(
      router.asPath.replace(router.asPath.match(/&page=\d/),"&page="+count))
   }} total={20}   />;

      </div>
    </div>
  )
}
export default FullsearchList