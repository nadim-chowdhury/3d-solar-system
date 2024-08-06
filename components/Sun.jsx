import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Sun = ({ textureUrl, size }) => {
  const texture = useTexture(textureUrl);
  const sunRef = useRef();

  useFrame(() => {
    sunRef.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        map={texture}
        emissiveMap={texture}
        emissiveIntensity={1}
      />
    </mesh>
  );
};

export default Sun;
