// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      ".js-focus-visible :focus:not([data-focus-visible-added])": {
        outline: "none",
        boxShadow: "none",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        _focusVisible: {
          boxShadow: "none",
        },
      },
      defaultProps: {
        colorScheme: "green", // default is gray
      },
    },
    Input: {
      baseSyle: {
        borderColor: "red",
      },
    },
  },
});

export default theme;
