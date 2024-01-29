'use client';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

const accordionItems = [
  {
    question: 'How can I contact you?',
    answer: 'I am setting up that, but for now, you can send me an email at yortozne@gmail.com',
  },
  {
    question: 'What services do you offer?',
    answer:
      'From hosting, multimedia, programming, teaching.',
  },
  {
    question: 'Why is the website still incomplete?',
    answer:
      'I am still building this site ;)',
  },
];

export default function SimpleAccordion() {
  return (
    <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      color={'white'}
      bg={useColorModeValue('black', 'gray.800')}>
      <Container>
        <Accordion allowMultiple width="100%" maxW="1xl" rounded="lg">
          {accordionItems.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}>
                <Text fontSize="md">{item.question}</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">{item.answer}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Flex>
  );
}
