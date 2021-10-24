import { extendTheme, themeTools } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#2DBA68",
      100: "#1E9F5F",
      200: "#0F7E4E",
    },
    secondary: {
      50: "#962628",
      100: "#7D1D1F",
      200: "#5A0C0E",
    },
    neutral: {
      50: "#F5F5F5",
      100: "#CACACA",
      200: "#979797",
    },
    dark: {
      50: "#252C3A",
      100: "#1A2232",
      200: "#0E1220",
    },
  },
  components: {
    Heading: {
      baseStyle: (props) => {
        return {
          color: themeTools.mode("dark.100", "neutral.100")(props),
        };
      },
    },
    Text: {
      baseStyle: (props) => {
        return {
          color: themeTools.mode("dark.100", "neutral.50")(props),
        };
      },
    },
  },
});
