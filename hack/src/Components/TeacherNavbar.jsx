import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TeacherContext } from "../Context/TeacherContext";

const TeacherNavbar = () => {
  const { teacherInfo, handleLogOutTeacher } = useContext(TeacherContext);

  const handleClickLogout = async () => {
    await handleLogOutTeacher();
  };

  return (
    <div className="bg-gray-900 p-4 px-8 flex items-center justify-between shadow-lg">
      <div className="text-white">
        <h1 className="text-2xl font-bold">Welcome, {teacherInfo.username}!</h1>
        {/* Add more user details or navigation links if needed */}
        <div className="flex space-x-4">
          <Link
            to="/teacher/schedule"
            className="text-lg text-white hover:text-yellow-300"
          >
            Schedule
          </Link>
          <Link
            to="/teacher/profile"
            className="text-lg text-white hover:text-yellow-300"
          >
            Profile
          </Link>
        </div>
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

export default TeacherNavbar;
