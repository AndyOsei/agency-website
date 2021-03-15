import { Stack, VStack, HStack, Text, Heading, Box } from "@chakra-ui/react";
import { Button } from "../../components";
import { DevIcon, ProductIcon, ResearchIcon, RankIcon } from "../../components";

export default function Services() {
  return (
    <HStack spacing="100px" py="100px">
      <HStack spacing={8}>
        <VStack spacing={8}>
          <ServiceCard
            icon={<DevIcon />}
            title="Development"
            description="Lorem ipsum dummy text are use inprint and website industry are usually
use in this section."
            active
          />
          <ServiceCard
            icon={<ProductIcon />}
            title="Product Design"
            description="Lorem ipsum dummy text are use inprint and website industry are usually
use in this section."
          />
        </VStack>
        <VStack spacing={8} mb="-200px">
          <ServiceCard
            icon={<ResearchIcon />}
            title="UI/UX Research"
            description="Lorem ipsum dummy text are use inprint and website industry are usually
use in this section."
          />
          <ServiceCard
            icon={<RankIcon />}
            title="Digital Marketing"
            description="Lorem ipsum dummy text are use inprint and website industry are usually
use in this section."
          />
        </VStack>
      </HStack>
      <VStack spacing={8} align="flex-start">
        <Text
          color="blue.400"
          fontSize="1.25rem"
          fontWeight="medium"
          lineHeight="2.375rem"
          mt="28"
        >
          SERVICES
        </Text>
        <Heading
          as="h2"
          fontSize="3.125rem"
          lineHeight="3.625rem"
          fontWeight="bold"
          maxW="499px"
        >
          We Provide Awesome Services to our Customers
        </Heading>
        <Text maxW="394px" fontSize="md" lineHeight="1.875rem">
          The point of using Lorem Ipsum is that it has a more-or- less normal
          distribution of letters.
        </Text>
        <Button
          variant="outline"
          color="blue.400"
          border="2px"
          borderColor="blue.400"
        >
          <Text fontSize="0.938rem" lineHeight="1.125rem" letterSpacing="0">
            MORE DETAILS
          </Text>
        </Button>
      </VStack>
    </HStack>
  );
}

function ServiceCard({ title, description, icon, active = false }) {
  return (
    <Stack
      spacing={5}
      p="5"
      w="270px"
      h="245px"
      bg="transparent"
      color={active ? "white" : "blue.900"}
      boxShadow={`0px 6px 20px ${active ? "#1B8CFD80" : "#1B8CFD14"}`}
      {...(active && {
        bgGradient: "linear(to-br, blue.500 0%, blue.300 100%)",
      })}
      borderRadius="5px"
      align="center"
    >
      <Box>{icon}</Box>
      <Text
        fontSize="1.563rem"
        fontWeight="bold"
        lineHeight="1.8125rem"
        align="center"
      >
        {title}
      </Text>
      <Text fontSize="1rem" lineHeight="1.625rem">
        {description}
      </Text>
    </Stack>
  );
}
