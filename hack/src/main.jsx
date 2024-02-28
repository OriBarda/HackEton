import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TeacherProvider } from "./Context/TeacherContext.jsx";
import { StudentProvider } from "./Context/StudentContext.jsx";
import { LessonProvider } from "./Context/LessonContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TeacherProvider>
      <StudentProvider>
        <LessonProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </LessonProvider>
      </StudentProvider>
    </TeacherProvider>
  </BrowserRouter>
);