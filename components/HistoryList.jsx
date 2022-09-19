import React from 'react'
import Image from "next/image"
import History from "../json/History"
  function HistoryList() {


 


  return (
    <div className="h-[300px] mb-12 ">
<div className=" h-full">
    <div className="gap-2 pb-12 flex-wrap px-1 mt-7 min-h-[200px] max-w-7xl justify-center flex mx-auto"> 
 
    {History.sort(() => 0.5 - Math.random()).slice(0,6).map((item, i) => (
        <div key={i} className="overflow-hidden bg-gray-700/20   text-gray-400 flex backdrop-blur-md cursor-pointer hover:scale-[1.02] shadow-lg duration-500  mt-2 w-[400px] rounded-md h-[160px]">
<div className="h-[200px] relative  w-[200px] ">
<Image          
        blurDataURL='data:...'
   placeholder='blur'
 src={ "/"+item.image} alt={item.title} 
 height={200}
width={200}
/>
</div>
<div className="w-full pr-4  ">
        <h1 className="text-xl text-gray-200 font-bold pt-4">{item.title}</h1>
<div className="h-full break-words max-w-[170px]  md:max-w-[250px]">
{item.description}
</div>
        </div>   
        </div>
  
   
        )    )}
:
    </div>
</div>
    </div>
  )
}

export default HistoryList
