import React from "react";
import { Center, NativeBaseProvider } from "native-base";
import { theme } from "./themeConfig";
import { NativeRouter, Route } from "react-router-native";
import Home from "./components/Home";

const config = {
  initialColorMode: "dark",
};

export default function App() {
  return (
    <NativeBaseProvider theme={theme} config={config}>
      <NativeRouter>
        <Center
          _dark={{ bg: "dark.100", _text: { color: "secondary.100" } }}
          _light={{ bg: "neutral.50" }}
          flex={1}
        >
          <Route path="/" exact component={Home} />
        </Center>
      </NativeRouter>
    </NativeBaseProvider>
  );
}
