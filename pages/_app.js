
import { useEffect } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps}) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
        if (loader)
            loader.style.display = 'none';
    }
}, []);

  return (
    <Component   {...pageProps }  />
)
}

export default MyApp
