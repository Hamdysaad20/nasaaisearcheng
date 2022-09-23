import React,{useEffect ,useState} from 'react'
import Lottie from "lottie-react";

import groovyWalkAnimation from "../public/Images/weatherJson/4804-weather-sunny.json";
function Weather() {
   const [weatherData,setWeatherData]= useState("")
   const [long,setLong]= useState()
   const [lat,setLat]= useState()
   const [country,setCountry]= useState("")

   useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
        setLat(typeof position.coords.latitude ==="undefined"? parseFloat( position.coords.latitude) :parseFloat(29.31));
        setLong(typeof position.coords.longitude ==="undefined"?parseFloat( position.coords.longitude) :parseFloat( 30.84));

      });   
   

   let url2Location="https://geolocation-db.com/json/"
let url="https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+long+"&hourly=temperature_2m"
    fetch(url)
    .then(response => response.json())
        .then(response =>{

        setWeatherData(response)
console.log(response)

}
        )
        .catch(err => console.error( "there is an error"+ err.message));



        fetch(url2Location)
    .then(response => response.json())
        .then(response =>{

            setCountry(response.country_name)
console.log(response)

}
        )
        .catch(err => console.error( "there is an error"+ err.message));

          



  },[lat,long]);






  return (
    <div className="h-16 md:h-32 w-36 md:w-60 rounded-md overflow-hidden bg-slate-400/10 backdrop-blur-lg max-w-lx ">
        <div className="w-full h-full relative hover:scale-105 duration-1000 ">

            <div className="w-[90%] flex justify-between p-2 absolute top-0 h-[90%]"> <div className=" h-[50%] w-[50%]">
            <Lottie
             animationData={groovyWalkAnimation} 
             />
            </div>
             <div  style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}  className="text-gray-200  md:mt-[10%] flex flex-col h-[100%]  place-items-center">
                <h1 className="mt-3 md:mt-1 drop-shadow-xl text-2xl	"> {typeof weatherData.elevation ==="undefined"?weatherData.elevation:32}<span className="text-red-400 opacity-50 animate-ping ">°C</span></h1>
                <p className="hidden md:block">Alex ,{country}</p>
             </div>
             </div>
          </div>
    </div>
  )
}

export default Weather