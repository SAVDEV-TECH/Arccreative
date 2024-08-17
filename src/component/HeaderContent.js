 import React from 'react'
 
 function HeaderContent() {
   return (
    <div className='flex flex-col justify-center mt-[150px]  md:mt-24   w-full relative  z-[1]  '>
    <div className='text-center flex flex-col content-center '>
     <h3 className='mx-auto mb-5'>
     <svg className='fill-white' width="250px" height="54px" viewBox="0 0 98 24"  xmlns="http://www.w3.org/2000/svg">
<path d="M27.5181 17.4782C27.3808 17.072 26.9997 16.7985 26.5708 16.7985H24.6677C24.2388 16.7985 23.8577 17.072 23.7204 17.4782L23.6449 17.7016C23.5075 18.1079 23.1264 18.3813 22.6975 18.3813H22.5588C21.8657 18.3813 21.3828 17.6935 21.6182 17.0417L24.1322 10.0808C24.2753 9.68457 24.6514 9.42051 25.0727 9.42051H26.1913C26.6126 9.42051 26.9887 9.68457 27.1318 10.0808L29.6458 17.0417C29.8812 17.6935 29.3983 18.3813 28.7052 18.3813H28.541C28.1121 18.3813 27.731 18.1079 27.5937 17.7016L27.5181 17.4782ZM25.6236 15.1136C26.1658 15.1136 26.5478 14.5812 26.3743 14.0675C26.1311 13.3479 25.1127 13.3497 24.872 14.0702C24.7006 14.5833 25.0825 15.1136 25.6236 15.1136Z" fill="#ffff"/>
<path d="M36.2672 18.3813C35.9024 18.3813 35.5667 18.1828 35.3909 17.8632L33.9092 15.1688C33.8515 15.0639 33.7413 14.9987 33.6215 14.9987C33.4402 14.9987 33.2933 15.1457 33.2933 15.327V17.3813C33.2933 17.9336 32.8456 18.3813 32.2933 18.3813H32.1145C31.5623 18.3813 31.1145 17.9336 31.1145 17.3813V10.4205C31.1145 9.86823 31.5623 9.42051 32.1145 9.42051H34.7712C35.4762 9.42051 36.0751 9.5439 36.5677 9.79069C37.0689 10.0375 37.4426 10.3779 37.6889 10.8119C37.9353 11.2374 38.0584 11.7139 38.0584 12.2415C38.0584 12.8372 37.8885 13.3691 37.5488 13.8371C37.4433 13.9861 37.3215 14.1213 37.1833 14.2427C36.6973 14.6697 36.3836 15.3706 36.7089 15.9297L37.2608 16.8785C37.6485 17.5452 37.1676 18.3813 36.3964 18.3813H36.2672ZM33.2933 12.4542C33.2933 13.0064 33.741 13.4542 34.2933 13.4542H34.6438C35.043 13.4542 35.3403 13.3563 35.5357 13.1606C35.7395 12.9648 35.8415 12.6883 35.8415 12.3309C35.8415 11.9905 35.7395 11.7224 35.5357 11.5267C35.3403 11.331 35.043 11.2331 34.6438 11.2331H34.2933C33.741 11.2331 33.2933 11.6808 33.2933 12.2331V12.4542Z" fill="#ffff"/>
<path d="M39.0566 13.8882C39.0566 13.0031 39.2477 12.216 39.63 11.5267C40.0122 10.8289 40.5431 10.2885 41.2226 9.90557C41.9106 9.51412 42.6878 9.31839 43.5542 9.31839C44.616 9.31839 45.5248 9.59922 46.2808 10.1609C46.6947 10.4684 47.0335 10.8371 47.2972 11.2671C47.6399 11.8259 47.1559 12.4585 46.5004 12.4585H46.0329C45.6473 12.4585 45.3142 12.2185 45.0515 11.9362C44.9301 11.8057 44.792 11.6947 44.6372 11.6033C44.3144 11.4076 43.9449 11.3097 43.5287 11.3097C42.8577 11.3097 42.3141 11.5437 41.8979 12.0117C41.4817 12.4798 41.2736 13.1053 41.2736 13.8882C41.2736 14.6711 41.4817 15.2965 41.8979 15.7646C42.3141 16.2326 42.8577 16.4666 43.5287 16.4666C43.9449 16.4666 44.3144 16.3688 44.6372 16.173C44.792 16.0816 44.9301 15.9706 45.0515 15.8401C45.3142 15.5578 45.6473 15.3178 46.0329 15.3178H46.5004C47.1559 15.3178 47.6399 15.9504 47.2972 16.5092C47.0335 16.9392 46.6947 17.3079 46.2808 17.6155C45.5248 18.1686 44.616 18.4452 43.5542 18.4452C42.6878 18.4452 41.9106 18.2537 41.2226 17.8707C40.5431 17.4793 40.0122 16.9389 39.63 16.2496C39.2477 15.5603 39.0566 14.7732 39.0566 13.8882Z" fill="#fff"/>
<path d="M55.0675 18.4707C54.4134 18.4707 53.8273 18.3643 53.3092 18.1516C52.7911 17.9388 52.3748 17.624 52.0606 17.207C51.9464 17.0513 51.8524 16.8837 51.7784 16.7043C51.5638 16.1832 52.0421 15.7007 52.6058 15.7007H53.0362C53.5242 15.7007 53.8792 16.1373 54.2393 16.4666C54.4347 16.6368 54.6895 16.7219 55.0038 16.7219C55.3265 16.7219 55.5813 16.6496 55.7682 16.5049C55.9551 16.3517 56.0485 16.1433 56.0485 15.8794C56.0485 15.6582 55.9721 15.4752 55.8192 15.3306C55.6748 15.1859 55.4922 15.0668 55.2713 14.9732C55.059 14.8795 54.7532 14.7732 54.354 14.654C53.7764 14.4753 53.3049 14.2966 52.9397 14.1179C52.5745 13.9392 52.2602 13.6754 51.9969 13.3265C51.7335 12.9776 51.6019 12.5223 51.6019 11.9607C51.6019 11.1267 51.9034 10.4757 52.5065 10.0077C53.1096 9.53114 53.8953 9.29286 54.8636 9.29286C55.8489 9.29286 56.6431 9.53114 57.2462 10.0077C57.5786 10.2657 57.8259 10.5805 57.9879 10.9523C58.2166 11.4766 57.7349 11.9735 57.1628 11.9735H56.628C56.1953 11.9735 55.8722 11.5728 55.5389 11.2969C55.3435 11.1267 55.0929 11.0416 54.7872 11.0416C54.5238 11.0416 54.3115 11.114 54.1501 11.2586C53.9887 11.3948 53.908 11.5948 53.908 11.8586C53.908 12.1479 54.0439 12.3734 54.3157 12.5351C54.5875 12.6968 55.0122 12.8712 55.5898 13.0585C56.1674 13.2542 56.6346 13.4414 56.9914 13.6201C57.3566 13.7988 57.6709 14.0584 57.9342 14.3987C58.1975 14.7391 58.3292 15.1774 58.3292 15.7135C58.3292 16.2241 58.1975 16.6879 57.9342 17.1049C57.6794 17.5218 57.3056 17.8537 56.813 18.1005C56.3203 18.3473 55.7385 18.4707 55.0675 18.4707Z" fill="#fff"/>
<path d="M65.2298 9.42051C65.7128 9.42051 66.1042 9.81199 66.1042 10.2949C66.1042 10.7778 65.7128 11.1693 65.2298 11.1693H64.7344C64.1821 11.1693 63.7344 11.617 63.7344 12.1693V17.3813C63.7344 17.9336 63.2867 18.3813 62.7344 18.3813H62.5557C62.0034 18.3813 61.5557 17.9336 61.5557 17.3813V12.1693C61.5557 11.617 61.1079 11.1693 60.5557 11.1693H60.0602C59.5773 11.1693 59.1858 10.7778 59.1858 10.2949C59.1858 9.81199 59.5773 9.42051 60.0602 9.42051H65.2298Z" fill="#fff"/>
<path d="M68.3382 9.42051C68.8904 9.42051 69.3382 9.86823 69.3382 10.4205V14.7817C69.3382 15.3178 69.4698 15.7305 69.7331 16.0199C69.9964 16.3092 70.3829 16.4539 70.8926 16.4539C71.4022 16.4539 71.7929 16.3092 72.0648 16.0199C72.3366 15.7305 72.4725 15.3178 72.4725 14.7817V10.4205C72.4725 9.86823 72.9202 9.42051 73.4725 9.42051H73.6512C74.2035 9.42051 74.6512 9.86823 74.6512 10.4205V14.7689C74.6512 15.5688 74.4813 16.2454 74.1415 16.7985C73.8018 17.3516 73.3431 17.7686 72.7655 18.0495C72.1964 18.3303 71.5594 18.4707 70.8543 18.4707C70.1493 18.4707 69.5165 18.3345 68.9559 18.0622C68.4038 17.7814 67.9664 17.3644 67.6436 16.8113C67.3208 16.2496 67.1594 15.5688 67.1594 14.7689V10.4205C67.1594 9.86822 67.6072 9.42051 68.1594 9.42051H68.3382Z" fill="#ffff"/>
<path d="M79.532 9.42051C80.4749 9.42051 81.2988 9.60773 82.0038 9.98216C82.7088 10.3566 83.2524 10.8842 83.6346 11.565C84.0254 12.2373 84.2207 13.0159 84.2207 13.9009C84.2207 14.7774 84.0254 15.5561 83.6346 16.2369C83.2524 16.9176 82.7045 17.4453 81.991 17.8197C81.286 18.1941 80.4664 18.3813 79.532 18.3813H77.1811C76.6288 18.3813 76.1811 17.9336 76.1811 17.3813V10.4205C76.1811 9.86823 76.6288 9.42051 77.1811 9.42051H79.532ZM79.3919 16.4922C80.2158 16.4922 80.8571 16.2666 81.3158 15.8156C81.7744 15.3646 82.0038 14.7264 82.0038 13.9009C82.0038 13.0755 81.7744 12.433 81.3158 11.9735C80.8571 11.5139 80.2158 11.2842 79.3919 11.2842H79.3598C78.8076 11.2842 78.3598 11.7319 78.3598 12.2842V15.4922C78.3598 16.0444 78.8076 16.4922 79.3598 16.4922H79.3919Z" fill="#ffff"/>
<path d="M86.617 9.42051C87.1693 9.42051 87.617 9.86823 87.617 10.4205V17.3813C87.617 17.9336 87.1693 18.3813 86.617 18.3813H86.4383C85.886 18.3813 85.4383 17.9336 85.4383 17.3813V10.4205C85.4383 9.86823 85.886 9.42051 86.4383 9.42051H86.617Z" fill="#ffff"/>
<path d="M93.426 18.4707C92.585 18.4707 91.8121 18.275 91.1071 17.8835C90.4106 17.4921 89.8542 16.9474 89.438 16.2496C89.0303 15.5433 88.8264 14.7519 88.8264 13.8754C88.8264 12.9989 89.0303 12.2117 89.438 11.5139C89.8542 10.8161 90.4106 10.2715 91.1071 9.88004C91.8121 9.48859 92.585 9.29286 93.426 9.29286C94.2669 9.29286 95.0356 9.48859 95.7321 9.88004C96.4371 10.2715 96.9892 10.8161 97.3884 11.5139C97.7962 12.2117 98 12.9989 98 13.8754C98 14.7519 97.7962 15.5433 97.3884 16.2496C96.9807 16.9474 96.4286 17.4921 95.7321 17.8835C95.0356 18.275 94.2669 18.4707 93.426 18.4707ZM93.426 16.4794C94.1395 16.4794 94.7086 16.2411 95.1333 15.7646C95.5665 15.288 95.7831 14.6583 95.7831 13.8754C95.7831 13.084 95.5665 12.4543 95.1333 11.9862C94.7086 11.5097 94.1395 11.2714 93.426 11.2714C92.704 11.2714 92.1264 11.5054 91.6932 11.9735C91.2685 12.4415 91.0561 13.0755 91.0561 13.8754C91.0561 14.6668 91.2685 15.3008 91.6932 15.7773C92.1264 16.2454 92.704 16.4794 93.426 16.4794Z" fill="#ffff"/>
<path d="M11.0506 22.7697C11.2235 23.9305 9.6009 24.3884 9.14138 23.3085L6.41268 16.8959C6.13202 16.2363 6.61604 15.5044 7.33284 15.5044H10.9869C11.7067 15.5044 12.1907 14.7668 11.9043 14.1064L9.96872 9.64387C9.62776 8.85779 8.5207 8.83654 8.14983 9.60895L4.09079 18.0626C3.92434 18.4093 3.57386 18.6298 3.18932 18.6298H1.58289C0.848109 18.6298 0.364241 17.8639 0.679811 17.2003L8.14679 1.4991C8.51646 0.721781 9.63018 0.743624 9.96909 1.53484L16.6945 17.236C16.9771 17.8959 16.4931 18.6298 15.7752 18.6298H11.5942C10.9833 18.6298 10.5151 19.1728 10.6051 19.777L11.0506 22.7697Z" fill="#fff"/>
</svg>
      </h3>
      <h3 className='text-[2rem] cabinet-font  font-semibold text-white px-10'>Create great designs, faster</h3>
      <h3 className='text-center px-20 cabinet-font  text-white font-[400] text-[0.9235rem]  mt-4  md:text-[1.0625rem]'>High-quality photos, videos, vectors, PSD, AI images, icons... to go from ideas to outstanding designs</h3>
    </div>

    {/* search part */}

    <span className=' w-[90%]  inline-flex  m-auto mt-9 items-center justify-center md:w-[70%] h-[50px] bg-white   '>
     <button className='inline-flex items-center justify-center gap-[20px] px-[12px] h-[100%] bg-white'>
     <svg
      xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"
       width="16" height="16" aria-hidden="true"><path d="M437.838
        214.25h-200c-13.807 0-25 11.193-25 25v59.933L142.151 176.75a25 25
         0 0 0-43.3 0l-144.339 250a25 25 0 0 0 21.651 37.5h121.15a135 135 0 0 0-3.475 30.5c0 74.439 60.561 135 135 135s135-60.561 135-135c0-10.486-1.202-20.696-3.475-30.5h77.475c13.807 0 25-11.193 25-25v-200c0-13.807-11.193-25-25-25m-418.374 200 101.037-175 72.383 125.369c-29.306 8.107-54.642 25.865-72.352 49.631zm209.374 165.5c-46.869 0-85-38.131-85-85s38.131-85 85-85 85 38.131 85 85-38.131 85-85 85m184-165.5h-75.693c-18.103-24.293-44.173-42.314-74.307-50.161V264.25h150z"></path>
     </svg>
     <p className='hidden md:flex'>Assets</p>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" aria-hidden="true" ><path d="M363.9 204c-3.9-9.3-13-15.4-23.1-15.4H171.1c-10.1 0-19.2 6.1-23.1 15.4s-1.7 20.1 5.4 27.2l84.9 84.9c4.9 4.9 11.3 7.3 17.7 7.3s12.8-2.4 17.7-7.3l84.9-84.9c7.1-7.1 9.2-17.9 5.3-27.2"></path></svg>
     </button>
     <input className='h-[100%] outline-none w-[90%] md:w-[70%] pl-6' type='text' placeholder='Search all Asset'></input>

   {/* search buuton */}
     <span className='inline-flex items-center  h-[100%]  px-[12px] gap-4 bg-white'>
     <span className='hidden md:inline-flex items-center justify-center w-[40px] rounded-md   h-[40px] border border-grey-700'>
     <svg className='  border border-blue-50  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" aria-hidden="true" ><path d="M150.9 301.8c83.3 0 150.9-67.6 150.9-150.9S234.2 0 150.9 0 0 67.6 0 150.9s67.6 150.9 150.9 150.9m19.4-178.9V227c0 11-8.9 19.9-19.9 19.9s-19.9-8.9-19.9-19.9V122.9L97 156.4c-7.8 7.8-20.3 7.8-28.1 0s-7.8-20.4 0-28.2l67.5-67.6c3.7-3.7 8.8-5.8 14.1-5.8s10.3 2.1 14.1 5.8l67.5 67.6c7.8 7.8 7.8 20.4 0 28.2s-20.4 7.8-28.1 0zm-20.2 213.5V446c0 36.3 29.6 65.9 65.9 65.9h230.1c36.3 0 65.9-29.6 65.9-65.9V215.8c0-36.3-29.5-65.9-65.9-65.9H337.4c0 17.6-2.4 34.6-7 50.7h115.7c8.4 0 15.2 6.8 15.2 15.2V414l-18.7-19c-4.8-4.9-11.4-7.6-18.1-7.6-6.8 0-13.4 2.8-18 7.7l-34.4 35.5-87.5-88c-9.8-9.9-25.9-9.9-35.8-.1L200.9 390v-60.5c-15.9 4.4-32.7 6.8-50 6.8-.3.1-.5.1-.8.1m226.3-86.9c-20.4 0-37
      16.5-37 37s16.6 37 37 37 37-16.6 37-37c.1-20.3-16.6-37-37-37"></path>
      </svg>
     </span>
     
      <button className='inline-flex items-center   bg-purple-600 h-[40px] px-[10px] md:w-[100px] rounded-md '>
      <svg  style={{display:'inline-block'}}   xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" fill='white' width="12" height="12" aria-hidden="true" ><path d="M448.178 602.822 316.426 471.071c26.355-33.88 42.074-76.422 42.074-122.571 0-110.28-89.72-200-200-200s-200 89.72-200 200 89.72 200 200 200c46.149 0 88.691-15.719 122.571-42.074l131.751 131.751c4.882 4.882 11.28 7.323 17.678 7.323s12.796-2.441 17.678-7.322c9.762-9.763 9.762-25.593 0-35.356M8.5 348.5c0-82.71 67.29-150 
      150-150s150 67.29 150 150-67.29 150-150 150-150-67.29-150-150"></path> </svg>
      <p className='hidden ml-[10px] md:flex font-semibold text-[14px] text-white '>Search</p>
      </button>
     </span>
    </span>
    <span className='py-3 px-6 mx-auto mt-6  w-32 bg-purple-600 rounded-full  text-white text-[.8125rem] font-bold'> Get Started</span>
 </div>
   )
 }
 
 export default HeaderContent
 
