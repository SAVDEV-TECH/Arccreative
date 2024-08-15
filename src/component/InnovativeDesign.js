import React from 'react'
import { FaAngleRight, FaArrowDown, FaArrowRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
 

function InnovativeDesign() {
   
  return (
    <div className=' flex flex-col justify-center items-center'>
      <h2 className='font-bold text-[2rem] cabinet-font'>Innovative Design Shop</h2>
      <ul className='flex items-center max-w-[400px] mx-auto  overflow-x-hidden text-[.8125rem] gap-14 mt-5 font-semibold '>
         <li className='bg-purple-400 py-2 px-7 rounded-full text-purple-700'><NavLink>Discover</NavLink></li>
         <li><NavLink>Animation</NavLink></li>
         <li ><NavLink>Branding</NavLink></li>
         <li><NavLink >Illustraion</NavLink></li>
         <li ><NavLink>Mobile</NavLink></li>
         <li><NavLink>Print</NavLink></li>
         <li><NavLink>Design</NavLink></li>
         <li><FaAngleRight></FaAngleRight></li> 
      </ul>

      <div className='  w-[90%]  mx-auto mb-10 mt-7'>
      <div className='grid md:grid-cols-3  mb-3 gap-10 w-[100%] p-3  mx-auto  '>
          
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[20px] object-cover object-center w-full  h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (4).png'}`}></img>
         <div className='flex items-center text-[.8125rem] mt-2 justify-between px-2'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[40px] h-[40px]  text-center'>Ao</p>
            <p className='text-[.8125rem] font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center gap-2 py-[0.6rem]  text-white rounded-full bg-black px-5'>
                <p>Download</p>
                <FaArrowDown></FaArrowDown>
            </span>
         </div>
        </div>
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[20px] w-full  h-[15.65rem] object-cover object-center ' src={`${process.env.PUBLIC_URL + '/imagei1 (5).png'}`}></img>
         <div className='flex items-center text-[.8125rem] mt-2 justify-between px-2'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[40px] h-[40px]  text-center'>Ao</p>
            <p className='text-[.8125rem] font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center gap-2 py-[0.6rem]  text-white rounded-full bg-black px-5'>
                <p>Download</p>
                <FaArrowDown></FaArrowDown>
            </span>
         </div>
        </div>
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[20px] w-full  h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (7).png'}`}></img>
         <div className='flex items-center text-[.8125rem] mt-2 justify-between px-2'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[40px] h-[40px]  text-center'>Ao</p>
            <p className='text-[.8125rem] font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center gap-2 py-[0.6rem]  text-white rounded-full bg-black px-5'>
                <p>Download</p>
                <FaArrowDown></FaArrowDown>
            </span>
         </div>
        </div>
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[20px] w-full  h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (8).png'}`}></img>
         <div className='flex items-center text-[.8125rem] mt-2 justify-between px-2'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[40px] h-[40px]  text-center'>Ao</p>
            <p className='text-[.8125rem] font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center gap-2 py-[0.6rem]  text-white rounded-full bg-black px-5'>
                <p>Download</p>
                <FaArrowDown></FaArrowDown>
            </span>
         </div>
        </div>
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[20px] w-full  h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (9).png'}`}></img>
         <div className='flex items-center text-[.8125rem] mt-2 justify-between px-2'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[40px] h-[40px]  text-center'>Ao</p>
            <p className='text-[.8125rem] font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center gap-2 py-[0.6rem]  text-white rounded-full bg-black px-5'>
                <p>Download</p>
                <FaArrowDown></FaArrowDown>
            </span>
         </div>
        </div>
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[20px] w-full  h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (6).png'}`}></img>
         <div className='flex items-center text-[.8125rem] mt-2 justify-between px-2'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[40px] h-[40px]  text-center'>Ao</p>
            <p className='text-[.8125rem] font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center gap-2 py-[0.6rem]  text-white rounded-full bg-black px-5'>
                <p>Download</p>
                <FaArrowDown></FaArrowDown>
            </span>
         </div>
        </div>
        
      </div>
      <span className='block w-max  mx-auto rounded-full py-3 mb-10 mt-11 px-5 cursor-pointer text-[.9565rem] font-semibold bg-purple-500 text-white'>Browse more</span>
    </div>
    </div>
  )
}

export default InnovativeDesign
