
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Choco1(props) {
  const { nodes, materials } = useGLTF('/Choco1.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Topping1SG} scale={0.4} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

export default Choco1;