
import React , { useEffect } from 'react';
import '../styles/globals.css'
import Footer from './../components/Footer';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import dataReducer from "../features/MyStore";









function MyApp({ Component, pageProps}) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
        if (loader)
            loader.style.display = 'none';
    }
}, []);


const store = configureStore({
    reducer: {
      theStore: dataReducer,
    },
  });
  return (
   <> 
   <Provider store={store}>

   <Component   {...pageProps }  />
   </Provider>

   <div id="wrap">
 <div id="lightings">
     <div id="one">
           <div id="two">
               <div id="three">
                   <div id="four">
                       <div id="five">
                           
                       </div>
                   </div>
               </div>
           </div>
   </div>
   </div>
</div>
<Footer />
</>
)
}

export default MyApp
