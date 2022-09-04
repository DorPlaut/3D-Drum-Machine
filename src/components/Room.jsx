import React from 'react';
import { angleToRadians } from '../utils/angle';
import { useTexture } from '@react-three/drei';
import GuitarAmp from './GuitarAmp';
import BassAmp from './BassAmp';

function Room() {
  // textures
  // floor
  const floorTexture = useTexture({
    map: './Textures/woodFloor/Wood_Floor_009_basecolor.jpg',
    normalMap: './Textures/woodFloor/Wood_Floor_009_normal.jpg',
    displacementMap: './Textures/woodFloor/Wood_Floor_009_height.png',
    roughnessMap: './Textures/woodFloor/Wood_Floor_009_roughness.jpg',
    aoMap: './Textures/woodFloor/Wood_Floor_009_ambientOcclusion.jpg',
  });
  // walls
  const wallsTexture = useTexture({
    aoMap: './Textures/walls/Wall_Interior_001_ambientOcclusion.jpg',
    map: './Textures/walls/Wall_Interior_001_basecolor.jpg',
    normalMap: './Textures/walls/Wall_Interior_001_normal.jpg',
    roughnessMap: './Textures/walls/Wall_Interior_001_roughness.jpg',
  });
  // carpet
  const carpetTexture = useTexture({
    aoMap: './Textures/Rug/Rug_001_DISP.jpg',
    map: './Textures/Rug/Rug_001_COLOR.jpg',
    normalMap: './Textures/Rug/Rug_001_NRM.jpg',
    roughnessMap: './Textures/Rug/Rug_001_OCC.jpg',
  });
  const posters = useTexture([
    './Textures/Posters/poster1.jpg',
    './Textures/Posters/poster2.jpg',
    './Textures/Posters/poster3.jpg',
    './Textures/Posters/poster4.jpg',
    './Textures/Posters/poster5.jpg',
  ]);

  return (
    <>
      <BassAmp />
      <GuitarAmp />

      {/* posters */}
      {/* poster left */}
      <mesh
        position={[-4.98, 3.5, 1.5]}
        rotation={[0, angleToRadians(90), angleToRadians(-2)]}
        receiveShadow
      >
        <planeGeometry args={[1.5, 2]} />
        <meshStandardMaterial map={posters[1]} />
      </mesh>
      {/* poster back */}
      <mesh
        position={[1, 3.5, -4.98]}
        rotation={[0, 0, angleToRadians(3)]}
        receiveShadow
      >
        <planeGeometry args={[1.5, 2]} />
        <meshStandardMaterial map={posters[2]} />
      </mesh>
      {/* poster back 2 */}
      <mesh
        position={[-3.5, 3.5, -4.98]}
        rotation={[0, 0, angleToRadians(-3)]}
        receiveShadow
      >
        <planeGeometry args={[1.5, 2]} />
        <meshStandardMaterial map={posters[3]} />
      </mesh>
      {/* poster right */}
      <mesh
        position={[4.98, 3.5, 1.5]}
        rotation={[0, angleToRadians(-90), angleToRadians(3)]}
        receiveShadow
      >
        <planeGeometry args={[1.5, 2]} />
        <meshStandardMaterial map={posters[0]} />
      </mesh>
      {/* poster right 2 */}
      <mesh
        position={[4.98, 3.5, -3]}
        rotation={[0, angleToRadians(-90), angleToRadians(-3)]}
        receiveShadow
      >
        <planeGeometry args={[1.5, 2]} />
        <meshStandardMaterial map={posters[4]} />
      </mesh>

      {/* carpet */}
      <mesh
        position={[0, 0.25, 1.5]}
        rotation={[angleToRadians(-90), 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial {...carpetTexture} />
      </mesh>
      {/* wood floor */}
      <mesh rotation={[angleToRadians(-90), 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial {...floorTexture} />
      </mesh>
      {/* walls */}
      {/* back wall */}
      <mesh position={[0, 2.5, -5]}>
        <planeGeometry args={[10, 5.2]} />
        <meshStandardMaterial {...wallsTexture} />
      </mesh>
      {/* right wall */}
      <mesh position={[5, 2.5, 0]} rotation={[0, angleToRadians(-90), 0]}>
        <planeGeometry args={[10, 5.2]} />
        <meshStandardMaterial {...wallsTexture} />
      </mesh>
      {/* left wall */}
      <mesh position={[-5, 2.5, 0]} rotation={[0, angleToRadians(90), 0]}>
        <planeGeometry args={[10, 5.2]} />
        <meshStandardMaterial {...wallsTexture} />
      </mesh>
    </>
  );
}

export default Room;
