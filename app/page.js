"use client";

import { useState } from "react";
import PlanetInfo from "@/components/PlanetInfo";
import PlanetSlider from "@/components/PlanetSlider";
import SolarSystem from "@/components/SolarSystem";
import PlanetDetails from "@/components/PlanetDetails";

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <main className="h-screen flex flex-col relative">
      <div className="absolute top-10 left-10 text-6xl font-bold">
        <h1>Solar System</h1>
      </div>

      <div className="flex-grow">
        <SolarSystem />
      </div>
      <PlanetSlider onSelect={setSelectedPlanet} />

      <div className="absolute bottom-0 right-0 border border-white">
        {/* {selectedPlanet && <PlanetInfo planet={selectedPlanet} />} */}
        {selectedPlanet && <PlanetDetails planet={selectedPlanet} />}
      </div>
    </main>
  );
}
