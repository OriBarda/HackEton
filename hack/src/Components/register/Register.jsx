import React, { useState } from 'react'

const Register = () => {

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswords();
  }
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswords();
  }
  const checkPasswords = () => {
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  return (
    <div>
      <div>
        <h1>
          Create an account
        </h1>
      </div>
      <div>
        <form >
          <div>
            <label >
              Username:
            </label>
            <input type="text" placeholder='Enter Username' />
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
            />
          </div>
          <div>
            <label>Confirm password:</label>
            <input
              type="password"
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <div>
            <label >
              Email:
            </label>
            <input type="email" placeholder='Enter Email' />
          </div>
          <div>
            <button type="submit" disabled={!passwordsMatch}>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register