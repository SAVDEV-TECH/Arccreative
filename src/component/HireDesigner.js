import React from 'react'

function HireDesigner() {
  return (
    <div className=' w-[60%] mt-[100px]  mx-auto'>
      <div className=''>
        <div className=' relative text-center flex flex-col gap-10 px-5 bg-purple-600 py-9 rounded-[15px]'>
           <h2 className='font-bold text-[2rem] mt-[100px] text-white '>Hire Designers Today</h2>
           <p className='max-w-[65%] text-white mx-auto text-center'>
            Unlock the potential of your brand with a professional designers who can bring your version to life 
            with creativity and technical expert
           </p>
           <img className='w-[100px]  h-[100px] absolute right-4' src={`${process.env.PUBLIC_URL + '/Avatar-3.png'}`}></img>
           <img className='w-[100px]  h-[100px] absolute left-4' src={`${process.env.PUBLIC_URL + '/Avatar-3.png'}`}></img>
           <img className='w-[100px]  h-[100px] absolute bottom-4' src={`${process.env.PUBLIC_URL + '/Avatar-1.png'}`}></img>
           <img className='w-[100px]  h-[100px] absolute right-4 bottom-4' src={`${process.env.PUBLIC_URL + '/Avatar-2.png'}`}></img>
           <span className='px-[15px] text-[.8125rem] cursor-pointer mb-16 text-purple-500 rounded-full py-[13px] font-semibold bg-slate-50 w-max mx-auto '>Get started now</span>
        </div>
         
           
      </div>
      <span className='flex items-center mt-6 gap-1 justify-center mx-auto'>
      <p className='w-[30px] h-[5px] rounded-full bg-black'></p>
      <p className='w-[7px] h-[5px] rounded-full bg-black'></p>
      </span>
      {/* <img className=' rounded-[17px] w-[100%] object-center h-[500px] object-cover' src={`${process.env.PUBLIC_URL + '/Hire designers.png'}`}alt='kk'></img>      */} 

    </div>
  )
}
  {/* <img className=' rounded-[17px] w-[100%] object-center h-[500px] object-cover' src={`${process.env.PUBLIC_URL + '/Hire designers.png'}`}alt='kk'></img>
            <img className=' rounded-[17px] w-[100%] object-center h-[500px] object-cover' src={`${process.env.PUBLIC_URL + '/Hire designers.png'}`}alt='kk'></img>
            <img className=' rounded-[17px] w-[100%] object-center h-[500px] object-cover' src={`${process.env.PUBLIC_URL + '/Hire designers.png'}`}alt='kk'></img>      */}

export default HireDesigner
