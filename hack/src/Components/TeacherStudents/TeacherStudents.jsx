import React, { useContext, useEffect } from 'react'
import { StudentContext } from '../../Context/StudentContext'

const TeacherStudents = () => {
    const { students, getStudents } = useContext(StudentContext)

    useEffect(() => {
        getStudents()
    }, [])

    console.log(students)
    return (
        <div>
            <div>
                <h2>Your students:</h2>
                <ol>
                    {students.map((student, index) => {
                        return (
                            <li key={index}>
                                {student.username}
                                {student.email}
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}

export default TeacherStudents