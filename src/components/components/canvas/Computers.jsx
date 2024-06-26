import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { useRef } from 'react';

const Computers = ({ isMobile }) => {
 const computer = useGLTF('./public/desktop_pc/scene.gltf');
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

 const mobileLightIntensity = 1.0; // Adjust for desired intensity on mobile
 const mobileShadowMapSize = 512; // Adjust shadow quality for mobile

 return (
  <>
   <mesh>
    <hemisphereLight intensity={isMobile ? mobileLightIntensity : 2.55} groundColor="black" />
    {isMobile ? null : <pointLight intensity={1} />} {/* Disable pointLight on mobile */}
    <spotLight
     position={[-20, 50, 10]}
     angle={0.12}
     penumbra={1}
     intensity={isMobile ? mobileLightIntensity : 1} // Adjust intensity on mobile
     castShadow={!isMobile} // Disable shadows on mobile
     shadow-mapSize={isMobile ? mobileShadowMapSize : 1024} // Reduce shadow quality on mobile
    />
    <primitive object={computer.scene}
     scale={isMobile ? 0.68 : 1.05}
     position={isMobile ? [-3.62, -5.2, -2.2] : [0, -6.25, -1.5]} 
    rotation={[-0.01, -0.2, -0.1]} />
   </mesh>
  </>
 );
};

const ComputersCanvas = () => {
 const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
  const mediaQuery = window.matchMedia('(max-width: 500px)');

  setIsMobile(mediaQuery.matches);
  const handleMediaQueryChange = (event) => {
   setIsMobile(event.matches);
  };
  mediaQuery.addEventListener('change', handleMediaQueryChange);
  return () => {
   mediaQuery.removeEventListener('change', handleMediaQueryChange);
  };
 }, []);

 return (
  <>
   <Canvas
    frameLoop="demand"
    shadows={!isMobile} // Disable shadows entirely on mobile
    camera={{ position: [20, 3, 5], fov: 50 }}
    gl={{ preserveDrawingBuffer: true }}
   >
    <Suspense fallback={<CanvasLoader />}>
     <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
     <Computers isMobile={isMobile} />
    </Suspense>
    <Preload all />
   </Canvas>
  </>
 );
};

export default ComputersCanvas;
