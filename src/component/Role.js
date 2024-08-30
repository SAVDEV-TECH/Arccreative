

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import {Splide,  SplideSlide} from  '@splidejs/react-splide'
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css'

 

 function Role() {
 
  return (
   // flex relative gap-2 w-[2100px] mx-auto
    <div className='w-[100%] mx-auto   '>
        
   <div className=''>
   <Splide
            options={{
                type: "loop", // Loop back to the beginning when reaching the end
                autoScroll: {
                    pauseOnHover: true, // Do not pause scrolling when hovering over the carousel
                    pauseOnFocus: true, // Do not pause scrolling when the carousel is focused
                    rewind: true, // Rewind to start when the end is reached
                    speed: 1 // Scrolling speed
                },
                arrows: false, // Hide navigation arrows
                pagination: false, // Hide pagination dots
                fixedWidth: '280px', // Fixed width for each slide
                gap: '20px', // Gap between slides
            }}
            extensions={{ AutoScroll }} // Use the AutoScroll extension
        >
            <SplideSlide>
            <div className=' relative w-full h-[360px]'>
         <img alt="i" className=' rounded-[23px] w-full object-cover object-top   h-[100%]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (3).png'}`}></img>
         <div className='flex absolute bottom-2 flex-col  items-start  left-0  text-[.825rem] mt-2  px-2'>
        
            <p className=' font-semibold flex gap-4 items-center justify-center flex-wrap text-[0.625rem]  text-white  '>Ui Ux Designer</p>
            <span className='flex items-start gap-1  py-[0.6rem]  text-white rounded-full '>
                <span className='border-[1px] text-[0.625rem] border-gray-400 px-3 py-1  rounded-full'>Ui Design</span>
                 <span className='border-[1px] text-[0.625rem] border-gray-400 px-3 py-1  rounded-full'>Web Design</span>
                 <span className='border-[1px] text-[0.625rem] border-gray-400 px-3 py-1 rounded-full'>Leadership</span>
            </span>
         </div>
        </div>
                
            </SplideSlide>
            <SplideSlide>
            <div className=' relative w-full h-[360px]'>
         <img alt="u" className=' rounded-[23px] w-full  object-cover object-top  h-[100%]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (10).png'}`}></img>
         <div className='flex absolute bottom-2 flex-col  items-start left-0   text-[.8125rem] mt-2  px-2'>
    
            <p className='text-[0.625rem] font-semibold flex items-center justify-center  text-white  '>Ui Ux Designer</p>
            <span className='flex items-start gap-1 py-[0.6rem]  text-white rounded-full '>
                <span className='border-[1px] text-[0.625rem] border-gray px-3 py-1  rounded-full'>Ui Design</span>
                 <span className='border-[1px] text-[0.625rem] border-gray px-3 py-1 rounded-full'>Web Design</span>
                 <span className='border-[1px] text-[0.625rem] border-gray px-3 py-1  rounded-full'>Leadership</span>
            </span>
         </div>
        </div>
             
            </SplideSlide>
            <SplideSlide>
            <div className=' relative w-full h-[360px]'>
         <img alt="i" className=' rounded-[23px] w-full object-cover object-top   h-[100%]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (1).png'}`}></img>
         <div className='flex absolute bottom-2 flex-col    items-start  left-0  text-[.8125rem] mt-2  px-3'>

            <p className='text-[.625rem] font-semibold flex items-center justify-center  text-white  '>Ui Ux Designer</p>
            <span className='flex items-start gap-1 py-[0.6rem]  text-white rounded-full '>
                <span className='border-[1px] text-[0.625rem] border-white px-3 py-1  rounded-full'>Ui Design</span>
                 <span className='border-[1px] text-[0.625rem] border-white px-3 py-1  rounded-full'>Web Design</span>
                 <span className='border-[1px] text-[0.625rem] border-white px-3 py-1  rounded-full'>Leadership</span>
            </span>
         </div>
        </div>
                 
            </SplideSlide>
            <SplideSlide>
            <div className=' relative w-full h-[360px]'>
      <img alt="i" className=' rounded-[23px] w-full object-cover object-top   h-[100%]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (3).png'}`}></img>
          <div className='flex absolute bottom-2 flex-col  items-start  left-0 text-[.8125rem] mt-2  px-3'>
        
             <p className='text-[.625rem] font-semibold flex items-center justify-center  text-white  '>Ui Ux Designer</p>
             <span className='flex items-start gap-1 py-[0.6rem]  text-white rounded-full '>
                 <span className='border-[1px]  text-[0.625rem] border-gray-400 px-3 py-1  rounded-full'>Ui Design</span>
                  <span className='border-[1px]  text-[0.625rem] border-gray-400 px-3 py-1 rounded-full'>Web Design</span>
                  <span className='border-[1px]  text-[0.625rem] border-gray-400 px-3 py-1  rounded-full'>Leadership</span>
             </span>
          </div>
        </div>
            </SplideSlide>
            <SplideSlide>
            <div className=' relative w-full h-[360px]'>
      <img alt="i" className=' rounded-[23px] w-full object-cover object-top   h-[100%]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (3).png'}`}></img>
          <div className='flex absolute bottom-2 flex-col  items-start  left-0 text-[.8125rem] mt-2  px-3'>

             <p className='text-[.625rem] font-semibold flex items-center justify-center  text-white  '>Ui Ux Designer</p>
             <span className='flex items-start gap-1 py-[0.6rem]  text-gray-400 rounded-full '>
                 <span className='border-[1px]  text-[0.625rem] border-gray-400 px-3 py-1   rounded-full'>Ui Design</span>
                  <span className='border-[1px]  text-[0.625rem] border-gray-400 px-3 py-1  rounded-full'>Web Design</span>
                  <span className='border-[1px]  text-[0.625rem] border- px-3 py-1 rounded-full'>Leadership</span>
             </span>
          </div>
        </div>
            
            </SplideSlide>
            <SplideSlide>
            <div className=' relative w-full h-[360px]'>
      <img  alt='i' className=' rounded-[23px] w-full object-cover object-top   h-[100%]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (3).png'}`}></img>
          <div className='flex absolute bottom-2 flex-col  items-start  left-0 text-[.8125rem] mt-2  px-3'>
             
             <p className='text-[.625rem] font-semibold flex items-center justify-center  text-white  '>Ui Ux Designer</p>
             <span className='flex items-start gap-1 py-[0.6rem]  text-white rounded-full '>
                 <span className='border-[1px]  text-[0.625rem] border-gray-400 px-3 py-1  rounded-full'>Ui Design</span>
                  <span className='border-[1px]  text-[0.625rem] border-gray-400 px-3 py-1 rounded-full'>Web Design</span>
                  <span className='border-[1px]  text-[0.625rem] border-gray-400 px-3 py-1  rounded-full'>Leadership</span>
             </span>
          </div>
        </div>
            </SplideSlide>
        </Splide>
   
    </div>
    
 
    </div>
     
  )
}

export default Role
 
   