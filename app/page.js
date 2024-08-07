"use client";

import { useState } from "react";
import PlanetSlider from "@/components/PlanetSlider";
import SolarSystem from "@/components/SolarSystem";
import PlanetDetails from "@/components/PlanetDetails";
import LiveDateTime from "@/components/LiveDateTime";

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <main className="h-screen flex flex-col relative">
      <div className="absolute top-10 left-10 flex items-center justify-between flex-col gap-5">
        <h1 className="text-8xl font-bold tracking-tighter bg-gradient-to-tr from-white to-neutral-500 inline-block text-transparent bg-clip-text">
          Solar System
        </h1>
        <LiveDateTime />
      </div>

      <div className="flex-grow">
        <SolarSystem />
      </div>

      <div className="absolute left-10 bottom-10 w-[560px]">
        <PlanetSlider onSelect={setSelectedPlanet} />
      </div>

      <div className="absolute bottom-10 right-10 w-[320px]">
        {selectedPlanet && (
          <PlanetDetails
            planet={selectedPlanet}
            setSelectedPlanet={setSelectedPlanet}
          />
        )}
      </div>
    </main>
  );
}
