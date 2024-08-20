import React, { useState } from 'react'
import { Link,  } from 'react-router-dom'
import { FaTimes , FaAngleDown} from "react-icons/fa";
import { clsx } from 'clsx';
// import vector from './Vector.svg';



function Navbar() {
    const [isopen,setisopen]=useState(false)
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
        "transition-all  flex     flex-col  pl-4  left-0 fixed top-[70px]  pt-3   md:pt-0  -translate-x-full md:translate-x-0   w-[100%] md:flex  md:items-center md:relative md:top-0 gap-10 h-[50vh] bg-black md:flex-row md:justify-start   md:w-[90%] md:h-[50px] md:bg-transparent",
        isopen && "translate-x-0 "
        )}  >
        
        <li className= 'flex justify-between w-full md:w-max md:justify-normal text-white text-[.8125rem] font-extrabold'>
            <Link >Find Creatives</Link>
            <FaAngleDown className='flex text-[16px] md:hidden'></FaAngleDown>
        </li>
        <li className='flex justify-between w-full md:w-max md:justify-normal     text-white text-[.8125rem] font-extrabold'>
            <Link>Idea</Link>
            <FaAngleDown className='flex text-[16px] md:hidden'></FaAngleDown>
        </li>
        <li className='flex justify-between w-full md:w-max md:justify-normal text-white  text-[.8125rem] font-extrabold'>
            <Link>Jobs</Link>
            <FaAngleDown className='flex text-[16px] md:hidden'></FaAngleDown>
        </li>
        <li className=' flex justify-between w-full md:w-max md:justify-normal text-white  text-[.8125rem] font-extrabold'>
            <Link>Try pro</Link>
            <FaAngleDown className='flex text-[16px] md:hidden'></FaAngleDown>

        </li>
        <li className=' flex justify-between w-full md:ml-auto md:w-max md:justify-normal  text-white  text-[.8125rem] font-extrabold'>
            <Link className={ clsx("py-2 pl-[30px]",
              isopen && "pl-[0px]")}>
                Login
                </Link>
            <FaAngleDown className='flex text-[16px] md:hidden'></FaAngleDown>

        </li>
     
      </ul>
      <div className='ml-auto      md:ml-auto text-white  text-[.8125rem] font-extrabold '>
            <Link className='py-2 px-6  bg-purple-500 rounded-full'>Sign up</Link>
             

        </div> 
    </nav>
  )
}

export default Navbar
