import React from 'react'
import {Outlet} from 'react-router-dom'
import TeacherNavbar from '../../Components/TeacherNavbar/TeacherNavbar'

const TeacherLayout = () => {
  return (
    <div>
        <TeacherNavbar/>
        <Outlet/>
    </div>
  )
}

export default TeacherLayout