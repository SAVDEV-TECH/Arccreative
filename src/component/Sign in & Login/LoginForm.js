import React from 'react'
import { Link } from 'react-router-dom'

function LoginForm() {
  return (
    <div className='w-[100%] flex  items-center justify-center md:justify-normal   h-screen '>
    <form className='w-[80%]   ml-0  md:w-[60%] py-5 px-3  items-center justify-center gap-7 flex flex-col md:ml-[100px] '>
      <h1  className='text-2xl   w-[70%] font-bold text-left text-[0d0c22] font-sans'>Sign in to Arcreative</h1>
      <Link className='w-[90%] sm:w-[70%] flex items-center justify-center gap-3  md:w-[426px] px-11 text-[14px] text-center border border-gray-400 text-black font-semibold py-[17px] rounded-full bg-white'>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" role="img" class="icon ">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.64 9.20419C17.64 8.56601 17.5827 7.95237 17.4764 7.36328H9V10.8446H13.8436C13.635 11.9696 13.0009 12.9228 12.0477 13.561V15.8192H14.9564C16.6582 14.2524 17.64 11.9451 17.64 9.20419Z" fill="#4285F4"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z" fill="#34A853"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z" fill="#FBBC05"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z" fill="#EA4335"></path>
</svg>
      <p>Sign in With  Google</p> 
       </Link>
      <div className='flex w-[85%] mx-auto items-center gap-4 justify-center'>
          <span className='w-[25%] h-[1px] block bg-gray-500'></span>
          <span className='text-[14px] font-semibold text-gray-400'>or Sign in with Email</span>
          <span className='w-[25%] h-[1px] block bg-gray-500'></span>
      </div>
      <div className='flex flex-col gap-5 '>
       <span className=' block  '>
        <h2 className='font-semibold'>Username or Email</h2>
        <input className='w-[350px] md:w-[425px] shadow bg-gray-300 hover:shadow-pink-500 outline-none rounded-md py-[15px] block border border-gray-400' type='text'></input>
       </span>
       <span className=' block  '>
       
        <span className='flex justify-between mb-1'> 
             <h2 className='font-semibold'>Password</h2>
             <Link to='/ResetPassword' className='font-semibold underline'>Forgot?</Link>
        </span>
        
        <input className='w-[350px] md:w-[425px] focus focus-within:shadow-pink-500 shadow hover:shadow-pink-500  outline-none rounded-md py-[17px] block  bg-gray-300  border border-gray-400' type='text'></input>
       </span>
      </div>
      <Link className='w-[90%] sm:w-[70%] md:w-[426px] px-11 text-[14px]  text-center font-semibold text-gray py-[15px] rounded-full bg-blue-950 border text-white border-gray-400'> Sign in</Link>

      <div>
          <p className='text-[14px] text-gray-500'> <Link to='/SignIn' className='underline'> Dont have an accoun?  Sign up</Link></p>
      </div>
    </form>
  </div>
  )
}

export default LoginForm
