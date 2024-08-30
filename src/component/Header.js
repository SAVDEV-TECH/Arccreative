import React from 'react'
import HeaderContent from './HeaderContent'
import Navbar from './Navbar';
import { Routes,Route } from 'react-router-dom';
import SignIn from './Sign in & Login/SignIn';

 
 
 



 
 

function Header() {
  return (
    < div className='w-full bg-cover bg-center relative h-[100vh] ' style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/image.jfif'})`}}> 
    <div className='h-screen bg-black absolute top-0 bottom-0 right-0 left-0 z-[1] opacity-50'></div>
     
    <Navbar></Navbar>
    
      <HeaderContent></HeaderContent>
      <>
    <Routes>
        <Route path='/SignIn' element={<SignIn></SignIn>}></Route>
       </Routes>
       </>
    </div>
  )
}

export default Header;
