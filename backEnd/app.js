const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const studentRoutes = require("./Routes/studentRoutes");
const teacherRoutes = require("./Routes/teacherRoutes");
const lessonRoutes = require("./Routes/lessonRoutes");
const studentController = require("./Controllers/studentController");
const teacherController = require("./Controllers/teacherController");
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use("/student/login", studentController.handleLogin);
app.use("/teacher/login", teacherController.handleLogin);
app.use("/teacher/create", teacherController.createTeacher);
app.use("/student/create", studentController.createStudent);
app.use(teacherController.verifyToken);
app.use("/teacher", teacherRoutes);
app.use("/student", studentRoutes);
app.use("/lesson", lessonRoutes);
module.exports = app;
