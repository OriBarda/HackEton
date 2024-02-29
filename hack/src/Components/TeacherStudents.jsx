import React, { useContext, useEffect, useState } from 'react'
import { StudentContext } from '../Context/StudentContext'
import { TeacherContext } from '../Context/TeacherContext'
import AddStudentsToTeacherModal from './AddStudentsToTeacherModal'

const TeacherStudents = () => {
    const { students, getStudents } = useContext(StudentContext)
    const { teacherInfo, handleDeleteStudent, handleAddStudentToTeacher, } = useContext(TeacherContext)
    const [selectedStudents, setSelectedStudents] = useState([]);

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

    const handleStudentSelect = (studentId) => {
        if (!teacherInfo.students.some(student => student._id === studentId)) {
            setSelectedStudents(prevSelected => {
                if (prevSelected.includes(studentId)) {
                    return prevSelected.filter(id => id !== studentId);
                } else {
                    return [...prevSelected, studentId];
                }
            });
        }
    };



    const handleAddStudentToTeacherClick = async () => {
        try {
            await handleAddStudentToTeacher()
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
                <AddStudentsToTeacherModal
                    allStudents={students}
                    selectedStudents={selectedStudents}
                    handleStudentSelect={handleStudentSelect}
                    handleAddStudentToTeacher={handleAddStudentToTeacherClick}
                />
                <h1 className='text-md '>
                    Here is the list of your students:
                </h1>
            </div>
            <div className='flex justify-center items-center content-center flex-col space-y-16'>
                <div className='w-full'>
                    <ol className='flex flex-col items-center'>
                        {teacherInfo.students.map((student, index) => (
                            <li key={index} className='rounded-lg bg-background p-4 my-2 flex justify-between w-full'> {/* Make each list item take full width */}
                                <div className='flex-col w-1/4'>
                                    <div>
                                        username:{student.username}
                                    </div>
                                    <div>
                                        email:{student.email}
                                    </div>
                                </div>
                                <div className='flex-col w-1/4'>
                                    <button onClick={() => handleDeleteStudentClick(student._id)} className='bg-red-600 hover:bg-red-500 text-background font-bold py-1 px-2 border border-secondary rounded-md shadow-md'>
                                        Delete student
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default TeacherStudents
