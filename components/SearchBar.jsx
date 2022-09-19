import React  from 'react'
import Loader from '../components/Loader'
import SearchEle from './SearchEle'
function SearchBar() {




  return (
  <div className='max-w-3xl  relative  w-[90%]'>
        <div className='w-full hover:scale-95 duration-1000 mx-auto flex justify-center'><Loader /> </div>
      <SearchEle/>

  </div>
  )
}

export default SearchBar