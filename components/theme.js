import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "roboto, sans-serif",
    heading: "roboto, sans-serif",
    mono: "roboto, monospace",
  },
  colors: {
    blue: {
      400: "#1B8CFD",
      900: "#1E2F4F",
    },
  },
});

export default theme;
