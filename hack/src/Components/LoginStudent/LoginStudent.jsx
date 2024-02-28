import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { StudentContext } from '../../Context/StudentContext'
const LoginStudent = () => {


    const { handleLogInStudent } = useContext(StudentContext);

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleLogInStudent(user);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div>
                <h1>
                    Welcome student!
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
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
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

export default LoginStudent