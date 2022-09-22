import Image from 'next/image'
import React from 'react'

function ImagesSearchAll(props) {
  
  return (
    <div  className="z-10 justify-center  gap-4 md:justify-start p-2 flex-wrap flex">
 <div className="h-[330px] w-[350px] select-none  rounded-xl mt-2 cursor-pointer bg-gray-700/20 backdrop-md  ">
        <div className="h-[250px]  overflow-hidden rounded-t-xl hover:rounded-xl relative duration-500 hover:scale-95 bg-gray-800/40  backdrop-xl flex justify-center mx-auto w-full ">
        <Image src="/ico/bg.jpg" className="z-10" alt="test" layout='fill'/>
        </div>
        <div>
    <p style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}  className="font-bold px-2 pt-2 text-left text-xl md:text-2xl">{props.Title.length>50?props.Title.slice(0,45)+"..":props.Title}</p>
</div>
 </div>

 

 
</div>  )
}

export default ImagesSearchAll