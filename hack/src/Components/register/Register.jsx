import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TeacherContext } from '../../Context/TeacherContext';

const Register = () => {
  const navigate = useNavigate()

  const { handleCreateTeacher, handleCreateStudent } = useContext(TeacherContext)

  const [confirmPassword, setConfirmPassword] = useState("")
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
  }

  const checkPasskey = async () => {
    if (passkey === "1234") {
      handleCreateTeacher(user);
    } else if (passkey === "5678") {
      handleCreateStudent(user);
    } else {
      alert("Wrong passkey");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await checkPasswords();
    if (!passwordsMatch) {
      alert("Passwords dont match")
    } else {
      checkPasskey();
      navigate("/");
    }
  }

  return (
    <div>
      <div>
        <h1>
          Create an account
        </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label >
              Username:
            </label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder='Enter Username'
              required={true}
            />
          </div>
          <div>
            <label >
              Password:
            </label>
            <input
              type="password"
              placeholder='Enter Password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required={true}
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
            />
          </div>
          <div>
            <label >
              Email:
            </label>
            <input
              type="email"
              placeholder='Enter Email'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required={true}
            />

          </div>
          <div>
            <label>
              Passkey:
            </label>
            <input
              type="text"
              placeholder='Enter Key'
              onChange={handlePasskeyChange}
              required={true}
            />
          </div>
          <div>
            <button type="submit">Register Account</button>
          </div>
        </form>
        <div>
          <Link to="/">Go back</Link>
        </div>
      </div>
    </div>
  )
}


export default Register