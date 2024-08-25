
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
   
       <div className="w-full     overflow-hidden    mx-auto h-[500px] mt-16    ">
         <div className="relative w-[400%]  h-[500px]  gap-2  transition-transform ease-in-out  flex" style={{transform:`translateX(-${slider * 25}%)`}}>
          <div className="w-full h-[500px]  flex flex-col items-center justify-center bg-blue-400 ">
             
            <h1 className="text-center text-[2.5rem] text-white mt-8 mb-8">Hire Designers Today</h1>
            <p   className=" text-center text-[1rem] text-white max-w-screen-sm mx-auto"  >Unlock the potential of your brand with a professional designers who can bring your version to life with creativity and technical expert

              </p>
              <div className=" mx-auto w-[150px]  text-center rounded-full mt-10 text-white py-2 bg-purple-500">Get started</div>
              
            </div>
            <div className="w-full   flex flex-col items-center justify-center h-[500px] bg-blue-400 ">
             
            <h1 className="text-center text-[2.5rem] mt-8 mb-8 text-white ">Hire Designers Today</h1>
            <p   className=" text-center text-[1rem] text-white max-w-screen-sm mx-auto"  >Unlock the potential of your brand with a professional designers who can bring your version to life with creativity and technical expert

              </p>
              <div className=" mx-auto w-[150px]  text-center rounded-full mt-10 text-white py-2 bg-purple-500">Get started</div>
               
            </div>
            <div className="w-full h-[500px]  flex flex-col items-center justify-center bg-blue-400 ">
            
            <h1 className="text-center text-[2.5rem] text-white mt-8 mb-8">Hire Designers Today</h1>
            <p   className=" text-center text-[1rem] text-white max-w-screen-sm mx-auto"  >Unlock the potential of your brand with a professional designers who can bring your version to life with creativity and technical expert

              </p>
              <div className=" mx-auto w-[150px]  text-center rounded-full mt-10 text-white py-2 bg-purple-500">Get started</div>
             
            </div>
            <div className="w-full h-[500px] flex flex-col items-center justify-center bg-blue-400 ">
             
            <h1 className="text-center text-[2.5rem] mt-8 text-white mb-8">Hire Designers Today</h1>
            <p   className=" text-center text-[1rem] max-w-screen-sm mx-auto"  >Unlock the potential of your brand with a professional designers who can bring your version to life with creativity and technical expert

              </p>
              <div className=" mx-auto w-[150px]  text-center rounded-full mt-14 text-white py-2 bg-purple-500">Get started</div>
             
            </div>
         </div>
       </div>
      
     
    
  )
}
 
export default HireDesigner
