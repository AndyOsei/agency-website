import { Flex } from "@chakra-ui/react";

export default function Layout({ children, ...rest }) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1440px" }}
      py="15"
      m="0 auto"
      {...rest}
    >
      {children}
    </Flex>
  );
}
