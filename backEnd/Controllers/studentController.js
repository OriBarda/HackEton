const { decode } = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const Student = require("../Models/studentModel");

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.send(students);
  } catch (err) {
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
    console.log(err);
  }
};

exports.handleLogin = async (req, res) => {
  try {
    console.log("logged");
    console.log(req.body);
    const { username, password } = req.body;
    const student = await Student.findOne({ username })
      .populate("lessons")
      .exec();
    console.log("mydick", student);
    if (student && (await bcrypt.compare(password, student.password))) {
      console.log("oooo");
      const token = jwt.sign(
        {
          _id: student._id,
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
        _id: student._id,
        username: student.username,
        email: student.email,
        role: student.role,
        password: student.password,
        token: token,
        lessons: student.lessons,
      });
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
