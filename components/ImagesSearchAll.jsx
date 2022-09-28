import Image from 'next/image'
import React,{useState} from 'react'
import FullDisplay from './FullDisplay'
import { motion } from "framer-motion";
let date,
letFullImage;
function ImagesSearchAll(props) {
    const [show, setShow]= useState(false)

  return (
    <div  className="z-10 mb-12 justify-center  gap-4 md:justify-start p-2 flex-wrap flex">
{props.dataFull? (props.dataFull.map((item, i) => (
item.result.url ?(
<div key={i} className="h-[330px] w-[350px] select-none  rounded-xl mt-2 cursor-pointer bg-gray-700/20 backdrop-md  ">
        <div onClick={() =>{
             setShow(true)
            date = item.result.title
            letFullImage= item.result.url
            }} className="h-[250px]  overflow-hidden rounded-t-xl hover:rounded-xl relative duration-500 hover:scale-95 bg-gray-800/40  backdrop-xl flex justify-center mx-auto w-full ">
        <Image
        
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA...'
    placeholder="blur" src={item.result.url } className="z-10" alt="test" layout='fill'/>
        </div>
        <div>
    <p style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}  className="font-bold px-2 pt-2 text-left text-xl md:text-2xl">{item.result.title.length>50?item.result.title.slice(0,45)+"..":item.result.title}</p>
</div>

{show?(  <div className="">
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
  <FullDisplay date={date} letFullImage={letFullImage}/>
      


      <div onClick={()=>{setShow(false)}} className="fixed top-[124px] md:top-[140px] right-5 md:right-12 z-50">

      <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="#e5e7eb" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>


      </div>
  
  </motion.div>
      </div>


      ):null}



 </div>):""
))):""}
 


 

 
</div>  )
}

export default ImagesSearchAll