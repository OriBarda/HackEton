import React from 'react';
import Register from '../../Components/register/Register';

const RegisterPage = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='p-6 w-3/4 h-3/4 mx-auto border-double border-4 bg-background rounded-xl shadow-lg flex items-center content-center justify-center space-x-6'>
        <div className='w-full h-full'>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
