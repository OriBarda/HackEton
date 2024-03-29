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
    const student = await Student.findById(decodedToken._id)
      .populate("lessons")
      .exec();
    req.student = student;
    const teacher = await Teacher.findById(decodedToken._id)
      .populate("students")
      .populate("lessons")
      .exec();
    req.teacher = teacher;
    console.log("req.teacher", req.student);
    next();
  } catch (e) {
    return res.status(401).json({
      status: "failed",
      message: "unauthorized"
    })
  }
};

exports.addStudent = async (req, res) => {
  try {
    const teacherId = req.body.teacher._id;
    const studentIds = req.body.studentIds;
    const teacher = await Teacher.findById(teacherId);
    if (!teacher) {
      return res.status(404).json({
        status: "failed",
        message: "Teacher not found"
      })
    }
    for (const studentId of studentIds) {
      const student = await Student.findById(studentId);
      if (student) {
        teacher.students.push(student)
      } else {
        return res.status(404).json({
          status: "failed",
          message: `student with ID ${studentId} not found`
        })
      }
    }
    await teacher.save();
    res.status(200).json({
      status: "Success",
      message: "students added successfully"
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error"
    })
  }
}