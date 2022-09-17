import React ,{useState} from 'react'
import SearchIcon from './SearchIcon'
import Loader from '../components/Loader'

function SearchBar() {
  const [click ,setClick] = useState(true)
    return (
  <div className='max-w-3xl relative  w-[90%]'>
        <div className='w-full mx-auto flex justify-center'><Loader /> </div>
      <div className='relative'>
  

        <input 
         style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }} 
        onClick={()=>{
            setClick(!click)
        }}                       
className={`
w-full  rounded-md h-12 shadow-md 	focus:ring-4 ring-gray-700  ring-offset-purple-100  pr-11 px-2 py-1 duration-300 text-gray-100 bg-gray-700/20`}
name='name'
type='text'
minLength={1} maxLength={90}

required
/>
<SearchIcon/>
    </div>
  </div>
  )
}

export default SearchBar