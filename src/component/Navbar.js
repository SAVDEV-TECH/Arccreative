import React, { useState } from 'react'
import { Link,  } from 'react-router-dom'
import { FaTimes , FaAngleDown} from "react-icons/fa";


function Navbar() {
    const [isopen,setisopen]=useState(false)
  return (
    <nav className=' relative z-10 top-5 px-10  flex justify-between w-full font-bold md:px-14'>
      <div className=''>
        <img className='w-[130px]' src='/vector.png'></img>
      </div>

      <ul className={`${isopen? 'flex':'hidden'}  flex-col px-10 m-0 items-start justify-evenly left-0 fixed top-0  md:animate  md:transition-duration-1000 md:ease-in-out  w-[100%] md:flex   gap-5 md:gap-10 h-[100vh] bg-black md:flex-row md:justify-between md:ml-[200px] md:relative  md:h-[70px] md:bg-transparent`}>
        <FaTimes className='text-[16px] text-white md:hidden ' onClick={()=>setisopen(false)}></FaTimes>
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
        <li className=' flex justify-between w-full md:w-max md:justify-normal text-white md:ml-auto text-[.8125rem] font-extrabold'>
            <Link>Login</Link>
            <FaAngleDown className='flex text-[16px] md:hidden'></FaAngleDown>

        </li>
        <li className=' flex justify-between w-full md:w-max md:justify-normal text-white  text-[.8125rem] font-extrabold md:ml-auto'>
            <Link className='py-3 px-8  bg-purple-500 rounded-full'>Sign up</Link>
            <FaAngleDown className='flex text-[16px] md:hidden'></FaAngleDown>

        </li>
      </ul>
      <svg onClick={()=> setisopen(! isopen)}  className='cursor-pointer  fill-white inline-block  md:hidden lg:hidden' xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="20px" height="20px" fill='white' aria-hidden="true" ><path d="M413 422H1c-13.807 0-25-11.193-25-25s11.193-25 25-25h412c13.807 0 25 11.193 25 25s-11.193 25-25 25m0 140H1c-13.807 0-25-11.193-25-25s11.193-25 25-25h412c13.807 0 25 11.193 25 25s-11.193 25-25 25m0-280H1c-13.807 0-25-11.193-25-25s11.193-25 25-25h412c13.807 0 25 11.193 25 25s-11.193 25-25 25"></path></svg>
    </nav>
  )
}

export default Navbar
