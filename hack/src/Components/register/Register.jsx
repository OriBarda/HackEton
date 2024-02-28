import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const [passkey, setPasskey] = useState();
  const [role, setRole] = useState();
  const navigate = useNavigate()


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswords();
  }
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswords();
  }
  const checkPasswords = () => {
    if (password === confirmPassword) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  const handlePasskeyChange = (e) => {
    setPasskey(e.target.value);
    checkPasskey();
  }
  const checkPasskey = () => {
    if (passkey === 1234) {
      setRole("teacher");
    } else if (passkey === 5678) {
      setRole("student");
    }
  }



  const handleSubmit = () => {
    if (!passwordsMatch) {
      //popup passwords dont match
    } else {
      // log the input in the db
      navigate("/")
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
              placeholder='Enter Username'
              required="true"
            />
          </div>
          <div>
            <label >
              Password:
            </label>
            <input
              type="password"
              placeholder='Enter Password'
              value={password}
              onChange={handlePasswordChange}
              required="true"
            />
          </div>
          <div>
            <label>Confirm password:</label>
            <input
              type="password"
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required="true"
            />
          </div>
          <div>
            <label >
              Email:
            </label>
            <input
              type="email"
              placeholder='Enter Email'
              required="true"
            />
          </div>
          <div>
            <label>
              Passkey:
            </label>
            <input
              type="text"
              placeholder='Enter Key'
              onChange={handle}
              required="true"
            />
          </div>
          <div>
            <button type="submit">Register Account</button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default Register