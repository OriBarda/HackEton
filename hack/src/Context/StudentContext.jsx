import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentContext = createContext();

axios.defaults.withCredentials = true;

const StudentProvider = ({ children }) => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [studentInfo, setStudentInfo] = useState();

  useEffect(() => {
    console.log("Updated Student Info:", studentInfo);
  }, [studentInfo]);

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

  const handleCreateStudent = async (student) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_FRONTEND}/student/create`,
        student
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogInStudent = async (student) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_FRONTEND}/student/login`,
        student
      );

      console.log("Response Data:", response.data);

      setStudentInfo(response.data);
      console.log("Updated Student Info:", studentInfo);

      navigate("/student/schedule");
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const handleLogOut = async () => {
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
    handleCreateStudent,
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
