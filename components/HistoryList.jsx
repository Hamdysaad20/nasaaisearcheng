import React,{useEffect, useState} from 'react'
import Image from "next/image"
  function HistoryList() {

    const [data,setData]= useState("")
   useEffect(()=>{
    let date= "2022-09-24"
let url = "https://api.nasa.gov/planetary/apod?api_key=Dtjmw7NijKcYv7JQWcjj7ciaK3qMbZacqfH0xN0U"+date
    fetch(url)
    .then(response => response.json())
        .then(response =>{

          setData(response)
console.log(response)

}
        )
        .catch(err => console.error( "there is an error"+ err.message));
   },[])

   

  return (
    <div className="h-[300px] mb-12 ">
<div className=" h-full">
<div style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }} className='text-2xl flex justify-center pt-6 text-white font-extrabold'>Today's Pickup</div>

    <div className="gap-2 pb-12 flex-wrap px-1 mt-7 min-h-[200px] max-w-7xl justify-center flex mx-auto"> 
 
        <div className="overflow-hidden bg-gray-700/20   text-gray-400 flex backdrop-blur-md cursor-pointer hover:scale-[1.02] shadow-lg duration-500  mt-2 w-[400px] rounded-md h-[160px]">
<div className="h-[150px] relative  w-[150px] ">
<img          
        blurDataURL='data:...'
   placeholder='blur'
 src={data.url} alt={data.title}
/>
</div>
<div className="w-full pr-4  ">
        <h1  style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }} className="text-xl text-gray-200 font-bold pt-4">{data.title}</h1>
<div  className="h-full break-words max-w-[170px]  md:max-w-[250px]">
{data.explanation}
</div>
        </div>   
        </div>
  
   
        

    </div>
</div>
    </div>
  )
}

export default HistoryList
