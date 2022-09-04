import React, { useEffect, useRef, useState } from 'react';
import { angleToRadians } from '../utils/angle';
import { Howl, Howler } from 'howler';
import { Html } from '@react-three/drei';

function HitBoxes({ displaydPad, setDisplayedPad }) {
  const [rideHit, setRideHit] = useState(0);
  const [crashHit, setCrashHit] = useState(0);
  const [hihatHit, setHihatHit] = useState(0);
  const [snareHit, setSnareHit] = useState(0);
  const [floorHit, setFloorHit] = useState(0);
  const [tom1Hit, setTom1Hit] = useState(0);
  const [tom2Hit, setTom2Hit] = useState(0);
  const [bassHit, setBassHit] = useState(0);
  const [sticksHit, setSticksHit] = useState(0);

  const [SoundsBank, setSoundBank] = useState({
    ride: ['./Audio/Kit1/Ride.mp3'],
    crash: ['./Audio/Kit1/Crash.mp3'],
    hihat: ['./Audio/Kit1/Hihat.mp3'],
    floor: ['./Audio/Kit1/Floor.mp3'],
    tom2: ['./Audio/Kit1/Tom2.mp3'],
    tom1: ['./Audio/Kit1/Tom1.mp3'],
    prec: ['./Audio/Kit1/Heater-1.mp3'],
    bass: ['./Audio/Kit1/BassDrum.mp3'],
    snare: ['./Audio/Kit1/SnareDrum.mp3'],
  });

  useEffect(() => {}, []);

  useEffect(() => {
    document.addEventListener('keydown', pressKey, true);
    document.addEventListener('keyup', releseKey, true);
  }, []);

  // -- Keys control --
  // press key
  const pressKey = (e) => {
    if (e.key == 'q') {
      playRide();
      setRideHit(0.3);
      setDisplayedPad('Ride');
    }
    if (e.key == 'w') {
      playCrash();
      setCrashHit(0.3);
      setDisplayedPad('Crash');
    }
    if (e.key == 'e') {
      playHihat();
      setHihatHit(0.3);
      setDisplayedPad('Hi Hat');
    }
    if (e.key == 'a') {
      playFloor();
      setFloorHit(0.3);
      setDisplayedPad('Floor Tom');
    }
    if (e.key == 's') {
      playTom2();
      setTom2Hit(0.3);
      setDisplayedPad('Tom 2');
    }
    if (e.key == 'd') {
      playTom1();
      setTom1Hit(0.3);
      setDisplayedPad('Tom 1');
    }
    if (e.key == 'z') {
      playPrec();
      setSticksHit(0.3);
      setDisplayedPad('Percussion');
    }
    if (e.key == 'x') {
      playBass();
      setBassHit(0.3);
      setDisplayedPad('Kick Drum');
    }
    if (e.key == 'c') {
      playSnare();
      setSnareHit(0.3);
      setDisplayedPad('Snare Drum');
    }
  };
  // relese key
  const releseKey = (e) => {
    if (e.key == 'q') {
      setRideHit(0);
    }
    if (e.key == 'w') {
      setCrashHit(0);
    }
    if (e.key == 'e') {
      setHihatHit(0);
    }
    if (e.key == 'a') {
      setFloorHit(0);
    }
    if (e.key == 's') {
      setTom2Hit(0);
    }
    if (e.key == 'd') {
      setTom1Hit(0);
    }
    if (e.key == 'z') {
      setSticksHit(0);
    }
    if (e.key == 'x') {
      setBassHit(0);
    }
    if (e.key == 'c') {
      setSnareHit(0);
    }
  };

  // -- end of key control --

  // -- Sounds --
  const playRide = () => {
    let sound = new Howl({
      src: SoundsBank.ride,
      volume: 0.5,
    });
    sound.play();
  };
  const playCrash = () => {
    let sound = new Howl({
      src: SoundsBank.crash,
      volume: 0.4,
    });
    sound.play();
  };
  const playHihat = () => {
    let sound = new Howl({
      src: SoundsBank.hihat,
      volume: 0.5,
    });
    sound.play();
  };
  const playFloor = () => {
    let sound = new Howl({
      src: SoundsBank.floor,
    });
    sound.play();
  };
  const playTom2 = () => {
    let sound = new Howl({
      src: SoundsBank.tom2,
    });
    sound.play();
  };
  const playTom1 = () => {
    let sound = new Howl({
      src: SoundsBank.tom1,
    });
    sound.play();
  };
  const playPrec = () => {
    let sound = new Howl({
      src: SoundsBank.prec,
      volume: 0.5,
    });
    sound.play();
  };
  const playBass = () => {
    let sound = new Howl({
      src: SoundsBank.bass,
    });
    sound.play();
  };
  const playSnare = () => {
    let sound = new Howl({
      src: SoundsBank.snare,
    });
    sound.play();
  };

  // -- end ob sounds --

  return (
    <>
      {/* cymbals */}
      {/* ride cymbal */}
      <mesh
        position={[-1.73, 3.258, 1.03]}
        rotation={[angleToRadians(-63.6), angleToRadians(16.5), 0]}
        onPointerDown={() => {
          setRideHit(0.3);
          playRide();
          setDisplayedPad('Ride');
        }}
        onPointerUp={() => {
          setRideHit(0);
        }}
      >
        <Html>
          <div
            className="label drum-pad"
            id="Q"
            onClick={() => {
              playRide();
              setDisplayedPad('Ride');
            }}
          >
            <label>Q</label>
          </div>
        </Html>
        <circleGeometry args={[0.94, 40]} />
        <meshDepthMaterial transparent opacity={rideHit} />
      </mesh>

      {/* crash cymbal */}
      <mesh
        position={[1.27, 3.6, 0.71]}
        rotation={[angleToRadians(-72.5), angleToRadians(-23.5), 0]}
        onPointerDown={() => {
          setCrashHit(0.3);
          playCrash();
          setDisplayedPad('Crash');
        }}
        onPointerUp={() => {
          setCrashHit(0);
        }}
      >
        <Html>
          <div
            className="label drum-pad"
            id="W"
            onClick={() => {
              playCrash();
              setDisplayedPad('Crash');
            }}
          >
            <label>W</label>
          </div>
        </Html>
        <circleGeometry args={[0.59, 40]} />
        <meshDepthMaterial transparent opacity={crashHit} />
      </mesh>
      {/* hai hat cymbal */}
      <mesh
        position={[1.57, 2.52, 2.09]}
        rotation={[angleToRadians(-90), angleToRadians(0), 0]}
        onPointerDown={() => {
          setHihatHit(0.3);
          playHihat();
          setDisplayedPad('Hi Hat');
        }}
        onPointerUp={() => {
          setHihatHit(0);
        }}
      >
        <Html>
          <div
            className="label drum-pad"
            id="E"
            onClick={() => {
              playHihat();
              setDisplayedPad('Hi Hat');
            }}
          >
            <label>E</label>
          </div>
        </Html>
        <circleGeometry args={[0.64, 40]} />
        <meshDepthMaterial transparent opacity={hihatHit} />
      </mesh>
      {/* drum heades */}
      {/* floor drum */}
      <mesh
        position={[-1.14, 1.78, 2.18]}
        rotation={[angleToRadians(-90), 0, 0]}
        onPointerDown={() => {
          setFloorHit(0.3);
          playFloor();
          setDisplayedPad('Floor Tom');
        }}
        onPointerUp={() => {
          setFloorHit(0);
        }}
      >
        <Html>
          <div
            className="label drum-pad"
            id="A"
            onClick={() => {
              playFloor();
              setDisplayedPad('Floor Tom');
            }}
          >
            <label>A</label>
          </div>
        </Html>
        <circleGeometry args={[0.51, 40]} />
        <meshDepthMaterial transparent opacity={floorHit} />
      </mesh>
      {/* tom 2 drum */}
      <mesh
        position={[-0.69, 2.67, 1.02]}
        rotation={[angleToRadians(-90), 0, 0]}
        onPointerDown={() => {
          setTom2Hit(0.3);
          playTom2();
          setDisplayedPad('Tom 2');
        }}
        onPointerUp={() => {
          setTom2Hit(0);
        }}
      >
        <Html>
          <div
            className="label drum-pad"
            id="S"
            onClick={() => {
              playTom2();
              setDisplayedPad('Tom 2');
            }}
          >
            <label>S</label>
          </div>
        </Html>
        <circleGeometry args={[0.42, 40]} />
        <meshDepthMaterial transparent opacity={tom2Hit} />
      </mesh>
      {/* tom 1 drum */}
      <mesh
        position={[0.36, 2.83, 1]}
        rotation={[angleToRadians(-90), 0, 0]}
        onPointerDown={() => {
          setTom1Hit(0.3);
          playTom1();
          setDisplayedPad('Tom 1');
        }}
        onPointerUp={() => {
          setTom1Hit(0);
        }}
      >
        <Html>
          <div
            className="label drum-pad"
            id="D"
            onClick={() => {
              playTom1();
              setDisplayedPad('Tom 1');
            }}
          >
            <label>D</label>
          </div>
        </Html>
        <circleGeometry args={[0.4, 40]} />
        <meshDepthMaterial transparent opacity={tom1Hit} />
      </mesh>
      {/* snare drum */}
      <mesh
        position={[0.61, 1.88, 2.58]}
        rotation={[angleToRadians(-84), 0, 0]}
        onPointerDown={() => {
          setSnareHit(0.3);
          playSnare();
          setDisplayedPad('Snare Drum ');
        }}
        onPointerUp={() => {
          setSnareHit(0);
        }}
      >
        <Html>
          <div
            className="label drum-pad"
            id="Z"
            onClick={() => {
              playSnare();
              setDisplayedPad('Snare Drum ');
            }}
          >
            <label>Z</label>
          </div>
        </Html>
        <circleGeometry args={[0.46, 40]} />
        <meshDepthMaterial transparent opacity={snareHit} />
      </mesh>
      {/* bass drum */}
      <mesh
        position={[-0.1, 1.15, 1.6]}
        rotation={[0, 0, 0]}
        onPointerDown={() => {
          setBassHit(0.3);
          playBass();
          setDisplayedPad('Kick Drum');
        }}
        onPointerUp={() => {
          setBassHit(0);
        }}
      >
        <Html>
          <div
            className="label drum-pad"
            id="X"
            onClick={() => {
              playBass();
              setDisplayedPad('Kick Drum');
            }}
          >
            <label>X</label>
          </div>
        </Html>
        <circleGeometry args={[0.8, 40]} />
        <meshDepthMaterial transparent opacity={bassHit} />
      </mesh>
      {/* sticks */}
      <mesh
        position={[-0.93, 1.28, 2.75]}
        rotation={[0, angleToRadians(18), 0]}
        onPointerDown={() => {
          setSticksHit(0.3);
          playPrec();
          setDisplayedPad('Percussion');
        }}
        onPointerUp={() => {
          setSticksHit(0);
        }}
      >
        <Html>
          <div
            className="label drum-pad"
            id="C"
            onClick={() => {
              playPrec();
              setDisplayedPad('Percussion');
            }}
          >
            <label>C</label>
          </div>
        </Html>
        <planeGeometry args={[0.65, 1]} />
        <meshDepthMaterial transparent opacity={sticksHit} />
      </mesh>
    </>
  );
}

export default HitBoxes;
