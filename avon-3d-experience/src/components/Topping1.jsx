/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 Topping1.gltf 
Author: funnyeducomics (https://sketchfab.com/funnyeducomics)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/topping-centered-4f69640028d845879713e554982e5ec2
Title: Topping-centered
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Topping1(props) {
  const { nodes, materials } = useGLTF('/Topping1.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.plateblinn4SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.plateblinn4SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.plateblinn4SG} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.plateblinn6SG} />
      </group>
    </group>
  )
}
export default Topping1;
