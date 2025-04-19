import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const CaptainLogin = () => {

  const [captainData, setCaptainData] = useState({
      email: '',
      password: ''
    })
  
    const submitUserData = (e) => {
      e.preventDefault()
      // console.log("C",captainData)
  
      setCaptainData({
        email: '',
        password: ''
      })
    }
  
    const handleInputData = (e) => {
      const name = e.target.name
      const value = e.target.value
  
      setCaptainData((captainData) => ({
        ...captainData,
        [name]: value
      }))
    }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-20 mb-3" src={`${assets.Uber_Driver_Logo}`} alt="UberLogo" />
        <form onSubmit={submitUserData}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={captainData.email}
            onChange={handleInputData}
            className="rounded bg-[#eeeeee] font-medium mb-7 px-2 py-2 border-none w-full text-lg placeholder:text-sm"
            type="email"
            name="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg mb-2 font-medium">Password</h3>
          <input
            className="rounded bg-[#eeeeee] font-medium mb-7 px-2 py-2 border-none w-full text-lg placeholder:text-sm"
            required
            value={captainData.password}
            onChange={handleInputData}
            name="password"
            type="password"
            placeholder="password"
          />
          <button
          type="submit"
          className="rounded bg-[#111] text-[#fff] font-semibold mb-3 px-2 py-2 w-full text-lg">
            Login
          </button>
        </form>
          <p className="text-center">Want to join a fleet? 
            <Link to="/captain-signup" className="text-blue-600 font-medium">Register as a Captain</Link>
          </p>
      </div>
      <div>
        <Link to="/login"
        className="rounded bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 w-full px-2 py-2 text-lg"
        >Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin