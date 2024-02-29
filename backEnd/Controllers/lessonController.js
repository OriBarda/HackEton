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
    req.body.students.map(async (studentId) => {
      const student = await Student.findById(studentId);
      student.lessons.push(newLesson._id);
      console.log(student);
      await student.save();
    });
    teacher.lessons.push(newLesson);
    await teacher.save();
    res.json({ teacher, newLesson });
  } catch (err) {
    console.log(err);
  }
};

exports.editLesson = async (req, res) => {
  try {
    const lessonId = req.body._id;
    console.log(lessonId);
    const { teacher, subject, day, hour, place, students, teacherId } =
      req.body;
    const updatedLesson = {
      teacher,
      subject,
      day,
      hour,
      place,
      students,
      teacherId,
    };
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

    const students = await Promise.all(
      lessonToDelete.students.map(async (studentId) => {
        const student = await Student.findById(studentId);
        student.lessons = student.lessons.filter(
          (lesson) => lesson.toString() !== lessonId
        );
        return student.save();
      })
    );

    const teacher = await Teacher.findById(lessonToDelete.teacherId);
    teacher.lessons = teacher.lessons.filter(
      (lesson) => lesson.toString() !== lessonId
    );

    await Promise.all(students);
    await teacher.save();

    res.send("Lesson deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
