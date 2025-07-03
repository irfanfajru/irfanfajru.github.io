import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, useCursor } from '@react-three/drei'
import Sky from '../models/Sky'
import { Suspense, useEffect, useState, useRef } from 'react'
import Loader from '../components/Loader'
import Island from "../models/Island"
import SkyKid from '../models/SkyKid'
import Ray from '../models/Ray'
import JourneyInfo from '../components/JourneyInfo'

export default function Journey() {

    const adjustIslandForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [0.12, 0.12, 0.12];
            screenPosition = [0, -0.5, 0];
        } else {
            screenScale = [0.12, 0.12, 0.12];
            screenPosition = [0, -0.5, 0];
        }

        return [screenScale, screenPosition];
    };

    const adjustSkyKidForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [0.02, 0.02, 0.02];
            screenPosition = [0, 0, 4];
        } else {
            screenScale = [0.02, 0.02, 0.02];
            screenPosition = [0, 0, 4];
        }

        return [screenScale, screenPosition];
    };

    const adjusRayForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [0.5, 0.5, 0.5];
            screenPosition = [0, -1, 0];
        } else {
            screenScale = [0.5, 0.5, 0.5];
            screenPosition = [0, -1, 0];
        }

        return [screenScale, screenPosition];
    };


    const [islandScale, islandPosition] = adjustIslandForScreenSize();
    const [skyKidScale, skyKidPosition] = adjustSkyKidForScreenSize();
    const [rayScale, rayPosition] = adjusRayForScreenSize();
    const [currentStage, setCurrentStage] = useState(null);
    const [onBoard, setOnBoard] = useState(true);

    return <div className='h-screen w-full'>
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            {currentStage && <JourneyInfo currentStage={currentStage} />}
        </div>
        <Canvas
            camera={{ near: 0.1, far: 1000 }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />
                <directionalLight position={[1, 1, 1]} intensity={2} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 5, 10]} intensity={2} />
                <spotLight
                    position={[0, 50, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={2}
                />
                <hemisphereLight
                    skyColor='#b1e1ff'
                    groundColor='#000000'
                    intensity={1}
                />
                <Sky />

                {/* models */}
                <Island
                    position={islandPosition}
                    scale={islandScale}
                />

                <Ray
                    position={rayPosition}
                    scale={rayScale}
                />

                <SkyKid
                    position={skyKidPosition}
                    scale={skyKidScale}
                    rotation={[0, -1.5, 0]}
                    setCurrentStage={setCurrentStage}
                    setOnBoard={setOnBoard}
                    onBoard={onBoard}
                />
            </Suspense>
        </Canvas>
    </div>
}