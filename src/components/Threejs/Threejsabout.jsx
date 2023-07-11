import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { TextureLoader, MeshPhysicalMaterial } from "three";

const textureLoader = new TextureLoader();

const Box = React.memo(({ position, imageUrl }) => {
  const ref = useRef();

  // useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));

  return (
    <mesh
      ref={ref}
      position={position}
      onClick={(e) => console.log("click")}
      onPointerOver={() => console.log("pointer over")}
      onPointerOut={() => console.log("pointer out")}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhysicalMaterial
        attach="material"
        map={textureLoader.load(`/modelFaces/${imageUrl}`)}
        color="#ffffff"
        metalness={0.5}
        roughness={0.1}
        transparent={true}
        opacity={1}
      />
    </mesh>
  );
});

export default Box;