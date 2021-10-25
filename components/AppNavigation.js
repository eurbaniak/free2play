import React, { useState } from "react";
import { Box, Flex, Center } from "native-base";
import NavigationButton from "./NavigationButton";

const AppNavigation = () => {
  const [selected, setSelected] = useState("/");
  return (
    <Box w="100%" h="100" bg="dark.100" color="secondary.50" shadow="10">
      <Flex direction="row" justify="space-around" align="center">
        <Center py={5}>
          <NavigationButton
            icon={"home"}
            sel={"/"}
            selected={selected}
            setter={setSelected}
            path="/"
          />
        </Center>
        <Center>
          <NavigationButton
            icon={"google-controller"}
            sel={"/games"}
            selected={selected}
            setter={setSelected}
            path="/games"
          />
        </Center>
        <Center>
          <NavigationButton
            icon={"book-open-outline"}
            sel={"/view"}
            selected={selected}
            setter={setSelected}
            // path="/xx"
          />
        </Center>
        <Center>
          <NavigationButton
            icon={"bookmark"}
            sel={"/fav"}
            selected={selected}
            setter={setSelected}
            // path="/fav"
          />
        </Center>
      </Flex>
    </Box>
  );
};
export default AppNavigation;
