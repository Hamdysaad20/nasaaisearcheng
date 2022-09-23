import React from 'react'
import useSWR from 'swr'
import LoadingComp from './LoadingComp';


import axios from 'axios'

function Featchdata(props) {
  let val =typeof props.val === "undefined" ? "" : props.val;
  let url= "https://nasa-ai-search.onrender.com/api?query="+val
  const fetcher = url => axios.get(url).then(res => res)

  const { data, error } = useSWR("url", fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <LoadingComp/>
    return (
    <div className=" absolute  right-0 top-12 z-50 text-white ">
  {JSON.parse(data.json())}
    </div>
  )
}

export default Featchdata