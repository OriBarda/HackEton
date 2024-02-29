import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TeacherContext = createContext();

axios.defaults.withCredentials = true;

const TeacherProvider = ({ children }) => {
  const navigate = useNavigate();
  const [teacherInfo, setTeacherInfo] = useState();

  const handleLogInTeacher = async (teacher) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_FRONTEND}/teacher/login`,
        teacher
      );
      setTeacherInfo(response.data);
      console.log(response);
      navigate("/teacher/schedule")
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogOutTeacher = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_FRONTEND}/teacher/logout`);
      setTeacherInfo(null);
      navigate("/")
      console.log("logged out");
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateTeacher = async (teacher) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_FRONTEND}/teacher/create`,
        teacher
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteStudent = async (studentId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_FRONTEND}/teacher/deleteS/${studentId}`
      );
      navigate("/teacher/schedule")
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteTeacher = async (teacherId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_FRONTEND}/teacher/deleteT/${teacherId}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddStudentToTeacher = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_FRONTEND}/teacher/addStudent`, { studentIds: selectedStudents });
      alert('Students added successfully');
      getStudents();
    } catch (error) {
      console.log(error);
      alert('Failed to add students');
    }
  };

  const contextValues = {
    //v
    teacherInfo,
    setTeacherInfo,
    //a
    handleLogInTeacher,
    handleLogOutTeacher,
    handleCreateTeacher,
    handleDeleteTeacher,
    handleDeleteStudent,
    handleAddStudentToTeacher,
  };

  return (
    <TeacherContext.Provider value={contextValues}>
      {children}
    </TeacherContext.Provider>
  );
};

export { TeacherContext, TeacherProvider };
