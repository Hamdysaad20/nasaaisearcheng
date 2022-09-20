import React from 'react'
import ImagesSearchAll from './ImagesSearchAll'

function FullsearchList(props) {
  return (
    <div>
        <div className="  w-full h-screen">
            <div className=" max-w-7xl w-[100%] md:pt-28 md:ml-36 h-screen pt-32 px-1 ">
                <div  className=" font-thin text-gray-300">About {props.resultLength} results ({(Math.random() * 3).toFixed(2)} seconds) </div>
            <div className="bg-gray-700/20  mt-2 backdrop-md w-full rounded-lg   max-h-32 ">
<div className="p-1">
<div>
    <h1 style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}  className="font-bold px-1 text-left text-xl md:text-2xl">{props.Title.length>50?props.Title.slice(0,45)+"..":props.Title}</h1>
</div>
<div>
    <p className="py-2 text-gray-300 font-normal	 text-ellipsis px-1">{props.description.length>65? props.description.slice(0,65)+"...":props.description}</p>
</div>
</div>
            </div>

            <ImagesSearchAll/>
            </div>
        </div>
    </div>
  )
}

export default FullsearchList