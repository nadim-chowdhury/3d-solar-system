import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Planet from "./Planet";
import Sun from "./Sun";
import Asteroid from "./Asteroid";

const SolarSystem = () => {
  const textureUrls = {
    sun: "/textures/sun.jpg",
    earth: "/textures/earth.jpg",
    mercury: "/textures/mercury.jpg",
    venus: "/textures/venus.jpg",
    mars: "/textures/mars.jpg",
    jupiter: "/textures/jupiter.jpg",
    saturn: "/textures/saturn.jpg",
    uranus: "/textures/uranus.jpg",
    neptune: "/textures/neptune.jpg",
    saturnRing: "/textures/saturnRing.png",
  };

  const planets = [
    {
      name: "Mercury",
      size: 0.5,
      distance: 4,
      speed: 0.02,
      textureUrl: textureUrls.mercury,
    },
    {
      name: "Venus",
      size: 0.8,
      distance: 6,
      speed: 0.015,
      textureUrl: textureUrls.venus,
    },
    {
      name: "Earth",
      size: 1,
      distance: 8,
      speed: 0.01,
      textureUrl: textureUrls.earth,
    },
    {
      name: "Mars",
      size: 0.6,
      distance: 10,
      speed: 0.008,
      textureUrl: textureUrls.mars,
    },
    {
      name: "Jupiter",
      size: 1.2,
      distance: 12,
      speed: 0.005,
      textureUrl: textureUrls.jupiter,
    },
    {
      name: "Saturn",
      size: 1,
      distance: 14,
      speed: 0.004,
      textureUrl: textureUrls.saturn,
      hasRing: true,
      ringTextureUrl: textureUrls.saturnRing,
    },
    {
      name: "Uranus",
      size: 0.9,
      distance: 16,
      speed: 0.003,
      textureUrl: textureUrls.uranus,
    },
    {
      name: "Neptune",
      size: 0.9,
      distance: 18,
      speed: 0.002,
      textureUrl: textureUrls.neptune,
    },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 40], fov: 50 }}>
      <ambientLight intensity={1} />
      <pointLight position={[0, 0, 0]} intensity={1.5} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade
      />
      <Sun textureUrl={textureUrls.sun} size={2} />
      {planets.map((planet) => (
        <Planet
          key={planet.name}
          textureUrl={planet.textureUrl}
          size={planet.size}
          distance={planet.distance}
          speed={planet.speed}
          hasRing={planet.hasRing}
          ringTextureUrl={planet.ringTextureUrl}
        />
      ))}
      <Asteroid />
      <OrbitControls />
    </Canvas>
  );
};

export default SolarSystem;
