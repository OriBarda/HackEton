const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LessonsSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
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
