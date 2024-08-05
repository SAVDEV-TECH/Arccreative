import React from 'react'

function HireDesigner() {
  return (
    <div className=' mt-20 w-[70%]  mb-7 overflow-hidden mx-auto'>
      <div className=' relative flex  mb-5 w-[300%] items-center'>
        
            <img className=' rounded-[17px] w-[100%] object-center h-[500px] object-cover' src={`${process.env.PUBLIC_URL + '/Hire designers.png'}`}alt='kk'></img>
            <img className=' rounded-[17px] w-[100%] object-center h-[500px] object-cover' src={`${process.env.PUBLIC_URL + '/Hire designers.png'}`}alt='kk'></img>
            <img className=' rounded-[17px] w-[100%] object-center h-[500px] object-cover' src={`${process.env.PUBLIC_URL + '/Hire designers.png'}`}alt='kk'></img>    
      </div>
      <span className='flex items-center gap-1 justify-center mx-auto'>
      <p className='w-[30px] h-[5px] rounded-full bg-black'></p>
      <p className='w-[7px] h-[5px] rounded-full bg-black'></p>
      </span>
      
    </div>
  )
}

export default HireDesigner
