import HistoryList from '../components/HistoryList'
import SearchBar from '../components/SearchBar'
import  Head  from 'next/head';
import Weather from '../components/Weather';



export default function Home() {
  return (
    <div className="dark:bg-gray-900 bg-slate-300  h-screen">
<Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/ico/nasa.png" />
<title>NASA AI Search — Hackanoids Team </title>
<meta name="title" content="NASA AI Search — Hackanoids Team "/>
<meta name="description" content="It's an Ai Based Search For National Aeronautics and Space Administration (NASA), to analyze and use the massive data that NASA has due to moving to the cloud .
The data itself is a free and open data  that NASA offers.
Our application is a user-friendly Search tool that has the capability of AI/ML technologies for better results and recommendations system enhancement to navigate this massive data and  get the accurate result most of the time, so the users can input short text phrases ,and our AI tool can match it to NASA science data or imagery and display the results for the user in a creative way so he gets the full 
picture of what he searching about ."/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://darling-granita-e4f3ae.netlify.app/"/>
<meta property="og:title" content="NASA AI Search — Hackanoids Team "/>
<meta property="og:description" content="It's an Ai Based Search For National Aeronautics and Space Administration (NASA), to analyze and use the massive data that NASA has due to moving to the cloud .
The data itself is a free and open data  that NASA offers.
Our application is a user-friendly Search tool that has the capability of AI/ML technologies for better results and recommendations system enhancement to navigate this massive data and  get the accurate result most of the time, so the users can input short text phrases ,and our AI tool can match it to NASA science data or imagery and display the results for the user in a creative way so he gets the full 
picture of what he searching about ."/>
<meta property="og:image" content="/Images/404.png"/>
<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://darling-granita-e4f3ae.netlify.app/"/>
<meta property="twitter:title" content="NASA AI Search — Hackanoids Team "/>
<meta property="twitter:description" content="It's an Ai Based Search For National Aeronautics and Space Administration (NASA), to analyze and use the massive data that NASA has due to moving to the cloud .
The data itself is a free and open data  that NASA offers.
Our application is a user-friendly Search tool that has the capability of AI/ML technologies for better results and recommendations system enhancement to navigate this massive data and  get the accurate result most of the time, so the users can input short text phrases ,and our AI tool can match it to NASA science data or imagery and display the results for the user in a creative way so he gets the full 
picture of what he searching about ."/>
<meta property="twitter:image" content="/Images/404.png"/>
        </Head>

<div class="absolute top-2 left-2">
  <Weather/>
</div>
<div className="mt-[6%]   flex justify-center ">
  <SearchBar/>
</div>
<HistoryList/>



    </div>
  )

}
