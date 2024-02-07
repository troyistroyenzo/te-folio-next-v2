import { Canvas, useFrame } from '@react-three/fiber';
import { SphereGeometry, BoxGeometry, TorusGeometry, Mesh, Color } from 'three';
import React, { useRef } from 'react';


const Scene = () => {
  
  useFrame(({ clock, camera, scene }) => {
    const time = clock.getElapsedTime();

    scene.children.forEach((child) => {
      if (child instanceof Mesh) {
        const position = child.position;

        // Smooth wave-like movements
        const waveFactorX = Math.sin(position.x + time * 0.5);
        const waveFactorY = Math.cos(position.y + time * 0.5);

        position.z = (waveFactorX + waveFactorY) * 2; // Adjust the factor for the wave height
      }
    });

    // Bounce against the frame's corners
    scene.children.forEach((child) => {
      if (child instanceof Mesh) {
        const position = child.position;

        if (position.x > 10 || position.x < -10) {
          position.x = Math.sign(position.x) * 10;
        }

        if (position.y > 10 || position.y < -10) {
          position.y = Math.sign(position.y) * 10;
        }
      }
    });

    // Rotation animations
    scene.getObjectByName('box').rotation.x += 0.0013;
    scene.getObjectByName('box').rotation.y += 0.0012;
    scene.getObjectByName('sphere').rotation.x -= 0.00013;
    scene.getObjectByName('sphere').rotation.y -= 0.00014;
    scene.getObjectByName('torus').rotation.y -= 0.001;

    // Camera animation
    // camera.position.z = time * 0.1;
  });

  return (
    <>
      <mesh name="box" position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <dodecahedronGeometry args={[0.5, 1]} />
        <meshBasicMaterial color={0x8fffff} wireframe/>
      </mesh>
      <mesh name="sphere" position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <dodecahedronGeometry args={[4, 2, 8]} />
        <meshBasicMaterial color={0xC2B498} wireframe />
      </mesh>
      <mesh name="torus" position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[3, 1, 16, 50]} />
        <meshBasicMaterial color={0xC2B498} wireframe />
      </mesh>
    </>
  );
};

const ThreeScene = () => {
  const canvasRef = useRef();
  return (
    <Canvas
    ref={canvasRef}
      onCreated={({ camera, gl }) => handleResize({ camera, gl })}
      // camera={{ position: [0, 0, 15], near: 0.0011, far: 10000 }}
      style={{  background: '#000000'}}  // width: '100%', height: '140vh',
    >
      <Scene />
    </Canvas>
  );
};


const handleResize = ({ camera, gl }) => {
  camera.aspect = (window.innerWidth / window.innerHeight);
  camera.updateProjectionMatrix();
  gl.setSize(window.innerWidth, window.innerHeight);
};

export default ThreeScene;



// import { useRef, useEffect } from 'react'
// import * as THREE from 'three'
// import images from '../js/images';

// export default function ThreeScene() {
//   const canvasRef = useRef()
//   const containerRef = useRef();

//   useEffect(() => {
//     // Scene setup
//     const container = containerRef.current;
//     const scene = new THREE.Scene();
//     const loader = new THREE.TextureLoader();
//     const color = new THREE.Color();
//     scene.background = new THREE.Color(0x000000)

//     // Camera
//     const camera = new THREE.PerspectiveCamera(
//         100,
//         window.innerWidth / window.innerHeight,
//         0.2,
//         1300
//       );
//     camera.position.z = 4

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({canvas: canvasRef.current})
//     renderer.setSize(window.innerWidth, window.innerHeight)

//     // Resize handler
//     const handleResize = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight)
//       camera.aspect = window.innerWidth / window.innerHeight
//       camera.updateProjectionMatrix()
//     }
    
//     // Responsiveness
//     window.addEventListener('resize', onResize, false); 

//     function onResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);  
//     }

//     // Mesh
//     const geometry = new THREE.BoxGeometry()
//     const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
    

//      // Shapes
//      const flatSphere = new THREE.SphereGeometry(12, 52, 16);
//      const sphereOnly = new THREE.SphereGeometry(4, 22, 8);

//      // Textures
//      const whiteLiquidMarble = new THREE.MeshBasicMaterial({
//         wireframe: true,
//         color: 0xffffff // teal
//       });
  
//       const redMarble = new THREE.MeshBasicMaterial({
//         wireframe: true, 
//         color: 0xffffff  // teal
//       });

//     // Objects
//     const mainWebObject = new THREE.Mesh(flatSphere, whiteLiquidMarble);
//     const giantSphere = new THREE.Mesh(sphereOnly, redMarble);

//     // Add Object to scene
//     scene.add(mainWebObject);
//     scene.add(giantSphere);

    

//     const count = flatSphere.attributes.position.count;
//     const clock = new THREE.Clock();

//     function animate() {
//         moveObjectOne();
//         render();
//       }
  

//     function moveObjectOne() {
//         const time = clock.getElapsedTime();
//         for (let i = 0; i < count; i++) {
//           const x = flatSphere.attributes.position.getX(i);
//           const y = flatSphere.attributes.position.getY(i);
//           const x2 = sphereOnly.attributes.position.getX(i);
//           const y2 = sphereOnly.attributes.position.getY(i);
  
//           // Animations
//           const anim1 = 0.75 * Math.sin(x * 2 + time * 0.4);
//           const anim2 = 0.25 * Math.sin(x + time * 0.3);
//           const anim3 = 0.01 * Math.sin(y * 15 + time * 0.5);
  
//           const anim5 = 0.55 * Math.sin(x * 32 + time * 0.4);
//           const anim6 = 0.15 * Math.sin(x + time * 0.3);
//           const anim7 = 0.01 * Math.sin(y * 2 + time * 0.5);
  
//           flatSphere.attributes.position.setZ(i, anim1 + anim2 + anim3);
//           flatSphere.attributes.position.needsUpdate = true;
  
//           sphereOnly.attributes.position.setZ(i, anim5 + anim6 + anim7);
//           sphereOnly.attributes.position.needsUpdate = true;
//           camera.position.z = time * 0.1;
//         }
  
//         mainWebObject.rotation.x += 0.0013;
//         mainWebObject.rotation.y += 0.0012;
//         giantSphere.rotation.x -= 0.00013;
//         giantSphere.rotation.y -= 0.00014;
//         requestAnimationFrame(animate);
//       }
      
//       function render() {
//         renderer.render(scene, camera);
//       }

//     animate()

//     return () => {
//       // Clean up
//       cancelAnimationFrame(animate)
//       renderer.dispose()
//       window.removeEventListener('resize', handleResize) 
//     }

//   }, [])

//   return (
//     <canvas ref={canvasRef} />
//   )
// }