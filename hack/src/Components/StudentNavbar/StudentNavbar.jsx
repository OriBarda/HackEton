import React from 'react';
import { Link } from 'react-router-dom';

const StudentNavbar = () => {
  return (
    <div className='h-24 space-x-96 bg-gradient-to-b from-secondary border-solid border-2 p-4 rounded-xl flex-row flex items-center justify-center content-center'>
      <div className='flex flex-col space-y-10 items-center justify-center content-center'>
        <h1 className='text-5xl'>Hello {/* name of logged in user */}</h1>
      </div>
      <div>
        <button className='bg-primary hover:bg-accent text-background font-bold py-2 px-4 border border-secondary rounded-md shadow-md'>
          Log out
        </button>
      </div>
    </div>
  );
};

export default StudentNavbar;
