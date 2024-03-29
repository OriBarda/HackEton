import React, { useContext } from "react";
import { StudentContext } from "../Context/StudentContext";

const StudentSchedule = () => {
  const { studentInfo } = useContext(StudentContext);

  const studentLessons = Array.from({ length: 5 }, () =>
    Array.from({ length: 7 }, () => ({ info: null }))
  );

  for (const lesson of studentInfo.lessons) {
    const { teacher, subject, day, hour, place } = lesson;
    const info = { teacher, subject, day, hour, place };
    const timeSlot = studentLessons[info.day - 1][info.hour - 1];
    timeSlot.info = info;
  }

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  const classTimes = [
    { start: "8:15", end: "9:00" },
    { start: "9:15", end: "10:00" },
    { start: "10:15", end: "11:00" },
    { start: "11:15", end: "12:00" },
    { start: "12:15", end: "13:00" },
    { start: "13:15", end: "14:00" },
    { start: "14:15", end: "15:00" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">
          Weekly Class Schedule
        </h1>
        <div className="grid md:grid-cols-6 gap-4">
          {days.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="flex flex-col bg-gray-200 rounded-md border-[0.5px] border-gray-300 border-opacity-50 p-4"
            >
              <div className="font-semibold text-lg text-indigo-600 mb-2">
                {day}
              </div>
              {studentLessons[dayIndex].map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className={`p-2 rounded-lg my-1 w-full ${
                    cellIndex % 2 === 0
                      ? "bg-indigo-200 hover:bg-indigo-400 transition-all ease-in-out text-black"
                      : "bg-indigo-400 hover:bg-indigo-500 transition-all ease-in-out text-white"
                  }`}
                >
                  {cell.info
                    ? `${cell.info.subject} - ${cell.info.teacher}`
                    : "-"}
                </div>
              ))}
            </div>
          ))}
          <div className="flex-col h-full rounded-lg">
            {classTimes.map((time, index) => (
              <div
                key={index}
                className="p-2 px-4 py-3 border border-indigo-600 border-t-0 bg-gray-200 text-gray-800 rounded-lg my-4"
              >
                {time.start} - {time.end}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSchedule;
