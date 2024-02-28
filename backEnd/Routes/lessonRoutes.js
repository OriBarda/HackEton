const express = require("express");
const newRoute = express.Router();
const lessonController = require("../Controllers/lessonController");

newRoute
  .route("/")
  .post(lessonController.createLesson)
  .delete(lessonController.deleteLesson);
newRoute.route("/update").patch(lessonController.editLesson);
module.exports = newRoute;
