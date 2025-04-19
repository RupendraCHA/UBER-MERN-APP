import React from 'react'
import {assets} from "../assets/assets.js"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
        <div 
        className="bg-cover bg-center bg-no-repeat aspect-[4/3] 
         h-screen pt-8 w-full flex justify-between flex-col"
         style={{backgroundImage: `url(${assets.Traffic_Lights})`}}
         >
            <img className='w-18 ml-8' 
            src={`${assets.Uber_Logo}`}
             alt='UberLogo'/>
            <div className='bg-white py-4 px-4 pb-7'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to="/login" className='flex items-center justify-center w-full text-lg font-medium bg-black text-white py-3 mt-5 rounded-lg'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home