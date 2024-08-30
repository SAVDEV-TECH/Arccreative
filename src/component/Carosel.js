import React from 'react'
import {Splide,  SplideSlide} from  '@splidejs/react-splide'
import {AutoScroll} from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css'
function Carosel() {
   
  
   
  
  // splide.mount(splide);
  return (
    <div className="relative flex h-full mt-[100px] mb-[100px]">
    <div className="container max-w-screen-xl mx-auto relative  overflow-x-hidden">
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
                fixedWidth: '300px', // Fixed width for each slide
                gap: '12px', // Gap between slides
            }}
            extensions={{ AutoScroll }} // Use the AutoScroll extension
        >
            <SplideSlide>
         <img alt='i' className=' rounded-[8px] object-cover object-center   h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (4).png'}`}></img>
                
            </SplideSlide>
            <SplideSlide>
         <img alt='i' className=' rounded-[8px]  h-[15.65rem] object-cover object-center ' src={`${process.env.PUBLIC_URL + '/imagei1 (5).png'}`}></img>
             
            </SplideSlide>
            <SplideSlide>
         <img alt='i' className=' rounded-[8px]  h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (7).png'}`}></img>
                 
            </SplideSlide>
            <SplideSlide>
         <img alt='i' className=' rounded-[8px]   h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (7).png'}`}></img>
            
            </SplideSlide>
            <SplideSlide>
         <img alt='i' className=' rounded-[8px]  h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (8).png'}`}></img>
            
            </SplideSlide>
            <SplideSlide>
         <img alt='i' className=' rounded-[8px]   h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (9).png'}`}></img>
                
            </SplideSlide>
            <SplideSlide>
         <img alt='i' className=' rounded-[8px]   h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (7).png'}`}></img>
                 
            </SplideSlide>
            <SplideSlide>
         <img alt='i' className=' rounded-[8px]   h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (7).png'}`}></img>
            
            </SplideSlide>
            <SplideSlide>
         <img alt='i' className=' rounded-[8px] w-full  h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (8).png'}`}></img>
            
            </SplideSlide>
            <SplideSlide>
         <img alt='i' className=' rounded-[8px] w-full  h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (9).png'}`}></img>
                
            </SplideSlide>
            <SplideSlide>
         <img alt='i' className=' rounded-[8px]   h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (7).png'}`}></img>
                 
            </SplideSlide>
            <SplideSlide>
         <img alt='i' className=' rounded-[8px]   h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (7).png'}`}></img>
            
            </SplideSlide>
            <SplideSlide>
         <img alt='i' className=' rounded-[8px]   h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (8).png'}`}></img>
            
            </SplideSlide>
            <SplideSlide>
         <img alt='i' className=' rounded-[8px]   h-[15.65rem]  ' src={`${process.env.PUBLIC_URL + '/imagei1 (9).png'}`}></img>
                
            </SplideSlide>
        </Splide>
    </div>
</div>
      
     
    
  )
}
 
export default Carosel
 