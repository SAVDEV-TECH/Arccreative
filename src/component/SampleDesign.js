import React from 'react'
import { FaArrowDown,faarr } from 'react-icons/fa'
function SampleDesign() {
  return (
    <div className='  w-[90%] overflow-hidden  mx-auto mb-10 mt-20'>
    <div className='flex  mb-3 gap-10 w-[2100px] p-3  mx-auto  '>
      <div className=' relative w-full h-[300px]'>
       <img className=' rounded-[20px] object-cover object-center w-full  h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (4).png'}`}></img>
       <div className='flex items-center text-[.8125rem] mt-2 justify-between px-2'>
          
          <p className='text-[.8125rem] font-semibold'>Website.</p>
           
       </div>
      </div>
      <div className=' relative w-full h-[300px]'>
       <img className=' rounded-[20px] w-full  h-[15.65rem] object-cover object-center ' src={`${process.env.PUBLIC_URL + '/imagei1 (5).png'}`}></img>
       <div className='flex items-center text-[.8125rem] mt-2 justify-between px-2'>
          <p className='text-[.8125rem] font-semibold'>Illustration</p>
           
       </div>
      </div>
      <div className=' relative w-full h-[300px]'>
       <img className=' rounded-[20px] w-full  h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (7).png'}`}></img>
       <div className='flex items-center text-[.8125rem] mt-2 justify-between px-2'>
          
          <p className='text-[.8125rem] font-semibold'>product Design</p>
           
       </div>
      </div>
      <div className=' relative w-full h-[300px]'>
       <img className=' rounded-[20px] w-full  h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (8).png'}`}></img>
       <div className='flex items-center text-[.8125rem] mt-2 justify-between px-2'>
           
          <p className='text-[.8125rem] font-semibold'>Graphics Design</p>
          
       </div>
      </div>
      <div className=' relative w-full h-[300px]'>
       <img className=' rounded-[20px] w-full  h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (9).png'}`}></img>
       <div className='flex items-center text-[.8125rem] mt-2 justify-between px-2'>
          
          <p className='text-[.8125rem] font-semibold'>Atochi Ogbonna Co.</p>
 
       </div>
      </div>
      <div className=' relative w-full h-[300px]'>
       <img className=' rounded-[20px] w-full  h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (6).png'}`}></img>
       <div className='flex items-center text-[.8125rem] mt-2 justify-between px-2'>
          <p className='text-[.8125rem] font-semibold'>Atochi Ogbonna Co.</p>
 
       </div>
      </div>
    </div>
    {/* <span className='block w-max  mx-auto rounded-full py-3 mb-10 mt-11 px-5 cursor-pointer text-[.9565rem] font-semibold bg-purple-500 text-white'>Browse more</span> */}
  </div>
  
  )
}

export default SampleDesign
