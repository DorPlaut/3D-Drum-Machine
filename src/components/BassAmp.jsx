/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Ryan_Nein (https://sketchfab.com/Ryan_Nein)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/fender-bass-amp-087b5a3601b040aa96adce426f8e685d
title: Fender Bass Amp
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { angleToRadians } from '../utils/angle';

export default function BassAmp(props) {
  const { nodes, materials } = useGLTF('/BassAmp/scene-transformed.glb');
  return (
    <group
      {...props}
      dispose={null}
      position={[-3.7, 1.53, -3.7]}
      scale={4}
      rotation={[0, angleToRadians(45), 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[80.21, 58.75, 97.92]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cab_FenderAmpCabinet_0.geometry}
              material={materials.FenderAmpCabinet}
            />
          </group>
          <group
            position={[0, 33.67, 2.83]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={9.6}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Head_FenderAmpHead_0.geometry}
              material={materials.FenderAmpHead}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/BassAmp/scene-transformed.glb');
