import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import {useNavigate} from "react-router-dom"
import axios from "axios"

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainSignupData, setCaptainSignupData] = useState({})

    const {captain, setCaptain} = useContext(CaptainDataContext)

    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const navigate = useNavigate()
  
    const submitCaptainSignupData = async (e) => {
      e.preventDefault()
  
  
      const captainData = {
        fullname: {
          firstname: firstname,
          lastname: lastname
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType
        }
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

      if (response.status === 201){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem("captain-token", data.token)
        navigate("/captain-home")
      }
  
  
      setFirstname('')
      setLastname('')
      setEmail('')
      setPassword('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')
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
            className="rounded bg-[#eeeeee] px-2 py-2 border-none w-1/2 text-base placeholder:text-sm"
            type="text"
            name="firstname"
            placeholder="First name"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            required
            values={lastname}
            
            className="rounded bg-[#eeeeee] px-2 py-2 border-none w-1/2 text-base placeholder:text-sm"
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
            
            className="rounded bg-[#eeeeee] mb-6 px-2 py-2 border-none w-full text-base placeholder:text-sm"
            type="email"
            name="email"
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}

          />
          <h3 className="text-lg mb-2 font-medium">Password</h3>
          <input
            className="rounded bg-[#eeeeee] mb-6 px-2 py-2 border-none w-full text-base placeholder:text-sm"
            required
            values={password}
            name="password"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}

          />
          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border-none text-lg placeholder:text-sm'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border-none text-lg placeholder:text-sm'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border-none text-lg placeholder:text-sm'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border-none text-sm'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option className='text-[12px]' value="" disabled>Select Vehicle Type</option>
              <option className='font-medium' value="Car">Car</option>
              <option className='font-medium' value="Auto">Auto</option>
              <option className='font-medium' value="Moto">Moto</option>
            </select>
          </div>
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