import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "1-2329(1), Rudravaram, S.N.Padu, Prakasam, Andhra Pradesh, 523225",
    "3-87(1), Patibandla, Pedakura Padu, Guntur, Andhra Pradesh, 546007",
    "507-A(1), Endluru, S.N.Padu, Prakasam, Andhra Pradesh, 520122",
    "253(1), Mangamuru, S.N.Padu, Prakasam, Andhra Pradesh, 566180",
  ];

  return (
    <div>
      {locations.map(function (location, index) {
        return (
          <div
            key={index}
            onClick={() => {
              props.setVehiclePanel(true)
              props.setPanelOpen(false)
            }}
            className="border-2 p-3 border-gray-100 active:border-black rounded-xl flex items-center justify-start gap-4 my-2"
          >
            <h2 className="p-[6px] bg-[#eee] rounded-[50%]">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
