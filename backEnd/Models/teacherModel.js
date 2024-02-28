const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: { type: String, required: true },
    students: [
      {
        type: Schema.Types.ObjectId,
        required: false,
      },
    ],
    lessons: [
      {
        type: Schema.Types.ObjectId,
        ref: "Lesson",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
