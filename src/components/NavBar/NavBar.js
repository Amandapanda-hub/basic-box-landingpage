import React from 'react'
import {TiSocialTwitter, TiSocialFacebook} from 'react-icons/ti'

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between w-full py-10 px-[4rem] absolute top-0">
      <div className=''>
        <h1 className="text-black font-light text-3xl tracking-wide">Aquilone</h1>
      </div>
      <div className="flex text-3xl space-x-4">
        <a href='#!' className=''>
            <TiSocialFacebook/>
        </a>
        <a href='#!' className=''>
            <TiSocialTwitter/>
        </a> 
      </div>
    </nav>
  )
}
