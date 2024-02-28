import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentContext = createContext();

axios.defaults.withCredentials = true;

const StudentProvider = ({ children }) => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [studentInfo, setStudentInfo] = useState();

  const getStudents = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_FRONTEND}/student/`
      );
      setStudents(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogInStudent = async (student) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_FRONTEND}/student`,
        student
      );
      setStudentInfo(response.data);
      navigate("/student");
      console.log("hello world", response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogOut = async (student) => {
    try {
      await axios.post(`${import.meta.env.VITE_FRONTEND}/student/logout`);
      setStudentInfo();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const contextValues = {
    //v
    students,
    setStudents,
    studentInfo,
    setStudentInfo,
    //a
    handleLogInStudent,
    handleLogOut,
    getStudents,
  };

  return (
    <StudentContext.Provider value={contextValues}>
      {children}
    </StudentContext.Provider>
  );
};

export { StudentContext, StudentProvider };
