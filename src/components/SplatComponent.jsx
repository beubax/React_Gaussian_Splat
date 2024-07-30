
import { useState, useRef } from "react";
import * as THREE from 'three';
import { Environment, OrbitControls, Splat} from '@react-three/drei'
import {useFrame, Canvas} from '@react-three/fiber'
import { SpotLight } from "three";


const SplatComponent = () => {

    return (
      <>
      <Canvas style={{"position": "absolute", "background-color": "#1a202c"}}>
        <OrbitControls />
      <Splat src={'https://huggingface.co/datasets/Beubax/Splats/resolve/main/head(1).splat'} position={[4, -1.8, 0]} />

      </Canvas>
      
      
      </>



    )
}

export default SplatComponent
