import React, { useContext } from 'react'
import TeacherStudents from '../../Components/TeacherStudents/TeacherStudents'
import TeacherLessons from '../../Components/TeacherLessons/TeacherLessons'
import { TeacherContext } from '../../Context/TeacherContext'

const TeacherProfile = () => {
  const { teacherInfo, handleDeleteTeacher } = useContext(TeacherContext);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      handleDeleteTeacher(teacherInfo._id)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex flex-col justify-center items-center content-center space-y-32 pt-10'>
      <div className='bg-gradient-to-t from-secondary to-primary  flex flex-row justify-center items-center content-center  space-x-12 rounded-xl p-8 text-2xl text-white'>
        <div>
          <span>username: {teacherInfo.username}</span>
        </div>
        <div>
          <span>email: {teacherInfo.email}</span>
        </div>
        <div>
          <button
            onClick={handleDelete}
            className='bg-red-600 hover:bg-red-500 text-background font-bold py-2 px-4 border border-secondary rounded-md shadow-md'
          >
            delete account
          </button>
        </div>
      </div>
      <div className='p-6 w-3/4 h-3/4 mx-auto border-double border-4 bg-background rounded-xl shadow-lg flex items-center content-center justify-center space-x-6'>
        <div className='w-1/2 h-full'>
          <TeacherStudents />
        </div>
        <div className='w-1/2 h-full'>
          <TeacherLessons />
        </div>
      </div>
    </div>
  )
}

export default TeacherProfile