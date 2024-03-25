import { Center, Environment, Float, OrbitControls, Sparkles, Text3D } from '@react-three/drei'
import { GizmoHelper, GizmoViewport } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React from 'react'
import { Model } from './Model';
import { MathUtils } from 'three';

function Sceance() {

  const {viewport} = useThree();//this is use to get the camera and scene and renderer from the context
  const {width, height} = viewport;//this is use to get the width and height of the viewport

  return (
    <>
    
            <pointLight position={[10,10,10]}/>//this use to light the scene from a specific point
            {/* <OrbitControls />//come from drei and use to control the camera */}
            <ambientLight />//this use to light the scene with same intensity from all direction
        {/* <mesh>//this is a 3d object and use to create a 3d object
            
        <boxGeometry  />//this use to create a box
        <meshStandardMaterial color="orange" />//this use to give color to the box
        </mesh> */}
{/* 
<GizmoHelper
  alignment="bottom-right" // widget alignment within scene
  margin={[80, 80]} // widget margins (X, Y)
>
  <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
  
</GizmoHelper> */}

 <Sparkles count={180} size={4} scale={[width,height,10]}/>//this use to create sparkles in the scene
 <Environment preset='city'/>
 {/* <Text3D font={fontUrl} {...textOptions}>
  Hello world!
  <meshNormalMaterial />
</Text3D> */}


{Array.from ({length: 10}).map((item, index) => (
    <Model key={index}

    position={[
        MathUtils.randFloatSpread(width),
        MathUtils.randFloatSpread(height),
        MathUtils.randFloat(-5, 3), 
    ]}

    rotation ={[
        MathUtils.randFloat(0,Math.PI * 2),//this use to rotate the object in x direction
        MathUtils.randInt(0,Math.PI * 2),//use to rotate the object in y direction
        MathUtils.randFloat(0,Math.PI * 2),//use to rotate the object in z direction
    
    ]}

    color = {index % 2 === 0 ? "red" : "blue"}
    
    />
))}



<Float rotation-y={Math.PI/50} position-x={0.5}>

<Center>

<Text3D font={"/poppins_font.json"}>Merry Christmas
<meshStandardMaterial color="gold" 
    envMapIntensity={1}
    roughness={0.2}

/>



</Text3D>
    
</Center>

</Float>


<Center position-y={-1.5}>
<Text3D font={"/poppins_font.json"}>2024
<meshStandardMaterial color="red"
      envMapIntensity={3}
      roughness={0.1}

/>
</Text3D>

</Center>

    
    
    </>
  )
}

export default Sceance