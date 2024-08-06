import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const Earth = () => {
  const earthRef = useRef();

  useFrame(() => {
    earthRef.current.rotation.y += 0.01;
  });

  return (
    <Sphere ref={earthRef} args={[1, 32, 32]}>
      <MeshDistortMaterial
        color="blue"
        attach="material"
        distort={0.3}
        speed={1}
      />
    </Sphere>
  );
};

export default Earth;
