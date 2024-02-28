import React from 'react'
import { Outlet } from 'react-router-dom'
import StudentNavbar from '../Components/StudentNavbar'

const StudentLayout = () => {
  return (
    <div>
        <StudentNavbar/>
        <Outlet/>
    </div>
  )
}

export default StudentLayout