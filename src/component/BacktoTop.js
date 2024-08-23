import React from 'react'
import { FaArrowAltCircleDown } from 'react-icons/fa'

function BacktoTop() {
    // const handleVisibleButton = () => {
    //     const position = window.pageYOffset;
    //     setSrollPosition(position);
    
    //     if (scrollPosition > 50) {
    //       return setshowGoTop("goTop");
    //     } else if (scrollPosition < 50) {
    //       return setshowGoTop("goTopHidden");
    //     }
    //   };
      // useEffect(() => {
      //   window.addEventListener("scroll", scrolling);
      // });
      const scrollToTop=()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
  return (
    <div onClick={scrollToTop}  className='animate-bounce text-[20px] text-white  rounded-full flex items-center justify-center bg-purple-500 z-40 cursor-pointer fixed bottom-48 right-10 w-[50px] h-[50px]'>
      <FaArrowAltCircleDown ></FaArrowAltCircleDown>
    </div>
  )
}

export default BacktoTop
