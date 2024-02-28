import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TeacherContext } from '../Context/TeacherContext';

const Register = () => {
  const navigate = useNavigate();
  const { handleCreateTeacher, handleCreateStudent } = useContext(TeacherContext);

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
    <div className='h-full space-y-16 bg-gradient-to-b from-secondary border-solid border-2 p-4 rounded-xl flex-col flex items-center justify-center content-center'>
      <div className='flex flex-col space-y-10 items-center justify-center content-center'>
        <h1 className='text-6xl'>Create an account</h1>
      </div>
      <div className='flex justify-center items-center content-center flex-col space-y-16'>
        <form onSubmit={handleSubmit} className='flex justify-center items-center content-center flex-col space-y-6'>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder='Enter Username'
              required={true}
              className='rounded-lg bg-background'
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder='Enter Password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required={true}
              className='rounded-lg bg-background'
            />
          </div>
          <div>
            <label>Confirm password:</label>
            <input
              type="password"
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required={true}
              className='rounded-lg bg-background'
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder='Enter Email'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required={true}
              className='rounded-lg bg-background'
            />
          </div>
          <div>
            <label>Passkey:</label>
            <input
              type="text"
              placeholder='Enter Key'
              onChange={handlePasskeyChange}
              required={true}
              className='rounded-lg bg-background'
            />
          </div>
          <div>
            <button type="submit" className='bg-primary hover:bg-accent text-background font-bold py-2 px-4 border border-secondary rounded-md shadow-md'>
              Register Account
            </button>
          </div>
        </form>
        <div>
          <Link to="/" className='hover:text-primary'>Go back</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
