
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

   <article id="wrap">
 <article id="lightings">
     <section id="one">
           <section id="two">
               <section id="three">
                   <section id="four">
                       <section id="five">
                           
                       </section>
                   </section>
               </section>
           </section>
   </section>
   </article>
</article>
<Footer />
</>
)
}

export default MyApp
