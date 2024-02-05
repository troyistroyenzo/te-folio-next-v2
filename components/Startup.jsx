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
      stat: 'Virtual Art gallery bringing expressive art pieces closer to you',
      iconSrc: 'https://cdn.beacons.ai/user_content/yy6chWZC8RM8vwu6vUeAJb7FIp53/referenced_images/535cd742-09c9-45ce-9fcc-36703fa67f8c__link-in-bio__links-block__home__9a178ce8-5d24-42a5-8d59-f5828669923e__86fac12a-8cdc-461c-ba86-e485dee2eda4__1ee33c4d-8cb4-403d-91a1-b7527d4a1ac9.jpg?t=1697721008298',
      link: 'http://artpilgrim.ph/',
      backgroundImage: 'linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)',
    },
    {
      title: 'VeriFi',
      stat: 'A Decentralized Ecosystem for streamlining digital assets',
      iconSrc: 'https://cdn.beacons.ai/user_content/yy6chWZC8RM8vwu6vUeAJb7FIp53/referenced_images/b334ae7b-bbd1-4dd0-9f29-0cdc64625ca6__link-in-bio__links-block__home__9a178ce8-5d24-42a5-8d59-f5828669923e__1cd1b946-3009-4f59-9126-e49e7605ed19__9f4e6321-ccdf-4447-a8c4-05ab2f116a1a.jpg?t=1697718861396',
      link: 'https://verifi-dapp.vercel.app/',
      backgroundImage: 'linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)',
    },
    {
      title: 'Playdex',
      stat: 'A web3 gaming NFT rental marketplace supercharging social web3 gaming communities',
      iconSrc: 'https://cdn.beacons.ai/user_content/yy6chWZC8RM8vwu6vUeAJb7FIp53/referenced_images/852c7ed4-b8cc-4816-9d93-415e8464e1be__link-in-bio__links-block__home__9a178ce8-5d24-42a5-8d59-f5828669923e__cbce4436-38f5-4834-b84c-593a26534946__956aeeb9-a7d3-49a5-9484-1078d00a58dd.jpg?t=1697719276974',
      link: 'https://playdex.io/',
      backgroundImage: 'linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)',
    },
    {
      title: 'Premio',
      stat: 'A hypercasual gaming e-sports gaming app -  play and win prizes!',
      iconSrc: 'https://cdn.beacons.ai/user_content/yy6chWZC8RM8vwu6vUeAJb7FIp53/referenced_images/f21c0aff-6a43-49f6-b59c-4903e2ee0c8d__link-in-bio__links-block__home__9a178ce8-5d24-42a5-8d59-f5828669923e__419ab83a-011d-4e57-b3fc-84b11f3cd37a__c8efd2af-5114-45ae-af14-0224eb179ca8.jpg?t=1697719719847',
      link: 'https://playwinpremio.com/',
      backgroundImage: 'linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)',
    },
    {
      title: 'Grohax',
      stat: 'An AI-Powered Growth Hacking software dedicated to help you finding more users',
      iconSrc: 'https://cdn.beacons.ai/user_content/yy6chWZC8RM8vwu6vUeAJb7FIp53/referenced_images/035ce9e7-44fc-4463-a917-4b7f1e95ad31__link-in-bio__links-block__home__9a178ce8-5d24-42a5-8d59-f5828669923e__28ea739f-f9d1-49bf-a3cd-dd458cca7aad__c98a887b-0211-414e-94ad-9a7b442a10ee.png?t=1690341116618',
      link: 'https://grohax.pro/',
      backgroundImage: 'linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)',
    },
  ];
  
  function StatsCard(props) {
    const { title, stat, iconSrc, link } = props;
    return (
      <Link href={link} isExternal>
        <Stat
          px={{ base: 2, md: 8 }}
          py={7}
          shadow="xl"
          border="1px solid"
          borderColor={useColorModeValue('gray.800', 'white')}
          rounded="lg"
          _hover={{ boxShadow: 'md' }}
        >
          <Flex align="start">
          <Box minW={'20vw'}pr={{ base: 2, md: 18 }}>
            <Image src={iconSrc} alt={title} boxSize="15vw" objectFit="cover"/>
          </Box>
            <VStack align="start" spacing={1} pl={{ base: 0, md: 2 }}>
              <StatLabel color="white" fontSize="xl" fontWeight="bold" isTruncated>
                {title}
              </StatLabel>
              <StatNumber color="#C2B498" fontSize="md" fontWeight="medium">
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
      <Box bg="black" maxW="9xl" mx="auto" pt={5} px={{ base: 1, sm: 4, md: 8 }}>
        <chakra.h1 textAlign="center" fontSize="4xl" py={10} fontWeight="bold">
        </chakra.h1>
        <SimpleGrid bg="black" columns={{ base: 1, md: 1 }} spacing={{ base: 5, lg: 2 }}>
          {STATISTICS_CONTENT.map((content, index) => (
            <StatsCard key={index} title={content.title} stat={content.stat} iconSrc={content.iconSrc} link={content.link} backgroundImage={'red'} />
          ))}
        </SimpleGrid>
      </Box>
    );
  }
  