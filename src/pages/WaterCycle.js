import React, { Suspense, useRef, useState } from "react"
import { Link } from "react-router-dom"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls, useAnimations } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
    current: null,
})

function Model({ ...props }) {

    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/water_cycle_animated/scene.gltf')
    const { actions } = useAnimations(animations, group)
    const [hovered, set] = useState(null)
    console.log(hovered)
    return (
        <group ref={group} {...props} dispose={null}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <group scale={14.28}>
                            <group rotation={[Math.PI / 2, 0, 0]}>
                                <group scale={0.01}>
                                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                                    <skinnedMesh
                                        geometry={nodes.mesh_0.geometry}
                                        material={materials.material_0}
                                        skeleton={nodes.mesh_0.skeleton}
                                    />
                                    <skinnedMesh
                                        geometry={nodes.mesh_1.geometry}
                                        material={materials.material_1}
                                        skeleton={nodes.mesh_1.skeleton}
                                    />
                                    <skinnedMesh
                                        geometry={nodes.mesh_2.geometry}
                                        material={materials.material_2}
                                        skeleton={nodes.mesh_2.skeleton}
                                    />
                                    <skinnedMesh
                                        geometry={nodes.mesh_3.geometry}
                                        material={materials.material_3}
                                        skeleton={nodes.mesh_3.skeleton}
                                    />
                                    <skinnedMesh
                                        geometry={nodes.mesh_4.geometry}
                                        material={materials.material_4}
                                        skeleton={nodes.mesh_4.skeleton}
                                    />
                                    <skinnedMesh
                                        geometry={nodes.mesh_5.geometry}
                                        material={materials.material_5}
                                        skeleton={nodes.mesh_5.skeleton}
                                    />
                                    <skinnedMesh
                                        geometry={nodes.mesh_6.geometry}
                                        material={materials.material_6}
                                        skeleton={nodes.mesh_6.skeleton}
                                    />
                                    <skinnedMesh
                                        geometry={nodes.mesh_7.geometry}
                                        material={materials.material_7}
                                        skeleton={nodes.mesh_7.skeleton}
                                    />
                                    <skinnedMesh
                                        geometry={nodes.mesh_8.geometry}
                                        material={materials.material_8}
                                        skeleton={nodes.mesh_8.skeleton}
                                    />
                                    <skinnedMesh
                                        geometry={nodes.mesh_9.geometry}
                                        material={materials.material_9}
                                        skeleton={nodes.mesh_9.skeleton}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    // if (snap.current === "Material") {
    //     return (
    //         <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
    //             <h1 className="text-3xl uppercase">Oxygen</h1>
    //         </div>
    //     )
    // }
    // else if (snap.current === "Material.002 ") {
    //     return (
    //         <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
    //             <h1 className="text-3xl uppercase">Hydrogen</h1>
    //         </div>
    //     )
    // }
    // else if (snap.current === "Material.001") {
    //     return (
    //         <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
    //             <h1 className="text-3xl uppercase">Carbon</h1>
    //         </div>
    //     )
    // }
    // else {
    //     return (
    //         <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
    //             <h1 className="text-2xl tracking-wider">Click on diffrent parts of Glucose molecule to know more</h1>
    //             <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

    //             <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
    //                 <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echoar.xyz/wispy-violet-4999/5ce969cd-670d-4635-b131-1495ab10c521" alt="Molecule QR" />
    //                 <a href="https://go.echoar.xyz/2Rx9" target="_blank" rel="noreferrer">
    //                     <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
    //                 </a>
    //             </div>
    //         </div>
    //     )
    // }
    return (
        <div>
            {snap.current}
        </div>
    )
}

export default function WaterCycle() {
    return (
        <>
            <div className="pt-8 text-white">

                <Link to="/explore" className="ml-8">Go Back</Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                        Water Cycle
                    </h1>
                    <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
                    <div className="font-fontVollkorn text-justify text-xl w-86 mt-2 mx-4 md:mx-44">The water cycle shows the continuous movement of water within the Earth and atmosphere. It is a complex system that includes many different processes. Liquid water evaporates into water vapor, condenses to form clouds, and precipitates back to earth in the form of rain and snow.. This work is based on "Water Cycle (Animated)" (https://sketchfab.com/3d-models/water-cycle-animated-203e16058fa94e618829447db71ddba4) by Clement (https://sketchfab.com/clement.abai) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</div>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model scale={0.6} />
                                <Environment preset="city" />
                                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                            </Suspense>
                            <OrbitControls autoRotate />
                        </Canvas>
                    </div>

                    <div className="mt-16 md:mt-0 md:col-span-1 p-4">
                        <Details />
                    </div>

                </div>

            </div>

        </>
    )
}
