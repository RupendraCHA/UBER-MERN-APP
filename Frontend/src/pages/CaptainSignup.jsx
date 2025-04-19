import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainSignupData, setCaptainSignupData] = useState({})
  
    const submitCaptainSignupData = (e) => {
      e.preventDefault()
  
  
      setCaptainSignupData({
        fullname: {
          firstname: firstname,
          lastname: lastname
        },
        email: email,
        password: password
      })
  
      console.log(captainSignupData)
  
      setFirstname('')
      setLastname('')
      setEmail('')
      setPassword('')
    }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-18 mb-5" src={`${assets.Uber_Driver_Logo}`} alt="UberLogo" />
        <form onSubmit={submitCaptainSignupData}>
          <h3 className="text-lg font-medium mb-2">What's our Captain's name</h3>
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
          <h3 className="text-lg font-medium mb-2">What's our Captain's email</h3>
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
            Create Captain
          </button>
        </form>
          <p className="text-center">Already have an Account? 
            <Link to="/captain-login" className="text-blue-600 font-medium">Login here</Link>
          </p>
      </div>
      <div>
        <p className='text-[12px] leading-tight'>
          Thi site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup