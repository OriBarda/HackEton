const express = require("express");
const newRoute = express.Router();
const studentController = require("../Controllers/studentController");

newRoute.route("/").get(studentController.getStudents);
newRoute.route("/create").post(studentController.createStudent);
newRoute.route("/login").post(studentController.handleLogin);
newRoute.route("/logout").post(studentController.handleLogOut);
module.exports = newRoute;
