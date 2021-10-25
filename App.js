import React from "react";
import { Center, NativeBaseProvider } from "native-base";
import { theme } from "./themeConfig";
import { NativeRouter, Route, Switch } from "react-router-native";
import Home from "./components/Home";
import Games from "./components/Games";
import AppHeader from "./components/AppHeader";
import AppNavigation from "./components/AppNavigation";
import ViewGame from "./components/ViewGame";

const config = {
  initialColorMode: "dark",
};

export default function App() {
  return (
    <NativeRouter>
      <NativeBaseProvider theme={theme} config={config}>
        <Center
          _dark={{ bg: "dark.100", _text: { color: "secondary.100" } }}
          _light={{ bg: "neutral.50" }}
          flex={1}
        >
          <AppHeader />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/games" component={Games} />
            <Route exact path="/view" component={ViewGame} />
          </Switch>
          <AppNavigation />
        </Center>
      </NativeBaseProvider>
    </NativeRouter>
  );
}
