import React from 'react'
import Form from './Form'


function SignIn() {
  return (
    <div className='w-full h-screen flex ' >
      <div className='w-[30%] hidden  md:flex h-screen'style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/image.jfif'})`}}>
      <video className=' w-[100%] relative    h-[100vh] object-cover object-center   ' autoPlay playsInline loop muted src='https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949'></video>
      <h3 className='absolute z-10 top-8 text-[30px]  text-small-italicized font-medium text-white left-7  '>Accreative</h3>
      </div>
      <Form></Form>
    </div>
  )
}

export default SignIn
