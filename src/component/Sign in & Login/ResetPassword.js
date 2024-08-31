import React from 'react'



function ResetPassword() {
  return (
    <div className='w-full h-screen flex   items-center justify-center md:justify-normal' >
    <div className='w-[30%] hidden  md:flex h-screen'style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/image.jfif'})`}}>
    <video className=' w-[100%] relative    h-[100vh] object-cover object-center   ' autoPlay playsInline loop muted src='https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949'></video>
    <h3 className='absolute z-10 top-8 text-[30px]  text-small-italicized font-medium text-white left-7  '>Accreative</h3>
    </div>
    <div className='w-[90%]  mx-auto md:w-[60%] md:justify-start flex justify-center items-center h-screen'> 
    <form className='w-[90%]  px-5  ml-0  md:w-[60%] py-5    justify-center gap-7 flex flex-col md:ml-[100px] '>
      <h1  className='text-2xl  mx-auto  w-[90%] font-bold  text-[0d0c22] font-sans'>Forgot Password</h1>
       
       <p className=' pr-10 text-[14px] w-[90%]  mx-auto text-gray-400 font-semibold'>Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
        <p className=' pr-10 text-[14px] w-[90%] mx-auto text-gray-400 font-semibold'>For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.</p>
      <div className='flex flex-col  w-[90%] mx-auto gap-5 '>
       <span className=' block   '>
        <h2 className='font-semibold'> Email Address</h2>
        <input className='w-[100%] md:w-[100%] shadow bg-gray-300 hover:shadow-pink-500 outline-none rounded-md py-[15px] block border border-gray-400' type='text'></input>
       </span>
      
      </div>
      <a href='/' className='w-[90%] mx-auto   px-8 text-[14px]  text-center font-semibold text-gray py-[9px] rounded-full bg-black border text-white border-gray-400'> Send reset instructions</a>

       
    </form>
    </div>
  </div>
  )
}

export default ResetPassword
