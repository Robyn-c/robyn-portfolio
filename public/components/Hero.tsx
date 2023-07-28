'use client'
import { Flex, Heading, Highlight, Text, Box, Img, keyframes } from "@chakra-ui/react";
export function Hero() {
  const animationKeyframes = keyframes`
  from { transform: rotate(0); }
  to { transform:  rotate(360deg);}
`;
  const animation = `${animationKeyframes} 10s linear infinite`;
  return(
  <Flex >
    <Flex  py='72' px='32' justifyContent='center' gap='5' direction='column' maxW='780px'>
      <Heading as='h1' size='3xl'>
        <Highlight query='Robyn' styles={{ color: 'yellow.300' }}>
          Hi, I&apos;m Robyn! 👋
        </Highlight>
      </Heading>
      <Box>
        <Text fontSize='lg'>I&apos;m a Fullstack Web Developer Based in Chile 🐱‍💻</Text>
        <Text fontSize='lg'>I have a solid foundation with React, Express.js, MongoDB and working with APIs. </Text>
      </Box>
    </Flex>
    <Box >
      <Img animation={animation} right='-100' bottom='150'  pos='absolute' boxSize='400px' src='/moon.svg' />
    </Box>
  </Flex>
)
}


