import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { TeacherContext } from '../../Context/TeacherContext'

const LoginTeacher = () => {
    const { handleLogInTeacher } = useContext(TeacherContext)

    const [user, setUser] = useState({
        username: "",
        password: "",
      });

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            handleLogInTeacher(user);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div>
                <h1>
                    Welcome teacher!
                </h1>
                <h2>
                    Please login to your account
                </h2>
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
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            required={true}
                        />
                    </div>
                    <div>
                        <label >
                            Password:
                        </label>
                        <input
                            type="text"
                            placeholder='Enter Password'
                            value={user.password}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            required={true}
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

export default LoginTeacher