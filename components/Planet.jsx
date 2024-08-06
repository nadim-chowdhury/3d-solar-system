import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Planet = ({
  textureUrl,
  size,
  distance,
  speed,
  hasRing,
  ringTextureUrl,
}) => {
  const texture = useTexture(textureUrl);
  const ringTexture = useTexture(ringTextureUrl || "/textures/defaultRing.png");
  const planetRef = useRef();
  const ringRef = useRef();
  const orbitRef = useRef();
  const angleRef = useRef(0);

  useFrame(() => {
    angleRef.current += speed;
    orbitRef.current.position.x = distance * Math.cos(angleRef.current);
    orbitRef.current.position.z = distance * Math.sin(angleRef.current);
    planetRef.current.rotation.y += 0.01;
    if (hasRing && ringRef.current) {
      ringRef.current.rotation.z += 0.999999; // Adjust ring rotation speed
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          map={texture}
          // emissive={new THREE.Color("white")}
          // emissiveIntensity={0.1}
        />
      </mesh>
      {hasRing && (
        <mesh ref={ringRef} rotation={[1.57, 0, 0]}>
          <ringGeometry args={[size * 1.4, size * 2, 64]} />
          {/* Make the ring further out */}
          <meshBasicMaterial
            map={ringTexture}
            side={THREE.DoubleSide}
            transparent
          />
        </mesh>
      )}
    </group>
  );
};

export default Planet;
