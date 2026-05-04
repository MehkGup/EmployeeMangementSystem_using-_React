import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password)
        setEmail("")
        setPassword("")

    }
    return (
        <div className='flex  h-screen w-screen items-center justify-center'>
            <div className='border-2 border-transparent p-20 rounded-xl'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className="outline-none bg-transparent border-2 border-r-white rounded-lg  text-xl py-3 px-5 placeholder:text-gray-400 " type="email" placeholder='Enter your email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className="outline-none bg-transparent border-2 border-r-white rounded-lg  text-xl py-3 px-5 placeholder:text-gray-400 mt-3" type="password" placeholder='Enter password' />
                    <button className=" text-yellow-300 border-none outline-none  bg-white rounded-e-3xl  text-xl py-3 px-5 mt-5  placeholder:text-white">Log in </button>
                </form>
            </div>
        </div>
    )
}

export default Login