import { Button as ChakraButton } from "@chakra-ui/react";

export default function Button({ children, ...rest }) {
  return (
    <ChakraButton borderRadius="25px" {...rest}>
      {children}
    </ChakraButton>
  );
}
