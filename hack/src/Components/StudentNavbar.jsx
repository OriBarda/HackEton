import React, { useContext } from "react";
import { StudentContext } from "../Context/StudentContext";

const StudentNavbar = () => {
  const { studentInfo, handleLogOutStudent } = useContext(StudentContext);

  const handleClickLogout = async () => {
    await handleLogOutStudent();
  };

  return (
    <div className="bg-gray-900 p-4 px-8 flex items-center justify-between shadow-lg">
      <div className="text-white">
        <h1 className="text-2xl font-bold">Welcome, {studentInfo.username}!</h1>
        {/* Add more user details or navigation links if needed */}
      </div>
      <button
        onClick={handleClickLogout}
        className="bg-rose-500 hover:bg-rose-400 text-white font-bold py-2 px-4 rounded-md transition-all ease-in-out"
      >
        Log out
      </button>
    </div>
  );
};

export default StudentNavbar;
