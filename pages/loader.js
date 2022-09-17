import Image from 'next/image'
import React from 'react'

function loader() {
  return (
<div className="flex justify-content justify-center mx-auto">
<div className="h-[100px] w-[50px]"><Image layout="fill" src="/Images/splash.gif" alt="Splash"  /></div>

</div>
    )
}

export default loader