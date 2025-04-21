import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";


const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false)

  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = () => {
    e.preventDefault();
  };

  useGSAP(function(){
   
    if (panelOpen){
      gsap.to(panelRef.current, {
        height: '70%',
        padding: "24px"
        // opacity: 1

      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    }else{
      gsap.to(panelRef.current, {
        height: '0%',
        padding: "0",

      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }

  },[panelOpen])

  return (
    <div className="relative">
      <img
        className="w-18 absolute left-5 top-5"
        src={assets.Uber_Logo}
        alt="uberLogo"
      />
      <div className="h-screen w-screen">
        <img
          className="w-full h-full object-fit"
          src={`${assets.Uber_Map1}`}
          alt="uberMap"
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute bottom-0 w-full">
        <div className="h-[30%] bg-white p-6 relative">
          <h5
            onClick={() => {
              setPanelOpen(false)
            }}
           ref={panelCloseRef} className="absolute opacity-0 right-6 top-6 text-2xl">
          <i className="ri-arrow-down-wide-fill"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}

          >
            <div className="line absolute h-16 w-1 top-[40%] sm:top-[32%] left-10 bg-gray-900 rounded-full"></div>
            <input
            onClick={() => {
              setPanelOpen(true)
            }}
            onChange={(e) => {
              setPickup(e.target.value)
            }}
            value={pickup}
              className="bg-[#eee] px-12 py-2 text-lg font-medium rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
            onClick={() => {
              setPanelOpen(true)
            }}
            onChange={(e) => {
              setDestination(e.target.value)
            }}
            value={destination}
              className="bg-[#eee] px-12 py-2 text-lg font-medium rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[0%] bg-white">
          <LocationSearchPanel/>
        </div>
      </div>
    </div>
  );
};

export default Home;
