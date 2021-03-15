import Image from "next/image";
import { Flex, Text, VStack, Box, Spacer, Heading } from "@chakra-ui/react";
import { Button } from "../../components";

export default function Hero() {
  return (
    <Flex pt={8}>
      <VStack spacing={10} align="flex-start" maxW="600px" mr="30" mt={8}>
        <Heading as="h1" size="4xl" lineHeight="shorter">
          The Best Agency For Your Creative Business
        </Heading>
        <Text fontSize="1rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Button bg="blue.400" color="white">
          <Text fontWeight="medium" fontSize="15px">
            Get Started
          </Text>
        </Button>
      </VStack>
      <Box maxW="755px">
        <Image src="/images/hero.png" width={752} height={694} />
      </Box>
    </Flex>
  );
}
