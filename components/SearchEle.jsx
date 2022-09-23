import  useRouter  from 'next/router';
import React ,{useState } from 'react'
import Featchdata from './featchdata';
import SearchIcon from './SearchIcon'


function SearchEle(props,{getdatafromchild}) {
const [inputDafultVal,setInputDefultval]= useState("")

//redux-state

let router= useRouter; 






    function handleChange(event) {
      setInputDefultval(event.target.value);
    
    }



let ru = "/Search?"
    
  return (
    <div><div className='relative'>
  
   <form onSubmit={(e)=>{
      e.preventDefault();
  let herf= ru+ "qqq"+"="+"("+"all"+")"+"qqq"+"="+inputDafultVal ;
  router.push(herf)
  Featchdata()

}}      >
   <input   
    onChange={handleChange}
    defaultValue={props.inputDafultVal}
    autoComplete='on'
    type="search"
    id = "txt"     style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }} 
                       
className={`
w-full  rounded-md h-12 shadow-md 	focus:ring-4 ring-gray-700  ring-offset-purple-100  pr-11 px-2 py-1 duration-300 text-gray-100 bg-gray-700/20`}
name='name'
minLength={1} maxLength={90}
required
/>
<div onClick={(e)=>{
      e.preventDefault();

  let herf= ru+ "qqq"+"="+"("+"all"+")"+"qqq"+"="+inputDafultVal ;
  router.push(herf)
}}      type="submit"   id = "go" 
 >

<SearchIcon   />

</div>
   </form>

</div>
</div>
  )
}

export default SearchEle