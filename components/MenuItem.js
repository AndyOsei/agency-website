import { Box, Text } from "@chakra-ui/react";

export default function MenuItem({ title, active = false, ...rest }) {
  return (
    <Box as="a" color={active ? "blue.400" : "blue.900"} {...rest}>
      <Text fontSize="md" fontWeight="medium" letterSpacing="wider">
        {title}
      </Text>
    </Box>
  );
}
