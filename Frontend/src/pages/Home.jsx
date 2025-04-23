import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false)

  const vehiclePanelRef = useRef(null)
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = () => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: "24px",
          // opacity: 1
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: "0",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(function() {

    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
       y: vehiclePanel ? '0%' : '100%',
      //  transform: "translateY(0%)"
      })
    }else {
      gsap.to(vehiclePanelRef.current, {
        y: vehiclePanel ? '0%' : '100%',
      //  transform: "translateY(100%)"
      })
    }
    
  },[vehiclePanel])

  return (
    <div className="h-screen relative overflow-hidden">
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
              setPanelOpen(false);
            }}
            ref={panelCloseRef}
            className="absolute opacity-0 right-6 top-6 text-2xl"
          >
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
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              value={pickup}
              className="bg-[#eee] px-12 py-2 text-lg font-medium rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              value={destination}
              className="bg-[#eee] px-12 py-2 text-lg font-medium rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[0%] bg-white overflow-auto">
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className="bg-white fixed bottom-0 translate-y-full w-full px-3 py-10 z-10 pt-14">
      <h5
            className="absolute p-3 top-0 text-center w-[90%]"
            onClick={() => {
              setVehiclePanel(false)
            }}
          >
            <i className="text-3xl text-gray-400 ri-arrow-down-wide-fill"></i>
          </h5>
        <h4 className="text-2xl font-semibold mb-3">Choose a Vehicle</h4>
        <div className="w-full flex border-2 mb-2 border-gray-300 active:border-black cursor-pointer rounded-xl items-center justify-between p-3">
          <img className="h-14" src={`${assets.Uber_Car}`} alt="uberCar" />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-lg">
              UberGo
              <span>
                <i className="ri-user-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-500">
              Affordable Compact Rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹193.20</h2>
        </div>
        <div className="w-full flex border-2 mb-2 border-gray-300 active:border-black cursor-pointer rounded-xl items-center justify-between p-3">
          <img className="h-14" src={`${assets.Uber_Bike}`} alt="uberCar" />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-lg">
              Moto
              <span>
                <i className="ri-user-fill"></i>1
              </span>
            </h4>
            <h5 className="font-medium text-sm">5 mins away</h5>
            <p className="font-normal text-xs text-gray-500">
              Affordable Motorcycle Rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹65.17</h2>
        </div>
        <div className="w-full flex border-2 mb-2 border-gray-300 active:border-black cursor-pointer rounded-xl items-center justify-between p-3">
          <img className="h-14" src={`${assets.Uber_Auto}`} alt="uberCar" />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-lg">
              Auto
              <span>
                <i className="ri-user-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-sm">4 mins away</h5>
            <p className="font-normal text-xs text-gray-500">
              Affordable Auto Rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹118.86</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
