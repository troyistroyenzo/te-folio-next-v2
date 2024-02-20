import { Canvas, useFrame } from '@react-three/fiber';
import { SphereGeometry, BoxGeometry, TorusGeometry, Mesh, Color } from 'three';
import React, { useRef } from 'react';
import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'


const WithBackgroundImage = () => {
  return (
    <Flex
        w={'full'}
        h={'90vh'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
        <Stack maxW={'full'} align={'flex-start'} spacing={5}>
          <Text
            color={'#C2B498'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            Hi 👋 I am Troy
          </Text>
          <Text
            color={'white'}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '2xl', md: '4xl' })}
          >
            I build startups, I venture into different projects and I create meaningful content.
          </Text>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '2xl', md: '4xl' })}
          >
            I created this website to explain the different things I do.
          </Text>
          <Stack direction={'row'}>
            <a href="https://yatjbdeqemy.typeform.com/to/CRiUwSeP">
              <Button
                size={'lg'}
                color={'black'}
                bg={'white'}
                fontWeight={650}
                px={6}
                colorScheme={'purple'}
                _hover={{ bg: 'linear-gradient(78deg, rgba(159, 122, 234, 1) 0%, rgb(255, 97, 218) 50%)' }}
              >
                {/* leftIcon={<PlayIcon h={4} w={4} color={'gray.00'} />}  */}
                Contact Me 📩
              </Button>
            </a>

            <a href="https://1979823900472.gumroad.com/">
              <Button
                size={'lg'}
                fontWeight={650}
                px={6}
                color={'black'}
                bg={'white'}
                _hover={{ bg: 'linear-gradient(78deg, rgba(159, 122, 234, 1) 0%, rgb(255, 97, 218) 50%)' }}
              >
                {/* leftIcon={<PlayIcon h={4} w={4} color={'gray.00'} />}  */}
                Products ⚙️
              </Button>
            </a>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

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
        <dodecahedronGeometry args={[0.5, 10]} />
        <meshBasicMaterial color={0x8fffff} wireframe />
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
    <div style={{ position: 'relative' }}>
      <Canvas
        ref={canvasRef}
        onCreated={({ camera, gl }) => handleResize({ camera, gl })}
        style={{ background: '#000000' }} // width: '100%', height: '140vh',
      >
        <Scene />
      </Canvas>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <WithBackgroundImage />
        </div>
    </div>
    
  );
};

const handleResize = ({ camera, gl }) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  gl.setSize(window.innerWidth, window.innerHeight);
};

export default ThreeScene;