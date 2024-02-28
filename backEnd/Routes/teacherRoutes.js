const express = require("express");
const newRoute = express.Router();
const teacherController = require("../Controllers/teacherController");

newRoute.route("/").post(teacherController.createTeacher);
newRoute.route("/create").post(teacherController.createStudent);
newRoute.route("/login").post(teacherController.handleLogin);
newRoute.route("/deleteT/:id").delete(teacherController.deleteTeacher);
newRoute.route("/deleteS/:id").delete(teacherController.deleteStudent);

module.exports = newRoute;
