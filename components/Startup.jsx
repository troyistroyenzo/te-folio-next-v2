import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    Image,
    StatLabel,
    StatNumber,
    VStack,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const STATISTICS_CONTENT = [
    {
      title: 'Art Pilgrim',
      stat: 'Expressive Art Pieces',
      iconSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686124340/1_p9idjn.png',
    },
    {
      title: 'VeriFi',
      stat: 'Decentralized Ecosystem for streamlining digital assets',
      iconSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686124340/2_wxpqsy.png',
    },
    {
      title: 'Playdex',
      stat: 'Supercharing social web3 gaming',
      iconSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686124340/3_cqcs3p.png',
    },
    {
      title: 'Premio',
      stat: 'Play, win, premio!',
      iconSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686124340/4_ry3m55.png',
    },
    {
      title: 'Grohax',
      stat: 'AI-Powered Growth Hacking!',
      iconSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686124340/5_epvch7.png',
    },
  ];
  
  function StatsCard(props) {
    const { title, stat, iconSrc } = props;
    return (
        <Stat
          px={{ base: 2, md: 8 }}
          py={'5'}
          shadow={'xl'}
          border={'1px solid'}
          borderColor={useColorModeValue('gray.800', 'white')}
          color={'white '}
          rounded={'lg'}
        >
          <Flex alignItems="center">
            <Box pr={{ base: 2, md: 4 }}>
              <Image src={iconSrc} boxSize="24px" />
            </Box>
            <VStack align="start" spacing={1} pl={{ base: 2, md: 4 }}>
              <StatLabel fontSize={'4xl'} fontWeight={'9xl'} isTruncated>
                {title}
              </StatLabel>
              <StatNumber fontSize={'1xl'} fontWeight={'medium'}>
                {stat}
              </StatNumber>
            </VStack>
          </Flex>
        </Stat>
      );
    }

    
    export default function BasicStatistics() {
      return (
        <Box bg={'black'} maxW="9xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
          </chakra.h1>
          <SimpleGrid bg={'black'} columns={{ base: 1, md: 1 }} spacing={{ base: 5, lg: 2 }}>
            {STATISTICS_CONTENT.map((content, index) => (
              <StatsCard key={index} title={content.title} stat={content.stat} iconSrc={content.iconSrc} />
            ))}
          </SimpleGrid>
        </Box>
      );
    }