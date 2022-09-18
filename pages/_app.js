
import { useEffect } from 'react';
import '../styles/globals.css'
import Footer from './../components/Footer';

function MyApp({ Component, pageProps}) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
        if (loader)
            loader.style.display = 'none';
    }
}, []);

  return (
   <> <Component   {...pageProps }  />
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
