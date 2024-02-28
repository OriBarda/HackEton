import React, { useContext } from "react";
import { StudentContext } from "../../Context/StudentContext";

const StudentSchedule = () => {
  const { studentInfo } = useContext(StudentContext);
  const studentLessons = [
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}],
  ];

  for (const lesson of studentInfo.lessons) {
    const { teacher, subject, day, hour, place } = lesson;
    const info = { teacher, subject, day, hour, place };
    studentLessons[info.day - 1][info.hour - 1] = info;
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center pt-20">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-1">
            <div className="bg-indigo-600 text-white text-lg font-bold p-3 rounded-t-lg">
              Time
            </div>
            {classTimes.map((time, index) => (
              <div
                key={index}
                className="p-3 border border-indigo-600 border-t-0 bg-gray-200 text-gray-800 rounded-md"
              >
                {time.start} - {time.end}
              </div>
            ))}
          </div>
          <div className="col-span-7 grid grid-rows-7 gap-4">
            {days.map((day, dayIndex) => (
              <div key={dayIndex} className="flex flex-col p-4 mb-4">
                <div className="font-bold text-3xl text-indigo-900 mb-4 text-center">
                  {day}
                </div>
                {studentLessons[dayIndex].map((cell, cellIndex) => (
                  <div
                    key={cellIndex}
                    className={`p-4 rounded-xl my-2 font-bold text-xl ${
                      cellIndex % 2 === 0
                        ? "bg-gray-500 text-white hover:bg-gray-700 transition-all ease-in-out"
                        : "bg-slate-300 text-black hover:bg-slate-500 transition-all ease-in-out"
                    }`}
                  >
                    {cell.subject ? (
                      <div className="flex flex-col space-y-2">
                        <div className="font-bold text-lg">
                          {cell.subject || "No Class"}
                        </div>
                        {cell.subject && (
                          <div className="text-sm font-semibold text-gray-600">
                            {cell.teacher} - {cell.place}
                          </div>
                        )}
                      </div>
                    ) : (
                      "-"
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSchedule;
