import React, { useContext, useState } from "react";
import { StudentContext } from "../Context/StudentContext";
import { TeacherContext } from "../Context/TeacherContext";
import "../App.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { handleLogInStudent } = useContext(StudentContext);
  const { handleLogInTeacher } = useContext(TeacherContext);
  const [loading, setLoading] = useState(false);

  const [teacher, setTeacher] = useState({
    username: "",
    password: "",
  });
  const [student, setStudent] = useState({
    username: "",
    password: "",
  });

  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    if (!student.username || !student.password) {
      setError("Please enter both username and password");
      return;
    }
    setLoading(true);
    try {
      await handleLogInStudent(student);
    } catch (error) {
      setError("Invalid username or password");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleTeacherSubmit = async (e) => {
    e.preventDefault();
    if (!teacher.username || !teacher.password) {
      setError("Please enter both username and password");
      return;
    }
    setLoading(true);
    try {
      await handleLogInTeacher(teacher);
    } catch (error) {
      setError("Invalid username or password");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Teacher</span>
                <span>Student</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <form
                        onSubmit={handleStudentSubmit}
                        className="section text-center"
                      >
                        <h4 className="mb-4 pb-3 text-4xl">Student</h4>
                        <div className="form-group">
                          <input
                            value={student.username}
                            onChange={(e) =>
                              setStudent({
                                ...student,
                                username: e.target.value,
                              })
                            }
                            type="text"
                            name="logemail"
                            className="form-style"
                            placeholder="Your Email"
                            id="logemail"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            value={student.password}
                            onChange={(e) =>
                              setStudent({
                                ...student,
                                password: e.target.value,
                              })
                            }
                            type="password"
                            name="logpass"
                            className="form-style"
                            placeholder="Your Password"
                            id="logpass"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <button
                          type="submit"
                          className="btn mt-4 bg-black text-white hover:gray-800 transition-all ease-in-out"
                        >
                          submit
                        </button>
                      </form>
                      <div>
                        Dont have an account ?{" "}
                        <Link to={"/register"} className="underline">
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <form
                        className="section text-center"
                        onSubmit={handleTeacherSubmit}
                      >
                        <h4 className="mb-4 pb-3 text-4xl">Teacher</h4>
                        <div className="form-group">
                          <input
                            value={teacher.username}
                            onChange={(e) =>
                              setTeacher({
                                ...teacher,
                                username: e.target.value,
                              })
                            }
                            type="text"
                            name="logname"
                            className="form-style"
                            placeholder="Username"
                            id="logname"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-user"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            value={teacher.password}
                            onChange={(e) =>
                              setTeacher({
                                ...teacher,
                                password: e.target.value,
                              })
                            }
                            type="password"
                            name="logpass"
                            className="form-style"
                            placeholder="Password"
                            id="logpasss"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <button
                          type="submit"
                          className="btn mt-4 bg-black text-white hover:gray-800 transition-all ease-in-out"
                        >
                          submit
                        </button>
                      </form>
                      <div>
                        Dont have an account ?{" "}
                        <Link to={"/register"} className="underline">
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
