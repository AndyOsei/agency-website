import { Button as ChakraButton } from "@chakra-ui/react";

export default function Button({ children, ...rest }) {
  return (
    <ChakraButton borderRadius="25px" bg="blue.400" color="white" {...rest}>
      {children}
    </ChakraButton>
  );
}
