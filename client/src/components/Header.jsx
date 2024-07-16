import React from 'react'
import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <div className='sticky h-16 w-screen flex items-center justify-center shadow-lg bg-white z-10'>
        <div className='flex items-center justify-center gap-4'>
            <img src={logo} alt="logo" className='w-12' />
            
        </div>
        
    </div>
  )
}

export default Header