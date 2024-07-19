
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Base1(props) {
  const { nodes, materials } = useGLTF('/Base1.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.firstSG} scale={0.4} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

export default Base1;