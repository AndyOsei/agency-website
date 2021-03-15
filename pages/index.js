import Head from "next/head";
import { Container, Box, Image } from "@chakra-ui/react";
import { Layout, Header, Hero, Services } from "../components";

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
    </Layout>
  );
}
