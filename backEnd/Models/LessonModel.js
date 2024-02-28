const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LessonsSchema = new mongoose.Schema(
  {
    teacher: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    day: {
      type: Number,
      required: true,
    },
    hour: {
      type: Number,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        required: false,
      },
    ],
    teacherId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Lesson = mongoose.model("Lesson", LessonsSchema);
module.exports = Lesson;
