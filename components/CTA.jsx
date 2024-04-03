'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'90vh'}
    //   backgroundImage={
    //     '../assets/images/video/video.mov'
    //   }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bg={'black'}>
        <Stack maxW={'full'} align={'flex-start'} spacing={5}>
        <Text
            color={'#C2B498'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            hi 👋, i am troy
          </Text>
          <Text
            color={'white'}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '2xl', md: '4xl' })}>
            i build stuff. 
          </Text>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '2xl', md: '4xl' })}>
            scroll down to see more of what i do 👀
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
                _hover={{ bg: 'linear-gradient(78deg, rgba(159, 122, 234, 1) 0%, rgb(255, 97, 218) 50%)' }}>
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
                _hover={{ bg: 'linear-gradient(78deg, rgba(159, 122, 234, 1) 0%, rgb(255, 97, 218) 50%)' }}>
                {/* leftIcon={<PlayIcon h={4} w={4} color={'gray.00'} />}  */}
                Products ⚙️
              </Button>
            </a>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}