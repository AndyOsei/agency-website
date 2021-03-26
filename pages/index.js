import Head from "next/head";
import { Container, Box, Image, Text, Flex } from "@chakra-ui/react";
import { Layout, Header, Hero, Services, AboutUs, Banner } from "../components";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Box>
        <Image
          src="/images/company_logo.png"
          alt="company logo"
          objectFit="cover"
        />
      </Box>
      <Services />
      <AboutUs />
      <Banner />
    </Layout>
  );
}
