import * as THREE from "three"
import { useRef } from "react"
import { Clouds, Cloud, Sky as SkyImpl } from "@react-three/drei"

export default function Sky() {
    const ref = useRef();

    return (
        <>
            <SkyImpl />
            <group ref={ref}>
                <Clouds material={THREE.MeshLambertMaterial} limit={400} range={100}>
                    <Cloud concentrate="outside" growth={100} opacity={0.5} seed={0.3} bounds={200} volume={200} />
                </Clouds>
            </group>
        </>
    )
}
