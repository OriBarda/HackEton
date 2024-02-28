import React, { useContext, useEffect } from 'react'
import { StudentContext } from '../../Context/StudentContext'
import { TeacherContext } from '../../Context/TeacherContext'

const TeacherStudents = () => {
    const { students, getStudents } = useContext(StudentContext)
    const { handleDeleteStudent } = useContext(TeacherContext)

    useEffect(() => {
        getStudents()
    }, [])

    const handleDeleteStudentClick = async (studentId) => {
        try {
            handleDeleteStudent(studentId)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='h-1/4 space-y-4 bg-gradient-to-b from-secondary border-solid border-2 p-4 rounded-xl flex-col flex items-center justify-center content-center'>
            <div className='flex flex-col space-y-10 items-center justify-center content-center '>
                <h1 className='text-xl '>
                    Your Students
                </h1>
                <h1 className='text-md '>
                    Here is the list of your students:
                </h1>
            </div>
            <div className='flex justify-center items-center content-center flex-col space-y-16'>
                <div className='w-full'> {/* Ensure the parent container takes full width */}
                    <ol className='flex flex-col items-center'>
                        {students.map((student, index) => {
                            return (
                                <li key={index} className='rounded-lg bg-background p-4 my-2 flex justify-between w-full'> {/* Make each list item take full width */}
                                    <div className='flex-col w-1/4'> {/* Adjust the width as needed */}
                                        <div>
                                            username:{student.username}
                                        </div>
                                        <div>
                                            email:{student.email}
                                        </div>
                                    </div>
                                    <div className='flex-col w-1/4'> {/* Adjust the width as needed */}
                                        <button onClick={() => handleDeleteStudentClick(student._id)} className='bg-red-600 hover:bg-red-500 text-background font-bold py-1 px-2 border border-secondary rounded-md shadow-md'>
                                            Delete student
                                        </button>
                                    </div>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default TeacherStudents
