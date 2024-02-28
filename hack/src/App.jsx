import React, { useContext, useEffect } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TeacherLayout from "./layouts/TeacherLayout/TeacherLayout";
import TeacherSchedule from "./pages/TeacherSchedule/TeacherSchedule";
import TeacherProfile from "./pages/TeacherProfile/TeacherProfile";
import StudentSchedule from "./pages/StudentSchedule/StudentSchedule";
import { Route, Routes } from "react-router-dom";
import StudentLayout from "./layouts/StudentLayout/StudentLayout";

function App() {
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
