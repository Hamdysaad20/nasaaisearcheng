import React from 'react'
import Image from "next/image"
function HistoryList() {

    const History = [{
        
        image:"../public/Images/nasa.gif",
        title:" test title text text-table sdds",
        description:"test Attemptedimporterror:'$1'isnotexportedfrom"
    }
    ,
    {
       
        image:"../public/Images/nasa.gif",
        title:" test title text text-table sdds",
        description:"test Attemptedimporterror:'$1'isnotexportedfrom"
    
    },
    {
   
        image:"../public/Images/nasa.gif",
        title:" test title text text-table sdds",
        description:"test Attemptedimporterror:'$1'isnotexportedfrom"
    
    },
    {
       
        image:"../public/Images/nasa.gif",
        title:" test title text text-table sdds",
        description:"test Attemptedimporterror:'$1'isnotexportedfrom"
    
    }
    
    ]
  return (
    <div className="h-[300px]">
<div className=" h-full">
    <div className="gap-2 flex-wrap  mt-7 min-h-[200px] max-w-7xl justify-center flex mx-auto"> 
 
    {History.sort(() => 0.5 - Math.random()).map((element, i) =>{
<div key={i} className="bg-gray-700/20 backdrop-blur-md cursor-pointer hover:scale-105 shadow-lg duration-500  mt-2 w-[400px] rounded-md h-[160px]">
<Image src={element.image} alt={element.title} height={10} width={10}/>
<h1>{element.title}</h1>
<p>{element.description}</p>


</div>


})}

    </div>
</div>
    </div>
  )
}

export default HistoryList