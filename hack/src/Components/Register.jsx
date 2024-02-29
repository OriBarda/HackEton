import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TeacherContext } from "../Context/TeacherContext";

const Register = () => {
  const navigate = useNavigate();
  const { handleCreateTeacher, handleCreateStudent } =
    useContext(TeacherContext);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [passkey, setPasskey] = useState();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const checkPasswords = async () => {
    if (String(user.password) === String(confirmPassword)) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  const handlePasskeyChange = async (e) => {
    setPasskey(e.target.value);
  };

  const checkPasskey = async () => {
    if (passkey === "1234") {
      handleCreateTeacher(user);
    } else if (passkey === "5678") {
      handleCreateStudent(user);
    } else {
      alert("Wrong passkey");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await checkPasswords();
    if (!passwordsMatch) {
      alert("Passwords don't match");
    } else {
      checkPasskey();
      navigate("/");
    }
  };

  return (
    <div className="h-screen  space-y-16 p-4 flex-col flex items-center justify-center content-center">
      <div className="flex flex-col space-y-10 items-center justify-center content-center">
        <h1 className="text-6xl">Create an account</h1>
      </div>
      <div className="flex justify-evenly items-center content-center flex-col space-y-16 bg-gray-700 p-12 rounded-lg bg-opacity-50">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col space-y-6 xs:w-[24rem] w-screen p-4"
        >
          <div className="flex flex-col items-start">
            <label className="text-lg">Username:</label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Enter Username"
              required={true}
              className="rounded-full bg-opacity-10 bg-white px-3 py-2 w-[24rem] ring-0 outline-none focus:border-b-2 hover:border-b-gray-950 transition-all ease-in-out"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-lg">Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required={true}
              className="rounded-full bg-opacity-10 bg-white px-3 py-2 w-[24rem] ring-0 outline-none focus:border-b-2 hover:border-b-gray-950 transition-all ease-in-out"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-lg">Confirm password:</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required={true}
              className="rounded-full bg-opacity-10 bg-white px-3 py-2 w-[24rem] ring-0 outline-none focus:border-b-2 hover:border-b-gray-950 transition-all ease-in-out"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-lg">Email:</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required={true}
              className="rounded-full bg-opacity-10 bg-white px-3 py-2 w-[24rem] ring-0 outline-none focus:border-b-2 hover:border-b-gray-950 transition-all ease-in-out"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-lg">Passkey:</label>
            <input
              type="text"
              placeholder="Enter Key"
              onChange={handlePasskeyChange}
              required={true}
              className="rounded-full bg-opacity-10 bg-white px-3 py-2 w-[24rem] ring-0 outline-none focus:border-b-2 hover:border-b-gray-950 transition-all ease-in-out"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-[24rem] bg-gray-700 py-2 rounded-full hover:bg-gray-900 transition-all ease-in-out"
            >
              Register Account
            </button>
          </div>
        </form>
        <div>
          <Link to="/" className="hover:text-primary underline">
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
