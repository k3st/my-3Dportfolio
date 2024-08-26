import { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    // console.log({ isRotating });

    // // Play animation when going around hence stop
    //   if (isRotating) {
    //     actions["Take 001"].stop();
    //   } else {
    //     actions["Take 001"].play();
    //   }

    actions["Take 001"].play();
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
