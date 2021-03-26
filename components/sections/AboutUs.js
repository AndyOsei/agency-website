import { Flex, VStack, Text, Box, Heading, Image } from "@chakra-ui/react";
import { Button } from "../../components";

export default function AboutUs() {
  return (
    <Flex direction="row" mt="100">
      <Box w="40%">
        <VStack spacing={8} align="flex-start">
          <Text color="blue.400">ABOUT US</Text>
          <Heading
            as="h2"
            fontSize="3.125rem"
            lineHeight="3.625rem"
            fontWeight="bold"
          >
            We Will Plan, Design and Developing & Maintain Project
          </Heading>
          <Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or- less normal
            distribution of letters.
          </Text>
          <Button boxShadow="lg" bg="blue.400" color="white">
            <Text fontSize="0.938rem" lineHeight="1.125rem" fontWeight="normal">
              READ MORE
            </Text>
          </Button>
        </VStack>
      </Box>
      <Box w="20%" />
      <Box w="40%">
        <Box w="100%">
          <Box position="relative">
            <Image
              position="absolute"
              src="/images/blob.png"
              objectFit="cover"
            />
            <Image
              position="absolute"
              top="20"
              right="50"
              src="/images/undraw_note_list_etto.png"
              objectFit="cover"
            />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
