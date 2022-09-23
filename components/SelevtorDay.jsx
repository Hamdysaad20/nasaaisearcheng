import Image from "next/image"
import React,{useEffect, useState} from "react"
import Loader from"./LoadingComp"

function SelevtorDay(){
   const [lat,setLat]=useState(1.5)
   const [lon,setLon]=useState(100.75)
   const [dim,setDim]=useState(0.15)
   const [date,setDate] =useState("2014-02-01")
   const [apidata,setApidata]= useState([])
   const [isLoading, setLoading] = useState(false)
   

let datalol;
   let url= "https://api.nasa.gov/planetary/earth/assets?lon="+lon+"&lat="+lat+"&date="+date+"&dim="+dim+"&api_key=5QGlrq4HNg9oCAdS9Vgo9nJaCW24veBsZlNeRDwU"

useEffect(() => {
  setLoading(true)
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setApidata(data.url)
      setLoading(false)
    })
}, [])

if (isLoading) return <Loader/>
if (!apidata) return <p className="text-gray-200 text-2xl">No profile data</p>

    return(
        <div  style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}  className="text-gray-200 gap-3 grid place-items-center bg-gray-700/20 backdrop-blur-lg rounded-b-lg w-full pb-4  absolute top-0">
<div>

<div >
<iframe src="https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/thumbnails/645e548eec897fc558c8c39d8652b547-35a079929e030f2c8fb4ef7f68fac047:getPixels" ></iframe>

  <img 
   src=""
   width="664" height="664"/>
   </div>
</div>
            <div className="text-lg md:text-2xl" >Select a Date</div>
            <div>
                <form    className="">

                <div class="relative">
  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input  
  value={"2014-02-01"}
  datepicker="" 
  onChange={(e)=>{
    setDate(e.target.value)
    
    }} 
  
  
  type="text" class="  text-gray-400 bg-gray-700/20 border border-gray-300  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="2014-02-01"/>
</div>
<div className="">
<div className="">
    
<input
            onChange={(e)=>{
                setLat(e.target.value)
                
                }}    className={`
                           w-full  rounded-md h-8 px-2 sm:px-2 py-4 mt-2 text-gray-400 bg-gray-700/20
                           ${ "ring-2 duration-100"}`}
                           label='lat'
                           name='lat'
                           type='number'
                           id={"lat"}                           placeholder='lat'
                           maxLength='20'
                           required
                           value={parseFloat(1.5)}
                         />
    
    
    
 </div>
 <div className="max-w-6 ">
 <input
                 onChange={(e)=>{
                    setLon(e.target.value)
                    
                    }}         
                           className={`
                           w-full  rounded-md h-8 px-2 sm:px-2 py-4 mt-2 text-gray-400 bg-gray-700/20
                           ${ "ring-2 duration-100"}`}
                           label='Lon'
                           name='Lon'
                           type='number'
                           id={"lon"}                           placeholder='Lon'
                           maxLength='20'
                           required
value={parseFloat(100.75)}

/>
    
    
 </div>
 <div className="max-w-6 ">
    
 <input
                  onChange={(e)=>{
                    setDim(e.target.value)
                    
                    }}          
                           className={`
                           w-full  rounded-md h-8 px-2 sm:px-2 py-4 mt-2 text-gray-400 bg-gray-700/20
                           ${ "ring-2 duration-100"}`}
                           label='Name'
                           name='name'
                           type='number'
                           id={"dim"}
                           placeholder='Dim'
                           maxLength='20'
                           required
                        value={parseFloat(.15)}
                        />
    
    
    
 </div>



 



</div>




<div className="mt-4"> <div
              aria-label="submit"
              className='select-none  font-bold max-w-sm  bg-white  sm:mt-0 shadow-md  hover:shadow-red-500/50  ring-2  ring-slate-900 hover:bg-gray-300 focus:outline-none focus:ring-2 opacity-90  focus:ring-offset-2 active:scale-95 duration-100 0  text-gray-900  h-12 px-3  sm:px-16 rounded-lg w-full flex items-center justify-center sm:w-auto highlight-white/20 '

type="submit"
 

>submit</div></div>
                </form>
            </div>

            <div className="val w-12  h-12"> 
            
            </div>

        </div>
    )
}
export default SelevtorDay