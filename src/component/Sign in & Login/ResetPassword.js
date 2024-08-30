import React from 'react'
import { Link } from 'react-router-dom'


function ResetPassword() {
  return (
    <div className='w-full h-screen flex   items-center justify-center md:justify-normal' >
    <div className='w-[30%] hidden  md:flex h-screen'style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/image.jfif'})`}}></div>
    <form className='w-[80%]  px-5  ml-0  md:w-[40%] py-5    justify-center gap-7 flex flex-col md:ml-[100px] '>
      <h1  className='text-2xl    w-[70%] font-bold  text-[0d0c22] font-sans'>Forgot Password</h1>
       
       <p className=' pr-10 text-[14px] text-gray-400 font-semibold'>Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
        <p className=' pr-10 text-[14px] text-gray-400 font-semibold'>For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.</p>
      <div className='flex flex-col gap-5 '>
       <span className=' block  '>
        <h2 className='font-semibold'> Email Address</h2>
        <input className='w-[350px] md:w-[425px] shadow bg-gray-300 hover:shadow-pink-500 outline-none rounded-md py-[15px] block border border-gray-400' type='text'></input>
       </span>
      
      </div>
      <a href='/' className='w-max   px-8 text-[14px]  text-center font-semibold text-gray py-[9px] rounded-full bg-black border text-white border-gray-400'> Send reset instructions</a>

       
    </form>
  </div>
  )
}

export default ResetPassword
