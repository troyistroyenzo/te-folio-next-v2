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
    Heading,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const STATISTICS_CONTENT = [
    {
      title: 'Root & Grounds',
      stat: 'A coffee shop providing fresh produce of coffee beans and healthy products',
      iconSrc: 'https://rootandgrounds.co/_next/static/media/redlogo.24765268.svg',
      link: 'https://root-grounds.vercel.app/',
      bg: 'linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)',
    },
    {
      title: 'Art Pilgrim',
      stat: 'A virtual Art gallery bringing expressive art pieces closer to you',
      iconSrc: 'https://framerusercontent.com/images/cli2a4JNDK7KK6xTd6suQHw29RI.png',
      link: 'http://artpilgrim.ph/',
      bg: 'red',
    },
    
    {
      title: 'Playdex',
      stat: 'A web3 gaming NFT rental marketplace supercharging social web3 gaming communities',
      iconSrc: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMTQwIDM2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNTYuNDAwMSAxNi42Nzc2QzU2LjQwMDEgMTguNTE3IDU0LjkyOTcgMjAuMDExNyA1My4xMjAzIDIwLjAxMTdINDYuMzcwNVYyMi4zNjMzSDQ0LjA1NzJWMTMuMzQzNEg1My4xMjAzQzU0LjkyOTcgMTMuMzQzNCA1Ni40MDAxIDE0Ljg0MTQgNTYuNDAwMSAxNi42Nzc2Wk01NC4wODY4IDE2LjY3NzZDNTQuMDg2OCAxNi4xMzY0IDUzLjY1MjcgMTUuNjk4MyA1My4xMjM1IDE1LjY5ODNINDYuMzcwNVYxNy42NjAxSDUzLjEyMDNDNTMuNjUyNyAxNy42NTY5IDU0LjA4NjggMTcuMjE4OCA1NC4wODY4IDE2LjY3NzZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNjguODY1NiAyMC4wMTE3VjIyLjM2MzNINTcuMjkyN1YxMy4zNDM0SDU5LjYwNlYyMC4wMDg1SDY4Ljg2NTZWMjAuMDExN1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik03OS41NjI5IDIwLjAxMTdINzMuMDcyOUw3Mi4yNjggMjIuMzYzM0g2OS43NjE0TDcyLjg0NzkgMTMuMzQzNEg3OS43OTExTDgyLjg3NzYgMjIuMzYzM0g4MC4zNzFMNzkuNTYyOSAyMC4wMTE3Wk03OC43NTggMTcuNjU2OUw3OC4wODYyIDE1LjY5NUg3NC41NDk3TDczLjg3NzggMTcuNjU2OUg3OC43NThaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOTMuNTY2NiAxMy4zNDM0VjE0LjUyMjVDOTMuNTY2NiAxNy4zNjM3IDkxLjU3NjUgMTkuNzM3OSA4OC45MzY4IDIwLjI4NTVWMjIuMzYzM0g4Ni42MjM1VjIwLjI4NTVDODMuOTg2OSAxOS43Mzc5IDgxLjk5MzcgMTcuMzYzNyA4MS45OTM3IDE0LjUyMjVWMTMuMzQzNEg4NC4zMDdWMTQuNTIyNUM4NC4zMDcgMTYuNDY4MiA4NS44NjI5IDE4LjA1MzEgODcuNzgwMSAxOC4wNTMxQzg5LjY5NDEgMTguMDUzMSA5MS4yNTAxIDE2LjQ2ODIgOTEuMjUwMSAxNC41MjI1VjEzLjM0MzRIOTMuNTY2NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMDcuNTcyIDE3Ljg1MzRDMTA3LjU3MiAyMC4zNDAzIDEwNS41ODIgMjIuMzYzMyAxMDMuMTM2IDIyLjM2MzNIOTUuMjI5MlYxMy4zNDM0SDEwMy4xMzZDMTA1LjU4MiAxMy4zNDM0IDEwNy41NzIgMTUuMzY2NSAxMDcuNTcyIDE3Ljg1MzRaTTEwNS4yNTkgMTcuODUzNEMxMDUuMjU5IDE2LjY2NDcgMTA0LjMwOCAxNS42OTgzIDEwMy4xMzYgMTUuNjk4M0g5Ny41NDI2VjIwLjAxMTdIMTAzLjEzNkMxMDQuMzA1IDIwLjAxMTcgMTA1LjI1OSAxOS4wNDIxIDEwNS4yNTkgMTcuODUzNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMTAuNzc1IDE1LjY5ODNWMTYuODI5SDEyMC4wMzFWMTguODM1OUgxMTAuNzc1VjIwLjAxMTdIMTIwLjAzMVYyMi4zNjMzSDEwOC40NThWMTMuMzQzNEgxMjAuMDMxVjE1LjY5NUgxMTAuNzc1VjE1LjY5ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTI4Ljc1OCAxNy44MzQ5TDEzMy4yMyAyMi4zOTY0SDEyOS45ODJMMTI3LjEyIDE5LjUwMzZMMTI0LjI1OCAyMi4zOTY0SDEyMS4wMUwxMjUuNDgyIDE3LjgzNDlMMTIxLjA2MSAxMy4zMjE4SDEyNC4zTDEyNy4xMiAxNi4xNjYzTDEyOS45NCAxMy4zMjE4SDEzMy4xNzZMMTI4Ljc1OCAxNy44MzQ5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIwLjUwODQgMjEuOTQ4MkMxOS4wODIzIDIwLjU5NzkgMTcuOTM3MSAxOC45MzAyIDE4LjQ0NzMgMTcuMjk2N0MxOC42Njk1IDE2LjU5MDMgMTkuMDI3OCAxNi4xMTYzIDE5LjQ1NzggMTUuODEwOEMxOS44NjYzIDE1LjUyMTcgMTkuOTg4MSAxNC45NDE5IDE5Ljc0ODggMTQuNDg4OEMxOC45NTQ3IDEyLjk4MjEgMTcuNjUzMyAxMS43NzA0IDE1Ljk4MDcgMTEuMTcxM0MxNC4xMjE3IDEwLjUwMjEgMTIuMTc5NiAxMC43MDMzIDEwLjU1ODYgMTEuNTYzMkM4LjkzODk0IDEyLjQyMTcgNy42NDMyNSAxMy45Mzc0IDcuMDY1NjQgMTUuODk1OEM1Ljk1MzQxIDE5LjY5MzIgOC4wODYxNCAyMy43MDUzIDExLjcxODEgMjQuOTMxOUwyMi40MDAzIDI4LjU0MTZDMjMuNzIwNCAyOC45ODg3IDI1LjEzNjUgMjguMjM2IDI1LjU2MzYgMjYuODY3OUMyNS41NjUgMjYuODY3OSAyMC42MTE2IDIyLjEwNDcgMjAuNTA4NCAyMS45NDgyWk0xNS4yMjUzIDE4LjMyMjFMMTQuNTUxNyAxOC43MDIxQzE0LjI1MjEgMTguODcyIDE0LjAwODUgMTkuMTI5OSAxMy44NDM2IDE5LjQ0MTRMMTMuNDc1MyAyMC4xNDAzQzEzLjM0MiAyMC4zOTY3IDEyLjk4OTQgMjAuMzk2NyAxMi44NTMyIDIwLjE0MDNMMTIuNDg3OCAxOS40NDE0QzEyLjMyNDQgMTkuMTI5OSAxMi4wNzY0IDE4Ljg3MzUgMTEuNzc2OCAxOC43MDIxTDExLjEwNjEgMTguMzIyMUMxMC44NTk1IDE4LjE4MDUgMTAuODU5NSAxNy44MTM5IDExLjEwNjEgMTcuNjc1M0wxMS43NzY4IDE3LjI5MjJDMTIuMDc2NCAxNy4xMjIzIDEyLjMyMjkgMTYuODY3NSAxMi40ODc4IDE2LjU1NkwxMi44NTMyIDE1Ljg1NTVDMTIuOTg5NCAxNS42MDIyIDEzLjM0MiAxNS42MDIyIDEzLjQ3NTMgMTUuODU1NUwxMy44NDM2IDE2LjU1NkMxNC4wMDcgMTYuODY3NSAxNC4yNTIxIDE3LjEyMDggMTQuNTUxNyAxNy4yOTIyTDE1LjIyNTMgMTcuNjc1M0MxNS40NzA0IDE3LjgxMzkgMTUuNDcwNCAxOC4xODA1IDE1LjIyNTMgMTguMzIyMVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8yNDVfMTI4OTcpIi8+CjxwYXRoIGQ9Ik0zMS41MjkxIDExLjA2NjZMMjAuODQzOSA3LjQ1ODQxQzE5LjUyNTMgNy4wMTEzIDE4LjExMDcgNy43NjM5NCAxNy42ODM1IDkuMTMyMUMxNy42ODM1IDkuMTMyMSAyMi42MzU1IDEzLjg5NTMgMjIuNzM4NyAxNC4wNTE4QzI0LjE2NDggMTUuNDAyMSAyNS4zMTE1IDE3LjA2OTggMjQuNzk5OCAxOC43MDMzQzI0LjU3NzYgMTkuNDA5NyAyNC4yMTkzIDE5Ljg4MzYgMjMuNzg5MyAyMC4xODkyQzIzLjM4MDggMjAuNDc4MyAyMy4yNTkgMjEuMDU4MSAyMy40OTg0IDIxLjUxMTFDMjQuMjkyNCAyMy4wMTY0IDI1LjU5MSAyNC4yMjk2IDI3LjI2NjUgMjQuODMxN0MyOS4xMjU0IDI1LjQ5NzkgMzEuMDY3NSAyNS4yOTY3IDMyLjY4ODYgMjQuNDM2N0MzNC4zMDk2IDIzLjU3OTggMzUuNjA1MyAyMi4wNjU2IDM2LjE3ODYgMjAuMTA1N0MzNy4yOTUyIDE2LjMwNjggMzUuMTYxIDEyLjI5MzIgMzEuNTI5MSAxMS4wNjY2Wk0yOC44NTQ2IDE4LjU2NjJDMjguNjIwOSAxOC41Mjg5IDI4LjQzMzIgMTguMzMyMiAyOC4zOTczIDE4LjA5MDdDMjguMzQxNCAxNy43MDQ3IDI4LjY1ODIgMTcuMzc4MyAyOS4wMjk0IDE3LjQzNjVDMjkuMjYwMiAxNy40NzM3IDI5LjQ0NzkgMTcuNjcwNCAyOS40ODUyIDE3LjkxMTlDMjkuNTQyNSAxOC4yOTc5IDI5LjIyNzIgMTguNjIyOCAyOC44NTQ2IDE4LjU2NjJaTTMwLjYyNDcgMTkuMjc4NkMzMC41OTE3IDE5LjUxODUgMzAuMzk5NiAxOS43MTM3IDMwLjE3MDMgMTkuNzUyNUMyOS43OTkxIDE5LjgxMzYgMjkuNDgyMyAxOS40ODQyIDI5LjU0MTEgMTkuMDk4MkMyOS41NzY5IDE4Ljg1NTMgMjkuNzY2MSAxOC42NjAxIDI5Ljk5NjkgMTguNjIyOEMzMC4zNjY3IDE4LjU2MzIgMzAuNjgzNCAxOC44OTExIDMwLjYyNDcgMTkuMjc4NlpNMjkuOTk1NSAxNy4zNzY4QzI5Ljc2NDcgMTcuMzQyNiAyOS41NzY5IDE3LjE0MjkgMjkuNTM5NyAxNi45MDI5QzI5LjQ4MDkgMTYuNTE2OSAyOS43OTc3IDE2LjE4NzUgMzAuMTY4OSAxNi4yNDg2QzMwLjM5OTYgMTYuMjg1OSAzMC41OTAzIDE2LjQ4MjYgMzAuNjIzMiAxNi43MjI2QzMwLjY4MzQgMTcuMTA4NiAzMC4zNjY3IDE3LjQzNzkgMjkuOTk1NSAxNy4zNzY4Wk0zMS4xMzc4IDE4LjU2NjJDMzAuOTA0MiAxOC41Mjg5IDMwLjcxNjQgMTguMzMyMiAzMC42ODA2IDE4LjA5MDdDMzAuNjI0NyAxNy43MDQ3IDMwLjkzODYgMTcuMzc4MyAzMS4zMDk4IDE3LjQzNjVDMzEuNTQzNCAxNy40NzM3IDMxLjczMTIgMTcuNjcwNCAzMS43NjcgMTcuOTExOUMzMS44MjQzIDE4LjI5NzkgMzEuNTA3NiAxOC42MjI4IDMxLjEzNzggMTguNTY2MloiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8yNDVfMTI4OTcpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMjQ1XzEyODk3IiB4MT0iNi43NzAyNiIgeTE9IjEwLjc1MjEiIHgyPSIyNS44MTcyIiB5Mj0iMjguNDIzNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDRFMkYwIi8+CjxzdG9wIG9mZnNldD0iMC41MTM3OTQiIHN0b3AtY29sb3I9IiMxMkI0RkEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQTI0MEZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8yNDVfMTI4OTciIHgxPSIxNy42NzA2IiB5MT0iNy4zMjkzOCIgeDI9IjM2LjcxNzUiIHkyPSIyNS4wMDExIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkI4MDEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRDQwMENCIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==',
      link: 'https://playdex.io/',
      backgroundImage: 'linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)',
    },
    {
      title: 'Premio',
      stat: 'A hypercasual gaming e-sports gaming app -  play and win prizes!',
      iconSrc: 'https://framerusercontent.com/images/PLmwqdKjBNYtZan6Sk7urHTODJ8.png',
      link: 'https://playwinpremio.com/',
      bg: 'linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)',
    },
    {
      title: 'VeriFi',
      stat: 'A Decentralized Ecosystem for streamlining digital assets',
      iconSrc: 'https://verifi-dapp.vercel.app/favicon.ico',
      link: 'https://verifi-dapp.vercel.app/',
      bg: 'linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)',
    },
    {
      title: 'Grohax',
      stat: 'An AI-Powered Growth Hacking software dedicated to help you finding more users',
      iconSrc: 'https://framerusercontent.com/images/Qva9LsR125upLyFNJrTWV0jhx54.png',
      link: 'https://grohax.pro/',
      bg: 'linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)',
    },
    
  ];
  
  function StatsCard(props) {
    const { title, stat, iconSrc, link } = props;
    return (
      <Link href={link} isExternal>
        <Stat
          px={{ base: 2, md: 2 }}
          py={7}
          shadow="xl"
          border="1px solid"
          borderColor={useColorModeValue('gray.800', 'white')}
          rounded="lg"
          _hover={{ boxShadow: 'md' }}
        >
          <Flex align="start">
          <Box minW={'20vw'}pr={{ base: 2, md: 18 }}>
            <Image src={iconSrc} alt={title} boxSize="15vw" objectFit="inherit"/>
          </Box>
            <VStack align="start" spacing={1} pl={{ base: 0, md: 2 }}>
              <StatLabel color="white" fontSize="xl" fontWeight="bold" isTruncated>
                {title}
              </StatLabel>
              <StatNumber color="#C2B498" fontSize="md" fontWeight="medium">
                {stat}
              </StatNumber>
              {/* <Box minW={'20vw'} pr={{ base: 2, md: 18 }}>
              <Box className="iframe-container" style={{ height: '100%', overflow: 'hidden' }}>
                <iframe src={link} frameBorder="0" style={{ width: '100%', height: '15vw', minHeight: '200px' }} allowFullScreen></iframe>
              </Box>
            </Box> */}
            </VStack>
          </Flex>
        </Stat>
      </Link>
    );
  }

  export default function BasicStatistics() {
    return (
      <Box bg="black" maxW="9xl" mx="auto" pt={5} px={{ base: 1, sm: 1, md: 1 }} p={10}>
        <chakra.h1 textAlign="center" fontSize="4xl" color={"#C2B498"} py={10} fontWeight="bold">Projects</chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={{ base: 5, lg: 2 }}>
          {STATISTICS_CONTENT.map((content, index) => (
            <StatsCard
              key={index}
              title={content.title}
              stat={content.stat}
              iconSrc={content.iconSrc}
              link={content.link}
              // bg={content.bg}
            />
          ))}
        </SimpleGrid>
      </Box>
    );
  }