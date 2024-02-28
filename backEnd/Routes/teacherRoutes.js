const express = require("express");
const newRoute = express.Router();
const teacherController = require("../Controllers/teacherController");

newRoute.route("/create").post(teacherController.createTeacher);
newRoute.route("/login").post(teacherController.handleLogin);
newRoute.route("/logout").post(teacherController.handleLogOut);
newRoute.route("/deleteT/:id").delete(teacherController.deleteTeacher);
newRoute.route("/deleteS/:id").delete(teacherController.deleteStudent);
newRoute.route("/authenticate").get(teacherController.verifyToken);

module.exports = newRoute;
