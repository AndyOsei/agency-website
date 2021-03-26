import { Flex, Box, Image, VStack, Text } from "@chakra-ui/react";
import BgBanner from "../BgBanner";
import Button from "../Button";

// export default function Banner() {
//   return (
//     <Box position="relative" my="100" maxW="1440px">
//       <Box position="absolute" maxW="1440px">
//         <BgBanner />
//       </Box>
//       <Box position="absolute">
//         <Flex align="center">
//           <VStack spacing={8}>
//             <Text>We can help you to grow up your online business</Text>
//             <Button boxShadow="lg" bg="white" color="blue.400">
//               <Text
//                 fontSize="0.938rem"
//                 lineHeight="1.125rem"
//                 fontWeight="medium"
//               >
//                 CONTACT NOW
//               </Text>
//             </Button>
//           </VStack>
//         </Flex>
//       </Box>
//     </Box>
//   );
// }

export default function Banner() {
  return (
    <Box my="100" position="relative" width="120%">
      <Image position="absolute" src="/images/banner2.png" objectFit="cover" />
      <Box position="absolute">
        <VStack spacing={8}>
          <Text>We can help you to grow up your online business</Text>
          <Button boxShadow="lg" bg="white" color="blue.400">
            <Text fontSize="0.938rem" lineHeight="1.125rem" fontWeight="medium">
              CONTACT NOW
            </Text>
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
