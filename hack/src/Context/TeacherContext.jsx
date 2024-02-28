import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const TeacherContext = createContext();

axios.defaults.withCredentials = true;

const TeacherProvider = ({ children }) => {
  const navigate = useNavigate();
  const [teacherInfo, setTeacherInfo] = useState();

  const handleLogInTeacher = async (teacher) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_FRONTEND}/teacher/login`,
        teacher
      );
      setTeacherInfo(response.data);
      console.log(response);
      navigate("/teacher")
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogOut = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_FRONTEND}/teacher/logout`);
      setTeacherInfo();
      console.log("logged out");
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateTeacher = async (teacher) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_FRONTEND}/teacher`,
        teacher
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCreateStudent = async (student) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_FRONTEND}/teacher/create`,
        student
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteStudent = async (studentId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_FRONTEND}/teacher/deleteS/${studentId}`
      );
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

  const contextValues = {
    //v
    teacherInfo,
    setTeacherInfo,
    //a
    handleLogInTeacher,
    handleLogOut,
    handleCreateTeacher,
    handleCreateStudent,
    handleDeleteTeacher,
    handleDeleteStudent,
  };

  return (
    <TeacherContext.Provider value={contextValues}>
      {children}
    </TeacherContext.Provider>
  );
};

export { TeacherContext, TeacherProvider };
