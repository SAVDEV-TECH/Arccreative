
import React, {  useState,useEffect } from "react";
 

function HireDesigner() {
  
  
  const [slider ,setslider ]=useState(0)


  useEffect(() => {
    const slideInterval = setInterval(() => {
  setslider( (slider)=>(slider===2 ? 0 : slider + 1))
       
    }, 7000);
    return () => clearInterval(slideInterval);
  }, [slider]);

  return (
    <div className='w-[70%]      h-[600px] overflow-hidden  mt-20  mx-auto'>
      <div className=' flex w-[310%]    relative  gap-5   transition duration-[500ms] ease-in-out'style={{ transform:`translateX(-${slider * 34}%)`}}>
          {/* <Slider  {...settings} >  */}
        <div className=' relative w-[100%]   text-center h-[500px] flex flex-col gap-10 px-5 bg-purple-600 py-9 rounded-[15px]'>
           <h2 className='font-bold text-[1rem] md:text-[2rem] mt-[100px] text-white '>Hire Designers Today</h2>
           <p className='max-w-[75%] text-white mx-auto text-center'>
            Unlock the potential of your brand with a professional designers who can bring your version to life 
            with creativity and technical expert
           </p>
           <img className='w-[50px]  h-[50px] md:w-[100px] md:h-[100px] absolute right-4' src={`${process.env.PUBLIC_URL + '/Avatar-3.png'}`}></img>
           <img className=' w-[50px]  h-[50px] md:w-[100px] md:h-[100px] absolute left-4' src={`${process.env.PUBLIC_URL + '/Avatar-3.png'}`}></img>
           <img className=' w-[50px]  h-[50px] md:w-[100px] md:h-[100px] absolute bottom-4' src={`${process.env.PUBLIC_URL + '/Avatar-1.png'}`}></img>
           <img className=' w-[50px]  h-[50px] md:w-[100px] md:h-[100px] absolute right-4 bottom-4' src={`${process.env.PUBLIC_URL + '/Avatar-2.png'}`}></img>
           <span className='px-[15px] text-[.8125rem] cursor-pointer  text-purple-500 rounded-full py-[13px] font-semibold bg-slate-50 w-max mx-auto '>Get started now</span>
        </div>
        <div className=' w-[100%] relative  text-center h-[500px] flex flex-col gap-10 px-5 bg-purple-600 py-9 rounded-[15px]'>
           <h2 className='font-bold text-[1rem] md:text-[2rem] mt-[100px] text-white '>Hire Designers Today</h2>
           <p className='max-w-[65%] text-white mx-auto text-center'>
            Unlock the potential of your brand with a professional designers who can bring your version to life 
            with creativity and technical expert
           </p>
           <img className=' w-[50px]  h-[50px] md:w-[100px] md:h-[100px] absolute right-4' src={`${process.env.PUBLIC_URL + '/Avatar-3.png'}`}></img>
           <img className=' w-[50px]  h-[50px] md:w-[100px] md:h-[100px] absolute left-4' src={`${process.env.PUBLIC_URL + '/Avatar-3.png'}`}></img>
           <img className=' w-[50px]  h-[50px] md:w-[100px] md:h-[100px] absolute bottom-4' src={`${process.env.PUBLIC_URL + '/Avatar-1.png'}`}></img>
           <img className=' w-[50px]  h-[50px] md:w-[100px] md:h-[100px] absolute right-4 bottom-4' src={`${process.env.PUBLIC_URL + '/Avatar-2.png'}`}></img>
           <span className='px-[15px] text-[.8125rem] cursor-pointer mb-16 text-purple-500 rounded-full py-[13px] font-semibold bg-slate-50 w-max mx-auto '>Get started now</span>
        </div>
        <div className=' w-[100%] relative   h-[500px] text-center flex flex-col gap-10 px-5 bg-purple-600 py-9 rounded-[15px]'>
           <h2 className='font-bold text-[1rem] md:text-[2rem] mt-[100px] text-white '>Hire Designers Today</h2>
           <p className='max-w-[65%] text-white mx-auto text-center'>
            Unlock the potential of your brand with a professional designers who can bring your version to life 
            with creativity and technical expert
           </p>
           <img className=' w-[50px]  h-[50px] md:w-[100px] md:h-[100px] absolute right-4' src={`${process.env.PUBLIC_URL + '/Avatar-3.png'}`}></img>
           <img className=' w-[50px]  h-[50px] md:w-[100px] md:h-[100px] absolute left-4' src={`${process.env.PUBLIC_URL + '/Avatar-3.png'}`}></img>
           <img className=' w-[50px]  h-[50px] md:w-[100px] md:h-[100px] absolute bottom-4' src={`${process.env.PUBLIC_URL + '/Avatar-1.png'}`}></img>
           <img className=' w-[50px]  h-[50px] md:w-[100px] md:h-[100px] absolute right-4 bottom-4' src={`${process.env.PUBLIC_URL + '/Avatar-2.png'}`}></img>
           <span className='px-[15px] text-[.8125rem] cursor-pointer mb-16 text-purple-500 rounded-full py-[13px] font-semibold bg-slate-50 w-max mx-auto '>Get started now</span>
        </div>
        {/* </Slider> */}
      
      </div>
       
      
      {/* <img className=' rounded-[17px] w-[100%] object-center h-[500px] object-cover' src={`${process.env.PUBLIC_URL + '/Hire designers.png'}`}alt='kk'></img>      */} 

    </div>
  )
}
  {/* <img className=' rounded-[17px] w-[100%] object-center h-[500px] object-cover' src={`${process.env.PUBLIC_URL + '/Hire designers.png'}`}alt='kk'></img>
            <img className=' rounded-[17px] w-[100%] object-center h-[500px] object-cover' src={`${process.env.PUBLIC_URL + '/Hire designers.png'}`}alt='kk'></img>
            <img className=' rounded-[17px] w-[100%] object-center h-[500px] object-cover' src={`${process.env.PUBLIC_URL + '/Hire designers.png'}`}alt='kk'></img>      */}

export default HireDesigner
