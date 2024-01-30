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
      title: 'Who Am I?',
      description: 'I build things, I create and I venture. This is where you can find all the things I am passionate about.',
      imageSrc: 'https://res.cloudinary.com/dlgyqy69b/image/upload/v1706345091/troy-expanded-dp_phhhrh.png',
      imageWidth: '50%', // Adjust as needed
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
                  fontFamily={'inter'}
                  lineHeight={1.1}
                  fontWeight={700}
                  letterSpacing={'-2.25'}
                  backgroundImage='linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)'
                  backgroundClip='text'
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                >
                  {content.title}
                </Heading>
                <br />
                <Text
                  fontFamily={'inter'}
                  color={'#C2B498'}
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
  