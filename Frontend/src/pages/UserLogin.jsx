import React from "react";
import { assets } from "../assets/assets";
import {Link} from "react-router-dom"

const UserLogin = () => {
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-18 mb-5" src={`${assets.Uber_Logo}`} alt="UberLogo" />
        <form>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            className="rounded bg-[#eeeeee] mb-7 px-2 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg mb-2 font-medium">Password</h3>
          <input
            className="rounded bg-[#eeeeee] mb-7 px-2 py-2 border w-full text-lg placeholder:text-base"
            required
            type="password"
            placeholder="password"
          />
          <button 
          className="rounded bg-[#111] text-[#fff] font-semibold mb-2 px-2 py-2 w-full text-lg">
            Login
          </button>
        </form>
          <p className="text-center">New here? 
            <Link to="/signup" className="text-blue-600">Create new Account</Link>
          </p>
      </div>
      <div>
        <button
        className="rounded bg-[#10b461] text-white font-semibold mb-7 w-full px-2 py-2 text-lg"
        >Sign in as Captain</button>
      </div>
    </div>
  );
};

export default UserLogin;
