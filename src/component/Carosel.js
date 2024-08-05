import React from 'react'

function Carosel() {
  return (
    <div className='w-full h-[400px] mt-11 overflow-hidden'>
      <div className='w-[1600px] mx-auto  h-[300px] flex items-center gap-5'>
         <div className='relative flex items-center justify-center w-[340px] h-[300px] '>
             <img  className='w-full h-full rounded-[20px]' src={`${process.env.PUBLIC_URL + '/Brand ID Mistakes 1.png'}`}  alt='yy'></img>
         </div>
         <div className='relative flex items-center overflow-hidden  gap-[10px] flex-col justify-between w-[400px] h-[300px] '>
         <img src={`${process.env.PUBLIC_URL + '/item.png'}`}></img>
         <img src={`${process.env.PUBLIC_URL + '/item.png'}`}></img>
             
         </div>
         <div className='relative flex items-center justify-center w-[400px] h-[300px] '>
         <img className='w-full h-full rounded-[20px]  ' src={`${process.env.PUBLIC_URL + '/Brand ID Mistakes 1.png'}`} alt=''></img>
             
         </div>
         <div className='relative flex items-center overflow-hidden gap-[10px] flex-col justify-between w-[400px] h-[300px] '>
         <img src={`${process.env.PUBLIC_URL + '/item.png'}`}></img>
         <img src={`${process.env.PUBLIC_URL + '/item.png'}`}></img>
             
         </div>
         <div className='relative flex items-center justify-center w-[400px] h-[300px] '>
         <img className='w-full h-full rounded-[20px]' src={`${process.env.PUBLIC_URL + '/Brand ID Mistakes 1.png'}`}></img>
             
         </div>
      </div>
    </div>
  )
}

export default Carosel
