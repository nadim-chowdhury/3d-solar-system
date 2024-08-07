import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
// import "../app/PlanetDetails.css";

const PlanetDetails = ({ planet, setSelectedPlanet }) => {
  if (!planet)
    return <div className="select-prompt">Select a planet to see details.</div>;

  return (
    <div
      className="planet-details w-full h-full text-justify"
      // style={{
      //   clipPath:
      //     "polygon(30% 0%, 90% 0, 100% 10%, 100% 100%, 70% 100%, 10% 100%, 0 90%, 0 0)",
      // }}
    >
      <div className="flex items-center justify-between mb-4 text-slate-300">
        <h2 className="planet-name text-2xl font-bold">{planet.name}</h2>
        <button
          onClick={() => setSelectedPlanet(null)}
          className="rounded-full flex items-center justify-center"
        >
          <IoMdCloseCircle className="w-5 h-5" />
        </button>
      </div>
      <p className="planet-description mb-4 text-slate-300">
        {planet.description}
      </p>
      <ul className="planet-facts mt-2 text-slate-300">
        {planet.facts.map((fact, index) => (
          <li key={index} className="list-disc list-inside">
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetDetails;
