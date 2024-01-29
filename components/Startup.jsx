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
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const STATISTICS_CONTENT = [
    {
      title: 'Art Pilgrim',
      stat: 'Expressive Art Pieces brought closer to you',
      iconSrc: 'https://cdn.beacons.ai/user_content/yy6chWZC8RM8vwu6vUeAJb7FIp53/referenced_images/535cd742-09c9-45ce-9fcc-36703fa67f8c__link-in-bio__links-block__home__9a178ce8-5d24-42a5-8d59-f5828669923e__86fac12a-8cdc-461c-ba86-e485dee2eda4__1ee33c4d-8cb4-403d-91a1-b7527d4a1ac9.jpg?t=1697721008298',
      link: 'https://your-art-pilgrim-link.com',
    },
    {
      title: 'VeriFi',
      stat: 'Decentralized Ecosystem for streamlining digital assets',
      iconSrc: 'https://cdn.beacons.ai/user_content/yy6chWZC8RM8vwu6vUeAJb7FIp53/referenced_images/b334ae7b-bbd1-4dd0-9f29-0cdc64625ca6__link-in-bio__links-block__home__9a178ce8-5d24-42a5-8d59-f5828669923e__1cd1b946-3009-4f59-9126-e49e7605ed19__9f4e6321-ccdf-4447-a8c4-05ab2f116a1a.jpg?t=1697718861396',
      link: 'https://your-verifi-link.com',
    },
    {
      title: 'Playdex',
      stat: 'Supercharging social web3 gaming',
      iconSrc: 'https://cdn.beacons.ai/user_content/yy6chWZC8RM8vwu6vUeAJb7FIp53/referenced_images/852c7ed4-b8cc-4816-9d93-415e8464e1be__link-in-bio__links-block__home__9a178ce8-5d24-42a5-8d59-f5828669923e__cbce4436-38f5-4834-b84c-593a26534946__956aeeb9-a7d3-49a5-9484-1078d00a58dd.jpg?t=1697719276974',
      link: 'https://your-playdex-link.com',
    },
    {
      title: 'Premio',
      stat: 'Hpercasual gaming - play, win, premio!',
      iconSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686124340/4_ry3m55.png',
      link: 'https://your-premio-link.com',
    },
    {
      title: 'Grohax',
      stat: 'AI-Powered Growth Hacking!',
      iconSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686124340/5_epvch7.png',
      link: 'https://your-grohax-link.com',
    },
  ];
  
  function StatsCard(props) {
    const { title, stat, iconSrc, link } = props;
    return (
      <Link href={link} isExternal>
        <Stat
          px={{ base: 2, md: 8 }}
          py={4}
          shadow="xl"
          border="1px solid"
          borderColor={useColorModeValue('gray.800', 'white')}
          color="white"
          rounded="lg"
          _hover={{ boxShadow: 'md' }}
        >
          <Flex align="start">
            <Box pr={{ base: 2, md: 4 }}>
              <Image src={iconSrc} boxSize="50px" />
            </Box>
            <VStack align="start" spacing={1} pl={{ base: 0, md: 2 }}>
              <StatLabel fontSize="xl" fontWeight="bold" isTruncated>
                {title}
              </StatLabel>
              <StatNumber fontSize="md" fontWeight="medium">
                {stat}
              </StatNumber>
            </VStack>
          </Flex>
        </Stat>
      </Link>
    );
  }
  
  export default function BasicStatistics() {
    return (
      <Box bg="black" maxW="9xl" mx="auto" pt={5} px={{ base: 2, sm: 4, md: 8 }}>
        <chakra.h1 textAlign="center" fontSize="4xl" py={10} fontWeight="bold">
        </chakra.h1>
        <SimpleGrid bg="black" columns={{ base: 2, md: 2 }} spacing={{ base: 5, lg: 2 }}>
          {STATISTICS_CONTENT.map((content, index) => (
            <StatsCard key={index} title={content.title} stat={content.stat} iconSrc={content.iconSrc} link={content.link} />
          ))}
        </SimpleGrid>
      </Box>
    );
  }
  