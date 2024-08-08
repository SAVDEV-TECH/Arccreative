import React, { useRef } from 'react'
import { FaArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 

function Role() {
   var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    const slider=React.useRef(null)
  return (
   // flex relative gap-2 w-[2100px] mx-auto
    <div className='w-[90%]   ml-[90px]'>
        
   <div className=''>
   <Slider ref={slider} {...settings}> 
      <div className=' relative w-full h-[360px]'>
         <img className=' rounded-[20px] w-full object-cover object-top   h-[100%]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (3).png'}`}></img>
         <div className='flex absolute bottom-6 flex-col  items-start  left-3  text-[.8125rem] mt-2  px-2'>
            <p className=' font-semibold mb-1   text-[1rem]   text-white'>Atochi Ogbonna Co.</p>
            <p className='text-[1rem] font-semibold flex items-center justify-center  text-white  '>Ui Ux Designer</p>
            <span className='flex items-start gap-1 py-[0.6rem]  text-white rounded-full '>
                <span className='border-[2px] border-white px-3 py-1 font-semibold rounded-full'>Ui Design</span>
                 <span className='border-[2px] border-white px-3 py-1 font-semibold rounded-full'>Web Design</span>
                 <span className='border-[2px] border-white px-3 py-1 font-semibold rounded-full'>Leadership</span>
            </span>
         </div>
        </div>
        <div className=' relative w-[400px] h-[360px]'>
         <img className=' rounded-[20px] w-full  object-cover object-top  h-[100%]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (10).png'}`}></img>
         <div className='flex absolute bottom-6 flex-col  items-start left-3   text-[.8125rem] mt-2  px-2'>
            <p className=' font-semibold mb-1   text-[1rem]   text-white'>Atochi Ogbonna Co.</p>
            <p className='text-[1rem] font-semibold flex items-center justify-center  text-white  '>Ui Ux Designer</p>
            <span className='flex items-start gap-1 py-[0.6rem]  text-white rounded-full '>
                <span className='border-[2px] border-white px-3 py-1 font-semibold rounded-full'>Ui Design</span>
                 <span className='border-[2px] border-white px-3 py-1 font-semibold rounded-full'>Web Design</span>
                 <span className='border-[2px] border-white px-3 py-1 font-semibold rounded-full'>Leadership</span>
            </span>
         </div>
        </div>
        <div className=' relative w-[400px] h-[360px]'>
         <img className=' rounded-[20px] w-full object-cover object-top   h-[100%]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (1).png'}`}></img>
         <div className='flex absolute bottom-6 flex-col    items-start  left-3  text-[.8125rem] mt-2  px-3'>
            <p className=' font-semibold mb-1   text-[1rem]   text-white'>Atochi Ogbonna Co.</p>
            <p className='text-[1rem] font-semibold flex items-center justify-center  text-white  '>Ui Ux Designer</p>
            <span className='flex items-start gap-1 py-[0.6rem]  text-white rounded-full '>
                <span className='border-[2px] border-white px-2 py-1 font-semibold rounded-full'>Ui Design</span>
                 <span className='border-[2px] border-white px-2 py-1 font-semibold rounded-full'>Web Design</span>
                 <span className='border-[2px] border-white px-2 py-1 font-semibold rounded-full'>Leadership</span>
            </span>
         </div>
        </div>
        <div className=' relative w-[400px] h-[360px]'>
         <img className=' rounded-[20px] w-full object-cover object-top   h-[100%]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (3).png'}`}></img>
         <div className='flex absolute bottom-6 flex-col  items-start  left-3  text-[.8125rem] mt-2  px-3'>
            <p className=' font-semibold mb-1   text-[1rem]   text-white'>Atochi Ogbonna Co.</p>
            <p className='text-[1rem] font-semibold flex items-center justify-center  text-white  '>Ui Ux Designer</p>
            <span className='flex items-start gap-1 py-[0.6rem]  text-white rounded-full '>
                <span className='border-[2px] border-white px-2 py-1 font-semibold rounded-full'>Ui Design</span>
                 <span className='border-[2px] border-white px-2 py-1 font-semibold rounded-full'>Web Design</span>
                 <span className='border-[2px] border-white px-2 py-1 font-semibold rounded-full'>Leadership</span>
            </span>
         </div>
        </div>
        <div className=' relative w-[400px] h-[300px]'>
         <img className=' rounded-[20px] w-full  h-[100%] object-cover object-top   ' src={`${process.env.PUBLIC_URL + '/imagei1 (4).png'}`}></img>
         <div className='flex absolute bottom-6 flex-col  items-start left-3   text-[.8125rem] mt-2  px-3'>
            <p className=' font-semibold mb-1   text-[1rem]   text-white'>Atochi Ogbonna Co.</p>
            <p className='text-[1rem] font-semibold flex items-center justify-center  text-white  '>Ui Ux Designer</p>
            <span className='flex items-start gap-1 py-[0.6rem]  text-white rounded-full '>
                <span className='border-[2px] border-white px-3 py-1 font-semibold rounded-full'>Ui Design</span>
                 <span className='border-[2px] border-white px-3 py-1 font-semibold rounded-full'>Web Design</span>
                 <span className='border-[2px] border-white px-3 py-1 font-semibold rounded-full'>Leadership</span>
            </span>
         </div>
        </div>
        <div className=' relative w-[400px] h-[300px]'>
         <img className=' rounded-[20px] w-full  h-[100%]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (4).png'}`}></img>
         <div className='flex absolute bottom-6 flex-col  items-start left-3   text-[.8125rem] mt-2  px-2'>
            <p className=' font-semibold mb-1   text-[1rem]   text-white'>Atochi Ogbonna Co.</p>
            <p className='text-[1rem] font-semibold flex items-center justify-center  text-white  '>Ui Ux Designer</p>
            <span className='flex items-start gap-1 py-[0.6rem]  text-white rounded-full '>
                <span className='border-[2px] border-white px-3 py-1 font-semibold rounded-full'>Ui Design</span>
                 <span className='border-[2px] border-white px-3 py-1 font-semibold rounded-full'>Web Design</span>
                 <span className='border-[2px] border-white px-3 py-1 font-semibold rounded-full'>Leadership</span>
            </span>
         </div>
        </div>
        </Slider>
    </div>
    
    <span className='flex gap-4 mt-9 w-max mx-auto cursor-pointer'   >
    <FaArrowLeft className='w-[50px] rounded-full text-white h-[50px] p-[17px]
     flex items-center justify-center bg-black' onClick={() => slider?.current?.slickPrev()}  />
        <FaArrowRight className='w-[50px] rounded-full text-white h-[50px] p-[17px] flex items-center justify-center bg-slate-500'
         onClick={() => slider?.current?.slickNext()} />
 
    </span>
     
    </div>
     
  )
}

export default Role
