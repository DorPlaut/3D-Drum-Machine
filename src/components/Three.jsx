import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { angleToRadians } from '../utils/angle';
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useTexture,
  Html,
} from '@react-three/drei';
import { PointLightHelper } from 'three';
import * as THREE from 'three';
import Drums from './Drums';
import HitBoxes from './HitBoxes';
import Room from './Room';

function Three({ displaydPad, setDisplayedPad }) {
  // use frame
  const orbitControlsRef = useRef(null);

  // mouse control

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(2));
      orbitControlsRef.current.update();
    }
  });
  angleToRadians;

  return (
    <>
      {/* camera */}
      <PerspectiveCamera
        makeDefault
        position={[0, 6, 7]}
        // rotation={(15, 5, 2)}
      />
      <OrbitControls
        ref={orbitControlsRef}
        maxPolarAngle={angleToRadians(49)}
        minPolarAngle={angleToRadians(50)}
        enablePan={false}
        enableZoom={false}
      />

      <HitBoxes displaydPad={displaydPad} setDisplayedPad={setDisplayedPad} />
      <Drums />
      <Room />

      {/* light */}
      <hemisphereLight args={[0xffffbb, 0x080820, 1]} />
      {/* <ambientLight args={['#ffffff', 0.5]} /> */}
      <spotLight
        args={['#FFFFFF', 3, 20, angleToRadians(90), 0.5]}
        position={[0, 10, 0]}
        castShadow
      />
      <spotLight
        args={['#FFFFFF', 1.5, 7, angleToRadians(45), 0.5]}
        position={[0, 1, 5]}
        castShadow
      />
      {/* Environment make a backround to the whole app */}
      {/* <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color="#2266CC" side={THREE.BackSide} />
        </mesh>
      </Environment> */}
      {/* <OrbitControls /> */}
    </>
  );
}

export default Three;
