import Image from 'next/image'
import React from 'react'

function  FullDisplay(props) {
  return (
    <div style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}  className="  overflow-hidden overflow-y-auto  md:pt-28  h-screen pt-[160px]  duration-500  z-40 fixed top-0 backdrop-blur-md bg-gray-900/20 w-full  ">
        <div className="flex flex-col md:flex-row gap-2">
        <div className="overflow-hidden md:h-96 md:w-96 w-72 h-72 relative md:rounded-lg  m-2 rounded-t-xl hover:rounded-xl hover:scale-95 duration-500 ">
        <Image src={props.letFullImage} className="z-10" alt="test" layout='fill'/>
        </div>
        <div className="grid place-content-center">
            <h1 className="text-xl">{props.date}</h1>
           
        </div>
        </div>
    </div>
  )
}

export default  FullDisplay