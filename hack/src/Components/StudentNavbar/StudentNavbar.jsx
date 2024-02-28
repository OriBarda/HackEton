import React, { useContext } from "react";
import { StudentContext } from "../../Context/StudentContext";

const StudentNavbar = () => {
  const { studentInfo, handleLogOutStudent } = useContext(StudentContext);

  const handleClickLogout = async () => {
    await handleLogOutStudent();
  };

  return (
    <div className="h-16 bg-gray-900 text-white flex items-center justify-between p-4 fixed w-screen px-8">
      <div className="flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-indigo-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <div>
          <h1 className="text-2xl font-bold">{studentInfo.username}</h1>
          <p className="text-sm text-gray-400">
            Student ID: {studentInfo.studentId}
          </p>
        </div>
      </div>
      <div>
        <button
          onClick={handleClickLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default StudentNavbar;
