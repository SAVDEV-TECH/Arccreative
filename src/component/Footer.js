import React from 'react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
     <div className='w-[100%] grid text-center  '> 
     <div className='flex flex-col justify-center md:justify-between md:px-14 items-center pr-10 md:flex-row'> 
     {/* < img  altclassName='w-[150px] h-[50px] md:ml-5  md:w-[200px]  object-contain  md:object-cover ' src= {`${process.env.PUBLIC_URL + '/Vector (2).png'}`}></img> */}
    <ul className='flex justify-center px-3 w-[100%] md:w-max items-center   flex-wrap   text-[.8125rem] gap-[25px]    font-semibold '>
    <li className='py-2 '><NavLink>Discover</NavLink></li>
    <li><NavLink>Animation</NavLink></li>
    <li ><NavLink>Branding</NavLink></li>
    <li><NavLink >Illustraion</NavLink></li>
    <li ><NavLink>Mobile</NavLink></li>
    <li><NavLink>Print</NavLink></li>
    <li><NavLink>Design</NavLink></li>
    <li ><NavLink>Mobile</NavLink></li>
    <li><NavLink>Print</NavLink></li>
    <li><NavLink>Design</NavLink></li>
   
 </ul>
 <div className='flex items-center gap-6 mt-5 md:mt-0'>
 <div className='ml-auto text-[20px]'><FaLinkedinIn></FaLinkedinIn></div>
 <div className='text-[20px]'><FaInstagram></FaInstagram></div> 
 </div>
 </div>
 

 <div className='flex flex-col justify-center px-10 md:justify-between  w-[100%] font-thin text-gray-500 mt-20 mb-11 items-center pr-10 md:flex-row'> 
     
    <ul className='flex justify-center px-3 w-[100%] md:w-max items-center   flex-wrap   text-[.8125rem] gap-[25px]    font-normal '>
    
    <li><NavLink>Arc Creative Store, LLC</NavLink></li>
    <li ><NavLink>Terms</NavLink></li>
    <li><NavLink >Privacy</NavLink></li>
    <li><NavLink >cookies</NavLink></li>
  
 </ul>
  
 <ul className='flex justify-center mx-auto md:mx-0 px-3 w-[100%] md:w-max items-center   flex-wrap   text-[.8125rem] gap-[25px]    font-normal '>
    <li className='py-2 '><NavLink>Discover</NavLink></li>
    <li><NavLink>Animation</NavLink></li>
    <li ><NavLink>Branding</NavLink></li>
    <li><NavLink >Illustraion</NavLink></li>
    <li ><NavLink>Mobile</NavLink></li>
    
   
 </ul>
 </div>
 
</div>
 
  )
}

export default Footer
