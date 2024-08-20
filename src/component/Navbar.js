import React, { useEffect, useState } from 'react'
import { Link, NavLink  } from 'react-router-dom'
import { FaTimes , FaAngleDown} from "react-icons/fa";
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge'
// import vector from './Vector.svg';



function Navbar() {
    const [isopen,setisopen]=useState(false)
    // useEffect(e=>{
    //   document.querySelector
    // })
    const navlist=[
      {
     name: 'Find Creatives',
      },
      {
     name: 'ideas',
      },
      {
     name: 'Jobs',
      },
     {
     name: 'Try pro',
     },
     {
     name: 'Login',

    },
  ]

    
  return (
    <nav className=' flex relative z-10 top-5 px-5    items-center     w-full font-bold md:px-14'>
      <div className= ' relative flex flex-col  mr-1  gap-1  w-[35px] md:hidden cursor-pointer' onClick={()=> setisopen(! isopen)}>
         <span className='w-[25px] inline-block rounded-sm h-[2px] bg-white'></span>
         <span className='w-[20px] inline-block rounded-sm h-[2px] bg-white'></span>
         <span className='w-[17px] inline-block rounded-sm h-[2px] bg-white'></span>
      </div>
      {/* <svg    className='cursor-pointer  fill-white inline-block  md:hidden lg:hidden' xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="20px" height="20px" fill='white' aria-hidden="true" ><path d="M413 422H1c-13.807 0-25-11.193-25-25s11.193-25 25-25h412c13.807 0 25 11.193 25 25s-11.193 25-25 25m0 140H1c-13.807 0-25-11.193-25-25s11.193-25 25-25h412c13.807 0 25 11.193 25 25s-11.193 25-25 25m0-280H1c-13.807 0-25-11.193-25-25s11.193-25 25-25h412c13.807 0 25 11.193 25 25s-11.193 25-25 25"></path></svg> */}
 
      <div className='w-[150px]  md:hidden'>
      <img className=' w-full object-cover     ' src={`${process.env.PUBLIC_URL + '/Vector (2).png'}`}></img>
   
      </div>

      < ul  className={ clsx(
        "transition-all  flex  drop-shadow-lg  opacity-0 duration-100   md:opacity-100 flex-col  px-4  text-black left-0 fixed top-[70px]  pt-3   md:pt-0  -translate-x-full md:translate-x-0   w-[100%] md:flex  md:items-center md:relative md:top-0 gap-10 h-[50vh] bg-white md:flex-row md:justify-start   md:w-[90%] md:h-[50px] md:bg-transparent",
        isopen && "translate-x-0  opacity-90 fixed "
        )}  >
          {
            navlist.map((e,index)=>(
            <li key={index} className= 'flex justify-between w-full md:w-max md:justify-normal  text-[.8125rem] font-extrabold'>
            <Link  className={ twMerge ("-translate-x-5  md:opacity-100 md:text-white opacity-0", isopen && 'translate-x-0 opacity-100 duration-500 transition-all delay-150')}>{e.name}</Link>
            <FaAngleDown className='flex text-[16px] md:hidden'></FaAngleDown>
        </li>
             ) )
          }
      </ul>
      <div className='ml-auto      md:ml-auto text-white  text-[.8125rem] font-extrabold '>
            <NavLink className='py-2 px-6  bg-purple-500 rounded-full'>Sign up</NavLink>
             

        </div> 
    </nav>
  )
}

export default Navbar
