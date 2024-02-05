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
  
  const CONTENT = [
    {
      title: 'About Me',
      description: 'Hi, I am Troy. Builder, Artist, and Entrepreneur.',
      imageSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1706345091/troy-expanded-dp_phhhrh.png',
      imageWidth: '50%', // Adjust as needed
    },
    {
      title: 'My Industry',
      description: 'I mainly work in the web3 & fintech startup community',
      imageSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1707116159/IMG_3974_jysu47.jpg',
      imageWidth: '75%', // Adjust as needed
    },
    {
      title: 'Fullstack Engineer',
      description: 'I build full-stack applications both in the web2 and web3 space',
      imageSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1707116143/Troy_cover_photo_for_a_feature_related_to_database_collection_m_7f424921-6052-4718-a632-049b59f4ec50_ixnt18.png',
      imageWidth: '75%', // Adjust as needed
    },
    {
      title: 'Content Creator',
      description: 'I create meaninful content',
      imageSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1707116159/ryanmbarber_Create_an_illustration_of_a_fantasy_themed_mural_fe_9fd25c90-ac77-4b74-8fbe-8827af450339_oclck3.png',
      imageWidth: '75%', // Adjust as needed
    },
    {
      title: 'Startup Venturer',
      description: 'I venture into different businesses that provide value to people',
      imageSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1707116119/Troy_scattered_abstract_elements_with_negative_space_chaotic_mu_ac2b3041-e29b-4f3c-8bf8-205fab9d67e6_uier9u.png',
      imageWidth: '75%', // Adjust as needed
    },
    // {
    //   title: 'Entrepreneur',
    //   description: 'I like ',
    //   imageSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1705394252/d42a0d90-4264-41ec-8e87-d60dc5aac856_enpmej.png',
    //   imageWidth: '50%', // Adjust as needed
    // },
  ];
  
  export default function Simple() {
    return (
      <Container maxW={'100%'} background={'black'} padding={0}>
        {CONTENT.map((content, index) => (
          <SimpleGrid
            key={index}
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 90 }}
            py={{ base: 18, md: 24 }}
          >
            <Stack p={15} direction="column" align="center" justify="center">
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
                w={content.imageWidth}
              />
            </Flex>
          </SimpleGrid>
        ))}
      </Container>
    );
  }
  