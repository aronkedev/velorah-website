"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, MeshTransmissionMaterial, PresentationControls, Float } from "@react-three/drei"
import { useRef } from "react"
import { Mesh } from "three"

function GlassObject() {
  const meshRef = useRef<Mesh>(null)

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.06}
          anisotropy={0.3}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          ior={1.5}
          color="#ffffff"
          resolution={1024}
        />
      </mesh>
    </Float>
  )
}

export function WowViewer() {
  return (
    <div className="w-full h-[600px] lg:h-[800px] relative cursor-grab active:cursor-grabbing">
      {/* Background glow gradient for the glass refraction to interact with */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl rounded-full" style={{ transform: "scale(0.8)" }} />
      
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        
        {/* Environment preset provides the reflections on the glass */}
        <Environment preset="city" />
        
        <PresentationControls 
          global 
          rotation={[0.13, 0.1, 0]} 
          polar={[-0.4, 0.2]} 
          azimuth={[-1, 0.75]} 
        >
          <GlassObject />
        </PresentationControls>
      </Canvas>
    </div>
  )
}
