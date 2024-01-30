import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 50000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const cards = [
  {
    title: 'SB19 Live at the Araneta Colisuem (2022)',
    video: 'https://www.youtube.com/watch?v=_Npc61m8NiI&ab_channel=TroyEnzo',
    thumbnail:
      '',
    alt: 'Director, Lead Videographer, Video Editor',
  },
  {
    title: 'SB19 Live at the Araneta Colisuem (2022)',
    video: 'https://www.youtube.com/watch?v=_Npc61m8NiI&ab_channel=TroyEnzo',
    thumbnail:
      '',
    alt: 'Design Projects 1 Alt Text',
  },
];

export default function VideoCaptionCarousel() {
  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'} bg={'black'}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.thumbnail})`}
          >
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                
                <Heading fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }} color='#C2B498'>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color='#C2B498'>
                  {card.alt}
                </Text>
                <ReactPlayer
                  url={card.video}
                  width="100%"
                  height="20vh"
                  controls
                  playing
                  loop
                  muted
                />
              </Stack>
              
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
