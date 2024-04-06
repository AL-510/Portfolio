import {Suspense, useState, useEffect} from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { useRef } from 'react';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./public/desktop_pc/scene.gltf')
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
    <mesh>
      <hemisphereLight intensity={1.55} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}/>
      <primitive object={computer.scene}
      scale={isMobile ? 1.35 : 1.05}
      position={isMobile ? [0, -6, -2.2] : [0, -6.25, -1.5]}/>
      rotation={[-0.01, -0.2, -0.1]}
    </mesh>
    </>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  return (
    <>
    <Canvas
    frameLoop="demand"
    shadows
    camera={{position: [20, 3, 5], fov: 50}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}/>
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
    </>
  )
}

export default  ComputersCanvas
