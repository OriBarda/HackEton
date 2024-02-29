import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"; // Import icons of your choice
import { StudentContext } from "../Context/StudentContext";

const LoginStudent = () => {
  const { handleLogInStudent } = useContext(StudentContext);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.username || !user.password) {
      setError("Please enter both username and password");
      return;
    }
    setLoading(true);
    try {
      await handleLogInStudent(user);
    } catch (error) {
      setError("Invalid username or password");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-fit h-fit p-12 rounded-lg bg-gray-800 text-white flex flex-col items-center justify-evenly">
      <form onSubmit={(e) => handleSubmit(e)} className=" my-4">
        <header className="w-full text-center uppercase font-bold text-3xl">
          Student
        </header>
        <div className="flex flex-col items-start">
          <label className="w-full pb-6 flex flex-col items-start font-bold text-lg">
            <header className="flex items-baseline">
              <FaUser className="mr-2" /> Username:
            </header>
            <input
              className="bg-white bg-opacity-10 rounded-full px-3 py-2 focus:border-b-indigo-700 focus:border-b-2 ring-0 outline-none"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Username"
              type="text"
            />
          </label>
          <label className="w-full pb-6 flex flex-col items-start font-bold text-lg">
            <header className="flex items-baseline">
              {" "}
              <FaLock className="mr-2" /> Password:
            </header>
            <div className="relative">
              <input
                className="bg-white bg-opacity-10 rounded-full px-3 py-2 focus:border-b-indigo-700 focus:border-b-2 ring-0 outline-none"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </label>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="w-full bg-gray-700 h-12 font-bold tracking-wide text-lg rounded-full hover:bg-gray-900 transition-all ease-in-out duration-700"
          disabled={loading}
        >
          {loading ? "Logging In..." : "Log In As Student"}
        </button>
      </form>
      <div>
        Don't have an account?{" "}
        <Link to={"/signup"} className="underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginStudent;
