import { useState, Suspense } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import Three from './components/Three';
import Logo from './components/Logo';
import Controlls from './components/Controlls';
import Loading from './components/Loading';
import { Html } from '@react-three/drei';
import About from './components/About';

function App() {
  const [displaydPad, setDisplayedPad] = useState('Please hit a drum');
  return (
    <>
      <main id="drum-machine">
        <Suspense fallback={<Loading />}>
          <Logo />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <About />
          <Canvas shadows={true}>
            <Three
              displaydPad={displaydPad}
              setDisplayedPad={setDisplayedPad}
            ></Three>
          </Canvas>
          <Controlls
            displaydPad={displaydPad}
            setDisplayedPad={setDisplayedPad}
          />
        </Suspense>
      </main>
    </>
  );
}

export default App;
