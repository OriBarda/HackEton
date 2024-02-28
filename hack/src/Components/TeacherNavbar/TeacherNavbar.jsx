import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TeacherContext } from '../../Context/TeacherContext';

const TeacherNavbar = () => {
  const {teacherInfo, handleLogOutTeacher} = useContext(TeacherContext);

  const handleClickLogout = async () => {
    await handleLogOutTeacher();
  }

  return (
    <div className='h-24 bg-gradient-to-b from-secondary border-solid border-2 p-4 rounded-xl flex-row space-x-72 flex items-center justify-center content-center'>
      <div className='flex flex-col space-y-10 items-center justify-center content-center'>
        <h1 className='text-5xl'>Hello {teacherInfo.username}</h1>
      </div>
      <div className='flex justify-center items-center content-center flex-col space-y-16'>
        <ul className='flex flex-row space-x-56'>
          <li>
            <Link to={"/teacher/schedule"} className='text-3xl hover:text-primary'>Schedule</Link>
          </li>
          <li>
            <Link to={"/teacher/profile"} className='text-3xl hover:text-primary'>Profile</Link>
          </li>
        </ul>
      </div>
      <div>
        <button 
        onClick={handleClickLogout}
        className='bg-primary hover:bg-accent text-background font-bold py-2 px-4 border border-secondary rounded-md shadow-md'
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default TeacherNavbar;
