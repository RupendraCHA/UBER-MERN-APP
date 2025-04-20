import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from "axios"

const UserSignup = () => {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userSignupData, setUserSignupData] = useState({})

  const navigate = useNavigate()

  const {user, setUser} = useContext(UserDataContext)

  const submitUserSignupData = async (e) => {
    e.preventDefault()

    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201){
      const data = response.data

      setUser(data.user)
      localStorage.setItem("token", data.token)
      navigate("/home")
    }

    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
  }


  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-18 mb-5" src={`${assets.Uber_Logo}`} alt="UberLogo" />
        <form onSubmit={submitUserSignupData}>
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className='flex mb-6 gap-4'>
          <input
            required
            values={firstname}
            className="rounded bg-[#eeeeee] font-medium px-2 py-2 border-none w-1/2 text-base placeholder:text-sm"
            type="text"
            name="firstname"
            placeholder="First name"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            required
            values={lastname}
            
            className="rounded bg-[#eeeeee] font-medium px-2 py-2 border-none w-1/2 text-base placeholder:text-sm"
            type="text"
            name="lastname"
            placeholder="Last name"
            onChange={(e) => setLastname(e.target.value)}
          />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            values={email}
            
            className="rounded bg-[#eeeeee] font-medium mb-6 px-2 py-2 border-none w-full text-base placeholder:text-sm"
            type="email"
            name="email"
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}

          />
          <h3 className="text-lg mb-2 font-medium">Password</h3>
          <input
            className="rounded bg-[#eeeeee] font-medium mb-6 px-2 py-2 border-none w-full text-base placeholder:text-sm"
            required
            values={password}
            name="password"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
          type="submit"
          className="rounded bg-[#111] text-[#fff] font-semibold mb-3 px-2 py-2 w-full text-lg">
            Create account
          </button>
        </form>
          <p className="text-center">Already have an Account? 
            <Link to="/login" className="text-blue-600 font-medium">Login here</Link>
          </p>
      </div>
      <div>
        <p className='text-[12px] leading-tight'>
          By proceeding, you consent to get calls, Whatsapp or SMS Messages, including by automated means, from uber and it's affiliates to the number provided.
        </p>
      </div>
    </div>
  )
}

export default UserSignup