import React from 'react'
import HeaderContent from './HeaderContent'
import Navbar from './Navbar';
 



 
 

function Header() {
  return (
    <div className='w-full bg-cover bg-center relative h-[100vh] ' style={ {backgroundImage:`url(${process.env.PUBLIC_URL + '/image.jfif'})`}}> 
    <div className='h-screen bg-black absolute top-0 bottom-0 right-0 left-0 z-[1] opacity-50'></div>
    <Navbar></Navbar>
      <HeaderContent></HeaderContent>
       
   
    </div>
  )
}

export default Header;
