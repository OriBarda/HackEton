const { decode } = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Student = require("../Models/studentModel");
const Teacher = require("../Models/teacherModel");
const Lesson = require("../Models/LessonModel");

exports.createLesson = async (req, res) => {
  try {
    const teacherId = req.body.teacherId;
    const teacher = await Teacher.findById(teacherId);
    const newLesson = await Lesson.create(req.body);
    teacher.lessons.push(newLesson);
    await teacher.save();
    res.json({ teacher, newLesson });
  } catch (err) {
    console.log(err);
  }
};

exports.editLesson = async (req, res) => {
  try {
    const lessonId = req.body.lessonId;
    const { subject, start, end, place, students, teacherId } = req.body;
    const updatedLesson = { subject, start, end, place, students, teacherId };
    const lesson = await Lesson.findByIdAndUpdate(
      { _id: lessonId },
      updatedLesson,
      { new: true }
    );
    res.json(lesson);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteLesson = async (req, res) => {
  try {
    const lessonId = req.body.lessonId;
    const lessonToDelete = await Lesson.findByIdAndDelete(lessonId);
    const teacher = await Teacher.findById(lessonToDelete.teacherId);
    teacher.lessons = teacher.lessons.filter(
      (lesson) => lesson.toString() !== lessonId
    );
    await teacher.save();
    res.send("Lesson deleted successfully");
  } catch (err) {
    console.log(err);
  }
};
