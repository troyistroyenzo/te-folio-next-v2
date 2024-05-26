import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';

  import Spline from '@splinetool/react-spline';
  
  const CONTENT = [
    // {
    //   title: 'My Ethos',
    //   description: 'I live by four words: Build. Venture. Create. Train',
    //   imageSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1707116159/IMG_3974_jysu47.jpg',
    //   imageWidth: '75%', // Adjust as needed
    // },
    {
      title: 'Build.',
      description: 'I help build early stage startups, specializing in crypto and gaming projects.',
      imageSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1716715012/SEAN_KEN_3_hbrv9i.png',
      imageWidth: '75%', // Adjust as needed
    },
    {
      title: 'Venture',
      description: 'I venture into different startups, projects and businesses. My goal is to provide value and solve particular problems in the industry.',
      imageSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1716711169/5_tq73qo.png',
      imageWidth: '75%', // Adjust as needed
    },
    {
      title: 'Create',
      description: 'I create content through visuals & stoyytelling, mainly on instagram',
      imageSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1716711169/4_gu0iba.png',
      imageWidth: '75%', // Adjust as needed
    },
    {
      title: 'Train',
      description: 'I train like as if there will be a war tomorrow.',
      imageSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1716707622/SEAN_KEN_2_xsf0kr.png',
      imageWidth: '75%', // Adjust as needed
    },
    
  ];
  
  export default function Simple() {
    return (
      <Container maxW={'100%'} background={'black'} padding={10}>
        {CONTENT.map((content, index) => (
          <SimpleGrid
            key={index}
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 90 }}
            py={{ base: 18, md: 24 }}
          >
            <Stack direction="column" align="center" justify="center">
            <Heading
                  fontFamily={'Inter'}
                  lineHeight={1.1}
                  fontWeight={700}
                  letterSpacing={'-2.25'}
                  color={'#C2B498'}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                >

                </Heading>
              <Box as={'header'} textAlign="center">
                <Heading
                  fontFamily={'Inter'}
                  lineHeight={1.1}
                  fontWeight={700}
                  letterSpacing={'-2.25'}
                  color={'#C2B498'}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                >
                  {content.title}
                </Heading>
                <br />
                <Text
                  fontFamily={'Inter'}
                  color={'white'}
                  fontWeight={500}
                  fontSize={'1xl'}
                >
                  {content.description}
                </Text>
              </Box>
            </Stack>
            <Flex align="center" justify="center">
              <Image
                rounded={'md'}
                alt={'product image'}
                src={content.imageSrc}
                align={'center'}
                // w={content.imageWidth}
              />
              
            </Flex>
         
          </SimpleGrid>
          
        ))}
      </Container>
      
    );
  }
  