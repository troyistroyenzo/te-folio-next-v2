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

  export default function Simple() {
    return (
      <Container maxW={'7xl'} background={'black'}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }}>
          <Stack p={15} direction="column" align="center" justify="center">
            <Box as={'header'} textAlign="center">
              <Heading
                fontFamily={'inter'}
                lineHeight={1.1}
                fontWeight={700}
                letterSpacing={'-2.25'}
                backgroundImage='linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)'
                backgroundClip='text'
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                Explore Real-time Transactions
              </Heading>
              <br />
              <Text
                fontFamily={'inter'}
                color={'white'}
                fontWeight={500}
                fontSize={'1xl'}>
                VeriFi introduces a dynamic ledger that allows you to witness your transactions unfold in real-time. Experience the power of immediacy as your transactions are securely recorded and updated on the ledger, providing you with a
                 live and transparent view of your financial activities.
              </Text>
            </Box>
          </Stack>
          <Flex align="center" justify="center">
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                'https://res.cloudinary.com/dlgyqy69b/image/upload/v1705390937/167295a8-74aa-42b0-9b24-d53d9cd5bfd5_bw5lpb.png'
              }
              align={'center'}
              w={'full'}
            />
          </Flex>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }}>
  <Flex align="center" justify="center">
    <Image
      rounded={'md'}
      alt={'product image'}
      src={
        'https://res.cloudinary.com/dlgyqy69b/image/upload/v1705394252/d42a0d90-4264-41ec-8e87-d60dc5aac856_enpmej.png'
      }
      align={'center'}
      w={'full'}
    />
  </Flex>
  <Stack p={15} direction="column" align="center" justify="center">
    <Box as={'header'} textAlign="center">
      <Heading
        fontFamily={'inter'}
        lineHeight={1.1}
        fontWeight={700}
        letterSpacing={'-2.25'}
        backgroundImage='linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)'
        backgroundClip='text'
        fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
        Effortlessly Connect Your API
      </Heading>
      <br />
      <Text
        fontFamily={'inter'}
        color={'white'}
        fontWeight={500}
        fontSize={'1xl'}>
        VeriFi simplifies the process of securing your transactions by providing seamless API integration. Connecting your API to our platform is a straightforward and user-friendly experience, allowing 
        you to initiate robust transaction protection effortlessly.</Text>
    </Box>
  </Stack>
</SimpleGrid>


        
      </Container>
    );
  }
  