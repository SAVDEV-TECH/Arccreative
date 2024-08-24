import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa'


function BacktoTop() {
    const [backtop,setbacktop]=useState(false)
      const scrollToTop=()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

 useEffect(()=>{
  window.addEventListener('scroll',()=>{
    if(window.scrollY > 100){
      setbacktop(true)
    }
    else{
      setbacktop(false)
    }

  })
 },[])
  return (
    
     <div>
      {backtop && (
        <div onClick={scrollToTop}  className='animate-bounce text-[20px] text-white  rounded-full flex items-center justify-center bg-purple-500 z-40 cursor-pointer fixed bottom-48 right-10 w-[50px] h-[50px]'>
         <FaArrowAltCircleUp ></FaArrowAltCircleUp>
         </div>
      )}
      
      </div>
    
  )
}

export default BacktoTop
