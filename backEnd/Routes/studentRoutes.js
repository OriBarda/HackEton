const express = require("express");
const newRoute = express.Router();
const studentController = require("../Controllers/studentController");

newRoute
  .route("/")
  .post(studentController.handleLogin)
  .get(studentController.getStudents);

module.exports = newRoute;
