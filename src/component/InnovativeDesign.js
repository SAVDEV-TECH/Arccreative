import React, { useState } from 'react'
import { FaAngleRight, FaArrowDown, FaArrowRight } from 'react-icons/fa'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { NavLink } from 'react-router-dom'
 

function InnovativeDesign() {
   const[moveit,setmoveit]=useState(0)
   const move=()=>{
      setmoveit(moveit=>moveit + 1)
   }
  return (
    <div className=' flex flex-col justify-center items-center'>
      <h2 className='font-bold text-[2rem] cabinet-font'>Innovative Design Shop</h2>
      <div className='flex  items-center justify-center'> 
         <div className=' overflow-hidden max-w-[70%] md:max-w-[100%] m-auto'   > 
      <ul style={{ transform:`translateX(-${moveit * 100}%)`}} className='flex transition-all ease-linear items-center max-w-[400px] md:max-w-[700px] mx-auto  text-[.8125rem] gap-14 mt-5 font-semibold '  >
         <li className='bg-purple-400 py-2 px-7 rounded-full text-purple-700'><NavLink>Discover</NavLink></li>
         <li><NavLink className=' '
        to='/' >Animation</NavLink></li>
         <li ><NavLink  className=' ' to='/'>Branding</NavLink></li>
         <li><NavLink  className=' '  to='/'>Illustraion</NavLink></li>
         <li ><NavLink  className=' ' to='/'>Mobile</NavLink></li>
         <li><NavLink  className=' ' to='/'>Print</NavLink></li>
         <li><NavLink  className=' ' to='/'>Design</NavLink></li>
          
      </ul>
      </div>
      <FaAngleRight onClick={move} className='mt-[20px] cursor-pointer md:hidden  text-[20px]'/>
      </div>
      <div className='  w-[85%] sm:w-[95%]  md:w-[95%] mx-auto mb-10 mt-7'>
      <div className='grid grid-cols-1 sm:grid-cols-3  md:grid-cols-4   mb-3 gap-10 w-[100%] p-3  mx-auto  '>
          
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[8px] object-cover object-center w-full h-[16rem]  md:h-[12.813rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (4).png'}`}></img>
         <div className='flex items-center  mt-2  px-1'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[30px] h-[30px]  text-center'>Ao</p>
            <p className='text-[0.875rem] ml-1 font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center   text-black  '>
                <p className='text-[0.625rem] font-bold bg-gray-500 px-3 py-1 rounded-sm text-white'>PRO</p>
                {/* <MdOutlineRemoveRedEye className='ml-auto text-gray-500' /> */}
            </span>
         </div>
        </div>
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[8px] w-full h-[16rem]    md:h-[12.813rem] object-cover object-center ' src={`${process.env.PUBLIC_URL + '/imagei1 (5).png'}`}></img>
         <div className='flex items-center  mt-2  px-1'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[30px] h-[30px]  text-center'>Ao</p>
            <p className='text-[0.875rem]  ml-1 font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center  text-black '>
            <p className='text-[0.625rem] font-bold bg-gray-500 px-3 py-1 rounded-sm text-white'>PRO</p>
             {/* <MdOutlineRemoveRedEye className='ml-[0.938rem] text-gray-500' /> */}
            </span>
         </div>
        </div>
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[8px] w-full h-[16rem]  object-cover  md:h-[12.813rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (7).png'}`}></img>
         <div className='flex items-center  mt-2 px-1'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[30px] h-[30px]  text-center'>Ao</p>
            <p className='text-[.875rem] ml-1 font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center   text-black '>
            <p className='text-[0.625rem] font-bold bg-gray-500 px-3 py-1 rounded-sm text-white'>PRO</p>
            <MdOutlineRemoveRedEye className='ml-[0.938rem] text-gray-500' />
            </span>
         </div>
        </div>
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[8px] w-full h-[16rem] object-cover  md:h-[12.813rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (8).png'}`}></img>
         <div className='flex items-center  mt-2  px-1'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[30px] h-[30px]  text-center'>Ao</p>
            <p className='text-[.87rem] font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center text-black'>
            <p className='text-[0.625rem] font-bold bg-gray-500 px-3 py-1 rounded-sm text-white'>PRO</p>
            {/* <MdOutlineRemoveRedEye className='ml-[0.938rem] text-gray-500' /> */}
            </span>
         </div>
        </div>
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[8px] w-full h-[16rem] object-cover   md:h-[12.813rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (9).png'}`}></img>
         <div className='flex items-center mt-2  px-1'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[30px] h-[30px]  text-center'>Ao</p>
            <p className='text-[.875rem] font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center   text-black '>
            <p className='text-[0.625rem] font-bold bg-gray-500 px-3 py-1 rounded-sm text-white'>PRO</p>
            {/* <MdOutlineRemoveRedEye className='ml-[0.938rem] text-gray-500' /> */}
            </span>
         </div>
        </div>
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[8px] w-full h-[16rem] object-cover  md:h-[12.813rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (6).png'}`}></img>
         <div className='flex items-center text-[.875rem] mt-2  px-1'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[30px] h-[30px]  text-center'>Ao</p>
            <p className='text-[.875rem] font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center   text-black'>
            <p className='text-[0.625rem] font-bold bg-gray-500 px-3 py-1 rounded-sm text-white'>PRO</p>
            {/* <MdOutlineRemoveRedEye className='ml-[0.938rem] text-gray-500' /> */}
            </span>
         </div>
        </div>

        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[8px] object-cover  w-full h-[16rem]  md:h-[12.813rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (4).png'}`}></img>
         <div className='flex items-center  mt-2  px-1'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[30px] h-[30px]  text-center'>Ao</p>
            <p className='text-[0.875rem] ml-1 font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center   text-black  '>
                <p className='text-[0.625rem] font-bold bg-gray-500 px-3 py-1 rounded-sm text-white'>PRO</p>
                {/* <MdOutlineRemoveRedEye className='ml-auto text-gray-500' /> */}
            </span>
         </div>
        </div>
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[8px] w-full h-[16rem]  md:h-[12.813rem] object-cover object-center ' src={`${process.env.PUBLIC_URL + '/imagei1 (5).png'}`}></img>
         <div className='flex items-center  mt-2  px-1'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[30px] h-[30px]  text-center'>Ao</p>
            <p className='text-[0.875rem]  ml-1 font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center  text-black '>
            <p className='text-[0.625rem] font-bold bg-gray-500 px-3 py-1 rounded-sm text-white'>PRO</p>
             {/* <MdOutlineRemoveRedEye className='ml-[0.938rem] text-gray-500' /> */}
            </span>
         </div>
        </div>
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[8px] w-full h-[16rem] md:h-[12.813rem] object-cover  ' src={`${process.env.PUBLIC_URL + '/imagei1 (7).png'}`}></img>
         <div className='flex items-center  mt-2 px-1'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[30px] h-[30px]  text-center'>Ao</p>
            <p className='text-[.875rem] ml-1 font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center   text-black '>
            <p className='text-[0.625rem] font-bold bg-gray-500 px-3 py-1 rounded-sm text-white'>PRO</p>
            {/* <MdOutlineRemoveRedEye className='ml-[0.938rem] text-gray-500' /> */}
            </span>
         </div>
        </div>
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[8px] w-full object-cover   h-[16rem] md:h-[12.813rem]    ' src={`${process.env.PUBLIC_URL + '/imagei1 (8).png'}`}></img>
         <div className='flex items-center  mt-2  px-1'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[30px] h-[30px]  text-center'>Ao</p>
            <p className='text-[.87rem] font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center text-black'>
            <p className='text-[0.625rem] font-bold bg-gray-500 px-3 py-1 rounded-sm text-white'>PRO</p>
            {/* <MdOutlineRemoveRedEye className='ml-[0.938rem] text-gray-500' /> */}
            </span>
         </div>
        </div>
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[8px] w-full  object-cover  h-[16rem] md:h-[12.813rem]    ' src={`${process.env.PUBLIC_URL + '/imagei1 (9).png'}`}></img>
         <div className='flex items-center mt-2  px-1'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[30px] h-[30px]  text-center'>Ao</p>
            <p className='text-[.875rem] font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center   text-black '>
            <p className='text-[0.625rem] font-bold bg-gray-500 px-3 py-1 rounded-sm text-white'>PRO</p>
            {/* <MdOutlineRemoveRedEye className='ml-[0.938rem] text-gray-500' /> */}
            </span>
         </div>
        </div>
        <div className=' relative w-full h-[300px]'>
         <img className=' rounded-[8px] w-full object-cover  h-[16rem] md:h-[12.813rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (6).png'}`}></img>
         <div className='flex items-center text-[.875rem] mt-2  px-1'>
            <p className='rounded-full flex items-center justify-center bg-red-200 text-red-400 w-[30px] h-[30px]  text-center'>Ao</p>
            <p className='text-[.875rem] font-semibold'>Atochi Ogbonna Co.</p>
            <span className='flex items-center   text-black'>
            <p className='text-[0.625rem] font-bold bg-gray-500 px-3 py-1 rounded-sm text-white'>PRO</p>
            {/* <MdOutlineRemoveRedEye className='ml-[0.938rem] text-gray-500' /> */}
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
