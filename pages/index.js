import Head from "next/head";
import { Container, Box } from "@chakra-ui/react";
import { Layout, Header, Hero } from "../components";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Hero />
    </Layout>
  );
}
