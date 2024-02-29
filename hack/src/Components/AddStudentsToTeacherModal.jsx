import React, { useState } from 'react';

const AddStudentsToTeacherModal = ({ allStudents, selectedStudents, handleStudentSelect, handleAddStudentToTeacher }) => {
    const [showModal, setShowModal] = useState(false);



    return (
        <div>
            <button
                className='bg-primary hover:bg-accent text-background font-bold py-2 px-4 border border-secondary rounded-md shadow-md'
                type="button"
                onClick={() => setShowModal(true)}
            >
                Add students
            </button>
            {showModal ? (
                <>
                    <div className="fixed inset-0 overflow-y-auto flex justify-center items-center z-50">
                        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity" onClick={() => setShowModal(false)}></div>
                        <div className="bg-background rounded-lg overflow-hidden shadow-xl w-full max-w-md z-50">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Add Students</h3>
                                <form className="space-y-4">
                                    {allStudents.map((student, index) => (
                                        <div key={index} className='flex items-center'>
                                            <input
                                                type="checkbox"
                                                id={`student-${student._id}`}
                                                checked={selectedStudents.includes(student._id)}
                                                onChange={() => handleStudentSelect(student._id)}
                                            />
                                            <label htmlFor={`student-${student._id}`}>{student.username}</label>
                                        </div>
                                    ))}
                                </form>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md mr-2"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md"
                                    onClick={() => handleAddStudentToTeacher(selectedStudents)}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default AddStudentsToTeacherModal;
