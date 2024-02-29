import React, { useState } from 'react';

const LessonCreateModal = () => {
    const [showModal, setShowModal] = useState(false);

    const [lesson, setLesson] = useState({
        teacher: "",
        subject: "",
        day: 0,
        hour: 0,
        place: "",
        students: [],
        teacherId: "",
    })

    return (
        <div>
            <button
                className='bg-primary hover:bg-accent text-background font-bold py-2 px-4 border border-secondary rounded-md shadow-md'
                type="button"
                onClick={() => setShowModal(true)}
            >
                Add new lesson
            </button>
            {showModal ? (
                <>
                    <div className="fixed inset-0 overflow-y-auto flex justify-center items-center z-50">
                        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity" onClick={() => setShowModal(false)}></div>
                        <div className="bg-background rounded-lg overflow-hidden shadow-xl w-full max-w-md z-50">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">New Lesson</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Teacher</label>
                                        <input type="text" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Subject</label>
                                        <input type="text" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Day</label>
                                        <input type="number" min={1} max={5} className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Hour</label>
                                        <input type="number" min={1} max={7} className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Place</label>
                                        <input type="text" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                        <input type="text" id="city" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                        <input type="text" id="city" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
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
                                    onClick={() => setShowModal(false)}
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

export default LessonCreateModal;
