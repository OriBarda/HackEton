const { decode } = require("jsonwebtoken");
const Teacher = require("../Models/teacherModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const Student = require("../Models/studentModel");

exports.createTeacher = async (req, res) => {
  console.log(req.body);
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    console.log(hashedPassword);
    const { username, email } = req.body;
    const role = "teacher";
    const newTeacher = await Teacher.create({
      username,
      password: hashedPassword,
      email,
      role,
    });
    res.send(newTeacher);
  } catch (err) {
    res.status(404).json({ message: "didnt create user" });
    console.log(err);
  }
};

exports.createStudent = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    console.log(hashedPassword);
    const { username, email } = req.body;
    const role = "student";
    const newStudent = await Student.create({
      username,
      password: hashedPassword,
      email,
      role,
    });
    res.send(newStudent);
  } catch (err) {
    res.status(404).json({ message: "didnt create user" });
  }
};

exports.handleLogin = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    const teacher = await Teacher.findOne({ username })
      .populate("students")
      .populate("lessons")
      .exec();
    console.log(teacher);
    if (teacher && (await bcrypt.compare(password, teacher.password))) {
      console.log("oooo");
      const token = jwt.sign(
        {
          _id: teacher._id,
        },
        process.env.SECRET,
        { expiresIn: "1h" }
      );
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 380000,
        sameSite: "strict",
      });
      res.send({
        _id: teacher._id,
        username: teacher.username,
        email: teacher.email,
        role: teacher.role,
        password: teacher.password,
        token: token,
        students: teacher.students,
        lessons: teacher.lessons,
      });
      console.log("logged");
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.handleLogOut = (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      sameSite: "strict",
    });

    console.log("logged out");
    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.deleteTeacher = async (req, res) => {
  try {
    const deleteTeacher = await Teacher.findByIdAndDelete(req.params.id);

    if (!deleteTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    res.status(200).json({ message: "Teacher deleted successfully" });
  } catch (err) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const deleteStudent = await Student.findByIdAndDelete(req.params.id);

    if (!deleteStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (err) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    console.log(decodedToken);
    const teacher = await Teacher.findById(decodedToken._id)
      .populate("students")
      .populate("lessons")
      .exec();
    req.teacher = teacher;
    next();
  } catch (e) { }
};
