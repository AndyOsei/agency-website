import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "blue.900",
      },
    },
  },
  fonts: {
    body: "roboto, sans-serif",
    heading: "roboto, sans-serif",
    mono: "roboto, monospace",
  },
  colors: {
    blue: {
      300: "#3AA3FF",
      400: "#1B8CFD",
      500: "#0682FF",
      900: "#1E2F4F",
    },
  },
});

export default theme;
