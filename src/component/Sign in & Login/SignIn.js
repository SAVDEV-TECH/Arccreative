import React from 'react'
import Form from './Form'


function SignIn() {
  return (
    <div className='w-full h-screen flex ' >
      <div className='w-[30%] hidden  md:flex h-screen'style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/image.jfif'})`}}></div>
      <Form></Form>
    </div>
  )
}

export default SignIn
