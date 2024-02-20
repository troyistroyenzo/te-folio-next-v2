import { Canvas, useFrame } from '@react-three/fiber';
import { SphereGeometry, BoxGeometry, TorusGeometry, Mesh, Color } from 'three';
import React, { useRef } from 'react';
import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import { chakra, useColorModeValue, extendTheme, Box } from '@chakra-ui/react';
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaTiktok, FaGumro} from 'react-icons/fa';

const customTheme = extendTheme({
  styles: {
    global: {
      '@keyframes glitch': {
        '2%, 64%': { transform: 'translate2d(-2px, 0) skew(0deg)' },
        '4%, 60%': { transform: 'translate2d(4px, 0) skew(0deg)' },
        '6%, 20%': { transform: 'translate2d(-6px, 0) skew(0deg)' },
        '8%, 50%': { transform: 'translate2d(2px, 0) skew(0deg)' },
        '0%, 100%': { transform: 'translate2d(0, 0) skew(0deg)' },
      },
    },
  },
});

function GlitchIcon({ icon, link }) {
  return (
    <chakra.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="70px" // Adjust the size as needed
      h="70px" // Adjust the size as needed
      fontSize="2.5em" // Make the icons bigger
      color="white" // Make icons white
      transition="color 0.3s"
      _hover={{ color: '#C2B498', animation: 'glitch 1s infinite linear' }} // Add glitch effect on hover
    >
      {icon}
    </chakra.a>
  );
}

const Socials= () => {
  const socialIcons = [
    {
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/troyenzo',
    },
    {
      icon: <FaYoutube />,
      link: 'https://www.youtube.com/troyenzo',
    },
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/troyenzo/',
    },
    {
      icon: <FaGithub />,
      link: 'https://github.com/troyistroyenzo',
    },
    {
      icon: <FaTiktok />,
      link: 'https://tiktok.com/@troy.enzo',
    },
    // {
    //   icon: <FaTwitter />,
    //   link: 'https://twitter.com/example',
    // },
    // {
    //   icon: <FaFacebook />,
    //   link: 'https://facebook.com/example',
    // },
  ];

  return (
    <Box maxW="9xl" mx="auto"  px={{ base: 1, sm: 2, md: 8 }}>
        <chakra.div maxW="7xl" mx={'auto'}  px={{ base: 2, sm: 12, md: 17 }} theme={customTheme}>
            <Flex justifyContent="center" flexWrap="nowrap">
                {socialIcons.map((social, index) => (
                <GlitchIcon key={index} icon={social.icon} link={social.link} />
                ))}
            </Flex>
        </chakra.div>
    </Box>
    
  );
}

const WithBackgroundImage = () => {
  return (
    <Flex
        w={'full'}
        h={'100vh'}
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
//  width: '100%',
  return (
    <div style={{ position: 'relative' }}>
      <Canvas
        ref={canvasRef}
        onCreated={({ camera, gl }) => handleResize({ camera, gl })}
        style={{ background: '#000000', height: '250vh',}} 
      >
        <Scene />
      </Canvas>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <WithBackgroundImage />
        </div>
        <div style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Socials />
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