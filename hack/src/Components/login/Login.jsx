import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <div>
                <h1>
                    Welcome!
                </h1>
                <h2>
                    Please login to your account
                </h2>
            </div>
            <div>
                <form >
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
                            type="text"
                            placeholder='Enter Password'
                            required="true"
                        />
                    </div>
                    <button>Login</button>
                </form>
                <div>
                    <Link to={"/register"}>Don't have an account?</Link>
                </div>
            </div>
        </div>
    )
}

export default Login