 import React from 'react'
// import Form from './Form'
import LoginForm from './LoginForm'


 
 function Login() { 
   return (
     
       <div className='w-full h-screen flex ' >
      <div className='w-[30%] hidden  md:flex h-screen'style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/image.jfif'})`}}></div>
      <LoginForm></LoginForm>
     </div>
   )
 }
 
 export default Login
 
