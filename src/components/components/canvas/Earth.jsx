import {Suspense, useRef, useEffect} from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'


const getScale = () => {
  // Check if the screen is full screen
  const isFullScreen = document.fullscreenElement !== null;

  return isFullScreen ? 3 : 2; // Use desired scales for full screen and non-full screen
};

const Earth = () => {

  const earth = useGLTF('./public/a_windy_day/scene.gltf')
  const geometryRef = useRef(null);
  const materialRef = useRef(null);
  useEffect(() => {
    return () => {
      if (geometryRef.current) {
        geometryRef.current.dispose();
      }
      if (materialRef.current) {
        materialRef.current.dispose();
      }
    };
  }, []);
  return (
    <>
    <primitive
    object={earth.scene}
    scale={getScale()}
    position-y={0}
    rotation-y={0}
    />
    </>
  )
}

const EarthCanvas = () => {
  return (
    <>
    <Canvas
    shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6]
    }}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}/>

        <Earth/>
      </Suspense>
    </Canvas>
    </>
  )
}

export default EarthCanvas