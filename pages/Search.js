import React, { useEffect, useRef ,useState} from 'react'
import SearchEle from '../components/SearchEle' 
import { useRouter } from 'next/router';
import  Head  from 'next/head';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../public/Images/nasa.json";
import Filtering from '../components/Filtering';
import FullsearchList from '../components/FullsearchList';
import  Link  from 'next/link';
import Loader from"../components/LoadingComp"

function Search() {
  let router= useRouter();
  const  pid  = router.asPath;
   let val = decodeURI( pid.slice(router.asPath.lastIndexOf("qqq=")+4));
   const lottieRef = useRef();
   const [apidata,setApidata]= useState([])
   const [isLoading, setLoading] = useState(false)
// const [datareal,setDatareal]= useState("")


   function hoverevent(){
    lottieRef.current.setSpeed(7)
   }
   function hovereventends(){
    lottieRef.current.setSpeed(1)

   }
   let url ="http://192.168.8.100:3000/api?query="+val

   useEffect(() => {
    setLoading(true)
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        setApidata(data)
        console.log(data.data)
        setLoading(false)
      }).catch(rejected => {
        console.log(rejected);
        setLoading(false)

      })
  },[val])

   const [data, setdata] = useState("");

   const getdatafromchild = num => {
    // 👇️ take parameter passed from Child component
    setdata(num);
  };
  if (isLoading) return <Loader/>
  if (!apidata) return <p className="text-gray-200 text-2xl">No profile data</p>
   return (
    <div   className="text-white overflow-hidden overflow-y-auto">
      <Head>
          <title>{val} - NASA Search</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/ico/nasa.png" />
          
        </Head>


        <div>
          <div className="fixed z-50 w-full pb-2 bg-gray-700/20 h-16 md:h-24 backdrop-blur-md"><div className='h-full  md:flex max-w-4xl w-[90%] justify-center  flex mt-1  md:mx-0  mx-auto '>
         <Link href="/">
          <a>
         <div className='lg:ml-12 w-[80px]  md:w-[100px] -mt-2  md:-mt-1 cursor-pointer scale-90 hover:opacity-95 '>      
      <Lottie
      onMouseOver={hoverevent}
      onMouseLeave={hovereventends}
          
            lottieRef={lottieRef}
             animationData={groovyWalkAnimation} 
             />
      </div>
      </a>
         </Link>
       <div className="w-full mt-2 md:mt-5"> <SearchEle getdatafromchild={getdatafromchild}  inputDafultVal={val}  /></div>
        </div></div>
       

        </div>

        <div className="pt-[65px] absolute top-0 md:pt-[100px]">
       <Filtering/>

       </div>    

       <FullsearchList val={val} dataFull={apidata}  description={"We offer a dynamic mix of software solutions, consultancy and expert application development backed by over 30 years of maritime experience and focus – allowing ..."} Title={"Marc Sell\u00e9s Llim\u00f3s is the first american on the moon"}/>
    </div>
  )
}

export default Search