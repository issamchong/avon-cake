/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 Base3.gltf 
Author: funnyeducomics (https://sketchfab.com/funnyeducomics)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/base-3-cc788d7f379e41208d0ebef67d6fa559
Title: Base 3
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Base3(props) {
  const { nodes, materials } = useGLTF('/Base3.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.firstSG} scale={0.4} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

export default Base3;