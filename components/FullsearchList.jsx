import React,{useState} from 'react'
import ImagesSearchAll from './ImagesSearchAll'
import FullDisplay from './FullDisplay';
import { motion } from "framer-motion";
import Featchdata from './featchdata';

function FullsearchList(props) {
    const [show, setShow]= useState(false)
    let val =typeof props.val === "undefined" ? "" : props.val;
     
  return (
    <div>
        <div className="  w-full max-w-[1980px] h-screen">
            <div className=" max-w-[1380px] relative md:pt-28 md:ml-36 h-screen pt-32 px-1 ">
            <Featchdata val={val}/>

                <div  className=" font-thin text-gray-300">About {props.resultLength} results ({(Math.random() * 3).toFixed(2)} seconds) </div>
           
            <div className="bg-gray-700/20  mt-2 backdrop-md w-full rounded-lg   max-h-32 ">
<div className="p-1">
<div className="">
    <h1 style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}  className="font-bold px-1 text-left text-xl md:text-2xl">{props.Title.length>50?props.Title.slice(0,45)+"..":props.Title}</h1>
</div>
<div>
    <p className="py-2 text-gray-300 font-normal	 text-ellipsis px-1">{props.description.length>65? props.description.slice(0,65)+"...":props.description}</p>
</div>
</div>
            </div>

{props.dataFull}
<div className="flex max-w-6xl pb-12 md:pb-4  overflow-hidden overflow-x-scroll">         
  <div onClick={()=>{

    setShow(true)
  }}>  <ImagesSearchAll show={show}  Title={"Marc Sell\u00e9s Llim\u00f3s is the first american on the moon"}/></div>
 
         
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
    </div>
  )
}

export default FullsearchList