import React from 'react'
import { Link } from 'react-router-dom'

const TeacherNavbar = () => {
  return (
    <div>
      <div>
        <h1>Hello {/* name of logged in username */}</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to={"/teacher/schedule"} >Teacher Schedule</Link>
          </li>
          <li>
            <Link to={"/teacher/profile"} >Teacher Profile</Link>
          </li>
        </ul>
      </div>
      <div>
        <button>
          Log out
        </button>
      </div>
    </div>
  )
}

export default TeacherNavbar