import React from 'react'
import ImagesSearchAll from './ImagesSearchAll'



function FullsearchList(props) {
    function isUndefinded(val){
if (typeof val === "undefined")return true;

    }

  return (
    <div className="">
        <div className="  w-full  max-w-[1980px] h-screen">
            <div className=" max-w-[1380px] relative md:pt-28 md:ml-36 h-screen pt-32 px-1 ">

                <div  className=" font-light text-gray-300">About ({parseInt((Math.random() * 30867))} results)   ({(Math.random() * 3).toFixed(2)} seconds) </div>
           

{ isUndefinded(props.dataFull)?"": props.dataFull.map((item, i) => (

<div key={i} >


{item.result.absolute_magnitude_h && typeof item.result.absolute_magnitude_h !=="object"? (
<div className='bg-gray-700/20 px-2 overflow-hidden mt-2 backdrop-md w-full rounded-lg py-3   max-h-80'>
<div className='flex mx-auto justify-center text-2xl  '> Absolute Magnitude H  :  {item.result.absolute_magnitude_h}
</div>
<div className='flex mx-auto gap-2 justify-center'>
Close Approach Date : <span className="text-red-400 font-light text-lg">{item.result.close_approach_data[0].close_approach_date}</span> 
</div>
<div className='flex mx-auto justify-center'>
Epoch Date Close Approach : <span className="text-red-400 font-light text-lg"> { item.result.close_approach_data[0].epoch_date_close_approach}</span> 
</div>
<div className='flex mx-auto justify-center text-2xl'>feet</div>
<div className='flex gap-2 mx-auto justify-center flex-wrap"'>
<div>Estimated Diameter Max : <span className="text-red-400 font-light text-lg">{item.result.estimated_diameter.feet.estimated_diameter_max}</span> </div>
<div> Estimated Diameter Min : <span className="text-red-400 font-light text-lg"> {item.result.estimated_diameter.feet.estimated_diameter_min}</span> </div>

</div>

<div className='flex mx-auto justify-center text-2xl'>kilometers</div>
<div className='flex gap-2 mx-auto justify-center flex-wrap"'>
<div>Estimated Diameter Max : <span className="text-red-400 font-light text-lg">{item.result.estimated_diameter.kilometers.estimated_diameter_max}</span> </div>
<div> Estimated Diameter Min : <span className="text-red-400 font-light text-lg"> {item.result.estimated_diameter.kilometers.estimated_diameter_min}</span> </div>

</div>
<div className='flex mx-auto justify-center text-2xl'>meters</div>
<div className='flex gap-2 mx-auto justify-center flex-wrap"'>

<div>Estimated Diameter Max :  <span className="text-red-400 font-light text-lg">{item.result.estimated_diameter.meters.estimated_diameter_max}</span> </div>
<div> Estimated Diameter Min : <span className="text-red-400 font-light text-lg">{item.result.estimated_diameter.meters.estimated_diameter_min}</span> </div>

</div>
</div>

):""}




 {item.result.orbiting_body && typeof item.result.orbiting_body !=="object"? (
 <div className='bg-gray-700/20 overflow-hidden mt-2 backdrop-md w-full rounded-lg py-3  max-h-80'>
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
<div className='flex mx-auto justify-center text-2xl font-semibold'>Relative Velocity</div>
<div className='flex justify-center mx-auto'>
  
  <div>Kilometers Per Hour :  <span className="text-red-400 font-light text-lg">  {parseInt(item.result.relative_velocity.kilometers_per_hour).toFixed(4)}</span></div>
  <div> Kilometers Per Second :  <span className="text-red-400 font-light text-lg">   {parseInt(item.result.relative_velocity.kilometers_per_second).toFixed(4)}</span></div>
  <div> Miles Per Hour : <span className="text-red-400 font-light text-lg">  {parseInt(item.result.relative_velocity.miles_per_hour).toFixed(4)} </span></div>
</div>
 </div>
 ):""}


{item.result.title || item.result.epoch_date_close_approach || item.result.service_version || item.result.orbiting_body||item.result.explanation || item.result.close_approach_date || item.result.messageBody||  item.result.note?(
  <div  className="bg-gray-700/20 px-2 overflow-hidden mt-2 backdrop-md w-full rounded-lg   min-h-32 ">
<div className="p-1">
<div className="">
 
    <h1 style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}  className="font-bold px-1 text-left text-xl md:text-2xl">{item.result.title || item.result.epoch_date_close_approach || item.result.service_version} </h1>
</div>
<div>
    <p className="py-2 text-gray-300 font-normal	 text-ellipsis  px-1">{item.result.orbiting_body||item.result.explanation || item.result.close_approach_date || item.result.messageBody||  item.result.note }  </p>
</div>
</div>
    </div>

):null}

</div>


)
)}


<div className="flex max-w-6xl pb-12 md:pb-4  overflow-hidden overflow-x-scroll">         
  <div >  <ImagesSearchAll  dataFull={props.dataFull}  Title={"Marc Sell\u00e9s Llim\u00f3s is the first american on the moon"}/></div>
 
         
</div>

            </div>
        </div>
   
      <div className='absolute flex justify-center mx-auto w-full bottom-12  '>



      </div>
    </div>
  )
}
export default FullsearchList