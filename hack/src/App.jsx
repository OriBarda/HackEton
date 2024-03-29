import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./Components/Register";
import TeacherLayout from "./layouts/TeacherLayout";
import TeacherSchedule from "./pages/TeacherSchedule";
import TeacherProfile from "./pages/TeacherProfile";
import StudentSchedule from "./pages/StudentSchedule";
import StudentLayout from "./layouts/StudentLayout";
import { TeacherContext } from "./Context/TeacherContext";
import axios from "axios";
import { StudentContext } from "./Context/StudentContext";

function App() {
  const { setTeacherInfo, teacherInfo } = useContext(TeacherContext);
  const { setStudentInfo, studentInfo } = useContext(StudentContext);

  useEffect(
    () => {
      axios
        .get(`${import.meta.env.VITE_FRONTEND}/teacher/authenticate`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log("this is res.data", res.data);
          setStudentInfo(res.data);
          setTeacherInfo(res.data);
        });
    },
    [],
    [teacherInfo, studentInfo]
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route path="schedule" element={<TeacherSchedule />}></Route>
          <Route path="profile" element={<TeacherProfile />}></Route>
        </Route>
        <Route path="/student" element={<StudentLayout />}>
          <Route path="schedule" element={<StudentSchedule />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
