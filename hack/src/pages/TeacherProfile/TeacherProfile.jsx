import React from 'react'
import TeacherStudents from '../../Components/TeacherStudents/TeacherStudents'
import TeacherLessons from '../../Components/TeacherLessons/TeacherLessons'

const TeacherProfile = () => {
  return (
    <div>
      <TeacherStudents />
      <TeacherLessons />
    </div>
  )
}

export default TeacherProfile