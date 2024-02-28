const { decode } = require("jsonwebtoken");
const Teacher = require("../Models/teacherModel");
const Stuedent = require("../Models/studentModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const Student = require("../Models/studentModel");

exports.createTeacher = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    console.log(hashedPassword);
    const { username, email, role } = req.body;
    const newTeacher = await Teacher.create({
      username,
      password: hashedPassword,
      email,
      role,
    });
    res.send(newTeacher);
  } catch (err) {
    res.status(404).json({ message: "didnt create user" });
  }
};
exports.createStudent = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    console.log(hashedPassword);
    const { username, email, role } = req.body;
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
    console.log("logged");
    console.log(req.body);
    const { username, password } = req.body;
    const teacher = await Teacher.findOne({ username })
      .populate("students")
      .populate("leassons")
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
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    return res.status(500).send({ message: "Internal Server Error" });
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

exports.editUser = async (req, res) => {
  const { username, password, email, birthday } = req.body;
  console.log(username);
  try {
    const hashedPassword = password
      ? await bcrypt.hash(password, saltRounds)
      : undefined;
    const updatedFields = {
      username,
      password: hashedPassword,
      email,
      birthday,
    };
    console.log(updatedFields);
    console.log(req.params.id);
    const editedUser = await Teacher.findByIdAndUpdate(
      { _id: req.params.id },
      updatedFields,
      {
        new: true,
      }
    );
    console.log(editedUser);
    res.json(editedUser);
  } catch (err) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await Teacher.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
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
  } catch (e) {}
};
