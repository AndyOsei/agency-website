import Image from "next/image";
import { Flex, Box } from "@chakra-ui/react";
import { MenuItem, Menu } from "../../components";

export default function Header() {
  return (
    <Flex as="nav" justify="space-between" width="100%">
      <Box>
        <Image src="/images/logo.png" alt="Logo" width={116} height={32} />
      </Box>
      <Menu>
        <MenuItem mr="60px" title="HOME" />
        <MenuItem mr="60px" title="ABOUT US" />
        <MenuItem mr="60px" title="SERVICES" />
        <MenuItem title="PORTFOLIO" />
      </Menu>
    </Flex>
  );
}
