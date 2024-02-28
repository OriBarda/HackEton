const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const studentRoutes = require("./Routes/studentRoutes");
const teacherRoutes = require("./Routes/teacherRoutes");
const lessonRoutes = require("./Routes/lessonRoutes");
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use("/teacher", teacherRoutes);
app.use("/student", studentRoutes);
app.use("/lesson", lessonRoutes);
module.exports = app;
