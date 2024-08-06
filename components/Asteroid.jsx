import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Asteroid = ({ count = 100 }) => {
  const [asteroids, setAsteroids] = useState(() => generateAsteroids(count));
  const asteroidRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setAsteroids(generateAsteroids(count));
    }, 2000);
    return () => clearInterval(interval);
  }, [count]);

  useFrame(() => {
    asteroidRef.current.children.forEach((asteroid, i) => {
      asteroid.position.add(
        asteroids[i].position
          .clone()
          .normalize()
          .multiplyScalar(asteroids[i].speed)
      );
      if (asteroid.position.length() > 300) {
        asteroid.position.set(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300
        );
      }
    });
  });

  return (
    <group ref={asteroidRef}>
      {asteroids.map((asteroid, i) => (
        <mesh key={i} position={asteroid.position}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      ))}
    </group>
  );
};

const generateAsteroids = (count) => {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const x = Math.random() * 600 - 300;
    const y = Math.random() * 600 - 300;
    const z = Math.random() * 600 - 300;
    positions.push({
      position: new THREE.Vector3(x, y, z),
      speed: Math.random() * 0.005,
    });
  }
  return positions;
};

export default Asteroid;
