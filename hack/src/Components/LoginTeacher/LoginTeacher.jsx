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
        e.preventDefault();
        try {
            handleLogInTeacher(user);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='h-full space-y-28 bg-gradient-to-b from-secondary border-solid border-2 p-4 rounded-xl flex-col flex items-center justify-center content-center'>
            <div className='flex flex-col space-y-10 items-center justify-center content-center '>
                <h1 className='text-6xl '>
                    Welcome teacher!
                </h1>
                <h1 className='text-3xl '>
                    Please login to your account
                </h1>
            </div>
            <div className='flex justify-center items-center content-center flex-col space-y-16'>
                <form onSubmit={handleSubmit} className='flex justify-center items-center content-center flex-col space-y-10'>
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
                            className='rounded-lg bg-background'
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
                            className='rounded-lg bg-background'
                        />
                    </div>
                    <button className='bg-primary hover:bg-accent text-background font-bold py-2 px-4 border border-secondary rounded-md shadow-md'>
                        Login
                    </button>
                </form>
                <div>
                    <Link to={"/register"} className='hover:text-primary'>
                        Don't have an account?
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginTeacher