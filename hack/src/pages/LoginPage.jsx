import React from 'react'
import LoginTeacher from '../Components/LoginTeacher'
import LoginStudent from '../Components/LoginStudent'

const LoginPage = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='p-6 w-3/4 h-3/4 mx-auto border-double border-4 bg-background rounded-xl shadow-lg flex items-center content-center justify-center space-x-6'>
        <div className='w-1/2 h-full'>
          <LoginTeacher />
        </div>
        <div className='w-1/2 h-full'>
          <LoginStudent />
        </div>
      </div>
    </div>
  )
}

export default LoginPage