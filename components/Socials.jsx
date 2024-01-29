import React from 'react';
import { Flex, chakra, useColorModeValue, extendTheme, Box } from '@chakra-ui/react';
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

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

export default function BasicStatistics() {
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
    <Box bg="black" maxW="9xl" mx="auto" pt={5} px={{ base: 1, sm: 4, md: 8 }}>
        <chakra.div maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} bg={'black'} theme={customTheme}>
            <Flex justifyContent="center" flexWrap="wrap">
                {socialIcons.map((social, index) => (
                <GlitchIcon key={index} icon={social.icon} link={social.link} />
                ))}
            </Flex>
        </chakra.div>
    </Box>
    
  );
}
