import React from "react";
import { Center, NativeBaseProvider } from "native-base";
import AppHeader from "./components/AppHeader";
import Favourite from "./components/Favourites";
import Explore from "./components/Explore";
import AppNavigation from "./components/AppNavigation";
import { theme } from "./themeConfig";

const config = {
  initialColorMode: "dark",
};

export default function App() {
  return (
    <NativeBaseProvider theme={theme} config={config}>
      <Center
        _dark={{ bg: "dark.100", _text: { color: "secondary.100" } }}
        _light={{ bg: "neutral.50" }}
        flex={1}
      >
        <AppHeader />
        <Favourite />
        <Explore />
        <AppNavigation />
      </Center>
    </NativeBaseProvider>
  );
}
