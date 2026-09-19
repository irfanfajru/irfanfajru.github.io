"use client";

import { Environment } from "@react-three/drei";

import { Car } from "./Car";
import { Road } from "./Road";
import { Campsite } from "./Campsite";
import { Signboard } from "./Signboard";

export function World() {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={1} />

            <directionalLight
                position={[10, 20, 10]}
                intensity={3}
                castShadow
            />

            {/* Environment */}
            <Environment preset="forest" />

            {/* Ground / road */}
            <Road />

            {/* Portfolio locations */}
            <Campsite
                position={[0, 0, -20]}
                title="ABOUT"
            />

            <Campsite
                position={[0, 0, -80]}
                title="EXPERIENCE"
            />

            <Campsite
                position={[0, 0, -140]}
                title="SKILLS"
            />

            <Campsite
                position={[0, 0, -200]}
                title="PROJECTS"
            />

            <Campsite
                position={[0, 0, -260]}
                title="CONTACT"
            />

            <Signboard
                position={[5, 2, -20]}
                text="ABOUT ME"
            />

            <Signboard
                position={[5, 2, -80]}
                text="EXPERIENCE"
            />

            <Signboard
                position={[5, 2, -140]}
                text="SKILLS"
            />

            <Signboard
                position={[5, 2, -200]}
                text="PROJECTS"
            />

            <Signboard
                position={[5, 2, -260]}
                text="CONTACT"
            />

            {/* Player */}
            <Car />
        </>
    );
}